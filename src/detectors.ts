/**
 * This is where all the supported color strings are detected and converted to a normalized form. Each detector
 * contains a link to every converter method for that model. Finally, each detector also converts the normalized
 * input _after_ conversion into the proper numbers for the output string.
 *
 * @module
 */
import { ColorDefinitions, HEXA, HSB, HSLA, HSV, HWB, RGBA } from './colors';
import * as converters from './converters';
import {
	AlphaIndex,
	BlacknessIndex,
	BlueIndex,
	BrightnessIndex,
	clampAngle,
	clampPercent,
	clampPercentFloat,
	DefaultOpacity,
	fromPercent,
	GreenIndex,
	hexToNumber,
	HueIndex,
	LightnessIndex,
	MaxFixedFloat,
	MaxFixedNumber,
	MaxPercent,
	MaxRgb,
	numberToHex,
	RedIndex,
	SaturationIndex,
	toDegrees,
	toPercent,
	ValueIndex,
	WhitenessIndex,
} from './utilities';

const FinalNumber = (n: number, max: number): number =>
	Math.round(fromPercent(n, max));

const FinalizeHex = (hex: RGBA): HEXA => ({
	r: numberToHex(FinalNumber(hex.r, MaxRgb)),
	g: numberToHex(FinalNumber(hex.g, MaxRgb)),
	b: numberToHex(FinalNumber(hex.b, MaxRgb)),
	a: numberToHex(FinalNumber(hex.a, MaxRgb)),
});

const FinalizeRgb = (rgb: RGBA): RGBA => ({
	r: FinalNumber(rgb.r, MaxRgb),
	g: FinalNumber(rgb.g, MaxRgb),
	b: FinalNumber(rgb.b, MaxRgb),
	a: +rgb.a.toFixed(MaxFixedNumber),
});

/**
 * This is used to detect a specific color model string via regular expression, normalize the values to be within 0..1
 * for percentages and RGB, and 0..360 for angles.
 *
 * @remarks
 * Each detector has a list of responsibilities:
 * * detect the color model from an input string using a {@link colors.ColorDefinition.re | regular expression}
 * * {@link colors.ColorDefinition.normalize | normalize} the output of the regex to numeric representations (ex. `'0.5turn'` will become `180`; `'255'` will become `1`)
 * * {@link colors.ColorDefinition.converters | convert} the normalized values to the new color model
 * * {@link colors.ColorDefinition.finalize | finalize} the converted values to the ones used in the output string (ex. `1` might become `255` or `'ff'`)
 */
