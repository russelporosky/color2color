var assert = require("assert");
var colorcolor = require("../");

describe("colorcolor Color String Converter", function() {
	"use strict";
	describe("hex to RGB[A] conversion", function() {
		it("should return rgba(221,255,238,1)", function() {
			assert.equal("rgba(221,255,238,1)", colorcolor("#dfe"));
		});
		it("should return rgba(221,255,238,0.6667)", function() {
			assert.equal("rgba(221,255,238,0.6667)", colorcolor("#dfea"));
		});
		it("should return rgba(0,255,128,0.1333)", function() {
			assert.equal("rgba(0,255,128,0.1333)", colorcolor("#dfe", "rgba", true));
		});
		it("should return rgb(0,51,102)", function() {
			assert.equal("rgb(0,51,102)", colorcolor("#036", "rgb"));
		});
		it("should return rgb(0,51,102)", function() {
			assert.equal("rgb(0,51,102)", colorcolor("#003366a1", "rgb"));
		});
	});
	describe("RGB[A] to hex[a] conversion", function() {
		it("should return #404040ff", function() {
			assert.equal("#404040ff", colorcolor("rgb(64,64,64)", "hexa"));
		});
		it("should return #40404080", function() {
			assert.equal("#40404080", colorcolor("rgba(64,64,64,.5)", "hexa"));
		});
		it("should return #000000bf", function() {
			assert.equal("#000000bf", colorcolor("rgba(64,64,64,.5)", "hexa", true));
		});
		it("should return #404040", function() {
			assert.equal("#404040", colorcolor("rgb(64,64,64)", "hex"));
		});
		it("should return #404040", function() {
			assert.equal("#404040", colorcolor("rgba(64,64,64,.5)", "hex"));
		});
	});
	describe("HSL[A] to RGB[A] conversion", function() {
		it("should return rgba(35,189,0,1)", function() {
			assert.equal("rgba(35,189,0,1)", colorcolor("hsla(109,100%,37%,1)"));
		});
		it("should return rgba(35,189,0,1)", function() {
			assert.equal("rgba(35,189,0,1)", colorcolor("hsl(109,100%,37%)"));
		});
	});
	describe("hex to HSL[A] conversion", function() {
		it("should return hsla(170,45%,45%,1)", function() {
			assert.equal("hsla(170,45%,45%,1)", colorcolor("#3fa796", "hsla"));
		});
		it("should return hsla(150,94%,93%,0.6667)", function() {
			assert.equal("hsla(150,94%,93%,0.6667)", colorcolor("#dfea", "hsla"));
		});
		it("should return hsla(170,100%,27%,0.7529)", function() {
			assert.equal("hsla(170,100%,27%,0.7529)", colorcolor("#3fa796", "hsla", true));
		});
		it("should return hsl(210,100%,20%)", function() {
			assert.equal("hsl(210,100%,20%)", colorcolor("#036", "hsl"));
		});
		it("should return hsl(210,100%,20%)", function() {
			assert.equal("hsl(210,100%,20%)", colorcolor("#003366a1", "hsl"));
		});
	});
	describe("RGB[A] to HSL[A] conversion", function() {
		it("should return hsl(109,100%,37%)", function() {
			assert.equal("hsl(109,100%,37%)", colorcolor("rgba(35,189,0,0.75)", "hsl"));
		});
		it("should return hsla(109,100%,37%,0.75)", function() {
			assert.equal("hsla(109,100%,37%,0.75)", colorcolor("rgba(35,189,0,0.75)", "hsla"));
		});
		it("should return hsla(109,100%,37%,1)", function() {
			assert.equal("hsla(109,100%,37%,1)", colorcolor("rgba(35,189,0,0.75)", "hsla", true));
		});
	});
	describe("RGB[A] to HSV conversion", function() {
		it("should return hsv(109,100%,74%)", function() {
			assert.equal("hsv(109,100%,74%)", colorcolor("rgba(35,189,0,0.75)", "hsv"));
		});
		it("should return hsv(109,100%,74%)", function() {
			assert.equal("hsv(109,100%,74%)", colorcolor("rgb(35,189,0)", "hsv"));
		});
	});
	describe("word to RGBA conversion", function() {
		it("should return rgba(255,0,0,1)", function() {
			assert.equal("rgba(255,0,0,1)", colorcolor("red"));
		});
		it("should return rgba(0,0,255,1)", function() {
			assert.equal("rgba(0,0,255,1)", colorcolor("blue"));
		});
	})
});
