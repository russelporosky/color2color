const namedColors = {
	'aliceblue': '#f0f8ff',
	'antiquewhite': '#faebd7',
	'aqua': '#00ffff',
	'aquamarine': '#7fffd4',
	'azure': '#f0ffff',
	'beige': '#f5f5dc',
	'bisque': '#ffe4c4',
	'black': '#000000',
	'blanchedalmond': '#ffebcd',
	'blue': '#0000ff',
	'blueviolet': '#8a2be2',
	'brown': '#a52a2a',
	'burlywood': '#deb887',
	'cadetblue': '#5f9ea0',
	'chartreuse': '#7fff00',
	'chocolate': '#d2691e',
	'coral': '#ff7f50',
	'cornflowerblue': '#6495ed',
	'cornsilk': '#fff8dc',
	'crimson': '#dc143c',
	'cyan': '#00ffff',
	'darkblue': '#00008b',
	'darkcyan': '#008b8b',
	'darkgoldenrod': '#b8860b',
	'darkgray': '#a9a9a9',
	'darkgreen': '#006400',
	'darkgrey': '#a9a9a9',
	'darkkhaki': '#bdb76b',
	'darkmagenta': '#8b008b',
	'darkolivegreen': '#556b2f',
	'darkorange': '#ff8c00',
	'darkorchid': '#9932cc',
	'darkred': '#8b0000',
	'darksalmon': '#e9967a',
	'darkseagreen': '#8fbc8f',
	'darkslateblue': '#483d8b',
	'darkslategray': '#2f4f4f',
	'darkslategrey': '#2f4f4f',
	'darkturquoise': '#00ced1',
	'darkviolet': '#9400d3',
	'deeppink': '#ff1493',
	'deepskyblue': '#00bfff',
	'dimgray': '#696969',
	'dimgrey': '#696969',
	'dodgerblue': '#1e90ff',
	'firebrick': '#b22222',
	'floralwhite': '#fffaf0',
	'forestgreen': '#228b22',
	'fuchsia': '#ff00ff',
	'gainsboro': '#dcdcdc',
	'ghostwhite': '#f8f8ff',
	'goldenrod': '#daa520',
	'gold': '#ffd700',
	'gray': '#808080',
	'green': '#008000',
	'greenyellow': '#adff2f',
	'grey': '#808080',
	'honeydew': '#f0fff0',
	'hotpink': '#ff69b4',
	'indianred': '#cd5c5c',
	'indigo': '#4b0082',
	'ivory': '#fffff0',
	'khaki': '#f0e68c',
	'lavenderblush': '#fff0f5',
	'lavender': '#e6e6fa',
	'lawngreen': '#7cfc00',
	'lemonchiffon': '#fffacd',
	'lightblue': '#add8e6',
	'lightcoral': '#f08080',
	'lightcyan': '#e0ffff',
	'lightgoldenrodyellow': '#fafad2',
	'lightgray': '#d3d3d3',
	'lightgreen': '#90ee90',
	'lightgrey': '#d3d3d3',
	'lightpink': '#ffb6c1',
	'lightsalmon': '#ffa07a',
	'lightseagreen': '#20b2aa',
	'lightskyblue': '#87cefa',
	'lightslategray': '#778899',
	'lightslategrey': '#778899',
	'lightsteelblue': '#b0c4de',
	'lightyellow': '#ffffe0',
	'lime': '#00ff00',
	'limegreen': '#32cd32',
	'linen': '#faf0e6',
	'magenta': '#ff00ff',
	'maroon': '#800000',
	'mediumaquamarine': '#66cdaa',
	'mediumblue': '#0000cd',
	'mediumorchid': '#ba55d3',
	'mediumpurple': '#9370db',
	'mediumseagreen': '#3cb371',
	'mediumslateblue': '#7b68ee',
	'mediumspringgreen': '#00fa9a',
	'mediumturquoise': '#48d1cc',
	'mediumvioletred': '#c71585',
	'midnightblue': '#191970',
	'mintcream': '#f5fffa',
	'mistyrose': '#ffe4e1',
	'moccasin': '#ffe4b5',
	'navajowhite': '#ffdead',
	'navy': '#000080',
	'oldlace': '#fdf5e6',
	'olive': '#808000',
	'olivedrab': '#6b8e23',
	'orange': '#ffa500',
	'orangered': '#ff4500',
	'orchid': '#da70d6',
	'palegoldenrod': '#eee8aa',
	'palegreen': '#98fb98',
	'paleturquoise': '#afeeee',
	'palevioletred': '#db7093',
	'papayawhip': '#ffefd5',
	'peachpuff': '#ffdab9',
	'peru': '#cd853f',
	'pink': '#ffc0cb',
	'plum': '#dda0dd',
	'powderblue': '#b0e0e6',
	'purple': '#800080',
	'rebeccapurple': '#663399',
	'red': '#ff0000',
	'rosybrown': '#bc8f8f',
	'royalblue': '#4169e1',
	'saddlebrown': '#8b4513',
	'salmon': '#fa8072',
	'sandybrown': '#f4a460',
	'seagreen': '#2e8b57',
	'seashell': '#fff5ee',
	'sienna': '#a0522d',
	'silver': '#c0c0c0',
	'skyblue': '#87ceeb',
	'slateblue': '#6a5acd',
	'slategray': '#708090',
	'slategrey': '#708090',
	'snow': '#fffafa',
	'springgreen': '#00ff7f',
	'steelblue': '#4682b4',
	'tan': '#d2b48c',
	'teal': '#008080',
	'thistle': '#d8bfd8',
	'tomato': '#ff6347',
	'turquoise': '#40e0d0',
	'violet': '#ee82ee',
	'wheat': '#f5deb3',
	'white': '#ffffff',
	'whitesmoke': '#f5f5f5',
	'yellow': '#ffff00',
	'yellowgreen': '#9acd32',
};

