/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/resizer.js":
/*!*****************************!*\
  !*** ./src/core/resizer.js ***!
  \*****************************/
/***/ (() => {

var defaultWidth = 1440,
    defaultFont = 16,
    mobileFont = 16,
    minWidth = 768,
    minHeight = 600,
    defaultHeight = 900;

function fSize(device, vW, vH) {
  if (vW <= 374) {
    return 13;
  }

  return device ? mobileFont : defaultFont * Math.min(Math.max(minWidth, vW) / defaultWidth, Math.max(minHeight, vH) / defaultHeight);
}

function modifierDevice() {
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var isMobile = windowWidth <= 767;

  if (document.body) {
    document.body.style.fontSize = fSize(isMobile, windowWidth, windowHeight) + "px";
  }

  if (isMobile) {
    document.documentElement.classList.add("mobile");
  } else {
    document.documentElement.classList.remove("mobile");
  }
}

window.onload = function () {
  modifierDevice();
};

window.onresize = function () {
  modifierDevice();
};

modifierDevice();

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/views/index.pug":
/*!*****************************!*\
  !*** ./src/views/index.pug ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_mixins["image"] = pug_interp = function(file){
var block = (this && this.block), attributes = (this && this.attributes) || {};
pug_html = pug_html + "\u003Cimg" + (pug.attr("class", pug.classes([attributes.class], [false]), false, true)+pug.attr("src", __webpack_require__("./src/assets/images sync recursive ^\\.\\/.*$")(`./${file}`), true, true)+" alt=\"\"") + "\u003E";
};




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C!-- Stylesheet for Swiper--\u003E\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.css\"\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E\u003Csection class=\"chanels-page\"\u003E\u003Cdiv class=\"page-descr\"\u003E\u003Cdiv class=\"page-descr__text\"\u003E\u003Cspan\u003EКаналы на любой вкус\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-descr__action\"\u003E\u003Cdiv class=\"main-btn main-btn--red\"\u003E\u003Cspan\u003EПолучить список каналов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanels-page__items\"\u003E\u003Cdiv class=\"chanels-page__item\"\u003E\u003Cdiv class=\"chanels-page__item-descr\"\u003E\u003Cdiv class=\"chanels-page__item-title\"\u003E\u003Cspan\u003EНовостные каналы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanels-page__item-subtitle\"\u003E\u003Cspan\u003EБудьте в курсе всех свежих новостей\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanels-page__item-list\"\u003E";
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanels-page__item\"\u003E\u003Cdiv class=\"chanels-page__item-descr\"\u003E\u003Cdiv class=\"chanels-page__item-title\"\u003E\u003Cspan\u003EНовостные каналы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanels-page__item-subtitle\"\u003E\u003Cspan\u003EБудьте в курсе всех свежих новостей\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"chanels-page__item-list\"\u003E";
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_mixins["image"]('chanel-1.png');
pug_mixins["image"]('chanel-2.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-descr\"\u003E\u003Cdiv class=\"page-descr__text\"\u003E\u003Cspan\u003EПолучите список всех каналов RedmaxTV\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-descr__action\"\u003E\u003Cdiv class=\"main-btn main-btn--red\"\u003E\u003Cspan\u003EПолучить список каналов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003C\u002Fdiv\u003E\u003C!-- Script for Swiper--\u003E\u003Cscript src=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003C!-- Initialize Swiper--\u003E\u003Cscript\u003Evar swiper = new Swiper(\".mySwiper\", {\n  centeredSlides: true,\n  slidesPerView: 4.5,\n  spaceBetween: 30,\n  loop: true,\n  loopedSlides: 4,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true,\n  },\n});\ndocument.querySelectorAll('.swiper-slide').forEach(slide =\u003E {\n  slide.addEventListener('click', function () {\n    var index = parseInt(this.getAttribute('data-slide-index'), 10);\n    swiper.slideTo(index + 2, 500);\n  });\n});\n\u002F\u002F- var swiper = new Swiper(\".mySwiper\", {\n\u002F\u002F-   direction: \"vertical\",\n\u002F\u002F-   slidesPerView: 1,\n\u002F\u002F-   spaceBetween: 30,\n\u002F\u002F-   mousewheel: true,\n\u002F\u002F-   pagination: {\n\u002F\u002F-     el: \".swiper-pagination\",\n\u002F\u002F-     clickable: true,\n\u002F\u002F-   },\n\u002F\u002F- });\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./node_modules/pug-runtime/index.js":
/*!*******************************************!*\
  !*** ./node_modules/pug-runtime/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var pug_has_own_property = Object.prototype.hasOwnProperty;

/**
 * Merge two attribute objects giving precedence
 * to values in object `b`. Classes are special-cased
 * allowing for arrays and merging/joining appropriately
 * resulting in a string.
 *
 * @param {Object} a
 * @param {Object} b
 * @return {Object} a
 * @api private
 */

exports.merge = pug_merge;
function pug_merge(a, b) {
  if (arguments.length === 1) {
    var attrs = a[0];
    for (var i = 1; i < a.length; i++) {
      attrs = pug_merge(attrs, a[i]);
    }
    return attrs;
  }

  for (var key in b) {
    if (key === 'class') {
      var valA = a[key] || [];
      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
    } else if (key === 'style') {
      var valA = pug_style(a[key]);
      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;
      var valB = pug_style(b[key]);
      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;
      a[key] = valA + valB;
    } else {
      a[key] = b[key];
    }
  }

  return a;
};

/**
 * Process array, object, or string as a string of classes delimited by a space.
 *
 * If `val` is an array, all members of it and its subarrays are counted as
 * classes. If `escaping` is an array, then whether or not the item in `val` is
 * escaped depends on the corresponding item in `escaping`. If `escaping` is
 * not an array, no escaping is done.
 *
 * If `val` is an object, all the keys whose value is truthy are counted as
 * classes. No escaping is done.
 *
 * If `val` is a string, it is counted as a class. No escaping is done.
 *
 * @param {(Array.<string>|Object.<string, boolean>|string)} val
 * @param {?Array.<string>} escaping
 * @return {String}
 */
exports.classes = pug_classes;
function pug_classes_array(val, escaping) {
  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
  for (var i = 0; i < val.length; i++) {
    className = pug_classes(val[i]);
    if (!className) continue;
    escapeEnabled && escaping[i] && (className = pug_escape(className));
    classString = classString + padding + className;
    padding = ' ';
  }
  return classString;
}
function pug_classes_object(val) {
  var classString = '', padding = '';
  for (var key in val) {
    if (key && val[key] && pug_has_own_property.call(val, key)) {
      classString = classString + padding + key;
      padding = ' ';
    }
  }
  return classString;
}
function pug_classes(val, escaping) {
  if (Array.isArray(val)) {
    return pug_classes_array(val, escaping);
  } else if (val && typeof val === 'object') {
    return pug_classes_object(val);
  } else {
    return val || '';
  }
}

/**
 * Convert object or string to a string of CSS styles delimited by a semicolon.
 *
 * @param {(Object.<string, string>|string)} val
 * @return {String}
 */

exports.style = pug_style;
function pug_style(val) {
  if (!val) return '';
  if (typeof val === 'object') {
    var out = '';
    for (var style in val) {
      /* istanbul ignore else */
      if (pug_has_own_property.call(val, style)) {
        out = out + style + ':' + val[style] + ';';
      }
    }
    return out;
  } else {
    return val + '';
  }
};

/**
 * Render the given attribute.
 *
 * @param {String} key
 * @param {String} val
 * @param {Boolean} escaped
 * @param {Boolean} terse
 * @return {String}
 */
exports.attr = pug_attr;
function pug_attr(key, val, escaped, terse) {
  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
    return '';
  }
  if (val === true) {
    return ' ' + (terse ? key : key + '="' + key + '"');
  }
  var type = typeof val;
  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {
    val = val.toJSON();
  }
  if (typeof val !== 'string') {
    val = JSON.stringify(val);
    if (!escaped && val.indexOf('"') !== -1) {
      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
    }
  }
  if (escaped) val = pug_escape(val);
  return ' ' + key + '="' + val + '"';
};

/**
 * Render the given attributes object.
 *
 * @param {Object} obj
 * @param {Object} terse whether to use HTML5 terse boolean attributes
 * @return {String}
 */
exports.attrs = pug_attrs;
function pug_attrs(obj, terse){
  var attrs = '';

  for (var key in obj) {
    if (pug_has_own_property.call(obj, key)) {
      var val = obj[key];

      if ('class' === key) {
        val = pug_classes(val);
        attrs = pug_attr(key, val, false, terse) + attrs;
        continue;
      }
      if ('style' === key) {
        val = pug_style(val);
      }
      attrs += pug_attr(key, val, false, terse);
    }
  }

  return attrs;
};

/**
 * Escape the given string of `html`.
 *
 * @param {String} html
 * @return {String}
 * @api private
 */

var pug_match_html = /["&<>]/;
exports.escape = pug_escape;
function pug_escape(_html){
  var html = '' + _html;
  var regexResult = pug_match_html.exec(html);
  if (!regexResult) return _html;

  var result = '';
  var i, lastIndex, escape;
  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
    switch (html.charCodeAt(i)) {
      case 34: escape = '&quot;'; break;
      case 38: escape = '&amp;'; break;
      case 60: escape = '&lt;'; break;
      case 62: escape = '&gt;'; break;
      default: continue;
    }
    if (lastIndex !== i) result += html.substring(lastIndex, i);
    lastIndex = i + 1;
    result += escape;
  }
  if (lastIndex !== i) return result + html.substring(lastIndex, i);
  else return result;
};

/**
 * Re-throw the given `err` in context to the
 * the pug in `filename` at the given `lineno`.
 *
 * @param {Error} err
 * @param {String} filename
 * @param {String} lineno
 * @param {String} str original source
 * @api private
 */

exports.rethrow = pug_rethrow;
function pug_rethrow(err, filename, lineno, str){
  if (!(err instanceof Error)) throw err;
  if ((typeof window != 'undefined' || !filename) && !str) {
    err.message += ' on line ' + lineno;
    throw err;
  }
  try {
    str = str || (__webpack_require__(/*! fs */ "?8f63").readFileSync)(filename, 'utf8')
  } catch (ex) {
    pug_rethrow(err, null, lineno)
  }
  var context = 3
    , lines = str.split('\n')
    , start = Math.max(lineno - context, 0)
    , end = Math.min(lines.length, lineno + context);

  // Error context
  var context = lines.slice(start, end).map(function(line, i){
    var curr = i + start + 1;
    return (curr == lineno ? '  > ' : '    ')
      + curr
      + '| '
      + line;
  }).join('\n');

  // Alter exception message
  err.path = filename;
  err.message = (filename || 'Pug') + ':' + lineno
    + '\n' + context + '\n\n' + err.message;
  throw err;
};


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
document.addEventListener("DOMContentLoaded", function (event) {
    // faqToggle();
    // burgerToggle()
    // firstLoad();
});



/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Icon-arrow--vertical.svg": "./src/assets/images/Icon-arrow--vertical.svg",
	"./Icon-attention.svg": "./src/assets/images/Icon-attention.svg",
	"./Icon-favorite.svg": "./src/assets/images/Icon-favorite.svg",
	"./Icon-folder.svg": "./src/assets/images/Icon-folder.svg",
	"./Icon-group.svg": "./src/assets/images/Icon-group.svg",
	"./Icon-home.svg": "./src/assets/images/Icon-home.svg",
	"./Icon-menu.svg": "./src/assets/images/Icon-menu.svg",
	"./Icon-movie.svg": "./src/assets/images/Icon-movie.svg",
	"./Icon-search.svg": "./src/assets/images/Icon-search.svg",
	"./Icon-settings.svg": "./src/assets/images/Icon-settings.svg",
	"./Icon-tv.svg": "./src/assets/images/Icon-tv.svg",
	"./Icon-user.svg": "./src/assets/images/Icon-user.svg",
	"./Logo-svg.svg": "./src/assets/images/Logo-svg.svg",
	"./Logo.png": "./src/assets/images/Logo.png",
	"./Logo.svg": "./src/assets/images/Logo.svg",
	"./TV LOGO1.png": "./src/assets/images/TV LOGO1.png",
	"./TV LOGO10.png": "./src/assets/images/TV LOGO10.png",
	"./TV LOGO11.png": "./src/assets/images/TV LOGO11.png",
	"./TV LOGO2.png": "./src/assets/images/TV LOGO2.png",
	"./TV LOGO3.png": "./src/assets/images/TV LOGO3.png",
	"./TV LOGO4.png": "./src/assets/images/TV LOGO4.png",
	"./TV LOGO5.png": "./src/assets/images/TV LOGO5.png",
	"./TV LOGO6.png": "./src/assets/images/TV LOGO6.png",
	"./TV LOGO7.png": "./src/assets/images/TV LOGO7.png",
	"./TV LOGO8.png": "./src/assets/images/TV LOGO8.png",
	"./TV LOGO9.png": "./src/assets/images/TV LOGO9.png",
	"./blog-image1.png": "./src/assets/images/blog-image1.png",
	"./calendar_clock.svg": "./src/assets/images/calendar_clock.svg",
	"./chanel-1.png": "./src/assets/images/chanel-1.png",
	"./chanel-2.png": "./src/assets/images/chanel-2.png",
	"./descr-movie.png": "./src/assets/images/descr-movie.png",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./footer-apple.svg": "./src/assets/images/footer-apple.svg",
	"./footer-google.svg": "./src/assets/images/footer-google.svg",
	"./footer-lg.svg": "./src/assets/images/footer-lg.svg",
	"./footer-smart.svg": "./src/assets/images/footer-smart.svg",
	"./heart-start.svg": "./src/assets/images/heart-start.svg",
	"./heart-start_1.svg": "./src/assets/images/heart-start_1.svg",
	"./heart-to.svg": "./src/assets/images/heart-to.svg",
	"./icon-arrow.svg": "./src/assets/images/icon-arrow.svg",
	"./icon-check.svg": "./src/assets/images/icon-check.svg",
	"./icon-footer-phone.svg": "./src/assets/images/icon-footer-phone.svg",
	"./icon-go.svg": "./src/assets/images/icon-go.svg",
	"./icon-location.svg": "./src/assets/images/icon-location.svg",
	"./icon-mail.svg": "./src/assets/images/icon-mail.svg",
	"./icon-phone.svg": "./src/assets/images/icon-phone.svg",
	"./icon-star.svg": "./src/assets/images/icon-star.svg",
	"./image-1.png": "./src/assets/images/image-1.png",
	"./iphone.png": "./src/assets/images/iphone.png",
	"./logo-text.png": "./src/assets/images/logo-text.png",
	"./logo-text.svg": "./src/assets/images/logo-text.svg",
	"./movie-image-full.png": "./src/assets/images/movie-image-full.png",
	"./poster.png": "./src/assets/images/poster.png",
	"./promo-1.png": "./src/assets/images/promo-1.png",
	"./promo-line.svg": "./src/assets/images/promo-line.svg",
	"./servce-lg.svg": "./src/assets/images/servce-lg.svg",
	"./service-android.svg": "./src/assets/images/service-android.svg",
	"./service-apple.svg": "./src/assets/images/service-apple.svg",
	"./service-arh.svg": "./src/assets/images/service-arh.svg",
	"./service-chat.svg": "./src/assets/images/service-chat.svg",
	"./service-cinema.svg": "./src/assets/images/service-cinema.svg",
	"./service-pc.svg": "./src/assets/images/service-pc.svg",
	"./service-phone.svg": "./src/assets/images/service-phone.svg",
	"./service-samsung.svg": "./src/assets/images/service-samsung.svg",
	"./service-tablet.svg": "./src/assets/images/service-tablet.svg",
	"./service-tv.svg": "./src/assets/images/service-tv.svg",
	"./servise-wallet.svg": "./src/assets/images/servise-wallet.svg",
	"./sevrice-laptop.svg": "./src/assets/images/sevrice-laptop.svg",
	"./slider-arcive.png": "./src/assets/images/slider-arcive.png",
	"./slider-arcive2.png": "./src/assets/images/slider-arcive2.png",
	"./slider-cinema.png": "./src/assets/images/slider-cinema.png",
	"./slider-cinema2.png": "./src/assets/images/slider-cinema2.png",
	"./slider-fav.png": "./src/assets/images/slider-fav.png",
	"./slider-fav2.png": "./src/assets/images/slider-fav2.png",
	"./slider-favotite.png": "./src/assets/images/slider-favotite.png",
	"./slider-home.png": "./src/assets/images/slider-home.png",
	"./slider-home2.png": "./src/assets/images/slider-home2.png",
	"./slider-tv.png": "./src/assets/images/slider-tv.png",
	"./slider-tv2.png": "./src/assets/images/slider-tv2.png",
	"./spiner-img1.png": "./src/assets/images/spiner-img1.png",
	"./spiner-img2.png": "./src/assets/images/spiner-img2.png",
	"./spiner-img3.png": "./src/assets/images/spiner-img3.png",
	"./spiner-img4.png": "./src/assets/images/spiner-img4.png",
	"./spiner-img5.png": "./src/assets/images/spiner-img5.png",
	"./spiner-img6.png": "./src/assets/images/spiner-img6.png",
	"./spiner-img7.png": "./src/assets/images/spiner-img7.png",
	"./spiner-img8.png": "./src/assets/images/spiner-img8.png",
	"./storie-image1.png": "./src/assets/images/storie-image1.png",
	"./tsconfig.svg": "./src/assets/images/tsconfig.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/assets/images/Icon-arrow--vertical.svg":
/*!****************************************************!*\
  !*** ./src/assets/images/Icon-arrow--vertical.svg ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b86929e4069ead5097ff.svg";

/***/ }),

