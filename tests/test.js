var assert = require("assert");
var colorcolor = require("../");

describe("colorcolor Color String Converter", function() {
	"use strict";
	describe("#dfea to", function() {
		it("hex should return #ddffee", function() {
			assert.equal("#ddffee", colorcolor("#dfea", "hex"));
		});
		it("hexa should return #ddffeeaa", function() {
			assert.equal("#ddffeeaa", colorcolor("#dfea", "hexa"));
		});
		it("rgb should return rgb(221,255,238)", function() {
			assert.equal("rgb(221,255,238)", colorcolor("#dfea", "rgb"));
		});
		it("rgba should return rgba(221,255,238,0.6667)", function() {
			assert.equal("rgba(221,255,238,0.6667)", colorcolor("#dfea", "rgba"));
		});
		it("hsl should return hsl(150,100%,93%)", function() {
			assert.equal("hsl(150,100%,93%)", colorcolor("#dfea", "hsl"));
		});
		it("hsla should return hsla(150,100%,93%,0.6667)", function() {
			assert.equal("hsla(150,100%,93%,0.6667)", colorcolor("#dfea", "hsla"));
		});
		it("hsv should return hsv(150,13%,100%)", function() {
			assert.equal("hsv(150,13%,100%)", colorcolor("#dfea", "hsv"));
		});
		it("hsb should return hsb(150,13%,100%)", function() {
			assert.equal("hsb(150,13%,100%)", colorcolor("#dfea", "hsb"));
		});
	});
	describe("convert back to hex (HS[l|v|b] lacks precision)", function() {
		it("#ddffee should return #ddffee", function() {
			assert.equal("#ddffee", colorcolor("#ddffee", "hex"));
		});
		it("#ddffeeaa should return #ddffee", function() {
			assert.equal("#ddffee", colorcolor("#ddffeeaa", "hex"));
		});
		it("rgb(221,255,238) should return #ddffee", function() {
			assert.equal("#ddffee", colorcolor("rgb(221,255,238)", "hex"));
		});
		it("rgba(221,255,2380.6667) should return #ddffee", function() {
			assert.equal("#ddffee", colorcolor("rgba(221,255,238,0.6667)", "hex"));
		});
		it("hsl(150,100%,93%) should return #dbffed", function() {
			assert.equal("#dbffed", colorcolor("hsl(150,100%,93%)", "hex"));
		});
		it("hsla(150,100%,93%,0.6667) should return #dbffed", function() {
			assert.equal("#dbffed", colorcolor("hsla(150,100%,93%,0.6667)", "hex"));
		});
		it("hsv(150,13%,100%) should return #deffee", function() {
			assert.equal("#deffee", colorcolor("hsv(150,13%,100%)", "hex"));
		});
		it("hsb(150,13%,100%) should return #deffee", function() {
			assert.equal("#deffee", colorcolor("hsb(150,13%,100%)", "hex"));
		});
	});
	describe("convert back to hexa (HS[l|v|b] lacks precision)", function() {
		it("#ddffee should return #ddffeeff", function() {
			assert.equal("#ddffeeff", colorcolor("#ddffee", "hexa"));
		});
		it("#ddffeeaa should return #ddffeeaa", function() {
			assert.equal("#ddffeeaa", colorcolor("#ddffeeaa", "hexa"));
		});
		it("rgb(221,255,238) should return #ddffeeff", function() {
			assert.equal("#ddffeeff", colorcolor("rgb(221,255,238)", "hexa"));
		});
		it("rgba(221,255,2380.6667) should return #ddffeeaa", function() {
			assert.equal("#ddffeeaa", colorcolor("rgba(221,255,238,0.6667)", "hexa"));
		});
		it("hsl(150,100%,93%) should return #dbffedff", function() {
			assert.equal("#dbffedff", colorcolor("hsl(150,100%,93%)", "hexa"));
		});
		it("hsla(150,100%,93%,0.6667) should return #dbffedaa", function() {
			assert.equal("#dbffedaa", colorcolor("hsla(150,100%,93%,0.6667)", "hexa"));
		});
		it("hsv(150,13%,100%) should return #deffeeff", function() {
			assert.equal("#deffeeff", colorcolor("hsv(150,13%,100%)", "hexa"));
		});
		it("hsb(150,13%,100%) should return #deffeeff", function() {
			assert.equal("#deffeeff", colorcolor("hsb(150,13%,100%)", "hexa"));
		});
	});
});
