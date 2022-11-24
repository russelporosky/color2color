import { hslToHex, hslToHsb, hslToHsv, hslToHwb, hslToRgb } from './hsl';

describe('hsl', () => {
	describe('hslToHex', () => {
		it('converts HSL without alpha to HEXA', () => {
			expect(hslToHex(['227', 0.3333, 0.35])).toEqual({
				r: 0.2333,
				g: 0.2839,
				b: 0.4667,
				a: 1,
			});
		});

		it('converts HSLA to HEXA', () => {
			expect(hslToHex(['227', 0.3333, 0.35, 0.75])).toEqual({
				r: 0.2333,
				g: 0.2839,
				b: 0.4667,
				a: 0.75,
			});
		});
	});

	describe('hslToHsb', () => {
		it('converts HSL to HSB', () => {
			expect(hslToHsb(['227', 0.3333, 0.35])).toEqual({
				h: 227,
				s: 0.5,
				b: 0.4667,
			});
		});
	});

	describe('hslToHsv', () => {
		it('converts HSL to HSB', () => {
			expect(hslToHsv(['227', 0.3333, 0.35])).toEqual({
				h: 227,
				s: 0.5,
				v: 0.4667,
			});
		});
	});

	describe('hslToHwb', () => {
		it('converts HSL without alpha to HWB', () => {
			expect(hslToHwb(['227', 0.3333, 0.35])).toEqual({
				h: 227,
				w: 0.2334,
				b: 0.5333,
				a: 1,
			});
		});

		it('converts HSLA to HWB', () => {
			expect(hslToHwb(['227', 0.3333, 0.35, 0.75])).toEqual({
				h: 227,
				w: 0.2334,
				b: 0.5333,
				a: 0.75,
			});
		});
	});

	describe('hslToRgb', () => {
		it('converts HSL without alpha to RGBA', () => {
			// expect(hslToRgb(['227', 0.3333, 0.35])).toEqual({
			// 	r: 0.2333,
			// 	g: 0.2839,
			// 	b: 0.4667,
			// 	a: 1,
			// });
			// expect(hslToRgb(['227', 1, 1])).toEqual({
			// 	r: 1,
			// 	g: 1,
			// 	b: 1,
			// 	a: 1,
			// });
			expect(hslToRgb(['227', 0, 0])).toEqual({
				r: 0,
				g: 0,
				b: 0,
				a: 1,
			});
		});

		it('converts HSLA to RGBA', () => {
			expect(hslToRgb(['227', 0.3333, 0.35, 0.75])).toEqual({
				r: 0.2333,
				g: 0.2839,
				b: 0.4667,
				a: 0.75,
			});
		});
	});
});
