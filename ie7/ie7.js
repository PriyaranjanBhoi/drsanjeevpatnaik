/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'bestortho\'">' + entity + '</span>' + html;
	}
	var icons = {
		'bestorthoBest_Arthroscopic-Surgeon-SanjeevPatnaik': '&#xe900;',
		'bestorthoBest_FootAnkle-Surgeon-SanjeevPatnaik': '&#xe90c;',
		'bestorthoBest_Hip-Surgeon-SanjeevPatnaik': '&#xe91c;',
		'bestorthoBest_knee-Surgeon-SanjeevPatnaik': '&#xe921;',
		'bestorthoBest_Pelvic_Surgeon-SanjeevPatnaik': '&#xe928;',
		'bestorthoBest_Truma_Surgeon-SanjeevPatnaik': '&#xe92e;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/bestortho[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