export const ColorDetectors: ColorDefinitions = {
	hex: {
		converters: {
			hex: converters.hexToHex,
			hexa: converters.hexToHexa,
			hsb: converters.hexToHsb,
			hsl: converters.hexToHsl,
			hsla: converters.hexToHsla,
			hsv: converters.hexToHsv,
			hwb: converters.hexToHwb,
			rgb: converters.hexToRgb,
			rgba: converters.hexToRgba,
		},
		finalize: FinalizeHex,
		normalize: (bits) => [
			clampPercentFloat(toPercent(hexToNumber(bits[RedIndex]), MaxRgb)),
			clampPercentFloat(toPercent(hexToNumber(bits[GreenIndex]), MaxRgb)),
			clampPercentFloat(toPercent(hexToNumber(bits[BlueIndex]), MaxRgb)),
			DefaultOpacity,
		],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	},
	hex3: {
		converters: {
			hex: converters.hexToHex,
			hexa: converters.hexToHexa,
			hsb: converters.hexToHsb,
			hsl: converters.hexToHsl,
			hsla: converters.hexToHsla,
			hsv: converters.hexToHsv,
			hwb: converters.hexToHwb,
			rgb: converters.hexToRgb,
			rgba: converters.hexToRgba,
		},
		finalize: FinalizeHex,
		normalize: (bits) => [
			clampPercentFloat(
				toPercent(hexToNumber(bits[RedIndex] + bits[RedIndex]), MaxRgb),
			),
			clampPercentFloat(
				toPercent(hexToNumber(bits[GreenIndex] + bits[GreenIndex]), MaxRgb),
			),
			clampPercentFloat(
				toPercent(hexToNumber(bits[BlueIndex] + bits[BlueIndex]), MaxRgb),
			),
			DefaultOpacity,
		],
		re: /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,
	},
	hexa: {
		converters: {
			hex: converters.hexToHex,
			hexa: converters.hexToHexa,
			hsb: converters.hexToHsb,
			hsl: converters.hexToHsl,
			hsla: converters.hexToHsla,
			hsv: converters.hexToHsv,
			hwb: converters.hexToHwb,
			rgb: converters.hexToRgb,
			rgba: converters.hexToRgba,
		},
		finalize: FinalizeHex,
		normalize: (bits) => [
			clampPercentFloat(toPercent(hexToNumber(bits[RedIndex]), MaxRgb)),
			clampPercentFloat(toPercent(hexToNumber(bits[GreenIndex]), MaxRgb)),
			clampPercentFloat(toPercent(hexToNumber(bits[BlueIndex]), MaxRgb)),
			clampPercentFloat(toPercent(hexToNumber(bits[AlphaIndex]), MaxRgb)),
		],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
	},
	hexa4: {
		converters: {
			hex: converters.hexToHex,
			hexa: converters.hexToHexa,
			hsb: converters.hexToHsb,
			hsl: converters.hexToHsl,
			hsla: converters.hexToHsla,
			hsv: converters.hexToHsv,
			hwb: converters.hexToHwb,
			rgb: converters.hexToRgb,
			rgba: converters.hexToRgba,
		},
		finalize: FinalizeHex,
		normalize: (bits) => [
			clampPercentFloat(
				toPercent(hexToNumber(bits[RedIndex] + bits[RedIndex]), MaxRgb),
			),
			clampPercentFloat(
				toPercent(hexToNumber(bits[GreenIndex] + bits[GreenIndex]), MaxRgb),
			),
			clampPercentFloat(
				toPercent(hexToNumber(bits[BlueIndex] + bits[BlueIndex]), MaxRgb),
			),
			clampPercentFloat(
				toPercent(hexToNumber(bits[AlphaIndex] + bits[AlphaIndex]), MaxRgb),
			),
		],
		re: /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,
	},
	hsb: {
		converters: {
			hex: converters.hsbToHex,
			hexa: converters.hsbToHexa,
			hsb: converters.hsbToHsb,
			hsl: converters.hsbToHsl,
			hsla: converters.hsbToHsla,
			hsv: converters.hsbToHsv,
			hwb: converters.hsbToHwb,
			rgb: converters.hsbToRgb,
			rgba: converters.hsbToRgba,
		},
		finalize: (hsb: HSB): HSB => ({
			h: Math.round(hsb.h),
			s: FinalNumber(hsb.s, MaxPercent),
			b: FinalNumber(hsb.b, MaxPercent),
		}),
		normalize: (bits) => [
			+clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
			+(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			+(clampPercent(parseFloat(bits[BrightnessIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			DefaultOpacity,
		],
		re: /^hsb\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/,
	},
	hsl: {
		converters: {
			hex: converters.hslToHex,
			hexa: converters.hslToHexa,
			hsb: converters.hslToHsb,
			hsl: converters.hslToHsl,
			hsla: converters.hslToHsla,
			hsv: converters.hslToHsv,
			hwb: converters.hslToHwb,
			rgb: converters.hslToRgb,
			rgba: converters.hslToRgba,
		},
		finalize: (hsl: HSLA): HSLA => ({
			h: Math.round(hsl.h),
			s: FinalNumber(hsl.s, MaxPercent),
			l: FinalNumber(hsl.l, MaxPercent),
			a: +hsl.a.toFixed(MaxFixedNumber),
		}),
		normalize: (bits) => [
			+clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
			+(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			+(clampPercent(parseFloat(bits[LightnessIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			DefaultOpacity,
		],
		re: /^hsl\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/,
	},
	hsla: {
		converters: {
			hex: converters.hslToHex,
			hexa: converters.hslToHexa,
			hsb: converters.hslToHsb,
			hsl: converters.hslToHsl,
			hsla: converters.hslToHsla,
			hsv: converters.hslToHsv,
			hwb: converters.hslToHwb,
			rgb: converters.hslToRgb,
			rgba: converters.hslToRgba,
		},
		finalize: (hsl: HSLA): HSLA => ({
			h: Math.round(hsl.h),
			s: FinalNumber(hsl.s, MaxPercent),
			l: FinalNumber(hsl.l, MaxPercent),
			a: +hsl.a.toFixed(MaxFixedNumber),
		}),
		normalize: (bits) => [
			+clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
			+(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			+(clampPercent(parseFloat(bits[LightnessIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			+(
				bits[AlphaIndex].charAt(bits[AlphaIndex].length - 1) === '%'
					? clampPercent(parseFloat(bits[AlphaIndex])) / MaxPercent
					: +bits[AlphaIndex]
			).toFixed(MaxFixedFloat),
		],
		re: /^hsla\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*[,/]?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/,
	},
	hsv: {
		converters: {
			hex: converters.hsvToHex,
			hexa: converters.hsvToHexa,
			hsb: converters.hsvToHsb,
			hsl: converters.hsvToHsl,
			hsla: converters.hsvToHsla,
			hsv: converters.hsvToHsv,
			hwb: converters.hsvToHwb,
			rgb: converters.hsvToRgb,
			rgba: converters.hsvToRgba,
		},
		finalize: (hsv: HSV): HSV => ({
			h: Math.round(hsv.h),
			s: FinalNumber(hsv.s, MaxPercent),
			v: FinalNumber(hsv.v, MaxPercent),
		}),
		normalize: (bits) => [
			+clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
			+(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			+(clampPercent(parseFloat(bits[ValueIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			DefaultOpacity,
		],
		re: /^hsv\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/,
	},
	hwb: {
		converters: {
			hex: converters.hwbToHex,
			hexa: converters.hwbToHexa,
			hsb: converters.hwbToHsb,
			hsl: converters.hwbToHsl,
			hsla: converters.hwbToHsla,
			hsv: converters.hwbToHsv,
			hwb: converters.hwbToHwb,
			rgb: converters.hwbToRgb,
			rgba: converters.hwbToRgba,
		},
		finalize: (hwb: HWB): HWB => ({
			h: Math.round(hwb.h),
			w: FinalNumber(hwb.w, MaxPercent),
			b: FinalNumber(hwb.b, MaxPercent),
			a: +hwb.a.toFixed(MaxFixedNumber),
		}),
		normalize: (bits) => [
			+clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
			+(clampPercent(parseFloat(bits[WhitenessIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			+(clampPercent(parseFloat(bits[BlacknessIndex])) / MaxPercent).toFixed(
				MaxFixedFloat,
			),
			bits[AlphaIndex]
				? +(
						bits[AlphaIndex].charAt(bits[AlphaIndex].length - 1) === '%'
							? clampPercent(parseFloat(bits[AlphaIndex])) / MaxPercent
							: +bits[AlphaIndex]
				).toFixed(MaxFixedFloat)
				: DefaultOpacity,
		],
		re: /^hwb\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s+(\d*\.?\d+)%\s+(\d*\.?\d+)%(?:\s*\/\s*)?(\d+(?:\.\d+)?%?|\.\d+%?)?\s*\)?$/,
	},
	rgb: {
		converters: {
			hex: converters.rgbToHex,
			hexa: converters.rgbToHexa,
			hsb: converters.rgbToHsb,
			hsl: converters.rgbToHsl,
			hsla: converters.rgbToHsla,
			hsv: converters.rgbToHsv,
			hwb: converters.rgbToHwb,
			rgb: converters.rgbToRgb,
			rgba: converters.rgbToRgba,
		},
		finalize: FinalizeRgb,
		normalize: (bits) => {
			const ConvertedBits = bits
				.map((bit) =>
					bit.charAt(bit.length - 1) === '%'
						? fromPercent(parseFloat(bit) / MaxPercent, MaxRgb)
						: bit,
				)
				.map((bit) => +bit);

			return [
				clampPercentFloat(toPercent(ConvertedBits[RedIndex], MaxRgb)),
				clampPercentFloat(toPercent(ConvertedBits[GreenIndex], MaxRgb)),
				clampPercentFloat(toPercent(ConvertedBits[BlueIndex], MaxRgb)),
				DefaultOpacity,
			];
		},
		re: /^rgb\(\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/,
	},
	rgba: {
		converters: {
			hex: converters.rgbToHex,
			hexa: converters.rgbToHexa,
			hsb: converters.rgbToHsb,
			hsl: converters.rgbToHsl,
			hsla: converters.rgbToHsla,
			hsv: converters.rgbToHsv,
			hwb: converters.rgbToHwb,
			rgb: converters.rgbToRgb,
			rgba: converters.rgbToRgba,
		},
		finalize: FinalizeRgb,
		normalize: (bits) => {
			const ConvertedBits = bits
				.map((bit) =>
					bit.charAt(bit.length - 1) === '%'
						? fromPercent(parseFloat(bit) / 100, MaxRgb)
						: bit,
				)
				.map((bit) => +bit);

			return [
				clampPercentFloat(toPercent(ConvertedBits[RedIndex], MaxRgb)),
				clampPercentFloat(toPercent(ConvertedBits[GreenIndex], MaxRgb)),
				clampPercentFloat(toPercent(ConvertedBits[BlueIndex], MaxRgb)),
				clampPercentFloat(
					+bits[AlphaIndex] === ConvertedBits[AlphaIndex]
						? +bits[AlphaIndex]
						: toPercent(ConvertedBits[AlphaIndex], MaxRgb),
				),
			];
		},
		// eslint-disable-next-line max-len
		re: /^rgba\(\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\/?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/,
	},
};