const AlphaPrecision = 4;
const DecimalRadix = 10;
const HexRadix = 16;
const LowerDecimalLimit = 0;
const MaxDegrees = 360;
const MaxFixed = 0;
const MaxOpacity = 1;
const MaxOpacitySteps = 255;
const MaxPercent = 100;
const MaxRgb = 255;
const MaxRgbRange = 256;
const MinOpacity = 0;
const MinPercent = 0;
const Precision = 1;
const UpperDecimalLimit = 255;
const UpperOpacityLimit = 1;

const RedIndex = 1;
const GreenIndex = 2;
const BlueIndex = 3;
const AlphaIndex = 4;

interface ColorDefinition {
	example: string[];
	re: RegExp;

	toRGBA(bits: string[]): number[];
}

interface ColorDefinitions {
	[key: string]: ColorDefinition;
}

enum ColorName {
	HEX = 'hex',
	HEXA = 'hexa',
	HSL = 'hsl',
	HSLA = 'hsla',
	HSB = 'hsb',
	HSV = 'hsv',
	RGB = 'rgb',
	RGBA = 'rgba',
}

type ColorType = `${ ColorName }`;

type Hex = {
	r: string;
	g: string;
	b: string;
};

type Hexa = {
	r: string;
	g: string;
	b: string;
	a: string;
};

type Hsb = {
	h: number;
	s: number;
	b: number;
}

type Hsl = {
	h: number;
	s: number;
	l: number;
}

type Hsla = {
	h: number;
	s: number;
	l: number;
	a: number;
}

type Hsv = {
	h: number;
	s: number;
	v: number;
}

type Rgb = {
	r: number;
	g: number;
	b: number;
};

type Rgba = {
	r: number;
	g: number;
	b: number;
	a: number;
};

/**
 * Modifies the RGB values to be accurate when displayed on a white background.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 */
export const calculateOpacityFromWhite = (r: number, g: number, b: number): number[] => {
	const min = Math.min(r, g, b);
	const calculatedAlpha = (
		MaxRgb - min
	) / MaxRgb;

	return [
		+(
			MinOpacity ||
			(
				r - min
			) /
			calculatedAlpha
		).toFixed(MaxFixed),
		+(
			MinOpacity ||
			(
				g - min
			) /
			calculatedAlpha
		).toFixed(MaxFixed),
		+(
			MinOpacity ||
			(
				b - min
			) /
			calculatedAlpha
		).toFixed(MaxFixed),
		parseFloat(calculatedAlpha.toFixed(AlphaPrecision)),
	];
};

/**
 * Convert an HSL color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the four components of an HSL color value
 */
