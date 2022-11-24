/**
 * This is a collection of interfaces and types for the various color models, definitions, and
 * converter methods.
 *
 * @module
 */

/**
 * Each supported color model requires a definition object for detection and normalization.
 *
 * @see {@link detectors.ColorDetectors}
 */
export interface ColorDefinition {
	/**
	 * A list of methods that convert the current color model into another one. Every entry in the {@link ColorName} enum
	 * must be present for each definition.
	 */
	converters: {
		[key in ColorName]: Converter;
	};

	/**
	 * Convert the bits from a converter method into the format used in the color string.
	 *
	 * @remarks
	 * Fractions are converted to whole numbers (ex. 0.75 becomes 191 for RGB or 75 for percentage)
	 * or hexadecimal (ex. 0.75 becomes 'bf') and rounded off. Angles will already be in degrees
	 * before this method is called.
	 *
	 * @example
	 * // convert RGBA to HEX
	 * finalize({ r: 0.5, g: 1, b: 0.5, a: 1 }) // return { r: '80', g: 'ff', b: '80', a: 1 }
	 *
	 * @param color This is the color model (from {@link ColorDefinition.normalize}) that should be converted to the final format.
	 */
	finalize(color: ColorModel): ColorModel;

	/**
	 * Convert the bits from the regex to percentages for percentage and RGB values, and degrees for angles.
	 *
	 * @remarks
	 * Bits from the regex will begin at index 1 because index 0 is the original string. Each bit
	 * can be in any format supported by the color model, such as an angle ({@link utilities.toDegrees}), a float
	 * percentage, an actual percentage string, or a number. The normalize method is responsible for
	 * converting all of those to degrees in the case of an angle, or a float percentage for everything else. If an
	 * opacity isn't included (index {@link utilities.AlphaIndex} of `bits` is empty), then it is defaulted to `1`.
	 *
	 * @example
	 * // input to {@link ColorDefinition.re} is 'rgb(128, 255, 191)'
	 * normalize(['rgb(128, 255, 191)', '128', '255', '191']) // return [0.5, 1, 0.75, 1]
	 *
	 * @param bits Index 0 is the original string, so it should be ignored by the normalize method.
	 */
	normalize(bits: string[]): ConverterTuple;

	/**
	 * This should be able to detect a CSS string for a specific color model.
	 *
	 * @remarks
	 * Many color strings support multiple formats. For example, RGBA can be written as `rgba(191, 205, 45, 0.7)`,
	 * `rgba(75%, 40%, 100%, 50%)`, `rgba(191 205 45 / 0.7)`, and `rgba(75% 40% 100% / 50%)` (and a few others).
	 * Non-CSS color strings like `hsb` and `hsv` simply use commas and have no alternative formats. The regex should
	 * also not care about extra spaces, so `hsv(75deg, 75% 65%)` and `hsv(  75deg ,75%,   65%  )` have identical
	 * results.
	 *
	 * @see [CSS named colors](https://developer.mozilla.org/en-US/docs/Web/CSS/named-color#value)
	 * @see [RGB color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)
	 * @see [HSL color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl_color_model)
	 * @see [HWB color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hwb_color_model)
	 */
	re: RegExp;
}

/**
 * This is the shape of the color detection object. Each supported _input_ color string needs a definition that
 * contains some necessary functionality, including string detection, number normalizing, and converting.
 *
 * @see {@link detectors.ColorDetectors}
 */
export type ColorDefinitions = {
	[key in ColorName | ColorDefinitionName]: ColorDefinition;
};

/**
 * This is a combination of the target color names and internal color names.
 */
export type ColorDefinitionType = `${ColorDefinitionName | ColorName}`;

/**
 * These are the available color formats that can be converted to.
 */
export enum ColorName {
	HEX = 'hex',
	HEXA = 'hexa',
	HSB = 'hsb',
	HSL = 'hsl',
	HSLA = 'hsla',
	HSV = 'hsv',
	HWB = 'hwb',
	RGB = 'rgb',
	RGBA = 'rgba',
}

/**
 * These are the additional color formats supported as an _input_ string.
 */
export enum ColorDefinitionName {
	HEX3 = 'hex3',
	HEXA4 = 'hexa4',
}

/**
 * This is the {@link ColorName} enum converted to a type.
 */
export type ColorType = `${ColorName}`;

/**
 * This reflects the output shape of the color {@link colors.ColorDefinition.normalize} method.
 */
export type ConverterTuple = [number | string, number, number, number];

