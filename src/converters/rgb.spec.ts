import { rgbToHex, rgbToHsb, rgbToHsl, rgbToHsv, rgbToHwb } from './rgb';
import { toPercent } from '../utilities';

describe('rgb', () => {
	describe('rgbToHex', () => {
		it('converts RGB without alpha to HEXA', () => {
			expect(
				rgbToHex([toPercent(61, 255), toPercent(74, 255), toPercent(120, 255)]),
			).toEqual({
				r: 0.2392,
				g: 0.2902,
				b: 0.4706,
				a: 1,
			});
		});

		it('converts RGB with alpha to HEXA', () => {
			expect(
				rgbToHex([
					toPercent(61, 255),
					toPercent(74, 255),
					toPercent(120, 255),
					0.6,
				]),
			).toEqual({
				r: 0.2392,
				g: 0.2902,
				b: 0.4706,
				a: 0.6,
			});
		});
	});

	describe('rgbToHsb', () => {
		it('converts RGB to HSB', () => {
			expect(
				rgbToHsb([toPercent(61, 255), toPercent(74, 255), toPercent(120, 255)]),
			).toEqual({
				h: 226.78,
				s: 0.4917,
				b: 0.4706,
			});
			expect(
				rgbToHsb([toPercent(0, 255), toPercent(255, 255), toPercent(75, 255)]),
			).toEqual({
				h: 137.65,
				s: 1,
				b: 1,
			});
		});
	});

	describe('rgbToHsl', () => {
		it('converts RGB without alpha to HSLA', () => {
			expect(
				rgbToHsl([toPercent(61, 255), toPercent(74, 255), toPercent(120, 255)]),
			).toEqual({
				h: 226.78,
				s: 0.326,
				l: 0.3549,
				a: 1,
			});
			expect(
				rgbToHsl([toPercent(0, 255), toPercent(50, 255), toPercent(75, 255)]),
			).toEqual({
				h: 199.99,
				s: 1,
				l: 0.147,
				a: 1,
			});
		});

		it('converts RGB with alpha to HSLA', () => {
			expect(
				rgbToHsl([
					toPercent(255, 255),
					toPercent(128, 255),
					toPercent(51, 255),
					0.25,
				]),
			).toEqual({
				h: 22.65,
				s: 1,
				l: 0.6,
				a: 0.25,
			});
			expect(
				rgbToHsl([
					toPercent(0, 255),
					toPercent(50, 255),
					toPercent(75, 255),
					0.999,
				]),
			).toEqual({
				h: 199.99,
				s: 1,
				l: 0.147,
				a: 0.999,
			});
			expect(
				rgbToHsl([
					toPercent(255, 255),
					toPercent(51, 255),
					toPercent(255, 255),
					0.25,
				]),
			).toEqual({
				h: 300,
				s: 1,
				l: 0.6,
				a: 0.25,
			});
		});
	});

	describe('rgbToHsv', () => {
		it('converts RGB to HSV', () => {
			expect(
				rgbToHsv([toPercent(61, 255), toPercent(74, 255), toPercent(120, 255)]),
			).toEqual({
				h: 226.78,
				s: 0.4917,
				v: 0.4706,
			});
			expect(
				rgbToHsv([toPercent(0, 255), toPercent(255, 255), toPercent(75, 255)]),
			).toEqual({
				h: 137.65,
				s: 1,
				v: 1,
			});
		});
	});

	describe('rgbToHwb', () => {
		it('converts RGB without alpha to HWB', () => {
			expect(
				rgbToHwb([toPercent(61, 255), toPercent(74, 255), toPercent(120, 255)]),
			).toEqual({
				h: 226.78,
				w: 0.2392,
				b: 0.5294,
				a: 1,
			});
			expect(
				rgbToHwb([toPercent(0, 255), toPercent(50, 255), toPercent(75, 255)]),
			).toEqual({
				h: 199.99,
				w: 0,
				b: 0.7059,
				a: 1,
			});
		});

		it('converts RGB with alpha to HWB', () => {
			expect(
				rgbToHwb([
					toPercent(61, 255),
					toPercent(74, 255),
					toPercent(120, 255),
					0.25,
				]),
			).toEqual({
				h: 226.78,
				w: 0.2392,
				b: 0.5294,
				a: 0.25,
			});
			expect(
				rgbToHwb([
					toPercent(0, 255),
					toPercent(50, 255),
					toPercent(75, 255),
					0.999,
				]),
			).toEqual({
				h: 199.99,
				w: 0,
				b: 0.7059,
				a: 0.999,
			});
		});
	});
});
