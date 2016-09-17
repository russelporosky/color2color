/*jshint esversion: 6 */

function colorcolor(color, newColor = "rgba", calculateOpacity = false) {
	color = color.toLowerCase();
	newColor = newColor.toLowerCase();
	var returnedColor = color;
	var namedColor = require('color-name');
	var r,g,b,a;
	var roundTo = 4;
	var colorDefinitions = {
		rgb: {
			re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
			example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), 1
				];
			}
		},
		rgba: {
			re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
			example: [ "rgba(123, 234, 45, 1)", "rgba(255,234,245, 0.5)" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), parseFloat(bits[ 4 ])
				];
			}
		},
		hex: {
			re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			example: [ "00ff00", "336699" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), 1
				];
			}
		},
		hex3: {
			re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			example: [ "fb0", "f0f" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), 1
				];
			}
		},
		hexa: {
			re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
			example: [ "00ff00ff", "336699a0" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), (parseInt(bits[ 4 ], 16) / 255)
				];
			}
		},
		hex4a: {
			re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
			example: [ "fb0f", "f0f8" ],
			toRGBA: function (bits) {
				return [
					parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), (parseInt(bits[ 4 ] + bits[ 4 ], 16) / 255)
				];
			}
		},
		hsl: {
			re: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsl(120, 100%, 25%)", "hsl(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				bits[ 4 ] = 1;
				var rgba = hslToRgb(bits);
				return [
					rgba.r, rgba.g, rgba.b, rgba.a
				];
			}
		},
		hsla: {
			re: /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
			example: [ "hsla(120, 100%, 25%, 1)", "hsla(0, 100%, 50%, 0.5)" ],
			toRGBA: function (bits) {
				var rgba = hslToRgb(bits);
				return [
					rgba.r, rgba.g, rgba.b, rgba.a
				];
			}
		},
		hsv: {
			re: /^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsv(120, 100%, 25%)", "hsv(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				var rgb = hsvToRgb(bits);
				return [
					rgb.r, rgb.g, rgb.b, 1
				];
			}
		},
		hsb: {
			re: /^hsb\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
			example: [ "hsb(120, 100%, 25%)", "hsb(0, 100%, 50%)" ],
			toRGBA: function (bits) {
				var rgb = hsvToRgb(bits);
				return [
					rgb.r, rgb.g, rgb.b, 1
				];
			}
		}
	};

	// If this is a named color, convert it to hex
	if (namedColor.hasOwnProperty(color)) {
		color = namedColor[color];
		color.forEach(function(piece, index) {
			"use strict";
			color[index] = ("0" + piece.toString(16)).slice(-2);
		});
		color = "#" + color.join('');
	}

	// Search the color definitions for a match
	for (let colorDefinition in colorDefinitions) {
		let re = colorDefinitions[colorDefinition].re;
		let processor = colorDefinitions[colorDefinition].toRGBA;
		let bits = re.exec(color);
		if (bits) {
			let channels = processor(bits);
			r = channels[0];
			g = channels[1];
			b = channels[2];
			a = +(Math.round(channels[3] + ("e+" + roundTo)) + ("e-" + roundTo));
		}
	}
	r = Math.round( ( r < 0 || isNaN(r) ) ? 0 : ( ( r > 255 ) ? 255 : r ) );
	g = Math.round( ( g < 0 || isNaN(g) ) ? 0 : ( ( g > 255 ) ? 255 : g ) );
	b = Math.round( ( b < 0 || isNaN(b) ) ? 0 : ( ( b > 255 ) ? 255 : b ) );
	a = ( a < 0 || isNaN(a) ) ? 0 : ( ( a > 1 ) ? 1 : a );

	switch (newColor) {
		case "hex":
			returnedColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
			break;
		case "hexa":
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			returnedColor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2) + ("0" + (Math.round(255 * a)).toString(16)).slice(-2);
			break;
		case "hsl":
			let hsl = rgbToHsl({ "r": r, "g": g, "b": b });
			returnedColor = `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
			break;
		case "hsla":
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			let hsla = rgbToHsl({ "r": r, "g": g, "b": b, "a": a });
			returnedColor = `hsla(${hsla.h},${hsla.s}%,${hsla.l}%,${hsla.a})`;
			break;
		case "hsb":
			/* Same as `hsv` */
			let hsb = rgbToHsv({ "r": r, "g": g, "b": b });
			returnedColor = `hsb(${hsb.h},${hsb.s}%,${hsb.v}%)`;
			break;
		case "hsv":
			let hsv = rgbToHsv({ "r": r, "g": g, "b": b });
			returnedColor = `hsv(${hsv.h},${hsv.s}%,${hsv.v}%)`;
			break;
		case "rgb":
			returnedColor = `rgb(${r},${g},${b})`;
			break;
		case "rgba":
		/* falls through */
		default:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}
			returnedColor = `rgba(${r},${g},${b},${a})`;
			break;
	}

	return returnedColor;
}

function calculateOpacityFromWhite(r, g, b, a) {
	"use strict";
	var min = 0;
	a = ( 255 - ( min = Math.min(r, g, b) ) ) / 255;
	r = ( 0 || ( r - min ) / a ).toFixed(0);
	g = ( 0 || ( g - min ) / a ).toFixed(0);
	b = ( 0 || ( b - min ) / a ).toFixed(0);
	a = parseFloat(a.toFixed(4));

	return [r, g, b, a];
}

function hslToRgb(bits) {
	var rgba = {}, hsl = {
		h: bits[1] / 360,
		s: bits[2] / 100,
		l: bits[3] / 100,
		a: parseFloat(bits[ 4 ])
	};
	if (hsl.s === 0) {
		let v = 255 * hsl.l;
		rgba = {
			r: v,
			g: v,
			b: v,
			a: hsl.a
		};
	} else {
		let q = hsl.l < 0.5 ? hsl.l * ( 1 + hsl.s ) : ( hsl.l + hsl.s ) - ( hsl.l * hsl.s );
		let p = 2 * hsl.l - q;
		rgba.r = hueToRgb(p, q, hsl.h + ( 1 / 3 ) ) * 255;
		rgba.g = hueToRgb(p, q, hsl.h) * 255;
		rgba.b = hueToRgb(p, q, hsl.h - ( 1 / 3 ) ) * 255;
		rgba.a = hsl.a;
	}

	return rgba;
}

function rgbToHsl(rgba) {
	rgba.r = rgba.r / 255;
	rgba.g = rgba.g / 255;
	rgba.b = rgba.b / 255;
	var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), hsl = [], d;
	hsl.a = rgba.a;
	hsl.l = ( max + min ) / 2;
	if (max === min) {
		hsl.h = 0;
		hsl.s = 0;
	} else {
		d = max - min;
		hsl.s = hsl.l >= 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
		switch (max) {
			case rgba.r:
				hsl.h = ( rgba.g - rgba.b ) / d + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsl.h = ( rgba.b - rgba.r ) / d + 2;
				break;
			case rgba.b:
				hsl.h = ( rgba.r - rgba.g ) / d + 4;
				break;
		}
		hsl.h /= 6;
	}
	hsl.h = parseInt(( hsl.h * 360 ).toFixed(0), 10);
	hsl.s = parseInt(( hsl.s * 100 ).toFixed(0), 10);
	hsl.l = parseInt(( hsl.l * 100 ).toFixed(0), 10);

	return hsl;
}

function hsvToRgb(bits) {
	var rgb = {}, hsv = {
		h: bits[1] / 360,
		s: bits[2] / 100,
		v: bits[3] / 100
	}, i = Math.floor(hsv.h * 6), f = hsv.h * 6 - i, p = hsv.v * ( 1 - hsv.s ), q = hsv.v * ( 1 - f * hsv.s ), t = hsv.v * ( 1 - ( 1 - f ) * hsv.s );
	switch (i % 6) {
		case 0:
			rgb.r = hsv.v;
			rgb.g = t;
			rgb.b = p;
			break;
		case 1:
			rgb.r = q;
			rgb.g = hsv.v;
			rgb.b = p;
			break;
		case 2:
			rgb.r = p;
			rgb.g = hsv.v;
			rgb.b = t;
			break;
		case 3:
			rgb.r = p;
			rgb.g = q;
			rgb.b = hsv.v;
			break;
		case 4:
			rgb.r = t;
			rgb.g = p;
			rgb.b = hsv.v;
			break;
		case 5:
			rgb.r = hsv.v;
			rgb.g = p;
			rgb.b = q;
			break;
	}
	rgb.r = rgb.r * 255;
	rgb.g = rgb.g * 255;
	rgb.b = rgb.b * 255;

	return rgb;
}

function rgbToHsv(rgba) {
	rgba.r = toPercent(parseInt(rgba.r, 10) % 256, 256);
	rgba.g = toPercent(parseInt(rgba.g, 10) % 256, 256);
	rgba.b = toPercent(parseInt(rgba.b, 10) % 256, 256);
	var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), d = max - min, hsv = {
		"h": 0,
		"s": max === 0 ? 0 : d / max,
		"v": max
	};
	if (max !== min) {
		switch (max) {
			case rgba.r:
				hsv.h = ( rgba.g - rgba.b ) / d + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsv.h = ( rgba.b - rgba.r ) / d + 2;
				break;
			case rgba.b:
				hsv.h = ( rgba.r - rgba.g ) / d + 4;
				break;
		}
		hsv.h /= 6;
	}
	hsv.h = parseInt(( hsv.h * 360 ).toFixed(0), 10);
	hsv.s = parseInt(( hsv.s * 100 ).toFixed(0), 10);
	hsv.v = parseInt(( hsv.v * 100 ).toFixed(0), 10);

	return hsv;
}

function hueToRgb(p, q, t) {
	if (t < 0) {
		t += 1;
	}
	if (t > 1) {
		t -= 1;
	}
	if (t < 1 / 6) {
		return p + ( q - p ) * 6 * t;
	}
	if (t < 1 / 2) {
		return q;
	}
	if (t < 2 / 3) {
		return p + ( q - p ) * ( ( 2 / 3 - t ) * 6 );
	}

	return p;
}

function toPercent(amount, limit) {
	return amount / limit;
}

module.exports = colorcolor;
global.colorcolor = module.exports; /* ew */
