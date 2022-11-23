/**
 * This is a collection of methods that take normalized HSV values and outputs normalized values for each
 * supported color model. Hsv -> hsv and hsv -> hsb are passthroughs.
 *
 * @module
 */

import { HSB, HSLA, HSV, HWB, RGBA } from '../colors';
import { hsbToHex, hsbToHsl, hsbToHwb, hsbToRgb } from './hsb';
import { toDegrees } from '../utilities';

/**
 * Converts an HSV color to a HEXA color.
 *
 * @example
 * hsvToHex('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHex = ([h, s, v]: [string, number, number]): RGBA =>
	hsvToHexa([h, s, v]);

/**
 * Converts an HSV color to a HEXA color.
 *
 * @example
 * hsvToHexa('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHexa = ([h, s, v]: [string, number, number]): RGBA =>
	hsbToHex([h, s, v]);

/**
 * Converts an HSV color to an HSV color.
 *
 * @example
 * hsvToHsv('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.3333, v: 0.35 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHsb = ([h, s, v]: [string, number, number]): HSB => ({
	h: toDegrees(h),
	s,
	b: v,
});

/**
 * Converts an HSV color to an HSL color.
 *
 * @example
 * hsvToHsl('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHsl = ([h, s, v]: [string, number, number]): HSLA =>
	hsvToHsla([h, s, v]);

/**
 * Converts an HSV color to an HSL color.
 *
 * @example
 * hsvToHsla('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHsla = ([h, s, v]: [string, number, number]): HSLA =>
	hsbToHsl([h, s, v]);

/**
 * Passthrough for HSV to HSV conversion.
 *
 * @example
 * hsvToHsv('1.5turn', 0.6, 0.343) // return { h: 540, s: 0.6, b: 0.343 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHsv = ([h, s, v]: [string, number, number]): HSV => ({
	h: toDegrees(h),
	s,
	v,
});

/**
 * Converts an HSV color to an HWB color.
 *
 * @example
 * hsvToHwb('270deg', 0.2, 0.2917) // return { h: 270, w: 0.2334, b: 0.7083, a: 1 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToHwb = ([h, s, v]: [string, number, number]): HWB =>
	hsbToHwb([h, s, v]);

/**
 * Converts an HSV color to an RGBA color.
 *
 * @example
 * hsvToRgb('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToRgb = ([h, s, v]: [string, number, number]): RGBA =>
	hsvToRgba([h, s, v]);

/**
 * Converts an HSV color to an RGBA color.
 *
 * @example
 * hsvToRgba('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
 *
 * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
 */
export const hsvToRgba = ([h, s, v]: [string, number, number]): RGBA =>
	hsbToRgb([h, s, v]);