/***/ "./src/assets/images/Icon-attention.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/Icon-attention.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/feda0ce5f95b396f0642.svg";

/***/ }),

/***/ "./src/assets/images/Icon-favorite.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/Icon-favorite.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a16117c927c71e7f5300.svg";

/***/ }),

/***/ "./src/assets/images/Icon-folder.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/Icon-folder.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9af0aaac9fa4240e3bc5.svg";

/***/ }),

/***/ "./src/assets/images/Icon-group.svg":
/*!******************************************!*\
  !*** ./src/assets/images/Icon-group.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7f7f6ba05328f32131af.svg";

/***/ }),

/***/ "./src/assets/images/Icon-home.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/Icon-home.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b22269321605b15ea73d.svg";

/***/ }),

/***/ "./src/assets/images/Icon-menu.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/Icon-menu.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f0796b5a2be7f4bf9704.svg";

/***/ }),

/***/ "./src/assets/images/Icon-movie.svg":
/*!******************************************!*\
  !*** ./src/assets/images/Icon-movie.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/3c1f72e98fc5e9e5ff8e.svg";

/***/ }),

/***/ "./src/assets/images/Icon-search.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/Icon-search.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/45c10150a870d6e04e8f.svg";

/***/ }),

/***/ "./src/assets/images/Icon-settings.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/Icon-settings.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/62d342576f29defe25a4.svg";

