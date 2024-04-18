import { path } from "../config/path.js"; //adds an unique key to avoid hashing in browser, changes apply on rebuild

export const resources = () => {
	return app.gulp.src(`${path.src.resources}**`)
	  .pipe(app.gulp.dest(path.buildFolder))
}
