ig.ENV_PARTICLES.BLUE_TRIANGLES = {
  animSheet: {
    sheet: {
      src: "media/env/particle-xpc.png",
      width: 8,
      height: 8,
      offX: 0
    },
    renderMode: "lighter",
    SUB: [{
      name: "small",
      frames: [0],
      time: 0.1
    }, {
      name: "medium",
      frames: [1],
      time: 0.1
    }, {
      name: "big",
      frames: [2],
      time: 0.1
    }]
  },
  speed: 30,
  speedVariance: 10,
  dir: {
    x: 0,
    y: -1
  },
  randomFlip: {
    x: false,
    y: false
  },
  time: 2,
  timeVariance: 0.5,
  fadeTime: 0.5,
  levels: [{
    scale: 1,
    anim: "small"
  }, {
    scale: 1.2,
    anim: "medium"
  }, {
    scale: 1.5,
    anim: "big"
  }]
};

ig.ENV_PARTICLES.RED_TRIANGLES = {
  animSheet: {
    sheet: {
      src: "media/env/particle-xpc.png",
      width: 8,
      height: 8,
      offX: 24
    },
    renderMode: "lighter",
    SUB: [{
      name: "small",
      frames: [0],
      time: 0.1
    }, {
      name: "medium",
      frames: [1],
      time: 0.1
    }, {
      name: "big",
      frames: [2],
      time: 0.1
    }]
  },
  speed: 80,
  speedVariance: 20,
  dir: {
    x: 0,
    y: -1
  },
  randomFlip: {
    x: false,
    y: false
  },
  time: 1.2,
  timeVariance: 0.3,
  fadeTime: 0.3,
  levels: [{
    scale: 1,
    anim: "small"
  }, {
    scale: 1.2,
    anim: "medium"
  }, {
    scale: 1.5,
    anim: "big"
  }]
};

ig.ENV_PARTICLES.DARK_DUST_XPC_SPACE = {
  animSheet: {
    sheet: {
      src: "media/env/particle.png",
      width: 8,
      height: 8,
      offY: 8
    },
    renderMode: "lighter",
    SUB: [{
      name: "small",
      frames: [0],
      time: 0.1
    }, {
      name: "medium",
      frames: [1],
      time: 0.1
    }, {
      name: "big",
      frames: [2],
      time: 0.1
    }]
  },
  speed: 300,
  speedVariance: 80,
  dir: {
    x: -1,
    y: -0.33
  },
  randomFlip: {
    x: false,
    y: false
  },
  randomRotate: 0,
  time: 3,
  timeVariance: 0.5,
  fadeTime: 0.5,
  levels: [{
    scale: 1,
    anim: "small"
  }, {
    scale: 1.2,
    anim: "medium"
  }, {
    scale: 1.5,
    anim: "big"
  }]
};

ig.ENV_PARTICLES.COLD_CRYSTALS_RISING = {
    animSheet: {
        sheet: {
            src: "media/env/particle.png",
            width: 8,
            height: 8,
            offX: 96,
            offY: 8
        },
        renderMode: "lighter",
        SUB: [{
            name: "small",
            frames: [0],
            time: 0.1
        }, {
            name: "medium",
            frames: [1],
            time: 0.1
        }, {
            name: "big",
            frames: [2],
            time: 0.1
        }]
    },
    speed: 140,
    speedVariance: 20,
    dir: {
        x: 0,
        y: -1
    },
    randomFlip: {
        x: false,
        y: false
    },
    randomRotate: 0.1,
    sineRotate: 0.05,
    sineRotateTime: 4,
    time: 3,
    timeVariance: 0.5,
    fadeTime: 0.5,
    levels: [{
        scale: 1,
        anim: "small"
    }, {
        scale: 1.2,
        anim: "medium"
    }, {
        scale: 1.5,
        anim: "big"
    }]
};

ig.ENV_PARTICLES.COLD_CRYSTALS_RISING_FAST = {
    animSheet: {
        sheet: {
            src: "media/env/particle.png",
            width: 8,
            height: 8,
            offX: 96,
            offY: 8
        },
        renderMode: "lighter",
        SUB: [{
            name: "small",
            frames: [0],
            time: 0.1
        }, {
            name: "medium",
            frames: [1],
            time: 0.1
        }, {
            name: "big",
            frames: [2],
            time: 0.1
        }]
    },
    speed: 260,
    speedVariance: 40,
    dir: {
        x: 0,
        y: -1
    },
    randomFlip: {
        x: false,
        y: false
    },
    randomRotate: 0.1,
    sineRotate: 0.05,
    sineRotateTime: 4,
    time: 2,
    timeVariance: 0.5,
    fadeTime: 0.5,
    levels: [{
            scale: 1,
            anim: "small"
        }, {
            scale: 1.2,
            anim: "medium"
        },
        {
            scale: 1.5,
            anim: "big"
        }
    ]
};

ig.ENV_PARTICLES.SNOW_FLAKES_RISING = {
    animSheet: {
        sheet: {
            src: "media/env/particle.png",
            width: 8,
            height: 8,
            offX: 96
        },
        renderMode: "lighter",
        SUB: [{
            name: "small",
            frames: [0],
            time: 0.1
        }, {
            name: "medium",
            frames: [1],
            time: 0.1
        }, {
            name: "big",
            frames: [2],
            time: 0.1
        }]
    },
    speed: 140,
    speedVariance: 20,
    dir: {
        x: 0,
        y: -1
    },
    randomFlip: {
        x: false,
        y: false
    },
    randomRotate: 0.1,
    sineRotate: 0.05,
    sineRotateTime: 4,
    time: 2.5,
    timeVariance: 0.5,
    fadeTime: 0.5,
    levels: [{
        scale: 1,
        anim: "small"
    }, {
        scale: 1.2,
        anim: "medium"
    }, {
        scale: 1.5,
        anim: "big"
    }]
};

ig.ENV_PARTICLES.SNOW_FLAKES_RISING_FAST = {
    animSheet: {
        sheet: {
            src: "media/env/particle.png",
            width: 8,
            height: 8,
            offX: 96
        },
        renderMode: "lighter",
        SUB: [{
            name: "small",
            frames: [0],
            time: 0.1
        }, {
            name: "medium",
            frames: [1],
            time: 0.1
        }, {
            name: "big",
            frames: [2],
            time: 0.1
        }]
    },
    speed: 260,
    speedVariance: 40,
    dir: {
        x: 0,
        y: -1
    },
    randomFlip: {
        x: false,
        y: false
    },
    randomRotate: 0.1,
    sineRotate: 0.05,
    sineRotateTime: 4,
    time: 1.5,
    timeVariance: 0.5,
    fadeTime: 0.5,
    levels: [{
            scale: 1,
            anim: "small"
        }, {
            scale: 1.2,
            anim: "medium"
        },
        {
            scale: 1.5,
            anim: "big"
        }
    ]
};