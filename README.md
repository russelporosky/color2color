# colorcolor - Javascript Function

The colorcolor function converts Hex/HexA/RGB/RGBA/HSL/HSLA/HSV/HSB color strings to Hex/HexA/RGB/RGBA/HSL/HSLA/HSV/HSB color strings.

## Demo

[http://metaloha.github.io/color2color/](http://metaloha.github.io/color2color/)

## Install

`colorcolor` is available via NPM:

	npm install colorcolor

And Bower:

	bower install colorcolor

Of course, you can also just download the minified distribution file from here instead if you prefer :)

## Usage

	colorcolor( string originalColor, [string newColorType( rgba|hex|hexa|rgb|hsl|hsla|hsv )], [bool calculateOpacity( false|true )]

The first argument is the original color string in RGB, RGBA, Hex, HexA, HSL, HSLA, or HSV format.

The second argument (optional) is which format you'd like the new color string to be in. This will always default to `"rgba"`.

The final argument (optional) will include a calculated opacity against white if the second argument is `"rgba"`, `"hexa"`, or `"hsla"`.

## Examples

	var newColor = colorcolor( "#dfe" ); // Returns "rgba(221,255,238,1)"
	var newColor = colorcolor( "#036", "rgb" ); // Returns "rgb(0,51,102)"
	var newColor = colorcolor( "rgba(64,64,64,0.5)" ); // Returns "rgba(64,64,64,0.5)"
	var newColor = colorcolor( "rgb(64,64,64)", "hex" ); // Returns "#404040"
	var newColor = colorcolor( "#dfe", "rgba", true ); // Returns "rgba(0,255,128,0.1333)"
	var newColor = colorcolor( "hsla(109,100%,37%,1)" ); // Returns "rgba(35,189,0,1)"
	var newColor = colorcolor( "rgba(35,189,0,0.75)", "hsl" ); // Returns "hsl(109,100%,37%)"

## Testing

You can run `grunt test` to run the tests alone. The testing will also run after every change made while `grunt dev` is watching for changes, and if you run `grunt` with no arguments they run yet again.
