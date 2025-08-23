## 2.20.0 (08/23/2025)
### New Content
- New Hexacast combat art: Heal Battery (Wave Guard Lv.2B)
- Added a teleporter to LPC's new dev room in hideout-southwest (only if the LPC mod is detected as installed)
### Changes
- Ethereal Stance removed from main Hexacast player file (replaced by Heal Battery), it is now a custom skill
- Updated install instructions in README.md
- Proxy slowDebuffProxy renamed to etherealSlowDebuffProxy
- Map hideout-hexa now has a "guard rail" system to prevent enemy navigation going off the edge when platform is up
- Re-ordered some teleporter positions in hideout-southwest
- Improved animation/effect implementation of Hexacast Sphere Storm
- Proxy beamBlasterLaser split into beamBlasterHitbox and beamBlasterTelegraph to improve hit reliability
- Beam Blaster now uses two effect instances of beamBlasterLaserSource and one of beamBlasterLaser
- Added some additional particles to Beam Blaster
- Made pScale end more gradual for effect spiritBlastFinalHexagons
- Improved effect waveTeleportTrail (used by Triblader Phase Jump)
- Improved effect waveCircleJump (used by Triblader Phase Jump)
- Added effect freezeRayLaserGroundHexagons to Freeze Rays
- Reduced audio volume for effect freezeRayLaser
- Re-worded Blaster Sentry description
- Triblader Warp Decoy reworked from being inert with HP factor 1.5 to explode on death with HP factor 0.05
- Triblader Warp Decoy updated description
- Triblader Warp Decoy added as Lea custom skill
- Triblader Warp Decoy added as Hexacast custom skill and separated from spheromancer Warp Decoy custom skill
- Hexacast THROW_NORMAL_REV now shoots clockwise
- Added a pRotate to effect ruinousDebuffStartHexagons
### Fixes
- Fixed party members not being allowed in 2v2 Triblader training map
- Fixed Triblader2/3/4/5 NE jump/fall sprite frame offset
- Fixed triblader effect etherBombExplode to use moveWithTarget 0 for all particles
### Balance
- Kindling Dance fireball damageFactor decreased from 0.55 to 0.50
- Arcane Volley initial projectile speeds increased from 300/400 to 375/475 (travels further)
- Storm Chaser speed progression changed from 140-160-180-200-250-300-600 to 120-130-150-180-250-300-600
- Stasis Rune target DEF buff increased from +150% to +200%
- Blaster Sentry (and static custom skill variant) now has a 0.5 second delay before the first shot is fired
- Freeze Rays rotateTime decreased from 1.7 to 1.5 (rotates faster around player)
- Triblader Warp Decoy is now slightly nerfed due to the rework (can be more easily destroyed)

## 2.19.0 (08/09/2025)
### New Content
- New Hexacast combat art: Kindling Dance (Heat Guard Lv.1B)
- New sprites for shadowflame "fireballSmall" bullets (Fire Hand, etc)
### Changes
- Added preIdle ending animation to Flame Tackle (on hit)
### Fixes
- Deleted all inert "maxBounds" proxy properties in all player/enemy files (artifact from vanilla Lea code)

## 2.18.2 (08/09/2025)
### New Content
- Added \js\azure-lazuline\postshoot-delay.js (code by Azure Lazuline)
### Changes
- Re-sprited Hexacast east postShoot1H animation
- Split all 128 instances of Hexacast postShoot animations into 1-handed and 2-handed versions to improve animation flow
- Added preIdle ending animation to most Hexacast arts not ending in postShoot
- Increased player flash color brightness for effects brittleBarrierGlow and healCardGlow
- Removed preIdle animation step from the end of Lea Hexacast base throwing custom skills to fix animation glitch
- Changed Icicle Lance ending animation to preIdle instead of postShoot
- Increased action wait time for Thunder Jacket to improve animation alignment (no affect on casting time)
- Added a 0.1 second animation delay after the end of Celestial Cohort's final hit
- Meteor Storm (ranged edition) now spawns the projectile card at startDist offset -48 instead of 0
- Hexacast now uses triblader battleIdle animation for Overclock
### Fixes
- Fixed the "aim" animation glitch which occurs after Hexacast throw attacks/arts (code by Azure Lazuline)
### Balance
- Frozen Fortress first attack knockback changed from reverse MEDIUM to straight MASSIVE

## 2.18.1 (08/04/2025)
### (not)New Content
- Split all Hexacast postShoot animations into distinct 1-handed and 2-handed versions (new sprites)
- This exacerbates the issue caused by the game's forced aim->preidle->idle animation performed after any throw art or throw attack
  * https://github.com/XenonA7/xenons-playable-classes/issues/25
- As a result, added the original postShoot animations back while keeping the new ones as unused
### Changes
- Adjusted animation timing for Hexacast Ragnarök (visual only)
- Improved effect scorchingSwirlHexagons2
- Proxy spellTagCard now appears further away from its target before attacking
- Repositioned floatEC sheet within Hexacast spritesheet
- Added hover and hoverMove walkAnim definitions to Hexacast player/character files
### Fixes
- Fixed particle pScale timings for effects spiritBlastHexagons and spiritBlastHexagonsRev
- Deleted redundant "hovering" sheet in Hexacast animation files
### Balance
- Spell Tag dash speed decreased from 350 to 325

## 2.18.0 (08/03/2025)
### General
- Hexacast litter mod updated to 2.1.2
### New Content
- New Hexacast combat art: Ruinous Pulse (Neutral Guard Lv.2A)
- Added new Hexacast sprite animations: handUpPre, handUpLoop, handUpPreAir, handUpLoopAir
- Added some cheat skill icons although they are currently unused
- Added \js\azure-lazuline\action-buff-timers.js (code by Azure Lazuline)
- Added additional "class tips" dialogue for Hexacast in hideout-lobby
### Changes
- Ampere Cloak reworked to explode on contact rather than doing repeating damage
- Blinding Glare will now only proceed if you hit at least one enemy with the initial hit
- Blinding Glare description rewritten
- Hexacast now uses handUp animation for Freeze Rays, Polar Pirouette, Ignite Embers, and Ragnarök
- Improved Hexacast animation/effect alignment for Ragnarök
- The enemy-testing map now has EXP gain disabled by default
- Triblader League quest reward changed from neutral CP to 3 "One Up" items
- Temporal Miasma's ally-targeting zone hitbox changed from limiter NO_DAMAGE to SIGNAL
- Added custom effect freezeRaysPlayerPulse to the start of Freeze Rays
- Adjusted the duration/movement of the SHOCK_EXPLODE particles in effect thunderJacketExplode
### Fixes
- Corrected some illegal colors in spritesheet hexacast2.png
- All action buffs granted by XPC combat arts now have functional timers on the GUI (code by Azure Lazuline)
- Fixed player Triblader ATTACK and ATTACK_REV actions having too short post-melee WAIT times for neutral versions
- Player Triblader4 changed to have proper post-melee WAIT times, with speed now coming from shorter "attack" action block time
- Fixed Spectral Swordsman first melee hit having wrong/low damageFactor
- Fixed Spectral Swordsman/Legion not having checkCollision for melee attacks
- Chilling Thrust no longer categorized as "INTERRUPT"
- Fixed Fire Saw hitbox zHeight
- Fixed Shining Shield using old name in Hexacast class tips dialogue
- Fixed text formatting error in Hexacast class tip #29
### Balance (Triblader)
- Unified player triblader damageFactor values for default melee attacks across elements (1.05 standard, 0.925 for Triblader4)
  * It was previously 1.05 for neutral, 1.15 for other elements
- Enemy triblader non-finisher melee sweeps damageFactor reduced from 1.15 to 1.05
- Player triblader ATTACK and ATTACK_REV "attack" action block reduced from 0.3 to 0.28
- Player Triblader4 ATTACK and ATTACK_REV "attack" action block reduced from 0.3 to 0.24
- Player Triblader4 ATTACK and ATTACK_REV damageFactor increased from 0.85 to 0.925
- Trailblazer firePillar proxy removed initial spawn explosion hitbox
- Trailblazer firePillar proxy increased contact damageFactor from 0.25 to 0.40
- Trailblazer firePillar proxy status inflict factor increased from 1.0 to 2.5
- Trailblazer dash hitbox damageFactor increased from 0.35 to 0.60
- Trailblazer final spin attack damageFactor increased from 1.5 to 2.5
- Trailblazer final spin attack knockback increased from HEAVY to MASSIVE
- Double Whirl reduced delay after first sweep by 0.1 seconds
- Spectral Swordsman hpFactor increased from 2.5 to 2.65 (will survive 2 charged shots now)
- Chilling Thrust initial hitbox made smaller and reduced from MASSIVE to HEAVY
- Fire Saw strength reduced from HEAVY to MEDIUM
- Fire Saw knockback reduced from MASSIVE to HEAVY
- Fire Saw damageFactor reduced from 2.7 to 2.25
- Frost Rupture now grants MEDIUM hit stability during initial hits, MASSIVE stability during final thrust
### Balance (Hexacast)
- Shock Surge damageFactor increased from 3 to 5
- Icicle Deck trigger delay reduced from 0.05 to 0.02 seconds

## 2.17.1 (07/21/2025)
### New Content
- Added proper chakram animations for Hexacasts when using Spheromancer custom skills
### Changes
- Glaring Shine renamed to Blinding Glare

## 2.17.0 (07/20/2025)
### New Content
- New Hexacast combat art: Glaring Shine (Neutral Guard Lv.2A)
- New Hexacast custom skill: Gradual Hive Missile (Neutral Throw Lv.2)
- Added hexacast animation dashRevFast
### Changes
- Stunning Glare removed from main Hexacast player file, it is now a custom skill
- Added light source to effect glareFlash
### Fixes
- Fixed missing walkAnimSet definitions from XPC character files
### Balance
- Stunning Glare damageFactor reduced from 8.5 to 7.0

## 2.16.0 (07/19/2025)
### New Content
- New Hexacast combat art: Stunning Glare (Neutral Guard Lv.2A)
### Changes
- "Shine" renamed to "Shining Shield" to better conform to the naming convention
- Added background hacking particles to first room in char-select.basement
- Reworked first vanishing wall in char-select-basement so that it isn't solid while disappearing
- Minor dialogue tweaks to char-select.interior
- Adjusted audio during player initial dash in Verdant Eruption
- Verdant Eruption can now be used off cliffs
- Verdant Eruption main hitbox now extends -32 below ground
- Adjusted audio for effect eruptionCenterBlast
- Shortened particle spawn duration in effect eruptionBlastEnd
- Edited particle pScale for effect eruptionFinalPulse
- Overhauled audio settings for effect hexBarrierAura
- Snow Lance reduced backwards player movement distance
### Fixes
- Fixed inconsistent damageFactor for Lea's custom skill Hexacast uncharged shots
- Fixed Lea's custom skill homing Hexacast charged shots not having reduced damageFactor
- Fixed Stasis Storm finisher hitbox being slightly too small
- Fixed DUST_UP particles in neutral.json.patch being guiSprites (now it is false)
### Balance
- Verdant Eruption total damage reduced
- Storm Chaser damageFactor increased from 0.6 to 0.65 per hit
- Extended the length of Snow Lance

## 2.15.1 (07/06/2025)
### Changes
- Added new effect eruptionFinalPulse to the end of Verdant Eruption
- Adjusted Verdant Eruption ACTION_BLOCK timings
### Balance
- Added a startup delay to Verdant Eruption
- Increased duration of Verdant Eruption's "eruption" segment by 0.4 seconds

## 2.15.0 (07/06/2025)
### New Content
- New Hexacast combat art: Verdant Eruption (Wave Dash Lv.3A)
- Added custom skills to Hexacast1/2 for homing/straight charged shots (opposite of their default)
### Changes
- Celestial Cohort changed from DASH_SPECIAL3_B to DASH_SPECIAL3_A
- Reduced size of the second hexagon particle in effect stormChaserFlyActivate
- Adjusted audio and added particles for Triblader effect shockLaserShoot (Prismatic Meltdown)
- Shortened description for Shadowflame Sorcery
- Improved wall decorations for enemy-testing map
- Adjusted offset for effect dummyAuraEndHex
- Increased size of effect stasisStormCardLaserSrc
- Triblader effect triforceShatter now comes out in an arc instead of 360°
- Increased light radius of effect rayLaserBeam
- Added pLight property to effect rayGroundArrows
- Improved alignment of effect groundIndicatorTiny for proxy iceCardSmall
### Fixes
- Schneider now uses the new Phase Jump landing effect added in XPC v2.11.2 for the ultimate pvp intro cutscene
- Fixed Hexacast non-neutral uncharged VRPs inconsistent damageFactor (buffed to standard 0.6)
### Balance
- Shadowflame Sorcery movement speed buff decreased from +45% to +25%
- Stand-alone trap version of Wave Detonation now has a 5-second delay before it arms itself
- Stand-alone trap version of Wave Detonation damage increased
- Wave Detonation (all variants) increased status inflict factor

## 2.14.0 (06/28/2025)
### New Content
- New Hexacast combat art: Storm Chaser (Shock Dash Lv.3A)
### Changes
- Cleaned up effect stasisStormLaserImpact
- Improved laser src effect for proxy stasisStormCard
### Fixes
- Added missing NO_PUZZLE property to final melee hit of Stasis Storm

## 2.13.1 (06/15/2025)
### Fixes
- Fixed Stasis Storm trigger inconsistency when player has a timeflow buff

