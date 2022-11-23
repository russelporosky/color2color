import {
	hexToHex,
	hexToHsb,
	hexToHsl,
	hexToHsv,
	hexToHwb,
	hexToRgb,
} from './hex';

describe('hex', () => {
	describe('hexToHex', () => {
		it('converts hex to HEXA', () => {
			expect(hexToHex([0.6706, 0.8039, 0.9373])).toEqual({
				r: 0.6706,
				g: 0.8039,
				b: 0.9373,
				a: 1,
			});
			expect(hexToHex([0.6706, 0.8039, 0.9373, 0.0392])).toEqual({
				r: 0.6706,
				g: 0.8039,
				b: 0.9373,
				a: 0.0392,
			});
		});
	});

	describe('hexToHsb', () => {
		it('converts hex to HSB', () => {
			expect(hexToHsb([0.2392, 0.2902, 0.4706])).toEqual({
				h: 226.78,
				s: 0.4917,
				b: 0.4706,
			});
			expect(hexToHsb([0, 1, 0.2941])).toEqual({
				h: 137.65,
				s: 1,
				b: 1,
			});
		});
	});

	describe('hexToHsl', () => {
		it('converts hex without alpha to HSLA', () => {
			expect(hexToHsl([0.2392, 0.2902, 0.4706])).toEqual({
				h: 226.78,
				s: 0.326,
				l: 0.3549,
				a: 1,
			});
			expect(hexToHsl([0, 0.1961, 0.2941])).toEqual({
				h: 199.99,
				s: 1,
				l: 0.147,
				a: 1,
			});
		});

		it('converts hex with alpha to HSLA', () => {
			expect(hexToHsl([0.2392, 0.2902, 0.4706, 0.251])).toEqual({
				h: 226.78,
				s: 0.326,
				l: 0.3549,
				a: 0.251,
			});
			expect(hexToHsl([0, 0.1961, 0.2941, 0.9961])).toEqual({
				h: 199.99,
				s: 1,
				l: 0.147,
				a: 0.9961,
			});
		});
	});

	describe('hexToHsv', () => {
		it('converts hex to HSV', () => {
			expect(hexToHsv([0.2392, 0.2902, 0.4706])).toEqual({
				h: 226.78,
				s: 0.4917,
				v: 0.4706,
			});
			expect(hexToHsv([0, 1, 0.2941])).toEqual({
				h: 137.65,
				s: 1,
				v: 1,
			});
		});
	});

	describe('hexToHwb', () => {
		it('converts hex without alpha to HWB', () => {
			expect(hexToHwb([0.2392, 0.2902, 0.4706])).toEqual({
				h: 226.78,
				w: 0.2392,
				b: 0.5294,
				a: 1,
			});
			expect(hexToHwb([0, 0.1961, 0.2941])).toEqual({
				h: 199.99,
				w: 0,
				b: 0.7059,
				a: 1,
			});
		});

		it('converts hex with alpha to HWB', () => {
			expect(hexToHwb([0.2392, 0.2902, 0.4706, 0.251])).toEqual({
				h: 226.78,
				w: 0.2392,
				b: 0.5294,
				a: 0.251,
			});
			expect(hexToHwb([0, 0.1961, 0.2941, 0.9961])).toEqual({
				h: 199.99,
				w: 0,
				b: 0.7059,
				a: 0.9961,
			});
		});
	});

	describe('hexToRgb', () => {
		it('converts hex without alpha to RGB', () => {
			expect(hexToRgb([1, 0.5, 0.3729])).toEqual({
				r: 1,
				g: 0.5,
				b: 0.3729,
				a: 1,
			});
		});
	});
});
