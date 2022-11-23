import { colorcolor } from './colorcolor';

describe('color2color', () => {
	describe('colorcolor', () => {
		it('converts everything to an RGBA string by default', () => {
			expect(colorcolor('chartreuse')).toEqual('rgba(127, 255, 0, 1)');
			expect(colorcolor('#abc')).toEqual('rgba(170, 187, 204, 1)');
			expect(colorcolor('#abce')).toEqual('rgba(170, 187, 204, 0.93)');
			expect(colorcolor('#abcdef')).toEqual('rgba(171, 205, 239, 1)');
			expect(colorcolor('#abcdefa0')).toEqual('rgba(171, 205, 239, 0.63)');
			expect(colorcolor('hsb(109, 100%, 74%)')).toEqual('rgba(35, 189, 0, 1)');
			expect(colorcolor('hsl(109, 100%, 37%)')).toEqual('rgba(35, 189, 0, 1)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)')).toEqual('rgba(35, 189, 0, 0.7)');
			expect(colorcolor('hsv(109, 100%, 74%)')).toEqual('rgba(35, 189, 0, 1)');
			expect(colorcolor('hwb(180 50% 25%)')).toEqual('rgba(128, 191, 191, 1)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)')).toEqual('rgba(128, 191, 191, 0.7)');
			expect(colorcolor('rgb(0% 75% 100%)')).toEqual('rgba(0, 191, 255, 1)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)')).toEqual('rgba(0, 191, 255, 0.5)');
		});

		it('converts everything to a HEX string', () => {
			expect(colorcolor('chartreuse', 'hex')).toEqual('#7fff00');
			expect(colorcolor('#abc', 'hex')).toEqual('#aabbcc');
			expect(colorcolor('#abce', 'hex')).toEqual('#aabbcc');
			expect(colorcolor('#abcdef', 'hex')).toEqual('#abcdef');
			expect(colorcolor('#abcdefa0', 'hex')).toEqual('#abcdef');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hex')).toEqual('#23bd00');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hex')).toEqual('#23bd00');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hex')).toEqual('#23bd00');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hex')).toEqual('#23bd00');
			expect(colorcolor('hwb(180 50% 25%)', 'hex')).toEqual('#80bfbf');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hex')).toEqual('#80bfbf');
			expect(colorcolor('rgb(0% 75% 100%)', 'hex')).toEqual('#00bfff');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hex')).toEqual('#00bfff');
		});

		it('converts everything to a HEXA string', () => {
			expect(colorcolor('chartreuse', 'hexa')).toEqual('#7fff00ff');
			expect(colorcolor('#abc', 'hexa')).toEqual('#aabbccff');
			expect(colorcolor('#abce', 'hexa')).toEqual('#aabbccee');
			expect(colorcolor('#abcdef', 'hexa')).toEqual('#abcdefff');
			expect(colorcolor('#abcdefa0', 'hexa')).toEqual('#abcdefa0');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hexa')).toEqual('#23bd00ff');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hexa')).toEqual('#23bd00ff');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hexa')).toEqual('#23bd00b3');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hexa')).toEqual('#23bd00ff');
			expect(colorcolor('hwb(180 50% 25%)', 'hexa')).toEqual('#80bfbfff');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hexa')).toEqual('#80bfbfb3');
			expect(colorcolor('rgb(0% 75% 100%)', 'hexa')).toEqual('#00bfffff');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hexa')).toEqual('#00bfff80');
		});

		it('converts everything to an HSB string', () => {
			expect(colorcolor('chartreuse', 'hsb')).toEqual('hsb(90, 100%, 100%)');
			expect(colorcolor('#abc', 'hsb')).toEqual('hsb(210, 17%, 80%)');
			expect(colorcolor('#abce', 'hsb')).toEqual('hsb(210, 17%, 80%)');
			expect(colorcolor('#abcdef', 'hsb')).toEqual('hsb(210, 28%, 94%)');
			expect(colorcolor('#abcdefa0', 'hsb')).toEqual('hsb(210, 28%, 94%)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hsb')).toEqual('hsb(109, 100%, 74%)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hsb')).toEqual('hsb(109, 100%, 74%)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hsb')).toEqual('hsb(109, 100%, 74%)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hsb')).toEqual('hsb(109, 100%, 74%)');
			expect(colorcolor('hwb(180 50% 25%)', 'hsb')).toEqual('hsb(180, 33%, 75%)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hsb')).toEqual('hsb(180, 33%, 75%)');
			expect(colorcolor('rgb(0% 75% 100%)', 'hsb')).toEqual('hsb(195, 100%, 100%)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hsb')).toEqual('hsb(195, 100%, 100%)');
		});

		it('converts everything to an HSL string', () => {
			expect(colorcolor('chartreuse', 'hsl')).toEqual('hsl(90, 100%, 50%)');
			expect(colorcolor('#abc', 'hsl')).toEqual('hsl(210, 25%, 73%)');
			expect(colorcolor('#abce', 'hsl')).toEqual('hsl(210, 25%, 73%)');
			expect(colorcolor('#abcdef', 'hsl')).toEqual('hsl(210, 68%, 80%)');
			expect(colorcolor('#abcdefa0', 'hsl')).toEqual('hsl(210, 68%, 80%)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hsl')).toEqual('hsl(109, 100%, 37%)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hsl')).toEqual('hsl(109, 100%, 37%)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hsl')).toEqual('hsl(109, 100%, 37%)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hsl')).toEqual('hsl(109, 100%, 37%)');
			expect(colorcolor('hwb(180 50% 25%)', 'hsl')).toEqual('hsl(180, 33%, 63%)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hsl')).toEqual('hsl(180, 33%, 63%)');
			expect(colorcolor('rgb(0% 75% 100%)', 'hsl')).toEqual('hsl(195, 100%, 50%)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hsl')).toEqual('hsl(195, 100%, 50%)');
		});

		it('converts everything to an HSLA string', () => {
			expect(colorcolor('chartreuse', 'hsla')).toEqual('hsla(90, 100%, 50%, 1)');
			expect(colorcolor('#abc', 'hsla')).toEqual('hsla(210, 25%, 73%, 1)');
			expect(colorcolor('#abce', 'hsla')).toEqual('hsla(210, 25%, 73%, 0.93)');
			expect(colorcolor('#abcdef', 'hsla')).toEqual('hsla(210, 68%, 80%, 1)');
			expect(colorcolor('#abcdefa0', 'hsla')).toEqual('hsla(210, 68%, 80%, 0.63)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hsla')).toEqual('hsla(109, 100%, 37%, 1)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hsla')).toEqual('hsla(109, 100%, 37%, 1)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hsla')).toEqual('hsla(109, 100%, 37%, 0.7)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hsla')).toEqual('hsla(109, 100%, 37%, 1)');
			expect(colorcolor('hwb(180 50% 25%)', 'hsla')).toEqual('hsla(180, 33%, 63%, 1)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hsla')).toEqual('hsla(180, 33%, 63%, 0.7)');
			expect(colorcolor('rgb(0% 75% 100%)', 'hsla')).toEqual('hsla(195, 100%, 50%, 1)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hsla')).toEqual('hsla(195, 100%, 50%, 0.5)');
		});

		it('converts everything to an HSV string', () => {
			expect(colorcolor('chartreuse', 'hsv')).toEqual('hsv(90, 100%, 100%)');
			expect(colorcolor('#abc', 'hsv')).toEqual('hsv(210, 17%, 80%)');
			expect(colorcolor('#abce', 'hsv')).toEqual('hsv(210, 17%, 80%)');
			expect(colorcolor('#abcdef', 'hsv')).toEqual('hsv(210, 28%, 94%)');
			expect(colorcolor('#abcdefa0', 'hsv')).toEqual('hsv(210, 28%, 94%)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hsv')).toEqual('hsv(109, 100%, 74%)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hsv')).toEqual('hsv(109, 100%, 74%)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hsv')).toEqual('hsv(109, 100%, 74%)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hsv')).toEqual('hsv(109, 100%, 74%)');
			expect(colorcolor('hwb(180 50% 25%)', 'hsv')).toEqual('hsv(180, 33%, 75%)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hsv')).toEqual('hsv(180, 33%, 75%)');
			expect(colorcolor('rgb(0% 75% 100%)', 'hsv')).toEqual('hsv(195, 100%, 100%)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hsv')).toEqual('hsv(195, 100%, 100%)');
		});

		it('converts everything to an HWB string', () => {
			expect(colorcolor('chartreuse', 'hwb')).toEqual('hwb(90 0% 0% / 1)');
			expect(colorcolor('#abc', 'hwb')).toEqual('hwb(210 67% 20% / 1)');
			expect(colorcolor('#abce', 'hwb')).toEqual('hwb(210 67% 20% / 0.93)');
			expect(colorcolor('#abcdef', 'hwb')).toEqual('hwb(210 67% 6% / 1)');
			expect(colorcolor('#abcdefa0', 'hwb')).toEqual('hwb(210 67% 6% / 0.63)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'hwb')).toEqual('hwb(109 0% 26% / 1)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'hwb')).toEqual('hwb(109 0% 26% / 1)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'hwb')).toEqual('hwb(109 0% 26% / 0.7)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'hwb')).toEqual('hwb(109 0% 26% / 1)');
			expect(colorcolor('hwb(180 50% 25%)', 'hwb')).toEqual('hwb(180 50% 25% / 1)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'hwb')).toEqual('hwb(180 50% 25% / 0.7)');
			expect(colorcolor('rgb(0% 75% 100%)', 'hwb')).toEqual('hwb(195 0% 0% / 1)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'hwb')).toEqual('hwb(195 0% 0% / 0.5)');
		});

		it('converts everything to an RGB string', () => {
			expect(colorcolor('chartreuse', 'rgb')).toEqual('rgb(127, 255, 0)');
			expect(colorcolor('#abc', 'rgb')).toEqual('rgb(170, 187, 204)');
			expect(colorcolor('#abce', 'rgb')).toEqual('rgb(170, 187, 204)');
			expect(colorcolor('#abcdef', 'rgb')).toEqual('rgb(171, 205, 239)');
			expect(colorcolor('#abcdefa0', 'rgb')).toEqual('rgb(171, 205, 239)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'rgb')).toEqual('rgb(35, 189, 0)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'rgb')).toEqual('rgb(35, 189, 0)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'rgb')).toEqual('rgb(35, 189, 0)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'rgb')).toEqual('rgb(35, 189, 0)');
			expect(colorcolor('hwb(180 50% 25%)', 'rgb')).toEqual('rgb(128, 191, 191)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'rgb')).toEqual('rgb(128, 191, 191)');
			expect(colorcolor('rgb(0% 75% 100%)', 'rgb')).toEqual('rgb(0, 191, 255)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'rgb')).toEqual('rgb(0, 191, 255)');
		});

		it('converts everything to an RGBA string', () => {
			expect(colorcolor('chartreuse', 'rgba')).toEqual('rgba(127, 255, 0, 1)');
			expect(colorcolor('#abc', 'rgba')).toEqual('rgba(170, 187, 204, 1)');
			expect(colorcolor('#abce', 'rgba')).toEqual('rgba(170, 187, 204, 0.93)');
			expect(colorcolor('#abcdef', 'rgba')).toEqual('rgba(171, 205, 239, 1)');
			expect(colorcolor('#abcdefa0', 'rgba')).toEqual('rgba(171, 205, 239, 0.63)');
			expect(colorcolor('hsb(109, 100%, 74%)', 'rgba')).toEqual('rgba(35, 189, 0, 1)');
			expect(colorcolor('hsl(109, 100%, 37%)', 'rgba')).toEqual('rgba(35, 189, 0, 1)');
			expect(colorcolor('hsla(109, 100%, 37%, 0.7)', 'rgba')).toEqual('rgba(35, 189, 0, 0.7)');
			expect(colorcolor('hsv(109, 100%, 74%)', 'rgba')).toEqual('rgba(35, 189, 0, 1)');
			expect(colorcolor('hwb(180 50% 25%)', 'rgba')).toEqual('rgba(128, 191, 191, 1)');
			expect(colorcolor('hwb(180 50% 25% / 0.7)', 'rgba')).toEqual('rgba(128, 191, 191, 0.7)');
			expect(colorcolor('rgb(0% 75% 100%)', 'rgba')).toEqual('rgba(0, 191, 255, 1)');
			expect(colorcolor('rgba(0% 75% 100% 0.5)', 'rgba')).toEqual('rgba(0, 191, 255, 0.5)');
		});
	});
});
