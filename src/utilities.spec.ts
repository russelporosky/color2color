/* eslint-disable @typescript-eslint/no-magic-numbers */
import {
	calculateOpacityFromWhite,
	hslToRgb,
	hsvToRgb,
	numberToHex,
	rgbToHsl,
	rgbToHsv,
} from './utilities';

describe('utilities', () => {
	describe('calculateOpacityFromWhite', () => {
		it('correctly calculates opacity from RGB inputs', () => {
			expect(calculateOpacityFromWhite(221, 255, 238)).toEqual([0, 255, 128, 0.1333]);
		});
	});

	describe('hslToRgb', () => {
		it('correctly converts HSL to RGB', () => {
			expect(hslToRgb(['', '150', '100', '93', '1'])).toEqual({
				r: 219,
				g: 255,
				b: 237,
				a: 1,
			});
		});
	});

	describe('hsvToRgb', () => {
		it('correctly converts HSV to RGB', () => {
			expect(hsvToRgb(['', '150', '13', '100', '1'])).toEqual({
				r: 222,
				g: 255,
				b: 238,
			});
		});
	});

	describe('numberToHex', () => {
		it('correctly converts decimal values to hex with a leading zero', () => {
			expect(numberToHex(13)).toEqual('0d');
			expect(numberToHex(65)).toEqual('41');
		});
	});

	describe('rgbToHsl', () => {
		it('correctly converts RGB values to HSL', () => {
			expect(rgbToHsl(219, 255, 237, 1)).toEqual({
				h: 150,
				s: 100,
				l: 92.9,
				a: 1,
			})
		});
	});

	describe('rgbToHsv', () => {
		it('correctly converts RGB values to HSV', () => {
			expect(rgbToHsv(219, 255, 237, 1)).toEqual({
				h: 150,
				s: 14.1,
				v: 99.6,
			})
		});
	});
});
