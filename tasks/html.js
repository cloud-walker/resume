import gulp from 'gulp'
import jade from 'gulp-jade'
import watch from 'gulp-watch'
import sync from 'browser-sync'
import config from '../config'

gulp.task('html', function () {
	gulp.src(`${config.src}/views/**/index.jade`)
		.pipe(jade())
		.pipe(gulp.dest(config.dest))
		.pipe(sync.stream())
})

gulp.task('html:watch', function () {
	watch(`${config.src}/views/**/*.jade`, function () {
		gulp.start('html')
	})
})
