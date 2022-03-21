'use strict';
// =GULP
const gulp = require('gulp');
const gutil = require('gulp-util');

// =CONFIG
const config = require('./gulpconfig.json');
// =NPM PACKAGES VARIOUS
const concat      = require('gulp-concat');
const path = require('path');
const uglify      = require('gulp-uglify');
const del         = require('del');
const plumber = require('gulp-plumber'); // @see https://www.npmjs.com/package/gulp-plumber / Prevent pipe breaking caused by errors from gulp plugins
const notify = require('gulp-notify');
const rename      = require('gulp-rename');

// =NPM PACKAGES FOR IMAGES
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');

// =NPM PACKAGES FOR STYLES
const autoprefixer  = require('autoprefixer'); // not `gulp-autoprefixer`
const cssnano = require('gulp-cssnano');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const assets = require('postcss-assets');
// =DEV BUILD
// =ENVIRONMENT VARIABLE
const devBuild = (process.env.NODE_ENV !== 'production');

gulp.task('set-node-evn-dev', function () {
  return process.env.NODE_ENV = 'development';
});

gulp.task('set-env-node-prod', function () {
  return process.env.NODE_ENV = 'production';
});

//---- const dest paths for aem site -----
var aem_dest = "../../../src/main/content/jcr_root/apps/hbk/clientlibs/assets/resources/";
//var dam_dest = "../../../../ui.content/src/main/content/jcr_root/content/dam/hbk/";

// =PATHS
// @description Folder paths and variables
const paths = {
  app: "./",
  dest: "./public/dist",
  scripts: {
    src: "./public/scripts",
    components: "./public/scripts/components/**/*.js",
    entry: "./public/scripts/main.js",
    scripts_thirdparty: "./public/scripts/thirdparty/**/*.js",
    dest: {
      aem: {
        designs: {
          hbk_111: {
            scripts: aem_dest+"scripts",
            scripts_thirdparty: aem_dest+"scripts/thirdparty"
          }
        }
      }
    }
  },
  styles: {
    glob: [
      "./components/**/*.{scss,sass}", 
      "./styles/**/*.{scss,sass}"
    ],
    dest: {
      aem: {
        designs: {
          hbk_111: aem_dest+"styles",
          hbk_111_author:aem_dest+"styles"
        }
      },
    },
    hbk_111: {
      src: "./styles/hbk-111",
      entry: "./styles/hbk-111/hbk-111.scss"
    },
    hbk_111_author: {
      src: "./styles/hbk-111-author",
      entry: "./styles/hbk-111-author/hbk-111-author.scss"
    }
  },
  fonts: {
    src: "./public/fonts",
    glob: "./public/fonts/**/*.{eot,svg,ttf,woff,woff2}",
    dest: {
      aem: {
        designs: {
          hbk_111:aem_dest+"fonts"
        }
      }
    }
  },
  // sourcemaps: {
  //   dest: "./sourcemaps"
  // },
  images: {
    src: {
      aem: {
        dam: "./public/images",
        designs: {
          hbk_111: "./public/images/"
        }
      },
      app: "./public/images"
    },
    dest: {
      aem: {
        //dam: dam_dest+"images",
        designs: {
          hbk_111:aem_dest+"images"
        }
      },
      app: "./public/dist/images"
    }
  }
};


gutil.log(gutil.colors.blue('[INFO] ') + 'Checking the ' + gutil.colors.cyan('\'paths\'') + ' variables:');
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.app:                ' + paths.app);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.dest:               ' + paths.dest);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.styles.default.src:         ' + paths.styles.src);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.styles.default.glob:        ' + paths.styles.glob);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.styles.default.entry:       ' + paths.styles.entry);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.styles.default.dest:        ' + paths.styles.dest);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.scripts.src:        ' + paths.scripts.src);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.scripts.entry:      ' + paths.scripts.entry);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.scripts.dest:       ' + paths.scripts.dest);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.images.src:         ' + paths.images.src);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.images.dest:        ' + paths.images.dest);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.fonts.src:          ' + paths.fonts.src);
gutil.log(gutil.colors.blue('[INFO] ') + 'paths.fonts.dest:         ' + paths.fonts.dest);
//gutil.log(gutil.colors.blue('[INFO] ') + 'paths.sourcemaps.dest:    ' + paths.sourcemaps.dest);

function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

// =CLEAN:DIST
gulp.task('clean:dist', function (done) {
  del.sync(paths.dest);
  done();
});

// =IMAGES PROCEDURE
// (1) Process all images in ... based on file type
// (2) Process only `newer` images, check output folder first!
// (3) Process images with `imagemin`
// (4) Move processed images to output destination folder(s)

// =IMAGEMIN OPTIONS
const imageminOptions = {
  optimizationLevel: 5,
  interlaced: true,
};


// =IMAGES:DAM
// gulp.task('images:dam', function (done) {
//   gulp
//     .src(paths.images.src.aem.dam + '/**/*.+(png|jpg|gif|svg|ico)')
//     .pipe(newer(paths.images.dest.aem.dam))
//     .pipe(imagemin(imageminOptions))
//     .pipe(gulp.dest(paths.images.dest.aem.dam))
//   done();
// });

// =IMAGES:DESIGNS (ETC/DESIGNS)
gulp.task('images:designs', function (done) {
  // hbk-111
  gulp
    .src(paths.images.src.aem.designs.hbk_111 + "/**/*.+(png|jpg|gif|svg|ico)")
    .pipe(newer(paths.images.dest.app))
    .pipe(imagemin(imageminOptions))
    .pipe(gulp.dest(paths.images.dest.app))
    .pipe(gulp.dest(paths.images.dest.aem.designs.hbk_111));

  done();
});