export const hslToRgb = (bits: string[]): Rgba => {
	const hsl: Hsla = {
		h: +bits[1] / MaxDegrees,
		s: +bits[2] / MaxPercent,
		l: +bits[3] / MaxPercent,
		a: parseFloat(bits[4]),
	};
	const rgba: Rgba = {
		r: 0,
		g: 0,
		b: 0,
		a: 0,
	};

	if (hsl.s === MinPercent) {
		const v = MaxRgb * hsl.l;
		rgba.r = v;
		rgba.g = v;
		rgba.b = v;
		rgba.a = hsl.a;
	} else {
		const q = hsl.l < 0.5 ?
			hsl.l *
			(
				1 + hsl.s
			) :
			(
				hsl.l + hsl.s
			) -
			(
				hsl.l * hsl.s
			);
		const p = 2 * hsl.l - q;
		rgba.r =
			+(
				hueToRgb(
					p,
					q,
					hsl.h +
					(
						1 / 3
					),
				) * MaxRgb
			).toFixed(MaxFixed);
		rgba.g =
			+(
				hueToRgb(p, q, hsl.h) * MaxRgb
			).toFixed(MaxFixed);
		rgba.b =
			+(
				hueToRgb(
					p,
					q,
					hsl.h -
					(
						1 / 3
					),
				) * MaxRgb
			).toFixed(MaxFixed);
		rgba.a = hsl.a;
	}

	return rgba;
};

/**
 * Convert an HSV color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the three components of an HSV color value
 */
export const hsvToRgb = (bits: string[]): Rgb => {
	const rgb: Rgb = {
		r: 0,
		g: 0,
		b: 0,
	};
	const hsv: Hsv = {
		h: +bits[1] / MaxDegrees,
		s: +bits[2] / MaxPercent,
		v: +bits[3] / MaxPercent,
	};
	const i = Math.floor(hsv.h * 6);
	const f = hsv.h * 6 - i;
	const p = hsv.v *
		(
			1 - hsv.s
		);
	const q = hsv.v *
		(
			1 - f * hsv.s
		);
	const t = hsv.v *
		(
			1 -
			(
				1 - f
			) *
			hsv.s
		);

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
	rgb.r =
		+(
			rgb.r * MaxRgb
		).toFixed(MaxFixed);
	rgb.g =
		+(
			rgb.g * MaxRgb
		).toFixed(MaxFixed);
	rgb.b =
		+(
			rgb.b * MaxRgb
		).toFixed(MaxFixed);

	return rgb;
};

/**
 * Converts a given hue (from an HSL color) to the RGB decimal value.
 *
 * @param p
 * @param q
 * @param originalT
 */
const hueToRgb = (p: number, q: number, originalT: number): number => {
	let t = originalT;

	if (originalT < 0) {
		t += 1;
	}
	if (originalT > 1) {
		t -= 1;
	}
	if (t < 1 / 6) {
		return p +
			(
				q - p
			) *
			6 *
			t;
	}
	if (t < 1 / 2) {
		return q;
	}
	if (t < 2 / 3) {
		return p +
			(
				q - p
			) *
			(
				(
					2 / 3 - t
				) * 6
			);
	}

	return p;
};

/**
 * Converts decimal to hexadecimal, ensuring a leading 0 if the result is a single digit.
 *
 * @param n
 */
export const numberToHex = (n: number): string => `0${ n.toString(HexRadix) }`.slice(-2);

