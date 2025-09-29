/*
    Author: Azure Lazuline
    Created: 09/26/2025

    Description: Adds the variable combat.guarding which is true while the player is guarding.
*/

sc.Combat.inject({
  onVarAccess(fullName, varPath) {
    if (varPath.length == 2 && varPath[0] == 'combat' && varPath[1] == 'guarding') 
        return sc.control.guarding();

    return this.parent(fullName, varPath);
  },
});