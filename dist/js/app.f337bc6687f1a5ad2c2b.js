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




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C!-- Stylesheet for Swiper--\u003E\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.css\"\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cheader class=\"header\"\u003E\u003Ca class=\"header__logo\" href=\"#\"\u003E";
pug_mixins["image"]("Logo.png");
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Cdiv class=\"header__menu\"\u003E\u003Cul class=\"header__list\"\u003E\u003Cli class=\"header__item header__item--active\"\u003E\u003Cspan\u003ERedmax TV\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003ERedmax TV\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EКаналы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EВозможности\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EПомощь\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EВопросы и ответы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EДекодеры\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EАкции\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EАкции\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EАкции\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EАкции и предложения\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EУслуги\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EУслуги\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОбновление декодера\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОборудование\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EПереезд\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EСотрудничество\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EО сотруднечестве\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EРеклама\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EТарифы\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EТарифы\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EТарифные планы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОтмена сделки\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EО Нас\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EО Нас\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EПро Redmax\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОтзывы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EБлог\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EБлог\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EПоследние новости\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EПолезно знать\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EIPTV в Европе\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EТелевиденье в Европе\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EИнтернет в Европе\u003C\u002Fspan\u003E\u003Cspan\u003EОтзывы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EКонтакты\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EКонтакты\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EТелефон\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EE-MAIL\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EЛокация\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EСоциальные сети\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EFacebook\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EInstagram\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EWhats Up\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions\"\u003E\u003Cdiv class=\"header__actions-call\"\u003E\u003Cdiv class=\"main-btn main-btn--sm\"\u003E";
pug_mixins["image"]("icon-phone.png");
pug_html = pug_html + "\u003Cspan\u003E*2186\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions-join\"\u003E\u003Cdiv class=\"main-btn main-btn--sm\"\u003E\u003Cspan\u003EВход\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions-account\"\u003E\u003Cdiv class=\"main-btn main-btn--sm\"\u003E";
pug_mixins["image"]("Icon-user.png");
pug_html = pug_html + "\u003Cspan\u003EАкаунт\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Csection class=\"promo\"\u003E\u003Cdiv class=\"promo__wrapper\"\u003E\u003Cdiv class=\"promo__title\"\u003E\u003Cspan\u003EАкции и предложения\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"promo__slider\"\u003E\u003Cdiv class=\"swiper mySwiper\"\u003E\u003Cdiv class=\"swiper-wrapper\"\u003E\u003Cdiv class=\"swiper-slide\"\u003E";
pug_mixins["image"]('promo-1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-slide\"\u003E";
pug_mixins["image"]('promo-1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-slide\"\u003E";
pug_mixins["image"]('promo-1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/footer.pug */ "./src/views/parts/footer.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C!-- Script for Swiper--\u003E\u003Cscript src=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003C!-- Initialize Swiper--\u003E\u003Cscript\u003Evar swiper = new Swiper(\".mySwiper\", {\n  direction: \"vertical\",\n  slidesPerView: 1,\n  spaceBetween: 30,\n  mousewheel: true,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true,\n  },\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/parts/footer.pug":
/*!************************************!*\
  !*** ./src/views/parts/footer.pug ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;return pug_html;};
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

/***/ "./src/core/home-page.ts":
/*!*******************************!*\
  !*** ./src/core/home-page.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "firstLoad": () => (/* binding */ firstLoad)
/* harmony export */ });
function firstLoad() {
    // Querying button and content elements
    var sliderHomeBtn = document.querySelector("#slider-home-btn-js");
    var sliderTvBtn = document.querySelector("#slider-tv-btn-js");
    var sliderMovieBtn = document.querySelector("#slider-movie-btn-js");
    var sliderArchBtn = document.querySelector("#slider-arch-btn-js");
    var sliderFavBtn = document.querySelector("#slider-fav-btn-js");
    var sliderHomeContent = document.querySelector("#slider-home-js");
    var sliderTvBtnContent = document.querySelector("#slider-tv-js");
    var sliderMovieContent = document.querySelector("#slider-cinema-js");
    var sliderArchContent = document.querySelector("#slider-arcive-js");
    var sliderFavContent = document.querySelector("#slider-fav-js");
    // Grouping buttons and contents into arrays
    var buttons = [sliderHomeBtn, sliderTvBtn, sliderMovieBtn, sliderArchBtn, sliderFavBtn];
    var contents = [sliderHomeContent, sliderTvBtnContent, sliderMovieContent, sliderArchContent, sliderFavContent];
    // Initial active state for the home button and content
    if (sliderHomeBtn) {
        sliderHomeBtn.classList.add("active");
        sliderHomeContent.classList.add("visible");
    }
    // Event listeners for buttons
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () { return handleClick(button, contents[index]); });
    });
    // Handle click function to toggle active and visible classes
    function handleClick(button, content) {
        buttons.forEach(function (btn) {
            if (btn !== button)
                btn.classList.remove("active");
        });
        contents.forEach(function (cont) {
            if (cont !== content)
                cont.classList.remove("visible");
        });
        button.classList.add("active");
        content.classList.add("visible");
    }
    // Check if element is visible in the viewport
    function isElementVisible(element) {
        var rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    // On scroll, check the visibility of the element and show the aside panel
    function checkVisibilityOnScroll() {
        var element = document.getElementById("slider-starter-js");
        if (element && isElementVisible(element)) {
            document.querySelectorAll(".slider__aside-text").forEach(function (e) {
                if (e instanceof HTMLElement)
                    e.style.display = "flex";
            });
        }
    }
    window.addEventListener("scroll", checkVisibilityOnScroll);
    // Automatic switch between buttons
    var autoSwitch = setInterval(function () {
        var activeIndex = buttons.findIndex(function (btn) { return btn.classList.contains("active"); });
        var nextIndex = (activeIndex + 1) % buttons.length;
        handleClick(buttons[nextIndex], contents[nextIndex]);
    }, 2200);
    // Clear interval on button click and call handleClick
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () {
            clearInterval(autoSwitch);
            handleClick(button, contents[index]);
        });
    });
}


