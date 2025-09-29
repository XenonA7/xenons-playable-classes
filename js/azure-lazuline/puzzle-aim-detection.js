/*
    Author: Azure Lazuline
    Created: 09/28/2025

    Description: Adds the variable combat.facingPuzzle which is true while the player is facing towards a puzzle element. This is used to disable the
                 homing property of Hexacast shots to allow shooting at puzzle elements while in combat.
*/

sc.Combat.inject({
  onVarAccess(fullName, varPath) {
    if (varPath.length == 2 && varPath[0] == 'combat' && varPath[1] == 'facingPuzzle') 
  {
    if (ig.vars.currentLevelName == "rookieHarbor/innerInfoUg-2") return true; //Info Hub basement with the target practice
    if (ig.vars.currentLevelName.startsWith("rookieHarbor/special/quest-ocean")) return true; //ocean turret quests
        
    for (const entity of ig.game.shownEntities)
    {
      if (entity == null || entity._killed || entity._hidden) continue;
      if (entity instanceof sc.BombEntity 
        || entity instanceof ig.ENTITY.ElementPole
        || entity instanceof sc.WaterBubbleEntity
        || entity instanceof sc.IceDiskEntity
        || entity instanceof ig.ENTITY.WaveTeleport
        || entity instanceof ig.ENTITY.Compressor
        || entity instanceof sc.CompressedBaseEntity
        || entity instanceof ig.ENTITY.BallChanger
        || entity instanceof sc.ElementShieldEntity
        || entity instanceof ig.ENTITY.Magnet
        || entity instanceof ig.ENTITY.MultiHitSwitch
        || entity instanceof ig.ENTITY.Switch
        || entity instanceof ig.ENTITY.OneTimeSwitch && entity.switchType == sc.ONE_TIME_SWTICH_TYPE["default"]
        || entity instanceof ig.ENTITY.GroupSwitch && !entity.isOn
        || entity instanceof ig.ENTITY.Blocker && entity.active //the things behind Rhombus Turret
        || entity instanceof ig.ENTITY.RotateBlocker && entity.active
        || entity instanceof ig.ENTITY.WaterBlock
        || entity instanceof ig.ENTITY.SlidingBlock
        || entity instanceof ig.ENTITY.WavePushPullBlock
        || entity instanceof sc.FerroEntity)
      {
        var angleToEntity = ig.CollTools.getAngle(ig.game.playerEntity.coll, entity.coll);
        var aimingAngle = Math.atan2(ig.game.playerEntity.face.y, ig.game.playerEntity.face.x);
        var diff = Math.abs(aimingAngle - angleToEntity);
        if (diff < -Math.PI) diff += Math.PI * 2;
        if (diff > Math.PI) diff -= Math.PI * 2;
        
        var aimingAtIt = Math.abs(diff) < 0.2;
        if (aimingAtIt && ig.CollTools.getGroundDistance(ig.game.playerEntity.coll, entity.coll) > 350)
          aimingAtIt = false; //too far away, probably offscreen
        
        if (false) //debug - show heat effect if it's a valid target, show cold effect if it's being actively aimed at
        {
          var pos = entity.getAlignedPos(ig.ENTITY_ALIGN.CENTER, Vec3.create());
          if (aimingAtIt)
            (new ig.EffectSheet("puzzle.ball-changer")).spawnFixed("coldConvert", pos.x, pos.y, ig.game.playerEntity.coll.z);
          else
            (new ig.EffectSheet("puzzle.ball-changer")).spawnFixed("heatConvert", pos.x, pos.y, ig.game.playerEntity.coll.z);
        }
        
        if (aimingAtIt) return true;
        //console.warn(Object.entries(entity));
      }
    }
    return false;
  }

    return this.parent(fullName, varPath);
  },
});