## 2.13.0 (06/15/2025)
### General
- Hexacast litter mod updated to 2.1.1
### New Content
- New Hexacast combat art: Stasis Storm (Shock Melee Lv.3A)
- Added new Hexacast class tips to hideout-lobby
### Changes
- Updated all PLAY_ANIM_RANGE effect steps in the mod to use `"alongY": true`
- Deleted unused proxy stasisStormDummy
- Added randFlip property to all Hexacast CYBER_BOLT_SHOCK particles
### Fixes
- Fixed hoverText for Hexacast1 sign in unused-content
### Balance
- Hexacast2 homing charged shots damageFactor reduced to 1.0 (normal is 1.3)

## 2.12.0 (06/01/2025)
### New Content
- New Hexacast combat art: Blade Curse (Neutral Dash Lv.1B)
- New Hexacast combat art: Sorcerer's Sawmill (Neutral Dash Lv.2B)
- New Hexacast custom skill: Acceleration Mine (Neutral Dash Lv.1)
- New Hexacast custom skill: Meteor Flare (Ranged) (Heat Throw Lv.1) (shadowflame support)
- New Hexacast custom skill: Meteor Storm (Ranged) (Heat Throw Lv.2) (shadowflame support)
- Added a sign in the "unused content" room to add party member Hexacast1
- Added shadowflame alt variant to Flame Mortar (improved radius, status inflict, and damage)
### Changes
- Acceleration Mine removed from main Hexacast player file, it is now a custom skill
- Acceleration Mine never worked for directional knockback, description and effects are now updated to reflect that
- Improved spritework for shadowflame particle DARK_BIG_HEXAGON
- Improved spritework for shadowflame particle CIRCLE_STATIC
- Reduced size of CIRCLE_STATIC particles in shadowflame alt effect ashenInfernoExplode
- Replaced CIRCLE_STATIC particles in shadowflame alt effects meteorFinalExplode and meteorDebrisDiagonalBig
- Meteor Flare reworked by removing initial chargeup, now tosses a card on the ground
- Added BLINK_COLOR and FADE_COLOR steps to effect blueColdTrail
- Proxy frigidFlurryCard now uses `"waitUntil": "entity.onGround"` to move forward
- Proxy faeSpike (pentafist) now uses `"waitUntil": "entity.onGround"` to move forward
- Proxy faeSpike (pentafist) now falls to the ground before exploding if the player is interrupted before spiking it
- Improved trail effects for proxies frigidFlurryCard and blizzardRushCard
- Blizzard Rush cards now travel faster, should now all explode before or during player final attack
- Reduced snowflake particle count for effects ballWallKillIcyGust and ballAirKillIcyGust
- Acceleration Mine now works using a TACKLE hit detection method rather than a targeting method
- Horizontally flipped the icon sprite for Healing Burst
- Adjusted sweep particle rotation in effect spellVolleySweep
### Fixes
- Fixed missing file \assets\data\maps\xpc\bonus\dev.json
- Fixed Meteor Flare, Meteor Storm, and Calamity Beacon torch pillars bugging out when used directly against a wall
- Fixed hitbox timing for Snow lance
- Improved Icicile Lance knockback values to keep enemies inside more consistently
- Fixed loop structure for effect blueColdTrail
- Fixed proxy sprite z offset for all Hexacast spellcards that stick in the ground
- Fixed proxy flameMini (Flame Mortar) not lasting long enough to play full animation
- Fixed inconsistent MELEE/RANGED damage types in Meteor Storm
### Balance
- Meteor Flare reduced delay duration before meteor impact
- Meteor Flare damageFactor decreased from 6.2 to 5.65
- Meteor Flare (shadowflame variant) damageFactor decreased from 9 to 8
- Meteor Storm initial charge time reduced from 0.75 seconds to 0.65 seconds
- Meteor Storm meteors now come out faster after card lands
- Ice Blitz damageFactor reduced from 1.75 to 1.25 for the first two sweeps
- Ice Blitz damageFactor reduced from 2.15 to 1.85 for the final hit
- Snow Lance overall damage increased
- Added a DAMAGE_CEILING to Snow Lance, only really affects massive enemies that can be hit by all proxies at once
- Icicle Lance overall damage increased
- Icicle Lance proxy hitbox radius increased from 20 to 28
- Frigid Flurry overall damage increased
- Frigid Flurry spellcard travel time reduced
- Frigid Flurry spellcard explosion radius reduced from 80 to 72 (should match the effect better)
- Acceleration Mine now allows for 6 active at a time
- Acceleration Mine damageFactor increased from 2.0 to 4.5
- Flame Mortar status inflict reduced
- Flame Mortar damage reduced
- Spell Tag dash speed increased from 300 to 350
- Shock Surge end lag (delay before player is actionable) reduced by 0.05 seconds

## 2.11.4 (05/17/2025)
### Fixes
- Fixed a typo in hideout-west
- Hexacast1 party member is now disabled. It was just a thing for testing purposes, I did not realize it was in the public release.
  Older saves with Hexacast1 will retain them in the party menu fully functional but XPC will no longer add this character as a party member going forward.

## 2.11.3 (05/17/2025)
### New Content
- Added triblader3-spam.json (not tracked in records)
- Added option to fight against standard or spam AI in the 1v1 triblader training arena room
### Changes
- Changed Triblader3 in the "Ultimate PVP" map to be the spam variant

## 2.11.2 (05/17/2025)
### Changes
- Modernized Spectral Legion clones to use SELECT_RANDOM steps instead of overcomplicated SET_RANDOM_VAR_NUMBER
- Added more triangles to Ether Bomb effects
- Added pLight property to SNOWFLAKE1 particles in effect frozenRayTrail2
- Added SHOCK_SHADOW particles to the rapid attacks in Amber Flurry
- Deleted \media\entity\effects\darkSwirl.png, particle now uses DLC spritesheet via extension-asset-preloader
- Renamed penguin-heat-alt.json to penguin-heat-elder.json
- Renamed triblader2-freq-arts.json to triblader2-spam.json
- "Frequent Combat Arts" arena cup renamed to "Trigger Happy"
- PVP tribladers: removed unused dialogue variable from COUNTER_COUNTER reaction
- PVP tribladers: changed optional wait at the end of throw action to be random between 0.2 and 0.5 but not optional
- PVP tribladers now use full bastion shields when they guard with the cold element active
- PVP tribladers can now use the ATTACK_GUARD reaction while throwing default VRPs
- PVP tribladers now swap strategies after getting melee countered
- PVP tribladers no longer move forward while doing ATTACK and ATTACK_REV if they are close enough
### Fixes
- Fixed missing or incorrect light sources for all remaining triblader cold/shock/wave effects
- Fixed hideout-cheat tile data on area map
- Added missing area map data for 2v2 triblader training arena
- Added delay to the end of effect snowBallLandSmall to add delay when looped
- Fixed typo in beekeeperCharge effect name
- Fixed broken loop implementation for effect boldPreLight
- PVP tribladers: fixed missing dust particles on some dodge and navigation actions
- PVP tribladers: fixed rare issue of moving too fast while throwing standard VRPs
- PVP tribladers no longer continue to face towards their target while doing an ATTACK_FINISHER
### Balance
- Vermillion Firestorm now has reversed knockback on the initial sweep
- Ether Bomb explosion damage doubled from 4.0 to 8.0
- Ether Bomb explosion now has critFactor 0.5
- Ether Bomb status factor changed from 2 to 1
- Enemy Vitality Curse HP absorb factor buffed from 0.05 to 0.075 (does not affect player version)
- Enemy Vitality Curse projectile speed buffed from 300 to 400 (does not affect player version)

## 2.11.1 (05/02/2025)
### Changes
- Schneider's arena cup lowered to level 70 (closer to the point in the story where it is unlocked)
- Updated Triblader-Lea gif on readme to use new sprites
- Updated Arcane Lab recommended version on readme to 0.1.8
- Chilling Thrust now cancels after the first frozen star if used to dash into a wall
- Updated descriptions in XPC character change signs for triblader lea and characters with custom skills
- Added dust effects to all Triblader neutral arts
- Azure Charge starting effect now uses a triangle particle
- Adjusted sound effect for Gleaming Surge enemy impact
- Improved player trail effect for Heavy Slash
- Removed art-testing-AL.json, which was a quick edit used for testing AL modifier cards
- Removed art-testing-sound-test.json, which was only for a quick feature test in the past
- Changed particles in effect triforceShatter to be renderMode lighter
### Fixes
- Fixed ability to shoot Spike Ball through narrow walls/fences by adding backwards recoil
- Deleted unused legacy triblader proxies noSpikeDmgProxy3s, noSpikeDmgProxy6s, and noSpikeDmgProxy10s
- Removed unused REMOVE_PROXIES references to legacy spikeDmgGroup proxies
- Lea and Hexacasts now show the proper triblader guard animation when using Scattering Shards
- Proxy sentryCardBullet now uses correct renderMode "lighter"
- Fixed swapped "match point" messages in Schneider's arena duel
### Balance
- Hexacast Sentry Card dash action block reduced from 0.25 to 0.15

## 2.11.0 (04/07/2025)
### New Content
- New Triblader combat art: Plasma Thrust (Shock Melee Lv.1B), Shadow Spark converted to custom skill
- Added custom levelup animation to triblader-lea. Thanks to Krypek for code framework and HeartLychee for original animation.
- Added a custom head icon and character file for triblader-lea
### Changes
- Recolored all triblader-lea spritesheets, changed the shades of green to be darker than Lychee's original
- Made edits to Triblader2/3/4/5 menu portrait based on suggestions from Rioreur (long overdue)
- Unified color palettes between Triblader4 menu and dialogue portraits
- Updated character-specific custom skill totals listed in the hideout-east info sign
- Spectral Swordsman and Spectral Legion no longer share proxy groups, now possible to use both at once
- Reduced screen flash intensity for effect shockImpactSmall
- Added new spawn effect for Spectral Swordsman
### Fixes
- Fixed proxy fireDaggerStuck rendering too high
- Deleted unused _Shock_Close1Alt (Shadow Spark) from triblader pvp enemies
- The backwards-moving part of Vortex Thrust no longer travels off ledges
- Fixed Phase Jump landing hitbox zHeight and entity alignment
### Balance
- Added a SET_DAMAGE_CEILING to Scorching Rays due to its tendancy to be inconsistnet
- Phase Jump landing damage factor increased from 3 to 8 with no critfactor (huge buff)
- Verdant Infection greatly weakened pull force strength prior to exploding
- Spectral Swordsman now deals quite a bit more damage
- Spectral Swordsman now allows up to 2 active at a time

