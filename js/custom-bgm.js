ig.module("impact.feature.bgm.bgm-xtm")
  .requires("impact.feature.bgm.bgm")
  .defines(function () {
    ig.merge(ig.BGM_TRACK_LIST, {
      "scarpsCave": {
        path: "media/bgm/scarps-cave.ogg",
        loopEnd: 285.513,
        volume: 1.0
      },
      unholyInsurgencyLong: {
        path: "media/bgm/unholy-insurgency.ogg",
        loopEnd: 142.687,
        volume: 0.6,
        introPath: "media/bgm/unholy-insurgency-i-long.ogg",
        introEnd: 31.936
      },
      unholyInsurgencyMed: {
        path: "media/bgm/unholy-insurgency.ogg",
        loopEnd: 142.687,
        volume: 0.6,
        introPath: "media/bgm/unholy-insurgency-i-med.ogg",
        introEnd: 7.693
      },
      unholyInsurgencyShort: {
        path: "media/bgm/unholy-insurgency.ogg",
        loopEnd: 142.687,
        volume: 0.6,
        introPath: "media/bgm/unholy-insurgency-i-short.ogg",
        introEnd: 0.429
      },
      alight: {
        path: "media/bgm/alight.ogg",
        loopEnd: 157.26,
        volume: 0.8,
        introPath: "media/bgm/alight-i.ogg",
        introEnd: 29.970
      },
      rubyDelusions: {
        path: "media/bgm/ruby-delusions.ogg",
        loopEnd: 64.018,
        volume: 0.7,
        introPath: "media/bgm/ruby-delusions-i.ogg",
        introEnd: 3.193
      },
      galacticBattle: {
        path: "media/bgm/galactic-battle.ogg",
        loopEnd: 62.255,
        volume: 0.8,
        introPath: "media/bgm/galactic-battle-i.ogg",
        introEnd: 12.924
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
      valentineFull: {
        path: "media/bgm/valentine.ogg",
        loopEnd: 105.184,
        volume: 0.8,
        introPath: "media/bgm/valentine-i-full.ogg",
        introEnd: 29.458
      },
      valentineMed: {
        path: "media/bgm/valentine.ogg",
        loopEnd: 105.184,
        volume: 0.8,
        introPath: "media/bgm/valentine-i-med.ogg",
        introEnd: 11.852
      },
      valentineShort: {
        path: "media/bgm/valentine.ogg",
        loopEnd: 105.184,
        volume: 0.8,
        introPath: "media/bgm/valentine-i-short.ogg",
        introEnd: 2.834
      },
      trianglePrep: {
        path: "media/bgm/triangle-prep.ogg",
        loopEnd: 94.128,
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
      }
    });

    ig.merge(ig.BGM_DEFAULT_TRACKS, {
      scarpsCaveArea: {
        field: {
          track: "scarpsCave",
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