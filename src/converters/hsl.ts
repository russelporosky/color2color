/**
 * This is a collection of methods that take normalized HSLA values and outputs normalized values for each
 * supported color model. Hsl -> hsl is a passthrough.
 *
 * @module
 */

import { HSB, HSLA, HSV, HWB, RGBA } from '../colors';
import {
	DefaultOpacity,
	DegreesInCircle,
	hueToRgb,
	MaxFixedFloat,
	MaxPercentFloat,
	toDegrees,
} from '../utilities';

/**
 * Converts an HSL[A] color to a HEXA color.
 *
 * @example
 * hslToHex('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHex = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => hslToHexa([h, s, l, a]);

/**
 * Converts an HSL[A] color to a HEXA color.
 *
 * @example
 * hslToHexa('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHexa = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => hslToRgb([h, s, l, a]);

/**
 * Converts an HSL color to an HSB color.
 *
 * @example
 * hslToHsb('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.5, b: 0.4667 }
 *
 * @param hsl - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHsb = ([h, s, l]: [string, number, number]): HSB => {
	const Angle = toDegrees(h);
	const Saturation = s * (l < 0.5 ? l : 1 - l);

	return {
		h: Angle,
		s: +((2 * Saturation) / (l + Saturation)).toFixed(MaxFixedFloat),
		b: +(l + Saturation).toFixed(MaxFixedFloat),
	};
};

/**
 * Passthrough for HSL[A] to HSLA conversion.
 *
 * @example
 * hslToHsl('227deg', 0.3333, 0.35) // return { h: 227, s: 0.3333, l: 0.35, a: 1 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHsl = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): HSLA => hslToHsla([h, s, l, a]);

/**
 * Passthrough for HSL[A] to HSLA conversion.
 *
 * @example
 * hslToHsla('227deg', 0.3333, 0.35) // return { h: 227, s: 0.3333, l: 0.35, a: 1 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHsla = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): HSLA => ({
	h: toDegrees(h),
	s,
	l,
	a,
});

/**
 * Converts an HSL color to an HSV color.
 *
 * @example
 * hslToHsv('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.5, v: 0.4667 }
 *
 * @param hsl - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHsv = ([h, s, l]: [string, number, number]): HSV => {
	const Hsb = hslToHsb([h, s, l]);

	return {
		h: Hsb.h,
		s: Hsb.s,
		v: Hsb.b,
	};
};

/**
 * Converts an HSL[A] color to an HWB color.
 *
 * @example
 * hslToHwb('227deg', 0.3333, 0.35, 0.75) // return { h: 227, w: 0.2334, b: 0.5333, a: 0.75 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToHwb = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): HWB => {
	const Angle = toDegrees(h);
	const Hsb = hslToHsb([h, s, l]);
	const Blackness = 1 - Hsb.b;
	const Whiteness = (1 - Hsb.s) * Hsb.b;

	return {
		h: Angle,
		w: +Whiteness.toFixed(MaxFixedFloat),
		b: +Blackness.toFixed(MaxFixedFloat),
		a,
	};
};

/**
 * Converts an HSL[A] color to an RGBA color.
 *
 * @example
 * hslToRgb('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToRgb = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => hslToRgba([h, s, l, a]);

/**
 * Converts an HSL[A] color to an RGBA color.
 *
 * @example
 * hslToRgba('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hslToRgba = ([h, s, l, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => {
	const Angle = toDegrees(h) % DegreesInCircle;
	const Saturation = s === MaxPercentFloat ? s : s % MaxPercentFloat;
	const Lightness = l === MaxPercentFloat ? l : l % MaxPercentFloat;
	const Rgba: RGBA = {
		r: 0,
		g: 0,
		b: 0,
		a,
	};

	if (Saturation === 0) {
		Rgba.r = 0;
		Rgba.g = 0;
		Rgba.b = 0;
	} else {
		Rgba.r = hueToRgb(0, Angle, Saturation, Lightness);
		Rgba.g = hueToRgb(8, Angle, Saturation, Lightness);
		Rgba.b = hueToRgb(4, Angle, Saturation, Lightness);
	}

	return Rgba;
};
