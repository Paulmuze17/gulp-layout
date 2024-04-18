// удаляет папку dist
// import clean from "gulp-clean";
import fs from "fs";
import del from 'del';

export const clean = (done) => {
    return del([app.path.buildFolder])
}
