'use strict';

describe('Color2Color', function () {
	it('should convert HEX to RGBA by default', function () {
		expect(color2color('#dfe')).toBe('rgba(221,255,238,1)');
	});
	it('should convert HEX to RGB', function () {
		expect(color2color('#036', 'rgb')).toBe('rgb(0,51,102)');
	});
	it('should returns the same as the RGBA input', function () {
		expect(color2color('rgba(64,64,64,0.5)')).toBe('rgba(64,64,64,0.5)');
	});
	it('should convert HEX to RGBA, calculating opacity', function () {
		expect(color2color('#dfe', 'rgba', true)).toBe('rgba(0,255,128,0.1333)');
	});
	it('should convert HSLA to RGBA', function () {
		expect(color2color('hsla(109,100%,37%,1)')).toBe('rgba(35,189,0,1)');
	});
	it('should convert RGBA to HSLA', function () {
		expect(color2color('rgba(35,189,0,0.75)', 'hsl')).toBe('hsl(109,100%,37%)');
	});
	it('should convert BLACK to #000', function () {
		expect(color2color('black', 'hex')).toBe('#000000');
	});
	it('should convert WHITE to RGBA', function () {
		expect(color2color('white')).toBe('rgba(255,255,255,1)');
	});
	it('should convert #HEX to #HHEEXX', function () {
		expect(color2color('#000', 'hex')).toBe('#000000');
	});
});
