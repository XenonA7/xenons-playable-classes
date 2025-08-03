/*
    Author: Azure Lazuline
    Created: 07/28/2025

    Description: Adds the "hasBuffTimer" attribute to ADD_ACTION_BUFF. If true, the yellow timer bar on the status icon will tick down
                 according to the user proxy's WAIT time defined in a subsequent action step.
*/

ig.ACTION_STEP.ADD_ACTION_BUFF.inject({
  init(a) {
    this.parent(a);
    this.hasBuffTimer = a.hasBuffTimer;
  },
  start(a) {
    this.parent(a);
    if (this.hasBuffTimer)
    {
        var b = this.target(a);
        if (b && b.params) 
        { //this.parent doesn't keep track of the buff after it adds it. This grabs the latest one which should hopefully always be accurate?
            var buff = b.params.buffs[b.params.buffs.length - 1];
            //console.warn(Object.entries(a));
            buff.hasTimer = true;
            buff.getTimeFactor = function()
            {
                if (!this.active)
                    return 0;
                
                if (a.azureMaxTime == null || a.stepTimer > a.azureMaxTime)
                    a.azureMaxTime = a.stepTimer;
            
                return a.stepTimer / a.azureMaxTime;
            };
        }
    }
  },
});