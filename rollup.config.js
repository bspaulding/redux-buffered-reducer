import babel from 'rollup-plugin-babel';

export default {
	entry: 'src/BufferedReducer',
	format: 'cjs',
	dest: 'bundle.js',
	plugins: [
		babel({
			exclude: 'node_modules/**'
		})
	]
}