/***/ }),

/***/ "./src/assets/images/Icon-tv.svg":
/*!***************************************!*\
  !*** ./src/assets/images/Icon-tv.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9b7a5387d2e1dadde079.svg";

/***/ }),

/***/ "./src/assets/images/Icon-user.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/Icon-user.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1c2c987dd6648a65e4f1.svg";

/***/ }),

/***/ "./src/assets/images/Logo-svg.svg":
/*!****************************************!*\
  !*** ./src/assets/images/Logo-svg.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8c130b7fb01461eee564.svg";

/***/ }),

/***/ "./src/assets/images/Logo.png":
/*!************************************!*\
  !*** ./src/assets/images/Logo.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bc7d73abe088385fe245.png";

/***/ }),

/***/ "./src/assets/images/Logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/Logo.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ba727b774737f66984ed.svg";

/***/ }),

/***/ "./src/assets/images/TV LOGO1.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7f5c1ae8f8e24a4842f6.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO10.png":
/*!*****************************************!*\
  !*** ./src/assets/images/TV LOGO10.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a038fb3f862e70a8ac64.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO11.png":
/*!*****************************************!*\
  !*** ./src/assets/images/TV LOGO11.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4535f3f71c696c85f584.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO2.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/eb5ae25fd2e20073a90f.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO3.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO3.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d8f7f24289c1362cd601.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO4.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO4.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6cfad8c89efa2f70f118.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO5.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO5.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/bc2d492c62047d81ac11.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO6.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO6.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/62d665b06e348a888732.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO7.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO7.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a2ee720d2203add3890a.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO8.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO8.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c653a8c81100425d84d5.png";

/***/ }),

