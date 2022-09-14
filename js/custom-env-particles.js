ig.ENV_PARTICLES.BLUE_TRIANGLES = {
  animSheet: {
    sheet: {
      src: "media/env/particle-xtm.png",
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
      src: "media/env/particle-xtm.png",
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