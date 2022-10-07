import * as namedColors from 'css-color-names';
import { ColorDefinitions } from './color-definitions';
import {
	AlphaPrecision,
	calculateOpacityFromWhite,
	ColorName,
	ColorType,
	Hsl,
	Hsv,
	numberToHex,
	rgbToHsl,
	rgbToHsv,
} from './utilities';

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
	let returnedColor = '';

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

	r = Math.round( ( r < 0 || isNaN(r) ) ? 0 : ( ( r > 255 ) ? 255 : r ) );
	g = Math.round( ( g < 0 || isNaN(g) ) ? 0 : ( ( g > 255 ) ? 255 : g ) );
	b = Math.round( ( b < 0 || isNaN(b) ) ? 0 : ( ( b > 255 ) ? 255 : b ) );
	a = ( a < 0 || isNaN(a) ) ? 0 : ( ( a > 1 ) ? 1 : a );

	switch (targetColor) {
		case ColorName.HEX:
			returnedColor = `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`;
			break;
		case ColorName.HEXA:
			if (calculateOpacity) {
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}

			returnedColor = `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}${numberToHex(Math.round(255 * a))}`;
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
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
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
				[r, g, b, a] = calculateOpacityFromWhite(r, g, b, a);
			}

			returnedColor = `rgba(${r},${g},${b},${a})`;
			break;
	}

	return returnedColor;
};