// =IMAGES
gulp.task('images', gulp.series(
  [
    //'images:dam',
    'images:designs',
  ],
  function (done) {
    done();
  }
));

// =FONTS
// (1) Copy to frontend path
// (2) Copy to AEM DESIGNS path(s)
gulp.task('fonts', function (done) {
  gulp
    .src(paths.fonts.glob)
    .pipe(gulp.dest(paths.fonts.dest.aem.designs.hbk_111));
  done();
});

// =STYLES PROCEDURE
// General styles procedure:
// (1) Get all `.scss` and `sass` files from styles folder
// (2) Init source maps
// (3) Init `plumber` error handler
// (4) Run Sass with options
//   `.pipe(sass(sassOptions).on('error', sass.logError))`
//   `.pipe(sass(sassOptions)).on('error', onError)`
// (5) Run cssnano minifycation (between sourcemaps)
// (7) Rename filename: add `.min` to filename
// (8) Write source maps in separate files
// (9) Write result to src folder for better development control (dest folder is always deleted) ... and write result to the output folder!

// =SASS OPTIONS
// @see https://github.com/sass/node-sass#options
// @see https://github.com/sass/node-sass#usage-1
// `outputStyle: 'expanded|compressed|nested'`
const sassOptions = {
  errLogToConsole: true,
  imagePath: 'images/',
  outputStyle: 'expanded',
  precision: 3,
};

// =POSTCSS OPTIONS
const postcssPluginsOptions = [
  assets({
    loadPaths: ['images/']
  }),
  autoprefixer({
    browsers: config.browserListConfig
  }),
  // @TODO
  // mqpacker, // Make sure mqpacker is last!
];

// =STYLES:hbk_111
gulp.task("styles:hbk_111", function(done) {
  gutil.log(
    gutil.colors.blue("[INFO] ") +
      "Generating CSS files: Sass, PostCSS (Autoprefixer) + Nano"
  );

  // @TODO ESE
  if (!devBuild) {
    postcssPluginsOptions.push(cssnano);
  }

  gulp
    .src(paths.styles.hbk_111.entry)
    // .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass(sassOptions))
    .on("error", notify.onError(function(error) {
        return gutil.log(gutil.colors.red("[ERROR] ") + "Problem file: " + gutil.colors.red(error.message));
      }))
    .pipe(postcss(postcssPluginsOptions))
    .pipe(cssnano({zindex: false})) // @TODO ESE Add this later!
    .pipe(rename({ suffix: ".min" }))
    // .pipe(sourcemaps.write(paths.sourcemaps.dest))
    .pipe(gulp.dest(paths.styles.hbk_111.src))
    //.pipe(gulp.dest(paths.styles.hbk_111.dest))
    .pipe(gulp.dest(paths.styles.dest.aem.designs.hbk_111))
  done();
});

// =STYLES:hbk_111_AUTHOR
gulp.task("styles:hbk_111_author", function(done) {
  gulp
    .src(paths.styles.hbk_111_author.entry)
    .pipe(plumber({ errorHandler: onError }))
    .pipe(sass(sassOptions))
    .on("error", notify.onError(function(error) {
        return gutil.log(gutil.colors.red("[ERROR] ") + "Problem file: " + gutil.colors.red(error.message));
      }))
    .pipe(postcss(postcssPluginsOptions))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(paths.styles.hbk_111_author.src))
    //.pipe(gulp.dest(paths.styles.hbk_111_author.dest))
    .pipe(gulp.dest(paths.styles.dest.aem.designs.hbk_111_author))
  done();
});

gulp.task('styles', gulp.series(
  [
    'styles:hbk_111',
    'styles:hbk_111_author',
  ], function (done) {
    done();
  }
));

// =SCRIPTS:THIRDPARTY
// @description Copy all the 3rdparty scripts to the destination folder
// (1) Copy files to: HTML prototype ...
// (2) Copy files to: AEM clientlibs
gulp.task('scripts:thirdparty', function(done) {
  gulp
    .src(paths.scripts.scripts_thirdparty)
    .pipe(gulp.dest(paths.scripts.dest.aem.designs.hbk_111.scripts_thirdparty));
  done();
});

// =SCRIPTS:COMPONENTS
// @description Concat all the components JS to one `main.js` file
// (1) Init source maps
// (2) Copy non minified file to ...
// (3) Concat JS files to `main.js`
// (4) Lint with JSHint settings
// (5) JSHint Reporters, @see https://github.com/jshint/jshint/tree/master/src/reporters
// (6) Copy concatenated file to: HTML prototype ...
// (7) Copy concatenated file to: AEM clientlibs ...
// (8) Rename file
// (9) Uglify JS files
// (10) Write source maps in separate files
// (11) Copy uglyfied file to ...
gulp.task('scripts:components', function(done) {
  gulp
    .src(paths.scripts.components)
    .pipe(concat("main.js"))
    .pipe(gulp.dest(paths.scripts.dest.aem.designs.hbk_111.scripts))
  done();
});

// =SCRIPTS
gulp.task('scripts', gulp.series(
  [
    'scripts:thirdparty',
    'scripts:components',
  ], function (done) {
    done();
  }
));



// =SERVE
gulp.task('serve', gulp.series(
  [
    'styles',
    'scripts:thirdparty',
    'scripts:components',
    'images',
    'fonts'
  ], function (done) {

    // Watch styles
    gulp.watch(paths.styles.glob, gulp.series(['styles'], function (done) {
      done();
    }));

    // Watch component scripts
    gulp.watch(paths.scripts.components, gulp.series(['scripts:components'], function(done) {
      done();
    }));

    done();
  }
));


// =DEFAULT
gulp.task('default', gulp.series(['clean:dist', 'serve'], function(done) {
  done();
}));


