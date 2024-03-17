/*
    Author: Krypek
    Created: 1/29/2024

    Description: Adds variable support to detect when player/enemy combatants are defeated in PVP
                 duels involving multiple opponents on each team.

                 When the player dies, tmp.pvp_player_defeated is set to true.
                 Else, tmp.pvp_ENTITY_NAME_defeated is set to true.
                 You handle setting these values to false yourself, it doesn't reset between rounds.

                 Other features:
                 - Speeds up game when player is defeated in PVP but has party members remaining.
                 - Hides defeated enemy healthbars.
                 - Improved/fixed PVP GUI rendering for scoreboard.
*/

sc.PartyModel.inject({
    _spawnPartyMemberEntity(partyMemberName, showEffects, idx, npc) {
        this.parent(partyMemberName, showEffects, idx, npc)
        /* fix sc.PartyMemberEntity not inheriting their name from ig.ENTITY.NPC */
        if (npc) this.partyEntities[partyMemberName].name = npc.name
    },
})

// @ts-expect-error
sc.PVP_MESSAGE.COMBATANT_DEFEATED = 4
// @ts-expect-error
sc.PVP_MESSAGE.ROUND_START = 5
sc.PvpModel.inject({
    onPvpCombatantDefeat(combatant) {
        const name = combatant ? (combatant == ig.game.playerEntity ? 'player' : combatant.name) : ''
        ig.vars.set('tmp.pvp_' + name + '_defeated', true)
        sc.Model.notifyObserver(this, sc.PVP_MESSAGE.COMBATANT_DEFEATED, combatant)
        /* speed up the game when the player is defeated */
        if (name == 'player' && sc.pvp.enemies.length > 1) setTimeout(() => {
            if (combatant.isDefeated()) {
                ig.system.skipMode = true
            }
        }, 3000)
        return this.parent(combatant)
    },
    startNextRound(autoContinue) {
        ig.system.skipMode = false
        this.parent(autoContinue)
        sc.Model.notifyObserver(this, sc.PVP_MESSAGE.ROUND_START, null)
    },
    start(winPoints, enemies) {
        sc.SUB_HP_EDITOR.PVP.hpBars = []
        this.parent(winPoints, enemies)
    },
})
sc.SUB_HP_EDITOR.PVP.orderGlobal = 0
sc.SUB_HP_EDITOR.PVP.hpBars = []
sc.SUB_HP_EDITOR.PVP.rearrangeAll = function () {
    sc.SUB_HP_EDITOR.PVP.hpBars = sc.SUB_HP_EDITOR.PVP.hpBars.sort((a, b) => a.order - b.order)
    for (let i = 0; i < sc.SUB_HP_EDITOR.PVP.hpBars.length; i++) {
        const bar = sc.SUB_HP_EDITOR.PVP.hpBars[i]
        bar.setPos(bar.hook.pos.x, i * 15 + 5)
        //Note: XTM's original spacing was bar.setPos(bar.hook.pos.x, i * 25 + 5)
    }
}
sc.SUB_HP_EDITOR.PVP.inject({
    init(enemy) {
        this.parent(enemy)
        this.order = sc.SUB_HP_EDITOR.PVP.orderGlobal++
        sc.SUB_HP_EDITOR.PVP.hpBars.push(this)
        sc.SUB_HP_EDITOR.PVP.rearrangeAll()
    },
    remove(immediately) {
        this.parent(immediately)
        sc.SUB_HP_EDITOR.PVP.hpBars.erase(this)
        sc.SUB_HP_EDITOR.PVP.rearrangeAll()
    },
})

ig.GUI.StatusBar.inject({
    init(combatant) {
        sc.Model.addObserver(sc.pvp, this)
        this.parent(combatant)
    },
    modelChanged(model, message, data) {
        this.parent(model, message, data)
        if (model == sc.pvp) {
            if (message == sc.PVP_MESSAGE.COMBATANT_DEFEATED) {
                if (sc.pvp.enemies.length > 1 && this.target instanceof ig.ENTITY.Combatant && this.target.isDefeated()) {
                    this.subHpHandler && this.subHpHandler.remove()
                    this.doStateTransition('HIDDEN', false, true)
                }
            } else if (message == sc.PVP_MESSAGE.ROUND_START) {
                if (this.target instanceof ig.ENTITY.Combatant && this.hook.currentStateName == 'HIDDEN') {
                    // @ts-expect-error
                    this.subHpType = 'forceUpdateSubHpHandlerBySettingThisVariableToNonsense'
                    this.updateSubHpHandler()
                    this.doStateTransition('DEFAULT')
                }
            }
        }
    },
})

sc.CombatUpperHud.inject({
    init() {
        this.parent()
        sc.Model.addObserver(sc.pvp, this)
    },
    modelChanged(model, message, data) {
        this.parent && this.parent(model, message, data)
        if (model == sc.pvp) {
            if (message == sc.PVP_MESSAGE.STARTED) {
                const winPointsLen = sc.pvp.winPoints * 10
                const len = Math.max(sc.party.getPartySize() + 1, sc.pvp.enemies.length)
                let w = 50 + winPointsLen + len * 16 * 2
                this.sub.pvp.setSize(w, 20)
            }
        }
    },
})