export type HexConverter = ([r, g, b]: [number, number, number]) => ColorModel;
export type HexaConverter = ([r, g, b, a]: [
	number,
	number,
	number,
	number?,
]) => ColorModel;
export type HsbConverter = ([h, s, b]: [string, number, number]) => ColorModel;
export type HslConverter = ([h, s, l]: [string, number, number]) => ColorModel;
export type HslaConverter = ([h, s, l, a]: [
	string,
	number,
	number,
	number?,
]) => ColorModel;
export type HsvConverter = ([h, s, v]: [string, number, number]) => ColorModel;
export type HwbConverter = ([h, w, b]: [string, number, number]) => ColorModel;
export type HwbaConverter = ([h, w, b, a]: [
	string,
	number,
	number,
	number?,
]) => ColorModel;
export type RgbConverter = ([r, g, b]: [number, number, number]) => ColorModel;
export type RgbaConverter = ([r, g, b, a]: [
	number,
	number,
	number,
	number?,
]) => ColorModel;

/**
 * The output of a {@link colors.ColorDefinition.converters color converter} method must be ones of these types.
 */
export type Converter =
	| HexConverter
	| HexaConverter
	| HsbConverter
	| HslConverter
	| HslaConverter
	| HsvConverter
	| HwbConverter
	| HwbaConverter
	| RgbConverter
	| RgbaConverter;

/**
 * The RGB color model defines a given color in the sRGB color space according to its red, green, and blue components.
 * An optional alpha component represents the color's transparency.
 *
 * @see [RGB Color Model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)
 */
export type HEXA = {
	/**
	 * Red is a hexadecimal number from 0x00 to 0xff.
	 */
	r: string;

	/**
	 * Red is a hexadecimal number from 0x00 to 0xff.
	 */
	g: string;

	/**
	 * Red is a hexadecimal number from 0x00 to 0xff.
	 */
	b: string;

	/**
	 * Red is a hexadecimal number from 0x00 to 0xff.
	 */
	a: string;
};

/**
 * The HSB color model defines a given color in the sRGB color space according to its hue, saturation, and brightness
 * (also known as Value in the HSV color model).
 *
 * @see [What is HSV in Design](https://www.lifewire.com/what-is-hsv-in-design-1078068)
 */
export type HSB = {
	/**
	 * Hue is a number between 0 and 360 degrees.
	 */
	h: number;

	/**
	 * Saturation is a percentage between 0 and 1.
	 */
	s: number;

	/**
	 * Brightness (or Value) is a percentage between 0 and 1.
	 */
	b: number;
};

/**
 * The HSL color model defines a given color in the sRGB color space according to its hue, saturation, and lightness. An
 * optional alpha component represents the color's transparency.
 *
 * @see [HSL Color model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl_color_model)
 */
export type HSLA = {
	/**
	 * Hue is a number between 0 and 360 degrees.
	 */
	h: number;

	/**
	 * Saturation is a percentage between 0 and 1.
	 */
	s: number;

	/**
	 * Lightness is a percentage between 0 and 1.
	 */
	l: number;

	/**
	 * Opacity is a percentage between 0 and 1.
	 */
	a: number;
};

/**
 * The HSV color model defines a given color in the sRGB color space according to its hue, saturation, and value (also
 * known as Brightness in the HSB color model).
 *
 * @see [What is HSV in Design](https://www.lifewire.com/what-is-hsv-in-design-1078068)
 */
export type HSV = {
	/**
	 * Hue is a number between 0 and 360 degrees.
	 */
	h: number;

	/**
	 * Saturation is a percentage between 0 and 1.
	 */
	s: number;

	/**
	 * Value (or Brightness) is a percentage between 0 and 1.
	 */
	v: number;
};

/**
 * The HWB color model defines a given color in the sRGB color space according to its hue, whiteness, and blackness. An
 * optional alpha component represents the color's transparency.
 *
 * @see [HWB Color Model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hwb_color_model)
 */
export type HWB = {
	/**
	 * Hue is a number between 0 and 360 degrees.
	 */
	h: number;

	/**
	 * Whiteness is a percentage between 0 and 1.
	 */
	w: number;

	/**
	 * Blackness is a percentage between 0 and 1.
	 */
	b: number;

	/**
	 * Opacity is a percentage between 0 and 1.
	 */
	a: number;
};

/**
 * The RGB color model defines a given color in the sRGB color space according to its red, green, and blue components.
 * An optional alpha component represents the color's transparency.
 *
 * @see [RGB Color Model](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)
 */
export type RGBA = {
	/**
	 * Red is a percentage between 0 and 1.
	 */
	r: number;

	/**
	 * Green is a percentage between 0 and 1.
	 */
	g: number;

	/**
	 * Blue is a percentage between 0 and 1.
	 */
	b: number;

	/**
	 * Opacity is a percentage between 0 and 1.
	 */
	a: number;
};

/**
 * All color methods work with one of these models. HEX, HSL, and RGB aren't used since alpha always {@link utilities.DefaultOpacity defaults} to 1.
 */
export type ColorModel = HEXA | HSB | HSLA | HSV | HWB | RGBA;
