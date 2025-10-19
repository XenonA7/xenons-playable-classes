ig.module("game.feature.font.xpc-custom-icons").requires("game.feature.font.font-system").defines(function() {
	var fontIdx = sc.fontsystem.font.iconSets.length, smallFontIdx = sc.fontsystem.smallFont.iconSets.length;
	
	sc.fontsystem.font.pushIconSet(new ig.Font("media/font/xpc-font-icons.png", 16, ig.MultiFont.ICON_START));
	sc.fontsystem.smallFont.pushIconSet(new ig.Font("media/font/xpc-font-icons-small.png", 14, ig.MultiFont.ICON_START));
	

	//large font icons
	sc.fontsystem.font.setMapping({"xenon-logo" :[fontIdx, 0]});
	sc.fontsystem.font.setMapping({"al-logo" :[fontIdx, 1]});
	sc.fontsystem.font.setMapping({"class-sphero" :[fontIdx, 2]});
	sc.fontsystem.font.setMapping({"class-tri" :[fontIdx, 3]});
	sc.fontsystem.font.setMapping({"class-quadro" :[fontIdx, 4]});
	sc.fontsystem.font.setMapping({"class-penta" :[fontIdx, 5]});
	sc.fontsystem.font.setMapping({"class-hexa" :[fontIdx, 6]});
	sc.fontsystem.font.setMapping({"head-lily" :[fontIdx, 7]});
	sc.fontsystem.font.setMapping({"hexa-vrp" :[fontIdx, 8]});

	//small font icons
	sc.fontsystem.smallFont.setMapping({"icon-test" :[smallFontIdx, 0]});

	//huge (height 32) font icons
	//sc.fontsystem.font.pushIconSet(new ig.Font("media/font/xpc-font-icons-32.png", 32, ig.MultiFont.ICON_START));
	//sc.fontsystem.font.setMapping({"lea-full" :[fontIdx, 0]});
});