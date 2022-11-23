/**
 * This contains the sole method exposed by this library, {@link colorcolor}.
 *
 * @module
 */

import colorNames from 'css-color-names';
import {
	ColorDefinitionType,
	ColorModel,
	ColorName,
	ColorType,
	HEXA,
	HSB,
	HSLA,
	HSV,
	HWB,
	RGBA,
} from './colors';
import { ColorDetectors } from './detectors';

/**
 * Convert a color string in these valid color formats (name, RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSV) into a color
 * string of another format.
 *
 * @example
 * colorcolorObject('hsla(109, 100%, 37%, 1)', 'rgb'); // return 'rgb(35,189,0)'
 * colorcolorObject('hwb(180 50% 25% / 0.7)', 'hexa'); // return '#80bfbfb3'
 *
 * @param originalColor The CSS color value that needs to be converted.
 * @param targetColor The CSS color model to convert to.
 */
export const colorcolor = (
	originalColor: string,
	targetColor: ColorType = ColorName.RGBA,
): string => {
	const Color = colorcolorObject(originalColor, targetColor);

	let colorObject: ColorModel;
	let returnedColor = '';

	switch (targetColor.toLowerCase() as ColorType) {
		case ColorName.HEX:
			colorObject = Color as HEXA;
			returnedColor = `#${colorObject.r}${colorObject.g}${colorObject.b}`;
			break;
		case ColorName.HEXA:
			colorObject = Color as HEXA;
			returnedColor = `#${colorObject.r}${colorObject.g}${colorObject.b}${colorObject.a}`;
			break;
		case ColorName.HSB:
			colorObject = Color as HSB;
			returnedColor = `hsb(${colorObject.h}, ${colorObject.s}%, ${colorObject.b}%)`;
			break;
		case ColorName.HSL:
			colorObject = Color as HSLA;
			returnedColor = `hsl(${colorObject.h}, ${colorObject.s}%, ${colorObject.l}%)`;
			break;
		case ColorName.HSLA:
			colorObject = Color as HSLA;
			returnedColor = `hsla(${colorObject.h}, ${colorObject.s}%, ${colorObject.l}%, ${colorObject.a})`;
			break;
		case ColorName.HSV:
			colorObject = Color as HSV;
			returnedColor = `hsv(${colorObject.h}, ${colorObject.s}%, ${colorObject.v}%)`;
			break;
		case ColorName.HWB:
			colorObject = Color as HWB;
			returnedColor = `hwb(${colorObject.h} ${colorObject.w}% ${colorObject.b}% / ${colorObject.a})`;
			break;
		case ColorName.RGB:
			colorObject = Color as RGBA;
			returnedColor = `rgb(${colorObject.r}, ${colorObject.g}, ${colorObject.b})`;
			break;
		case ColorName.RGBA:
			colorObject = Color as RGBA;
			returnedColor = `rgba(${colorObject.r}, ${colorObject.g}, ${colorObject.b}, ${colorObject.a})`;
			break;
	}

	return returnedColor;
};

/**
 * Convert a color string in these valid color formats (name, RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSV) into a color
 * object of another format.
 *
 * @example
 * colorcolorObject('hsla(109, 100%, 37%, 1)'); // return { r: 35, g: 189, b: 0, a: 1 }
 * colorcolorObject('hwb(180 50% 25% / 0.7)', 'hexa'); // return { r: '80', g: 'bf', b: 'bf', a: 'b3' }
 *
 * @param originalColor The CSS color value that needs to be converted.
 * @param targetColor The CSS color model to convert to.
 */
const colorcolorObject = (
	originalColor: string,
	targetColor: ColorType = ColorName.RGBA,
): ColorModel => {
	const ConvertedTargetColor = targetColor.toLowerCase();

	let convertedOriginalColor = originalColor.toLowerCase();

	const NamedColor = (colorNames as { [key: string]: string })[
		convertedOriginalColor
	];
	if (NamedColor) {
		convertedOriginalColor = NamedColor;
	}

	let finalColor: ColorModel = { r: '00', g: '00', b: '00', a: 'ff' }; // default to black

	for (const ColorDetector in ColorDetectors) {
		if (Object.prototype.hasOwnProperty.call(ColorDetectors, ColorDetector)) {
			const Detector = ColorDetectors[ColorDetector as ColorDefinitionType];
			const Finalizer = ColorDetectors[ConvertedTargetColor as ColorType];
			const Bits = Detector.re.exec(convertedOriginalColor);

			if (Bits) {
				// we were able to extract valid color values from the string
				const NormalizedBits = Detector.normalize(Bits);

				if (
					Detector.converters &&
					Object.prototype.hasOwnProperty.call(
						Detector.converters,
						ConvertedTargetColor,
					)
				) {
					const ConvertedBits = Detector.converters[ConvertedTargetColor as ColorType](
						// @ts-ignore
						NormalizedBits,
					);

					finalColor = Finalizer.finalize(ConvertedBits);
				}
			}
		}
	}

	return finalColor;
};
