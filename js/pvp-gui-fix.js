ig.EVENT_STEP.START_PVP_BATTLE.inject({
  init(a) {
    this.parent(a);

    let b = 110 + sc.pvp.winPoints * 10;
    b += (sc.party.getPartySize() + 1) * 16;
    b += a.enemies.length * 16;
    
    const combatHudGui = ig.gui.guiHooks.find(ui => 
      ui.gui instanceof sc.CombatHudGui
    );

    combatHudGui.gui.upperGui.sub.pvp.setSize(b, 20);
  },

  start(a, b) {
    this.parent(a, b);

    for (let i = 0; i < this.enemies.length; i++) {
      let enemy = ig.Event.getEntity(this.enemies[i], b);
      let ui = enemy.statusGui.subHpHandler;
      ui.setPos(ui.hook.pos.x, i * 25 + 5);
    };
  }
});

