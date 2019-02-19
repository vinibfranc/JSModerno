const gulp = require('gulp')
const util = require('gulp-util')
const sequence = require('run-sequence')

require('./gulpTasks/app')
require('./gulpTasks/deps')
require('./gulpTasks/servidor')

gulp.task('default', () => {
    if(util.env.production) {
        //gulp.start('deps', 'app')
        sequence('deps', 'app')
    } else {
        //gulp.start('deps', 'app', 'servidor')
        sequence('deps', 'app', 'servidor')
    }
})