/***/ "./src/assets/images/TV LOGO9.png":
/*!****************************************!*\
  !*** ./src/assets/images/TV LOGO9.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ebc03b28bd8cb3a164a6.png";

/***/ }),

/***/ "./src/assets/images/blog-image1.png":
/*!*******************************************!*\
  !*** ./src/assets/images/blog-image1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/06a1d9d932baf2d8b6dd.png";

/***/ }),

/***/ "./src/assets/images/calendar_clock.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/calendar_clock.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6f517d61cadfcec72081.svg";

/***/ }),

/***/ "./src/assets/images/chanel-1.png":
/*!****************************************!*\
  !*** ./src/assets/images/chanel-1.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f89cf041ed5337ee670b.png";

/***/ }),

/***/ "./src/assets/images/chanel-2.png":
/*!****************************************!*\
  !*** ./src/assets/images/chanel-2.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e7f13f4f93590d6da345.png";

/***/ }),

/***/ "./src/assets/images/descr-movie.png":
/*!*******************************************!*\
  !*** ./src/assets/images/descr-movie.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c66afc2df94b1602f4e0.png";

/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

/***/ }),

/***/ "./src/assets/images/footer-apple.svg":
/*!********************************************!*\
  !*** ./src/assets/images/footer-apple.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/160a8d5d845317a7b850.svg";

/***/ }),

/***/ "./src/assets/images/footer-google.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/footer-google.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/888e6344eba51aeae78e.svg";

/***/ }),

/***/ "./src/assets/images/footer-lg.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/footer-lg.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/894986645a2c4525472b.svg";

/***/ }),

/***/ "./src/assets/images/footer-smart.svg":
/*!********************************************!*\
  !*** ./src/assets/images/footer-smart.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/2912a6ec384424b9a76f.svg";

/***/ }),

/***/ "./src/assets/images/heart-start.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/heart-start.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9c596705ab717407d536.svg";

/***/ }),

/***/ "./src/assets/images/heart-start_1.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/heart-start_1.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/49348e2bc464fcbbabaa.svg";

/***/ }),

/***/ "./src/assets/images/heart-to.svg":
/*!****************************************!*\
  !*** ./src/assets/images/heart-to.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/48e429e69af376427883.svg";

/***/ }),

/***/ "./src/assets/images/icon-arrow.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-arrow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/b61058de4930a6803d87.svg";

