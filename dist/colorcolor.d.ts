declare enum ColorName {
    HEX = "hex",
    HEXA = "hexa",
    HSL = "hsl",
    HSLA = "hsla",
    HSB = "hsb",
    HSV = "hsv",
    HWB = "hwb",
    RGB = "rgb",
    RGBA = "rgba"
}
declare type ColorType = `${ColorName}`;
declare type Hex = {
    r: string;
    g: string;
    b: string;
};
declare type Hexa = {
    r: string;
    g: string;
    b: string;
    a: string;
};
declare type Hsb = {
    h: number;
    s: number;
    b: number;
};
declare type Hsl = {
    h: number;
    s: number;
    l: number;
};
declare type Hsla = {
    h: number;
    s: number;
    l: number;
    a: number;
};
declare type Hsv = {
    h: number;
    s: number;
    v: number;
};
declare type Hwb = {
    h: number;
    w: number;
    b: number;
    a: number;
};
declare type Rgb = {
    r: number;
    g: number;
    b: number;
};
declare type Rgba = {
    r: number;
    g: number;
    b: number;
    a: number;
};
/**
 * Modifies the RGB values to be accurate when displayed on a white background.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 */
export declare const calculateOpacityFromWhite: (r: number, g: number, b: number) => number[];
/**
 * Convert an HSL color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the four components of an HSL color value
 */
export declare const hslToRgb: (bits: string[]) => Rgba;
/**
 * Convert an HSV color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the three components of an HSV color value
 */
export declare const hsvToRgb: (bits: string[]) => Rgb;
/**
 * Converts a given hue (from an HSL color) to the RGB decimal value.
 *
 * @param num
 * @param hue
 * @param saturation
 * @param lightness
 */
export declare const hueToRgb: (num: number, hue: number, saturation: number, lightness: number) => number;
/**
 * Convert an HWB color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the three or four components of an HWB color value
 */
export declare const hwbToRgb: (bits: string[]) => Rgba;
/**
 * Converts decimal to hexadecimal, ensuring a leading 0 if the result is a single digit.
 *
 * @param n
 */
export declare const numberToHex: (n: number) => string;
/**
 * Convert an RGB color to an HSL color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
export declare const rgbToHsl: (r: number, g: number, b: number, a: number) => Hsla;
/**
 * Convert an RGB color to an HSV color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
export declare const rgbToHsv: (r: number, g: number, b: number, a: number) => Hsv;
/**
 * Convert an RGB color to an HWB color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
export declare const rgbToHwb: (r: number, g: number, b: number, a: number) => Hwb;
/**
 * Convert a color string in any valid CSS format (RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSB) into another format.
 *
 * @example
 * // returns 'rgba(35,189,0,1)'
 * colorcolor('hsla(109,100%,37%,1)');
 * @example
 * // returns 'rgba(0,255,128,0.1333)'
 * colorcolor('#dfe', 'rgba', true);
 *
 * @param originalColor The CSS color value that needs to be converted
 * @param targetColor The CSS color type to convert to
 * @param calculateOpacity If the target color has an opacity value (HexA, HSLA, or RGBA), the result will be correct if viewed against a white background
 */
export declare function colorcolor(originalColor: string, targetColor?: ColorType, calculateOpacity?: boolean): string;
/**
 * Convert a color string in any valid CSS format (RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSB) into the numeric components of another format.
 *
 * @example
 * // returns '{ r: 35, g: 189, b: 0, a: 1 }'
 * colorcolor('hsla(109,100%,37%,1)');
 * @example
 * // returns 'rgba(0,255,128,0.1333)'
 * // returns '{ r: 0, g: 255, b: 128, a: 0.1333 }'
 * colorcolor('#dfe', 'rgba', true);
 *
 * @param originalColor The CSS color value that needs to be converted
 * @param targetColor The CSS color type to convert to
 * @param calculateOpacity If the target color has an opacity value (HexA, HSLA, or RGBA), the result will be correct if viewed against a white background
 */
export declare function colorcolorRaw(originalColor: string, targetColor?: ColorType, calculateOpacity?: boolean): Hex | Hexa | Hsb | Hsl | Hsla | Hsv | Hwb | Rgb | Rgba;
export {};
