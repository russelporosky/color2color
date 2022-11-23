# colorcolor - Javascript Function

[![npm version](https://badge.fury.io/js/colorcolor.svg)](https://badge.fury.io/js/colorcolor)
[![Build Status](https://github.com/metaloha/color2color/actions/workflows/node.js.yml/badge.svg)](https://github.com/metaloha/color2color/actions)

The `colorcolor()` function converts HEX/HEXA/HSB/HSL/HSLA/HSV/HWB/RGB/RGBA color strings to
HEX/HEXA/HSB/HSL/HSLA/HSV/HWB/RGB/RGBA color strings.

## Demo

[http://metaloha.github.io/color2color/](http://metaloha.github.io/color2color/)

## Install

`colorcolor` is available via NPM:

	npm install colorcolor

## Usage

	colorcolor( originalColor: string, [newColorType: string( hex|hexa|hsb|hsl|hsla|hsv|hwb|rgb|rgba ) = 'rgba'] )

The first argument is the original color string in HEX, HEXA, HSB, HSL, HSLA, HSV, HWB, RGB, or RGBA format, or a CSS
named color.

The second argument (optional) is which format you'd like the new color string to be in. This will always default
to `'rgba'`.

## Examples

```ts
newColor = colorcolor('#dfe'); // 'rgba(221,255,238,1)'
newColor = colorcolor('#036', 'rgb'); // 'rgb(0,51,102)'
newColor = colorcolor('rgba(64,64,64,0.5)'); // 'rgba(64,64,64,0.5)'
newColor = colorcolor('rgba(64 64 64 / 0.5)'); // 'rgba(64,64,64,0.5)'
newColor = colorcolor('rgba(85%  99%  92.5% / 0.3)'); // 'rgba(216,252,234,0.3)'
newColor = colorcolor('rgb(64,64,64)', 'hex'); // '#404040'
newColor = colorcolor('hsla(109,100%,37%,1)'); // 'rgba(35,189,0,1)'
newColor = colorcolor('hsla(200grad, 45.75%, 80.6667%, 75%)'); // 'rgba(183,228,228,0.75)'
newColor = colorcolor('rgba(35,189,0,0.75)', 'hsl'); // 'hsl(109,100%,37%)'
```

## Valid color formats

`colorcolor` understands a mix of CSS and non-CSS color models, and is being actively expanded. The following formats
are currently understood by `colorcolor`:

### RGB (_[read more](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb_color_model)_)

Both hexadecimal and numeric notations are supported.

* **#RGB[A]**
* **#RRGGBB[AA]**
	* **R**, **G**, **B**, and **A** are hexadecimal numbers from `00` to `ff`
	* _Examples_:
		* `#ad6`
		* `#AD6e`
		* `#f43E12`
		* `#F43e12d5`
* **rgb(R,G,B)**
* **rgb(R G B)**
* **rgba(R, G, B, A)**
* **rgba(R G B / A)**
	* **R**, **G**, and **B** can be decimals from 0 to 255 or percentages from 0% to 100%
	* **A** can be a percentage from 0% to 100% or a float from 0 to 1
	* _Examples_
		* `rgb(121, 50, 89)`
		* `rgb(121 50 89)`
		* `rgba(80, 205, 40, 0.5)`
		* `rgba(80 205 40 / 0.5)`
		* `rgb(50%, 75%, 50%)`
		* `rgba(50% 75% 50% / 75%)`

### HSL (_[read more](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hsl_color_model)_)

* **hsl(H, S, L)**
* **hsl(H S L)**
* **hsla(H, S, L, A)**
* **hsla(H S L / A)**
	* **H** is an angle expressed as `deg`, `grad`, `rad`, or `turn` (degree is assumed if the number doesn't include a
	  unit)
	* **S** and **L** are percentages from 0% to 100%
	* **A** can be a percentage from 0% to 100% or a float from 0 to 1
	* _Examples_
		* `hsl(270, 100%, 50%)`
		* `hsl(0.75turn 100% 50%)`
		* `hsla(2.65grad, 100%, 50%, 0.75)`
		* `hsla(3.14rad 100% 50% / 75%)`

### HSV/HSB (_[read more](https://color.lukas-stratmann.com/color-systems/hsv.html)_)

`hsv` and `hsb` are interchangeable and mean the same thing. These are not CSS colors, but are still supported as input
and output formats.

* **hsv(H, S, V)**
* **hsb(H, S, B)**
	* **H** is an angle expressed as `deg`, `grad`, `rad`, or `turn` (degree is assumed if the number doesn't include a
	  unit)
	* **S**, **V**, and **B** are percentages from 0% to 100%
	* _Examples_
		* `hsv(0.75turn, 100%, 50%)`
		* `hsb(270, 100%, 50%)`

### HWB (_[read more](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#hwb_color_model)_)

Note that this function does not accept commas, and instead of an additional `hwba` function the opacity is optional.

* **hwb(H W B)**
* **hwb(H W B / A)**
	* **H** is an angle expressed as `deg`, `grad`, `rad`, or `turn` (degree is assumed if the number doesn't include a
	  unit)
	* **W** and **B** are percentages from 0% to 100%
	* **A** can be a percentage from 0% to 100% or a float from 0 to 1
	* _Examples_
		* `hwb(270 100% 50%)`
		* `hwb(0.75turn 100% 50%)`
		* `hwb(2.65grad 100% 50% / 0.75)`
		* `hwb(3.14rad 100% 50% / 75%)`

## Testing

You can run `npm run test` or `npm run test:watch` to run the tests alone. The coverage report can be updated
with `npm run test:coverage`.

## Support

Reach out to the maintainer at one of the following places:

- [GitHub discussions](https://github.com/metaloha/color2color/discussions)
- The email which is located [in my GitHub profile](https://github.com/metaloha)

## Contributing [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/metaloha/color2color/issues)

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an
amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly
appreciated**.

We have set up a separate document containing our [contribution guidelines](docs/CONTRIBUTING.md).

Thank you for being involved!

## Authors & contributors

The original setup of this repository is by [Russel Porosky](https://github.com/metaloha).

For a full list of all authors and contributors,
check [the contributor's page](https://github.com/metaloha/color2color/contributors).

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
