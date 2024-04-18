// plugin of searchong and replacing
import replace from 'gulp-replace';
import plumber from 'gulp-plumber';
import notify from 'gulp-notify';
// import browserSync from 'browser-sync';
// import serverLivereload from 'gulp-server-livereload';
// import rename from 'gulp-rename';
// import newer from 'gulp-newer'; //проверка обновления
import ifPlugin from 'gulp-if';  //условие ветвление

// exporting object

export const plugins = {
    replace,
    plumber,
    notify,
    // browserSync: browserSync,
    // serverLivereload,
    // rename,
    // newer,
    ifPlugin: ifPlugin,
};
