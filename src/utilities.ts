/**
 * A collection of utility functions and constants used by the color conversion, normalization, and finalization
 * methods.
 *
 * @module
 */

const AngleIndex = 1;
const AngleTypeIndex = 2;
const DegreesInRadian = 180;
const GradiansInCircle = 400;
const HexRadix = 16;
const HexNumberLength = 2;
const MinPercent = 0;

/** The index used for opacity when a string is converted via regex. */
export const AlphaIndex = 4;

/** The index for blackness in HWB colors. */
export const BlacknessIndex = 3;

/** The index for blue in HEX[A] and RGB[A] colors. */
export const BlueIndex = 3;

/** The index for brightness in HSB colors. */
export const BrightnessIndex = 3;

/** When not included, the default opacity to use. */
export const DefaultOpacity = 1;

/** The number of degrees used for angle calculations. */
export const DegreesInCircle = 360;

/** The index for green in HEX[A] and RGB[A] colors. */
export const GreenIndex = 2;

/** The index for hue in HSB, HSL[A], and HWB colors. */
export const HueIndex = 1;

/** The index for lightness in HSL[A] colors. */
export const LightnessIndex = 3;

/** The precision for float calculations. */
export const MaxFixedFloat = 4;

/** The precision used for numeric calculations. */
export const MaxFixedNumber = 2;

/** The maximum value of a percentage. */
export const MaxPercent = 100;

/** The maximum value of a percentage fraction. */
export const MaxPercentFloat = 1;

/** The maximum value of an RGB value. */
export const MaxRgb = 255;

/** The smallest number used for degrees in an angle. */
export const MinAngle = 0;

/** The index for red in HEX[A] and RGB[A] colors. */
export const RedIndex = 1;

/** The index for saturation in HSL[A] colors. */
export const SaturationIndex = 2;

/** The index for value in HSV colors. */
export const ValueIndex = 3;

/** The index for whiteness in HWB colors. */
export const WhitenessIndex = 2;

/**
 * Capitalize the first character of a string.
 *
 * @example
 * capitalizeWord('test') // return 'Test'
 *
 * @param word The word to capitalize; it is not `trim`med first.
 */
export const capitalizeWord = (word: string): string =>
	word.charAt(0).toUpperCase() + word.slice(1);

/**
 * Clamps a number to be between a range, inclusive.
 *
 * @example
 * clamp(53, 0, 255) // return 53
 * clamp(105, 0, 100) // return 100
 *
 * @param n The number to clamp.
 * @param min The lowest amount the number can be.
 * @param max The highest amount the number can be.
 */
export const clamp = (n: number, min: number, max: number): number =>
	Math.min(Math.max(n, min), max);

/**
 * Clamps a number to be between 0 and 360, inclusive.
 *
 * @example
 * clamp(53) // return 53
 * clamp(580) // return 360
 *
 * @param n The number to clamp.
 */
export const clampAngle = (n: number): number =>
	clamp(n, MinAngle, DegreesInCircle);

/**
 * Clamps a number to be between 0 and 100, inclusive.
 *
 * @example
 * clamp(53) // return 53
 * clamp(-10) // return 0
 *
 * @param n The number to clamp.
 */
export const clampPercent = (n: number): number =>
	clamp(n, MinPercent, MaxPercent);

/**
 * Clamps a number to be between 0 and 1, inclusive.
 *
 * @example
 * clamp(0.53) // return 0.53
 * clamp(-0.1) // return 0
 *
 * @param n The number to clamp.
 */
export const clampPercentFloat = (n: number): number =>
	clamp(n, MinPercent, MaxPercentFloat);

/**
 * Convert a hexadecimal number to a Base-10 number.
 *
 * @example
 * hexToNumber('f') // return 15
 *
 * @param hex The number to convert.
 */
export const hexToNumber = (hex: string): number => parseInt(hex, HexRadix);

/**
 * Converts a hue to an RGB percentage.
 *
 * @example
 * hueToRgb(0, 180, 0.7, 0.8) // return 0.94
 *
 * @param modifier
 * @param hue The hue in degrees (0 to 360).
 * @param saturation The percentage of saturation to use (0 to 1).
 * @param lightness The percentage of lightness to use (0 to 1).
 */
export const hueToRgb = (
	modifier: number,
	hue: number,
	saturation: number,
	lightness: number,
): number => {
	const K = (modifier + hue / 30) % 12;
	const A = saturation * Math.min(lightness, 1 - lightness);

	return +(lightness - A * Math.max(-1, Math.min(K - 3, 9 - K, 1))).toFixed(
		MaxFixedFloat,
	);
};

/**
 * Convert a percent between 0 and 1 to a number.
 *
 * @example
 * fromPercent(0.5, 150) // return 75
 *
 * @param percent The percent as a float between 0 and 1.
 * @param maxDecimal The number that would become 100%.
 */
export const fromPercent = (
	percent: number,
	maxDecimal: number = MaxPercent,
): number => maxDecimal * percent;

/**
 * Convert a decimal number to hexadecimal. Adds a leading 0 if needed to be two digits in total.
 *
 * @example
 * numberToHex(221) // return 'dd'
 *
 * @param n The number (an RGB number between 0 and 255) to convert to hexadecimal.
 */
export const numberToHex = (n: number): string =>
	`0${Math.round(n).toString(HexRadix)}`.slice(-HexNumberLength);

/**
 * Convert degrees, gradians, radians, and turns to degrees. If no unit is given in the string, degrees is used.
 *
 * @example
 * toDegrees('180') // return 180
 * toDegrees('180deg') // return 180
 * toDegrees('0.75turn') // return 270
 * toDegrees('-0.25turn') // return 270
 *
 * @param angle A string comprised of an angle and a unit of `deg|grad|rad|turn`; if no unit is given, `deg` is used.
 */
export const toDegrees = (angle: string): number => {
	const Angle = /^\s*(-?\d*\.?\d+)(deg|rad|turn|grad)?$/i.exec(angle);
	let response = 0;

	if (Angle && Angle.length > 1) {
		const AngleAmount = Angle[AngleIndex];
		const AngleType = Angle[AngleTypeIndex]?.toLowerCase() ?? 'deg';

		switch (AngleType) {
			case 'deg':
				response = +AngleAmount;
				break;
			case 'grad':
				response = (+AngleAmount / GradiansInCircle) * DegreesInCircle;
				break;
			case 'rad':
				response = (+AngleAmount * DegreesInRadian) / Math.PI;
				break;
			case 'turn':
				response = +AngleAmount * DegreesInCircle;
				break;
		}
	}

	// we don't care about direction, so just ensure degrees is positive
	while (response < MinAngle) {
		response += DegreesInCircle;
	}

	return +response.toFixed(MaxFixedNumber);
};

/**
 * Convert a decimal number to a percentage between 0 and 1.
 *
 * @example
 * toPercent(75, 150) // return 0.5
 *
 * @param amount The number to convert to percent.
 * @param limit The amount that would become 100%.
 */
export const toPercent = (amount: number, limit: number): number =>
	+(amount / limit).toFixed(MaxFixedFloat);
