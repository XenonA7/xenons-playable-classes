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
                          action: [
                            {
                              type: "SHOW_ANIMATION",
                              anim: "levelUpPreJump"
                            },
                            {
                              type: "WAIT",
                              time: 0.2
                            },
                            {
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
        else if (model.name == 'Hexacast1' || model.name == 'Hexacast2' || model.name == 'Hexacast3') {
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
                              face: "SOUTH",
                              rotate: false,
                              type: "SET_FACE"
                            },
                            {
                              value: "MASSIVE",
                              type: "SET_HIT_STABLE"
                            },
                            {
                              value: -1,
                              type: "SET_WEIGHT"
                            },
                            {
                              value: -1,
                              type: "SET_INVINCIBLE"
                            },
                            {
                              wait: false,
                              viaWalkConfig: false,
                              type: "SHOW_ANIMATION",
                              anim: "jump"
                            },
                            {
                              value: 0.25,
                              type: "SET_Z_GRAVITY_FACTOR"
                            },
                            {
                              value: 100,
                              type: "SET_Z_VEL"
                            },
                            {
                              duration: 0,
                              align: "BASE",
                              rotateFace: 0,
                              flipLeftFace: false,
                              wait: false,
                              waitSkip: 0,
                              actionDetached: false,
                              fixPos: true,
                              type: "SHOW_EFFECT",
                              effect: {
                                sheet: "combat.hexacastXPC",
                                name: "levelUpJumpDust"
                              },
                              offset: {
                                "x": 0,
                                "y": 0,
                                "z": 0
                              }
                            },
                            {
                              withElse: true,
                              type: "IF",
                              condition: "entity.attrib.shadowflameActive",
                              thenStep: [
                                {
                                  duration: -1,
                                  align: "BASE",
                                  rotateFace: 8,
                                  flipLeftFace: true,
                                  wait: false,
                                  waitSkip: 0,
                                  actionDetached: false,
                                  fixPos: false,
                                  group: "levelUpRisingFX",
                                  type: "SHOW_EFFECT",
                                  effect: {
                                    sheet: "specials.shadowflame-alts",
                                    name: "levelUpRisingShadowflame"
                                  }
                                }
                              ],
                              elseStep: [
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "NEUTRAL",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "BASE",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      group: "levelUpRisingFX",
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpRisingNeutral"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "HEAT",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "BASE",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      group: "levelUpRisingFX",
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpRisingHeat"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "COLD",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "BASE",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      group: "levelUpRisingFX",
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpRisingCold"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "SHOCK",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "BASE",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      group: "levelUpRisingFX",
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpRisingShock"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "WAVE",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "BASE",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      group: "levelUpRisingFX",
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpRisingWave"
                                      }
                                    }
                                  ]
                                }                                
                              ]
                            },
                            {
                              type: "WAIT_UNTIL_Z_ZENITH"
                            },
                            {
                              value: 0.125,
                              type: "SET_Z_GRAVITY_FACTOR"
                            },
                            {
                              type: "SHOW_ANIMATION",
                              anim: "dash",
                            },
                            {
                              type: "WAIT",
                              time: 0.21
                            },
                            {
                              value: 16,
                              type: "SET_FLOAT_HEIGHT"
                            },
                            {
                              variance: 4,
                              accel: 1,
                              type: "SET_FLOAT_PARAMS"
                            },
                            {
                              wait: false,
                              viaWalkConfig: false,
                              type: "SHOW_ANIMATION",
                              anim: "hover"
                            },
                            {
                              withElse: true,
                              type: "IF",
                              condition: "entity.attrib.shadowflameActive",
                              thenStep: [
                                {
                                  duration: -1,
                                  align: "CENTER",
                                  rotateFace: 8,
                                  flipLeftFace: true,
                                  wait: false,
                                  waitSkip: 0,
                                  actionDetached: false,
                                  fixPos: false,
                                  type: "SHOW_EFFECT",
                                  effect: {
                                    sheet: "specials.shadowflame-alts",
                                    name: "levelUpFXShadowflame"
                                  }
                                }
                              ],
                              elseStep: [
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "NEUTRAL",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "CENTER",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpFXNeutral"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "HEAT",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "CENTER",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpFXHeat"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "COLD",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "CENTER",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpFXCold"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "SHOCK",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "CENTER",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpFXShock"
                                      }
                                    }
                                  ]
                                },
                                {
                                  withElse: false,
                                  type: "COMBAT_IF",
                                  conditions: [
                                    {
                                      element: "WAVE",
                                      negated: false,
                                      type: "ELEMENT_MODE"
                                    }
                                  ],
                                  thenStep: [
                                    {
                                      duration: -1,
                                      align: "CENTER",
                                      rotateFace: 8,
                                      flipLeftFace: true,
                                      wait: false,
                                      waitSkip: 0,
                                      actionDetached: false,
                                      fixPos: false,
                                      type: "SHOW_EFFECT",
                                      effect: {
                                        sheet: "combat.hexacastXPC",
                                        name: "levelUpFXWave"
                                      }
                                    }
                                  ]
                                }                                
                              ]
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
                          action: [
                            {
                              type: "SHOW_ANIMATION",
                              anim: "fall"
                            },
                            {
                              group: "levelUpRisingFX",
                              type: "CLEAR_EFFECTS"
                            },
                            {
                              value: 0,
                              type: "SET_FLOAT_HEIGHT"
                            },
                            {
                              value: 1,
                              type: "SET_Z_GRAVITY_FACTOR"
                            },
                            {
                              type: "WAIT_UNTIL_ON_GROUND"
                            },
                            {
                              duration: 0,
                              align: "BASE",
                              rotateFace: 0,
                              flipLeftFace: false,
                              wait: false,
                              waitSkip: 0,
                              actionDetached: true,
                              fixPos: false,
                              type: "SHOW_EFFECT",
                              effect: {
                                sheet: "specials.heat",
                                name: "fajroLandingDust"
                              },
                              offset: {
                                "x": 0,
                                "y": 0,
                                "z": 0
                              }
                            },
                            {
                              wait: false,
                              viaWalkConfig: false,
                              type: "SHOW_ANIMATION",
                              anim: "landOnGround"
                            },
                            {
                              time: 0.45,
                              type: "WAIT"
                            },
                            {
                              wait: true,
                              viaWalkConfig: false,
                              type: "SHOW_ANIMATION",
                              anim: "preIdle"
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