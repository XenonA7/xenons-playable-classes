/*
    Author: Krypek
    Created: 10/15/2024

    Description: Makes the doormat entity (created as a part of a door entity on map styles that have
    doormats defined for doors) also obey the spawnCondition property of the door.
*/

ig.ENTITY.Door.inject({
    hide() {
        this.parent()
        if (this.doorMat) {
            this.doorMat.kill()
        }
    },
})