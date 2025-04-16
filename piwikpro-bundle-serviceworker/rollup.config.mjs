import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';

export default {
	input: 'main.js',
	output: {
		file: '../piwikpro-serviceworker.js',
		format: 'iife', // immediately-invoked function expression — suitable for <script> tags
		sourcemap: true
	},
	plugins: [
		resolve(), // tells Rollup how to find node_modules
        replace({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
			preventAssignment: true
		}),
	]
};