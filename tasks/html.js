import gulp from 'gulp'
import watch from 'gulp-watch'
import sync from 'browser-sync'
import config from '../config'

gulp.task('html', function () {
	gulp.src(`${config.src}/index.html`)
		.pipe(gulp.dest(config.dest))
		.pipe(sync.stream())
})

gulp.task('html:watch', function () {
	watch(`${config.src}/index.html`, function () {
		gulp.start('html')
	})
})
