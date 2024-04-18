// import fonter from 'gulp-fonter'; //преобразовывает шрифты из формата .оtf(OpenType) в ttf и woff
// import ttf2woff2 from 'gulp-ttf2woff2'; // Creates a WOFF2 font from a TTF font

// export const otfToTtf = () => {
//     //ищем файлы шрифтов .otf
//     return app.gulp.src(app.path.src.fonts+'/*.otf', {})
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: "FONTS",
//             message: "Error: <%= error.message %>",
//             // sound: false
//         })
//     ))

//     // конвертируем в .ttf
//     .pipe(fonter({
//         formats: ['ttf']
//     }))
//     .pipe(app.gulp.dest(app.path.src.fonts));
// }

// export const ttfToWoff = () => {
//     //ищем файлы шрифтов .ttf
//     return app.gulp.src(app.path.src.fonts+'/*.ttf', {})
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title: "FONTS",
//             message: "Error: <%= error.message %>",
//             // sound: false
//         })
//     ))

//     // конвертируем в .woff
//     .pipe(fonter({
//         formats: ['woff']
//     }))
//     .pipe(app.gulp.dest(app.path.build.fonts)) //добавляем файл в папку

//     //ищем файлы .ttf
//     .pipe(app.gulp.src(app.path.src.fonts+'/*.ttf'))
//     // конвертируем в .woff2
//     .pipe(ttf2woff2())
//     .pipe(app.gulp.dest(app.path.build.fonts)) //добавляем файл в папку
// }

// export const fontStyle = () => {


// }

