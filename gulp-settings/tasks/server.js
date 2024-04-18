const serverSettings = {
    livereload: true,
    //directoryListing: true,
    open: true
};

export const server = (done) => {
    // browserSync
    // app.plugins.serverLivereload.init({
    //     server: {
    //         baseDir: app.path.build.html
    //     },
    //     notify: false,
    //     port: 3000,
    // });
    return app.gulp.src(app.path.buildFolder)
    .pipe(app.plugins.serverLivereload(serverSettings));
    
}