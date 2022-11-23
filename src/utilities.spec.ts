import {
	capitalizeWord,
	clamp,
	clampAngle,
	clampPercent,
	clampPercentFloat,
	fromPercent,
	hexToNumber,
	hueToRgb,
	numberToHex,
	toDegrees,
	toPercent,
} from './utilities';

describe('utilities', () => {
	describe('capitalizeWord', () => {
		it('capitalizes the first letter of the string', () => {
			expect(capitalizeWord('test')).toEqual('Test');
			expect(capitalizeWord('test this')).toEqual('Test this');
		});

		it("has no effect if the first character can't be capitalized", () => {
			expect(capitalizeWord(' test')).toEqual(' test');
			expect(capitalizeWord('3 amigos')).toEqual('3 amigos');
		});
	});

	describe('clamp', () => {
		it('does not clamp when the number is within range', () => {
			expect(clamp(0.5, 0, 1)).toEqual(0.5);
			expect(clamp(192, 0, 255)).toEqual(192);
		});

		it('does clamp when the number is above the maximum', () => {
			expect(clamp(1.005, 0, 1)).toEqual(1);
			expect(clamp(-43, -100, -50)).toEqual(-50);
		});

		it('does clamp when the number is below the minimum', () => {
			expect(clamp(5, 10, 100)).toEqual(10);
			expect(clamp(-53, -50, 50)).toEqual(-50);
		});
	});

	describe('clampAngle', () => {
		it('does not clamp when the number is within range', () => {
			expect(clampAngle(180)).toEqual(180);
		});

		it('does clamp when the number is above the maximum', () => {
			expect(clampAngle(500)).toEqual(360);
		});

		it('does clamp when the number is below the minimum', () => {
			expect(clampAngle(-10)).toEqual(0);
		});
	});

	describe('clampPercent', () => {
		it('does not clamp when the number is within range', () => {
			expect(clampPercent(90)).toEqual(90);
		});

		it('does clamp when the number is above the maximum', () => {
			expect(clampPercent(500)).toEqual(100);
		});

		it('does clamp when the number is below the minimum', () => {
			expect(clampPercent(-10)).toEqual(0);
		});
	});

	describe('clampPercentFloat', () => {
		it('does not clamp when the number is within range', () => {
			expect(clampPercentFloat(0.9)).toEqual(0.9);
		});

		it('does clamp when the number is above the maximum', () => {
			expect(clampPercentFloat(5)).toEqual(1);
		});

		it('does clamp when the number is below the minimum', () => {
			expect(clampPercentFloat(-0.1)).toEqual(0);
		});
	});

	describe('hexToNumber', () => {
		it('converts from hexadecimal to decimal', () => {
			expect(hexToNumber('f')).toEqual(15);
			expect(hexToNumber('cd')).toEqual(205);
		});
	});

	describe('hueToRgb', () => {
		it('converts from hexadecimal to decimal', () => {
			expect(hueToRgb(0, 180, 0.7, 0.8)).toEqual(0.66);
			expect(hueToRgb(4, 263, 0.6712, 0.4358)).toEqual(0.7283);
		});
	});

	describe('fromPercent', () => {
		it('converts from a float to a number using the default maximum', () => {
			expect(fromPercent(0.5)).toEqual(50);
			expect(fromPercent(0.6667)).toEqual(66.67);
		});

		it('converts from a float to a number with a given maximum', () => {
			expect(fromPercent(0.25, 500)).toEqual(125);
			expect(fromPercent(0, 73)).toEqual(0);
			expect(fromPercent(1, 360)).toEqual(360);
			expect(fromPercent(1.5, 100)).toEqual(150);
		});
	});

	describe('numberToHex', () => {
		it('converts from RGB value to hex', () => {
			expect(numberToHex(0)).toEqual('00');
			expect(numberToHex(255)).toEqual('ff');
			expect(numberToHex(221)).toEqual('dd');
			expect(numberToHex(74)).toEqual('4a');
		});
	});

	describe('toDegrees', () => {
		it('uses `deg` as default unit', () => {
			expect(toDegrees('180')).toEqual(180);
			expect(toDegrees('180deg')).toEqual(180);
			expect(toDegrees('47')).toEqual(47);
			expect(toDegrees('47deg')).toEqual(47);
		});

		it('converts gradians to degrees', () => {
			expect(toDegrees('100grad')).toEqual(90);
			expect(toDegrees('150grad')).toEqual(135);
			expect(toDegrees('600grad')).toEqual(540);
		});

		it('converts radians to degrees', () => {
			expect(toDegrees('1.5708rad')).toEqual(90);
			expect(toDegrees('5rad')).toEqual(286.48);
			expect(toDegrees('7rad')).toEqual(401.07);
		});

		it('converts turns to degrees', () => {
			expect(toDegrees('.2turn')).toEqual(72);
			expect(toDegrees('1turn')).toEqual(360);
			expect(toDegrees('1.5turn')).toEqual(540);
		});

		it('handles negative values', () => {
			expect(toDegrees('-0.25turn')).toEqual(270);
		});
	});

	describe('toPercent', () => {
		it('converts a number to a percent float', () => {
			expect(toPercent(30, 90)).toEqual(0.3333);
			expect(toPercent(123, 256)).toEqual(0.4805);
			expect(toPercent(256, 256)).toEqual(1);
		});
	});
});
