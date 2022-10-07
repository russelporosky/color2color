import json from '@rollup/plugin-json';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
	input: 'dist/src/colorcolor.js',
	output: {
		file: 'dist/colorcolor.js',
		sourcemap: true,
	},
	plugins: [
		json(),
		sourcemaps(),
	],
};