## 2.10.0 (04/05/2025)
### New Content
- New Triblader combat art: Solar Thrust (Heat Melee Lv.1B), Flame Stab converted to custom skill
### Changes
- Added sound effects to Flame Stab (was previously silent)
- Improved effect for Flame Stab
- Reduced screen flash intensity of effect doubleWhirlShoot
- Added subtle screen shake to effects doubleWhirlSweep and doubleWhirlSweepRev
- Improved effect tribladerSweepSmall
- Added particleDurVariance to triangle particles in effect doubleWhirlShoot
- Added weather particles to Flame Turbine
- Improved Flame Turbine effect airSweepLoopTri
- Flame Turbine now jumps back towards a marker placed at the start of the dash instead of blindly backwards
- Improved hitbox vertical offset for proxies flameHitS and flameHitSWeak
- Added snowflake trail to Frozen Rays
- Improved effect snowSweepSpin
- Snowstorm now grants IGNORE collType during melee attack
### Fixes
- Flame Turbine rework should fix all instances where it was previously possible to climb out of bounds
- Fixed Trailblazer missing light source
- Fixed Vermillion Firestorm effect light sources
- Fixed Snowstorm hitbox zHeight
### Balance
- Scorching Rays overall damage slightly increased
- PVP enemies only: Lava Sweep pull force strength increased from RUN_ESCAPE to DASH_ESCAPE
- Frost Rupture delay between swings reduced by 0.8 seconds
- Frozen Rays damage factor increased from 6.4x3 to 7x3
- Snowstorm frozen stars now use startDistCollide DROP instead of CLOSER (won't spawn in walls)

## 2.9.0 (03/30/2025)
### New Content
- New Triblader combat art: Double Whirl (Heat Melee Lv.2A), Solar Eruption converted to custom skill
- Added triblader animations spinLongFast and spinLongFastRev
### Changes
- Lea (spheromancer) now uses Triblader-Lea unique effect sprites when using Triblader custom skills
  * Daybreak
  * Sunfury
  * Wave charged shot
- Modernized action steps for Recoil Slash
- Removed camera steps from Recoil Slash
- Overhauled effects for Recoil Slash
- Adjusted lighting parameters for effect rudeBusterExplode
- Deleted smack.ogg, changed hit sound for Gleaming Surge
- Removed camera steps from Lava Sweep
- Lava Sweep pull force now has minimum radius 32 (was 0)
- Improved effect heatSpecialSweepBig (Lava Sweep, Vermillion Firestorm, Trailblazer)
- Improved effect flameWallTriblader
- Improved effect bigSweepDaybreak, reduced screen flash intensity
- Classified Daybreak as INTERRUPT
- Added light sources to the following triblader effects:
  * wirbelschlitzerSweep
  * spikeBallShoot
  * sweepNeutralDouble
  * sweepNeutralDoubleRev
  * triProjectile
  * wervynSweep
  * stabNeutral
  * finisherNeutralBig
  * sweepHeatDouble
  * sweepHeatDoubleRev
  * heatCounterGuard2
  * stabHeatLoopFast
  * daybreakSparks
  * daybreakSparksLite
### Fixes
- Fixed triblader-lea unique sprites for Daybreak, wave charged shot, and Solar Eruption (now a custom skill)
- Fixed Triblader animation spinLongRev having different frame duration thatn spinLong
- Fixed 2.8.0 Wirbelschlitzer changes not applying to some PVP triblader variants
- Fixed Recoil Slash stun and hitbox inconsistencies
- Fixed Kindling Triad stun mechanics and final hit knockback
- Removed inert stun steps from triblader proxy "flame"
- Fixed light radius for Fire Saw, Lava Sweep, and Daybreak
- Fixed two instances of name string space padding in Triblader REMOVE_SHIELD steps
- Lava Sweep lingering fire now benefits from MELEE_DMG skillBonus
- Daybreak collateral hitbox zHeight fix
### Balance
- Wirbelschlitzer knockback increased from HEAVY to MASSIVE
- Kindling Triad proxy flamethrowerTriangle is now breakType ACTION (will not continue if player cancels attack)
- Kindling Triad total damage slightly increased
- Recoil Slash damage factor decreased from 6 to 5.25
- Lava Sweep no longer provides a shield to the user, now grants HEAVY hit stability
- Lava Sweep no longer stun locks enemies
- Lava Sweep hit strength decreased from MASSIVE to HEAVY
- Lava Sweep melee damage factor increased from 1.5 to 2.5
- Lava Sweep pull force decreased from DASH_ESCAPE to RUN_ESCAPE
- Lava Sweep lingering fire damage decreased
- Daybreak projectile speed decreased from 800 to 600
- Daybreak impact damage factor decreased from 2 to 0.5
- Daybreak collateral damage factor decreased from 0.8 to 0.6
- Daybreak tick damage factor decreased from 0.4 to 0.275

## 2.8.0 (03/24/2025)
### Important
- Any equipped custom skills on Hexacast1/2 will need to be re-equipped in the menu after updating
### New Content
- Added the file "info-for-modders.md" which documents all code/technical features of XPC
- New Triblader combat art: Shattering Blade (Neutral Melee Lv.1B), Wild Gambit converted to custom skill
- Added limited Triblader custom skill support for old combat arts
- Added teleporters between hideout-southwest and starcaller2 lobby - only active if the Starcaller2 mod is also installed
### Changes
- Reformatted all internal names for Hexacast custom skills belonging to Tri/Sphero from "csTriblader..." to "csHexacastTriblader..."
- Cursor Teleport no longer has a 0.5 second delay between teleporting and when you are able to walk
- Edited dialogue in hideout-outide cutscene questFirstEntrance to remove post-bergen lea words
- Changed center wall decoration in hideout-hexa to be more hexagonal
- Added new particle effects to triblader effect beeTrail
- Deleted particle BEE_RIPPLE_REV from combat.tribladerXPC effect sheet
- Added pitch variance to all Triblader/Hexacast bee buzzing effects
- Created new effects for Rude Buster
- Proxy rudeBuster modernized as BALL proxy (replaced ancient primitive code)
- Improved triblader effect frozenRayTrail
- Removed plot.xpc.tempQuest (placeholder in flamepeng enemy files)
- Removed unused action step REMOVE_ALL_PROXIES
- Overhauled Blade Aura's effects
- Improved Triforce Slash effects sweepShockDouble and sweepShockDoubleRev
- Added basic throw effect to Spike Ball
- Changed effects, description, and animations for Lightning Strike
- Tribladers now use the same animations in Homing Shards as Lea/Hexacast did in the custom skill version
- Updated effects for proxy neutralKnife (Throwing Knives)
- Deleted ttyd_disapproval.ogg
- Updated effects for Wirbelschlitzer
- Added +2 to all offset z values of Triblader double sweep effects
- Improved and reformatted effects sweepNeutralDouble and sweepNeutralDoubleRev
- Updated sweepNeutralDouble effect alignment in Laser Barrage
- Spike Ball now shows a more complete throw animation
### Fixes
- Fixed animation issue following initial conversation (apollo version) in cheat codes quest
- Fixed repeating 1-frame animations for all particle effects
- Fixed repeating 1-frame animations for all player/enemy/customSkill proxies
- Fixed Rude Buster proxy start position
- Removed unused proxy specialSmall from tribladers
- Fixed all instances of WAIT for time 0.01 in all files (increased to 0.02 minimum standard)
- Fixed Blade Aura effect by showing it on user instead of proxy
- Fixed Blade Aura hitbox offset
- Fixed proxy triforceTrigger sliding on walls for a short time
- Fixed pLight for effect triforceShatter
- Fixed Throwing Knives startDistCollide settings
- Fixed Wirbelschlitzer SWORD1_END particle timing
- Fixed Fire Whirl hitbox zHeight
### Balance
- Rude Buster explosion radius reduced from 24+48 to 24+32
- Blade Aura duration increased from 6 to 8
- Homing Shards now takes half the time to shoot
- Homing Shards damage decreased
- Throwing Knives now has bigger projectiles
- Wirbelschlitzer start delay reduced, damage reduced, hit strength decreased from MASSIVE to HEAVY

## 2.7.1 (03/02/2025)
### New Content
- Added Lubkuluk code to pvp-gui-fix.js to disable speedup on player death using variable tmp.speedUpBlock
- Added sprites for missing directions in Hexacast "float" animation
### Changes
- Tweaked the shadowflame version of effect calamityCopyTrail
- Changed rendermode of all neutral SHINE_SPARKLE particles to lighter
- Changed all healing custom skill hitboxes to use the SIGNAL limiter
- Changed cameraInBounds to false for map pvp-triblader-league-c
- Proxies waveRecallCardA and waveRecallCardB are no longer considered threats by enemies
- Added SNOW_BURST particles to start of effect hailBullet2Aura
- Increased SNOWFLAKE1 startDist in effect frigidFlurrySweep1
- Improved vertical alignment/shape for explosion hitbox in proxy frigidFlurryCard
- Ashen Hex, Ashen Inferno, Spark Stream, and Creeping Cold improved vertical hitbox (includes shadowflame variants)
### Fixes
- Fixed issue caused by moving immediately when coming up the elevator in hideout-lobby
- Fixed Icicle Lance missing description
- Fixed instances of string bool values in Hexacast player files
- Fixed instances of file path space padding in Hexacast/Triblader/CustomSkill/Enemy files
- Fixed FADE_COLOR step not working in effect aceOfFlamesCharge
- Deleted duplicate SNOW_BURST_GUI entry in effect file cold.json.patch
- Fixed missing shadow size for proxies hailBullet1, hailBullet2, hailBullet3
### Balance
- Flame Tackle TACKLE hit strength changed from MEDIUM to HEAVY
- Fire Barrage TACKLE hit strength changed from HEAVY to MASSIVE

## 2.7.0 (12/09/2024)
### General
- Hexacast litter mod updated to 2.1.0
### New Content
- Added shadowflame variants to all Hexacast heat arts
- Added new penguin-heat-alt enemy (modified sprites by Orco Pixelado), unique attacks not yet implemented
- Added shadowflame-alts.json efffect sheet
### Changes
- Reworked Flamepeng element resist values (now mostly weak to cold, not shock)
- Added "kills" value to flamepeng database entry
- Debris particles in effect meteorFinalExplode changed to guiSprites
- Proxy thunderSmallTS now uses new effect boldSmallTS instead of boldSmallNoShakeHex
- Reduced shadowflame melee travel distance
- Moved the following effects to sheet shadowflame-alts
  * firebrandAttackDark 
  * augmentedFlamesCharge
  * augmentedFlamesBoom
- Reduced particle count for effect darkFireBoom
### Fixes
- Fixed triblader JADC - no longer stops before edge on standard melee attacks
- Fixed hexacast JADC
- Fixed shadowflame JADC
- Fixed a duplicate json entry for for effect thunderingSparksLightning
- Fixed duplicate grouping for effect icicleLancePlayerHexagons
- Fixed particle delay mismatch in effect icicleLancePillarHexagons
- Fixed shadowflame melee finisher radius being too large
### Balance
- Shadowflame Firebrand is now the powered-up version of Firebrand
- Icicle Lance start delay increased from 0.35s to 0.42s
- Icicle Lance width decreased from 32 to 24
- Icicle Lance final icicles no longer stun enemies
- Shadowflame melee attack rate increased
- Shadowflame melee attack damage slightly decreased

## 2.6.1 (12/03/2024)
### Fixes
- Fixed Triblader2 level 99 party member (thanks to Krypek and others)
   * This is not retroactive to existing bugged save files

## 2.6.0 (11/27/2024)
### New Content
- New Hexacast combat art: Snow Lance (Cold Melee Lv.1A)
- New Hexacast combat art: Icicle Lance (Cold Melee Lv.2A)
- Added action step DISABLE_SPIKEDMG (code by Azure Lazuline)
- Added action step DISABLE_HEALTHBAR (code by Azure Lazuline)
### Changes
- Deleted broken action step SET_ALL_SPIKE_DAMAGE
- Sorted js files according to contributors
- Updated in-game mod credits
- Improved sprite symmetry in lighter-particle-big-hexagon.png
- Tweaked rumble, audio, screen flash for effect thunderingSparksLightning
- Added more emphasis to effect sentryCard2Shoot
- Minor Apollo dialogue edits to "cheat codes" quest
- Renamed effect icePillarTiny to icePillarTinyExplode
- Improved player invisiblity by disabling healthbar in the following arts (special thanks to Azure Lazuline):
   * Phase Jump
   * Ethereal Stance
   * Shock Surge
   * Wave Recall
   * Zir'vitar Strike
### Fixes
- Fixed loop timing for effect fireBarrageHexagons
- Fixed Jolt Mortar trail effect starting too early
- Added "guardable": "NEVER" property to Healing Burst
- Fixed pin body issue for the following arts (special thanks to Azure Lazuline):
   * Shine
   * Ice Brace
   * Stasis Stance
   * Tower of Tranquility

## 2.5.0 (11/17/2024)
### Important
- Do not update if your quests "Fire Breathing Penguins" or "The Triblader League" are
	currently in progress. It is best to update if these quests are complete or have
	not been accepted yet.
### New Content
- New Hexacast combat art: Thundering Sparks (Shock Throw Lv.3B)
- New Hexacast custom skill: Poison Slash (Neutral Melee Lv.2)
- New Hexacast custom skill: Sentry Card (Neutral Throw Lv.1)
- New Hexacast custom skill: Heavy Sentry (Neutral Throw Lv.2)
- Added "cheat" custom skills to Lea and all XPC characters
   * Cursor Teleport (Neutral Throw Lv.1)
   * Cliff Jump 1 (Neutral Melee Lv.1)
   * Cliff Jump 2 (Neutral Melee Lv.1)
   * NoClip (Neutral Dash Lv.1)
- Added new quest to unlock cheat custom skills
   * Available after entering the custom skill hideout room
   * Quest NPC located near the modding hideout landmark
- Added \patches\data\database\xpc-misc-events.json
- Added N and NE sprites for Hexacast 1/2/3 float animation
### Changes
- Removed \maps\bergen\hideout-hexa-just-platform.json
- Tweaked icon sprites for Lea ranged Hexacast custom skills
- Animation Debugger custom skill is now a neutral guard art instead of a shock guard art
- Animation Debugger moved from character-specific custom skill patches to cheats-universal.json
- Animation Debugger and all other debug custom skills are now locked behind the new quest
- Renamed quest condition labels for existing XPC quests to match task number
- Renamed effect whitheringSlashAir to witheringSlashAir
- Added random top lightning offesets to Hexacast proxy thunderSmall, thunderSmallWeak, and thunderSmallZirvitarDash
- Replaced all Hexacast instances of effect boldSmallNoShake with boldSmallNoShakeHex
- Slightly tweaked Hexacast3 color palette
### Fixes
- Hexacast Arctic Blast custom skill now uses proper sword animation
- Fixed the "Dash Master" NG+ functionality for XPC characters by adding the missing DASH_LONG action
- Fixed frame 2 of Hexacast south walk animation having a 1 pixel offset
- Fixed Ethereal Stance showing a circle-shaped effect instead of hexagonal
- Active Wave Recall cards now despawn when combat begins (code by Azure Lazuline)
- Fixed missing SET_ACCEL_SPEED in proxy magnetDeckBoltHitbox
### Balance
- Shine no longer benefits from Pin Body
   * Introduced the same bug as Triblader cold guard arts (pin body disabled until element switch)

## 2.4.0 (10/21/2024)
### New Content
- Added base Hexacast ranged/attack actions as Lea custom skills
- Added Lea Hexacast attack animation (sprites by HeartLychee)
- Added hideout-hexa map to XPC hideout area and updated Bergen area map
- Added OLV fade in/out effects to xpc-utility effect sheet
- Added weather XPC_SPACE and env particle DARK_DUST_XPC_SPACE
- Added doormat-spawn-fix.js (code by Krypek)
### Changes
- Added Azure Lazuline to mod credits
- Increased dot particle size in effect miasmaBuffAura
- Renamed \patches\data\animations\player.json to \patches\data\animations\lea-tri.json
- Deleted unused Hexacast animations
 * spinClosedFull
 * spinClosedShort
 * spinClosedShortRev
### Fixes
- Fixed unintentional charged shots when using Hexacast uncharged throws (code by Azure Lazuline)

## 2.3.0 (10/06/2024)
### New Content
- New Hexacast combat art: Celestial Cohort (Wave Dash Lv.3B)
- New Hexacast combat art: Temporal Miasma (Wave Dash Lv.2A)
- New Hexacast custom skill: Miasmic Mortar (Wave Throw Lv.2)
- New Hexacast custom skill: Healing Burst (Wave Melee Lv.1)
- Defined new animation "chestFrame1" to Triblader2/3/4/5/Lea
- Added new Hexacast tips to hideout-lobby
- Added a new xenodialogue conversation to hideout-east
### Changes
- Upgrade rooms in Rhombus Dungeon now support XPC characters for animations
- Element unlock rooms in all dungeons now support XPC characters for animations
- Added dialogue to the party member NPC advisor in the unused content room
- Added shadows to hideout-northwest under bridges
- Extended hideout-east map width by 2 tiles
- Removed sourceMappingURL line from map-styles.js
- Updated Essence Steal description
- Hexacast homing shots now disabled if any air conditioner enemies are present on the map
- Reduced dot particle count in effect specials.wave-slowDebuff
- Renamed healTargetFXProxy to healMortarFXProxy
### Fixes
- Fixed player disappearing sometimes on Calamity Beacon descent
- Fixed a typo in char-select/basement
- Fixed a typo in hideout-lobby
- Fixed Abandoned Site appearing on world map
- Fixed Lightning Hex to not apply jolt status effect
- Heal Mortar impact is no longer guardable

## 2.2.2 (09/14/2024)
### Changes
- Tweaked Hexacast character portraits
### Fixes
- Re-added missing NPC encounter from Basin Keep

## 2.2.1 (09/14/2024)
### Changes
- Removed NPC encounter in beach/path-04 (Rough Lagoon) and replaced it with a new conversation in the same map
- Tweaked player animations during Spell Volley combat art
### Fixes
- Fixed a file path issue in triblader animation sheets
- Fixed Ether Bomb hitbox verticality

## 2.2.0 (09/12/2024)
### New Content
- New Hexacast combat art: Reciprocal Gale (Cold Dash Lv.2A)
- Added a xenodialogue to hideout-north
### Changes
- Icy Gust is now dash-cancelable before the art completes
- Made Beam Blaster hitbox slightly more reliable
- Ashen Inferno no longer stops player at cliff edge
- Reduced light raduis of effect ashenInfernoSweep
### Balance
- Beam Blaster hitbox size slightly increased
- Beam Blaster hitbox now hits 16 below vertically

## 2.1.0 (09/10/2024)
### New Content
- New Hexacast combat art: Icy Gust (Cold Dash Lv.1A)
### Changes
- Tweaked Hexacast character portraits
- Added additional ground detailing to unused-content and enemy-testing maps
- Reduced opacity of hailBullet2 trail
- Deleted Shield Generator combat art
### Fixes
- Fixed typo and text description for custom skill sign in art-testing
- Fixed crash in ultimate-pvp when talking to Triblader3 as Hexacast2
- Fixed effect wavePullHex using WAVE_DOT1 instead of WAVE_DOT2 particles
### Balance
- Added a start delay to Cosmic Recursion
- Kindling Triad now provides a temporary shield during the counter attack

## 2.0.1 (08/25/2024)
### New Content
- Added a "Quest Debug" sign to the unused-content map in the Bergen hideout basement
 * This can be used to fix the Flamepeng quest retroactively in save files where it was completed in the old XTM
   mod and is now broken in XPC after updating and playing on the same save file.
### Changes
- Added a dialogue box to the character change sign in hideout-north
- Added art-testing-sound-test map to files (unused in-game)
### Fixes
- Fixed xpc-lab props animation timing variation
- Removed old XTM terminology from README.md

## 2.0.0 (08/23/2024)
### Important
- Mod is now known as "Xenon's Playable Classes", also known as the "playable classes mod"
- Hexacast mod discontinued, all content is now merged here
- Hexacast litter mod updated to 2.0.0 to support XPC
- Save-compatible with old mod versions but progress for mod content will be reset, such as unlocking the triblader arena cup
### Dependency Updates
- Now requires AlyBox 1.1.0 or higher
- Now requires menu-ui-replacer 1.0.5 or higher
- Please uninstall any versions of the old "xmc-hexacast" mod you might have
- Please uninstall any versions of the old "logic-steps" mod you might have
### Changes
- Hexacast characters are now playable options in the mod intro maps
- Added cutscene option to skip mod intro
- Removed Krypek plugin.js menu option to skip mod intro
- Cut down on BGM bloat
- Renamed BGM scarpsCave to lazCave
- Renamed all internal files and variables to xpc from xtm/xmc
- The Triblader League now has a proper associated quest in post-Ku'lero Rhombus Square
- Updated all mod credits in-game
- Removed DLC assets due to extension-asset-preloader fix:
 * \assets\media\entity\effects\gynthar-heat-copy.png
 * \assets\media\entity\effects\rainbow-ring.png
- Added class subdirectories in \assets\media\entity\effects
- Renamed MULTI_CIRCLE_GUI to RAINBOW_CIRCLE_GUI in combat.tribladerXPC
- Renamed triblader-mm.png to tri-misc.png
- Reduced sound effect volume for molten dagger in blade rink cutscene
- Reduced fail sound effect volume for Wild Gambit
- Removed a lot of text pauses from intro maps
- Changed teleporter labels in unused content maps
- Retrofitted char-select.basement with conditional lights
- Dialogue tweaks in char-select.basement
- Modernized character change signs in info hub and arena lobby
- Slight dialogue tweaks in dark-passage-1
### Fixes
- Fixed internal map names for char-select maps
- Fixed lights in char-select.basement being visible early
- Fixed a typo in hideout-east
- Fixed Apollo 4, Shizuka, and Lily stats being invisible in XPC pvp maps

## 1.3.0 (08/05/2024)
### Important
- Added dependency mod: crosscode-extension-asset-preloader
 * https://github.com/elluminance/crosscode-extension-asset-preloader
### New Content
- Added Triblader, Pentafist, AL, and Lily custom skills to Lea (136 total)
- Added \patches\data\effects\specials\wave-custom.json
### Changes
- Imported \assets\media\gui\custom-skills from hexacast mod
### Fixes
- Fixed Triblader-Lea sprite offset for northeast jump animaitons
- Fixed Triblader-Lea sprite offset for east and southeast throwSpecial animation

## 1.2.5 (08/04/2024)
### Changes
- Removed remaining content from dev room, migrated to Hexacast mod
- Removed the following maps (now part of Hexacast mod):
 * \maps\xtm\bonus\guild-war.json
 * \maps\xtm\bonus\statue-cutscene.json

## 1.2.4 (07/31/2024)
### Changes
- Removed dev room teleporter from Lea's attic; the new dev room is currently in the Hexacast mod
- Deleted "training-island" teleporter from dev room
- Deleted "training-2v2" teleporter from dev room
- Removed the following maps (now part of Hexacast mod):
 * \maps\xtm\bonus\training-island.json
 * \maps\xtm\bonus\training-1v1.json
 * \maps\xtm\bonus\training-2v2.json

## 1.2.3 (07/14/2024)
### Changes
- Updated XTM dev room combat music settings
- Added effect spikeAuraNPC
- Removed the following maps (now part of Hexacast mod):
 * \maps\xtm\bonus\art-testing.json
 * \maps\xtm\bonus\art-testing.-ALjson
 * \maps\xtm\bonus\art-testing-unused.json
 * \maps\xtm\bonus\green-screen-room.json
- Deleted "art-testing" and "green-screen-room" teleporters from dev room

## 1.2.2 (06/26/2024)
### Changes
- Moved WIP maps to Hexacast mod
- Added particle pLight source to Triblader charged ball trails
- Updated charged ball light settings to Hexacast standard
- Added light sources to standard melee attack effects

## 1.2.1 (06/18/2024)
### Fixes
- Added Menu UI Replacer to install instructions

## 1.2.0 (06/18/2024)
### General
- New dependency mod: Menu UI Replacer
 * https://github.com/CCDirectLink/cc-menu-ui-replacement/releases
### New Content
- New menu sprites when playing as Triblader2/3/4/5
 * Original artwork by Orco Pixelado
 * Thanks to Bakafish for library mod support
- Added unfinished map file
### Changes
- Orco Pixelado added to mod credits
- Hue adjustments to Triblader4 portraits
- Updated Triblader4 sprite hue to be more consistent with portraits

## 1.1.1 (06/06/2024)
### Changes
- Blazing Mirage and So'najiz Phalanx clones no longer draw enemy aggro
### Fixes
- Fixed Spectral Legion clones able to consume SP

## 1.1.0 (05/29/2024)
### New Content
- Added green screen map to XTM dev room
### Changes
- Triblader5 DASH_SLOW action is now also steerable
- Added light source to effect waveTriangleTrail (used in Soul Shatter)

## 1.0.3 (05/13/2024)
### New Content
- Added additional font icons needed for Hexacast mod custom skills

## 1.0.2 (05/05/2024)
### New Content
- Added font icons needed for custom skills in Hexacast mod
- Added Lubkuluk to XTM credits for Hexacast KeyPanel code contribution
- Added teleporter to AL dev room from XTM dev room (only works if AL is installed)
- Added map art-testing-AL.json, not implemented by default
### Changes
- Moved the hologram sign slightly in the art-testing map
- Removed the sword icon from the mod's name entry
- Deleted unnecessary proxy groupings "solarEruptionParts" and "solarEruptionGroup"
- Vermillion Firestorm effect laserSrc changed to laserSrcMega
### Fixes
- Fixed pvp opponents not charging before using Solar Eruption
- Removed all broken animation references to "attackMirrEnd"
- Fixed Spectral Legion clones shooting wrong proxy types occasionally

## 1.0.1 (03/16/2024)
### Changes
- Magnet Storm now resets camera during final strike
- Magnet Storm added sound effect when final strike hits
- Re-worded the description for Magnet Storm
### Fixes
- Blizzard Slash fixed missing HEAVY hit stability
### Balance
- Changes to both player and enemy:
 * Icicle Slash reverted to old punch-style hitbox
 * Icicle Slash hit stability decreased from MASSIVE to HEAVY
 * Blizzard Slash first swing reverted to old punch-style hitbox
 * Blizzard Slash second swing increased hitbox radius from 72 to 88

## 1.0.0 (03/16/2024)
### New Content
- New character: Triblader Lea (sprites by **HeartLychee**)
 * No special modifiers. Custom Daybreak, Wave charge shot, Sunfury particle sprites by **HeartLychee**)
