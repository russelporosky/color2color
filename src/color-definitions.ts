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

const MaxOpacity = 1;
const MaxOpacitySteps = 255;

export const ColorDefinitions: ColorDefinitions = {
	'hex': {
		example: ['#00ff00', '#336699'],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		toRGBA: bits => [
			parseInt(bits[ 1 ], 16),
			parseInt(bits[ 2 ], 16),
			parseInt(bits[ 3 ], 16),
			MaxOpacity,
		],
	},
	'hex3': {
		example: ['#0f0', '#369'],
		re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		toRGBA: bits => [
			parseInt(bits[ 1 ] + bits[ 1 ], 16),
			parseInt(bits[ 2 ] + bits[ 2 ], 16),
			parseInt(bits[ 3 ] + bits[ 3 ], 16),
			MaxOpacity,
		],
	},
	'hexa': {
		example: ['#00ff00ff', '#336699a0'],
		re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
		toRGBA: bits => [
			parseInt(bits[ 1 ], 16),
			parseInt(bits[ 2 ], 16),
			parseInt(bits[ 3 ], 16),
			parseInt(bits[ 4 ], 16) / MaxOpacitySteps,
		],
	},
	'hex4a': {
		example: ['#fb0f', '#f0f8'],
		re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
		toRGBA: bits => [
			parseInt(bits[ 1 ] + bits[ 1 ], 16),
			parseInt(bits[ 2 ] + bits[ 2 ], 16),
			parseInt(bits[ 3 ] + bits[ 3 ], 16),
			parseInt(bits[ 4 ] + bits[ 4 ], 16) / MaxOpacitySteps,
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
			bits[ 4 ] = `${MaxOpacity}`;
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
			parseInt(bits[ 1 ], 10),
			parseInt(bits[ 2 ], 10),
			parseInt(bits[ 3 ], 10),
			MaxOpacity,
		],
	},
	'rgba': {
		example: ['rgba(123, 234, 45, 1)', 'rgba(255,234,245, 0.5)'],
		re: /^rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
		toRGBA: bits => [
			parseInt(bits[ 1 ], 10),
			parseInt(bits[ 2 ], 10),
			parseInt(bits[ 3 ], 10),
			parseFloat(bits[ 4 ]),
		],
	},
};
