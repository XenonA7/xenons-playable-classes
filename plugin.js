const header = 'xeons-triblader-mod'
const overrideRhombusDngId = 'xenons-overriderhombusdngteleportfield'

export default class TribladerMod {
    constructor(mod) {
        this.mod = mod
        this.mod.isCCL3 = mod.findAllAssets ? true : false
    }
    async prestart() {
        sc.OPTIONS_DEFINITION[overrideRhombusDngId] = {
            type: 'CHECKBOX',
            init: true,
            cat: sc.OPTION_CATEGORY.GENERAL,
            header,
            hasDivider: true,
            restart: true,
        }
    }

    async poststart() {
        ig.lang.labels.sc.gui.options.headers[header] = 'Triblader mod'
        ig.lang.labels.sc.gui.options[overrideRhombusDngId] = {
            name: 'Redirect to char select map',
            description: 'Redirect to the character selection map before rhombus dungeon. \\c[1]Needs a restart!',
        }
        const optionalAssets = {}

        if (sc.options.get(overrideRhombusDngId)) {
            optionalAssets['data/maps/rhombus-sqr/dng-top.json.patch'] = this.mod.baseDirectory + 'patches/data/maps/rhombus-sqr/dng-top.json.patch'
        }

        if (this.mod.isCCL3) {
            Object.entries(optionalAssets).forEach(e => {
                ccmod.resources.assetOverridesTable.set(e[0], e[1])
            })
        } else {
            this.mod.runtimeAssets = optionalAssets
        }
    }
}
