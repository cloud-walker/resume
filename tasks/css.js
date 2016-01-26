import gulp from 'gulp'
import stylus from 'gulp-stylus'
import watch from 'gulp-watch'
import sync from 'browser-sync'
import config from '../config'

gulp.task('css', function () {
	gulp.src(`${config.src}/index.styl`)
		.pipe(stylus())
		.pipe(gulp.dest(config.dest))
		.pipe(sync.stream())
})

gulp.task('css:watch', function () {
	watch(`${config.src}/**/*.styl`, function () {
		gulp.start('css')
	})
})
