import gulp from 'gulp'
import sync from 'browser-sync'
import {dest} from '../config'

gulp.task('sync', function () {
	sync.init({
		server: dest,
		open: false
	})
})
