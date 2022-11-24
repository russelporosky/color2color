import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
	input: './src/index.ts',
	output: [
		{
			exports: 'default',
			extend: true,
			file: './dist/colorcolor.js',
			format: 'umd',
			name: 'colorcolor',
			noConflict: false,
			sourcemap: true,
		},
	],
	plugins: [
		typescript({
			tsconfig: './src/tsconfig.app.json',
		}),
		json(),
		nodeResolve({
			browser: true,
		}),
		sourcemaps(),
	],
};
