(function (exports) {
  'use strict';

  var aliceblue = "#f0f8ff";
  var antiquewhite = "#faebd7";
  var aqua = "#00ffff";
  var aquamarine = "#7fffd4";
  var azure = "#f0ffff";
  var beige = "#f5f5dc";
  var bisque = "#ffe4c4";
  var black = "#000000";
  var blanchedalmond = "#ffebcd";
  var blue = "#0000ff";
  var blueviolet = "#8a2be2";
  var brown = "#a52a2a";
  var burlywood = "#deb887";
  var cadetblue = "#5f9ea0";
  var chartreuse = "#7fff00";
  var chocolate = "#d2691e";
  var coral = "#ff7f50";
  var cornflowerblue = "#6495ed";
  var cornsilk = "#fff8dc";
  var crimson = "#dc143c";
  var cyan = "#00ffff";
  var darkblue = "#00008b";
  var darkcyan = "#008b8b";
  var darkgoldenrod = "#b8860b";
  var darkgray = "#a9a9a9";
  var darkgreen = "#006400";
  var darkgrey = "#a9a9a9";
  var darkkhaki = "#bdb76b";
  var darkmagenta = "#8b008b";
  var darkolivegreen = "#556b2f";
  var darkorange = "#ff8c00";
  var darkorchid = "#9932cc";
  var darkred = "#8b0000";
  var darksalmon = "#e9967a";
  var darkseagreen = "#8fbc8f";
  var darkslateblue = "#483d8b";
  var darkslategray = "#2f4f4f";
  var darkslategrey = "#2f4f4f";
  var darkturquoise = "#00ced1";
  var darkviolet = "#9400d3";
  var deeppink = "#ff1493";
  var deepskyblue = "#00bfff";
  var dimgray = "#696969";
  var dimgrey = "#696969";
  var dodgerblue = "#1e90ff";
  var firebrick = "#b22222";
  var floralwhite = "#fffaf0";
  var forestgreen = "#228b22";
  var fuchsia = "#ff00ff";
  var gainsboro = "#dcdcdc";
  var ghostwhite = "#f8f8ff";
  var goldenrod = "#daa520";
  var gold = "#ffd700";
  var gray = "#808080";
  var green = "#008000";
  var greenyellow = "#adff2f";
  var grey = "#808080";
  var honeydew = "#f0fff0";
  var hotpink = "#ff69b4";
  var indianred = "#cd5c5c";
  var indigo = "#4b0082";
  var ivory = "#fffff0";
  var khaki = "#f0e68c";
  var lavenderblush = "#fff0f5";
  var lavender = "#e6e6fa";
  var lawngreen = "#7cfc00";
  var lemonchiffon = "#fffacd";
  var lightblue = "#add8e6";
  var lightcoral = "#f08080";
  var lightcyan = "#e0ffff";
  var lightgoldenrodyellow = "#fafad2";
  var lightgray = "#d3d3d3";
  var lightgreen = "#90ee90";
  var lightgrey = "#d3d3d3";
  var lightpink = "#ffb6c1";
  var lightsalmon = "#ffa07a";
  var lightseagreen = "#20b2aa";
  var lightskyblue = "#87cefa";
  var lightslategray = "#778899";
  var lightslategrey = "#778899";
  var lightsteelblue = "#b0c4de";
  var lightyellow = "#ffffe0";
  var lime = "#00ff00";
  var limegreen = "#32cd32";
  var linen = "#faf0e6";
  var magenta = "#ff00ff";
  var maroon = "#800000";
  var mediumaquamarine = "#66cdaa";
  var mediumblue = "#0000cd";
  var mediumorchid = "#ba55d3";
  var mediumpurple = "#9370db";
  var mediumseagreen = "#3cb371";
  var mediumslateblue = "#7b68ee";
  var mediumspringgreen = "#00fa9a";
  var mediumturquoise = "#48d1cc";
  var mediumvioletred = "#c71585";
  var midnightblue = "#191970";
  var mintcream = "#f5fffa";
  var mistyrose = "#ffe4e1";
  var moccasin = "#ffe4b5";
  var navajowhite = "#ffdead";
  var navy = "#000080";
  var oldlace = "#fdf5e6";
  var olive = "#808000";
  var olivedrab = "#6b8e23";
  var orange = "#ffa500";
  var orangered = "#ff4500";
  var orchid = "#da70d6";
  var palegoldenrod = "#eee8aa";
  var palegreen = "#98fb98";
  var paleturquoise = "#afeeee";
  var palevioletred = "#db7093";
  var papayawhip = "#ffefd5";
  var peachpuff = "#ffdab9";
  var peru = "#cd853f";
  var pink = "#ffc0cb";
  var plum = "#dda0dd";
  var powderblue = "#b0e0e6";
  var purple = "#800080";
  var rebeccapurple = "#663399";
  var red = "#ff0000";
  var rosybrown = "#bc8f8f";
  var royalblue = "#4169e1";
  var saddlebrown = "#8b4513";
  var salmon = "#fa8072";
  var sandybrown = "#f4a460";
  var seagreen = "#2e8b57";
  var seashell = "#fff5ee";
  var sienna = "#a0522d";
  var silver = "#c0c0c0";
  var skyblue = "#87ceeb";
  var slateblue = "#6a5acd";
  var slategray = "#708090";
  var slategrey = "#708090";
  var snow = "#fffafa";
  var springgreen = "#00ff7f";
  var steelblue = "#4682b4";
  var tan = "#d2b48c";
  var teal = "#008080";
  var thistle = "#d8bfd8";
  var tomato = "#ff6347";
  var turquoise = "#40e0d0";
  var violet = "#ee82ee";
  var wheat = "#f5deb3";
  var white = "#ffffff";
  var whitesmoke = "#f5f5f5";
  var yellow = "#ffff00";
  var yellowgreen = "#9acd32";
  var colorNames = {
  	aliceblue: aliceblue,
  	antiquewhite: antiquewhite,
  	aqua: aqua,
  	aquamarine: aquamarine,
  	azure: azure,
  	beige: beige,
  	bisque: bisque,
  	black: black,
  	blanchedalmond: blanchedalmond,
  	blue: blue,
  	blueviolet: blueviolet,
  	brown: brown,
  	burlywood: burlywood,
  	cadetblue: cadetblue,
  	chartreuse: chartreuse,
  	chocolate: chocolate,
  	coral: coral,
  	cornflowerblue: cornflowerblue,
  	cornsilk: cornsilk,
  	crimson: crimson,
  	cyan: cyan,
  	darkblue: darkblue,
  	darkcyan: darkcyan,
  	darkgoldenrod: darkgoldenrod,
  	darkgray: darkgray,
  	darkgreen: darkgreen,
  	darkgrey: darkgrey,
  	darkkhaki: darkkhaki,
  	darkmagenta: darkmagenta,
  	darkolivegreen: darkolivegreen,
  	darkorange: darkorange,
  	darkorchid: darkorchid,
  	darkred: darkred,
  	darksalmon: darksalmon,
  	darkseagreen: darkseagreen,
  	darkslateblue: darkslateblue,
  	darkslategray: darkslategray,
  	darkslategrey: darkslategrey,
  	darkturquoise: darkturquoise,
  	darkviolet: darkviolet,
  	deeppink: deeppink,
  	deepskyblue: deepskyblue,
  	dimgray: dimgray,
  	dimgrey: dimgrey,
  	dodgerblue: dodgerblue,
  	firebrick: firebrick,
  	floralwhite: floralwhite,
  	forestgreen: forestgreen,
  	fuchsia: fuchsia,
  	gainsboro: gainsboro,
  	ghostwhite: ghostwhite,
  	goldenrod: goldenrod,
  	gold: gold,
  	gray: gray,
  	green: green,
  	greenyellow: greenyellow,
  	grey: grey,
  	honeydew: honeydew,
  	hotpink: hotpink,
  	indianred: indianred,
  	indigo: indigo,
  	ivory: ivory,
  	khaki: khaki,
  	lavenderblush: lavenderblush,
  	lavender: lavender,
  	lawngreen: lawngreen,
  	lemonchiffon: lemonchiffon,
  	lightblue: lightblue,
  	lightcoral: lightcoral,
  	lightcyan: lightcyan,
  	lightgoldenrodyellow: lightgoldenrodyellow,
  	lightgray: lightgray,
  	lightgreen: lightgreen,
  	lightgrey: lightgrey,
  	lightpink: lightpink,
  	lightsalmon: lightsalmon,
  	lightseagreen: lightseagreen,
  	lightskyblue: lightskyblue,
  	lightslategray: lightslategray,
  	lightslategrey: lightslategrey,
  	lightsteelblue: lightsteelblue,
  	lightyellow: lightyellow,
  	lime: lime,
  	limegreen: limegreen,
  	linen: linen,
  	magenta: magenta,
  	maroon: maroon,
  	mediumaquamarine: mediumaquamarine,
  	mediumblue: mediumblue,
  	mediumorchid: mediumorchid,
  	mediumpurple: mediumpurple,
  	mediumseagreen: mediumseagreen,
  	mediumslateblue: mediumslateblue,
  	mediumspringgreen: mediumspringgreen,
  	mediumturquoise: mediumturquoise,
  	mediumvioletred: mediumvioletred,
  	midnightblue: midnightblue,
  	mintcream: mintcream,
  	mistyrose: mistyrose,
  	moccasin: moccasin,
  	navajowhite: navajowhite,
  	navy: navy,
  	oldlace: oldlace,
  	olive: olive,
  	olivedrab: olivedrab,
  	orange: orange,
  	orangered: orangered,
  	orchid: orchid,
  	palegoldenrod: palegoldenrod,
  	palegreen: palegreen,
  	paleturquoise: paleturquoise,
  	palevioletred: palevioletred,
  	papayawhip: papayawhip,
  	peachpuff: peachpuff,
  	peru: peru,
  	pink: pink,
  	plum: plum,
  	powderblue: powderblue,
  	purple: purple,
  	rebeccapurple: rebeccapurple,
  	red: red,
  	rosybrown: rosybrown,
  	royalblue: royalblue,
  	saddlebrown: saddlebrown,
  	salmon: salmon,
  	sandybrown: sandybrown,
  	seagreen: seagreen,
  	seashell: seashell,
  	sienna: sienna,
  	silver: silver,
  	skyblue: skyblue,
  	slateblue: slateblue,
  	slategray: slategray,
  	slategrey: slategrey,
  	snow: snow,
  	springgreen: springgreen,
  	steelblue: steelblue,
  	tan: tan,
  	teal: teal,
  	thistle: thistle,
  	tomato: tomato,
  	turquoise: turquoise,
  	violet: violet,
  	wheat: wheat,
  	white: white,
  	whitesmoke: whitesmoke,
  	yellow: yellow,
  	yellowgreen: yellowgreen
  };

  /**
   * This is a collection of interfaces and types for the various color models, definitions, and
   * converter methods.
   *
   * @module
   */
  /**
   * These are the available color formats that can be converted to.
   */
  var ColorName;
  (function (ColorName) {
      ColorName["HEX"] = "hex";
      ColorName["HEXA"] = "hexa";
      ColorName["HSB"] = "hsb";
      ColorName["HSL"] = "hsl";
      ColorName["HSLA"] = "hsla";
      ColorName["HSV"] = "hsv";
      ColorName["HWB"] = "hwb";
      ColorName["RGB"] = "rgb";
      ColorName["RGBA"] = "rgba";
  })(ColorName || (ColorName = {}));
  /**
   * These are the additional color formats supported as an _input_ string.
   */
  var ColorDefinitionName;
  (function (ColorDefinitionName) {
      ColorDefinitionName["HEX3"] = "hex3";
      ColorDefinitionName["HEXA4"] = "hexa4";
  })(ColorDefinitionName || (ColorDefinitionName = {}));

  /**
   * A collection of utility functions and constants used by the color conversion, normalization, and finalization
   * methods.
   *
   * @module
   */
  var AngleIndex = 1;
  var AngleTypeIndex = 2;
  var DegreesInRadian = 180;
  var GradiansInCircle = 400;
  var HexRadix = 16;
  var HexNumberLength = 2;
  var MinPercent = 0;
  /** The index used for opacity when a string is converted via regex. */
  var AlphaIndex = 4;
  /** The index for blackness in HWB colors. */
  var BlacknessIndex = 3;
  /** The index for blue in HEX[A] and RGB[A] colors. */
  var BlueIndex = 3;
  /** The index for brightness in HSB colors. */
  var BrightnessIndex = 3;
  /** When not included, the default opacity to use. */
  var DefaultOpacity = 1;
  /** The number of degrees used for angle calculations. */
  var DegreesInCircle = 360;
  /** The index for green in HEX[A] and RGB[A] colors. */
  var GreenIndex = 2;
  /** The index for hue in HSB, HSL[A], and HWB colors. */
  var HueIndex = 1;
  /** The index for lightness in HSL[A] colors. */
  var LightnessIndex = 3;
  /** The precision for float calculations. */
  var MaxFixedFloat = 4;
  /** The precision used for numeric calculations. */
  var MaxFixedNumber = 2;
  /** The maximum value of a percentage. */
  var MaxPercent = 100;
  /** The maximum value of a percentage fraction. */
  var MaxPercentFloat = 1;
  /** The maximum value of an RGB value. */
  var MaxRgb = 255;
  /** The smallest number used for degrees in an angle. */
  var MinAngle = 0;
  /** The index for red in HEX[A] and RGB[A] colors. */
  var RedIndex = 1;
  /** The index for saturation in HSL[A] colors. */
  var SaturationIndex = 2;
  /** The index for value in HSV colors. */
  var ValueIndex = 3;
  /** The index for whiteness in HWB colors. */
  var WhitenessIndex = 2;
  /**
   * Clamps a number to be between a range, inclusive.
   *
   * @example
   * clamp(53, 0, 255) // return 53
   * clamp(105, 0, 100) // return 100
   *
   * @param n The number to clamp.
   * @param min The lowest amount the number can be.
   * @param max The highest amount the number can be.
   */
  var clamp = function (n, min, max) {
      return Math.min(Math.max(n, min), max);
  };
  /**
   * Clamps a number to be between 0 and 360, inclusive.
   *
   * @example
   * clamp(53) // return 53
   * clamp(580) // return 360
   *
   * @param n The number to clamp.
   */
  var clampAngle = function (n) {
      return clamp(n, MinAngle, DegreesInCircle);
  };
  /**
   * Clamps a number to be between 0 and 100, inclusive.
   *
   * @example
   * clamp(53) // return 53
   * clamp(-10) // return 0
   *
   * @param n The number to clamp.
   */
  var clampPercent = function (n) {
      return clamp(n, MinPercent, MaxPercent);
  };
  /**
   * Clamps a number to be between 0 and 1, inclusive.
   *
   * @example
   * clamp(0.53) // return 0.53
   * clamp(-0.1) // return 0
   *
   * @param n The number to clamp.
   */
  var clampPercentFloat = function (n) {
      return clamp(n, MinPercent, MaxPercentFloat);
  };
  /**
   * Convert a hexadecimal number to a Base-10 number.
   *
   * @example
   * hexToNumber('f') // return 15
   *
   * @param hex The number to convert.
   */
  var hexToNumber = function (hex) { return parseInt(hex, HexRadix); };
  /**
   * Converts a hue to an RGB percentage.
   *
   * @example
   * hueToRgb(0, 180, 0.7, 0.8) // return 0.94
   *
   * @param modifier
   * @param hue The hue in degrees (0 to 360).
   * @param saturation The percentage of saturation to use (0 to 1).
   * @param lightness The percentage of lightness to use (0 to 1).
   */
  var hueToRgb = function (modifier, hue, saturation, lightness) {
      var K = (modifier + hue / 30) % 12;
      var A = saturation * Math.min(lightness, 1 - lightness);
      return +(lightness - A * Math.max(-1, Math.min(K - 3, 9 - K, 1))).toFixed(MaxFixedFloat);
  };
  /**
   * Convert a percent between 0 and 1 to a number.
   *
   * @example
   * fromPercent(0.5, 150) // return 75
   *
   * @param percent The percent as a float between 0 and 1.
   * @param maxDecimal The number that would become 100%.
   */
  var fromPercent = function (percent, maxDecimal) {
      if (maxDecimal === void 0) { maxDecimal = MaxPercent; }
      return maxDecimal * percent;
  };
  /**
   * Convert a decimal number to hexadecimal. Adds a leading 0 if needed to be two digits in total.
   *
   * @example
   * numberToHex(221) // return 'dd'
   *
   * @param n The number (an RGB number between 0 and 255) to convert to hexadecimal.
   */
  var numberToHex = function (n) {
      return "0".concat(Math.round(n).toString(HexRadix)).slice(-HexNumberLength);
  };
  /**
   * Convert degrees, gradians, radians, and turns to degrees. If no unit is given in the string, degrees is used.
   *
   * @example
   * toDegrees('180') // return 180
   * toDegrees('180deg') // return 180
   * toDegrees('0.75turn') // return 270
   * toDegrees('-0.25turn') // return 270
   *
   * @param angle A string comprised of an angle and a unit of `deg|grad|rad|turn`; if no unit is given, `deg` is used.
   */
  var toDegrees = function (angle) {
      var _a, _b;
      var Angle = /^\s*(-?\d*\.?\d+)(deg|rad|turn|grad)?$/i.exec(angle);
      var response = 0;
      if (Angle && Angle.length > 1) {
          var AngleAmount = Angle[AngleIndex];
          var AngleType = (_b = (_a = Angle[AngleTypeIndex]) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : 'deg';
          switch (AngleType) {
              case 'deg':
                  response = +AngleAmount;
                  break;
              case 'grad':
                  response = (+AngleAmount / GradiansInCircle) * DegreesInCircle;
                  break;
              case 'rad':
                  response = (+AngleAmount * DegreesInRadian) / Math.PI;
                  break;
              case 'turn':
                  response = +AngleAmount * DegreesInCircle;
                  break;
          }
      }
      // we don't care about direction, so just ensure degrees is positive
      while (response < MinAngle) {
          response += DegreesInCircle;
      }
      return +response.toFixed(MaxFixedNumber);
  };
  /**
   * Convert a decimal number to a percentage between 0 and 1.
   *
   * @example
   * toPercent(75, 150) // return 0.5
   *
   * @param amount The number to convert to percent.
   * @param limit The amount that would become 100%.
   */
  var toPercent = function (amount, limit) {
      return +(amount / limit).toFixed(MaxFixedFloat);
  };

  /**
   * This is a collection of methods that take normalized RGBA values (0..1) and outputs normalized values for each
   * supported color model. Rgb -> hex and rgb -> rgb are passthroughs.
   *
   * @module
   */
  /**
   * Converts an RGB color to a HEXA color.
   *
   * @example
   * rgbToHex(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
   * rgbToHex(0.8667, 1, 0.9333, 0.6) // return { r: 0.8667, g: 1, b: 0.9333, a: 0.6 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToHex = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return rgbToHexa([r, g, b, a]);
  };
  /**
   * Converts an RGB color to a HEXA color.
   *
   * @example
   * rgbToHexa(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
   * rgbToHexa(0.8667, 1, 0.9333, 0.6) // return { r: 0.8667, g: 1, b: 0.9333, a: 0.6 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToHexa = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return rgbToRgba([r, g, b, a]);
  };
  /**
   * Converts an RGB color to an HSB color.
   *
   * @example
   * rgbToHsb(0.8667, 1, 0.9333) // return { h: 226.78, s: 0.4917, b: 0.4706 }
   *
   * @param rgb - Color components as fractions.
   */
  var rgbToHsb = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2];
      var Hsla = rgbToHsl([r, g, b]);
      var Saturation = Hsla.s * (Hsla.l < 0.5 ? Hsla.l : 1 - Hsla.l);
      return {
          h: Hsla.h,
          s: +((2 * Saturation) / (Hsla.l + Saturation)).toFixed(MaxFixedFloat),
          b: +(Hsla.l + Saturation).toFixed(MaxFixedFloat),
      };
  };
  /**
   * Converts an RGB[A] color to an HSLA color.
   *
   * @example
   * rgbToHsl(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.3260, l: 0.3549, a: 1 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToHsl = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return rgbToHsla([r, g, b, a]);
  };
  /**
   * Converts an RGB[A] color to an HSLA color.
   *
   * @example
   * rgbToHsla(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.3260, l: 0.3549, a: 1 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToHsla = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      var MaxLight = Math.max(r, g, b);
      var MinLight = Math.min(r, g, b);
      var LightnessDiff = MaxLight - MinLight;
      var Lightness = (MaxLight + MinLight) / 2;
      var hue = 0;
      var saturation = 0;
      if (LightnessDiff !== 0) {
          saturation =
              Lightness === 0 || Lightness === 1
                  ? 0
                  : (MaxLight - Lightness) / Math.min(Lightness, 1 - Lightness);
          switch (MaxLight) {
              case r:
                  hue = (g - b) / LightnessDiff + (g < b ? 6 : 0);
                  break;
              case g:
                  hue = (b - r) / LightnessDiff + 2;
                  break;
              case b:
                  hue = (r - g) / LightnessDiff + 4;
                  break;
          }
          hue *= 60;
      }
      return {
          h: +hue.toFixed(MaxFixedNumber),
          s: +saturation.toFixed(MaxFixedFloat),
          l: +Lightness.toFixed(MaxFixedFloat),
          a: a,
      };
  };
  /**
   * Converts an RGB color to an HSV color.
   *
   * @example
   * rgbToHsv(0.8667, 1, 0.9333) // return { h: 226.78, s: 0.4917, v: 0.4706 }
   *
   * @param rgb - Color components as fractions.
   */
  var rgbToHsv = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2];
      var Hsb = rgbToHsb([r, g, b]);
      return {
          h: Hsb.h,
          s: Hsb.s,
          v: Hsb.b,
      };
  };
  /**
   * Converts an RGB[A] color to an HWB color.
   *
   * @example
   * rgbToHwb(0.8667, 1, 0.9333) // return { h: 226.78, w: 0.2392, b: 0.5294, a: 1 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToHwb = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      var Hsla = rgbToHsl([r, g, b, a]);
      var White = Math.min(r, g, b);
      var Black = 1 - Math.max(r, g, b);
      return {
          h: Hsla.h,
          w: White,
          b: Black,
          a: Hsla.a,
      };
  };
  /**
   * Passthrough for RGB[A] to RGBA conversion.
   *
   * @example
   * rgbToRgb(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToRgb = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return rgbToRgba([r, g, b, a]);
  };
  /**
   * Passthrough for RGB[A] to RGBA conversion.
   *
   * @example
   * rgbToRgba(0.8667, 1, 0.9333) // return { r: 0.8667, g: 1, b: 0.9333, a: 1 }
   *
   * @param rgba - Color components as fractions.
   */
  var rgbToRgba = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return ({
          r: r,
          g: g,
          b: b,
          a: a,
      });
  };

  /**
   * This is a collection of methods that take normalized RGBA values (0..1) and outputs normalized values for each
   * supported color model. Hex -> hex and hex -> rgb are passthroughs.
   *
   * @module
   */
  /**
   * Converts a hexadecimal RGB[A] color to a HEXA color.
   *
   * @example
   * hexToHex(0.6706, 0.8039, 0.9373) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 1 }
   * hexToHex(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToHex = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hexToHexa([r, g, b, a]);
  };
  /**
   * Converts a hexadecimal RGB[A] color to a HEXA color.
   *
   * @example
   * hexToHexa(0.6706, 0.8039, 0.9373, 1) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 1 }
   * hexToHexa(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToHexa = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return ({
          r: r,
          g: g,
          b: b,
          a: a,
      });
  };
  /**
   * Converts a hexadecimal RGB color to an HSB color.
   *
   * @example
   * hexToHsb(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.4917, b: 0.4706 }
   *
   * @param rgb - Color components as fractions.
   */
  var hexToHsb = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2];
      return rgbToHsb([r, g, b]);
  };
  /**
   * Converts a hexadecimal RGB[A] color to an HSLA color.
   *
   * @example
   * hexToHsl(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.326, l: 0.3549, a: 1 }
   * hexToHsl(0.2392, 0.2902, 0.4706, 0.251) // return { h: 226.78, s: 0.326, l: 0.3549, a: 0.251 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToHsl = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hexToHsla([r, g, b, a]);
  };
  /**
   * Converts a hexadecimal RGB[A] color to an HSLA color.
   *
   * @example
   * hexToHsla(0.2392, 0.2902, 0.4706, 1) // return { h: 226.78, s: 0.326, l: 0.3549, a: 1 }
   * hexToHsla(0.2392, 0.2902, 0.4706, 0.251) // return { h: 226.78, s: 0.326, l: 0.3549, a: 0.251 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToHsla = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return rgbToHsl([r, g, b, a]);
  };
  /**
   * Converts a hexadecimal RGB color to an HSV color.
   *
   * @example
   * hexToHsv(0.2392, 0.2902, 0.4706) // return { h: 226.78, s: 0.4917, v: 0.4706 }
   *
   * @param rgb - Color components as fractions.
   */
  var hexToHsv = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2];
      return rgbToHsv([r, g, b]);
  };
  /**
   * Converts a hexadecimal RGB[A] color to an HWB color.
   *
   * @example
   * hexToHwb(0.2392, 0.2902, 0.4706) // return { h: 226.78, w: 0.2392, b: 0.5294, a: 1 }
   * hexToHwb(0.2392, 0.2902, 0.4706, 0.251) // return { h: 226.78, w: 0.2392, b: 0.5294, a: 0.251 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToHwb = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return rgbToHwb([r, g, b, a]);
  };
  /**
   * Converts a hexadecimal RGB[A] color to an RGBA color.
   *
   * @example
   * hexToRgb(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToRgb = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hexToRgba([r, g, b, a]);
  };
  /**
   * Converts a hexadecimal RGB[A] color to an RGBA color.
   *
   * @example
   * hexToRgba(0.6706, 0.8039, 0.9373, 0.0392) // return { r: 0.6706, g: 0.8039, b: 0.9373, a: 0.0392 }
   *
   * @param rgba - Color components as fractions.
   */
  var hexToRgba = function (_a) {
      var r = _a[0], g = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return ({
          r: r,
          g: g,
          b: b,
          a: a,
      });
  };

  /**
   * This is a collection of methods that take normalized HSLA values and outputs normalized values for each
   * supported color model. Hsl -> hsl is a passthrough.
   *
   * @module
   */
  /**
   * Converts an HSL[A] color to a HEXA color.
   *
   * @example
   * hslToHex('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHex = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hslToHexa([h, s, l, a]);
  };
  /**
   * Converts an HSL[A] color to a HEXA color.
   *
   * @example
   * hslToHexa('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHexa = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hslToRgb([h, s, l, a]);
  };
  /**
   * Converts an HSL color to an HSB color.
   *
   * @example
   * hslToHsb('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.5, b: 0.4667 }
   *
   * @param hsl - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHsb = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2];
      var Angle = toDegrees(h);
      var Saturation = s * (l < 0.5 ? l : 1 - l);
      return {
          h: Angle,
          s: +((2 * Saturation) / (l + Saturation)).toFixed(MaxFixedFloat),
          b: +(l + Saturation).toFixed(MaxFixedFloat),
      };
  };
  /**
   * Passthrough for HSL[A] to HSLA conversion.
   *
   * @example
   * hslToHsl('227deg', 0.3333, 0.35) // return { h: 227, s: 0.3333, l: 0.35, a: 1 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHsl = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hslToHsla([h, s, l, a]);
  };
  /**
   * Passthrough for HSL[A] to HSLA conversion.
   *
   * @example
   * hslToHsla('227deg', 0.3333, 0.35) // return { h: 227, s: 0.3333, l: 0.35, a: 1 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHsla = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return ({
          h: toDegrees(h),
          s: s,
          l: l,
          a: a,
      });
  };
  /**
   * Converts an HSL color to an HSV color.
   *
   * @example
   * hslToHsv('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.5, v: 0.4667 }
   *
   * @param hsl - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHsv = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2];
      var Hsb = hslToHsb([h, s, l]);
      return {
          h: Hsb.h,
          s: Hsb.s,
          v: Hsb.b,
      };
  };
  /**
   * Converts an HSL[A] color to an HWB color.
   *
   * @example
   * hslToHwb('227deg', 0.3333, 0.35, 0.75) // return { h: 227, w: 0.2334, b: 0.5333, a: 0.75 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToHwb = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      var Angle = toDegrees(h);
      var Hsb = hslToHsb([h, s, l]);
      var Blackness = 1 - Hsb.b;
      var Whiteness = (1 - Hsb.s) * Hsb.b;
      return {
          h: Angle,
          w: +Whiteness.toFixed(MaxFixedFloat),
          b: +Blackness.toFixed(MaxFixedFloat),
          a: a,
      };
  };
  /**
   * Converts an HSL[A] color to an RGBA color.
   *
   * @example
   * hslToRgb('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToRgb = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hslToRgba([h, s, l, a]);
  };
  /**
   * Converts an HSL[A] color to an RGBA color.
   *
   * @example
   * hslToRgba('227deg', 0.3333, 0.35) // return { r: 0.2333, g: 0.2839, b: 0.4667, a: 1 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hslToRgba = function (_a) {
      var h = _a[0], s = _a[1], l = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      var Angle = toDegrees(h) % DegreesInCircle;
      var Saturation = s === MaxPercentFloat ? s : s % MaxPercentFloat;
      var Lightness = l === MaxPercentFloat ? l : l % MaxPercentFloat;
      var Rgba = {
          r: 0,
          g: 0,
          b: 0,
          a: a,
      };
      if (Saturation === 0) {
          Rgba.r = 0;
          Rgba.g = 0;
          Rgba.b = 0;
      }
      else {
          Rgba.r = hueToRgb(0, Angle, Saturation, Lightness);
          Rgba.g = hueToRgb(8, Angle, Saturation, Lightness);
          Rgba.b = hueToRgb(4, Angle, Saturation, Lightness);
      }
      return Rgba;
  };

  /**
   * This is a collection of methods that take normalized HSB values and outputs normalized values for each
   * supported color model. Hsb -> hsb and hsb -> hsv are passthroughs.
   *
   * @module
   */
  /**
   * Converts an HSB color to a HEXA color.
   *
   * @example
   * hsbToHex('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHex = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      return hsbToHexa([h, s, b]);
  };
  /**
   * Converts an HSB color to a HEXA color.
   *
   * @example
   * hsbToHexa('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHexa = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      return hsbToRgb([h, s, b]);
  };
  /**
   * Passthrough for HSB to HSB conversion.
   *
   * @example
   * hsbToHsb('1.5turn', 0.6, 0.343) // return { h: 540, s: 0.6, b: 0.343 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHsb = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      var Angle = toDegrees(h);
      return {
          h: Angle,
          s: s,
          b: b,
      };
  };
  /**
   * Converts an HSB color to an HSLA color.
   *
   * @example
   * hsbToHsl('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHsl = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      return hsbToHsla([h, s, b]);
  };
  /**
   * Converts an HSB color to an HSLA color.
   *
   * @example
   * hsbToHsla('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHsla = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      var Angle = toDegrees(h);
      var Lightness = +(((2 - s) * b) / 2).toFixed(MaxFixedFloat);
      var Hsla = {
          h: Angle,
          s: s,
          l: Lightness,
          a: DefaultOpacity,
      };
      if (Lightness !== 0) {
          if (Lightness === MaxPercentFloat) {
              Hsla.s = 0;
          }
          else if (Lightness < MaxPercentFloat / 2) {
              Hsla.s = (Hsla.s * b) / (Lightness * 2);
          }
          else {
              Hsla.s = (Hsla.s * b) / (2 - Lightness * 2);
          }
      }
      Hsla.s = +Hsla.s.toFixed(MaxFixedFloat);
      return Hsla;
  };
  /**
   * Converts an HSB color to an HSV color.
   *
   * @example
   * hsbToHsv('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.3333, v: 0.35 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHsv = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      return ({
          h: toDegrees(h),
          s: s,
          v: b,
      });
  };
  /**
   * Converts an HSB color to an HWB color.
   *
   * @example
   * hsbToHwb('270deg', 0.2, 0.2917) // return { h: 270, w: 0.2334, b: 0.7083, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToHwb = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      var Hsla = hsbToHsl([h, s, b]);
      return hslToHwb(["".concat(Hsla.h), Hsla.s, Hsla.l, Hsla.a]);
  };
  /**
   * Converts an HSB color to an RGBA color.
   *
   * @example
   * hsbToRgb('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToRgb = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      return hsbToRgba([h, s, b]);
  };
  /**
   * Converts an HSB color to an RGBA color.
   *
   * @example
   * hsbToRgba('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsbToRgba = function (_a) {
      var h = _a[0], s = _a[1], b = _a[2];
      var Hsla = hsbToHsl([h, s, b]);
      return hslToRgb(["".concat(Hsla.h), Hsla.s, Hsla.l, Hsla.a]);
  };

  /**
   * This is a collection of methods that take normalized HSV values and outputs normalized values for each
   * supported color model. Hsv -> hsv and hsv -> hsb are passthroughs.
   *
   * @module
   */
  /**
   * Converts an HSV color to a HEXA color.
   *
   * @example
   * hsvToHex('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHex = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsvToHexa([h, s, v]);
  };
  /**
   * Converts an HSV color to a HEXA color.
   *
   * @example
   * hsvToHexa('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHexa = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsbToHex([h, s, v]);
  };
  /**
   * Converts an HSV color to an HSV color.
   *
   * @example
   * hsvToHsv('0.85turn', 0.3333, 0.35) // return { h: 306, s: 0.3333, v: 0.35 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHsb = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return ({
          h: toDegrees(h),
          s: s,
          b: v,
      });
  };
  /**
   * Converts an HSV color to an HSL color.
   *
   * @example
   * hsvToHsl('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHsl = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsvToHsla([h, s, v]);
  };
  /**
   * Converts an HSV color to an HSL color.
   *
   * @example
   * hsvToHsla('270', 0.3333, 0.35) // return { h: 270, s: 0.2, b: 0.2917 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHsla = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsbToHsl([h, s, v]);
  };
  /**
   * Passthrough for HSV to HSV conversion.
   *
   * @example
   * hsvToHsv('1.5turn', 0.6, 0.343) // return { h: 540, s: 0.6, b: 0.343 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHsv = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return ({
          h: toDegrees(h),
          s: s,
          v: v,
      });
  };
  /**
   * Converts an HSV color to an HWB color.
   *
   * @example
   * hsvToHwb('270deg', 0.2, 0.2917) // return { h: 270, w: 0.2334, b: 0.7083, a: 1 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToHwb = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsbToHwb([h, s, v]);
  };
  /**
   * Converts an HSV color to an RGBA color.
   *
   * @example
   * hsvToRgb('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToRgb = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsvToRgba([h, s, v]);
  };
  /**
   * Converts an HSV color to an RGBA color.
   *
   * @example
   * hsvToRgba('227deg', 0.3333, 0.35) // return { r: 0.2917, g: 0.2334, b: 0.35, a: 1 }
   *
   * @param hsv - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hsvToRgba = function (_a) {
      var h = _a[0], s = _a[1], v = _a[2];
      return hsbToRgb([h, s, v]);
  };

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */

  var __assign = function() {
      __assign = Object.assign || function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
              for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
      };
      return __assign.apply(this, arguments);
  };

  /**
   * This is a collection of methods that take normalized HWB values and outputs normalized values for each
   * supported color model. Hwb -> hwb is a passthrough.
   *
   * @module
   */
  /**
   * Converts an HWB color to a HEXA color.
   *
   * @example
   * hwbToHex('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
   *
   * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHex = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hwbToHexa([h, w, b, a]);
  };
  /**
   * Converts an HWB color to a HEXA color.
   *
   * @example
   * hwbToHexa('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
   *
   * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHexa = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hwbToRgb([h, w, b, a]);
  };
  /**
   * Converts an HWB color to an HSB color.
   *
   * @example
   * hwbToHsb('227deg', 0.3333, 0.35, 0.75) // return { h: 227, w: 0.2334, b: 0.5333, a: 0.75 }
   *
   * @param hwb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHsb = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2];
      var Angle = toDegrees(h);
      return {
          h: Angle,
          s: +(b === MaxPercentFloat ? 0 : 1 - w / (1 - b)).toFixed(MaxFixedFloat),
          b: +(1 - b).toFixed(MaxFixedFloat),
      };
  };
  /**
   * Converts an HWB color to an HSLA color.
   *
   * @example
   * hwbToHsl('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
   *
   * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHsl = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hwbToHsla([h, w, b, a]);
  };
  /**
   * Converts an HWB color to an HSLA color.
   *
   * @example
   * hwbToHsla('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
   *
   * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHsla = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      var Hsb = hwbToHsb([h, w, b]);
      var Hsla = hsbToHsl(["".concat(Hsb.h), Hsb.s, Hsb.b]);
      return __assign(__assign({}, Hsla), { a: a });
  };
  /**
   * Converts an HWB color to an HSV color.
   *
   * @example
   * hwbToHsv('227deg', 0.3333, 0.35, 0.75) // return { h: 227, w: 0.2334, b: 0.5333, a: 0.75 }
   *
   * @param hwb - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHsv = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2];
      var Hsb = hwbToHsb([h, w, b]);
      return {
          h: Hsb.h,
          s: Hsb.s,
          v: Hsb.b,
      };
  };
  /**
   * Passthrough for HWB to HWB conversion.
   *
   * @example
   * hwbToHwb('227deg', 0.3333, 0.35, 0.75) // return { h: 227, s: 0.3333, l: 0.35, a: 0.75 }
   *
   * @param hsla - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToHwb = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return ({
          h: toDegrees(h),
          w: w,
          b: b,
          a: a,
      });
  };
  /**
   * Converts an HWB color to an RGBA color.
   *
   * @example
   * hwbToRgb('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
   *
   * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToRgb = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      return hwbToRgba([h, w, b, a]);
  };
  /**
   * Converts an HWB color to an RGBA color.
   *
   * @example
   * hwbToRgba('180deg', 0.5, 0.25 / 0.9) // return { r: 0.5, g: 0.75, b: 0.75, a: 0.9 }
   *
   * @param hwba - Color components as an {@link utilities.toDegrees | angle} followed by fractions.
   */
  var hwbToRgba = function (_a) {
      var h = _a[0], w = _a[1], b = _a[2], _b = _a[3], a = _b === void 0 ? DefaultOpacity : _b;
      var Angle = toDegrees(h);
      var Hwb = {
          h: Angle,
          w: w,
          b: b,
          a: a,
      };
      var Rgba = hslToRgb(["".concat(Angle), 1, 0.5, a]);
      var TotalBrightness = Hwb.w + Hwb.b;
      if (TotalBrightness >= 1) {
          Hwb.w = +(Hwb.w / TotalBrightness).toFixed(MaxFixedFloat);
          Hwb.b = +(Hwb.b / TotalBrightness).toFixed(MaxFixedFloat);
      }
      Rgba.r = Rgba.r * (1 - Hwb.w - Hwb.b) + Hwb.w;
      Rgba.g = Rgba.g * (1 - Hwb.w - Hwb.b) + Hwb.w;
      Rgba.b = Rgba.b * (1 - Hwb.w - Hwb.b) + Hwb.w;
      return Rgba;
  };

  var FinalNumber = function (n, max) {
      return Math.round(fromPercent(n, max));
  };
  var FinalizeHex = function (hex) { return ({
      r: numberToHex(FinalNumber(hex.r, MaxRgb)),
      g: numberToHex(FinalNumber(hex.g, MaxRgb)),
      b: numberToHex(FinalNumber(hex.b, MaxRgb)),
      a: numberToHex(FinalNumber(hex.a, MaxRgb)),
  }); };
  var FinalizeRgb = function (rgb) { return ({
      r: FinalNumber(rgb.r, MaxRgb),
      g: FinalNumber(rgb.g, MaxRgb),
      b: FinalNumber(rgb.b, MaxRgb),
      a: +rgb.a.toFixed(MaxFixedNumber),
  }); };
  /**
   * This is used to detect a specific color model string via regular expression, normalize the values to be within 0..1
   * for percentages and RGB, and 0..360 for angles.
   *
   * @remarks
   * Each detector has a list of responsibilities:
   * * detect the color model from an input string using a {@link colors.ColorDefinition.re | regular expression}
   * * {@link colors.ColorDefinition.normalize | normalize} the output of the regex to numeric representations (ex. `'0.5turn'` will become `180`; `'255'` will become `1`)
   * * {@link colors.ColorDefinition.converters | convert} the normalized values to the new color model
   * * {@link colors.ColorDefinition.finalize | finalize} the converted values to the ones used in the output string (ex. `1` might become `255` or `'ff'`)
   */
  var ColorDetectors = {
      hex: {
          converters: {
              hex: hexToHex,
              hexa: hexToHexa,
              hsb: hexToHsb,
              hsl: hexToHsl,
              hsla: hexToHsla,
              hsv: hexToHsv,
              hwb: hexToHwb,
              rgb: hexToRgb,
              rgba: hexToRgba,
          },
          finalize: FinalizeHex,
          normalize: function (bits) { return [
              clampPercentFloat(toPercent(hexToNumber(bits[RedIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[GreenIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[BlueIndex]), MaxRgb)),
              DefaultOpacity,
          ]; },
          re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      },
      hex3: {
          converters: {
              hex: hexToHex,
              hexa: hexToHexa,
              hsb: hexToHsb,
              hsl: hexToHsl,
              hsla: hexToHsla,
              hsv: hexToHsv,
              hwb: hexToHwb,
              rgb: hexToRgb,
              rgba: hexToRgba,
          },
          finalize: FinalizeHex,
          normalize: function (bits) { return [
              clampPercentFloat(toPercent(hexToNumber(bits[RedIndex] + bits[RedIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[GreenIndex] + bits[GreenIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[BlueIndex] + bits[BlueIndex]), MaxRgb)),
              DefaultOpacity,
          ]; },
          re: /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,
      },
      hexa: {
          converters: {
              hex: hexToHex,
              hexa: hexToHexa,
              hsb: hexToHsb,
              hsl: hexToHsl,
              hsla: hexToHsla,
              hsv: hexToHsv,
              hwb: hexToHwb,
              rgb: hexToRgb,
              rgba: hexToRgba,
          },
          finalize: FinalizeHex,
          normalize: function (bits) { return [
              clampPercentFloat(toPercent(hexToNumber(bits[RedIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[GreenIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[BlueIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[AlphaIndex]), MaxRgb)),
          ]; },
          re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      },
      hexa4: {
          converters: {
              hex: hexToHex,
              hexa: hexToHexa,
              hsb: hexToHsb,
              hsl: hexToHsl,
              hsla: hexToHsla,
              hsv: hexToHsv,
              hwb: hexToHwb,
              rgb: hexToRgb,
              rgba: hexToRgba,
          },
          finalize: FinalizeHex,
          normalize: function (bits) { return [
              clampPercentFloat(toPercent(hexToNumber(bits[RedIndex] + bits[RedIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[GreenIndex] + bits[GreenIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[BlueIndex] + bits[BlueIndex]), MaxRgb)),
              clampPercentFloat(toPercent(hexToNumber(bits[AlphaIndex] + bits[AlphaIndex]), MaxRgb)),
          ]; },
          re: /^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$/,
      },
      hsb: {
          converters: {
              hex: hsbToHex,
              hexa: hsbToHexa,
              hsb: hsbToHsb,
              hsl: hsbToHsl,
              hsla: hsbToHsla,
              hsv: hsbToHsv,
              hwb: hsbToHwb,
              rgb: hsbToRgb,
              rgba: hsbToRgba,
          },
          finalize: function (hsb) { return ({
              h: Math.round(hsb.h),
              s: FinalNumber(hsb.s, MaxPercent),
              b: FinalNumber(hsb.b, MaxPercent),
          }); },
          normalize: function (bits) { return [
              +clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
              +(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              +(clampPercent(parseFloat(bits[BrightnessIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              DefaultOpacity,
          ]; },
          re: /^hsb\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/,
      },
      hsl: {
          converters: {
              hex: hslToHex,
              hexa: hslToHexa,
              hsb: hslToHsb,
              hsl: hslToHsl,
              hsla: hslToHsla,
              hsv: hslToHsv,
              hwb: hslToHwb,
              rgb: hslToRgb,
              rgba: hslToRgba,
          },
          finalize: function (hsl) { return ({
              h: Math.round(hsl.h),
              s: FinalNumber(hsl.s, MaxPercent),
              l: FinalNumber(hsl.l, MaxPercent),
              a: +hsl.a.toFixed(MaxFixedNumber),
          }); },
          normalize: function (bits) { return [
              +clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
              +(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              +(clampPercent(parseFloat(bits[LightnessIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              DefaultOpacity,
          ]; },
          re: /^hsl\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/,
      },
      hsla: {
          converters: {
              hex: hslToHex,
              hexa: hslToHexa,
              hsb: hslToHsb,
              hsl: hslToHsl,
              hsla: hslToHsla,
              hsv: hslToHsv,
              hwb: hslToHwb,
              rgb: hslToRgb,
              rgba: hslToRgba,
          },
          finalize: function (hsl) { return ({
              h: Math.round(hsl.h),
              s: FinalNumber(hsl.s, MaxPercent),
              l: FinalNumber(hsl.l, MaxPercent),
              a: +hsl.a.toFixed(MaxFixedNumber),
          }); },
          normalize: function (bits) { return [
              +clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
              +(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              +(clampPercent(parseFloat(bits[LightnessIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              +(bits[AlphaIndex].charAt(bits[AlphaIndex].length - 1) === '%'
                  ? clampPercent(parseFloat(bits[AlphaIndex])) / MaxPercent
                  : +bits[AlphaIndex]).toFixed(MaxFixedFloat),
          ]; },
          re: /^hsla\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*[,/]?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/,
      },
      hsv: {
          converters: {
              hex: hsvToHex,
              hexa: hsvToHexa,
              hsb: hsvToHsb,
              hsl: hsvToHsl,
              hsla: hsvToHsla,
              hsv: hsvToHsv,
              hwb: hsvToHwb,
              rgb: hsvToRgb,
              rgba: hsvToRgba,
          },
          finalize: function (hsv) { return ({
              h: Math.round(hsv.h),
              s: FinalNumber(hsv.s, MaxPercent),
              v: FinalNumber(hsv.v, MaxPercent),
          }); },
          normalize: function (bits) { return [
              +clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
              +(clampPercent(parseFloat(bits[SaturationIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              +(clampPercent(parseFloat(bits[ValueIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              DefaultOpacity,
          ]; },
          re: /^hsv\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s*[, ]\s*(\d*\.?\d+)%\s*[, ]\s*(\d*\.?\d+)%\s*\)$/,
      },
      hwb: {
          converters: {
              hex: hwbToHex,
              hexa: hwbToHexa,
              hsb: hwbToHsb,
              hsl: hwbToHsl,
              hsla: hwbToHsla,
              hsv: hwbToHsv,
              hwb: hwbToHwb,
              rgb: hwbToRgb,
              rgba: hwbToRgba,
          },
          finalize: function (hwb) { return ({
              h: Math.round(hwb.h),
              w: FinalNumber(hwb.w, MaxPercent),
              b: FinalNumber(hwb.b, MaxPercent),
              a: +hwb.a.toFixed(MaxFixedNumber),
          }); },
          normalize: function (bits) { return [
              +clampAngle(toDegrees(bits[HueIndex])).toFixed(MaxFixedNumber),
              +(clampPercent(parseFloat(bits[WhitenessIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              +(clampPercent(parseFloat(bits[BlacknessIndex])) / MaxPercent).toFixed(MaxFixedFloat),
              bits[AlphaIndex]
                  ? +(bits[AlphaIndex].charAt(bits[AlphaIndex].length - 1) === '%'
                      ? clampPercent(parseFloat(bits[AlphaIndex])) / MaxPercent
                      : +bits[AlphaIndex]).toFixed(MaxFixedFloat)
                  : DefaultOpacity,
          ]; },
          re: /^hwb\(\s*(-?\d*\.?\d+(?:deg|grad|rad|turn)?)\s+(\d*\.?\d+)%\s+(\d*\.?\d+)%(?:\s*\/\s*)?(\d+(?:\.\d+)?%?|\.\d+%?)?\s*\)?$/,
      },
      rgb: {
          converters: {
              hex: rgbToHex,
              hexa: rgbToHexa,
              hsb: rgbToHsb,
              hsl: rgbToHsl,
              hsla: rgbToHsla,
              hsv: rgbToHsv,
              hwb: rgbToHwb,
              rgb: rgbToRgb,
              rgba: rgbToRgba,
          },
          finalize: FinalizeRgb,
          normalize: function (bits) {
              var ConvertedBits = bits
                  .map(function (bit) {
                  return bit.charAt(bit.length - 1) === '%'
                      ? fromPercent(parseFloat(bit) / MaxPercent, MaxRgb)
                      : bit;
              })
                  .map(function (bit) { return +bit; });
              return [
                  clampPercentFloat(toPercent(ConvertedBits[RedIndex], MaxRgb)),
                  clampPercentFloat(toPercent(ConvertedBits[GreenIndex], MaxRgb)),
                  clampPercentFloat(toPercent(ConvertedBits[BlueIndex], MaxRgb)),
                  DefaultOpacity,
              ];
          },
          re: /^rgb\(\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/,
      },
      rgba: {
          converters: {
              hex: rgbToHex,
              hexa: rgbToHexa,
              hsb: rgbToHsb,
              hsl: rgbToHsl,
              hsla: rgbToHsla,
              hsv: rgbToHsv,
              hwb: rgbToHwb,
              rgb: rgbToRgb,
              rgba: rgbToRgba,
          },
          finalize: FinalizeRgb,
          normalize: function (bits) {
              var ConvertedBits = bits
                  .map(function (bit) {
                  return bit.charAt(bit.length - 1) === '%'
                      ? fromPercent(parseFloat(bit) / 100, MaxRgb)
                      : bit;
              })
                  .map(function (bit) { return +bit; });
              return [
                  clampPercentFloat(toPercent(ConvertedBits[RedIndex], MaxRgb)),
                  clampPercentFloat(toPercent(ConvertedBits[GreenIndex], MaxRgb)),
                  clampPercentFloat(toPercent(ConvertedBits[BlueIndex], MaxRgb)),
                  clampPercentFloat(+bits[AlphaIndex] === ConvertedBits[AlphaIndex]
                      ? +bits[AlphaIndex]
                      : toPercent(ConvertedBits[AlphaIndex], MaxRgb)),
              ];
          },
          // eslint-disable-next-line max-len
          re: /^rgba\(\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\s*(\d+(?:\.\d+)?%?|\.\d+%?)[, ]\/?\s*(\d+(?:\.\d+)?%?|\.\d+%?)\s*\)$/,
      },
  };

  /**
   * This contains the sole method exposed by this library, {@link colorcolor}.
   *
   * @module
   */
  /**
   * Convert a color string in these valid color formats (name, RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSV) into a color
   * string of another format.
   *
   * @example
   * colorcolorObject('hsla(109, 100%, 37%, 1)', 'rgb'); // return 'rgb(35,189,0)'
   * colorcolorObject('hwb(180 50% 25% / 0.7)', 'hexa'); // return '#80bfbfb3'
   *
   * @param originalColor The CSS color value that needs to be converted.
   * @param targetColor The CSS color model to convert to.
   */
  var colorcolor = function (originalColor, targetColor) {
      if (targetColor === void 0) { targetColor = ColorName.RGBA; }
      var Color = colorcolorObject(originalColor, targetColor);
      var colorObject;
      var returnedColor = '';
      switch (targetColor.toLowerCase()) {
          case ColorName.HEX:
              colorObject = Color;
              returnedColor = "#".concat(colorObject.r).concat(colorObject.g).concat(colorObject.b);
              break;
          case ColorName.HEXA:
              colorObject = Color;
              returnedColor = "#".concat(colorObject.r).concat(colorObject.g).concat(colorObject.b).concat(colorObject.a);
              break;
          case ColorName.HSB:
              colorObject = Color;
              returnedColor = "hsb(".concat(colorObject.h, ", ").concat(colorObject.s, "%, ").concat(colorObject.b, "%)");
              break;
          case ColorName.HSL:
              colorObject = Color;
              returnedColor = "hsl(".concat(colorObject.h, ", ").concat(colorObject.s, "%, ").concat(colorObject.l, "%)");
              break;
          case ColorName.HSLA:
              colorObject = Color;
              returnedColor = "hsla(".concat(colorObject.h, ", ").concat(colorObject.s, "%, ").concat(colorObject.l, "%, ").concat(colorObject.a, ")");
              break;
          case ColorName.HSV:
              colorObject = Color;
              returnedColor = "hsv(".concat(colorObject.h, ", ").concat(colorObject.s, "%, ").concat(colorObject.v, "%)");
              break;
          case ColorName.HWB:
              colorObject = Color;
              returnedColor = "hwb(".concat(colorObject.h, " ").concat(colorObject.w, "% ").concat(colorObject.b, "% / ").concat(colorObject.a, ")");
              break;
          case ColorName.RGB:
              colorObject = Color;
              returnedColor = "rgb(".concat(colorObject.r, ", ").concat(colorObject.g, ", ").concat(colorObject.b, ")");
              break;
          case ColorName.RGBA:
              colorObject = Color;
              returnedColor = "rgba(".concat(colorObject.r, ", ").concat(colorObject.g, ", ").concat(colorObject.b, ", ").concat(colorObject.a, ")");
              break;
      }
      return returnedColor;
  };
  /**
   * Convert a color string in these valid color formats (name, RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSV) into a color
   * object of another format.
   *
   * @example
   * colorcolorObject('hsla(109, 100%, 37%, 1)'); // return { r: 35, g: 189, b: 0, a: 1 }
   * colorcolorObject('hwb(180 50% 25% / 0.7)', 'hexa'); // return { r: '80', g: 'bf', b: 'bf', a: 'b3' }
   *
   * @param originalColor The CSS color value that needs to be converted.
   * @param targetColor The CSS color model to convert to.
   */
  var colorcolorObject = function (originalColor, targetColor) {
      if (targetColor === void 0) { targetColor = ColorName.RGBA; }
      var ConvertedTargetColor = targetColor.toLowerCase();
      var convertedOriginalColor = originalColor.toLowerCase();
      var NamedColor = colorNames[convertedOriginalColor];
      if (NamedColor) {
          convertedOriginalColor = NamedColor;
      }
      var finalColor = { r: '00', g: '00', b: '00', a: 'ff' }; // default to black
      for (var ColorDetector in ColorDetectors) {
          if (Object.prototype.hasOwnProperty.call(ColorDetectors, ColorDetector)) {
              var Detector = ColorDetectors[ColorDetector];
              var Finalizer = ColorDetectors[ConvertedTargetColor];
              var Bits = Detector.re.exec(convertedOriginalColor);
              if (Bits) {
                  // we were able to extract valid color values from the string
                  var NormalizedBits = Detector.normalize(Bits);
                  if (Detector.converters &&
                      Object.prototype.hasOwnProperty.call(Detector.converters, ConvertedTargetColor)) {
                      var ConvertedBits = Detector.converters[ConvertedTargetColor](
                      // @ts-ignore
                      NormalizedBits);
                      finalColor = Finalizer.finalize(ConvertedBits);
                  }
              }
          }
      }
      return finalColor;
  };

  exports.colorcolor = colorcolor;

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;

})({});
//# sourceMappingURL=colorcolor.js.map
