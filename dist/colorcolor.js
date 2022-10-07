const AlphaPrecision = 4;
const HexRadix$1 = 16;
const MaxDegrees = 360;
const MaxFixed = 0;
const MaxPercent = 100;
const MaxRgb = 255;
const MaxRgbRange = 256;
const MinPercent = 0;
const Precision = 1;
/**
 * Modifies the RGB values to be accurate when displayed on a white background.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 */
const calculateOpacityFromWhite = (r, g, b) => {
    const min = Math.min(r, g, b);
    const calculatedAlpha = (MaxRgb - min) / MaxRgb;
    return [
        +((r - min) / calculatedAlpha).toFixed(MaxFixed),
        +((g - min) / calculatedAlpha).toFixed(MaxFixed),
        +((b - min) / calculatedAlpha).toFixed(MaxFixed),
        parseFloat(calculatedAlpha.toFixed(AlphaPrecision)),
    ];
};
/**
 * Convert an HSL color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the four components of an HSL color value
 */
const hslToRgb = (bits) => {
    const hsl = {
        h: +bits[1] / MaxDegrees,
        s: +bits[2] / MaxPercent,
        l: +bits[3] / MaxPercent,
        a: parseFloat(bits[4]),
    };
    const rgba = {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
    };
    if (hsl.s === MinPercent) {
        const v = MaxRgb * hsl.l;
        rgba.r = v;
        rgba.g = v;
        rgba.b = v;
        rgba.a = hsl.a;
    }
    else {
        const q = hsl.l < 0.5 ? hsl.l * (1 + hsl.s) : (hsl.l + hsl.s) - (hsl.l * hsl.s);
        const p = 2 * hsl.l - q;
        rgba.r = +(hueToRgb(p, q, hsl.h + (1 / 3)) * MaxRgb).toFixed(MaxFixed);
        rgba.g = +(hueToRgb(p, q, hsl.h) * MaxRgb).toFixed(MaxFixed);
        rgba.b = +(hueToRgb(p, q, hsl.h - (1 / 3)) * MaxRgb).toFixed(MaxFixed);
        rgba.a = hsl.a;
    }
    return rgba;
};
/**
 * Convert an HSV color value to the RGB equivalent.
 *
 * @param bits The result of a regular expression that captures the three components of an HSV color value
 */
const hsvToRgb = (bits) => {
    const rgb = {
        r: 0,
        g: 0,
        b: 0,
    };
    const hsv = {
        h: +bits[1] / MaxDegrees,
        s: +bits[2] / MaxPercent,
        v: +bits[3] / MaxPercent,
    };
    const i = Math.floor(hsv.h * 6);
    const f = hsv.h * 6 - i;
    const p = hsv.v * (1 - hsv.s);
    const q = hsv.v * (1 - f * hsv.s);
    const t = hsv.v * (1 - (1 - f) * hsv.s);
    switch (i % 6) {
        case 0:
            rgb.r = hsv.v;
            rgb.g = t;
            rgb.b = p;
            break;
        case 1:
            rgb.r = q;
            rgb.g = hsv.v;
            rgb.b = p;
            break;
        case 2:
            rgb.r = p;
            rgb.g = hsv.v;
            rgb.b = t;
            break;
        case 3:
            rgb.r = p;
            rgb.g = q;
            rgb.b = hsv.v;
            break;
        case 4:
            rgb.r = t;
            rgb.g = p;
            rgb.b = hsv.v;
            break;
        case 5:
            rgb.r = hsv.v;
            rgb.g = p;
            rgb.b = q;
            break;
    }
    rgb.r = +(rgb.r * MaxRgb).toFixed(MaxFixed);
    rgb.g = +(rgb.g * MaxRgb).toFixed(MaxFixed);
    rgb.b = +(rgb.b * MaxRgb).toFixed(MaxFixed);
    return rgb;
};
/**
 * Converts a given hue (from an HSL color) to the RGB decimal value.
 *
 * @param p
 * @param q
 * @param originalT
 */
const hueToRgb = (p, q, originalT) => {
    let t = 0;
    if (originalT < 0) {
        t += 1;
    }
    if (originalT > 1) {
        t -= 1;
    }
    if (t < 1 / 6) {
        return p + (q - p) * 6 * t;
    }
    if (t < 1 / 2) {
        return q;
    }
    if (t < 2 / 3) {
        return p + (q - p) * ((2 / 3 - t) * 6);
    }
    return p;
};
/**
 * Converts decimal to hexadecimal, ensuring a leading 0 if the result is a single digit.
 *
 * @param n
 */
