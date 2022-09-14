ig.module("game.feature.puzzle.entities.xtm-one-time-switch").requires("impact.base.entity").defines(function() {
  sc.ONE_TIME_SWTICH_TYPE["default2"] = {
    size: {
      x: 16,
      y: 16,
      z: 17
    },
    padding: {
      x: 4,
      y: 4
    },
    activeZHeight: 0,
    useStyleSheet: "puzzle",
    anims: {
      offset: {
        x: 0,
        y: 0,
        z: 0
      },
      sheet: {
        src: null,
        width: 16,
        height: 32
      },
      SUB: [{
        name: "off",
        time: 0.1,
        frames: [0, 1, 2, 3],
        repeat: true
      }, {
        name: "preOn",
        time: 0.03,
        frames: [8,
          9, 10, 11, 8, 9, 10, 11, 8, 9, 10, 11, 8, 9, 10, 11, 8, 9, 10, 10, 11, 11, 11, 8, 8, 8, 8, 8, 12, 13
        ],
        repeat: false
      }, {
        name: "preOnEnd",
        time: 0.1,
        frames: [14, 15],
        repeat: false
      }, {
        name: "on",
        time: 1,
        frames: [15],
        repeat: false
      }, {
        name: "tmpOn",
        time: 0.025,
        frames: [4, 5, 6, 7],
        repeat: true
      }, {
        name: "tmpOnSlow",
        time: 0.05,
        frames: [4, 5, 6, 7],
        repeat: true
      }]
    },
    fx: {
      show: {
        sheet: "ar",
        name: "arSwitchShow"
      },
      hide: {
        sheet: "ar",
        name: "arSwitchHide"
      }
    },
    hitCondition: function (b, a) {
      return a.party == sc.COMBATANT_PARTY.PLAYER
    }
  };

});