0.4.3 (09/13/2022)
### Changes
- Updated readme
- Reorganized github

0.4.2 (09/09/2022)
### Changes
- Minor edit to Apollo dialogue on player victory condition in guild-war

0.4.1 (09/09/2022)
### Changes
- Minor reformat to ccmod.json dependency list
- Cleaned up some unused clutter in triblader-mm.png
### Fixes
- Party members will no longer eat during PVP duels

0.4.0 (09/08/2022)
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

0.3.0 (08/21/2022)
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

0.2.3 (08/20/2022)
### Fixes
- Fixed crash in 1v1 training arena when setting 3 victory points

0.2.2 (08/20/2022)
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

0.2.1 (08/20/2022)
### Fixes
- Manually fixed git merge conflicts

0.2.0 (08/20/2022)
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

0.1.5 (08/17/2022)
### Changes
- Updated the nav map for triangle strategy
### Fixes
- Fixed issue where some users experienced missing dependencies despite them being present
- Corrected typo
- (meta) Corrected changelog filetype for repo

0.1.4 (08/10/2022)
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

0.1.3 (07/30/2022)
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


0.1.2 (07/24/2022)
- Vitality Curse initial hit downsized to MEDIUM strength from MASSIVE
- Fixed Prismatic Meltdown not working on enemies with environmental collision such as the whale boss
- Blade Aura defense buff changed from +20% to +30%
- Deploy Shields defense buff changed from +35% to +50%
- Triangle Strategy arena cup platinum requires 110,000 points now since I can consistently get that score


0.1.1 (07/23/2022)
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

0.1.0 (07/20/2022)
- First public beta release!
- Updated install instructions in README

0.0.18 (07/19/2022)
- Implemented some dialogue for triblader2 party member, now fully functional with menus
- Fixed portraits for triblader character files
- Added new eventTrigger to arena-01.json.patch to handle non-XTM save files (undefined plot.xtm.character will be set to 1)
- Minor dialogue tweaks to outdoors.json, interior.json, basement.json, and dev.json
- Re-worded PERMA_TASK entries for outdoors.json, interior.json, basement.json, and beta.json
- Added triblader2-events.json for party member dialogue
- database.json.patch now includes triblader2-events.json


0.0.17 (07/19/2022)
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

0.0.16 (07/19/2022)
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

0.0.15 (07/16/2022)
- Added proper unlock condition for Triblader League arena cup availible after DLC dungeon completion
- New map patch file center-nw.json.patch for NPC that unlocks the Triblader League
- Removed temporary map file dng-top-modded.json

0.0.14 (07/15/2022)
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

0.0.13 (07/11/2022)
- New combat art: Prismatic Meltdown (Shock Dash Lv.3a)
- Thunder Wrath reclassed from Shock Dash Lv.3a to Shock Dash Lv.3b
- Faraday Formation now has MASSIVE hit stability during the spinning portion of the attack
- Changed the pivot point for SHOCK_WAVE_BIG_TRIANGLE from y = 47 to y = 49
- Tweaked Triblader2 northeast running sprites

0.0.12 (07/10/2022)
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

0.0.11 (07/03/2022)
- Fixed some trigger conditions in assets\data\maps\xtm\char-select\interior.json

0.0.10 (07/03/2022)
- Changed all "tmp.return" to "map.return" in assets\data\maps\xtm\char-select\interior.json

0.0.9 (07/03/2022)
- Added new audio for player's match point in Triblader League Round 1
- Finished assets\data\maps\xtm\char-select\interior.json
- Added map assets\data\maps\xtm\char-select\basement.json, unfinished state

0.0.8 (07/01/2022)
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

0.0.7 (06/22/2022)
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

0.0.6 (06/20/2022)
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

0.0.5 (06/12/2022)
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

0.0.4 (06/04/2022)
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


0.0.3 (06/04/2022)
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


0.0.2 (05/30/2022)
- Added temporary dependency on ArcaneLab to resolve headIdx conflicts
- Removed problematic b.PVP code from prestart.js


0.0.1 (05/29/2022)
- Initial Pre-Pre-Release, not public
