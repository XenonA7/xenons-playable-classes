/*
    Author: Azure Lazuline
    Created: 11/11/2024

    Description: Custom action steps created by Azure Lazuline
*/


/*
    Allows disabling healthbar visibility for a set period of time. Used to improve combat arts
    where the player turns invisible. This also disables the icon for status effects.
*/
ig.ACTION_STEP.DISABLE_HEALTHBAR = ig.ActionStepBase.extend({
duration: null,
_wm: new ig.Config({
  attributes: {
    duration: {
      _type: "Number",
      _info: "Seconds to disable the health bar (0 to turn it back on)"
    }
  }
}),
init: function (a) {
  assertContent(a, "duration");
  this.duration = a.duration
},
start: function(a) {
    a.getCombatantRoot().disableHealthbarTime = this.duration;
}
});

ig.ENTITY.Combatant.inject({
  update() {
      if(this.disableHealthbarTime != null)
      {
          this.disableHealthbarTime -= 1 * ig.system.tick;
          if(this.disableHealthbarTime <= 0)
              this.disableHealthbarTime = null;
      }
      if(this.disableSpikedmgTime != null)
      {
          this.disableSpikedmgTime -= 1 * ig.system.tick;
          if(this.disableSpikedmgTime <= 0)
              this.disableSpikedmgTime = null;
      }
      this.parent();
  },
});

ig.GUI.StatusBar.inject({
    updateDrawables(a){

        if(this.target.disableHealthbarTime == null)
        { //only run the draw code if health bar isn't disabled
            this.parent(a);
        }

    },
});


/*
    Allows properly disabling the pin body modifier for a set period of time. Used in XPC arts such
    as Ice Brace.
*/
ig.ACTION_STEP.DISABLE_SPIKEDMG = ig.ActionStepBase.extend({
duration: null,
_wm: new ig.Config({
  attributes: {
    duration: {
      _type: "Number",
      _info: "Seconds to disable the spike dmg modifier (0 to turn it back on)"
    }
  }
}),
init: function (a) {
  assertContent(a, "duration");
  this.duration = a.duration
},
start: function(a) {
    a.getCombatantRoot().disableSpikedmgTime = this.duration;
}
});

ig.ENTITY.Combatant.inject({
  addSpikeDamage(a, b, c, d, e) {
      if(c && c.disableSpikedmgTime)
      { //do nothing
      }
      else
        this.parent(a, b, c, d, e);
  },
});