/**
 * Convert an RGB color to an HSL color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
export const rgbToHsl = (r: number, g: number, b: number, a: number): Hsla => {
	const rgba: Rgba = {
		r: r / MaxRgb,
		g: g / MaxRgb,
		b: b / MaxRgb,
		a,
	};
	const max = Math.max(rgba.r, rgba.g, rgba.b);
	const min = Math.min(rgba.r, rgba.g, rgba.b);
	const diff = max - min;
	const hsl: Hsla = {
		h: 0,
		s: 0,
		l: (
			max + min
		) / 2,
		a: rgba.a,
	};

	if (max !== min) {
		hsl.s =
			hsl.l >= 0.5 ?
				diff /
				(
					2 - max - min
				) :
				diff /
				(
					max + min
				);
		switch (max) {
			case rgba.r:
				hsl.h =
					(
						rgba.g - rgba.b
					) /
					diff +
					(
						rgba.g < rgba.b ? 6 : 0
					);
				break;
			case rgba.g:
				hsl.h =
					(
						rgba.b - rgba.r
					) / diff + 2;
				break;
			case rgba.b:
				hsl.h =
					(
						rgba.r - rgba.g
					) / diff + 4;
				break;
		}
		hsl.h /= 6;
	}
	hsl.h =
		parseFloat((
			hsl.h * MaxDegrees
		).toFixed(Precision));
	hsl.s =
		parseFloat((
			hsl.s * MaxPercent
		).toFixed(Precision));
	hsl.l =
		parseFloat((
			hsl.l * MaxPercent
		).toFixed(Precision));

	return hsl;
};

/**
 * Convert an RGB color to an HSV color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
export const rgbToHsv = (r: number, g: number, b: number, a: number): Hsv => {
	const rgba: Rgba = {
		r: toPercent(r % MaxRgbRange, MaxRgbRange),
		g: toPercent(g % MaxRgbRange, MaxRgbRange),
		b: toPercent(b % MaxRgbRange, MaxRgbRange),
		a,
	};
	const max = Math.max(rgba.r, rgba.g, rgba.b);
	const min = Math.min(rgba.r, rgba.g, rgba.b);
	const diff = max - min;
	const hsv: Hsv = {
		h: 0,
		s: max === MinPercent ? MinPercent : diff / max,
		v: max,
	};

	if (max !== min) {
		switch (max) {
			case rgba.r:
				hsv.h =
					(
						rgba.g - rgba.b
					) /
					diff +
					(
						rgba.g < rgba.b ? 6 : MinPercent
					);
				break;
			case rgba.g:
				hsv.h =
					(
						rgba.b - rgba.r
					) / diff + 2;
				break;
			case rgba.b:
				hsv.h =
					(
						rgba.r - rgba.g
					) / diff + 4;
				break;
		}
		hsv.h /= 6;
	}
	hsv.h =
		parseFloat((
			hsv.h * MaxDegrees
		).toFixed(Precision));
	hsv.s =
		parseFloat((
			hsv.s * MaxPercent
		).toFixed(Precision));
	hsv.v =
		parseFloat((
			hsv.v * MaxPercent
		).toFixed(Precision));

	return hsv;
};

/**
 * Gives the percent as a value between 0 and 1.
 *
 * @param amount
 * @param limit
 */
const toPercent = (amount: number, limit: number) => amount / limit;

const ColorDefinitions: ColorDefinitions = {
	'hex': {
		example: ['#00ff00', '#336699'],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex], HexRadix),
			MaxOpacity,
		],
	},
	'hex3': {
		example: ['#0f0', '#369'],
		re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex] + bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex] + bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex] + bits[BlueIndex], HexRadix),
			MaxOpacity,
		],
	},
	'hexa': {
		example: ['#00ff00ff', '#336699a0'],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex], HexRadix),
			parseInt(bits[AlphaIndex], HexRadix) / MaxOpacitySteps,
		],
	},
	'hex4a': {
		example: ['#fb0f', '#f0f8'],
		re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex] + bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex] + bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex] + bits[BlueIndex], HexRadix),
			parseInt(bits[AlphaIndex] + bits[AlphaIndex], HexRadix) / MaxOpacitySteps,
		],
	},
	'hsb': {
		example: ['hsb(120, 100%, 25%)', 'hsb(0, 100%, 50%)'],
		re: /^hsb\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
		toRGBA: bits => {
			const rgb = hsvToRgb(bits);

			return [
				rgb.r,
				rgb.g,
				rgb.b,
				MaxOpacity,
			];
		},
	},
	'hsl': {
		example: ['hsl(120, 100%, 25%)', 'hsl(0, 100%, 50%)'],
		re: /^hsl\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
		toRGBA: bits => {
			bits[AlphaIndex] = `${ MaxOpacity }`;
			const rgba = hslToRgb(bits);

			return [
				rgba.r,
				rgba.g,
				rgba.b,
				rgba.a,
			];
		},
	},
	'hsla': {
		example: ['hsla(120, 100%, 25%, 1)', 'hsla(0, 100%, 50%, 0.5)'],
		re: /^hsla\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
		toRGBA: bits => {
			const rgba = hslToRgb(bits);

			return [
				rgba.r,
				rgba.g,
				rgba.b,
				rgba.a,
			];
		},
	},
	'hsv': {
		example: ['hsv(120, 100%, 25%)', 'hsv(0, 100%, 50%)'],
		re: /^hsv\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
		toRGBA: bits => {
			const rgb = hsvToRgb(bits);

			return [
				rgb.r,
				rgb.g,
				rgb.b,
				MaxOpacity,
			];
		},
	},
	'rgb': {
		example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
		re: /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], DecimalRadix),
			parseInt(bits[GreenIndex], DecimalRadix),
			parseInt(bits[BlueIndex], DecimalRadix),
			MaxOpacity,
		],
	},
	'rgba': {
		example: ['rgba(123, 234, 45, 1)', 'rgba(255,234,245, 0.5)'],
		re: /^rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], DecimalRadix),
			parseInt(bits[GreenIndex], DecimalRadix),
			parseInt(bits[BlueIndex], DecimalRadix),
			parseFloat(bits[AlphaIndex]),
		],
	},
};

