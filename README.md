# colorcolor - Javascript Function

The colorcolor function converts Hex/RGB/RGBA/HSL/HSLA/HSV color strings to Hex/RGB/RGBA/HSL/HSLA/HSV color strings.

## Demo

[http://metaloha.github.io/color2color/](http://metaloha.github.io/color2color/)

## Usage

	colorcolor( string originalColor, [string newColorType( rgba|hex|rgb|hsl|hsla|hsv )], [bool calculateOpacity( false|true )]

The first argument is the original color string in RGB, RGBA, Hex, HSL, HSLA, or HSV format.

The second argument (optional) is which format you'd like the new color string to be in. This will always default to `"rgba"`.

The final argument (optional) will include a calculated opacity against white if the second argument is `"rgba"`.

## Examples

	var newColor = colorcolor( "#dfe" ); // Returns "rgba(221,255,238,1)"
	var newColor = colorcolor( "#036", "rgb" ); // Returns "rgb(0,51,102)"
	var newColor = colorcolor( "rgba(64,64,64,0.5)" ); // Returns "rgba(64,64,64,0.5)"
	var newColor = colorcolor( "rgb(64,64,64)", "hex" ); // Returns "#404040"
	var newColor = colorcolor( "#dfe", "rgba", true ); // Returns "rgba(0,255,128,0.1333)"
	var newColor = colorcolor( "hsla(109,100%,37%,1)" ); // Returns "rgba(35,189,0,1)"
	var newColor = colorcolor( "rgba(35,189,0,0.75)", "hsl" ); // Returns "hsl(109,100%,37%)"
