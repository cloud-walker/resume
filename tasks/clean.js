import gulp from 'gulp'
import del from 'del'
import {dest} from '../config'

gulp.task('clean', function () {
	del(dest)
})
