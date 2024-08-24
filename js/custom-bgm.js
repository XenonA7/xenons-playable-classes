ig.module("impact.feature.bgm.bgm-xpc")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      "lazCave": {
        path: "media/bgm/laz-cave.ogg",
        loopEnd: 285.513,
        volume: 1.0
      },
      rubyDelusions: {
        path: "media/bgm/ruby-delusions.ogg",
        loopEnd: 64.018,
        volume: 0.7,
        introPath: "media/bgm/ruby-delusions-i.ogg",
        introEnd: 3.193
      },
      brawlBoss: {
        path: "media/bgm/brawl-boss.ogg",
        loopEnd: 110.781,
        volume: 0.8,
        introPath: "media/bgm/brawl-boss-i.ogg",
        introEnd: 1.480
      },
      meatboySlugger: {
        path: "media/bgm/meatboy-slugger.ogg",
        loopEnd: 136.775,
        volume: 0.7,
        introPath: "media/bgm/meatboy-slugger-i.ogg",
        introEnd: 47.562
      },
      trianglePrep: {
        path: "media/bgm/triangle-prep.ogg",
        loopEnd: 93.798,
        volume: 0.8,
        introPath: "media/bgm/triangle-prep-i.ogg",
        introEnd: 2.801
      },
      triangleDestinyFull: {
        path: "media/bgm/triangle-destiny.ogg",
        loopEnd: 208.666,
        volume: 1.0,
        introPath: "media/bgm/triangle-destiny-i-full.ogg",
        introEnd: 35.746
      },
      triangleDestinyMed: {
        path: "media/bgm/triangle-destiny.ogg",
        loopEnd: 208.666,
        volume: 1.0,
        introPath: "media/bgm/triangle-destiny-i-med.ogg",
        introEnd: 17.661
      },
      contract: {
      	introPath: "media/bgm/contract-i.ogg",
  	    path: "media/bgm/contract.ogg",
  	    introEnd: 9.849,
  	    loopEnd: 224.515, 
  	    volume: 1.0
  	  },
      meanBean: {
        introPath: "media/bgm/mean-bean-i.ogg",
        path: "media/bgm/mean-bean.ogg",
        introEnd: 15.980,
        loopEnd: 57.542, 
        volume: 1.0
      },
      formlessOnslaught: {
        path: "media/bgm/formless-onslaught.ogg",
        loopEnd: 76.507,
        volume: 1.0,
        introPath: "media/bgm/formless-onslaught-i.ogg",
        introEnd: 3.753
      },
      decisiveEncounter: {
        path: "media/bgm/decisive-encounter.ogg",
        loopEnd: 57.638,
        volume: 1.0,
        introPath: "media/bgm/decisive-encounter-i.ogg",
        introEnd: 3.040
      },
      decisiveEncounter2: {
        path: "media/bgm/decisive-encounter-2.ogg",
        loopEnd: 57.522,
        volume: 1.0,
        introPath: "media/bgm/decisive-encounter-2-i.ogg",
        introEnd: 2.534
      }
    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
      lazCaveArea: {
        field: {
          track: "lazCave",
          volume: 0.9,
        },
        battle: {
          track: "aridBattle",
          volume: 1,
        },
    		rankBattle: {
    			track: "aridBattle",
    			volume: 1
    		},
    		sRankBattle: {
    			track: "s-rank",
    			volume: 1
    		}
      },
      mysterious: {
        field: {
          track: "oldHideout1",
          volume: 0.9,
        },
        battle: {
          track: "fieldBattle",
          volume: 0.7,
        },
        rankBattle: {
          track: "fieldBattle",
          volume: 0.7
        },
        sRankBattle: {
          track: "fieldBattle",
          volume: 0.7
        }
      },
      briefingArea: {
        field: {
          track: "briefing",
          volume: 0.9,
        },
        battle: {
          track: "fieldBattle",
          volume: 0.7,
        },
        rankBattle: {
          track: "fieldBattle",
          volume: 0.7
        },
        sRankBattle: {
          track: "fieldBattle",
          volume: 0.7
        }
      }

    });
  });