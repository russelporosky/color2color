/**
 * This is a collection of methods that take normalized RGBA values (0..1) and outputs normalized values for each
 * supported color model. Rgb -> hex and rgb -> rgb are passthroughs.
 *
 * @module
 */

import { HSB, HSLA, HSV, HWB, RGBA } from '../colors';
import {
	DefaultOpacity,
	MaxFixedFloat,
	MaxFixedNumber,
} from '../utilities';

/**
 * Converts an RGB color to a HEXA color.
 *
 * @example
 * rgbToHex(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
 * rgbToHex(0.8667, 1, 0.9333, 0.6) // return { r: 0.8667, g: 1, b: 0.9333, a: 0.6 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToHex = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): RGBA => rgbToHexa([r, g, b, a]);

/**
 * Converts an RGB color to a HEXA color.
 *
 * @example
 * rgbToHexa(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
 * rgbToHexa(0.8667, 1, 0.9333, 0.6) // return { r: 0.8667, g: 1, b: 0.9333, a: 0.6 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToHexa = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): RGBA => rgbToRgba([r, g, b, a]);

/**
 * Converts an RGB color to an HSB color.
 *
 * @example
 * rgbToHsb(0.8667, 1, 0.9333) // return { h: 226.78, s: 0.4917, b: 0.4706 }
 *
 * @param rgb - Color components as fractions.
 */
export const rgbToHsb = ([r, g, b]: [number, number, number]): HSB => {
	const Hsla = rgbToHsl([r, g, b]);
	const Saturation = Hsla.s * (Hsla.l < 0.5 ? Hsla.l : 1 - Hsla.l);

	return {
		h: Hsla.h,
		s: +((2 * Saturation) / (Hsla.l + Saturation)).toFixed(MaxFixedFloat),
		b: +(Hsla.l + Saturation).toFixed(MaxFixedFloat),
	};
};

/**
 * Converts an RGB[A] color to an HSLA color.
 *
 * @example
 * rgbToHsl(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.3260, l: 0.3549, a: 1 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToHsl = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): HSLA => rgbToHsla([r, g, b, a]);

/**
 * Converts an RGB[A] color to an HSLA color.
 *
 * @example
 * rgbToHsla(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.3260, l: 0.3549, a: 1 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToHsla = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): HSLA => {
	const MaxLight = Math.max(r, g, b);
	const MinLight = Math.min(r, g, b);
	const LightnessDiff = MaxLight - MinLight;
	const Lightness = (MaxLight + MinLight) / 2;

	let hue = 0;
	let saturation = 0;

	if (LightnessDiff !== 0) {
		saturation =
			Lightness === 0 || Lightness === 1
				? 0
				: (MaxLight - Lightness) / Math.min(Lightness, 1 - Lightness);

		switch (MaxLight) {
			case r:
				hue = (g - b) / LightnessDiff + (g < b ? 6 : 0);
				break;
			case g:
				hue = (b - r) / LightnessDiff + 2;
				break;
			case b:
				hue = (r - g) / LightnessDiff + 4;
				break;
		}

		hue *= 60;
	}

	return {
		h: +hue.toFixed(MaxFixedNumber),
		s: +saturation.toFixed(MaxFixedFloat),
		l: +Lightness.toFixed(MaxFixedFloat),
		a,
	};
};

/**
 * Converts an RGB color to an HSV color.
 *
 * @example
 * rgbToHsv(0.8667, 1, 0.9333) // return { h: 226.78, s: 0.4917, v: 0.4706 }
 *
 * @param rgb - Color components as fractions.
 */
export const rgbToHsv = ([r, g, b]: [number, number, number]): HSV => {
	const Hsb = rgbToHsb([r, g, b]);

	return {
		h: Hsb.h,
		s: Hsb.s,
		v: Hsb.b,
	};
};

/**
 * Converts an RGB[A] color to an HWB color.
 *
 * @example
 * rgbToHwb(0.8667, 1, 0.9333) // return { h: 226.78, w: 0.2392, b: 0.5294, a: 1 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToHwb = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): HWB => {
	const Hsla = rgbToHsl([r, g, b, a]);
	const White = Math.min(r, g, b);
	const Black = 1 - Math.max(r, g, b);

	return {
		h: Hsla.h,
		w: White,
		b: Black,
		a: Hsla.a,
	};
};

/**
 * Passthrough for RGB[A] to RGBA conversion.
 *
 * @example
 * rgbToRgb(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToRgb = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): RGBA => rgbToRgba([r, g, b, a]);

/**
 * Passthrough for RGB[A] to RGBA conversion.
 *
 * @example
 * rgbToRgba(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
 *
 * @param rgba - Color components as fractions.
 */
export const rgbToRgba = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): RGBA => ({
	r,
	g,
	b,
	a,
});
