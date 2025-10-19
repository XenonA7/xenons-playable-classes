/*
Author: Azure Lazuline
Created: 09/28/2025

Description: Adds the variable combat.facingPuzzle which is true while the player is facing towards a puzzle element. This is used to disable the
homing property of Hexacast shots to allow shooting at puzzle elements while in combat.

Also adds the noHomingWhenAimingAtThis config field option for generic proxies, used to disable homing when aiming at the proxy.
 */

sc.Combat.inject({
  onVarAccess(fullName, varPath) {
    if (varPath.length == 2 && varPath[0] == 'combat' && varPath[1] == 'facingPuzzle') {
      //console.warn(ig.vars.currentLevelName);
      if (ig.vars.currentLevelName == "rookieHarbor/innerInfoUg-2") return true; //Info Hub basement with the target practice
      if (ig.vars.currentLevelName.startsWith("rookieHarbor/special/quest-ocean")) return true; //ocean turret quests
      if (ig.vars.currentLevelName == "jungleCity/special/hostage-1-1") return true;
      if (ig.vars.currentLevelName == "jungleCity/special/hostage-1-2") return true;
      if (ig.vars.currentLevelName == "autumnFall/raid/raid-04Cave") return true;
      if (ig.vars.currentLevelName == "autumnFall/raid/raid-04CaveRight") return true;

      for (const entity of ig.game.shownEntities) 
      {
        if (entity != null && !entity._killed && !entity._hidden)
        {
          if (entity.enemyName == "arid.elementTurret") return true; //no homing in the mini turret puzzle rooms
          if (entity.enemyName == "cold.turret-monks-invinc") return true; //no homing in the bergen monk trials
          if (entity.enemyName == "boss.elephant") return true; //no homing if any elephant at all
          
          if (entity instanceof sc.BombEntity
             || entity instanceof ig.ENTITY.ElementPole
             || entity instanceof sc.WaterBubbleEntity
             || entity instanceof sc.IceDiskEntity
             || entity instanceof ig.ENTITY.WaveTeleport
             || entity instanceof ig.ENTITY.Compressor
             || entity instanceof sc.CompressedBaseEntity
             || entity instanceof ig.ENTITY.BallChanger
             || entity instanceof sc.ElementShieldBallEntity
             || entity instanceof ig.ENTITY.Magnet
             || entity instanceof ig.ENTITY.MultiHitSwitch && !entity.isOn
             || entity instanceof ig.ENTITY.Switch
             || entity instanceof ig.ENTITY.OneTimeSwitch && entity.switchType == "default"
             || entity instanceof ig.ENTITY.GroupSwitch && !entity.isOn
             || entity instanceof ig.ENTITY.Blocker && entity.active //the things behind Rhombus Turret
             || entity instanceof ig.ENTITY.RotateBlocker && entity.active
             || entity instanceof ig.ENTITY.WaterBlock
             || entity instanceof ig.ENTITY.SlidingBlock
             || entity instanceof ig.ENTITY.PushPullBlock
             || entity instanceof ig.ENTITY.WavePushPullBlock
             || entity instanceof sc.CombatProxyEntity && entity.hp > 0 && entity.combatant.enemyName == "forest.panda" //there unfortunately doesn't seem to be a way to get the proxy name itself
             || entity instanceof sc.CombatProxyEntity && entity.hp > 0 && entity.combatant.enemyName == "guest.honeybear"
             || entity instanceof sc.CombatProxyEntity && entity.hp > 0 && entity.combatant.enemyName == "boss.designer-1"
             || entity instanceof sc.CombatProxyEntity && entity.hp > 0 && entity.combatant.enemyName == "boss.designer-2"
             || entity instanceof sc.CombatProxyEntity && entity.hp > 0 && entity.combatant.enemyName == "boss.elephant"
             || entity instanceof sc.CombatProxyEntity && entity.config && entity.config.noHomingWhenAimingAtThis //custom property, put it in the proxy's "config" field
             || entity instanceof sc.FerroEntity)
          {
            var angleToEntity = ig.CollTools.getAngle(ig.game.playerEntity.coll, entity.coll);
            var aimingAngle = Math.atan2(ig.game.playerEntity.face.y, ig.game.playerEntity.face.x);
            var diff = Math.abs(aimingAngle - angleToEntity);
            if (diff < -Math.PI)
              diff += Math.PI * 2;
            if (diff > Math.PI)
              diff -= Math.PI * 2;

            var aimingAtIt = Math.abs(diff) < 0.2;
            if (aimingAtIt && ig.CollTools.getGroundDistance(ig.game.playerEntity.coll, entity.coll) > 350)
              aimingAtIt = false; //too far away, probably offscreen

            if (false) //debug - show heat effect if it's a valid target, show detector ring effect if it's being actively aimed at
            {
              var pos = entity.getAlignedPos(ig.ENTITY_ALIGN.CENTER, Vec3.create());
              if (aimingAtIt)
                (new ig.EffectSheet("puzzle")).spawnFixed("detector", pos.x, pos.y, ig.game.playerEntity.coll.z);
              else
                (new ig.EffectSheet("puzzle.ball-changer")).spawnFixed("heatConvert", pos.x, pos.y, ig.game.playerEntity.coll.z);
            }

            if (aimingAtIt)
              return true;
          }
        }
      }
      return false;
    }

    return this.parent(fullName, varPath);
  },
});