- New Triblader2/3/4/5 block pushing animations by **HeartLychee**)
- Magnet Storm completely reworked
- Added proper PVP enemy death handling in training maps and arena maps for duels with multiple opponents
- Added NPCs to dev room to demonstrate whether or not you have other mods installed (logic steps)
- Added new art-testing map to dev room
- Added effect critical to new PVP death logic: teleport.showFastScale
- Added \assets\data\effects\teleport.json.patch
### Changes
- Removed the "beta" map; You now proceed straight to the Rhombus Dungeon after choosing a character
- PVP enemy healthbars are more compact now, they now overlap to save space (only applies when dueling multiple opponents)
- Reformatted headIdx.json.patch for extendable-severed-heads 1.1.0
- Removed unused "pvp-lukas-old" and "pvp-schneiders" arena maps
- Added Triblader Lea character option to all XTM character change signs: XTM Dev Room, Rookie Harbor Info Hub, Rhombus Arena Lobby.
- Removed all instances of "plot.xtm.character", which is obsolete with AlyBox
- Removed "characterInitOnce" EventTrigger from arena lobby patch, which is obsolete with AlyBox
- Removed "plot.xtm.swapBack" functionality from arena maps
- Renamed custom-party-members.js to custom-party-options.js
- Updated HeartLychee credits preferences
- Changed BGM setting in "Blade Rink" arena match
- Updated all "XTM Credits" signs
- Removed unused "Triblader Prime" arena round
- Standardized BGM options in training-1v1, training-2v2, and training island maps
- Renamed enemy entities in training island map to XTM standard
- Reformatted the character change sign in the Rookie Harbor info hub to align with all other XTM signs
- Reduced particle count on Icicle Tomb to improve performance
- Dev room changes
 * Dev room teleporters now have spawn conditions, used for the mod crossover tests
 * Removed the hedgehags from the dev room
- Added combat dialogue support to apollo-4 and shizuka nozoom enemy variants (used for "Ultimate PVP" map)
- Player walks to starting position when starting the duel on Training Island, instead of running
- Re-worded description for Ice Flak
- Re-worded description for Tower of Tranquility
- Minor graphical tweak to Tower of Tranquility proxy sprites
- Beekeeper: bees now constantly look for the nearest target rather than always chase their original target
- Scorching Rays red screen flash is now less intense
- Added shaking effect right before thawing for Ice Brace, Stasis Stance, and Tower of Tranquility
- All BLUE_SPARKLE particles now have angleVary for all effects that use them
- Player now travels farther during Polar Geyser final slash
- Renamed effect megaTankAuraAltNoCircle to blizzardSlashSnowflakes
- Snowstorm post-attack wait increased from 0.4 seconds to 0.6 seconds
- Avalanche Assault and Frozen Rays initial screen flash is now less intense
- Proxy fireDaggerStuck changed from breakType NEVER to COMBATANT
- Greatly reduced zoom blur effect for Fire Saw
- Moved effects related to proxy ms_main into file ball-shock-xtm.json
- Effect shockLaserSource now moves with target
- Improved effects for the following arts:
 * Scorching Rays
 * Tower of Tranquility (landing effect)
 * Polar Geyser
 * Blizzard Slash
 * Snowstorm
 * Avalanche Assault
 * Calamity's Advent
 * Frigid Hurricane
 * Vermillion Firestorm
 * Magnet Storm
 * Sleet Singularity
