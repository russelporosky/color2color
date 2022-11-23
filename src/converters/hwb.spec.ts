import { hwbToHex, hwbToHsb, hwbToHsl, hwbToHsv, hwbToRgb } from './hwb';

describe('hwb', () => {
	describe('hwbToHex', () => {
		it('converts HWB without alpha to RGBA', () => {
			expect(hwbToHex(['180', 0.5, 0.25])).toEqual({
				r: 0.5,
				g: 0.75,
				b: 0.75,
				a: 1,
			});
		});

		it('converts HWB to RGBA', () => {
			expect(hwbToHex(['180', 0.5, 0.25, 0.9])).toEqual({
				r: 0.5,
				g: 0.75,
				b: 0.75,
				a: 0.9,
			});
		});
	});

	describe('hwbToHsb', () => {
		it('converts HSL to HSB', () => {
			expect(hwbToHsb(['227', 0.3333, 0.35])).toEqual({
				h: 227,
				s: 0.4872,
				b: 0.65,
			});
			expect(hwbToHsb(['227', 0.3333, 1])).toEqual({
				h: 227,
				s: 0,
				b: 0,
			});
		});
	});

	describe('hwbToHsl', () => {
		it('converts HWB without alpha to HSLA', () => {
			expect(hwbToHsl(['180', 0.5, 0.25])).toEqual({
				h: 180,
				s: 0.3333,
				l: 0.625,
				a: 1,
			});
		});

		it('converts HWB to HSLA', () => {
			expect(hwbToHsl(['0.5turn', 0.5, 0.25, 0.9])).toEqual({
				h: 180,
				s: 0.3333,
				l: 0.625,
				a: 0.9,
			});
		});
	});

	describe('hwbToHsv', () => {
		it('converts HSL to HSB', () => {
			expect(hwbToHsv(['227', 0.3333, 0.35])).toEqual({
				h: 227,
				s: 0.4872,
				v: 0.65,
			});
		});
	});

	describe('hwbToRgb', () => {
		it('converts HWB without alpha to RGBA', () => {
			expect(hwbToRgb(['180', 0.5, 0.25])).toEqual({
				r: 0.5,
				g: 0.75,
				b: 0.75,
				a: 1,
			});
			expect(hwbToRgb(['180', 0.5, 0.75])).toEqual({
				r: 0.4,
				g: 0.4,
				b: 0.4,
				a: 1,
			});
		});

		it('converts HWB to RGBA', () => {
			expect(hwbToRgb(['180', 0.5, 0.25, 0.9])).toEqual({
				r: 0.5,
				g: 0.75,
				b: 0.75,
				a: 0.9,
			});
		});
	});
});
