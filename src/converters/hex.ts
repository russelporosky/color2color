/**
 * This is a collection of methods that take normalized RGBA values (0..1) and outputs normalized values for each
 * supported color model. Hex -> hex and hex -> rgb are passthroughs.
 *
 * @module
 */

import { rgbToHsb, rgbToHsl, rgbToHsv, rgbToHwb } from './rgb';
import { DefaultOpacity } from '../utilities';
import { HSB, HSLA, HSV, HWB, RGBA } from '../colors';

/**
 * Converts a hexadecimal RGB[A] color to a HEXA color.
 *
 * @example
 * hexToHex(0.6706, 0.8039, 0.9373) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 1 }
 * hexToHex(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToHex = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): RGBA => hexToHexa([r, g, b, a]);

/**
 * Converts a hexadecimal RGB[A] color to a HEXA color.
 *
 * @example
 * hexToHexa(0.6706, 0.8039, 0.9373, 1) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 1 }
 * hexToHexa(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToHexa = ([r, g, b, a = DefaultOpacity]: [
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

/**
 * Converts a hexadecimal RGB color to an HSB color.
 *
 * @example
 * hexToHsb(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.4917, b: 0.4706 }
 *
 * @param rgb - Color components as fractions.
 */
export const hexToHsb = ([r, g, b]: [number, number, number]): HSB =>
	rgbToHsb([r, g, b]);

/**
 * Converts a hexadecimal RGB[A] color to an HSLA color.
 *
 * @example
 * hexToHsl(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.326, l: 0.3549, a: 1 }
 * hexToHsl(0.2392, 0.2902, 0.4706, 0.251) // return { h: 226.78, s: 0.326, l: 0.3549, a: 0.251 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToHsl = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): HSLA => hexToHsla([r, g, b, a]);

/**
 * Converts a hexadecimal RGB[A] color to an HSLA color.
 *
 * @example
 * hexToHsla(0.2392, 0.2902, 0.4706, 1) // return { h: 226.78, s: 0.326, l: 0.3549, a: 1 }
 * hexToHsla(0.2392, 0.2902, 0.4706, 0.251) // return { h: 226.78, s: 0.326, l: 0.3549, a: 0.251 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToHsla = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): HSLA => rgbToHsl([r, g, b, a]);

/**
 * Converts a hexadecimal RGB color to an HSV color.
 *
 * @example
 * hexToHsv(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.4917, v: 0.4706 }
 *
 * @param rgb - Color components as fractions.
 */
export const hexToHsv = ([r, g, b]: [number, number, number]): HSV =>
	rgbToHsv([r, g, b]);

/**
 * Converts a hexadecimal RGB[A] color to an HWB color.
 *
 * @example
 * hexToHwb(0.2392, 0.2902, 0.4706) // return { h: 226.78, w: 0.2392, b: 0.5294, a: 1 }
 * hexToHwb(0.2392, 0.2902, 0.4706, 0.251) // return { h: 226.78, w: 0.2392, b: 0.5294, a: 0.251 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToHwb = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): HWB => rgbToHwb([r, g, b, a]);

/**
 * Converts a hexadecimal RGB[A] color to an RGBA color.
 *
 * @example
 * hexToRgb(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToRgb = ([r, g, b, a = DefaultOpacity]: [
	number,
	number,
	number,
	number?,
]): RGBA => hexToRgba([r, g, b, a]);

/**
 * Converts a hexadecimal RGB[A] color to an RGBA color.
 *
 * @example
 * hexToRgba(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
 *
 * @param rgba - Color components as fractions.
 */
export const hexToRgba = ([r, g, b, a = DefaultOpacity]: [
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