### Fixes
- Fixed "Wet Work" quests for all Triblader characters by adding the "STANDARD" hint property
- Fixed a crash related to gynthar-heat.png (by including gynthar-heat-copy.png in the mod files)
- Fixed PVP enemies headIdx conflict with other mods (thanks to extendable-severed-heads 1.1.0)
- Added a NPBLOCK wall to fix an out-of-bounds JDAC exploit in xtm/char-select/outdoors
- Fixed wrong internal map name for xtm/char-select/outdoors
- Fixed all PVP maps "Match Point" AR_MSG text
- Retrofitted all pvp maps with new logic to handle deaths; no more defeated enemies sitting around
- Fixed ice sliding during cutscene after duel in "Blade Rink" arena map
- Fixed incorrect loop timing in BGM triangle-prep.ogg
- Fixed a code typo in Wild Gambit
- Fixed Wave Mortar "status" description property
- Fixed proxy waveMortar breakType (changed from NEVER to COMBATANT)
- Fixed proxy vitalityCurseDrain breakType (changed from NEVER to COMBATANT)
- Effect "stasisEffects" is now centered properly for Stasis Stance and Tower of Tranquility
- Fixed incorrect melee hitbox on Icicle Slash
- Fixed incorrect melee hitbox on first slash of Blizzard Slash
- Fixed looping sound in effect hurricane1 lingering too long
- Fixed proxy lightningRodBolt stun lock release
- Alternating Charge now ignores ice physics
- Fixed an issue where the beam sound effect from Triforce Slash could get interrupted
- Level adjustment switches in training-1v1 and training-2v2 maps now properly hide during duel
- Fixed a softlock in the outdoor area from the mod intro maps caused by reloading during the puzzle
- Fixed player able to be pushed around during Triforce Slash
- Fixed Celestial Constellation status description
- Fixed Celestial Constellation proxies not being DETACH_TIME_PARENT
### Balance
- Changes to PVP enemies only:
 * Enemy First Fractal damage slightly nerfed
 * Enemy Prismatic Meltdown laser chase speed greatly nerfed
 * Enemy Prismatic Meltdown laser lasts 0.5s longer
 * Enemy Frigid Hurricane internal pull force buffed from EASY_ESCAPE to RUN_ESCAPE
 * Enemy Frigid Hurricane added concentric pull force at WALK_ESCAPE strength
 * Enemy Vermillion Firestorm now has a suction effect to make it more difficult to escape
 * Enemy Celestial Constellation new projectiles have higher knockback than player version
 * Enemy Celestial Constellation new projectiles hit a single target, player versions are multiHit
- Changes to player only:
 * Reworked Wave Mortar, it now auto-adjusts the proxy range for enemies in view
 * Wave mortar damage reduced
 * Wave mortar knockback reduced greatly
 * Magnet Storm completely reworked and redesigned
 * Scorching Rays proxy subPierce damage/status increased
 * Scorching Rays initial TACKLE damage increased
 * Scorching Rays looping stun damage increased
 * Tower of Tranquility now spawns icicles upon landing
 * Faraday Formation now stun locks enemies on first hit
 * Faraday Formation executes much faster overall, should be more viable
 * Blade of E'nel activation time reduced from 1.0 seconds to 0.5 seconds
 * Blade of E'nel duration increased from 6 seconds to 7 seconds
 * Shadow Spark proxies orbit duration reduced from 5 seconds to 3 seconds
 * Shadow Spark proxies attack velocity (after orbiting) increased from 300 to 400
 * Frost Rupture final explosion damage greatly increased, crit chance disabled
 * Frost Rupture status infliction increased
 * Kindling Triad now grants weight -1 during counter attack (player no longer affected by push/pull)
 * So'najiz Phalanx reduced delay on clones before shooting lasers
 * Sleet Singularity charge time decreased
- Changes to both player and enemy:
 * Flash Freeze now grants the victim at 130% DEF multiplier while active
 * Icicle Tomb status factor increased greatly
 * Blizzard Slash icicleSmall startDistCollide changed from CLOSER to DROP (major nerf)
 * Blizzard Slash now shoots weaker hail variant that does not bounce
 * Blizzard Slash attack strength decreased from MASSIVE to HEAVY
 * Blizzard Slash melee hitbox radius for final slash slightly increased
 * Blizzard Slash melee damage increased
 * Icicle Slash attack strength decreased from MASSIVE to HEAVY
 * Icicle Slash melee damage slightly increased
 * Molten Daggers damage tick rate cut in half, overall damage slightly reduced
 * Molten Daggers status inflict slightly increased
 * Molten Daggers (specifically fireDaggerStuck) will despawn past a total of 12 active at a time
 * Ki Spin damage decreased
 * Vortex Thrust projectile damage reduced, final slash melee damage increased
 * Vortex Thrust can no longer crit on the final slash
 * Lightning Rod damage slightly increased
 * Thunder Wrath now terminates when running into a solid wall (this removes an exploit against bosses with solid collision)
 * Heavy Slash now grants HEAVY hit stability, making it harder to interrupt
 * Vitality Curse capped at 3 active at a time
 * Celestial Constellation now shoots bonus projectiles as it travels (major buff)
 * Celestial Constellation cc_main and cc_orbiter damage factor reduced


## 0.9.4 (02/07/2024)
### New Content
- Added option to skip the modded intro maps in the options menu (feature by **Krypek**)

## 0.9.3 (02/05/2024)
### General
- Now requires CCLoader2 version 2.22.1 or higher!
- Simplify requirement version increased to 2.12.1
- New dependency mod: AlyBox by Alyxia
   - https://github.com/lexisother/cc-alybox/releases
   - Install instructions have been updated
- Now requires extendable-severed-heads version 1.1.0
   - https://github.com/CCDirectLink/extendable-severed-heads/releases
### New Content
- PVP fixes and improvements by **Krypek**
   - Added variable support for detecting player death and enemy combatant death
   - Game will fast-forward if player is defeated in a duel but has party members remaining
   - Hide healthbars for defeated duel enemies
   - Improvements and fixes to duel GUI rendering when multiple opponents are involved
### Changes
- Removed postload.js (code moved to AlyBox mod)

## 0.9.2 (03/06/2023)
### New Content
- Added a NPC in the mod dev room who will add all vanilla party members to your active party.
   - I will not add support to any of the PVP duels for this, this is just a bonus feature.

## 0.9.1 (02/19/2023)
### Changes
- Triforce Slash ending particle effects changed to guiSprites
- Triforce Slash ending particle effects added pLight property
### Fixes
- Marginal improvement to water collision issue in mod intro outdoor area
- Fixed typo in Triforce Slash particle effects data

## 0.9.0 (02/19/2023)
### New Content
- PVP enemies now use Prismatic Meltdown instead of Triforce Slash (_Shock_Close3)
- PVP enemies now use Beekeeper instead of Shadow Spark (_Shock_Close1)
- Added an extremely hidden secret chest to the outdoor area of the mod intro maps
- Added xtm-areas.json
- Triforce Slash particle effect improvements
### Changes
- Reformatted changelog headings
- Slight reformat to database patch steps
- Moved database patches to \patches\data\database
- Triforce Slash updated description
- Completely reworked the code for Triforce Slash
- Proxy "bolt" deleted and replaced with "triforceTrigger"
- Triforce Slash trigger proxy changed from BREAK to MASSIVE (player only)
- Triforce Slash only deals MELEE_DMG now
- Triforce Slash now uses brief super armor instead of invinsibility at the start of the attack
- Triforce Slash can't interact with puzzle elements anymore
- Triforce Slash no longer shoots proxies on the final hit
- Triforce Slash has separate targeting methods for enemies with solid collision
### Fixes
- Fixed Ice Flak spawning hail at additional z+12 offset
- Fixed a map bug where you could stand on a water tile in the mod intro area
- Fixed Maroon Valley being revealed on the world map early due to modded maps
- Triforce Slash trigger proxy no nonger pierces and causes targeting confusion
- Fixed ability to shoot Triforce Slash through narrow walls
- Fixed ability to shoot Lightning Strike through narrow walls
- Fixed issue where Triforce Slash would target the wrong enemy
### Balance
- Fire Saw hit strength reduced from MASSIVE to HEAVY (knockback remains MASSIVE)
- Fire Saw damage slightly reduced
- Chilling Thrust status inflict factor reduced
- Chilling Thrust contact damage slightly reduced
- Triforce Slash trigger hitbox changed from 24x24x12 to 16x16x12
- Lightning Strike proxy hitbox changed from 24x24x12 to 16x16x12
- Triforce Slash damage greatly increased to bring it in line with Song of Storms
- Overclock duration increased by 1 second

## 0.8.5 (01/20/2023)
### Changes
- Faraday Formation is now dash-cancelable

## 0.8.4 (01/18/2023)
### Fixes
- Fixed a crash that can happen when entering the mod's dev room

## 0.8.3 (01/16/2023)
### Changes
- Renamed the main effect file to tribladerXTM.json
- Cold particle effects moved to patch file format
- cold-tri.json effect file deleted, data merged into cold.json patch
- Icicle particle effects moved to patch file format
- Heat particle effects moved to patch file format
- Neutral particle effects moved to patch file format
- Shock particle effects moved to patch file format
- Replaced modded vanilla effect "slowMotionClock" with modded effect "slowMotionClockTriblader"

## 0.8.2 (01/15/2023)
### New Content
- Added Ice Flak to PVP enemy move pool (they did not previously have a Lv.1 Cold Throw art)
### Changes
- Added a new particle effect when Verdant Infection is inflicted on an enemy
- Warp Decoy can search further for a target to face (visual only)
- Thunder Wrath audio volume slightly reduced
- Removed maxGroundDistance restriction from Thunder Wrath (will work now even if you dash off cliffs)
- Added DETATCH_TIME_PARENT to the following generic proxies:
   - vitalityCurse
   - vitalityCurseDrain
   - bounceOrb
   - vitalitySpring
   - springAbsorbDot
   - waveBomb
   - waveDummy4
   - waveLaserSpawn
   - waveLaser
   - waveMine
   - waveDummy
   - soulShatter
   - waveDummy2
   - spiritfall
   - fallingFaeSmall
   - fallingFaeBig
   - waveTurretBody
   - waveTurret
   - essenceProxy
   - essenceProxyController
   - waveTimeBomb
   - waveTimeBombExploder
- Generic proxies that will remain without DETATCH_TIME_PARENT:
   - waveMortar
   - waveDashBoom
   - exploTrail
   - waveAbsorbDot
### Balance
   - Arcing Fae is now capped at two orbs maximum at a time. Shooting a third will despawn the first one.
   - So'najiz Phalanx increased damage on initial wave bullets
   - So'najiz Phalanx wave bullets attack strength changed from LIGHT to MEDIUM, will be harder to escape
   - So'najiz Phalanx now starts shooting slightly faster (less starting lag)
   - So'najiz Phalanx clones increased HP
   - So'najiz Phalanx final lasers reduced delay between preview and activation

## 0.8.1 (01/14/2023)
### Changes
- Capitalized Triblader2/3/4/5 names in party menu
- Minor adjustments to Daybreak throw sound effect properties
- Trailblazer can no longer be canceled by dashing until the final spin attack
- Ice Brace audio and effect adjustments
- Schneider/Luke now use their sitting animation for Ice Brace and Stasis Stance
- Schneider/Luke now use their own alternate animations for Tower of Tranquility
- Proxy icicleMediumLineSimple changed to breakType ACTION
- Added DETATCH_TIME_PARENT to the following generic proxies:
   - frozenStar
   - fallingRockBig
   - fallingRockMed
   - rockLine
   - icicleSmall
   - snowballFlurry
   - iceFlak
   - hailBomb
   - iceFreeze
   - icicleBigDmg
- Generic proxies that will remain without DETATCH_TIME_PARENT:
   - polarGeyser
   - frozenRupture
   - avalancheProxy
   - snowHurricaneCharge
   - snowHurricane
   - frozenRay
   - icicleMediumLineSimple
   - icicleSubHit
   - icicleSubHitNoFly
   - icicleHugeDelay
   - towerBase
   - towerWeatherController
   - icePlatform
   - icicleSmallLasting
### Fixes
- Removed duplicate SET_TEMP_TARGET from Recoil Slash
- Recoil Slash particle effects should show on countered enemy more consistently
### Balance
- Recoil Slash now grants super armor (hit resist MASSIVE) while counterattacking
- Verdant Infection now grants super armor (hit resist MASSIVE) while counterattacking
   - Enemy variant already contained this property, only player files updated
- Ice Brace now heals 5% of HP throughout the full duration
- Ice Brace can now be canceled with a dash
- Stasis Stance can now be canceled with a dash
- Added an additional icicle attack to Stasis Stance

## 0.8.0 (01/07/2023)
### New Content
- Added a warning about modded party members when Triblader2 is recruited at Bergen Trail
- Added a proper story cutscene to unlock the Schneider PVP duel (near end of 3rd day in the DLC story)
   - For save files after this point, the arena cup will be automatically unlocked
   - Added many random assortments of party members that can be present in the stands for the duel
