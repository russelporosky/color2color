# color2color - Javascript Function

The color2color function simply converts Hex/RGB/RGBA color strings to Hex/RGB/RGBA color strings.

## Demo

[http://indyarmy.com/color2color/](http://indyarmy.com/color2color/)

## Usage

	color2color( string originalColor, [string newColorType( rgba|hex|rgb )], [bool calculateOpacity( false|true )]

The first argument is the original color string in Hex, RGB or RGBA format.

The second argument (optional) is which format you'd like the new color string to be in. This will always default to `"rgba"`.

The final argument (optional) will include a calculated opacity against white if the second argument is `"rgba"`.

## Examples

	var newColor = color2color( "#dfe" ); // Returns "rgba(221,255,238,1)"
	var newColor = color2color( "#036", "rgb" ); // Returns "rgb(0,51,102)"
	var newColor = color2color( "rgba(64,64,64,0.5)" ); // Returns "rgba(64,64,64,0.5)"
	var newColor = color2color( "rgb(64,64,64)", "hex" ); // Returns "#404040"
	var newColor = color2color( "#dfe", "rgba", true ); // Returns "rgba(0,255,128,0.1333)"
