/**
 * This is a collection of methods that take normalized HSB values and outputs normalized values for each
 * supported color model. Hsb -> hsb and hsb -> hsv are passthroughs.
 *
 * @module
 */

import { HSB, HSLA, HSV, HWB, RGBA } from '../colors';
import { hslToHwb, hslToRgb } from './hsl';
import {
	DefaultOpacity,
	MaxFixedFloat,
	MaxPercentFloat,
	toDegrees,
} from '../utilities';

/**
 * Converts an HSB color to a HEXA color.
 *
 * @example
 * hsbToHex('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHex = ([h, s, b]: [string, number, number]): RGBA =>
	hsbToHexa([h, s, b]);

/**
 * Converts an HSB color to a HEXA color.
 *
 * @example
 * hsbToHexa('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHexa = ([h, s, b]: [string, number, number]): RGBA =>
	hsbToRgb([h, s, b]);

/**
 * Passthrough for HSB to HSB conversion.
 *
 * @example
 * hsbToHsb('1.5turn', 0.6, 0.343) // return { h: 540, s: 0.6, b: 0.343 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHsb = ([h, s, b]: [string, number, number]): HSB => {
	const Angle = toDegrees(h);

	return {
		h: Angle,
		s,
		b,
	};
};

/**
 * Converts an HSB color to an HSLA color.
 *
 * @example
 * hsbToHsl('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHsl = ([h, s, b]: [string, number, number]): HSLA =>
	hsbToHsla([h, s, b]);

/**
 * Converts an HSB color to an HSLA color.
 *
 * @example
 * hsbToHsla('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHsla = ([h, s, b]: [string, number, number]): HSLA => {
	const Angle = toDegrees(h);
	const Lightness = +(((2 - s) * b) / 2).toFixed(MaxFixedFloat);
	const Hsla: HSLA = {
		h: Angle,
		s,
		l: Lightness,
		a: DefaultOpacity,
	};

	if (Lightness !== 0) {
		if (Lightness === MaxPercentFloat) {
			Hsla.s = 0;
		} else if (Lightness < MaxPercentFloat / 2) {
			Hsla.s = (Hsla.s * b) / (Lightness * 2);
		} else {
			Hsla.s = (Hsla.s * b) / (2 - Lightness * 2);
		}
	}
	Hsla.s = +Hsla.s.toFixed(MaxFixedFloat);

	return Hsla;
};

/**
 * Converts an HSB color to an HSV color.
 *
 * @example
 * hsbToHsv('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.3333, v: 0.35 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHsv = ([h, s, b]: [string, number, number]): HSV => ({
	h: toDegrees(h),
	s,
	v: b,
});

/**
 * Converts an HSB color to an HWB color.
 *
 * @example
 * hsbToHwb('270deg', 0.2, 0.2917) // return { h: 270, w: 0.2334, b: 0.7083, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToHwb = ([h, s, b]: [string, number, number]): HWB => {
	const Hsla = hsbToHsl([h, s, b]);

	return hslToHwb([`${Hsla.h}`, Hsla.s, Hsla.l, Hsla.a]);
};

/**
 * Converts an HSB color to an RGBA color.
 *
 * @example
 * hsbToRgb('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToRgb = ([h, s, b]: [string, number, number]): RGBA =>
	hsbToRgba([h, s, b]);

/**
 * Converts an HSB color to an RGBA color.
 *
 * @example
 * hsbToRgba('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsbToRgba = ([h, s, b]: [string, number, number]): RGBA => {
	const Hsla = hsbToHsl([h, s, b]);

	return hslToRgb([`${Hsla.h}`, Hsla.s, Hsla.l, Hsla.a]);
};
