//author: Bakafish
ig.module("game.feature.combat.model.proxy-hp-access").requires("game.feature.combat.entities.combat-proxy").defines(function() {
    sc.CombatProxyEntity.inject({
        onVarAccess: function(b, d) {
            return d[1] == "hpFactor" ? (this.hp / (this.maxHp || 1)) : this.parent(b, d);
        }
    });
    sc.COMBAT_CONDITION.HAS_PROXY.inject({
        init: function(a) {
            this.root = a.root || false;
            this.parent(a);
        },
        check: function(a) {
            if (!this.root || !a.combatant) {
                return this.parent(a);
            } else {
                return this.parent(a.combatant);
            }
        }
    });
});