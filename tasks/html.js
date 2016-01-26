import gulp from 'gulp'
import config from '../config'

gulp.task('html', function () {
	gulp.src(`${config.src}/index.html`)
		.pipe(gulp.dest(config.dest))
})
