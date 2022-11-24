/**
 * This contains the sole method exposed by this library, {@link colorcolor}.
 *
 * @module
 */
import { ColorType } from './colors';
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
export declare const colorcolor: (originalColor: string, targetColor?: ColorType) => string;
