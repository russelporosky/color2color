## v3.0.0
* added HWB support
* update converters to directly convert between formats instead of to RGBA first
* now understands all valid formats for CSS color functions
  * _Example:_ rgba(75% 50% 66% / 50%)
* code is broken into multiple files for better readability and maintainability
* greatly expanded test coverage
* greatly expanded documentation for developers
* distribution folder includes both module and ES versions

## v2.0.3
* rebuilt with TypeScript
* fixed HSB/HSL/HSLA/HSV to allow whitespace
* minimized and unminimized versions available in the `dist` folder

## v1.1.1
* fixed some rounding issues with the HSL/HSV conversions
* added HSB (identical to HSB)
* improved testing (and made it a little worse at the same time due to the lack of 1-to-1 mapping from HSL/HSV/HSB to RGB)

## v1.1.0
* refactored to more modern JS standards
* added Grunt to automate minifying and hinting

## v1.0.1
* updated all occurrences of `color2color` to `colorcolor`

## v1.0.0
* NPM and Bower installable
** package and script name is now `colorcolor` to avoid conflict

## v0.2.1
#### All the below fixes thanks to [*Kevin Jett*](https://github.com/kevjett/)
* 3 character color names now not accidentally converted to hex
* corrected HSL to RGB saturation miscalculation
* fixed incorrect hex expansion when one or more of the original hex values were single-digit

## v0.2
* added HSL, HSLA and HSV sources and targets
