/*
    Author: Azure Lazuline
    Created: 08/05/2025

    Description: A workaround for https://github.com/XenonA7/xenons-playable-classes/issues/25
                 
                 Adds a 1-frame delay after "postShoot" when "aim" is the next animation. Also includes all other variants of
                 the postShoot animation used by Hexacast. Only applies to the player.
*/

ig.ENTITY.Player.inject({
  setCurrentAnim(a, b, d, g, h) {
    
    if (a == "aim" && this.azureAimDelay && (this.currentAnim == "preIdle" || this.currentAnim == "postShoot" || this.currentAnim == "postShootSlow" || this.currentAnim == "postShoot1H" || this.currentAnim == "postShoot1HSlow" || this.currentAnim == "postShoot2H" || this.currentAnim == "postShoot2HSlow"))
    {
        this.azureAimDelay=null;
        return;
    }
    this.azureAimDelay = true;

    return this.parent(a, b, d, g, h);
  },
});