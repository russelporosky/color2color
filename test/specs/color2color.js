'use strict';

describe('Color2Color', function () {
  it('should convert HEX to RGBA', function () {
    expect(color2color('#dfe')).toBe('rgba(221,255,238,1)');
  });
});
