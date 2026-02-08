/*
    Author: Azure Lazuline
    Created: 01/28/2026

    Description: Modifies SHOW_EXTERN_ANIM - If the player's main animation sheet has an animation by the specified name,
    			 show that instead of the one in the external sheet. This is used to allow non-Lea characters to have
    			 animations such as "hover" and for it to be supported by vanilla cutscenes that use SHOW_EXTERN_ANIM.
*/

ig.ACTION_STEP.SHOW_EXTERN_ANIM.inject({
	start(a) {
		if (a.isPlayer && a.name != "Lea" && a.name != "Shizuka0" && a.animSheet)
		{
			var showDebug = false;

			if (a.animSheet.anims[this.animName] != null)
			{ //if the animation exists in the player's sheet, read from that instead of from the external sheet
				
				if (showDebug) console.warn("extern override: " + this.animName);
				
				a.setCurrentAnim(a.animSheet.anims[this.animName], true, a.animSheet.anims[this.followUpName], true);
				a.animationFixed = true;
				return;
			}
			else if (showDebug)
				console.warn("extern not found: " + this.animName);
		}
		this.parent(a);
	}
});
