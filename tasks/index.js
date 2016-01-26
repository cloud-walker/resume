import gulp from 'gulp'
import sequence from 'gulp-sequence'

gulp.task('default', ['build'])

gulp.task('build', sequence('clean', 'html'))
