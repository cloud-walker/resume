import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import stylus from 'gulp-stylus'
import watch from 'gulp-watch'
import sync from 'browser-sync'
import config from '../config'

gulp.task('css', function () {
	gulp.src(`${config.src}/index.styl`)
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'CSS Error',
				message: '<%= error.message %>'
			})
		}))
		.pipe(stylus({
			'include css': true,
			include: ['node_modules']
		}))
		.pipe(gulp.dest(config.dest))
		.pipe(sync.stream())
})

gulp.task('css:watch', function () {
	watch(`${config.src}/**/*.styl`, function () {
		gulp.start('css')
	})
})
