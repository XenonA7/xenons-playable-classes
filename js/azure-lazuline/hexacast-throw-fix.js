/*
    Author: Azure
    Created: 10/07/2024

    Description: Changes the throw/aim timing when playing as whitelisted Hexacast characters. This
                 is to prevent unintentional charged shots between normal throws.
*/

ig.ENTITY.Crosshair.inject({
  isThrowCharged() {
    if(ig.ENTITY.Player.chargeBlockTime != null)
        return false;
    return this.parent();
  },
});

ig.ENTITY.Player.inject({
  startDash() {
      ig.ENTITY.Player.chargeBlockTime = null;
      this.parent();
  },
  handleStateStart(a, b) {
      if(a.startState == 2 && !this.throwCharge){ //shoot, uncharged
        if(sc.model.player.name == "Hexacast1"
            || sc.model.player.name == "Hexacast2"
            || sc.model.player.name == "Hexacast3"
            ){
                //new variable, block player charge shots for x seconds. 0.6 seemed to be long enough but i added 0.1 just in case
                ig.ENTITY.Player.chargeBlockTime = 0.7;
            }
      }
      return this.parent(a, b);;
  },
});

ig.ENTITY.Player.inject({
  update() {
      if(ig.ENTITY.Player.chargeBlockTime != null)
      { //decrement the new counter
          ig.ENTITY.Player.chargeBlockTime -= 1 * ig.system.tick;
          if(ig.ENTITY.Player.chargeBlockTime <= 0)
              ig.ENTITY.Player.chargeBlockTime = null;
      }
      this.parent();
  },
});