import webpack from 'webpack-stream'; //npm i -D webpack-stream webpack -> используется для сборки разных частей в один файл
import babel from 'gulp-babel'; 

const jsFiles = {
    main: '/src/js/main.js',
    home: '/src/js/home.js',
};

export const javascript = () => {
    return app.gulp.src(app.path.src.javascript, { sourcemaps: app.isDev })
    .pipe(app.plugins.plumber(
        app.plugins.notify.onError({
            title: 'JavaScript',
            message: 'Error: <%= error.message %>',
            // sound: false
        })
    ))
    .pipe(babel())
    .pipe(webpack({
        // mode: app.isBuild ? 'production' : 'development',
        mode: 'production',
        entry: {
            ...jsFiles
        },
        output: {
            filename: '[name].bundle.js'
        },
        module: {
            rules: [{
                test: /\.css$/,
                use:['style-loader', 'css-loader']
            }]
        }
    }))
    .pipe(app.gulp.dest(app.path.build.javascript));
}
