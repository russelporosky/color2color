import json from '@rollup/plugin-json';
import nodeResolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
	input: './src/index.ts',
	output: [
		{
			file: './dist/colorcolor.js',
			format: 'iife',
			sourcemap: true,
		},
		{
			file: './dist/colorcolor.cjs',
			format: 'cjs',
			sourcemap: true,
		},
		{
			file: './dist/colorcolor.es.js',
			format: 'es',
			sourcemap: true,
		},
	],
	plugins: [
		typescript({
			tsconfig: './src/tsconfig.app.json',
		}),
		json(),
		nodeResolve(),
		sourcemaps(),
	],
};
