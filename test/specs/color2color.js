'use strict';

describe('Color2Color', function () {
  it('should convert HEX to RGBA by default', function () {
    expect(color2color('#dfe')).toBe('rgba(221,255,238,1)');
  });
	it('should convert HEX to RGB', function(){
		expect(color2color('#036')).toBe('rgb(0,51,102)');
	})
});