/***/ }),

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/core/home-page.ts");

document.addEventListener('DOMContentLoaded', function () {
    // Вызов функции show
    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.firstLoad)();
});


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Icon-attention.svg": "./src/assets/images/Icon-attention.svg",
	"./Icon-favorite.svg": "./src/assets/images/Icon-favorite.svg",
	"./Icon-folder.svg": "./src/assets/images/Icon-folder.svg",
	"./Icon-group.svg": "./src/assets/images/Icon-group.svg",
	"./Icon-home.svg": "./src/assets/images/Icon-home.svg",
	"./Icon-movie.svg": "./src/assets/images/Icon-movie.svg",
	"./Icon-search.svg": "./src/assets/images/Icon-search.svg",
	"./Icon-settings.svg": "./src/assets/images/Icon-settings.svg",
	"./Icon-tv.svg": "./src/assets/images/Icon-tv.svg",
	"./Icon-user.png": "./src/assets/images/Icon-user.png",
	"./Icons-user.svg": "./src/assets/images/Icons-user.svg",
	"./Logo-svg.svg": "./src/assets/images/Logo-svg.svg",
	"./Logo.png": "./src/assets/images/Logo.png",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./heart-start.svg": "./src/assets/images/heart-start.svg",
	"./heart-start_1.svg": "./src/assets/images/heart-start_1.svg",
	"./heart-to.svg": "./src/assets/images/heart-to.svg",
	"./icon-go.svg": "./src/assets/images/icon-go.svg",
	"./icon-phone.png": "./src/assets/images/icon-phone.png",
	"./logo-text.png": "./src/assets/images/logo-text.png",
	"./logo-text.svg": "./src/assets/images/logo-text.svg",
	"./poster.png": "./src/assets/images/poster.png",
	"./promo-1.png": "./src/assets/images/promo-1.png",
	"./promo-line.svg": "./src/assets/images/promo-line.svg",
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
	"./spiner-img8.png": "./src/assets/images/spiner-img8.png"
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

/***/ "./src/assets/images/Icon-user.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Icon-user.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6e5b373b2bccb538924f.png";

/***/ }),

/***/ "./src/assets/images/Icons-user.svg":
/*!******************************************!*\
  !*** ./src/assets/images/Icons-user.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/c8f9969a7aada78c25a0.svg";

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

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

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

/***/ "./src/assets/images/icon-go.svg":
/*!***************************************!*\
  !*** ./src/assets/images/icon-go.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4741d89b3b46f1ec6650.svg";

/***/ }),

