/*
    Author: Lubkuluk
    Created: 03/17/2024

    Description: Implements tmp.onKeyPanel to determine if the player is standing on a key panel. Used
    for Hexacast so they can use SHOOT_PROXY_PLAYER for THROW_CHARGED when this is true
*/

ig.ENTITY.KeyPanel.inject({
        setActive: function (a) {
            this.active = a;
            this.setCurrentAnim(this.active ? "on" : "off");
            if (this.active && !this.effects.activeHandle) {
                this.throwerEntity.setOverrideBall(this.keyType.ballInfo);
                ig.vars.set("tmp.onKeyPanel", true)
                this.effects.activeHandle = this.effects.key.spawnOnTarget(this.keyType.fx.active, this, {
                    duration: -1
                });
            }
            if (!this.active && this.effects.activeHandle) {
                this.throwerEntity && this.throwerEntity.setOverrideBall(null);
                this.effects.activeHandle.stop();
                ig.vars.set("tmp.onKeyPanel", false)
                this.effects.activeHandle = null
            }
            if (!this.active && this.effects.chargedHandle) {
                this.effects.chargedHandle.stop();
                this.effects.chargedHandle = null
            }
        }
 });