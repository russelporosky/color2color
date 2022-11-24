import { ColorDetectors } from './detectors';

describe('detectors', () => {
	const Detectors = ColorDetectors;

	describe('hex', () => {
		const Detector = Detectors.hex;

		it('converts Hex to fractions', () => {
			expect(Detector.normalize(Detector.re.exec('#abcdef') || [])).toEqual([
				0.6706, 0.8039, 0.9373, 1,
			]);
		});

		it('converts fractions to Hex', () => {
			expect(
				Detector.finalize({ r: 0.6706, g: 0.8039, b: 0.9373, a: 1 }),
			).toEqual({
				r: 'ab',
				g: 'cd',
				b: 'ef',
				a: 'ff',
			});
		});
	});

	describe('hex3', () => {
		const Detector = Detectors.hex3;

		it('converts Hex3 to fractions', () => {
			expect(Detector.normalize(Detector.re.exec('#abc') || [])).toEqual([
				0.6667, 0.7333, 0.8, 1,
			]);
		});
	});

	describe('hexa', () => {
		const Detector = Detectors.hexa;

		it('converts HexA to fractions', () => {
			expect(Detector.normalize(Detector.re.exec('#abcdef0a') || [])).toEqual([
				0.6706, 0.8039, 0.9373, 0.0392,
			]);
		});
	});

	describe('hexa4', () => {
		const Detector = Detectors.hexa4;

		it('converts HexA4 to fractions', () => {
			expect(Detector.normalize(Detector.re.exec('#abcd') || [])).toEqual([
				0.6667, 0.7333, 0.8, 0.8667,
			]);
		});
	});

	describe('hsb', () => {
		const Detector = Detectors.hsb;

		it('converts HSB to degrees and fractions within range', () => {
			expect(
				Detector.normalize(Detector.re.exec('hsb(3rad, 80%, 65%)') || []),
			).toEqual([171.89, 0.8, 0.65, 1]);
			expect(
				Detector.normalize(Detector.re.exec('hsb(-0.25turn, 110%, 10%)') || []),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('recognizes wacky spaces', () => {
			expect(
				Detector.normalize(
					Detector.re.exec('hsb(  -0.25turn ,110%,   10% )') || [],
				),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('converts fractions to HSB', () => {
			expect(Detector.finalize({ h: 171.89, s: 0.8, b: 0.65 })).toEqual({
				h: 172,
				s: 80,
				b: 65,
			});
		});
	});

	describe('hsl', () => {
		const Detector = Detectors.hsl;

		it('converts HSL to degrees and fractions within range', () => {
			expect(
				Detector.normalize(Detector.re.exec('hsl(3rad, 80%, 65%)') || []),
			).toEqual([171.89, 0.8, 0.65, 1]);
			expect(
				Detector.normalize(Detector.re.exec('hsl(-0.25turn, 110%, 10%)') || []),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('recognizes alternate format', () => {
			expect(
				Detector.normalize(Detector.re.exec('hsl(-0.25turn 110% 10%)') || []),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('recognizes wacky spaces', () => {
			expect(
				Detector.normalize(
					Detector.re.exec('hsl(   -0.25turn   110% , 10% )') || [],
				),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('converts fractions to HSLA', () => {
			expect(Detector.finalize({ h: 171.89, s: 0.8, l: 0.65, a: 1 })).toEqual({
				h: 172,
				s: 80,
				l: 65,
				a: 1,
			});
		});
	});

	describe('hsla', () => {
		const Detector = Detectors.hsla;

		it('converts HSLA to degrees and fractions within range', () => {
			expect(
				Detector.normalize(
					Detector.re.exec('hsla(3rad, 80%, 65%, 105%)') || [],
				),
			).toEqual([171.89, 0.8, 0.65, 1]);
			expect(
				Detector.normalize(
					Detector.re.exec('hsla(-0.25turn, 110%, 10%, 0.5)') || [],
				),
			).toEqual([270, 1, 0.1, 0.5]);
		});

		it('recognizes alternate format', () => {
			expect(
				Detector.normalize(
					Detector.re.exec('hsla(-0.25turn 110% 10% / 105%)') || [],
				),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('recognizes wacky spaces', () => {
			expect(
				Detector.normalize(
					Detector.re.exec('hsla(   -0.25turn   110% , 10%/50%)') || [],
				),
			).toEqual([270, 1, 0.1, 0.5]);
		});

		it('converts fractions to HSLA', () => {
			expect(Detector.finalize({ h: 171.89, s: 0.8, l: 0.65, a: 1 })).toEqual({
				h: 172,
				s: 80,
				l: 65,
				a: 1,
			});
		});
	});

	describe('hsv', () => {
		const Detector = Detectors.hsv;

		it('converts HSV to degrees and fractions within range', () => {
			expect(
				Detector.normalize(Detector.re.exec('hsv(3rad, 80%, 65%)') || []),
			).toEqual([171.89, 0.8, 0.65, 1]);
			expect(
				Detector.normalize(Detector.re.exec('hsv(-0.25turn, 110%, 10%)') || []),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('recognizes wacky spaces', () => {
			expect(
				Detector.normalize(
					Detector.re.exec('hsv(  -0.25turn ,110%,   10% )') || [],
				),
			).toEqual([270, 1, 0.1, 1]);
		});

		it('converts fractions to HSV', () => {
			expect(Detector.finalize({ h: 171.89, s: 0.8, v: 0.65 })).toEqual({
				h: 172,
				s: 80,
				v: 65,
			});
		});
	});

	describe('hwb', () => {
		const Detector = Detectors.hwb;

		describe('without alpha', () => {
			it('converts HWB to degrees and fractions within range', () => {
				expect(
					Detector.normalize(Detector.re.exec('hwb(3rad 80% 65%)') || []),
				).toEqual([171.89, 0.8, 0.65, 1]);
				expect(
					Detector.normalize(Detector.re.exec('hwb(-0.25turn 110% 10%)') || []),
				).toEqual([270, 1, 0.1, 1]);
			});

			it('recognizes wacky spaces', () => {
				expect(
					Detector.normalize(
						Detector.re.exec('hwb(   -0.25turn   110%  10%)') || [],
					),
				).toEqual([270, 1, 0.1, 1]);
			});
		});

		describe('with alpha', () => {
			it('converts HWB to degrees and fractions within range', () => {
				expect(
					Detector.normalize(
						Detector.re.exec('hwb(3rad 80% 65% / 105%)') || [],
					),
				).toEqual([171.89, 0.8, 0.65, 1]);
				expect(
					Detector.normalize(
						Detector.re.exec('hwb(-0.25turn 110% 10% / 0.5)') || [],
					),
				).toEqual([270, 1, 0.1, 0.5]);
			});

			it('recognizes wacky spaces', () => {
				expect(
					Detector.normalize(
						Detector.re.exec('hwb(   -0.25turn   110%  10%/50%)') || [],
					),
				).toEqual([270, 1, 0.1, 0.5]);
			});
		});

		it('converts fractions to HWB', () => {
			expect(
				Detector.finalize({ h: 171.89, w: 0.8, b: 0.65, a: 0.91 }),
			).toEqual({
				h: 172,
				w: 80,
				b: 65,
				a: 0.91,
			});
		});
	});

	describe('rgb', () => {
		const Detector = Detectors.rgb;

		it('converts RGB to fractions within range', () => {
			expect(
				Detector.normalize(Detector.re.exec('rgb(100, 200, 45)') || []),
			).toEqual([0.3922, 0.7843, 0.1765, 1]);
			expect(
				Detector.normalize(Detector.re.exec('rgb(100%, 50%, 70%)') || []),
			).toEqual([1, 0.5, 0.7, 1]);
			expect(
				Detector.normalize(Detector.re.exec('rgb(300, 200, 123445)') || []),
			).toEqual([1, 0.7843, 1, 1]);
		});

		it('recognizes alternate format', () => {
			expect(
				Detector.normalize(Detector.re.exec('rgb(100 300 45)') || []),
			).toEqual([0.3922, 1, 0.1765, 1]);
		});

		it('recognizes wacky spaces', () => {
			expect(
				Detector.normalize(Detector.re.exec('rgb( 100,300   45)') || []),
			).toEqual([0.3922, 1, 0.1765, 1]);
		});

		it('converts fractions to RGBA', () => {
			expect(
				Detector.finalize({ r: 0.6706, g: 0.8039, b: 0.9373, a: 1 }),
			).toEqual({
				r: 171,
				g: 205,
				b: 239,
				a: 1,
			});
		});
	});

	describe('rgba', () => {
		const Detector = Detectors.rgba;

		it('converts RGBA to fractions within range', () => {
			expect(
				Detector.normalize(Detector.re.exec('rgba(100, 200, 45, 0.75)') || []),
			).toEqual([0.3922, 0.7843, 0.1765, 0.75]);
			expect(
				Detector.normalize(
					Detector.re.exec('rgba(100%, 50%, 70%, 0.75)') || [],
				),
			).toEqual([1, 0.5, 0.7, 0.75]);
			expect(
				Detector.normalize(
					Detector.re.exec('rgba(300, 200, 123445, 1.1)') || [],
				),
			).toEqual([1, 0.7843, 1, 1]);
		});

		it('recognizes alternate format', () => {
			expect(
				Detector.normalize(Detector.re.exec('rgba(100 300 45 / 75%)') || []),
			).toEqual([0.3922, 1, 0.1765, 0.75]);
		});

		it('recognizes wacky spaces', () => {
			expect(
				Detector.normalize(Detector.re.exec('rgba( 100,300   45 / 0)') || []),
			).toEqual([0.3922, 1, 0.1765, 0]);
		});
	});
});