/***/ "./src/assets/images/icon-phone.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon-phone.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/80f47d30684a5fdafc39.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qzs7Ozs7Ozs7Ozs7QUNKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUI7QUFDRDtBQUNIO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3Njc3MvYXBwLnNjc3M/OGI2ZiIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2Zvb3Rlci5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvaG9tZS1wYWdlLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3Byb2plY3RzL1JlZG1heGV1L3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19taXhpbnNbXCJpbWFnZVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihmaWxlKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzLyR7ZmlsZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXCI7XG59O1xuXG5cblxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJlblxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQyEtLSBTdHlsZXNoZWV0IGZvciBTd2lwZXItLVxcdTAwM0VcXHUwMDNDbGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY2RuLmpzZGVsaXZyLm5ldFxcdTAwMkZucG1cXHUwMDJGc3dpcGVyQDExXFx1MDAyRnN3aXBlci1idW5kbGUubWluLmNzc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJMb2dvLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX21lbnVcXFwiXFx1MDAzRVxcdTAwM0N1bCBjbGFzcz1cXFwiaGVhZGVyX19saXN0XFxcIlxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbSBoZWFkZXJfX2l0ZW0tLWFjdGl2ZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0LDQvdCw0LvRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktC+0LfQvNC+0LbQvdC+0YHRgtC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCf0L7QvNC+0YnRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktC+0L/RgNC+0YHRiyDQuCDQvtGC0LLQtdGC0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JTQtdC60L7QtNC10YDRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0JDQutGG0LjQuFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCQ0LrRhtC40Lgg0Lgg0L/RgNC10LTQu9C+0LbQtdC90LjRj1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQo9GB0LvRg9Cz0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQo9GB0LvRg9Cz0LhcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7QsdC90L7QstC70LXQvdC40LUg0LTQtdC60L7QtNC10YDQsFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntCx0L7RgNGD0LTQvtCy0LDQvdC40LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QtdGA0LXQtdC30LRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0KHQvtGC0YDRg9C00L3QuNGH0LXRgdGC0LLQvlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQniDRgdC+0YLRgNGD0LTQvdC10YfQtdGB0YLQstC1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCg0LXQutC70LDQvNCwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCi0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotCw0YDQuNGE0L3Ri9C1INC/0LvQsNC90YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7RgtC80LXQvdCwINGB0LTQtdC70LrQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQniDQndCw0YFcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQniDQndCw0YFcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/RgNC+IFJlZG1heFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LfRi9Cy0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JHQu9C+0LNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQkdC70L7Qs1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0J/QvtC70LXQt9C90L4g0LfQvdCw0YLRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VJUFRWINCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotC10LvQtdCy0LjQtNC10L3RjNC1INCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmNC90YLQtdGA0L3QtdGCINCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LfRi9Cy0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JrQvtC90YLQsNC60YLRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCa0L7QvdGC0LDQutGC0YtcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdC70LXRhNC+0L1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRS1NQUlMXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCb0L7QutCw0YbQuNGPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCh0L7RhtC40LDQu9GM0L3Ri9C1INGB0LXRgtC4XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUZhY2Vib29rXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUluc3RhZ3JhbVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VXaGF0cyBVcFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FjdGlvbnMtY2FsbFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXNtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcImljb24tcGhvbmUucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NwYW5cXHUwMDNFKjIxODZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWpvaW5cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLRhdC+0LRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWFjY291bnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJJY29uLXVzZXIucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutCw0YPQvdGCXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJwcm9tb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicHJvbW9fX3dyYXBwZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInByb21vX190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutGG0LjQuCDQuCDQv9GA0LXQtNC70L7QttC10L3QuNGPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInByb21vX19zbGlkZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN3aXBlciBteVN3aXBlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3dpcGVyLXdyYXBwZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3Byb21vLTEucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGVcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdwcm9tby0xLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgncHJvbW8tMS5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvZm9vdGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDIS0tIFNjcmlwdCBmb3IgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY2RuLmpzZGVsaXZyLm5ldFxcdTAwMkZucG1cXHUwMDJGc3dpcGVyQDExXFx1MDAyRnN3aXBlci1idW5kbGUubWluLmpzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDIS0tIEluaXRpYWxpemUgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ3NjcmlwdFxcdTAwM0V2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcXFwiLm15U3dpcGVyXFxcIiwge1xcbiAgZGlyZWN0aW9uOiBcXFwidmVydGljYWxcXFwiLFxcbiAgc2xpZGVzUGVyVmlldzogMSxcXG4gIHNwYWNlQmV0d2VlbjogMzAsXFxuICBtb3VzZXdoZWVsOiB0cnVlLFxcbiAgcGFnaW5hdGlvbjoge1xcbiAgICBlbDogXFxcIi5zd2lwZXItcGFnaW5hdGlvblxcXCIsXFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcXG4gIH0sXFxufSk7XFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpcnN0TG9hZCgpIHtcbiAgICAvLyBRdWVyeWluZyBidXR0b24gYW5kIGNvbnRlbnQgZWxlbWVudHNcbiAgICB2YXIgc2xpZGVySG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWhvbWUtYnRuLWpzXCIpO1xuICAgIHZhciBzbGlkZXJUdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLXR2LWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyTW92aWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1tb3ZpZS1idG4tanNcIik7XG4gICAgdmFyIHNsaWRlckFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1hcmNoLWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyRmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItZmF2LWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVySG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1ob21lLWpzXCIpO1xuICAgIHZhciBzbGlkZXJUdkJ0bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci10di1qc1wiKTtcbiAgICB2YXIgc2xpZGVyTW92aWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItY2luZW1hLWpzXCIpO1xuICAgIHZhciBzbGlkZXJBcmNoQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWFyY2l2ZS1qc1wiKTtcbiAgICB2YXIgc2xpZGVyRmF2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWZhdi1qc1wiKTtcbiAgICAvLyBHcm91cGluZyBidXR0b25zIGFuZCBjb250ZW50cyBpbnRvIGFycmF5c1xuICAgIHZhciBidXR0b25zID0gW3NsaWRlckhvbWVCdG4sIHNsaWRlclR2QnRuLCBzbGlkZXJNb3ZpZUJ0biwgc2xpZGVyQXJjaEJ0biwgc2xpZGVyRmF2QnRuXTtcbiAgICB2YXIgY29udGVudHMgPSBbc2xpZGVySG9tZUNvbnRlbnQsIHNsaWRlclR2QnRuQ29udGVudCwgc2xpZGVyTW92aWVDb250ZW50LCBzbGlkZXJBcmNoQ29udGVudCwgc2xpZGVyRmF2Q29udGVudF07XG4gICAgLy8gSW5pdGlhbCBhY3RpdmUgc3RhdGUgZm9yIHRoZSBob21lIGJ1dHRvbiBhbmQgY29udGVudFxuICAgIGlmIChzbGlkZXJIb21lQnRuKSB7XG4gICAgICAgIHNsaWRlckhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgc2xpZGVySG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgfVxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgYnV0dG9uc1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUNsaWNrKGJ1dHRvbiwgY29udGVudHNbaW5kZXhdKTsgfSk7XG4gICAgfSk7XG4gICAgLy8gSGFuZGxlIGNsaWNrIGZ1bmN0aW9uIHRvIHRvZ2dsZSBhY3RpdmUgYW5kIHZpc2libGUgY2xhc3Nlc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGJ1dHRvbiwgY29udGVudCkge1xuICAgICAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgaWYgKGJ0biAhPT0gYnV0dG9uKVxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29udCkge1xuICAgICAgICAgICAgaWYgKGNvbnQgIT09IGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgY29udC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XG4gICAgZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZShlbGVtZW50KSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgICAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgfVxuICAgIC8vIE9uIHNjcm9sbCwgY2hlY2sgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNob3cgdGhlIGFzaWRlIHBhbmVsXG4gICAgZnVuY3Rpb24gY2hlY2tWaXNpYmlsaXR5T25TY3JvbGwoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXItc3RhcnRlci1qc1wiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgaXNFbGVtZW50VmlzaWJsZShlbGVtZW50KSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2FzaWRlLXRleHRcIikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tWaXNpYmlsaXR5T25TY3JvbGwpO1xuICAgIC8vIEF1dG9tYXRpYyBzd2l0Y2ggYmV0d2VlbiBidXR0b25zXG4gICAgdmFyIGF1dG9Td2l0Y2ggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3RpdmVJbmRleCA9IGJ1dHRvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChidG4pIHsgcmV0dXJuIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7IH0pO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gKGFjdGl2ZUluZGV4ICsgMSkgJSBidXR0b25zLmxlbmd0aDtcbiAgICAgICAgaGFuZGxlQ2xpY2soYnV0dG9uc1tuZXh0SW5kZXhdLCBjb250ZW50c1tuZXh0SW5kZXhdKTtcbiAgICB9LCAyMjAwKTtcbiAgICAvLyBDbGVhciBpbnRlcnZhbCBvbiBidXR0b24gY2xpY2sgYW5kIGNhbGwgaGFuZGxlQ2xpY2tcbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGF1dG9Td2l0Y2gpO1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soYnV0dG9uLCBjb250ZW50c1tpbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGZpcnN0TG9hZCB9IGZyb20gJy4vaG9tZS1wYWdlJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8g0JLRi9C30L7QsiDRhNGD0L3QutGG0LjQuCBzaG93XG4gICAgZmlyc3RMb2FkKCk7XG59KTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9JY29uLWF0dGVudGlvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tYXR0ZW50aW9uLnN2Z1wiLFxuXHRcIi4vSWNvbi1mYXZvcml0ZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZmF2b3JpdGUuc3ZnXCIsXG5cdFwiLi9JY29uLWZvbGRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZm9sZGVyLnN2Z1wiLFxuXHRcIi4vSWNvbi1ncm91cC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZ3JvdXAuc3ZnXCIsXG5cdFwiLi9JY29uLWhvbWUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWhvbWUuc3ZnXCIsXG5cdFwiLi9JY29uLW1vdmllLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1tb3ZpZS5zdmdcIixcblx0XCIuL0ljb24tc2VhcmNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZWFyY2guc3ZnXCIsXG5cdFwiLi9JY29uLXNldHRpbmdzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZXR0aW5ncy5zdmdcIixcblx0XCIuL0ljb24tdHYuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXR2LnN2Z1wiLFxuXHRcIi4vSWNvbi11c2VyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi11c2VyLnBuZ1wiLFxuXHRcIi4vSWNvbnMtdXNlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb25zLXVzZXIuc3ZnXCIsXG5cdFwiLi9Mb2dvLXN2Zy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28tc3ZnLnN2Z1wiLFxuXHRcIi4vTG9nby5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28ucG5nXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2hlYXJ0LXN0YXJ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtc3RhcnQuc3ZnXCIsXG5cdFwiLi9oZWFydC1zdGFydF8xLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtc3RhcnRfMS5zdmdcIixcblx0XCIuL2hlYXJ0LXRvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtdG8uc3ZnXCIsXG5cdFwiLi9pY29uLWdvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1nby5zdmdcIixcblx0XCIuL2ljb24tcGhvbmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXBob25lLnBuZ1wiLFxuXHRcIi4vbG9nby10ZXh0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby10ZXh0LnBuZ1wiLFxuXHRcIi4vbG9nby10ZXh0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby10ZXh0LnN2Z1wiLFxuXHRcIi4vcG9zdGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcG9zdGVyLnBuZ1wiLFxuXHRcIi4vcHJvbW8tMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vLTEucG5nXCIsXG5cdFwiLi9wcm9tby1saW5lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW8tbGluZS5zdmdcIixcblx0XCIuL3NsaWRlci1hcmNpdmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWFyY2l2ZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlMi5wbmdcIixcblx0XCIuL3NsaWRlci1jaW5lbWEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWNpbmVtYTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hMi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2LnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWZhdjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2Mi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXZvdGl0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NsaWRlci1mYXZvdGl0ZS5wbmdcIixcblx0XCIuL3NsaWRlci1ob21lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLWhvbWUucG5nXCIsXG5cdFwiLi9zbGlkZXItaG9tZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItaG9tZTIucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItdHYucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLXR2Mi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWcxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzEucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWcyLnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nMy5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzQucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc1LnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nNi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzcucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc4LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==