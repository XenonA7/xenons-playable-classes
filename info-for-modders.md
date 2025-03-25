# XPC Technical Information
Thank you to Krypek, Azure Lazuline, Bakafish, Alyxia, and Lubkuluk for helping with some JS features.

## Misc JS Features
* Door entities will now hide their doormat (if the map style defines one) when their spawnCondition is false
* Adds new text icons including class logos (see \js\custom-font-icons.js)
* Adds the "default2" OneTimeSwitch type which has the default appearance but properly supports being hidden
* Adds the "forest-dng" map style

## PVP Features
* Speeds up the game when player dies in PVP but has party members remaining (can be disabled with tmp.speedUpBlock)
* Hides healthbars of defeated PVP enemies
* PVP scoreboard GUI element renders multiple head icons for larger teams
* For duels with multiple opponents, renders the enemy healthbars in a list rather than overlapping
* Party members will no longer eat consumables if they are in a PVP duel

## Modded Action Steps
* DISABLE_HEALTHBAR (allows hiding the player health/status bar temporarily to enhance invisibility effects)
* DISABLE_SPIKEDMG (allows temporarily disabling the player's "pin body" modifier)
* COMBAT_ART_CHARGE_NOZOOM (identical to COMBAT_ART_CHARGE but does not zoom the camera)
* WAIT_WHILE_AIMING (adjust face towards cursor while waiting)
* RESET_GUARD_COMBO (resets all internal tracking of guard combo values) 

## Modded Event Steps
* SET_PARTY_MEMBER_LEVEL_VAR (a copied version of SET_PARTY_MEMBER_LEVEL that accepts a NumberExpression for "level")

## Modded Combat Conditions
* TARGET_HAS_BLOCKED_DAMAGE
* TARGET_HAS_BLOCKED_HITS

## In-Game Variables
### Global Code Variables
* tmp.pvp_player_defeated (true when player is defeated in PVP, even if party members are still alive)
* tmp.pvp_ENTITY_NAME_defeated (allows tracking deaths of specific enemy PVP combatants, used for death effects in multi-opponent duels)
* tmp.speedUpBlock (disables the feature that speeds up pvp when player is dead but party members are alive)
* tmp.onKeyPanel (true if player is standing on a KeyPanel entity, needed if character charged throws don't use SHOOT_PROXY_PLAYER)

### Quest Variables
* quest.xpc-heat-penguins.[started/task.#/solved]
* quest.xpc-triblader-league.[started/task.#/solved]
* quest.xpc-cheat-skills.[started/task.#/solved]

### Plot Variables
* plot.xpc.triblader2Join
* plot.xpc.SchneiderArenaUnlock
* plot.xpc.triArenaUnlock
* plot.xpc.charSelectDone
* plot.xpc.enemyTestBlock
* plot.xpc.csRoomEntered
* plot.xpc.cheatsUnlocked