"use strict";
ig.module('xpc.patches.map-styles')
    .requires('impact.feature.map-content.map-style')
    .defines(() => {
      ig.MapStyle.registerStyle("forest-dng", "map", {
      sheet: "media/entity/style/forest-dng-main.png",
      hasDoorMat: true,
      doorSound: "STONE",
      teleportField: {
        x: 0,
        y: 160,
        xCount: 3,
        zHeight: 0
      },
      stairDoor: {
        x: 160,
        y: 0
      }
    });
      ig.MapStyle.registerStyle("forest-dng", "puzzle", {
      sheet: "media/entity/style/shockwave-dng-puzzle.png"
    });
    ig.MapStyle.registerStyle("forest-dng", "puzzle2", {
      sheet: "media/entity/style/shockwave-dng-puzzle-2.png"
    });
    ig.MapStyle.registerStyle("forest-dng", "magnet", {
      sheet: "media/map/shockwave-dng.png",
      x: 160,
      y: 272
    });
    ig.MapStyle.registerStyle("forest-dng", "bouncer", {
      sheet: "media/map/shockwave-dng-props.png",
      x: 0,
      y: 0
    });
    ig.MapStyle.registerStyle("forest-dng", "waterblock", {
      sheet: "media/map/shockwave-dng.png",
      x: 384,
      y: 304,
      puddleX: 352,
      puddleY: 448
    });
    ig.MapStyle.registerStyle("forest-dng", "waveblock", {
      sheet: "media/map/shockwave-dng.png",
      x: 96,
      y: 480
    });
    ig.MapStyle.registerStyle("forest-dng", "tesla", {
      sheet: "media/map/shockwave-dng.png",
      x: 240,
      y: 352
    });
    ig.MapStyle.registerStyle("forest-dng", "waveSwitch", {
      sheet: "media/map/shockwave-dng.png",
      x: 16,
      y: 696
    });
    ig.MapStyle.registerStyle("forest-dng", "anticompressor", {
      sheet: "media/map/shockwave-dng.png",
      x: 240,
      y: 400
    });
    ig.MapStyle.registerStyle("forest-dng", "dynPlatformSmall", {
      sheet: "media/map/shockwave-dng.png",
      x: 48,
      y: 640
    });
    ig.MapStyle.registerStyle("forest-dng", "dynPlatformMedium", {
      sheet: "media/map/shockwave-dng.png",
      x: 0,
      y: 640
    });
    ig.MapStyle.registerStyle("forest-dng", "lorry", {
      sheet: "media/map/shockwave-dng.png",
      railX: 176,
      railY: 304,
      lorryX: 128,
      lorryY: 304
    });
    ig.MapStyle.registerStyle("forest-dng", "rotateBlocker", {
      sheet: "media/map/shockwave-dng.png",
      x: 256,
      y: 720
    });
    ig.MapStyle.registerStyle("forest-dng", "destruct", {
      sheet: "media/entity/style/shockwave-dng-destruct.png"
    });
});
//# sourceMappingURL=map-styles.js.map