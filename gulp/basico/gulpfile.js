/**
 * Fazendo cópia de arquivos entre pastas
 */

const gulp = require('gulp')

// Definindo primeira task (default)

gulp.task('default', () => {
    gulp.start('copiar', 'fim') // duas tasks para executar
})

// Task copiar depende de antes1 e antes2
gulp.task('copiar', ['antes1', 'antes2'], () => {
    //console.log('Copiar!!')
    gulp.src('pastaA/**/*.txt')
        //.pipe(transformacao1())
        //.pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes1!!')
})

gulp.task('antes2', () => {
    console.log('Antes2!!')
})

// Task fim
gulp.task('fim', () => {
    console.log('Fim!!')
})