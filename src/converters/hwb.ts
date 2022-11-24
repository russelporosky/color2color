/**
 * This is a collection of methods that take normalized HWB values and outputs normalized values for each
 * supported color model. Hwb -> hwb is a passthrough.
 *
 * @module
 */

import { HSB, HSLA, HSV, HWB, RGBA } from '../colors';
import { hsbToHsl } from './hsb';
import { hslToRgb } from './hsl';
import {
	DefaultOpacity,
	MaxFixedFloat,
	MaxPercentFloat,
	toDegrees,
} from '../utilities';

/**
 * Converts an HWB color to a HEXA color.
 *
 * @example
 * hwbToHex('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
 *
 * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHex = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => hwbToHexa([h, w, b, a]);

/**
 * Converts an HWB color to a HEXA color.
 *
 * @example
 * hwbToHexa('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
 *
 * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHexa = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => hwbToRgb([h, w, b, a]);

/**
 * Converts an HWB color to an HSB color.
 *
 * @example
 * hwbToHsb('227deg', 0.3333, 0.35, 0.75) // return { h: 227, w: 0.2334, b: 0.5333, a: 0.75 }
 *
 * @param hwb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHsb = ([h, w, b]: [string, number, number]): HSB => {
	const Angle = toDegrees(h);

	return {
		h: Angle,
		s: +(b === MaxPercentFloat ? 0 : 1 - w / (1 - b)).toFixed(MaxFixedFloat),
		b: +(1 - b).toFixed(MaxFixedFloat),
	};
};

/**
 * Converts an HWB color to an HSLA color.
 *
 * @example
 * hwbToHsl('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
 *
 * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHsl = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): HSLA => hwbToHsla([h, w, b, a]);

/**
 * Converts an HWB color to an HSLA color.
 *
 * @example
 * hwbToHsla('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
 *
 * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHsla = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): HSLA => {
	const Hsb = hwbToHsb([h, w, b]);
	const Hsla = hsbToHsl([`${Hsb.h}`, Hsb.s, Hsb.b]);

	return {
		...Hsla,
		a,
	};
};

/**
 * Converts an HWB color to an HSV color.
 *
 * @example
 * hwbToHsv('227deg', 0.3333, 0.35, 0.75) // return { h: 227, w: 0.2334, b: 0.5333, a: 0.75 }
 *
 * @param hwb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHsv = ([h, w, b]: [string, number, number]): HSV => {
	const Hsb = hwbToHsb([h, w, b]);

	return {
		h: Hsb.h,
		s: Hsb.s,
		v: Hsb.b,
	};
};

/**
 * Passthrough for HWB to HWB conversion.
 *
 * @example
 * hwbToHwb('227deg', 0.3333, 0.35, 0.75) // return { h: 227, s: 0.3333, l: 0.35, a: 0.75 }
 *
 * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToHwb = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): HWB => ({
	h: toDegrees(h),
	w,
	b,
	a,
});

/**
 * Converts an HWB color to an RGBA color.
 *
 * @example
 * hwbToRgb('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
 *
 * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToRgb = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => hwbToRgba([h, w, b, a]);

/**
 * Converts an HWB color to an RGBA color.
 *
 * @example
 * hwbToRgba('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
 *
 * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hwbToRgba = ([h, w, b, a = DefaultOpacity]: [
	string,
	number,
	number,
	number?,
]): RGBA => {
	const Angle = toDegrees(h);
	const Hwb: HWB = {
		h: Angle,
		w,
		b,
		a,
	};
	const Rgba = hslToRgb([`${Angle}`, 1, 0.5, a]);
	const TotalBrightness = Hwb.w + Hwb.b;

	if (TotalBrightness >= 1) {
		Hwb.w = +(Hwb.w / TotalBrightness).toFixed(MaxFixedFloat);
		Hwb.b = +(Hwb.b / TotalBrightness).toFixed(MaxFixedFloat);
	}

	Rgba.r = Rgba.r * (1 - Hwb.w - Hwb.b) + Hwb.w;
	Rgba.g = Rgba.g * (1 - Hwb.w - Hwb.b) + Hwb.w;
	Rgba.b = Rgba.b * (1 - Hwb.w - Hwb.b) + Hwb.w;

	return Rgba;
};
