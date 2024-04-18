import webpackStream from "webpack-stream";

export const scripts = () => {
	return app.gulp.src(app.path.src.javascript)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(
			webpackStream({
				mode: app.isProd ? "production" : "development",
				output: {
					filename: "main.js",
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /node_modules/,
							use: {
								loader: "babel-loader",
								options: {
									presets: [
										[
											"@babel/preset-env",
											{
												targets: "defaults",
											},
										],
									],
								},
							},
						},
					],
				},
				devtool: !app.isProd ? "source-map" : false,
			})
		)
		.on("error", function (err) {
			console.error("WEBPACK ERROR", err);
			this.emit("end");
		})
		.pipe(app.gulp.dest(app.path.build.javascript))
		.pipe(app.browserSync.stream());
};

// scripts backend
export const scriptsBackend = () => {
	return app.gulp.src(app.path.src.javascript)
		.pipe(
			app.plugins.plumber(
				app.plugins.notify.onError({
					title: "JS",
					message: "Error: <%= error.message %>",
				})
			)
		)
		.pipe(
			webpackStream({
				mode: "development",
				output: {
					filename: "main.js",
				},
				module: {
					rules: [
						{
							test: /\.m?js$/,
							exclude: /node_modules/,
							use: {
								loader: "babel-loader",
								options: {
									presets: [
										[
											"@babel/preset-env",
											{
												targets: "defaults",
											},
										],
									],
								},
							},
						},
					],
				},
				devtool: false,
			})
		)
		.on("error", function (err) {
			console.error("WEBPACK ERROR", err);
			this.emit("end");
		})
		.pipe(app.gulp.dest(app.path.build.javascript))
		.pipe(app.browserSync.stream());
};