const numberToHex = (n) => `0${n.toString(HexRadix$1)}`.slice(-2);
/**
 * Convert an RGB color to an HSL color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
const rgbToHsl = (r, g, b, a) => {
    const rgba = {
        r: r / MaxRgb,
        g: g / MaxRgb,
        b: b / MaxRgb,
        a,
    };
    const max = Math.max(rgba.r, rgba.g, rgba.b);
    const min = Math.min(rgba.r, rgba.g, rgba.b);
    const diff = max - min;
    const hsl = {
        h: 0,
        s: 0,
        l: (max + min) / 2,
        a: rgba.a,
    };
    if (max !== min) {
        hsl.s = hsl.l >= 0.5 ? diff / (2 - max - min) : diff / (max + min);
        switch (max) {
            case rgba.r:
                hsl.h = (rgba.g - rgba.b) / diff + (rgba.g < rgba.b ? 6 : 0);
                break;
            case rgba.g:
                hsl.h = (rgba.b - rgba.r) / diff + 2;
                break;
            case rgba.b:
                hsl.h = (rgba.r - rgba.g) / diff + 4;
                break;
        }
        hsl.h /= 6;
    }
    hsl.h = parseFloat((hsl.h * MaxDegrees).toFixed(Precision));
    hsl.s = parseFloat((hsl.s * MaxPercent).toFixed(Precision));
    hsl.l = parseFloat((hsl.l * MaxPercent).toFixed(Precision));
    return hsl;
};
/**
 * Convert an RGB color to an HSV color.
 *
 * @param r Red decimal value
 * @param g Green decimal value
 * @param b Blue decimal value
 * @param a Opacity float value
 */
const rgbToHsv = (r, g, b, a) => {
    const rgba = {
        r: toPercent(r % MaxRgbRange, MaxRgbRange),
        g: toPercent(g % MaxRgbRange, MaxRgbRange),
        b: toPercent(b % MaxRgbRange, MaxRgbRange),
        a,
    };
    const max = Math.max(rgba.r, rgba.g, rgba.b);
    const min = Math.min(rgba.r, rgba.g, rgba.b);
    const diff = max - min;
    const hsv = {
        h: 0,
        s: max === MinPercent ? MinPercent : diff / max,
        v: max,
    };
    if (max !== min) {
        switch (max) {
            case rgba.r:
                hsv.h = (rgba.g - rgba.b) / diff + (rgba.g < rgba.b ? 6 : MinPercent);
                break;
            case rgba.g:
                hsv.h = (rgba.b - rgba.r) / diff + 2;
                break;
            case rgba.b:
                hsv.h = (rgba.r - rgba.g) / diff + 4;
                break;
        }
        hsv.h /= 6;
    }
    hsv.h = parseFloat((hsv.h * MaxDegrees).toFixed(Precision));
    hsv.s = parseFloat((hsv.s * MaxPercent).toFixed(Precision));
    hsv.v = parseFloat((hsv.v * MaxPercent).toFixed(Precision));
    return hsv;
};
/**
 * Gives the percent as a value between 0 and 1.
 *
 * @param amount
 * @param limit
 */
const toPercent = (amount, limit) => amount / limit;

