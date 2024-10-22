ig.module("impact.feature.weather.weather-xpc").requires("impact.feature.weather.weather").defines(function() {
    ig.WEATHER_TYPES.XPC_SPACE = {
        blackCorners: {
          alpha: 0.5,
          time: 2,
          blinkAlpha: 0.7
        },
        fog: {
          alpha: 0.6,
          vel: {
            x: -120,
            y: -40
          },
          zoom: 1
        },
        lightMapDarkness: 0.06,
        particles: [
        {
          type: "RHOMBUS",
          quantity: 4
        },
        {
          type: "DARK_DUST_XPC_SPACE",
          quantity: 3
        }
        ]
    };
});