/***/ }),

/***/ "./src/assets/images/icon-check.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-check.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/dd9f299e8a7a9d6b6cc2.svg";

/***/ }),

/***/ "./src/assets/images/icon-footer-phone.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/icon-footer-phone.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f2f771359b2d8f00c099.svg";

/***/ }),

/***/ "./src/assets/images/icon-go.svg":
/*!***************************************!*\
  !*** ./src/assets/images/icon-go.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4741d89b3b46f1ec6650.svg";

/***/ }),

/***/ "./src/assets/images/icon-location.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/icon-location.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/871f2725d12044265c57.svg";

/***/ }),

/***/ "./src/assets/images/icon-mail.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-mail.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/fbd9c89f3c9f5851818e.svg";

/***/ }),

/***/ "./src/assets/images/icon-phone.svg":
/*!******************************************!*\
  !*** ./src/assets/images/icon-phone.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e3d4c6232ac49786db78.svg";

/***/ }),

/***/ "./src/assets/images/icon-star.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/icon-star.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5d0fa2a3308f7e90d5b7.svg";

/***/ }),

/***/ "./src/assets/images/image-1.png":
/*!***************************************!*\
  !*** ./src/assets/images/image-1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9534ad2fc168cf75a9ce.png";

/***/ }),

/***/ "./src/assets/images/iphone.png":
/*!**************************************!*\
  !*** ./src/assets/images/iphone.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5270db05d34af6b8b824.png";

/***/ }),

/***/ "./src/assets/images/logo-text.png":
/*!*****************************************!*\
  !*** ./src/assets/images/logo-text.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/14d9efa3a175f43ade00.png";

/***/ }),

/***/ "./src/assets/images/logo-text.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/logo-text.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d66a1aecbd1fd75a25ce.svg";

/***/ }),

/***/ "./src/assets/images/movie-image-full.png":
/*!************************************************!*\
  !*** ./src/assets/images/movie-image-full.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/745bf837143d5dfd2689.png";

/***/ }),

/***/ "./src/assets/images/poster.png":
/*!**************************************!*\
  !*** ./src/assets/images/poster.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7358707b783cc9991301.png";

/***/ }),

/***/ "./src/assets/images/promo-1.png":
/*!***************************************!*\
  !*** ./src/assets/images/promo-1.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/033d6032d90ea22c71de.png";

/***/ }),

/***/ "./src/assets/images/promo-line.svg":
/*!******************************************!*\
  !*** ./src/assets/images/promo-line.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/7e0502deeda94155ab2a.svg";

/***/ }),

/***/ "./src/assets/images/servce-lg.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/servce-lg.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/adbc4036b1b68149461b.svg";

/***/ }),

/***/ "./src/assets/images/service-android.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/service-android.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8dc8785c09536f8a79c9.svg";

/***/ }),

/***/ "./src/assets/images/service-apple.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/service-apple.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/efd341ff5ea3b788fe6c.svg";

/***/ }),

/***/ "./src/assets/images/service-arh.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/service-arh.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/306c1a283324ae3bcf30.svg";

/***/ }),

/***/ "./src/assets/images/service-chat.svg":
/*!********************************************!*\
  !*** ./src/assets/images/service-chat.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ccd90724e6a7145db5a3.svg";

/***/ }),

/***/ "./src/assets/images/service-cinema.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/service-cinema.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1542ac53d65f0ee54f2c.svg";

/***/ }),

/***/ "./src/assets/images/service-pc.svg":
/*!******************************************!*\
  !*** ./src/assets/images/service-pc.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/ff7b5a0c2bd7cd22c538.svg";

/***/ }),

/***/ "./src/assets/images/service-phone.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/service-phone.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e3a714f2e65af80f370e.svg";

/***/ }),

/***/ "./src/assets/images/service-samsung.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/service-samsung.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e9b12635eb1d591fc9ab.svg";

/***/ }),

/***/ "./src/assets/images/service-tablet.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/service-tablet.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e9b41a40410c59ada24b.svg";

/***/ }),

/***/ "./src/assets/images/service-tv.svg":
/*!******************************************!*\
  !*** ./src/assets/images/service-tv.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a81f35e38a5e08baac90.svg";

/***/ }),

/***/ "./src/assets/images/servise-wallet.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/servise-wallet.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f289955947e6502f585d.svg";

/***/ }),

/***/ "./src/assets/images/sevrice-laptop.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/sevrice-laptop.svg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/917889024ee6eda890d0.svg";

/***/ }),

/***/ "./src/assets/images/slider-arcive.png":
/*!*********************************************!*\
  !*** ./src/assets/images/slider-arcive.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/86bc0e4e179dc2e3f811.png";

/***/ }),

/***/ "./src/assets/images/slider-arcive2.png":
/*!**********************************************!*\
  !*** ./src/assets/images/slider-arcive2.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/50e2912c88f67dc67fc9.png";

/***/ }),

/***/ "./src/assets/images/slider-cinema.png":
/*!*********************************************!*\
  !*** ./src/assets/images/slider-cinema.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/cc911fb02909d4f6ae46.png";

/***/ }),

/***/ "./src/assets/images/slider-cinema2.png":
/*!**********************************************!*\
  !*** ./src/assets/images/slider-cinema2.png ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/8ca5b9bac42220c75d49.png";

/***/ }),

/***/ "./src/assets/images/slider-fav.png":
/*!******************************************!*\
  !*** ./src/assets/images/slider-fav.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e7b2ecde3744eb3fc038.png";

/***/ }),

/***/ "./src/assets/images/slider-fav2.png":
/*!*******************************************!*\
  !*** ./src/assets/images/slider-fav2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/547997ae947a267587bf.png";

/***/ }),

/***/ "./src/assets/images/slider-favotite.png":
/*!***********************************************!*\
  !*** ./src/assets/images/slider-favotite.png ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/77605d0063120f7b0b2a.png";

/***/ }),