var ColorName;
(function (ColorName) {
    ColorName["HEX"] = "hex";
    ColorName["HEXA"] = "hexa";
    ColorName["HSL"] = "hsl";
    ColorName["HSLA"] = "hsla";
    ColorName["HSB"] = "hsb";
    ColorName["HSV"] = "hsv";
    ColorName["RGB"] = "rgb";
    ColorName["RGBA"] = "rgba";
})(ColorName || (ColorName = {}));
const DecimalRadix = 10;
const HexRadix = 16;
const MaxOpacity = 1;
const MaxOpacitySteps = 255;
const RedIndex = 1;
const GreenIndex = 2;
const BlueIndex = 3;
const AlphaIndex = 4;
const ColorDefinitions = {
    'hex': {
        example: ['#00ff00', '#336699'],
        re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        toRGBA: bits => [
            parseInt(bits[RedIndex], HexRadix),
            parseInt(bits[GreenIndex], HexRadix),
            parseInt(bits[BlueIndex], HexRadix),
            MaxOpacity,
        ],
    },
    'hex3': {
        example: ['#0f0', '#369'],
        re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        toRGBA: bits => [
            parseInt(bits[RedIndex] + bits[RedIndex], HexRadix),
            parseInt(bits[GreenIndex] + bits[GreenIndex], HexRadix),
            parseInt(bits[BlueIndex] + bits[BlueIndex], HexRadix),
            MaxOpacity,
        ],
    },
    'hexa': {
        example: ['#00ff00ff', '#336699a0'],
        re: /^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        toRGBA: bits => [
            parseInt(bits[RedIndex], HexRadix),
            parseInt(bits[GreenIndex], HexRadix),
            parseInt(bits[BlueIndex], HexRadix),
            parseInt(bits[AlphaIndex], HexRadix) / MaxOpacitySteps,
        ],
    },
    'hex4a': {
        example: ['#fb0f', '#f0f8'],
        re: /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        toRGBA: bits => [
            parseInt(bits[RedIndex] + bits[RedIndex], HexRadix),
            parseInt(bits[GreenIndex] + bits[GreenIndex], HexRadix),
            parseInt(bits[BlueIndex] + bits[BlueIndex], HexRadix),
            parseInt(bits[AlphaIndex] + bits[AlphaIndex], HexRadix) / MaxOpacitySteps,
        ],
    },
    'hsb': {
        example: ['hsb(120, 100%, 25%)', 'hsb(0, 100%, 50%)'],
        re: /^hsb\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
        toRGBA: bits => {
            const rgb = hsvToRgb(bits);
            return [
                rgb.r,
                rgb.g,
                rgb.b,
                MaxOpacity,
            ];
        },
    },
    'hsl': {
        example: ['hsl(120, 100%, 25%)', 'hsl(0, 100%, 50%)'],
        re: /^hsl\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
        toRGBA: bits => {
            bits[AlphaIndex] = `${MaxOpacity}`;
            const rgba = hslToRgb(bits);
            return [
                rgba.r,
                rgba.g,
                rgba.b,
                rgba.a,
            ];
        },
    },
    'hsla': {
        example: ['hsla(120, 100%, 25%, 1)', 'hsla(0, 100%, 50%, 0.5)'],
        re: /^hsla\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%,\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
        toRGBA: bits => {
            const rgba = hslToRgb(bits);
            return [
                rgba.r,
                rgba.g,
                rgba.b,
                rgba.a,
            ];
        },
    },
    'hsv': {
        example: ['hsv(120, 100%, 25%)', 'hsv(0, 100%, 50%)'],
        re: /^hsv\(\s*(\d*\.?\d+),\s*(\d*\.?\d+)%,\s*(\d*\.?\d+)%\s*\)$/,
        toRGBA: bits => {
            const rgb = hsvToRgb(bits);
            return [
                rgb.r,
                rgb.g,
                rgb.b,
                MaxOpacity,
            ];
        },
    },
    'rgb': {
        example: ['rgb(123, 234, 45)', 'rgb(255,234,245)'],
        re: /^rgb\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\s*\)$/,
        toRGBA: bits => [
            parseInt(bits[RedIndex], DecimalRadix),
            parseInt(bits[GreenIndex], DecimalRadix),
            parseInt(bits[BlueIndex], DecimalRadix),
            MaxOpacity,
        ],
    },
    'rgba': {
        example: ['rgba(123, 234, 45, 1)', 'rgba(255,234,245, 0.5)'],
        re: /^rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d+(?:\.\d+)?|\.\d+)\s*\)/,
        toRGBA: bits => [
            parseInt(bits[RedIndex], DecimalRadix),
            parseInt(bits[GreenIndex], DecimalRadix),
            parseInt(bits[BlueIndex], DecimalRadix),
            parseFloat(bits[AlphaIndex]),
        ],
    },
};

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
var cssColorNames = {
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

var namedColors = /*#__PURE__*/Object.freeze({
    __proto__: null,
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
    yellowgreen: yellowgreen,
    'default': cssColorNames
});

const LowerDecimalLimit = 0;
const UpperDecimalLimit = 255;
const UpperOpacityLimit = 1;
/**
 * Convert a color string in any valid CSS format (RGB, RGBA, Hex, HexA, HSL, HSLA, HSB, or HSB) into another format.
 *
 * @example
 * // returns 'rgba(35,189,0,1)'
 * colorcolor('hsla(109,100%,37%,1)');
 * @example
 * // returns 'rgba(0,255,128,0.1333)'
 * colorcolor('#dfe', 'rgba', true);
 *
 * @param originalColor The CSS color value that needs to be converted
 * @param targetColor The CSS color type to convert to
 * @param calculateOpacity If the target color has an opacity value (HexA, HSLA, or RGBA), the result will be correct if viewed against a white background
 */
const colorcolor = (originalColor, targetColor = ColorName.RGBA, calculateOpacity = false) => {
    let a = 0;
    let b = 0;
    let convertedColor = originalColor.toLowerCase();
    let g = 0;
    let hsb;
    let hsl;
    let hsv;
    let r = 0;
    let returnedColor;
    // convert named color to hex
    if (Object.prototype.hasOwnProperty.call(namedColors, convertedColor)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        convertedColor = namedColors[convertedColor];
    }
    // Search the color definitions for a match
    for (const colorDefinition in ColorDefinitions) {
        if (Object.prototype.hasOwnProperty.call(ColorDefinitions, colorDefinition)) {
            const { re } = ColorDefinitions[colorDefinition];
            const bits = re.exec(convertedColor);
            if (bits) {
                const channels = ColorDefinitions[colorDefinition].toRGBA(bits);
                [r, g, b] = channels;
                a = +(`${Math.round(+`${channels[3]}e+${AlphaPrecision}`)}e-${AlphaPrecision}`);
            }
        }
    }
    r = Math.round((r < LowerDecimalLimit || isNaN(r)) ?
        LowerDecimalLimit :
        ((r > UpperDecimalLimit) ? UpperDecimalLimit : r));
    g = Math.round((g < LowerDecimalLimit || isNaN(g)) ?
        LowerDecimalLimit :
        ((g > UpperDecimalLimit) ? UpperDecimalLimit : g));
    b = Math.round((b < LowerDecimalLimit || isNaN(b)) ?
        LowerDecimalLimit :
        ((b > UpperDecimalLimit) ? UpperDecimalLimit : b));
    a = (a < LowerDecimalLimit || isNaN(a)) ?
        LowerDecimalLimit :
        ((a > UpperOpacityLimit) ? UpperOpacityLimit : a);
    switch (targetColor) {
        case ColorName.HEX:
            returnedColor = `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}`;
            break;
        case ColorName.HEXA:
            if (calculateOpacity) {
                [r, g, b, a] = calculateOpacityFromWhite(r, g, b);
            }
            returnedColor = `#${numberToHex(r)}${numberToHex(g)}${numberToHex(b)}${numberToHex(Math.round(UpperDecimalLimit * a))}`;
            break;
        case ColorName.HSB:
            hsb = rgbToHsv(r, g, b, a);
            returnedColor = `hsb(${hsb.h},${hsb.s}%,${hsb.v}%)`;
            break;
        case ColorName.HSL:
            hsl = rgbToHsl(r, g, b, a);
            returnedColor = `hsl(${hsl.h},${hsl.s}%,${hsl.l}%)`;
            break;
        case ColorName.HSLA:
            if (calculateOpacity) {
                [r, g, b, a] = calculateOpacityFromWhite(r, g, b);
            }
            hsl = rgbToHsl(r, g, b, a);
            returnedColor = `hsla(${hsl.h},${hsl.s}%,${hsl.l}%,${hsl.a})`;
            break;
        case ColorName.HSV:
            hsv = rgbToHsv(r, g, b, a);
            returnedColor = `hsv(${hsv.h},${hsv.s}%,${hsv.v}%)`;
            break;
        case ColorName.RGB:
            returnedColor = `rgb(${r},${g},${b})`;
            break;
        case ColorName.RGBA:
        // falls through as default
        default:
            if (calculateOpacity) {
                [r, g, b, a] = calculateOpacityFromWhite(r, g, b);
            }
            returnedColor = `rgba(${r},${g},${b},${a})`;
            break;
    }
    return returnedColor;
};

export { colorcolor };
//# sourceMappingURL=colorcolor.js.map
