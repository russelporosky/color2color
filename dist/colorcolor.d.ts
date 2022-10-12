declare module "src/utilities" {
    import { Hsl, Hsv, Rgb, Rgba } from "src/color-definitions";
    export const AlphaPrecision = 4;
    /**
     * Modifies the RGB values to be accurate when displayed on a white background.
     *
     * @param r Red decimal value
     * @param g Green decimal value
     * @param b Blue decimal value
     */
    export const calculateOpacityFromWhite: (r: number, g: number, b: number) => number[];
    /**
     * Convert an HSL color value to the RGB equivalent.
     *
     * @param bits The result of a regular expression that captures the four components of an HSL color value
     */
    export const hslToRgb: (bits: string[]) => Rgba;
    /**
     * Convert an HSV color value to the RGB equivalent.
     *
     * @param bits The result of a regular expression that captures the three components of an HSV color value
     */
    export const hsvToRgb: (bits: string[]) => Rgb;
    /**
     * Converts decimal to hexadecimal, ensuring a leading 0 if the result is a single digit.
     *
     * @param n
     */
    export const numberToHex: (n: number) => string;
    /**
     * Convert an RGB color to an HSL color.
     *
     * @param r Red decimal value
     * @param g Green decimal value
     * @param b Blue decimal value
     * @param a Opacity float value
     */
    export const rgbToHsl: (r: number, g: number, b: number, a: number) => Hsl;
    /**
     * Convert an RGB color to an HSV color.
     *
     * @param r Red decimal value
     * @param g Green decimal value
     * @param b Blue decimal value
     * @param a Opacity float value
     */
    export const rgbToHsv: (r: number, g: number, b: number, a: number) => Hsv;
}
declare module "src/color-definitions" {
    interface ColorDefinition {
        example: string[];
        re: RegExp;
        toRGBA(bits: string[]): number[];
    }
    interface ColorDefinitions {
        [key: string]: ColorDefinition;
    }
    export enum ColorName {
        HEX = "hex",
        HEXA = "hexa",
        HSL = "hsl",
        HSLA = "hsla",
        HSB = "hsb",
        HSV = "hsv",
        RGB = "rgb",
        RGBA = "rgba"
    }
    export type ColorType = `${ColorName}`;
    export type Hsl = {
        h: number;
        s: number;
        l: number;
        a: number;
    };
    export type Hsv = {
        h: number;
        s: number;
        v: number;
    };
    export type Rgb = {
        r: number;
        g: number;
        b: number;
    };
    export type Rgba = {
        r: number;
        g: number;
        b: number;
        a: number;
    };
    export const ColorDefinitions: ColorDefinitions;
}
declare module "src/colorcolor" {
    import { ColorType } from "src/color-definitions";
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
    export const colorcolor: (originalColor: string, targetColor?: ColorType, calculateOpacity?: boolean) => string;
}
