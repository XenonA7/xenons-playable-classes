/*
    Author: Krypek
    Created: 04/06/2025

    Description: Code framework allows for modded characters to have custom level-up action steps. This
    code snippet can be put many times in different mods without anything breaking.
*/

sc.PlayerLevelNotifier.inject({
    getLevelUpEvent(player, model) {
        if (model.name == 'triblader-lea') {
            return new ig.Event(
                {
                    steps: [
                        {
                          type: "PLAY_SOUND",
                          sound: "media/sound/battle/level-up.ogg",
                          volume: 1
                        },
                        {
                          type: "DO_ACTION",
                          entity: player,
                          action: [
                              {
                                type: "WAIT",
                                time: -1
                              }
                          ]
                        },
                        {
                          type: "ADD_SLOW_MOTION",
                          name: "levelUp",
                          factor: 0,
                          time: 0.5
                        },
                        {
                          type: "WAIT",
                          time: 0.1,
                          ignoreSlowDown: true
                        },
                        {
                          type: "SET_ENTITY_STATIC_TIME",
                          entity: player,
                          value: true,
                          global: true
                        },
                        {
                          type: "DO_ACTION",
                          entity: player,
                          keepState: true,
                          action: [
                            {
                              type: "SHOW_ANIMATION",
                              anim: "tri-levelUpPre",
                              followUp: "tri-levelUpStand"
                            },
                            {
                              type: "WAIT",
                              time: 0.1
                            },
                            {
                              volume: 0.5,
                              global: false,
                              loop: false,
                              speed: 1.4,
                              sound: "media/sound/battle/triblader/blade1.ogg",
                              type: "PLAY_SOUND"
                            },
                            {
                              type: "WAIT",
                              time: 0.5
                            },
                            {
                              volume: 0.9,
                              global: false,
                              loop: false,
                              speed: 1.2,
                              sound: "media/sound/battle/enemies/samurai/sword-slide.ogg",
                              type: "PLAY_SOUND"
                            },
                            {
                              type: "WAIT",
                              time: -1
                            }
                          ]
                        },
                        {
                          type: "SET_CAMERA_TARGET",
                          entity: player,
                          speed: 0.6,
                          transition: "EASE_IN_OUT",
                          wait: true,
                          zoom: 1.5,
                          waitSkip: 0.2
                        },
                        {
                          type: "ADD_GUI",
                          name: null,
                          guiInfo: {
                            type: "LevelUpHud",
                            settings: {
                              deltaValues: ig.copy(model.levelUpDelta)
                            }
                          }
                        },
                        {
                          type: "SET_ZOOM_BLUR",
                          zoomType: "MEDIUM",
                          fadeIn: 0.1,
                          duration: 0.2,
                          fadeOut: 0.5
                        },
                        {
                          type: "WAIT_UNTIL_TRUE",
                          condition: "tmp._levelUpFinished"
                        },
                        {
                          type: "DO_ACTION",
                          entity: player,
                          action: [{
                              type: "SHOW_ANIMATION",
                              anim: "levelUpPreJump"
                            }, {
                              type: "WAIT",
                              time: 0.2
                            }, {
                              type: "SHOW_ANIMATION",
                              anim: "levelUpJump"
                            },
                            {
                              type: "JUMP",
                              jumpHeight: "M",
                              wait: true,
                              ignoreSounds: true
                            }
                          ]
                        },
                        {
                          type: "WAIT",
                          time: 0.5,
                          ignoreSlowDown: true
                        },
                        {
                          type: "CLEAR_SLOW_MOTION",
                          name: "levelUp",
                          time: 0.1
                        },
                        {
                          type: "SET_ENTITY_STATIC_TIME",
                          entity: player,
                          value: false,
                          global: true
                        }
                    ]
                }
            )
        }
        return this.parent(player, model)
    }
})