import { hsvToHex, hsvToHsb, hsvToHsl, hsvToHwb, hsvToRgb } from './hsv';

describe('hsv', () => {
	describe('hsvToHex', () => {
		it('converts HSV to HEXA', () => {
			expect(hsvToHex(['270', 0.3333, 0.35])).toEqual({
				r: 0.2917,
				g: 0.2334,
				b: 0.35,
				a: 1,
			});
		});
	});

	describe('hsvToHsb', () => {
		it('converts HSV to HSB', () => {
			expect(hsvToHsb(['0.85turn', 0.3333, 0.35])).toEqual({
				h: 306,
				s: 0.3333,
				b: 0.35,
			});
		});
	});

	describe('hsvToHsl', () => {
		it('converts HSV to HSLA', () => {
			expect(hsvToHsl(['270', 0.3333, 0.35])).toEqual({
				h: 270,
				s: 0.2,
				l: 0.2917,
				a: 1,
			});
		});
	});

	describe('hsvToHwb', () => {
		it('converts HSV to HWB', () => {
			expect(hsvToHwb(['270deg', 0.2, 0.2917])).toEqual({
				h: 270,
				w: 0.2334,
				b: 0.7083,
				a: 1,
			});
		});
	});

	describe('hsvToRgb', () => {
		it('converts HSV to RGBA', () => {
			expect(hsvToRgb(['270', 0.3333, 0.35])).toEqual({
				r: 0.2917,
				g: 0.2334,
				b: 0.35,
				a: 1,
			});
		});
	});
});
