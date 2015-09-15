import del from 'del';

export default done => {
	return del([
		'build/**/*.js',
		'build/**/*.d.ts',
		'dist'
	]);
}