/**
 * Convert a color string in any valid CSS format (RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSB) into another format.
 *
 * @example
 * // returns 'rgba(35,189,0,1)'
 * colorcolor('hsla(109,100%,37%,1)');
 * @example
 * // returns 'rgba(0,255,128,0.1333)'
 * colorcolor('#dfe', 'rgba', true);
 *
 * @param originalColor The CSS color value that needs to be converted
 * @param targetColor The CSS color type to convert to
 * @param calculateOpacity If the target color has an opacity value (HexA, HSLA, or RGBA), the result will be correct if viewed against a white background
 */
export function colorcolor (
	originalColor: string,
	targetColor: ColorType = ColorName.RGBA,
	calculateOpacity = false,
): string {
	const returnedComponent: Hex | Hexa | Hsb | Hsl | Hsla | Hsv | Rgb | Rgba = colorcolorRaw(originalColor, targetColor, calculateOpacity);

	let returnedColor: string;

	switch (targetColor) {
		case ColorName.HEX: {
			const hex = (returnedComponent as Hex);
			returnedColor = `#${ hex.r }${ hex.g }${ hex.b }`;
			break;
		}
		case ColorName.HEXA: {
			const hexa = (returnedComponent as Hexa);
			returnedColor = `#${ hexa.r }${ hexa.g }${ hexa.b }${ hexa.a }`;
			break;
		}
		case ColorName.HSB: {
			const hsb = (returnedComponent as Hsb);
			returnedColor = `hsb(${ hsb.h },${ hsb.s }%,${ hsb.b }%)`;
			break;
		}
		case ColorName.HSL: {
			const hsl = (returnedComponent as Hsl);
			returnedColor = `hsl(${ hsl.h },${ hsl.s }%,${ hsl.l }%)`;
			break;
		}
		case ColorName.HSLA: {
			const hsl = (returnedComponent as Hsla);
			returnedColor = `hsla(${ hsl.h },${ hsl.s }%,${ hsl.l }%,${ hsl.a })`;
			break;
		}
		case ColorName.HSV: {
			const hsv = (returnedComponent as Hsv);
			returnedColor = `hsv(${ hsv.h },${ hsv.s }%,${ hsv.v }%)`;
			break;
		}
		case ColorName.RGB: {
			const rgb = (returnedComponent as Rgb);
			returnedColor = `rgb(${ rgb.r },${ rgb.g },${ rgb.b })`;
			break;
		}
		case ColorName.RGBA:
		default: {
			const rgba = (returnedComponent as Rgba);
			returnedColor = `rgba(${ rgba.r },${ rgba.g },${ rgba.b },${ rgba.a })`;
			break;
		}
	}

	return returnedColor;
}

