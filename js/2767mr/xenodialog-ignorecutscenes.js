/*
    Author: 2767mr
    Created: 11/23/2026

    Description: Adds the "ignoreCutscenes" boolean property to XenoDialog entities, allowing them to trigger during active events.
*/

ig.ENTITY.XenoDialog.inject({
    init(a, b, c, settings) {
        this.parent(a, b, c, settings);

        this.ignoreCutscenes = !!settings.ignoreCutscenes;
    },
    update() {
        this.parent();
        if (this.ignoreCutscenes && (ig.game.isControlBlocked() || sc.model.isCutscene())) {
            if (this.blockTimer > 0) {
                this.blockTimer = this.blockTimer - ig.system.tick;
            } else if ((!this.once || !this.hasRunOnce) && this.running) {
                if (this.currentTextIndex == -1
                    ? this._isInRange(120 * 120, false, true)
                    : this._isInRange(200 * 200, false, true)) {
                    if (this.padTimer > 0) {
                        this.padTimer = this.padTimer - ig.system.tick;
                    }
                    if (this.padTimer <= 0) {
                        this._showNextMessage();
                    }
                } else {
                    this.cancelDialog();
                }
            }
        }
    },
    _isInRange(range, useZ, bypass) {
        if (this.ignoreCutscenes && (ig.game.isControlBlocked() || sc.model.isCutscene()) && !bypass) {
            return false;
        }
        return this.parent(range, useZ);
    }
});