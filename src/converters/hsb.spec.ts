import {
	hsbToHex,
	hsbToHsb,
	hsbToHsl,
	hsbToHsv,
	hsbToHwb,
	hsbToRgb,
} from './hsb';

describe('hsb', () => {
	describe('hsbToHex', () => {
		it('converts HSB to HEXA', () => {
			expect(hsbToHex(['270', 0.3333, 0.35])).toEqual({
				r: 0.2917,
				g: 0.2334,
				b: 0.35,
				a: 1,
			});
		});
	});

	describe('hsbToHsb', () => {
		it('passes through values, but still converts degrees', () => {
			expect(hsbToHsb(['1.5turn', 0.55, 0.2345])).toEqual({
				h: 540,
				s: 0.55,
				b: 0.2345,
			});
		});
	});

	describe('hsbToHsl', () => {
		it('converts HSB to HSLA', () => {
			expect(hsbToHsl(['270', 0.3333, 0.35])).toEqual({
				h: 270,
				s: 0.2,
				l: 0.2917,
				a: 1,
			});
			expect(hsbToHsl(['270', 1, 1])).toEqual({
				h: 270,
				s: 1,
				l: 0.5,
				a: 1,
			});
			expect(hsbToHsl(['270', 0, 1])).toEqual({
				h: 270,
				s: 0,
				l: 1,
				a: 1,
			});
		});
	});

	describe('hsbToHsv', () => {
		it('converts HSB to HSV', () => {
			expect(hsbToHsv(['0.85turn', 0.3333, 0.35])).toEqual({
				h: 306,
				s: 0.3333,
				v: 0.35,
			});
		});
	});

	describe('hsbToHwb', () => {
		it('converts HSB to HWB', () => {
			expect(hsbToHwb(['270deg', 0.2, 0.2917])).toEqual({
				h: 270,
				w: 0.2334,
				b: 0.7083,
				a: 1,
			});
		});
	});

	describe('hsbToRgb', () => {
		it('converts HSB to RGBA', () => {
			expect(hsbToRgb(['270', 0.3333, 0.35])).toEqual({
				r: 0.2917,
				g: 0.2334,
				b: 0.35,
				a: 1,
			});
		});
	});
});