### Changes
- Removed Schneider vs Luke arena cup
- Arena cups are all open to all playable characters now, removed relevant text from descriptions
- Arena lobby EventTrigger for managing character configs remains implemented but is now unused
- Minor Triblader2 party dialogue tweaks
- Adjusted text displays for Triblader League unlock cutscene to be in-line with other arena cup unlocks
- Vermillion Firestorm lasers audio volume reduced
- Flash Freeze audio volume reduced when freezing enemy
- Daybreak proxies changed from breaktype NEVER to COMBATANT
- Added sound effect when Daybreak is thrown
- Daybreak impact sound effect volume increased
- Trailblazer particle effects overhauled
- Proy turbineStunner changed from breaktype NEVER to COMBATANT
- Added DETATCH_TIME_PARENT to the following generic proxies:
   - rudeBuster
   - gleamingSurgeProxy
   - shardAura
   - spikeAura
   - dropShieldOrbit
   - dropShieldStatic
   - defenseAura
   - fireDaggerBombThrow
   - fireDaggerBombStuck
   - fireDaggerThrow
   - fireDaggerStuck
   - daybreakThrow
   - daybreakStuck
   - fireTornado
   - mirageController
   - mirageDummy
   - firePillar
   - firePillarEffect
   - turbineStunner (after rapid spin)
   - turbineDot (after rapid spin)
   - attackBuffProxy
   - flameWall
- Generic proxies that will remain without DETATCH_TIME_PARENT:
   - gambitProxy
   - neutralFreeze
   - neutralLaser
   - subPierce
   - flameHitS
   - solarEruptionTipR
   - solarEruptionTipL
   - solarEruptionHead
   - solarEruptionChainHitbox
   - sunsteelController
   - heatPierce
   - flameHit
   - meteor
   - turbineStunner
   - flamethrowerTriangle
   - enelSwordSummon
   - enelSwordAura
   - firestormBase
   - subPierceWeak
   - flameHitSWeak
   - heatLaser
### Fixes
- Walls 1-3 now destroy with proper effects in mod\char-select\beta.json
- Fixed Lily granting exp in training island duels
- Minor typo fix in Bergen Trail entrance modded dialogue
- Fixed a rare issue where Spectral Legion would only spawn 3 clones
- Fixed First Fractal particle effect alignment
### Balance
- Beekeeper total bees reduced by 4, damage per bee increased
- Beekeeper will now despawn any previous bees when used
- First Fractal damage slightly reduced
- Blade of E'nel now grants full super armor (hit resist MASSIVE) while buff is active
- Blade of E'nel now grants a shield that resists 10% of all damage while active
- Homing Shards increased proxy lifetime from 1.5 to 2.0 seconds
- Throwing Knives now shoots 2 additional knives on third volley
- Trailblazer rate of fire increased
- Trailblazer now has additional explosions when fire is spawned, dealing additional damage
- Trailblazer fire contact damage slightly reduced


## 0.7.1 (12/04/2022)
### Fixes
- Fixed Triblader2 party member contact event story progress threshold
### Balance
- Magnet Prism targeting range increased from 128 to 140

## 0.7.0 (11/19/2022)
### New Content
- Added a character changing station to the Info Hub in Rookie Harbor
- Triblader2 can now join the player near the start of Bergen Trail as a party member
   - This is in addition to the dev room NPC
   - Level/element/SP scaling will work regardless of when the NPC is recruited in a playthrough
- Added commonEvent logic to manage Triblader2 party member level/SP/element progression throughout the story
- Added modified event step to allow setting party members to variable level values
### Major Changes
- Targeted Surge: If you miss and use it again before the triangles despawn then your first attempt will stack
- Magnet Prism is no longer limited to 1 projectile at a time (2 max), and no longer pierces
### Changes
- Minor audio volume adjustements to Blade Rink first-time cutscene
- Prismatic Meltdown audio volume reduced when it shoots the laser
- Shadow Spark projectile damage type changed from RANGED_DMG to MELEE_DMG
- Lightning Rod final lightning proxy hit changed from RANGEED_DMG to MELEE_DMG
- Proxy magnetBolt changed to breakType COMBATANT
- Proxy thunderMed removed legacy "hints" properties
- Proxy thunderMed changed from RANGED_DMG to MELEE_DMG
- Proxy thunderController changed to breakType NEVER
- Thunder Wrath weather effects linger for longer
- Lightning Rod guardable flag changed from FROM_ABOVE to blank (player version only)
- Proxy thunderHeavy guardable flag changed from FROM_ABOVE to blank
- Proxy thunderHeavySkew guardable flag changed from FROM_ABOVE to blank
- Proxy thunderHeavySkew changed from RANGED_DMG to MELEE_DMG
- Added DETATCH_TIME_PARENT to the following generic proxies:
   - bee
   - circleBallShooter
   - circleBall
   - ms_TT
   - tt_ball
   - magnetBoltLong
   - forkBoltSpawn
   - forkBoltSecondary
   - forkBoltHitbox
   - magnetSphere
   - magnetSphereTurret
   - magnetBolt
   - thunderController
   - thunderSpawner
   - thunderSmall
   - thunderHeavy
   - meltdown (only after it shoots the shockLaser proxy)
   - shockLaser
- Proxies that will remain without DETATCH_TIME_PARENT:
   - faradayDummy
   - lightningRodBolt
   - shockSpecial
   - fractalCloneController
   - fractalClone
   - thunderMed
   - meltdownTarget
   - thunderHeavySkew
### Fixes
- Most shock art skillBonus corrections
- Fixed missing stunType, dmgType, and status descriptions for most shock arts
- Fixed minor animation quirk in Blade Rink first-time cutscene
- Fixed Triblader2-specific issue with second projectile of Celestial Constellation
- Fixed ice wind effects from Arctic Blast rendering beneath upper terrain
- Reworked the logic for beekeeper bees, they should no longer linger endlessly on defeated enemies
- Added the attribute "checkCollision" for the following (fixes ability to hit through walls):
   - Beekeeper melee attack
   - Faraday Formation final spin attack
   - Lightning Rod lightning bolt
   - Amber Flurry rapid hits
   - Amber Flurry final hit
   - First Fractal final hit
   - Alternating Charge lightning proxies
   - Proxy thunderSmall
   - Proxy thunderHeavy
   - Proxy thunderHeavySkew
   - Prismatic Meltdown laser impact
- Puzzle elements can now interact with:
   - Faraday Formation final spin attack
   - Lightning Strike (added a non-damaging hitbox that can interact with puzzles)
   - Targeted Surge initial projectile (added a non-damaging hitbox that can interact with puzzles)
   - Lightning Fork
### Balance
- Beekeeper bees reduced from MEDIUM hit strength to LIGHT
- Beekeeper bees speed slightly increased
- Slightly reduced beekeeper sword damage
- Shadow Spark no longer inflicts status
- Shadow Spark projectile damage and shoot velocity increased
- Targeted Surge no longer inflicts status
- Targeted Surge now shoots faster and has faster projectiles
- Targeted Surge minor damage reduction
- Lightning Fork damage significantly reduced
- Magnet Prism no longer inflicts status
- Magnet Prism no longer pierces enemies
- Magnet Prism max projectiles increased from 1 to 2
- Magnet Prism rate of fire increased, damage adjusted to balance
- First Fractal damage slightly increased

## 0.6.1 (10/23/2022)
### Fixes
- Introduced the "posEntity" attribute to gambitProxy to prevent Wild Gambit's projectiles from shooting through walls

## 0.6.0 (10/23/2022)
### New Content
- Added some various Triblader2 party dialogue
### Changes
- All healing combat arts now have their names in green text
- All self-damaging combat arts (Burning Sacrifice) now use red text
- Changed BGM for Blade Rink
- Minor text speed edit to Blade Rink first-time cutscene
- Reformatted some Triblader2 party dialogue event steps
- Modified visual effect for Wild Gambit roll 4
- Wild Gambit roll 4 reduced volume on charging sound
- Wild Gambit roll 7 proxy waveAbsorbBall startDist reduced
- Removed assault proxies from Heavy Slash
- Blade Aura changed from RANGED_DMG to MELEE_DMG
- Laser Barrage executes faster now
### Fixes
- Neutral art skillBonus corrections
- Fixed missing stunType, dmgType, and status descriptions for all neutral arts
- Fixed Laser Barrage bug with laser particle effect lingering on enemies
- Laser Barrage now works properly against walls, fences, and corners
- Added the attribute "checkCollision" for the following (fixes ability to hit through walls):
   - Wirbelschlitzer attack hitbox
   - Wild Gambit basic melee hitbox
   - Wild Gambit roll 6 melee attack
   - Wild Gambit roll 8 melee attack
   - Heavy Slash attack hitbox
   - Shrapnel Field spin attack
   - Sky Shredder initial combo starter swing
   - Laser Barrage final strike
- Puzzle elements can now interact with:
   - Wild Gambit roll 6 melee attack
   - Wild Gambit roll 7 melee attack
   - Wild Gambit roll 8 melee attack
- Puzzle elements no longer interact with:
   - Gleaming Surge delayed hits on enemies
   - Sky Shredder falling spin attack
   - Laser Barrage lasers
### Balance
- Heavy Slash damage increased 12%
- Laser Barrage individual laser damage increased 50%
- Laser Barrage total lasers changed from 5 to 6

## 0.5.2 (09/25/2022)
### Fixes
- Fixed cutscene sound effect positioning in all 5 XTM arena maps
### Changes
- Slightly moved PVP sign in Blade Rink
- Changed initial character animations on cutscene for subsequent Blade Rink rounds
- Made timing adjustment on pvpBrake for Blade Rink in attempt to avoid invisible enemies on round start

## 0.5.1 (09/25/2022)
### Fixes
- Fixed alignment of effect in Blade Rink intro when Triblader5 switches to neutral
- Fixed broken animation in map autumn\path-3-1.json in cutscene that plays after Vermillion Wasteland

## 0.5.0 (09/25/2022)
### New Content
- Triblader League round 2: "Blade Rink" added
- Cutscene for 1st-time attempt at Blade Rink only
### Fixes
- Removed unused debug spritesheet custom.png
- Compressed file pvp-triblader-league-c.json
- Removed unintentional assault proxies from Blizzard Slash

## 0.4.3 (09/13/2022)
### Changes
- Updated readme
- Reorganized github

## 0.4.2 (09/09/2022)
### Changes
- Minor edit to Apollo dialogue on player victory condition in guild-war

## 0.4.1 (09/09/2022)
### Changes
- Minor reformat to ccmod.json dependency list
- Cleaned up some unused clutter in triblader-mm.png
### Fixes
- Party members will no longer eat during PVP duels

## 0.4.0 (09/08/2022)
### New Content
- New graphical effects for Fire Whirl
- New graphical effects for Blazing Mirage
### Changes
- Triblader2/3/4/5 now eats steak instead of sandwiches as party members (visual only)
- Proxy subPierce (Scorching Rays) hitboxes now aligned with BOTTOM, not BASE
- Proxy subPierceWeak (Vermillion Firestorm) hitboxes now aligned with BOTTOM, not BASE
- Removed unused "attack" attribute from proxy fireDaggerBombThrow
- Removed unused "attack" attribute from proxy fireDaggerThrow
- Removed unused "attack" attribute from proxy daybreakThrow
- Removed unused "attack" attribute from proxy flamethrowerTriangle
- Kindling Triad flamethrowers shoot for 0.1 seconds shorter
- Molten Daggers now use startDistCollide CLOSER
- fireDaggerThrow and fireDaggerBombThrow hitbox size reduced from 19x19 to 16x16
- daybreakThrow hitbox size reduced from 19x19 to 16x16
- Updated Daybreak description
- Updated Blazing Mirage description
- Searing Twister changed to MELEE_DMG instead of RANGED_DMG
- Blazing Mirage clones now deal uncategorized heat damage when colliding with an enemy (used to be RANGED_DMG)
- Rotating spokes from Flame Turbine now deal uncategorized heat damage (main fire plume is still MELEE_DMG)
- Fires from Lava Sweep now deal uncategorized heat damage
- Lava Sweep startDistCollide changed from "CLOSER" to "DROP"
- Lava Sweep lingering fires now spawn in a slightly smaller radius
- Vermillion Firestorm landing explosion changed to MELEE_DMG instead of RANGED_DMG
- Vermillion Firestorm landing explosion is no longer guardable: "NEVER" (player only)
- Proxy subPierceWeak (Vermillion Firestorm) changed to RANGED_DMG instead of MELEE_DMG
- Blade of E'nel fire ring aura changed to MELEE_DMG instead of RANGED_DMG
### Fixes
- Fixed training island duel not working when fighting only Lily and Shizuka
- Recoil Slash fire trail effect should show more consistently on enemies hit by the parry
- Heat art skillBonus corrections for all hitboxes and proxies
- Fixed dmgType, stunType, status descriptions for heat arts
- Fixed Molten Daggers able to shoot through walls and narrow barriers
- Fixed Calamity's Advent daggers able to shoot through walls and narrow barriers
- Fixed an improperly located NO_PUZZLE tag in Tower of Tranquility
- Removed unused SET_CLOSE_TEMP_TARGET action step from proxy enelSwordSummon
- Puzzle elements no longer interact with:
   - Proxy fireDaggerBombThrow when target is missed (hits a wall)
   - Proxy fireDaggerBombStuck
   - Splash damage when Blazing Mirage clones explode on contact
   - Flame Turbine fire plume
   - Flame Turbine spokes
   - Flame Turbine ending explosions
   - Proxy flameWall
   - Vermillion Firestorm orbiting lasers
- Added the attribute "checkCollision" for the following (fixes ability to hit through walls):
   - Calamity's Advent initial two sweep attacks
   - Sunsteel Strike melee hitboxes when shooting fireballs
   - Searing Twister repeating proxy hitbox
   - Trailblazer final spin attack
   - Recoil Slash parry swing
   - Kindling Triad final slash
   - Vermillion Firestorm landing explosion
   - All large sword attacks from Blade of E'nel
