import gulp from 'gulp'
import sequence from 'gulp-sequence'

gulp.task('default', sequence('build', 'watch'))

gulp.task('build', sequence('clean', ['html', 'css']))

gulp.task('watch', ['sync', 'html:watch', 'css:watch'])
