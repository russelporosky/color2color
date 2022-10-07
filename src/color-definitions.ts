import { hslToRgb, hsvToRgb } from './utilities';

interface ColorDefinition {
	example: string[];
	re: RegExp;
	toRGBA(bits: string[]): number[];
}

interface ColorDefinitions {
	[key: string]: ColorDefinition;
}

export enum ColorName {
	HEX = 'hex',
	HEXA = 'hexa',
	HSL = 'hsl',
	HSLA = 'hsla',
	HSB = 'hsb',
	HSV = 'hsv',
	RGB = 'rgb',
	RGBA = 'rgba',
}

export type ColorType = `${ColorName}`;

export type Hsl = {
	h: number;
	s: number;
	l: number;
	a: number;
}

export type Hsv = {
	h: number;
	s: number;
	v: number;
}

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

const DecimalRadix = 10;
const HexRadix = 16;
const MaxOpacity = 1;
const MaxOpacitySteps = 255;

const RedIndex = 1;
const GreenIndex = 2;
const BlueIndex = 3;
const AlphaIndex = 4;

export const ColorDefinitions: ColorDefinitions = {
	'hex': {
		example: ['#00ff00', '#336699'],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex], HexRadix),
			MaxOpacity,
		],
	},
	'hex3': {
		example: ['#0f0', '#369'],
		re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex] + bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex] + bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex] + bits[BlueIndex], HexRadix),
			MaxOpacity,
		],
	},
	'hexa': {
		example: ['#00ff00ff', '#336699a0'],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex], HexRadix),
			parseInt(bits[AlphaIndex], HexRadix) / MaxOpacitySteps,
		],
	},
	'hex4a': {
		example: ['#fb0f', '#f0f8'],
		re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex] + bits[RedIndex], HexRadix),
			parseInt(bits[GreenIndex] + bits[GreenIndex], HexRadix),
			parseInt(bits[BlueIndex] + bits[BlueIndex], HexRadix),
			parseInt(bits[AlphaIndex] + bits[AlphaIndex], HexRadix) / MaxOpacitySteps,
		],
	},
	'hsb': {
		example: ['hsb(120, 100%, 25%)', 'hsb(0, 100%, 50%)'],
		re: /^hsb\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
		toRGBA: bits => {
			const rgb = hsvToRgb(bits);

			return [
				rgb.r,
				rgb.g,
				rgb.b,
				MaxOpacity,
			];
		},
	},
	'hsl': {
		example: ['hsl(120, 100%, 25%)', 'hsl(0, 100%, 50%)'],
		re: /^hsl\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
		toRGBA: bits => {
			bits[AlphaIndex] = `${MaxOpacity}`;
			const rgba = hslToRgb(bits);

			return [
				rgba.r,
				rgba.g,
				rgba.b,
				rgba.a,
			];
		},
	},
	'hsla': {
		example: ['hsla(120, 100%, 25%, 1)', 'hsla(0, 100%, 50%, 0.5)'],
		re: /^hsla\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
		toRGBA: bits => {
			const rgba = hslToRgb(bits);

			return [
				rgba.r,
				rgba.g,
				rgba.b,
				rgba.a,
			];
		},
	},
	'hsv': {
		example: ['hsv(120, 100%, 25%)', 'hsv(0, 100%, 50%)'],
		re: /^hsv\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
		toRGBA: bits => {
			const rgb = hsvToRgb(bits);

			return [
				rgb.r,
				rgb.g,
				rgb.b,
				MaxOpacity,
			];
		},
	},
	'rgb': {
		example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
		re: /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], DecimalRadix),
			parseInt(bits[GreenIndex], DecimalRadix),
			parseInt(bits[BlueIndex], DecimalRadix),
			MaxOpacity,
		],
	},
	'rgba': {
		example: ['rgba(123, 234, 45, 1)', 'rgba(255,234,245, 0.5)'],
		re: /^rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
		toRGBA: bits => [
			parseInt(bits[RedIndex], DecimalRadix),
			parseInt(bits[GreenIndex], DecimalRadix),
			parseInt(bits[BlueIndex], DecimalRadix),
			parseFloat(bits[AlphaIndex]),
		],
	},
};