### Balance
- Calamity's Advent initial two sweep attacks no longer inflict status
- Calamity's Advent exploding knives no longer inflict status
- Fire Saw no longer inflicts status
- Blazing Mirage no longer inflicts status
- Blazing Mirage damage reduced by 15% when clones collide with enemies
- Recoil Slash no longer inflicts status
- Blade of E'nel inflicts significantly more burn status during the initial summon hitbox
- Blade of E'nel fire ring aura now inflicts burn status
- Blade of E'nel hitbox radius increased for all attacks to better match the visual effects

## 0.3.0 (08/21/2022)
### New Content
- Added remaining sprites for Triblader 2/3/4/5 floating animation
### Changes
- Created the following patch files and removed modified vanilla files for:
   - \patches\data\effects\puzzle\bomb.json
   - \patches\data\effects\trail.json
- Removed unused \data\effects\npc.json from mod
- New shield particle effects for Glitch Time
### Fixes
- Gave the dev room a proper navigation map
- Fixed match point BGM not triggering on training island

## 0.2.3 (08/20/2022)
### Fixes
- Fixed crash in 1v1 training arena when setting 3 victory points

## 0.2.2 (08/20/2022)
### Changes
- Changelog headers reformatted
- Created the following patch files and removed modified vanilla files for:
   - \patches\data\effects\area\arid.json
   - \patches\data\effects\enemies\designer.json
   - \patches\data\effects\enemies\gods.json
   - \patches\data\effects\enemies\jungle.json
- Arcing Fae now has a sound effect when thrown
### Balance
- Triblader League round 1 platinum points reduced from 80,000 to 75,000

## 0.2.1 (08/20/2022)
### Fixes
- Manually fixed git merge conflicts

## 0.2.0 (08/20/2022)
### New Content
- Added colored portraits for Triblader2/3/4/5 (likely to be revised in the future)
- New map: Training Island
   - Highly customizable PVP arena located in dev room
- New 1v1 training arena map that can be accessed from the 2v2 arena
- Added a coordinated enemy action on player match point in Triangle Strategy
- Added text labels to the level up/down switches in triblader training arena
- Added a new type of OneTimeSwitch called "default2" which is able to be hidden without remaining active
### Changes
- Removed some unused sprite assets from the files
- Modded Shizuka enemy now works based off of player points and should unlock higher-tier strats on all maps
- Vermillion Firestorm now slightly pulls enemies inwards during the laser phase
   - PVP enemies have WALK_ESCAPE strength, player has EASY_ESCAPE strength
- Dialogue tweaks to Triblader Training Arena 2v2
- Slight dialogue tweaks to rhombus-sqr/center-nw.json.patch
- Ki Spin particle effect changed to be less intense
- Added confirmation to Triblader2 party joining in dev room
- Reduced and standardized all dialogue pauses in all XTM intro maps
- Dialogue tweaks to basement.json and interior.json maps
### Fixes
- Ice Brace, Stasis Stance, Tower of Tranquility now properly set Pin Body factor to zero while active
   - This introduces a bug where pin body will remain at zero afterwards until map reload
- Fixed PVP enemy Vermillion Firestorm cross lasers coming out at random angles
- Removed unused variable "tmp.musicCutscene" from training arenas
- Added the SET_SLIP_THROUGH property after pvp rounds to prevent awkward navigation collisions for all Rhombus Arena duels
- Fixed incorrect variable type for map.battleMusic in triblader training arenas
- Fixed modded apollo-4 and shizuka granting exp
### Balance
- Rude Buster explosion changed from MASSIVE to HEAVY strength

## 0.1.5 (08/17/2022)
### Changes
- Updated the nav map for triangle strategy
### Fixes
- Fixed issue where some users experienced missing dependencies despite them being present
- Corrected typo
- (meta) Corrected changelog filetype for repo

## 0.1.4 (08/10/2022)
### New Content
- Added Triblader2/3/4/5 animations for opening chests
- Lea placeholders for block push/pull animations
- New ball effect sheets used by Triblader charged VRPs, trail is now rendered below VRP for all players/pvp enemies
- Added effects boldPre2Tri and boldPreLight for all thunder bolt effects
- Added a switch in the dev room to "promote growth"
### Changes
- Created separate files for Triblader 2/3/4/5 portraits
- Re-arranged triblader2/3/4/5extra.png spritesheet and added more lea placeholders
- Updated triblader2/3/4/5.json animation sheet to reflect updated spritesheet
- Replaced annoying lily pads with a jump panel in Triblader Training Arena
- Dialogue tweaks for pvp-triblader-league-a
- Edited description for Snow Sweep
- Snowballs shot by Frigid Hurricane now have startDistCollide = DROP
- Tweaks to Ice Flak effects
- PVP enemies slightly improved Frozen Ray target leading
- Ice chunks spawned at the end of Tower of Tranquility now have startDistCollide = DROP
- Ki Spin waveDustShort proxies startDistCollide changed from NONE to CLOSER
- Hail Bomb
   - Hitbox size reduced from 24x24 to 16x16
   - Now emits from point closer to player
   - Reduced in visual size
   - Shoots less icicles while traveling
   - Icicles shot while traveling startDistCollide changed from CLOSER to DROP
   - Ground icicles on hit now spawn with startDistCollide DROP
   - Effect snowflakeBombPre reduced in visual size
   - Proxy icicleHugeInstant reduced in visual/hitbox size
   - Added triangle particles when the icicle appears
   - Screen flash intensity reduced
   - Final explosion reduced in hitbox/visual size
### Fixes
- Fixed cases where enemies could remain invisible at the end of PVP rounds
- Added event steps to "show" (effect that sets alpha=1) all enemies, party members, and player to the end of all PVP rounds/duels in the mod
- Fixed dmgType, stunType, status descriptions for cold arts
- Cold art skillBonus corrections for all hitboxes and proxies
- Hover animation properly plays when interacting with wave map teleporters, such as in Zir'vitar Temple
- Fixed an animation quirk with So'najiz Phalanx
- center-nw.json.patch now uses correct portrait assignments
- pvp-triblader-league-a.json now uses correct portrait assignments
- training-2v2.json now uses correct portrait assignments
- Fixed a small animaiton issue at the end of Flash Freeze
- Fixed Hail Bomb able to shoot point-blank through narrow fences
- Fixed Hail Bomb incorrect skillBonus
- Fixed incorrect spritesheet reference for big snowflake particle
- Proxy iceStoneSmallSlow removed skillBonus properties
- Puzzle elements no longer interact with:
   - Proxy iceStoneSmallGeyser
   - Proxy frozenRupture
   - Proxy avalancheProxy
   - Proxy fallingRockBig
   - Proxy fallingRockMed
   - Proxy iceStoneSmallSlow
   - Proxy iceStoneSmall
   - Proxy iceStoneMedium
   - Tower of Tranquility falling spin attack
   - Tower of Tranquility final landing impact
- Puzzle elements can now interact with:
   - Frost Rupture melee hits
   - Vortex Thrust sword hitbox
   - Vortex Thrust final hit
   - Phase Jump landing hitbox
- Added the attribute "checkCollision" for the following (fixes ability to hit through walls):
   - All standard melee attacks
   - Proxy polarGeyser
   - Polar Geyser final sword swing
   - Snow Sweep both swings
   - Frost Rupture melee hits
   - Avalanche Assault initial explosion
   - Frigid Hurricane final slash
   - Frozen Rays melee hitboxes
   - Blizzard Slash second spin hitbox
   - Icicle Tomb melee sweep
   - Ki Spin melee attack
   - Phase Jump landing hitbox
### Balance
   - Vortex Thrust final hit reduced forward travel distance
   - Polar Geyser's proxy now locks enemies just like Sphere Saw
   - Polar Geyser's proxy hit strength increased from LIGHT to MEDIUM
   - Polar Geyser final hit damage increased, covers more ground, increased knockback
   - Snow Sweep no longer inflicts status
   - Snow Sweep second hit damage increased
   - Ice Flak greatly buffed by removing the "dud" mechanic
   - Proxy iceStoneSmallSlow no longer inflicts status

## 0.1.3 (07/30/2022)
### New Content
- Added new bonus map accessible from dev room: \maps\xtm\bonus\guild-war.json
- New bullet sprite for Essence Enchantment proxies
### Changes
- Added formal dependency on post-game DLC in ccmod.json
- Assigned proper modded NPC portrait reference in dev.json for all Triblader2 interactions
- PVP enemy version of Verdant Infection now has unguardable, BREAK, and hitInvincible for the non-damaging stunning DIRECT_HIT when the bomb goes off
- Re-organized custom-action-steps.js into a module
- Pain Buckler techShield (after blocking) now has BLOCK_ALL strength
- Tweaked navigation logic for So'najiz Phalanx clones prior to shooting the final lasers
### Fixes
- Fixed a crash experienced by controller users when using Pain Buckler
- Fixed "bastion" shield upgrade not working for tribladers by fixing GUARD and PERFECT_GUARD json syntax
- Fixed dmgType, stunType, status descriptions for wave arts
- Fixed match point BGM in Triblader training arena restarting on player loss
- Spectral Legion dash explosion now spawns much closer to user
- Wave art skillBonus corrections
   - Phase Jump landing impact now correctly categorized as MELEE_DMG skillBonus
   - Spiritfall now correctly uses RANGED_DMG skillBonus for falling proxies
   - Wave Mortar now uses RANGED_DMG skillBonus
   - Wave Motion Bomb removed skillBonus
   - Verdant Infection initial melee attack now has MELEE_DMG skillBonus and no longer inflicts status
   - Verdant Infection explosion removed skillBonus
   - Ki Thrust proxies now have MELEE_DMG skillBonus
   - Vortex Thrust proxies now have MELEE_DMG skillBonus
- Puzzle elements no longer interact with:
   - Vitality Spring lingering hitbox
   - Wave Mortar
   - Arcing Fae
   - Ether Bomb explosion damage
   - Phase Jump landing impact
   - Phase Jump projectiles
   - Verdant Infection explosion
   - Wave Motion Bomb explosion
   - Spectral Swordsman clone melee attacks
   - Spiritfall falling proxies
   - Spectral Legion dash explosion
   - Spectral Legion clone melee attacks
   - Vortex Thrust melee hitboxes
### Balance
- Lava Sweep now sets user's weight at -1 so they can't be shoved around during the attack
- Soul Shatter damage reduced by ~40%
- Soul Shatter no longer inflicts mark at all
- Vitality Spring capped at 2 active proxies (throwing a 3rd will despawn the oldest one)
- Spectral Legion dash explosion active frames increased and no longer inflicts status
- Pain Buckler absorb factor changed from 1.2 to 0.5
- Ki Spin proxies inflict a greater amount of status


## 0.1.2 (07/24/2022)
- Vitality Curse initial hit downsized to MEDIUM strength from MASSIVE
- Fixed Prismatic Meltdown not working on enemies with environmental collision such as the whale boss
- Blade Aura defense buff changed from +20% to +30%
- Deploy Shields defense buff changed from +35% to +50%
- Triangle Strategy arena cup platinum requires 110,000 points now since I can consistently get that score


## 0.1.1 (07/23/2022)
- Re-organized prestart.js into individual files located in the js directory
- Added invisible wall to prevent player ability to jump out of bounds in outdoors.json on the right side
- Added NO_PUZZLE tag to gambitProxy, neutralExplosionSmall, flameNoStun, icicleSubHitNoFly, thunderSmallWeak
- Soul Shatter:
  * Fixed via enemy TEMP_INFLUENCE and MASSIVE strength, no longer interrupts bosses
  * No longer sends enemies up in the air if they guard the hit (unintentional consequence of redesign)
  * Now adds a "neutralization" shield to enemies during the "shatter" portion of the attack to account for this
  * Final hit is now FROM_ABOVE and no longer ignores shields and no longer inflicts mark
  * Now has a new issue where PVP enemies hit by it sometimes shrug it off unintentionally
  * I decided to keep the CLEAR_EFFECTS applied to the target. This solves some graphical issues but causes some others, and vice versa.
- Removed the "NEVER" guardable property from Lightning Strike on players and PVP enemies
- Added the "NO_DAMAGE" limiter to the "NEVER" guardable DIRECT_HIT at the start of Recoil Slash, Kindling Triad, Laser Barrage, Verdant Infection
- Recoil Slash main attack damage factor increased from 5.5 to 6
- Removed the "NEVER" guardable property from the main attack of Recoil Slash (players only)
- Verdant Infection increased knockback on initial parry hit
- Verdant Infection parry hit now has END_LOCK stun step
- Added "NO_DAMAGE" limiter to some unguardable DIRECT_HIT steps in proxy waveTimeBombExploder
- Removed the "NEVER" guardable property from Vitality Curse and Vitality Spring (players only)

## 0.1.0 (07/20/2022)
- First public beta release!
- Updated install instructions in README

## 0.0.18 (07/19/2022)
- Implemented some dialogue for triblader2 party member, now fully functional with menus
- Fixed portraits for triblader character files
- Added new eventTrigger to arena-01.json.patch to handle non-XTM save files (undefined plot.xtm.character will be set to 1)
- Minor dialogue tweaks to outdoors.json, interior.json, basement.json, and dev.json
- Re-worded PERMA_TASK entries for outdoors.json, interior.json, basement.json, and beta.json
- Added triblader2-events.json for party member dialogue
- database.json.patch now includes triblader2-events.json


