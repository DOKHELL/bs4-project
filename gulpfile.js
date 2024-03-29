var gulp = require('gulp'), // Подключаем Gulp
	scss = require('gulp-sass'), //Подключаем Sass пакет,
	browserSync = require('browser-sync'), // Подключаем Browser Sync
	concat = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del = require('del'), // Подключаем библиотеку для удаления файлов и папок
	imagemin = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	pngquant = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
	cache = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов
	pug = require('gulp-pug');
 

gulp.task('pug', function() {
  return gulp.src("app/layout/*.pug")
      .pipe(pug({
		  pretty:true
	  }))
      .pipe(gulp.dest("app/"))
      .pipe(browserSync.stream());
});

gulp.task('scss', function () { // Создаем таск scss
	return gulp.src('app/scss/**/*.scss') // Берем источник
		.pipe(scss()) // Преобразуем scss в CSS посредством gulp-scss
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // Создаем префиксы
		.pipe(gulp.dest('app/css')) // Выгружаем результата в папку app/css
		.pipe(browserSync.reload({ stream: true })) // Обновляем CSS на странице при изменении
});

gulp.task('browser-sync', function () { // Создаем таск browser-sync
	browserSync({ // Выполняем browserSync
		server: { // Определяем параметры сервера
			baseDir: 'app' // Директория для сервера - app
		},
		notify: false // Отключаем уведомления
	});
});

gulp.task('scripts', function () {
	return gulp.src([
		"app/libs/slick/slick/slick.min.js",
		"app/libs/mixitup/dist/mixitup.min.js",
		"app/libs/jquery-match-height-master/dist/jquery.matchHeight-min.js",
		"app/libs/bootstrap-4/js/bootstrap.min.js"
	])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(gulp.dest('app/js')); // Выгружаем в папку app/js 
});

gulp.task('code', function () {
	return gulp.src('app/*.html')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('css', function () {
	return gulp.src('app/css/*.min.css')
		.pipe(browserSync.reload({ stream: true }))
});

gulp.task('css-min', function () {
	return gulp.src('app/css/main.css') // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({ suffix: '.min' })) // Добавляем суффикс .min
		.pipe(gulp.dest('app/css')); // Выгружаем в папку app/css
});

gulp.task('clean', async function () {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});

gulp.task('img', function () {
	return gulp.src('app/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({ // С кешированием
			// .pipe(imagemin({ // Сжимаем изображения без кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{ removeViewBox: false }],
			use: [pngquant()]
		}))/**/)
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

gulp.task('prebuild', async function () {

	var buildCss = gulp.src([ // Переносим библиотеки в продакшен
		'app/css/main.min.css'
	])
		.pipe(gulp.dest('dist/css'))

	var buildFonts = gulp.src('app/fonts/**/*') // Переносим шрифты в продакшен
		.pipe(gulp.dest('dist/fonts'))

	var buildJs = gulp.src('app/js/**/*') // Переносим скрипты в продакшен
		.pipe(gulp.dest('dist/js'))

	var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
		.pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
	return cache.clearAll();
})

gulp.task('watch', function () {
	gulp.watch('app/scss/**/*.scss', gulp.parallel('scss')); // Наблюдение за scss файлами
	gulp.watch('app/css/main.css', gulp.parallel('css-min'));
	gulp.watch('app/modules/*.pug', gulp.parallel('pug'));
	gulp.watch('app/components/*.pug', gulp.parallel('pug'));
	gulp.watch('app/partials/*.pug', gulp.parallel('pug'));
	gulp.watch('app/css/*.min.css', gulp.parallel('css'));
	gulp.watch('app/*.html', gulp.parallel('code')); // Наблюдение за HTML файлами в корне проекта
	gulp.watch(['app/js/main.js', 'app/libs/**/*.js'], gulp.parallel('scripts')); // Наблюдение за главным JS файлом и за библиотеками
});

gulp.task('default', gulp.parallel('scss', 'browser-sync', 'watch','pug','scripts'));
gulp.task('build', gulp.parallel('prebuild', 'clean', 'scss', 'scripts', "img"));