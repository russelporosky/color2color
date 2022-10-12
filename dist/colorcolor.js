var __createBinding = (undefined && undefined.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (undefined && undefined.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (undefined && undefined.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.colorcolor = void 0;
var color_definitions_1 = require("./color-definitions");
var namedColors = __importStar(require("./css-color-names.json"));
var utilities_1 = require("./utilities");
var LowerDecimalLimit = 0;
var UpperDecimalLimit = 255;
var UpperOpacityLimit = 1;
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
var colorcolor = function (originalColor, targetColor, calculateOpacity) {
    var _a, _b, _c;
    if (targetColor === void 0) { targetColor = color_definitions_1.ColorName.RGBA; }
    if (calculateOpacity === void 0) { calculateOpacity = false; }
    var a = 0;
    var b = 0;
    var convertedColor = originalColor.toLowerCase();
    var g = 0;
    var hsb;
    var hsl;
    var hsv;
    var r = 0;
    var returnedColor;
    // convert named color to hex
    if (Object.prototype.hasOwnProperty.call(namedColors, convertedColor)) {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-assignment
        convertedColor = namedColors[convertedColor];
    }
    // Search the color definitions for a match
    for (var colorDefinition in color_definitions_1.ColorDefinitions) {
        if (Object.prototype.hasOwnProperty.call(color_definitions_1.ColorDefinitions, colorDefinition)) {
            var re = color_definitions_1.ColorDefinitions[colorDefinition].re;
            var bits = re.exec(convertedColor);
            if (bits) {
                var channels = color_definitions_1.ColorDefinitions[colorDefinition].toRGBA(bits);
                r = channels[0], g = channels[1], b = channels[2];
                a = +("".concat(Math.round(+"".concat(channels[3], "e+").concat(utilities_1.AlphaPrecision)), "e-").concat(utilities_1.AlphaPrecision));
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
        case color_definitions_1.ColorName.HEX:
            returnedColor = "#".concat((0, utilities_1.numberToHex)(r)).concat((0, utilities_1.numberToHex)(g)).concat((0, utilities_1.numberToHex)(b));
            break;
        case color_definitions_1.ColorName.HEXA:
            if (calculateOpacity) {
                _a = (0, utilities_1.calculateOpacityFromWhite)(r, g, b), r = _a[0], g = _a[1], b = _a[2], a = _a[3];
            }
            returnedColor = "#".concat((0, utilities_1.numberToHex)(r)).concat((0, utilities_1.numberToHex)(g)).concat((0, utilities_1.numberToHex)(b)).concat((0, utilities_1.numberToHex)(Math.round(UpperDecimalLimit * a)));
            break;
        case color_definitions_1.ColorName.HSB:
            hsb = (0, utilities_1.rgbToHsv)(r, g, b, a);
            returnedColor = "hsb(".concat(hsb.h, ",").concat(hsb.s, "%,").concat(hsb.v, "%)");
            break;
        case color_definitions_1.ColorName.HSL:
            hsl = (0, utilities_1.rgbToHsl)(r, g, b, a);
            returnedColor = "hsl(".concat(hsl.h, ",").concat(hsl.s, "%,").concat(hsl.l, "%)");
            break;
        case color_definitions_1.ColorName.HSLA:
            if (calculateOpacity) {
                _b = (0, utilities_1.calculateOpacityFromWhite)(r, g, b), r = _b[0], g = _b[1], b = _b[2], a = _b[3];
            }
            hsl = (0, utilities_1.rgbToHsl)(r, g, b, a);
            returnedColor = "hsla(".concat(hsl.h, ",").concat(hsl.s, "%,").concat(hsl.l, "%,").concat(hsl.a, ")");
            break;
        case color_definitions_1.ColorName.HSV:
            hsv = (0, utilities_1.rgbToHsv)(r, g, b, a);
            returnedColor = "hsv(".concat(hsv.h, ",").concat(hsv.s, "%,").concat(hsv.v, "%)");
            break;
        case color_definitions_1.ColorName.RGB:
            returnedColor = "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
            break;
        case color_definitions_1.ColorName.RGBA:
        // falls through as default
        default:
            if (calculateOpacity) {
                _c = (0, utilities_1.calculateOpacityFromWhite)(r, g, b), r = _c[0], g = _c[1], b = _c[2], a = _c[3];
            }
            returnedColor = "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(a, ")");
            break;
    }
    return returnedColor;
};
exports.colorcolor = colorcolor;
//# sourceMappingURL=colorcolor.js.map
