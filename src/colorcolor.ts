import * as namedColors from 'css-color-names';
import {
	ColorDefinitions,
	ColorName,
	ColorType,
	Hsl,
	Hsv,
} from './color-definitions';
import {
	AlphaPrecision,
	calculateOpacityFromWhite,
	numberToHex,
	rgbToHsl,
	rgbToHsv,
} from './utilities';

const LowerDecimalLimit = 0;
const UpperDecimalLimit = 255;
const UpperOpacityLimit = 1;

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
export const colorcolor = (
	originalColor: string,
	targetColor: ColorType = ColorName.RGBA,
	calculateOpacity = false,
): string => {
	let a = 0;
	let b = 0;
	let convertedColor = originalColor.toLowerCase();
	let g = 0;
	let hsb: Hsv;
	let hsl: Hsl;
	let hsv: Hsv;
	let r = 0;
	let returnedColor: string;

	// convert named color to hex
	if (Object.prototype.hasOwnProperty.call(namedColors, convertedColor)) {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
		convertedColor = (namedColors as never)[convertedColor];
	}

	// Search the color definitions for a match
	for (const colorDefinition in ColorDefinitions) {
		if (Object.prototype.hasOwnProperty.call(ColorDefinitions, colorDefinition)) {
			const { re } = ColorDefinitions[colorDefinition];
			const bits = re.exec(convertedColor);

			if (bits) {
				const channels = ColorDefinitions[colorDefinition].toRGBA(bits);
				[r, g, b] = channels;
				a = +(`${Math.round(+`${channels[3]}e+${AlphaPrecision}`)}e-${AlphaPrecision}`);
			}
		}
	}

	r = Math.round((r < LowerDecimalLimit || isNaN(r)) ? LowerDecimalLimit : ((r > UpperDecimalLimit) ? UpperDecimalLimit : r));
	g = Math.round((g < LowerDecimalLimit || isNaN(g)) ? LowerDecimalLimit : ((g > UpperDecimalLimit) ? UpperDecimalLimit : g));
	b = Math.round((b < LowerDecimalLimit || isNaN(b)) ? LowerDecimalLimit : ((b > UpperDecimalLimit) ? UpperDecimalLimit : b));
	a = (a < LowerDecimalLimit || isNaN(a)) ? LowerDecimalLimit : ((a > UpperOpacityLimit) ? UpperOpacityLimit : a);

	switch (targetColor) {
		case ColorName.HEX:
			returnedColor = `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`;
			break;
		case ColorName.HEXA:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b);
			}

			returnedColor = `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}${numberToHex(Math.round(UpperDecimalLimit * a))}`;
			break;
		case ColorName.HSB:
			hsb = rgbToHsv(r, g, b, a);

			returnedColor = `hsb(${hsb.h},${hsb.s}%,${hsb.v}%)`;
			break;
		case ColorName.HSL:
			hsl = rgbToHsl(r, g, b, a);

			returnedColor = `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
			break;
		case ColorName.HSLA:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b);
			}

			hsl = rgbToHsl(r, g, b, a);

			returnedColor = `hsla(${hsl.h},${hsl.s}%,${hsl.l}%,${hsl.a})`;
			break;
		case ColorName.HSV:
			hsv = rgbToHsv(r, g, b, a);

			returnedColor = `hsv(${hsv.h},${hsv.s}%,${hsv.v}%)`;
			break;
		case ColorName.RGB:
			returnedColor = `rgb(${r},${g},${b})`;
			break;
		case ColorName.RGBA:
		// falls through as default
		default:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b);
			}

			returnedColor = `rgba(${r},${g},${b},${a})`;
			break;
	}

	return returnedColor;
};