/***/ "./src/assets/images/slider-home.png":
/*!*******************************************!*\
  !*** ./src/assets/images/slider-home.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/820bad53986f3bef20a7.png";

/***/ }),

/***/ "./src/assets/images/slider-home2.png":
/*!********************************************!*\
  !*** ./src/assets/images/slider-home2.png ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0b4d5f69664a0e3d34c5.png";

/***/ }),

/***/ "./src/assets/images/slider-tv.png":
/*!*****************************************!*\
  !*** ./src/assets/images/slider-tv.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/5edbdd8112662802ea24.png";

/***/ }),

/***/ "./src/assets/images/slider-tv2.png":
/*!******************************************!*\
  !*** ./src/assets/images/slider-tv2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a6025905a15c2b0905a7.png";

/***/ }),

/***/ "./src/assets/images/spiner-img1.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img1.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e2ca05d06ad26acb6714.png";

/***/ }),

/***/ "./src/assets/images/spiner-img2.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img2.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/d95d817b1ffcc2b379dd.png";

/***/ }),

/***/ "./src/assets/images/spiner-img3.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img3.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1a1962887f5c01090af0.png";

/***/ }),

/***/ "./src/assets/images/spiner-img4.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img4.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/0c5125149da0a84a4d10.png";

/***/ }),

/***/ "./src/assets/images/spiner-img5.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img5.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/1e1dabe8d693eb1f923f.png";

/***/ }),

/***/ "./src/assets/images/spiner-img6.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img6.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/9ae9bac897da83f6672d.png";

/***/ }),

/***/ "./src/assets/images/spiner-img7.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img7.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/03938af46050254d15df.png";

/***/ }),

/***/ "./src/assets/images/spiner-img8.png":
/*!*******************************************!*\
  !*** ./src/assets/images/spiner-img8.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/88370b9ed57ba357d876.png";

/***/ }),

/***/ "./src/assets/images/storie-image1.png":
/*!*********************************************!*\
  !*** ./src/assets/images/storie-image1.png ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/e5981bd824fa729b2ce9.png";

/***/ }),

/***/ "./src/assets/images/tsconfig.svg":
/*!****************************************!*\
  !*** ./src/assets/images/tsconfig.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/888e6344eba51aeae78e.svg";

/***/ }),

