/* eslint-disable @typescript-eslint/no-magic-numbers */
import { Hsl, Hsv, Rgb, Rgba } from './color-definitions';

export const AlphaPrecision = 4;
const HexRadix = 16;
const MaxDegrees = 360;
const MaxFixed = 0;
const MaxPercent = 100;
const MaxRgb = 255;
const MaxRgbRange = 256;
const MinOpacity = 0;
const MinPercent = 0;
const Precision = 1;

/**
 * Modifies the RGB values to be accurate when displayed on a white background.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 */
export const calculateOpacityFromWhite = (r: number, g: number, b: number): number[] => {
	const min = Math.min(r, g, b);
	const calculatedAlpha = (MaxRgb - min) / MaxRgb;

	return [
		+( MinOpacity || ( r - min ) / calculatedAlpha ).toFixed(MaxFixed),
		+( MinOpacity || ( g - min ) / calculatedAlpha ).toFixed(MaxFixed),
		+( MinOpacity || ( b - min ) / calculatedAlpha ).toFixed(MaxFixed),
		parseFloat(calculatedAlpha.toFixed(AlphaPrecision)),
	];
}

/**
 * Convert an HSL color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the four components of an HSL color value
 */
export const hslToRgb = (bits: string[]): Rgba => {
	const hsl: Hsl = {
		h: +bits[1] / MaxDegrees,
		s: +bits[2] / MaxPercent,
		l: +bits[3] / MaxPercent,
		a: parseFloat(bits[ 4 ]),
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
		const q = hsl.l < 0.5 ? hsl.l * ( 1 + hsl.s ) : ( hsl.l + hsl.s ) - ( hsl.l * hsl.s );
		const p = 2 * hsl.l - q;
		rgba.r = +(hueToRgb(p, q, hsl.h + ( 1 / 3 ) ) * MaxRgb).toFixed(MaxFixed);
		rgba.g = +(hueToRgb(p, q, hsl.h) * MaxRgb).toFixed(MaxFixed);
		rgba.b = +(hueToRgb(p, q, hsl.h - ( 1 / 3 ) ) * MaxRgb).toFixed(MaxFixed);
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
	const p = hsv.v * ( 1 - hsv.s );
	const q = hsv.v * ( 1 - f * hsv.s );
	const t = hsv.v * ( 1 - ( 1 - f ) * hsv.s );

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
	rgb.r = +(rgb.r * MaxRgb).toFixed(MaxFixed);
	rgb.g = +(rgb.g * MaxRgb).toFixed(MaxFixed);
	rgb.b = +(rgb.b * MaxRgb).toFixed(MaxFixed);

	return rgb;
}

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
		return p + ( q - p ) * 6 * t;
	}
	if (t < 1 / 2) {
		return q;
	}
	if (t < 2 / 3) {
		return p + ( q - p ) * ( ( 2 / 3 - t ) * 6 );
	}

	return p;
};

/**
 * Converts decimal to hexadecimal, ensuring a leading 0 if the result is a single digit.
 *
 * @param n
 */
export const numberToHex = (n: number): string => `0${n.toString(HexRadix)}`.slice(-2);

/**
 * Convert an RGB color to an HSL color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
export const rgbToHsl = (r: number, g: number, b: number, a: number): Hsl => {
	const rgba: Rgba = {
		r: r / MaxRgb,
		g: g / MaxRgb,
		b: b / MaxRgb,
		a,
	};
	const max = Math.max(rgba.r, rgba.g, rgba.b);
	const min = Math.min(rgba.r, rgba.g, rgba.b);
	const diff = max - min;
	const hsl: Hsl = {
		h: 0,
		s: 0,
		l: ( max + min ) / 2,
		a: rgba.a,
	};

	if (max !== min) {
		hsl.s = hsl.l >= 0.5 ? diff / ( 2 - max - min ) : diff / ( max + min );
		switch (max) {
			case rgba.r:
				hsl.h = ( rgba.g - rgba.b ) / diff + ( rgba.g < rgba.b ? 6 : 0 );
				break;
			case rgba.g:
				hsl.h = ( rgba.b - rgba.r ) / diff + 2;
				break;
			case rgba.b:
				hsl.h = ( rgba.r - rgba.g ) / diff + 4;
				break;
		}
		hsl.h /= 6;
	}
	hsl.h = parseFloat(( hsl.h * MaxDegrees ).toFixed(Precision));
	hsl.s = parseFloat(( hsl.s * MaxPercent ).toFixed(Precision));
	hsl.l = parseFloat(( hsl.l * MaxPercent ).toFixed(Precision));

	return hsl;
}

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
				hsv.h = ( rgba.g - rgba.b ) / diff + ( rgba.g < rgba.b ? 6 : MinPercent );
				break;
			case rgba.g:
				hsv.h = ( rgba.b - rgba.r ) / diff + 2;
				break;
			case rgba.b:
				hsv.h = ( rgba.r - rgba.g ) / diff + 4;
				break;
		}
		hsv.h /= 6;
	}
	hsv.h = parseFloat(( hsv.h * MaxDegrees ).toFixed(Precision));
	hsv.s = parseFloat(( hsv.s * MaxPercent ).toFixed(Precision));
	hsv.v = parseFloat(( hsv.v * MaxPercent ).toFixed(Precision));

	return hsv;
};

/**
 * Gives the percent as a value between 0 and 1.
 *
 * @param amount
 * @param limit
 */
const toPercent = (amount: number, limit: number) => amount / limit;
