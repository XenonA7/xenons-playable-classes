ig.module("game.feature.combat.xpc-combat-action-steps").requires("game.feature.combat.combat-action-steps").defines(function() {

  //Triblader

  var r = Vec2.create(),
  t = {
    FACE_REVERSE: 1,
    FACE: 2
  };

  ig.ACTION_STEP.COMBAT_ART_CHARGE_NOZOOM = ig.ActionStepBase.extend({
    _wm: new ig.Config({
      attributes: {
        element: {
          _type: "String",
          _info: "Element of the charge",
          _select: sc.ELEMENT
        },
        level: {
          _type: "Integer",
          _info: "Level to charge to"
        }
      }
    }),
    init: function (a) {
      this.element = sc.ELEMENT[a.element];
      this.level = a.level
    },
    start: function (a) {
      a.stepData.fx = new sc.CombatCharge(a, false, false, false);
      a.stepData.level = 0;
      a.addActionAttached(a.stepData.fx);
      this.chargeStep(a)
    },
    chargeStep: function (a) {
      a.stepData.level++;
      a.stepTimer = a.stepData.level < this.level ? a.stepTimer + 0.4 : a.stepTimer + 0.3;
      a.stepData.fx.charge(this.element, a.stepData.level)
    },
    run: function (a) {
      if (a.stepTimer <=
        0) {
        if (a.stepData.level == this.level) {
          a.stepData.fx.stop();
          a.params.consumeSp(sc.PLAYER_SP_COST[this.level - 1]);
          return true
        }
        this.chargeStep(a)
      }
      return false
    }
  });

  ig.ACTION_STEP.WAIT_WHILE_AIMING = ig.ActionStepBase.extend({
    _wm: new ig.Config({
      attributes: {
        maxTime: {
          _type: "Number",
          _info: "Maximum time to wait"
        }
      }
    }),
    init: function (a) {
      this.maxTime = a.maxTime;
    },
    start: function (a) {
      a.stepTimer = a.stepTimer + this.maxTime
    },
    run: function (a) {
      a = a.getCombatantRoot();
      if (a.isPlayer)
        if (ig.input.currentDevice == ig.INPUT_DEVICES.KEYBOARD_AND_MOUSE)
          a.gui.crosshair.getDir(a.face);
        else {
          sc.control.moveDir(r, 1);
          Vec2.isZero(r) || Vec2.assign(a.face, r)
        }
        a.combo.guardTrapTime = a.combo.guardTrapTime + ig.system.tick;
      if (a.stepTimer <= 0) {
        a.combo.guardTrapTime = 0;
        return true
      }
      return false
    }
  });
  

  //Hexacast

  ig.ACTION_STEP.RESET_GUARD_COMBO = ig.ActionStepBase.extend({
      init: function(a) {},
      start: function(a) {
          a = a.getCombatantRoot();
          a.combo.guardedHits = 0;
          a.combo.blockedDamage = 0;
          a.combo.blockedFactor = 0;
          a.combo.guardedEntity = null;
      }
  });

/*
  ig.ACTION_STEP.RESET_TARGET_GUARD_COMBO = ig.ActionStepBase.extend({
      init: function(a) {},
      start: function(a) {
          a = a.getCombatantRoot();
          (a.getTarget()).combo.guardedHits = 0;
          (a.getTarget()).combo.blockedDamage = 0;
          (a.getTarget()).combo.blockedFactor = 0;
          (a.getTarget()).combo.guardedEntity = null;
      }
  });
*/

});