/***/ "?8f63":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/resizer */ "./src/core/resizer.js");
/* harmony import */ var _core_resizer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_resizer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main */ "./src/core/main.ts");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlHQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ3lCO0FBQ0Q7QUFDSDtBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL3Jlc2l6ZXIuanMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9zY3NzL2FwcC5zY3NzPzhiNmYiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy92aWV3cy9pbmRleC5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzLzdlcmhpeS9EZXNrdG9wL1dFQi9wcm9qZWN0cy9SZWRtYXhldS9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lfGZzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcblxuXG5cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0MhLS0gU3R5bGVzaGVldCBmb3IgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ2xpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmNkbi5qc2RlbGl2ci5uZXRcXHUwMDJGbnBtXFx1MDAyRnN3aXBlckAxMVxcdTAwMkZzd2lwZXItYnVuZGxlLm1pbi5jc3NcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiY2hhbmVscy1wYWdlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlLWRlc2NyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlLWRlc2NyX190ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtCw0L3QsNC70Ysg0L3QsCDQu9GO0LHQvtC5INCy0LrRg9GBXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2UtZGVzY3JfX2FjdGlvblxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXJlZFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QvtC70YPRh9C40YLRjCDRgdC/0LjRgdC+0Log0LrQsNC90LDQu9C+0LJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhbmVscy1wYWdlX19pdGVtc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhbmVscy1wYWdlX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGFuZWxzLXBhZ2VfX2l0ZW0tZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbHMtcGFnZV9faXRlbS10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J3QvtCy0L7RgdGC0L3Ri9C1INC60LDQvdCw0LvRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGFuZWxzLXBhZ2VfX2l0ZW0tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCR0YPQtNGM0YLQtSDQsiDQutGD0YDRgdC1INCy0YHQtdGFINGB0LLQtdC20LjRhSDQvdC+0LLQvtGB0YLQtdC5XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbHMtcGFnZV9faXRlbS1saXN0XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2hhbmVsLTEucG5nJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2NoYW5lbC0yLnBuZycpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjaGFuZWwtMS5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2hhbmVsLTIucG5nJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2NoYW5lbC0xLnBuZycpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjaGFuZWwtMi5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2hhbmVsLTEucG5nJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2NoYW5lbC0yLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY2hhbmVscy1wYWdlX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGFuZWxzLXBhZ2VfX2l0ZW0tZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbHMtcGFnZV9faXRlbS10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J3QvtCy0L7RgdGC0L3Ri9C1INC60LDQvdCw0LvRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjaGFuZWxzLXBhZ2VfX2l0ZW0tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCR0YPQtNGM0YLQtSDQsiDQutGD0YDRgdC1INCy0YHQtdGFINGB0LLQtdC20LjRhSDQvdC+0LLQvtGB0YLQtdC5XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImNoYW5lbHMtcGFnZV9faXRlbS1saXN0XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2hhbmVsLTEucG5nJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2NoYW5lbC0yLnBuZycpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjaGFuZWwtMS5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2hhbmVsLTIucG5nJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2NoYW5lbC0xLnBuZycpO1xucHVnX21peGluc1tcImltYWdlXCJdKCdjaGFuZWwtMi5wbmcnKTtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnY2hhbmVsLTEucG5nJyk7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ2NoYW5lbC0yLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZS1kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZS1kZXNjcl9fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QvtC70YPRh9C40YLQtSDRgdC/0LjRgdC+0Log0LLRgdC10YUg0LrQsNC90LDQu9C+0LIgUmVkbWF4VFZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicGFnZS1kZXNjcl9fYWN0aW9uXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluLWJ0biBtYWluLWJ0bi0tcmVkXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C+0LvRg9GH0LjRgtGMINGB0L/QuNGB0L7QuiDQutCw0L3QsNC70L7QslxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQyEtLSBTY3JpcHQgZm9yIFN3aXBlci0tXFx1MDAzRVxcdTAwM0NzY3JpcHQgc3JjPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmNkbi5qc2RlbGl2ci5uZXRcXHUwMDJGbnBtXFx1MDAyRnN3aXBlckAxMVxcdTAwMkZzd2lwZXItYnVuZGxlLm1pbi5qc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQyEtLSBJbml0aWFsaXplIFN3aXBlci0tXFx1MDAzRVxcdTAwM0NzY3JpcHRcXHUwMDNFdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXFxcIi5teVN3aXBlclxcXCIsIHtcXG4gIGNlbnRlcmVkU2xpZGVzOiB0cnVlLFxcbiAgc2xpZGVzUGVyVmlldzogNC41LFxcbiAgc3BhY2VCZXR3ZWVuOiAzMCxcXG4gIGxvb3A6IHRydWUsXFxuICBsb29wZWRTbGlkZXM6IDQsXFxuICBwYWdpbmF0aW9uOiB7XFxuICAgIGVsOiBcXFwiLnN3aXBlci1wYWdpbmF0aW9uXFxcIixcXG4gICAgY2xpY2thYmxlOiB0cnVlLFxcbiAgfSxcXG59KTtcXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc3dpcGVyLXNsaWRlJykuZm9yRWFjaChzbGlkZSA9XFx1MDAzRSB7XFxuICBzbGlkZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcXG4gICAgdmFyIGluZGV4ID0gcGFyc2VJbnQodGhpcy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2xpZGUtaW5kZXgnKSwgMTApO1xcbiAgICBzd2lwZXIuc2xpZGVUbyhpbmRleCArIDIsIDUwMCk7XFxuICB9KTtcXG59KTtcXG5cXHUwMDJGXFx1MDAyRi0gdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXFxcIi5teVN3aXBlclxcXCIsIHtcXG5cXHUwMDJGXFx1MDAyRi0gICBkaXJlY3Rpb246IFxcXCJ2ZXJ0aWNhbFxcXCIsXFxuXFx1MDAyRlxcdTAwMkYtICAgc2xpZGVzUGVyVmlldzogMSxcXG5cXHUwMDJGXFx1MDAyRi0gICBzcGFjZUJldHdlZW46IDMwLFxcblxcdTAwMkZcXHUwMDJGLSAgIG1vdXNld2hlZWw6IHRydWUsXFxuXFx1MDAyRlxcdTAwMkYtICAgcGFnaW5hdGlvbjoge1xcblxcdTAwMkZcXHUwMDJGLSAgICAgZWw6IFxcXCIuc3dpcGVyLXBhZ2luYXRpb25cXFwiLFxcblxcdTAwMkZcXHUwMDJGLSAgICAgY2xpY2thYmxlOiB0cnVlLFxcblxcdTAwMkZcXHUwMDJGLSAgIH0sXFxuXFx1MDAyRlxcdTAwMkYtIH0pO1xcdTAwM0NcXHUwMDJGc2NyaXB0XFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBmYXFUb2dnbGUoKTtcbiAgICAvLyBidXJnZXJUb2dnbGUoKVxuICAgIC8vIGZpcnN0TG9hZCgpO1xufSk7XG5leHBvcnQge307XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSWNvbi1hcnJvdy0tdmVydGljYWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWFycm93LS12ZXJ0aWNhbC5zdmdcIixcblx0XCIuL0ljb24tYXR0ZW50aW9uLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1hdHRlbnRpb24uc3ZnXCIsXG5cdFwiLi9JY29uLWZhdm9yaXRlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1mYXZvcml0ZS5zdmdcIixcblx0XCIuL0ljb24tZm9sZGVyLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1mb2xkZXIuc3ZnXCIsXG5cdFwiLi9JY29uLWdyb3VwLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1ncm91cC5zdmdcIixcblx0XCIuL0ljb24taG9tZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24taG9tZS5zdmdcIixcblx0XCIuL0ljb24tbWVudS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tbWVudS5zdmdcIixcblx0XCIuL0ljb24tbW92aWUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLW1vdmllLnN2Z1wiLFxuXHRcIi4vSWNvbi1zZWFyY2guc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXNlYXJjaC5zdmdcIixcblx0XCIuL0ljb24tc2V0dGluZ3Muc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXNldHRpbmdzLnN2Z1wiLFxuXHRcIi4vSWNvbi10di5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tdHYuc3ZnXCIsXG5cdFwiLi9JY29uLXVzZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXVzZXIuc3ZnXCIsXG5cdFwiLi9Mb2dvLXN2Zy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28tc3ZnLnN2Z1wiLFxuXHRcIi4vTG9nby5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28ucG5nXCIsXG5cdFwiLi9Mb2dvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvTG9nby5zdmdcIixcblx0XCIuL1RWIExPR08xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVFYgTE9HTzEucG5nXCIsXG5cdFwiLi9UViBMT0dPMTAucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UViBMT0dPMTAucG5nXCIsXG5cdFwiLi9UViBMT0dPMTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UViBMT0dPMTEucG5nXCIsXG5cdFwiLi9UViBMT0dPMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RWIExPR08yLnBuZ1wiLFxuXHRcIi4vVFYgTE9HTzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UViBMT0dPMy5wbmdcIixcblx0XCIuL1RWIExPR080LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVFYgTE9HTzQucG5nXCIsXG5cdFwiLi9UViBMT0dPNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RWIExPR081LnBuZ1wiLFxuXHRcIi4vVFYgTE9HTzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UViBMT0dPNi5wbmdcIixcblx0XCIuL1RWIExPR083LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvVFYgTE9HTzcucG5nXCIsXG5cdFwiLi9UViBMT0dPOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL1RWIExPR084LnBuZ1wiLFxuXHRcIi4vVFYgTE9HTzkucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9UViBMT0dPOS5wbmdcIixcblx0XCIuL2Jsb2ctaW1hZ2UxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvYmxvZy1pbWFnZTEucG5nXCIsXG5cdFwiLi9jYWxlbmRhcl9jbG9jay5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2NhbGVuZGFyX2Nsb2NrLnN2Z1wiLFxuXHRcIi4vY2hhbmVsLTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9jaGFuZWwtMS5wbmdcIixcblx0XCIuL2NoYW5lbC0yLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvY2hhbmVsLTIucG5nXCIsXG5cdFwiLi9kZXNjci1tb3ZpZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Rlc2NyLW1vdmllLnBuZ1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9mb290ZXItYXBwbGUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9mb290ZXItYXBwbGUuc3ZnXCIsXG5cdFwiLi9mb290ZXItZ29vZ2xlLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZm9vdGVyLWdvb2dsZS5zdmdcIixcblx0XCIuL2Zvb3Rlci1sZy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zvb3Rlci1sZy5zdmdcIixcblx0XCIuL2Zvb3Rlci1zbWFydC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zvb3Rlci1zbWFydC5zdmdcIixcblx0XCIuL2hlYXJ0LXN0YXJ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtc3RhcnQuc3ZnXCIsXG5cdFwiLi9oZWFydC1zdGFydF8xLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtc3RhcnRfMS5zdmdcIixcblx0XCIuL2hlYXJ0LXRvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtdG8uc3ZnXCIsXG5cdFwiLi9pY29uLWFycm93LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1hcnJvdy5zdmdcIixcblx0XCIuL2ljb24tY2hlY2suc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWNoZWNrLnN2Z1wiLFxuXHRcIi4vaWNvbi1mb290ZXItcGhvbmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWZvb3Rlci1waG9uZS5zdmdcIixcblx0XCIuL2ljb24tZ28uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWdvLnN2Z1wiLFxuXHRcIi4vaWNvbi1sb2NhdGlvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tbG9jYXRpb24uc3ZnXCIsXG5cdFwiLi9pY29uLW1haWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLW1haWwuc3ZnXCIsXG5cdFwiLi9pY29uLXBob25lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1waG9uZS5zdmdcIixcblx0XCIuL2ljb24tc3Rhci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tc3Rhci5zdmdcIixcblx0XCIuL2ltYWdlLTEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pbWFnZS0xLnBuZ1wiLFxuXHRcIi4vaXBob25lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaXBob25lLnBuZ1wiLFxuXHRcIi4vbG9nby10ZXh0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby10ZXh0LnBuZ1wiLFxuXHRcIi4vbG9nby10ZXh0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby10ZXh0LnN2Z1wiLFxuXHRcIi4vbW92aWUtaW1hZ2UtZnVsbC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL21vdmllLWltYWdlLWZ1bGwucG5nXCIsXG5cdFwiLi9wb3N0ZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wb3N0ZXIucG5nXCIsXG5cdFwiLi9wcm9tby0xLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW8tMS5wbmdcIixcblx0XCIuL3Byb21vLWxpbmUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wcm9tby1saW5lLnN2Z1wiLFxuXHRcIi4vc2VydmNlLWxnLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2VydmNlLWxnLnN2Z1wiLFxuXHRcIi4vc2VydmljZS1hbmRyb2lkLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2VydmljZS1hbmRyb2lkLnN2Z1wiLFxuXHRcIi4vc2VydmljZS1hcHBsZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2UtYXBwbGUuc3ZnXCIsXG5cdFwiLi9zZXJ2aWNlLWFyaC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2UtYXJoLnN2Z1wiLFxuXHRcIi4vc2VydmljZS1jaGF0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2VydmljZS1jaGF0LnN2Z1wiLFxuXHRcIi4vc2VydmljZS1jaW5lbWEuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlLWNpbmVtYS5zdmdcIixcblx0XCIuL3NlcnZpY2UtcGMuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlLXBjLnN2Z1wiLFxuXHRcIi4vc2VydmljZS1waG9uZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2UtcGhvbmUuc3ZnXCIsXG5cdFwiLi9zZXJ2aWNlLXNhbXN1bmcuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlLXNhbXN1bmcuc3ZnXCIsXG5cdFwiLi9zZXJ2aWNlLXRhYmxldC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2UtdGFibGV0LnN2Z1wiLFxuXHRcIi4vc2VydmljZS10di5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2UtdHYuc3ZnXCIsXG5cdFwiLi9zZXJ2aXNlLXdhbGxldC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpc2Utd2FsbGV0LnN2Z1wiLFxuXHRcIi4vc2V2cmljZS1sYXB0b3Auc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXZyaWNlLWxhcHRvcC5zdmdcIixcblx0XCIuL3NsaWRlci1hcmNpdmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWFyY2l2ZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlMi5wbmdcIixcblx0XCIuL3NsaWRlci1jaW5lbWEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWNpbmVtYTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hMi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2LnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWZhdjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2Mi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXZvdGl0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NsaWRlci1mYXZvdGl0ZS5wbmdcIixcblx0XCIuL3NsaWRlci1ob21lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLWhvbWUucG5nXCIsXG5cdFwiLi9zbGlkZXItaG9tZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItaG9tZTIucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItdHYucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLXR2Mi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWcxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzEucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWcyLnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nMy5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzQucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc1LnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nNi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzcucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc4LnBuZ1wiLFxuXHRcIi4vc3RvcmllLWltYWdlMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3N0b3JpZS1pbWFnZTEucG5nXCIsXG5cdFwiLi90c2NvbmZpZy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3RzY29uZmlnLnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==