/**
 * Convert a color string in any valid CSS format (RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSB) into the numeric components of another format.
 *
 * @example
 * // returns '{ r: 35, g: 189, b: 0, a: 1 }'
 * colorcolor('hsla(109,100%,37%,1)');
 * @example
 * // returns 'rgba(0,255,128,0.1333)'
 * // returns '{ r: 0, g: 255, b: 128, a: 0.1333 }'
 * colorcolor('#dfe', 'rgba', true);
 *
 * @param originalColor The CSS color value that needs to be converted
 * @param targetColor The CSS color type to convert to
 * @param calculateOpacity If the target color has an opacity value (HexA, HSLA, or RGBA), the result will be correct if viewed against a white background
 */
export function colorcolorRaw(
	originalColor: string,
	targetColor: ColorType = ColorName.RGBA,
	calculateOpacity = false,
): Hex | Hexa | Hsb | Hsl | Hsla | Hsv | Rgb | Rgba {
	let a = 0;
	let b = 0;
	let convertedColor = originalColor.toLowerCase();
	let g = 0;
	let hsb: Hsv;
	let hsl: Hsla;
	let hsv: Hsv;
	let r = 0;
	let returnedComponent: Hex | Hexa | Hsb | Hsl | Hsla | Hsv | Rgb | Rgba;

	// convert named color to hex
	if (Object.prototype.hasOwnProperty.call(namedColors, convertedColor)) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
		convertedColor =
			(
				namedColors as never
			)[convertedColor];
	}

	// Search the color definitions for a match
	for (const colorDefinition in ColorDefinitions) {
		if (Object.prototype.hasOwnProperty.call(ColorDefinitions, colorDefinition)) {
			const { re } = ColorDefinitions[colorDefinition];
			const bits = re.exec(convertedColor);

			if (bits) {
				const channels = ColorDefinitions[colorDefinition].toRGBA(bits);
				[r, g, b] = channels;
				a =
					+(
						`${ Math.round(+`${ channels[3] }e+${ AlphaPrecision }`) }e-${ AlphaPrecision }`
					);
			}
		}
	}

	r =
		Math.round((
			r < LowerDecimalLimit || isNaN(r)
		) ?
			LowerDecimalLimit :
			(
				(
					r > UpperDecimalLimit
				) ? UpperDecimalLimit : r
			));
	g =
		Math.round((
			g < LowerDecimalLimit || isNaN(g)
		) ?
			LowerDecimalLimit :
			(
				(
					g > UpperDecimalLimit
				) ? UpperDecimalLimit : g
			));
	b =
		Math.round((
			b < LowerDecimalLimit || isNaN(b)
		) ?
			LowerDecimalLimit :
			(
				(
					b > UpperDecimalLimit
				) ? UpperDecimalLimit : b
			));
	a =
		(
			a < LowerDecimalLimit || isNaN(a)
		) ?
			LowerDecimalLimit :
			(
				(
					a > UpperOpacityLimit
				) ? UpperOpacityLimit : a
			);

	switch (targetColor) {
		case ColorName.HEX:
			returnedComponent = {
				r: numberToHex(r),
				g: numberToHex(g),
				b: numberToHex(b),
			};
			break;
		case ColorName.HEXA:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b);
			}

			returnedComponent = {
				r: numberToHex(r),
				g: numberToHex(g),
				b: numberToHex(b),
				a: numberToHex(Math.round(UpperDecimalLimit * a)),
			};
			break;
		case ColorName.HSB:
			hsb = rgbToHsv(r, g, b, a);

			returnedComponent = {
				h: hsb.h,
				s: hsb.s,
				b: hsb.v,
			};
			break;
		case ColorName.HSL:
			hsl = rgbToHsl(r, g, b, a);

			returnedComponent = {
				h: hsl.h,
				s: hsl.s,
				l: hsl.l,
			};
			break;
		case ColorName.HSLA:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b);
			}

			hsl = rgbToHsl(r, g, b, a);

			returnedComponent = {
				h: hsl.h,
				s: hsl.s,
				l: hsl.l,
				a: hsl.a,
			};
			break;
		case ColorName.HSV:
			hsv = rgbToHsv(r, g, b, a);

			returnedComponent = {
				h: hsv.h,
				s: hsv.s,
				v: hsv.v,
			};
			break;
		case ColorName.RGB:
			returnedComponent = {
				r,
				g,
				b,
			};
			break;
		case ColorName.RGBA:
		// falls through as default
		default:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b);
			}

			returnedComponent = {
				r,
				g,
				b,
				a,
			};
			break;
	}

	return returnedComponent;
}
