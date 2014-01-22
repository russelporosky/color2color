/*! 
 color2color v0.2.1 indyarmy.com
 by Russ Porosky
 IndyArmy Network, Inc.
 */

;(function (window, undefined) {
	"use strict";
	var color2color = (function () {
		var color2color = function (color, newColor, calculateOpacity) {
			if (!newColor) {
				newColor = "rgba";
			}

			color = color.toLowerCase();
			newColor = newColor.toLowerCase();

			var namedColor = getNamedColor(color),
				colorDefs = [
					{
						re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
						example: [ "rgb(123, 234, 45)", "rgb(255,234,245)" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), 1
							];
						}
					},
					{
						re: /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
						example: [ "rgba(123, 234, 45, 1)", "rgba(255,234,245, 0.5)" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ], 10), parseInt(bits[ 2 ], 10), parseInt(bits[ 3 ], 10), parseFloat(bits[ 4 ])
							];
						}
					},
					{
						re: /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
						example: [ "hsl(120, 100%, 25%)", "hsl(0, 100%, 50%)" ],
						process: function (bits) {
							bits[ 4 ] = 1;
							var rgba = hslToRgb(bits);
							return [
								rgba.r, rgba.g, rgba.b, rgba.a
							];
						}
					},
					{
						re: /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
						example: [ "hsla(120, 100%, 25%, 1)", "hsla(0, 100%, 50%, 0.5)" ],
						process: function (bits) {
							var rgba = hslToRgb(bits);
							return [
								rgba.r, rgba.g, rgba.b, rgba.a
							];
						}
					},
					{
						re: /^hsv\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/,
						example: [ "hsv(120, 100%, 25%)", "hsl(0, 100%, 50%)" ],
						process: function (bits) {
							var rgb = hsvToRgb(bits);
							return [
								rgb.r, rgb.g, rgb.b, 1
							];
						}
					},
					{
						re: /^([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
						example: [ "#00ff00", "336699" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ], 16), parseInt(bits[ 2 ], 16), parseInt(bits[ 3 ], 16), 1
							];
						}
					},
					{
						re: /^([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
						example: [ "#fb0", "f0f" ],
						process: function (bits) {
							return [
								parseInt(bits[ 1 ] + bits[ 1 ], 16), parseInt(bits[ 2 ] + bits[ 2 ], 16), parseInt(bits[ 3 ] + bits[ 3 ], 16), 1
							];
						}
					}
				], r, g, b, a, i, re, processor, bits, channels, min, hsl, hsv, retcolor;

			if (namedColor) {
				color = namedColor;
			} else {
				color = color.replace(/^\s*#|\s*$/g, "");
				if (color.length === 3) {
					color = color.replace(/(.)/g, "$1$1");
				}
			}

			// search through the definitions to find a match
			for (i = 0; i < colorDefs.length; i += 1) {
				re = colorDefs[ i ].re;
				processor = colorDefs[ i ].process;
				bits = re.exec(color);
				if (bits) {
					channels = processor(bits);
					r = channels[ 0 ];
					g = channels[ 1 ];
					b = channels[ 2 ];
					a = channels[ 3 ];
				}
			}
			r = ( r < 0 || isNaN(r) ) ? 0 : ( ( r > 255 ) ? 255 : r );
			g = ( g < 0 || isNaN(g) ) ? 0 : ( ( g > 255 ) ? 255 : g );
			b = ( b < 0 || isNaN(b) ) ? 0 : ( ( b > 255 ) ? 255 : b );
			a = ( a < 0 || isNaN(a) ) ? 0 : ( ( a > 1 ) ? 1 : a );
			switch (newColor) {
				case "rgba":
					if (calculateOpacity) {
						a = ( 255 - ( min = Math.min(r, g, b) ) ) / 255;
						r = ( 0 || ( r - min ) / a ).toFixed(0);
						g = ( 0 || ( g - min ) / a ).toFixed(0);
						b = ( 0 || ( b - min ) / a ).toFixed(0);
						a = a.toFixed(4);
					}
					retcolor = "rgba(" + r + "," + g + "," + b + "," + a + ")";
					break;
				case "rgb":
					retcolor = "rgb(" + r + "," + g + "," + b + ")";
					break;
				case "hex":
					retcolor = "#" + ("0" + r.toString(16)).slice(-2) + ("0" + g.toString(16)).slice(-2) + ("0" + b.toString(16)).slice(-2);
					break;
				case "hsl":
					hsl = rgbToHsl({ "r": r, "g": g, "b": b });
					retcolor = "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%)";
					break;
				case "hsla":
					hsl = rgbToHsl({ "r": r, "g": g, "b": b, "a": a });
					retcolor = "hsl(" + hsl.h + "," + hsl.s + "%," + hsl.l + "%," + hsl.a + ")";
					break;
				case "hsv":
					hsv = rgbToHsv({ "r": r, "g": g, "b": b });
					retcolor = "hsv(" + hsv.h + "," + hsv.s + "%," + hsv.v + "%)";
					break;
			}
			return retcolor;
		},
		hslToRgb = function (bits) {
			var rgba = {}, v, q, p, hsl = {
				h: toPercent(parseInt(bits[ 1 ], 10) % 360, 360),
				s: toPercent(parseInt(bits[ 2 ], 10) % 101, 100),
				l: toPercent(parseInt(bits[ 3 ], 10) % 101, 100),
				a: parseFloat(bits[ 4 ])
			};
			if (hsl.s === 0) {
				v = parseInt(Math.round(255 * hsl.l));
				rgba = {
					r: v,
					g: v,
					b: v,
					a: hsl.a
				};
			} else {
				q = hsl.l < 0.5 ? hsl.l * ( 1 + hsl.s ) : hsl.l + hsl.s - hsl.l * hsl.s;
				p = 2 * hsl.l - q;
				rgba.r = parseInt(( hueToRgb(p, q, hsl.h + 1 / 3) * 256 ).toFixed(0), 10);
				rgba.g = parseInt(( hueToRgb(p, q, hsl.h) * 256 ).toFixed(0), 10);
				rgba.b = parseInt(( hueToRgb(p, q, hsl.h - 1 / 3) * 256 ).toFixed(0), 10);
				rgba.a = hsl.a;
			}
			return rgba;
		},
		rgbToHsl = function (rgba) {
			rgba.r = toPercent(parseInt(rgba.r, 10) % 256, 256);
			rgba.g = toPercent(parseInt(rgba.g, 10) % 256, 256);
			rgba.b = toPercent(parseInt(rgba.b, 10) % 256, 256);
			var max = Math.max(rgba.r, rgba.g, rgba.b), min = Math.min(rgba.r, rgba.g, rgba.b), hsl = [], d;
			hsl.a = rgba.a;
			hsl.l = ( max + min ) / 2;
			if (max === min) {
				hsl.h = 0;
				hsl.s = 0;
			} else {
				d = max - min;
				hsl.s = hsl.l > 0.5 ? d / ( 2 - max - min ) : d / ( max + min );
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
		},
		hsvToRgb = function (bits) {
			var rgb = {}, hsv = {
					h: toPercent(parseInt(bits[ 1 ], 10) % 360, 360),
					s: toPercent(parseInt(bits[ 2 ], 10) % 101, 100),
					v: toPercent(parseInt(bits[ 3 ], 10) % 101, 100)
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
			rgb.r = parseInt(rgb.r * 256, 10);
			rgb.g = parseInt(rgb.g * 256, 10);
			rgb.b = parseInt(rgb.b * 256, 10);
			return {
				"r": rgb.r,
				"g": rgb.g,
				"b": rgb.b
			};
		},
		rgbToHsv = function (rgba) {
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
		},
		hueToRgb = function (p, q, t) {
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
				return p + ( q - p ) * ( 2 / 3 - t ) * 6;
			}
			return p;
		},
		toPercent = function (amount, limit) {
			return amount / limit;
		},
		getNamedColor = function (color) {
			var key, namedColor = null, namedColors = {
					aliceblue: "f0f8ff",
					antiquewhite: "faebd7",
					aqua: "00ffff",
					aquamarine: "7fffd4",
					azure: "f0ffff",
					beige: "f5f5dc",
					bisque: "ffe4c4",
					black: "000000",
					blanchedalmond: "ffebcd",
					blue: "0000ff",
					blueviolet: "8a2be2",
					brown: "a52a2a",
					burlywood: "deb887",
					cadetblue: "5f9ea0",
					chartreuse: "7fff00",
					chocolate: "d2691e",
					coral: "ff7f50",
					cornflowerblue: "6495ed",
					cornsilk: "fff8dc",
					crimson: "dc143c",
					cyan: "00ffff",
					darkblue: "00008b",
					darkcyan: "008b8b",
					darkgoldenrod: "b8860b",
					darkgray: "a9a9a9",
					darkgreen: "006400",
					darkkhaki: "bdb76b",
					darkmagenta: "8b008b",
					darkolivegreen: "556b2f",
					darkorange: "ff8c00",
					darkorchid: "9932cc",
					darkred: "8b0000",
					darksalmon: "e9967a",
					darkseagreen: "8fbc8f",
					darkslateblue: "483d8b",
					darkslategray: "2f4f4f",
					darkturquoise: "00ced1",
					darkviolet: "9400d3",
					deeppink: "ff1493",
					deepskyblue: "00bfff",
					dimgray: "696969",
					dodgerblue: "1e90ff",
					feldspar: "d19275",
					firebrick: "b22222",
					floralwhite: "fffaf0",
					forestgreen: "228b22",
					fuchsia: "ff00ff",
					gainsboro: "dcdcdc",
					ghostwhite: "f8f8ff",
					gold: "ffd700",
					goldenrod: "daa520",
					gray: "808080",
					green: "008000",
					greenyellow: "adff2f",
					honeydew: "f0fff0",
					hotpink: "ff69b4",
					indianred: "cd5c5c",
					indigo: "4b0082",
					ivory: "fffff0",
					khaki: "f0e68c",
					lavender: "e6e6fa",
					lavenderblush: "fff0f5",
					lawngreen: "7cfc00",
					lemonchiffon: "fffacd",
					lightblue: "add8e6",
					lightcoral: "f08080",
					lightcyan: "e0ffff",
					lightgoldenrodyellow: "fafad2",
					lightgrey: "d3d3d3",
					lightgreen: "90ee90",
					lightpink: "ffb6c1",
					lightsalmon: "ffa07a",
					lightseagreen: "20b2aa",
					lightskyblue: "87cefa",
					lightslateblue: "8470ff",
					lightslategray: "778899",
					lightsteelblue: "b0c4de",
					lightyellow: "ffffe0",
					lime: "00ff00",
					limegreen: "32cd32",
					linen: "faf0e6",
					magenta: "ff00ff",
					maroon: "800000",
					mediumaquamarine: "66cdaa",
					mediumblue: "0000cd",
					mediumorchid: "ba55d3",
					mediumpurple: "9370d8",
					mediumseagreen: "3cb371",
					mediumslateblue: "7b68ee",
					mediumspringgreen: "00fa9a",
					mediumturquoise: "48d1cc",
					mediumvioletred: "c71585",
					midnightblue: "191970",
					mintcream: "f5fffa",
					mistyrose: "ffe4e1",
					moccasin: "ffe4b5",
					navajowhite: "ffdead",
					navy: "000080",
					oldlace: "fdf5e6",
					olive: "808000",
					olivedrab: "6b8e23",
					orange: "ffa500",
					orangered: "ff4500",
					orchid: "da70d6",
					palegoldenrod: "eee8aa",
					palegreen: "98fb98",
					paleturquoise: "afeeee",
					palevioletred: "d87093",
					papayawhip: "ffefd5",
					peachpuff: "ffdab9",
					peru: "cd853f",
					pink: "ffc0cb",
					plum: "dda0dd",
					powderblue: "b0e0e6",
					purple: "800080",
					red: "ff0000",
					rosybrown: "bc8f8f",
					royalblue: "4169e1",
					saddlebrown: "8b4513",
					salmon: "fa8072",
					sandybrown: "f4a460",
					seagreen: "2e8b57",
					seashell: "fff5ee",
					sienna: "a0522d",
					silver: "c0c0c0",
					skyblue: "87ceeb",
					slateblue: "6a5acd",
					slategray: "708090",
					snow: "fffafa",
					springgreen: "00ff7f",
					steelblue: "4682b4",
					tan: "d2b48c",
					teal: "008080",
					thistle: "d8bfd8",
					tomato: "ff6347",
					turquoise: "40e0d0",
					violet: "ee82ee",
					violetred: "d02090",
					wheat: "f5deb3",
					white: "ffffff",
					whitesmoke: "f5f5f5",
					yellow: "ffff00",
					yellowgreen: "9acd32"
				};

			for (key in namedColors) {
				if (color === key) {
					namedColor = namedColors[ key ];
				}
			}

			return namedColor;
		};
		return color2color;
	})();
	window.color2color = color2color;
})(window);
