# colorcolor - Javascript Function

[![Build Status](https://github.com/github/docs/actions/workflows/npm.js.yml/badge.svg)](https://github.com/metaloha/color2color/actions)

The colorcolor function converts Hex/HexA/RGB/RGBA/HSL/HSLA/HSV/HSB color strings to Hex/HexA/RGB/RGBA/HSL/HSLA/HSV/HSB color strings.

## Demo

[http://metaloha.github.io/color2color/](http://metaloha.github.io/color2color/)

## Install

`colorcolor` is available via NPM:

	npm install colorcolor

## Usage

	import { colorcolor } from 'colorcolor';

	colorcolor( string originalColor, [string newColorType( rgba|hex|hexa|rgb|hsl|hsla|hsv )], [bool calculateOpacity( false|true )]

The first argument is the original color string in RGB, RGBA, Hex, HexA, HSL, HSLA, or HSV format.

The second argument (optional) is which format you'd like the new color string to be in. This will always default to `'rgba'`.

The final argument (optional) will include a calculated opacity against white if the second argument is `'rgba'`, `'hexa'`, or `'hsla'`.

## Examples

	var newColor = colorcolor( '#dfe' ); // Returns 'rgba(221,255,238,1)'
	var newColor = colorcolor( '#036', 'rgb' ); // Returns 'rgb(0,51,102)'
	var newColor = colorcolor( 'rgba(64,64,64,0.5)' ); // Returns 'rgba(64,64,64,0.5)'
	var newColor = colorcolor( 'rgb(64,64,64)', 'hex' ); // Returns '#404040'
	var newColor = colorcolor( '#dfe', 'rgba', true ); // Returns 'rgba(0,255,128,0.1333)'
	var newColor = colorcolor( 'hsla(109,100%,37%,1)' ); // Returns 'rgba(35,189,0,1)'
	var newColor = colorcolor( 'rgba(35,189,0,0.75)', 'hsl' ); // Returns 'hsl(109,100%,37%)'

## Testing

You can run `npm run test` or `npm run test:watch` to run the tests alone.

## Support

Reach out to the maintainer at one of the following places:

- [GitHub discussions](https://github.com/metaloha/color2color/discussions)
- The email which is located [in my GitHub profile](https://github.com/metaloha)

## Contributing

First off, thanks for taking the time to contribute! Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make will benefit everybody else and are **greatly appreciated**.

We have set up a separate document containing our [contribution guidelines](docs/CONTRIBUTING.md).

Thank you for being involved!

## Authors & contributors

The original setup of this repository is by [Russel Porosky](https://github.com/metaloha).

For a full list of all authors and contributors, check [the contributor's page](https://github.com/metaloha/color2color/contributors).

## License

This project is licensed under the **MIT license**.

See [LICENSE](LICENSE) for more information.
