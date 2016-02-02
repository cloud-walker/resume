import gulp from 'gulp'
import plumber from 'gulp-plumber'
import notify from 'gulp-notify'
import data from 'gulp-data'
import jade from 'gulp-jade'
import watch from 'gulp-watch'
import sync from 'browser-sync'

import config from '../config'

import color from '../source/theme/color.json'
import font from '../source/theme/font.json'

gulp.task('html', function () {
	gulp.src(`${config.src}/views/**/index.jade`)
		.pipe(plumber({
			errorHandler: notify.onError({
				title: 'HTML Error',
				message: '<%= error.message %>'
			})
		}))
		.pipe(data(function (file) {
			return {
				color: color,
				font: font
			}
		}))
		.pipe(jade())
		.pipe(gulp.dest(config.dest))
		.pipe(sync.stream())
})

gulp.task('html:watch', function () {
	watch(`${config.src}/views/**/*.jade`, function () {
		gulp.start('html')
	})
})
