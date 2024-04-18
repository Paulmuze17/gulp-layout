// getting the name of the project (package.json type=module => now can use es6 modules)
import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const useAssetsFolder = true;

const buildFolder = './dist';
const srcFolder = './src';
const assetsPath = useAssetsFolder ? '/assets' : '';


export const path = {
    build: {
        // files: buildFolder+assetsPath,
        // files: buildFolder + '/files/',
        html: buildFolder,
        css: buildFolder + assetsPath + '/css/',
        javascript: buildFolder + assetsPath + '/js/',

        images: buildFolder + assetsPath + '/images/',
        fonts: buildFolder + assetsPath + '/fonts/',
        dataFiles: buildFolder + '/data/',
        cssVendors: buildFolder + assetsPath + '/scss/vendor/',
        resources: buildFolder + assetsPath + '/resources/',

		svg: `${buildFolder}${assetsPath}/images/`,
    },
    src: {
        files: srcFolder+'/files/**/*.*',
        html: srcFolder + '/*.html',
        css: srcFolder+'/css/*.css',
        scss: srcFolder+'/scss/**/*.scss',
        javascript: srcFolder + '/js/main.js',

        // images: srcFolder + '/images/**/*.{jpg,jpeg,png,gif,ico,webp}',
        images: srcFolder + '/images/**/*.{jpg,jpeg,png,svg}',
        images2: srcFolder + '/images/**/*.{jpg,jpeg,png}',
        // svg: srcFolder + '/images/**/*.svg',
        svg: srcFolder+'/svg_sprites/**/*.svg',
        fonts: srcFolder+'/fonts',
        // fonts: srcFolder+'/fonts/**/*.{eot,woff,woff2,ttf,svg}',
        dataFiles: srcFolder+'/data/**/*.{db,json}',
        cssVendors: srcFolder+'/scss/vendor/*.css',
    },
    watch: {
        resources: srcFolder+'/files/**/*.*',
        htmlParts: srcFolder + '/partials',
        html: srcFolder + '/*.html',
        scss: srcFolder + '/scss/**/*.scss',
        javascriptMain: srcFolder+'/js/main.js',
		javascriptFiles: srcFolder + "/js/**/*.js",

        // images: srcFolder+'/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}',
        svg: srcFolder + '/images/svg_sprites/**/**.svg',
        images2: srcFolder + '/images/**/*.{jpg,jpeg,png}',
        images: srcFolder + '/images/**/*.{jpg,jpeg,png,svg}',
        fonts: srcFolder + '/fonts/**/*.{eot,woff,woff2,ttf,svg}',
        dataFiles: srcFolder + '/data/**/*.{db,json}',

    },
	rev: buildFolder + "/rev.json",
    clean: buildFolder,
    assetsPath: assetsPath,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}