## 0.0.17 (07/19/2022)
- Disabled the map \assets\extension\post-game\data\maps\evo-village\interior\city-hall.json, this will not be part of the beta release
- Added teleporter to Lea's attic to access XTM dev room, unlocks after finishing DLC dungeon
- Added patch \assets\extension\post-game\data\maps\evo-village\interior\lea-upper.json.patch
- Added map \assets\data\maps\xtm\bonus\dev.json
- Bonus maps training-2v2 and statue-cutscene now link back to dev room
- Added new method of obtaining triblader2 party member in dev room
- Deleted temporary map \assets\data\maps\autumn\entrance.json
- Triblader training arena added new logic to support customizable number of PVP rounds
- Removed all unused "arena-c" maps
- Renamed plot variable "plot.xmod.leaSwitch" to "plot.xtm.swapBack"
- Event trigger in Rhombus Arena will now swap player back to their plot.xtm.character config after forced-character cups
- Updated arena cups descriptions
- Luke/Lukas PVP enemies no longer have the "Once More" modifier
- Schneider animation in the enemy encyclopedia changed to battleRun
- Triblader2 (freq. arts) name updated in enemy encyclopedia

## 0.0.16 (07/19/2022)
- Finished map: assets\data\maps\xtm\char-select\basement.json
- Added variable plot.xtm.character to track player character choice
- Rhombus Arena character change hologram now updates this variable when used
- Added spritesheets lukeEatFix.png and schneiderEatFix.png
- Fixed a vanilla graphical issue with Luke/Schneider eating animation sprites being off-center
- Changed frame data for Luke/Schneider itemEffect animations
- Added spritesheet assets\media\map\xtm-lab.png
- Added prop sheet assets\data\props\xtm-lab.json
- Triblader training arena default enemy level is higher if the player enters the map with a party member
- Triblader training arena added music change for player match point if using BGM choice 9
- Reduced wait time at the end of the statue cutscene
- Changed area to heat-area for interior.json map
- Modified assets\data\effects\area\arid.json with new effect switchARChargeVisible
- Modified assets\data\effects\area\arid.json with new effect switchActivateNoOffset
- Teleporter at the end of beta.json map is no longer slow

## 0.0.15 (07/16/2022)
- Added proper unlock condition for Triblader League arena cup availible after DLC dungeon completion
- New map patch file center-nw.json.patch for NPC that unlocks the Triblader League
- Removed temporary map file dng-top-modded.json

## 0.0.14 (07/15/2022)
- Added new map: assets\data\maps\xtm\char-select\beta.json
- Added new map: assets\data\maps\xtm\bonus\statue-cutscene.json
- Added character swap prop to Rhombus Arena lobby patch file
- Added new player configs for triblader4 and triblader5 (special properties)
   - Triblader4 has increased dash speed
   - Triblader4 has faster melee attacks
   - Triblader4 has weaker melee attacks
   - Triblader5 has steerable dashes
- Updated animation files for Luke, triblader4, and triblader5
- Added placeholder spritesheet lukeExtra.png
- Added missing secondary spritesheet for triblader5
- Added teleporter to statue-cutscene to Autumn's Rise entrance (temporary)
- Removed emilie.json player file (animation fixes) due to irrelevance

## 0.0.13 (07/11/2022)
- New combat art: Prismatic Meltdown (Shock Dash Lv.3a)
- Thunder Wrath reclassed from Shock Dash Lv.3a to Shock Dash Lv.3b
- Faraday Formation now has MASSIVE hit stability during the spinning portion of the attack
- Changed the pivot point for SHOCK_WAVE_BIG_TRIANGLE from y = 47 to y = 49
- Tweaked Triblader2 northeast running sprites

## 0.0.12 (07/10/2022)
- New combat art: Celestial Constellation (Shock Throw Lv.3a) (Usable by PVP enemies)
- New combat art: Faraday Formation (Shock Melee Lv.2a)
- PVP enemies now use Celestial Constellation instead of Magnet Storm
- Minor progress on assets\data\maps\xtm\char-select\basement.json
- Proxy fallingRockMed now has a crosshair on the ground like fallingRockBig
- Big lightning strikes as a part of Thunder Wrath now use new proxy thunderHeavy
- Proxy lightningRodBolt changed to MELEE_DMG
- Wild Gambit slightly quieter beep sound effect
- Homing Shards reduced recoil distance
- Added new particle effects to Gleaming Surge
- All triblader melee "finisher" particle effects changed to cancelable
- PVP enemy melee finisher particle effects changed to duration 0 (was -1)
- Wild Gambit roll 4 explosion damage reduced by 25%
- Re-worded description for Lightning Rod

## 0.0.11 (07/03/2022)
- Fixed some trigger conditions in assets\data\maps\xtm\char-select\interior.json

## 0.0.10 (07/03/2022)
- Changed all "tmp.return" to "map.return" in assets\data\maps\xtm\char-select\interior.json

## 0.0.9 (07/03/2022)
- Added new audio for player's match point in Triblader League Round 1
- Finished assets\data\maps\xtm\char-select\interior.json
- Added map assets\data\maps\xtm\char-select\basement.json, unfinished state

## 0.0.8 (07/01/2022)
- New combat art: Avalanche Assault (Cold Melee Lv.3b)
- (Nax) fix for PVP enemy healthbars overlap
- Added y=5 offset to PVP enemy healthbars
- Added new environment particles called BLUE_TRIANGLES and RED_TRIANGLES
- The final rounds for the training arena, triblader league cups, and lab duel now use these new effects
- Improved dialogue options in map training-2v2.json
- Fixed crash caused by "fly": "NONE" in seven cases
- Proxy flameNoStun now uses "fly": "LIGHT"
- Proxy frozenRupture now uses "fly": "MASSIVE++"
- Proxy turbineStunner stunSteps adjusted
- Proxy turbineController now spawns at target BOTTOM, not CENTER
- Increased turn radius for Sunsteel Strike's fireballs
- Triforce Slash sword strikes changed from "BREAK" to "LIGHT" attack types
- Triforce Slash stun duration increased to align with the melee combo
- Fixed Sunsteel Strike granting SP from some of its CIRCLE_ATTACK actions
- Laser Barrage proxies are now breaktype COMBATANT
- Wild Gambit roll 5 increased range/spread for lightning strikes
- Increased the damage dealt by Tower of Tranquility ending attack
- Improved sound effect composition for ending of Tower of Tranquility
- Added better description of the healing amount to Tower of Tranquility description
- Frigid Hurricane reclassed from Cold Melee Lv.3a to Cold Melee Lv.3b

## 0.0.7 (06/22/2022)
- New combat art: Tower of Tranquility (Cold Guard Lv.3b)
- Ice Brace damage reduction nerfed from 90% to 85%
- Stasis Stance damage reduction nerfed from 97.5% to 90%
- Tower of Tranquility damage reduction is 90%
- (Nax) fix for PVP scoreboard rendering
- Triblader-created icicleSmall proxies now sparkle
- Triblader-created icicleBigDmg proxies now sparkle
- Cleaned up some music file things
- Removed unused music files
- Calamity's Advent explosive daggers should be a bit less prone to shoot through walls
- Hail Bomb now shoots slightly less proxies while traveling
- Action buff "SPIKE_DMG-0" factor changed from -10 to -20
- Pain Buckler absorption healing factor nerfed from 1.5 to 1.2
- Heavy Slash reduced travel distance
- Spike Ball added screen shake and sound effect when bouncing on walls
- Removed unused effectKeys from Lightning Strike and Triforce Slash proxies

## 0.0.6 (06/20/2022)
- New combat art: Shrapnel Field (Neutral Melee Lv.2b)
- New combat art: Lightning Fork (Shock Throw Lv.2a)
- New combat art: Sunsteel Strike (Heat Melee Lv.3b)
- Removed "backups" directory from media\entity\npc
- Frost Rupture now combos into its final explosion with a stun lock
- "Frost Rays" renamed to "Frozen Rays"
- Molten Daggers and Daybreak no longer ignore enemy shields, now do directional damage
- Adjusted Amber Flurry so that it connects more reliably
- PVP enemies now maintain a steady angle after shooting Rude Buster
- Modified sprite for Frost Ray projectile
- Tweaked particle effects for Flame Stab, deleted stabHeatShort effect
- Added extra particles to Chilling Thrust, Shadow Spark, First Fractal, Lightning Rod, Triforce Slash, Soul Shatter
- First Fractal clones now use stabShockLoopBasic effect
- Tweaked camera behavior for Frost Rupture
- Re-worded the description for Spiritfall
- Adjusted spawn position for Rude Buster projectile
- flameHit proxy (hitbox for heatPierce) logic reworked, should be more reliable now
- flameHit proxy damage greatly increased, hitbox is now size z = 48 instead of z = 32
- flamehit, flameHitS, flameHitSWeak all now have stopBeforeEdge = false
- In the map "training-2v2", replaced triblader3 with triblader4

## 0.0.5 (06/12/2022)
- Removed dependency for ArcaneLab
- All modded headIdx hard-coded values subtracted by 2 (in PVP enemy files)
- New combat art: Frost Rupture (Cold Melee Lv.2a)
- New combat art: Frost Rays (Cold Throw Lv.3) (Usable by PVP enemies)
- Removed now-unused Glacial Harpoon proxies from player json file and from PVP enemies
- Removed residual flameCataclysm proxies from PVP enemies
- Removed unused .js files from the root directory
- Slightly changed the mod icon
- Added makeshift party/player support for triblader3 (temporary)
- Changed headIdx.json.patch to contain character paths for severed head IDs
- headIdx declaration removed from triblader2 and triblader3 player files, this should fix conflicts with other mods
- Daybreak sprite scaled down to 75% size
- Solar Eruption can now only be canceled by dashing
- Wild Gambit extra sound effects for roll 5 and 9
- Wild Gambit proxy changed to breakType ACTION to avoid the attack continuing when the player is interrupted
- Wild Gambit now has HEAVY hit stability (still goes to MASSIVE if you roll a 1 so you can't escape the stun)
- Icicle Slash now has MASSIVE hit stability
- Polar Geyser now has MEDIUM hit stability on the second half of the attack, and is applied a bit earlier in the sequence
- Deploy Shields now uses startDistCollide = DROP to prevent a cluster of shields when used against a wall
- Proxy dropShieldStatic removed collType config
- Renamed the action buff used by Deploy Shields and increased DEF buff from +25% to +35%
- Renamed the action buff used by Blade Aura and increased DEF buff from +10% to +20%
- So'najiz Phalanx now uses startDistCollide = DROP for the clones that spawn in a line, now they won't spawn if a wall is in the way
- Improved the visual effects of So'najiz Phalanx laser beams
- Renamed "Sunbeam Slash" to "Scorching Rays"
- Scorching Rays reclassed from Heat Melee Lv.2a to Heat Melee Lv.2b
- Solar Eruption reclassed from Heat Melee Lv.2b to Heat Melee Lv.2a
- Snow Sweep reclassed from Cold Melee Lv.1a to Cold Melee Lv.1b
- Polar Geyser reclassed from Cold Melee Lv.1a to Cold Melee Lv.1b
- Snowstorm reclassed from Cold Melee Lv.2a to Cold Melee Lv.2b

## 0.0.4 (06/04/2022)
- New combat art: Polar Geyser (Cold Melee Lv.1a)
- Snow Sweep reclassed from Cold Melee Lv.1a to Cold Melee Lv.1b
- Player Schneider2 file deleted, I am reverting him back to vanilla behavior for now
- Player triblader2 autoequip data standardized to Schneider standard
- Map pvp-schneiders.json no longer uses Schneider2
- Map lab-duel.json no longer uses Schneider2
- Plyaer Schneider.json and Luke.json created, now these player configs have full moveset access
- Wild Gambit fire attack (6) changed from spin attack to slash attack
- Wild Gambit wave attack (7) increased knockback
- Fixed Chilling Thrust trail effect being set as actionDetached


## 0.0.3 (06/04/2022)
- Added changelog to root directory
- New combat art: Calamity's Advent (Heat Melee Lv.3a) (Usable by PVP enemies)
- Fixed heatLaser proxy to allow Vermillion Firestorm to be used at the edge of a ledge
- Tweaked Vermillion Firestorm gfx and sound effects at the end of the attack
- Added weather effects to the laser part of Vermillion Firestorm
- Increased the damage of the crossing beams at the the end of Vermillion Firestorm
- Removed camera focus from Deploy Shields
- Deploy Shields now also spawns three shields orbiting the player in addition to the wall
- FOC penalty for Overclock changed from -15% to -25%
- Renamed the two action buffs used by Overclock
- Removed old unused Storm Swords proxies from player json file
- Added additional new sound effects for Molten Daggers
- PVP enemies chance to chain subsequent Wave Motion Bomb arts changed from 55% to 65% if SP allows
- Thunder Wrath now spawns its lightning spawners at BASE instead of BOTTOM, this fixes cases when used off a ledge
- Added particle effect when shooting Targeted Surge
- Fixed collision for Wave Mortar so it can't be shot through walls anymore
- Reworked the inital TACKLE for Flame Turbine. No longer breaks on Driller/Creator boss or bypass shields, also doesn't carry bosses into the air
- PVP enemy Flame Turbine initial TACKLE will remain as type "BREAK", thus impossible to guard or shield
- Fixed issues with Flame Turbine by setting zGravityFactor 0 for proxy turbineController
- Sky Shredder initial TACKLE also changed from "BREAK" to "MASSIVE" to fix issues with bosses
- Increased the size of the stunning hitbox for Vortex Thrust
- Renamed the action buff used by Burning Sacrifice and increased ATK buff from +10% to +15%
- Molten daggers no longer set to repeat sprite animation


## 0.0.2 (05/30/2022)
- Added temporary dependency on ArcaneLab to resolve headIdx conflicts
- Removed problematic b.PVP code from prestart.js


## 0.0.1 (05/29/2022)
- Initial Pre-Pre-Release, not public
