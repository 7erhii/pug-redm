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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;







pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C!-- Stylesheet for Swiper--\u003E\u003Clink rel=\"stylesheet\" href=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.css\"\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cdiv class=\"wrapper\"\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./main/faq-page.pug */ "./src/views/main/faq-page.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fdiv\u003E\u003C!-- Script for Swiper--\u003E\u003Cscript src=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003C!-- Initialize Swiper--\u003E\u003Cscript\u003Evar swiper = new Swiper(\".mySwiper\", {\n  direction: \"vertical\",\n  slidesPerView: 1,\n  spaceBetween: 30,\n  mousewheel: true,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true,\n  },\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/main/faq-page.pug":
/*!*************************************!*\
  !*** ./src/views/main/faq-page.pug ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"faq\"\u003E\u003Cdiv class=\"faq__actions\"\u003E\u003Cdiv class=\"faq__action js-faq__question--common faq__action--active\"\u003E\u003Cspan\u003EЧасто задаваемые вопросы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__action js-faq__question--tech\"\u003E\u003Cspan\u003EТехнические вопросы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__questions\"\u003E\u003Cdiv class=\"faq__question faq__question--general faq__question--flex\"\u003E\u003Cdiv class=\"faq__items\"\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003EКак продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003EЕсли вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003EВ случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003EКак продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003EЕсли вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003EВ случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__items\"\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003E2Как продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003E2Если вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003E2В случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003E2Как продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003E2Если вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003E2В случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__question faq__questions--tech\"\u003E\u003Cdiv class=\"faq__items\"\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003EКак продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003EЕсли вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003EВ случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003EКак продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003EЕсли вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003EВ случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__items\"\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003E12Как продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003E12Если вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003E12В случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item\"\u003E\u003Cdiv class=\"faq__item-title\"\u003E\u003Cspan\u003E21Как продлить абонемент?\u003C\u002Fspan\u003E\u003Csvg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M5 13.7071L6.41421 12.2929L10.7071 16.5858L10.7071 4C10.7071 3.44772 11.1548 3 11.7071 3C12.2594 3 12.7071 3.44772 12.7071 4L12.7071 16.5858L17 12.2929L18.4142 13.7071L11.7071 20.4142L5 13.7071Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"faq__item-descr\"\u003E\u003Cspan\u003E12Если вы оплачиваете кредитной картой и она активна, продление абонемента происходит автоматически по системе ораат кева ашрай (помесячная оплата без занимания кредитного лимита).\u003C\u002Fspan\u003E\u003Cspan\u003E2В случае оплаты ораат кева через банк, оплата также, происходит автоматически.\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-descr\"\u003E\u003Cdiv class=\"page-descr__text\"\u003E\u003Cspan\u003EНе нашли ответа на ваш вопрос?\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-descr__action\"\u003E\u003Cdiv class=\"main-btn main-btn--red\"\u003E\u003Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M16.625 17.5C14.8889 17.5 13.1736 17.1215 11.4792 16.3646C9.78472 15.6076 8.24306 14.5347 6.85417 13.1458C5.46528 11.7569 4.39236 10.2153 3.63542 8.52083C2.87847 6.82639 2.5 5.11111 2.5 3.375C2.5 3.125 2.58333 2.91667 2.75 2.75C2.91667 2.58333 3.125 2.5 3.375 2.5H6.75C6.94444 2.5 7.11806 2.56597 7.27083 2.69792C7.42361 2.82986 7.51389 2.98611 7.54167 3.16667L8.08333 6.08333C8.11111 6.30556 8.10417 6.49306 8.0625 6.64583C8.02083 6.79861 7.94444 6.93056 7.83333 7.04167L5.8125 9.08333C6.09028 9.59722 6.42014 10.0938 6.80208 10.5729C7.18403 11.0521 7.60417 11.5139 8.0625 11.9583C8.49306 12.3889 8.94444 12.7882 9.41667 13.1562C9.88889 13.5243 10.3889 13.8611 10.9167 14.1667L12.875 12.2083C13 12.0833 13.1632 11.9896 13.3646 11.9271C13.566 11.8646 13.7639 11.8472 13.9583 11.875L16.8333 12.4583C17.0278 12.5139 17.1875 12.6146 17.3125 12.7604C17.4375 12.9062 17.5 13.0694 17.5 13.25V16.625C17.5 16.875 17.4167 17.0833 17.25 17.25C17.0833 17.4167 16.875 17.5 16.625 17.5ZM5.02083 7.5L6.39583 6.125L6.04167 4.16667H4.1875C4.25694 4.73611 4.35417 5.29861 4.47917 5.85417C4.60417 6.40972 4.78472 6.95833 5.02083 7.5ZM12.4792 14.9583C13.0208 15.1944 13.5729 15.3819 14.1354 15.5208C14.6979 15.6597 15.2639 15.75 15.8333 15.7917V13.9583L13.875 13.5625L12.4792 14.9583Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EСвязаться с консультантом\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
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

/***/ "./src/core/faqToggle.ts":
/*!*******************************!*\
  !*** ./src/core/faqToggle.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "faqToggle": () => (/* binding */ faqToggle)
/* harmony export */ });
function faqToggle() {
    var faqTitles = document.querySelectorAll('.faq__item-title');
    // const commonTitle: NodeListOf<HTMLElement> = document.querySelectorAll('..js-faq__question--common');
    // const techTitle: NodeListOf<HTMLElement> = document.querySelectorAll('.js-faq__question--general');
    faqTitles.forEach(function (title) {
        title.addEventListener('click', function () {
            var currentActive = document.querySelector('.faq__item--active');
            var faqItem = title.closest('.faq__item');
            var descr = title.nextElementSibling;
            if (currentActive && currentActive !== faqItem) {
                currentActive.classList.remove('faq__item--active');
                var currentDescr = currentActive.querySelector('.faq__item-descr');
                if (currentDescr) {
                    currentDescr.style.maxHeight = '0';
                    currentDescr.style.opacity = '0';
                }
            }
            if (faqItem) {
                var isActivating_1 = !faqItem.classList.contains('faq__item--active');
                faqItem.classList.toggle('faq__item--active');
                if (descr) {
                    if (isActivating_1) {
                        descr.style.maxHeight = descr.scrollHeight + "px";
                    }
                    else {
                        descr.style.maxHeight = '0';
                    }
                    setTimeout(function () {
                        descr.style.opacity = isActivating_1 ? '1' : '0';
                    }, 0);
                }
            }
        });
    });
    var commonQuestion = document.querySelector('.js-faq__question--common');
    var techQuestion = document.querySelector('.js-faq__question--tech');
    var generalFaq = document.querySelector('.faq__question--general');
    var techFaq = document.querySelector('.faq__questions--tech');
    commonQuestion === null || commonQuestion === void 0 ? void 0 : commonQuestion.addEventListener('click', function () {
        commonQuestion.classList.add('faq__action--active');
        techQuestion === null || techQuestion === void 0 ? void 0 : techQuestion.classList.remove('faq__action--active');
        generalFaq === null || generalFaq === void 0 ? void 0 : generalFaq.classList.add('faq__question--flex');
        generalFaq === null || generalFaq === void 0 ? void 0 : generalFaq.classList.remove('faq__question--none');
        techFaq === null || techFaq === void 0 ? void 0 : techFaq.classList.add('faq__question--none');
        techFaq === null || techFaq === void 0 ? void 0 : techFaq.classList.remove('faq__question--flex');
    });
    techQuestion === null || techQuestion === void 0 ? void 0 : techQuestion.addEventListener('click', function () {
        techQuestion.classList.add('faq__action--active');
        commonQuestion === null || commonQuestion === void 0 ? void 0 : commonQuestion.classList.remove('faq__action--active');
        generalFaq === null || generalFaq === void 0 ? void 0 : generalFaq.classList.add('faq__question--none');
        generalFaq === null || generalFaq === void 0 ? void 0 : generalFaq.classList.remove('faq__question--flex');
        techFaq === null || techFaq === void 0 ? void 0 : techFaq.classList.add('faq__question--flex');
        techFaq === null || techFaq === void 0 ? void 0 : techFaq.classList.remove('faq__question--none');
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
/* harmony import */ var _faqToggle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faqToggle */ "./src/core/faqToggle.ts");

document.addEventListener("DOMContentLoaded", function (event) {
    (0,_faqToggle__WEBPACK_IMPORTED_MODULE_0__.faqToggle)();
    // burgerToggle()
    // firstLoad();
});


/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/4deddff989e7b96bdf6e.png";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvbWFpbi9mYXEtcGFnZS5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvZmFxVG9nZ2xlLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3Byb2plY3RzL1JlZG1heGV1L3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO1xuXG5cblxuXG5cblxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJlblxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQyEtLSBTdHlsZXNoZWV0IGZvciBTd2lwZXItLVxcdTAwM0VcXHUwMDNDbGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY2RuLmpzZGVsaXZyLm5ldFxcdTAwMkZucG1cXHUwMDJGc3dpcGVyQDExXFx1MDAyRnN3aXBlci1idW5kbGUubWluLmNzc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIndyYXBwZXJcXFwiXFx1MDAzRVwiICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9tYWluL2ZhcS1wYWdlLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDIS0tIFNjcmlwdCBmb3IgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY2RuLmpzZGVsaXZyLm5ldFxcdTAwMkZucG1cXHUwMDJGc3dpcGVyQDExXFx1MDAyRnN3aXBlci1idW5kbGUubWluLmpzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDIS0tIEluaXRpYWxpemUgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ3NjcmlwdFxcdTAwM0V2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcXFwiLm15U3dpcGVyXFxcIiwge1xcbiAgZGlyZWN0aW9uOiBcXFwidmVydGljYWxcXFwiLFxcbiAgc2xpZGVzUGVyVmlldzogMSxcXG4gIHNwYWNlQmV0d2VlbjogMzAsXFxuICBtb3VzZXdoZWVsOiB0cnVlLFxcbiAgcGFnaW5hdGlvbjoge1xcbiAgICBlbDogXFxcIi5zd2lwZXItcGFnaW5hdGlvblxcXCIsXFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcXG4gIH0sXFxufSk7XFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJmYXFcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9fYWN0aW9uc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19hY3Rpb24ganMtZmFxX19xdWVzdGlvbi0tY29tbW9uIGZhcV9fYWN0aW9uLS1hY3RpdmVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCn0LDRgdGC0L4g0LfQsNC00LDQstCw0LXQvNGL0LUg0LLQvtC/0YDQvtGB0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19hY3Rpb24ganMtZmFxX19xdWVzdGlvbi0tdGVjaFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdGF0L3QuNGH0LXRgdC60LjQtSDQstC+0L/RgNC+0YHRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX3F1ZXN0aW9uc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19xdWVzdGlvbiBmYXFfX3F1ZXN0aW9uLS1nZW5lcmFsIGZhcV9fcXVlc3Rpb24tLWZsZXhcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbXNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtCw0Log0L/RgNC+0LTQu9C40YLRjCDQsNCx0L7QvdC10LzQtdC90YI/XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk01IDEzLjcwNzFMNi40MTQyMSAxMi4yOTI5TDEwLjcwNzEgMTYuNTg1OEwxMC43MDcxIDRDMTAuNzA3MSAzLjQ0NzcyIDExLjE1NDggMyAxMS43MDcxIDNDMTIuMjU5NCAzIDEyLjcwNzEgMy40NDc3MiAxMi43MDcxIDRMMTIuNzA3MSAxNi41ODU4TDE3IDEyLjI5MjlMMTguNDE0MiAxMy43MDcxTDExLjcwNzEgMjAuNDE0Mkw1IDEzLjcwNzFaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtLWRlc2NyXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQldGB0LvQuCDQstGLINC+0L/Qu9Cw0YfQuNCy0LDQtdGC0LUg0LrRgNC10LTQuNGC0L3QvtC5INC60LDRgNGC0L7QuSDQuCDQvtC90LAg0LDQutGC0LjQstC90LAsINC/0YDQvtC00LvQtdC90LjQtSDQsNCx0L7QvdC10LzQtdC90YLQsCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9C+INGB0LjRgdGC0LXQvNC1INC+0YDQsNCw0YIg0LrQtdCy0LAg0LDRiNGA0LDQuSAo0L/QvtC80LXRgdGP0YfQvdCw0Y8g0L7Qv9C70LDRgtCwINCx0LXQtyDQt9Cw0L3QuNC80LDQvdC40Y8g0LrRgNC10LTQuNGC0L3QvtCz0L4g0LvQuNC80LjRgtCwKS5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JIg0YHQu9GD0YfQsNC1INC+0L/Qu9Cw0YLRiyDQvtGA0LDQsNGCINC60LXQstCwINGH0LXRgNC10Lcg0LHQsNC90LosINC+0L/Qu9Cw0YLQsCDRgtCw0LrQttC1LCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0LDQuiDQv9GA0L7QtNC70LjRgtGMINCw0LHQvtC90LXQvNC10L3Rgj9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUgMTMuNzA3MUw2LjQxNDIxIDEyLjI5MjlMMTAuNzA3MSAxNi41ODU4TDEwLjcwNzEgNEMxMC43MDcxIDMuNDQ3NzIgMTEuMTU0OCAzIDExLjcwNzEgM0MxMi4yNTk0IDMgMTIuNzA3MSAzLjQ0NzcyIDEyLjcwNzEgNEwxMi43MDcxIDE2LjU4NThMMTcgMTIuMjkyOUwxOC40MTQyIDEzLjcwNzFMMTEuNzA3MSAyMC40MTQyTDUgMTMuNzA3MVpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCV0YHQu9C4INCy0Ysg0L7Qv9C70LDRh9C40LLQsNC10YLQtSDQutGA0LXQtNC40YLQvdC+0Lkg0LrQsNGA0YLQvtC5INC4INC+0L3QsCDQsNC60YLQuNCy0L3QsCwg0L/RgNC+0LTQu9C10L3QuNC1INCw0LHQvtC90LXQvNC10L3RgtCwINC/0YDQvtC40YHRhdC+0LTQuNGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0L4g0YHQuNGB0YLQtdC80LUg0L7RgNCw0LDRgiDQutC10LLQsCDQsNGI0YDQsNC5ICjQv9C+0LzQtdGB0Y/Rh9C90LDRjyDQvtC/0LvQsNGC0LAg0LHQtdC3INC30LDQvdC40LzQsNC90LjRjyDQutGA0LXQtNC40YLQvdC+0LPQviDQu9C40LzQuNGC0LApLlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkiDRgdC70YPRh9Cw0LUg0L7Qv9C70LDRgtGLINC+0YDQsNCw0YIg0LrQtdCy0LAg0YfQtdGA0LXQtyDQsdCw0L3Quiwg0L7Qv9C70LDRgtCwINGC0LDQutC20LUsINC/0YDQvtC40YHRhdC+0LTQuNGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW1zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbS10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMtCa0LDQuiDQv9GA0L7QtNC70LjRgtGMINCw0LHQvtC90LXQvNC10L3Rgj9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUgMTMuNzA3MUw2LjQxNDIxIDEyLjI5MjlMMTAuNzA3MSAxNi41ODU4TDEwLjcwNzEgNEMxMC43MDcxIDMuNDQ3NzIgMTEuMTU0OCAzIDExLjcwNzEgM0MxMi4yNTk0IDMgMTIuNzA3MSAzLjQ0NzcyIDEyLjcwNzEgNEwxMi43MDcxIDE2LjU4NThMMTcgMTIuMjkyOUwxOC40MTQyIDEzLjcwNzFMMTEuNzA3MSAyMC40MTQyTDUgMTMuNzA3MVpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTLQldGB0LvQuCDQstGLINC+0L/Qu9Cw0YfQuNCy0LDQtdGC0LUg0LrRgNC10LTQuNGC0L3QvtC5INC60LDRgNGC0L7QuSDQuCDQvtC90LAg0LDQutGC0LjQstC90LAsINC/0YDQvtC00LvQtdC90LjQtSDQsNCx0L7QvdC10LzQtdC90YLQsCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9C+INGB0LjRgdGC0LXQvNC1INC+0YDQsNCw0YIg0LrQtdCy0LAg0LDRiNGA0LDQuSAo0L/QvtC80LXRgdGP0YfQvdCw0Y8g0L7Qv9C70LDRgtCwINCx0LXQtyDQt9Cw0L3QuNC80LDQvdC40Y8g0LrRgNC10LTQuNGC0L3QvtCz0L4g0LvQuNC80LjRgtCwKS5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMtCSINGB0LvRg9GH0LDQtSDQvtC/0LvQsNGC0Ysg0L7RgNCw0LDRgiDQutC10LLQsCDRh9C10YDQtdC3INCx0LDQvdC6LCDQvtC/0LvQsNGC0LAg0YLQsNC60LbQtSwg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0Uy0JrQsNC6INC/0YDQvtC00LvQuNGC0Ywg0LDQsdC+0L3QtdC80LXQvdGCP1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNSAxMy43MDcxTDYuNDE0MjEgMTIuMjkyOUwxMC43MDcxIDE2LjU4NThMMTAuNzA3MSA0QzEwLjcwNzEgMy40NDc3MiAxMS4xNTQ4IDMgMTEuNzA3MSAzQzEyLjI1OTQgMyAxMi43MDcxIDMuNDQ3NzIgMTIuNzA3MSA0TDEyLjcwNzEgMTYuNTg1OEwxNyAxMi4yOTI5TDE4LjQxNDIgMTMuNzA3MUwxMS43MDcxIDIwLjQxNDJMNSAxMy43MDcxWlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbS1kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMtCV0YHQu9C4INCy0Ysg0L7Qv9C70LDRh9C40LLQsNC10YLQtSDQutGA0LXQtNC40YLQvdC+0Lkg0LrQsNGA0YLQvtC5INC4INC+0L3QsCDQsNC60YLQuNCy0L3QsCwg0L/RgNC+0LTQu9C10L3QuNC1INCw0LHQvtC90LXQvNC10L3RgtCwINC/0YDQvtC40YHRhdC+0LTQuNGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0L4g0YHQuNGB0YLQtdC80LUg0L7RgNCw0LDRgiDQutC10LLQsCDQsNGI0YDQsNC5ICjQv9C+0LzQtdGB0Y/Rh9C90LDRjyDQvtC/0LvQsNGC0LAg0LHQtdC3INC30LDQvdC40LzQsNC90LjRjyDQutGA0LXQtNC40YLQvdC+0LPQviDQu9C40LzQuNGC0LApLlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0Uy0JIg0YHQu9GD0YfQsNC1INC+0L/Qu9Cw0YLRiyDQvtGA0LDQsNGCINC60LXQstCwINGH0LXRgNC10Lcg0LHQsNC90LosINC+0L/Qu9Cw0YLQsCDRgtCw0LrQttC1LCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19xdWVzdGlvbiBmYXFfX3F1ZXN0aW9ucy0tdGVjaFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0LDQuiDQv9GA0L7QtNC70LjRgtGMINCw0LHQvtC90LXQvNC10L3Rgj9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUgMTMuNzA3MUw2LjQxNDIxIDEyLjI5MjlMMTAuNzA3MSAxNi41ODU4TDEwLjcwNzEgNEMxMC43MDcxIDMuNDQ3NzIgMTEuMTU0OCAzIDExLjcwNzEgM0MxMi4yNTk0IDMgMTIuNzA3MSAzLjQ0NzcyIDEyLjcwNzEgNEwxMi43MDcxIDE2LjU4NThMMTcgMTIuMjkyOUwxOC40MTQyIDEzLjcwNzFMMTEuNzA3MSAyMC40MTQyTDUgMTMuNzA3MVpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCV0YHQu9C4INCy0Ysg0L7Qv9C70LDRh9C40LLQsNC10YLQtSDQutGA0LXQtNC40YLQvdC+0Lkg0LrQsNGA0YLQvtC5INC4INC+0L3QsCDQsNC60YLQuNCy0L3QsCwg0L/RgNC+0LTQu9C10L3QuNC1INCw0LHQvtC90LXQvNC10L3RgtCwINC/0YDQvtC40YHRhdC+0LTQuNGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4INC/0L4g0YHQuNGB0YLQtdC80LUg0L7RgNCw0LDRgiDQutC10LLQsCDQsNGI0YDQsNC5ICjQv9C+0LzQtdGB0Y/Rh9C90LDRjyDQvtC/0LvQsNGC0LAg0LHQtdC3INC30LDQvdC40LzQsNC90LjRjyDQutGA0LXQtNC40YLQvdC+0LPQviDQu9C40LzQuNGC0LApLlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkiDRgdC70YPRh9Cw0LUg0L7Qv9C70LDRgtGLINC+0YDQsNCw0YIg0LrQtdCy0LAg0YfQtdGA0LXQtyDQsdCw0L3Quiwg0L7Qv9C70LDRgtCwINGC0LDQutC20LUsINC/0YDQvtC40YHRhdC+0LTQuNGCINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC4LlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbS10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JrQsNC6INC/0YDQvtC00LvQuNGC0Ywg0LDQsdC+0L3QtdC80LXQvdGCP1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNSAxMy43MDcxTDYuNDE0MjEgMTIuMjkyOUwxMC43MDcxIDE2LjU4NThMMTAuNzA3MSA0QzEwLjcwNzEgMy40NDc3MiAxMS4xNTQ4IDMgMTEuNzA3MSAzQzEyLjI1OTQgMyAxMi43MDcxIDMuNDQ3NzIgMTIuNzA3MSA0TDEyLjcwNzEgMTYuNTg1OEwxNyAxMi4yOTI5TDE4LjQxNDIgMTMuNzA3MUwxMS43MDcxIDIwLjQxNDJMNSAxMy43MDcxWlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbS1kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JXRgdC70Lgg0LLRiyDQvtC/0LvQsNGH0LjQstCw0LXRgtC1INC60YDQtdC00LjRgtC90L7QuSDQutCw0YDRgtC+0Lkg0Lgg0L7QvdCwINCw0LrRgtC40LLQvdCwLCDQv9GA0L7QtNC70LXQvdC40LUg0LDQsdC+0L3QtdC80LXQvdGC0LAg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QviDRgdC40YHRgtC10LzQtSDQvtGA0LDQsNGCINC60LXQstCwINCw0YjRgNCw0LkgKNC/0L7QvNC10YHRj9GH0L3QsNGPINC+0L/Qu9Cw0YLQsCDQsdC10Lcg0LfQsNC90LjQvNCw0L3QuNGPINC60YDQtdC00LjRgtC90L7Qs9C+INC70LjQvNC40YLQsCkuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCSINGB0LvRg9GH0LDQtSDQvtC/0LvQsNGC0Ysg0L7RgNCw0LDRgiDQutC10LLQsCDRh9C10YDQtdC3INCx0LDQvdC6LCDQvtC/0LvQsNGC0LAg0YLQsNC60LbQtSwg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbXNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0UxMtCa0LDQuiDQv9GA0L7QtNC70LjRgtGMINCw0LHQvtC90LXQvNC10L3Rgj9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjRcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTUgMTMuNzA3MUw2LjQxNDIxIDEyLjI5MjlMMTAuNzA3MSAxNi41ODU4TDEwLjcwNzEgNEMxMC43MDcxIDMuNDQ3NzIgMTEuMTU0OCAzIDExLjcwNzEgM0MxMi4yNTk0IDMgMTIuNzA3MSAzLjQ0NzcyIDEyLjcwNzEgNEwxMi43MDcxIDE2LjU4NThMMTcgMTIuMjkyOUwxOC40MTQyIDEzLjcwNzFMMTEuNzA3MSAyMC40MTQyTDUgMTMuNzA3MVpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTEy0JXRgdC70Lgg0LLRiyDQvtC/0LvQsNGH0LjQstCw0LXRgtC1INC60YDQtdC00LjRgtC90L7QuSDQutCw0YDRgtC+0Lkg0Lgg0L7QvdCwINCw0LrRgtC40LLQvdCwLCDQv9GA0L7QtNC70LXQvdC40LUg0LDQsdC+0L3QtdC80LXQvdGC0LAg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60Lgg0L/QviDRgdC40YHRgtC10LzQtSDQvtGA0LDQsNGCINC60LXQstCwINCw0YjRgNCw0LkgKNC/0L7QvNC10YHRj9GH0L3QsNGPINC+0L/Qu9Cw0YLQsCDQsdC10Lcg0LfQsNC90LjQvNCw0L3QuNGPINC60YDQtdC00LjRgtC90L7Qs9C+INC70LjQvNC40YLQsCkuXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTEy0JIg0YHQu9GD0YfQsNC1INC+0L/Qu9Cw0YLRiyDQvtGA0LDQsNGCINC60LXQstCwINGH0LXRgNC10Lcg0LHQsNC90LosINC+0L/Qu9Cw0YLQsCDRgtCw0LrQttC1LCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuC5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiZmFxX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJmYXFfX2l0ZW0tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRTIx0JrQsNC6INC/0YDQvtC00LvQuNGC0Ywg0LDQsdC+0L3QtdC80LXQvdGCP1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNNSAxMy43MDcxTDYuNDE0MjEgMTIuMjkyOUwxMC43MDcxIDE2LjU4NThMMTAuNzA3MSA0QzEwLjcwNzEgMy40NDc3MiAxMS4xNTQ4IDMgMTEuNzA3MSAzQzEyLjI1OTQgMyAxMi43MDcxIDMuNDQ3NzIgMTIuNzA3MSA0TDEyLjcwNzEgMTYuNTg1OEwxNyAxMi4yOTI5TDE4LjQxNDIgMTMuNzA3MUwxMS43MDcxIDIwLjQxNDJMNSAxMy43MDcxWlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImZhcV9faXRlbS1kZXNjclxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMTLQldGB0LvQuCDQstGLINC+0L/Qu9Cw0YfQuNCy0LDQtdGC0LUg0LrRgNC10LTQuNGC0L3QvtC5INC60LDRgNGC0L7QuSDQuCDQvtC90LAg0LDQutGC0LjQstC90LAsINC/0YDQvtC00LvQtdC90LjQtSDQsNCx0L7QvdC10LzQtdC90YLQsCDQv9GA0L7QuNGB0YXQvtC00LjRgiDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCDQv9C+INGB0LjRgdGC0LXQvNC1INC+0YDQsNCw0YIg0LrQtdCy0LAg0LDRiNGA0LDQuSAo0L/QvtC80LXRgdGP0YfQvdCw0Y8g0L7Qv9C70LDRgtCwINCx0LXQtyDQt9Cw0L3QuNC80LDQvdC40Y8g0LrRgNC10LTQuNGC0L3QvtCz0L4g0LvQuNC80LjRgtCwKS5cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFMtCSINGB0LvRg9GH0LDQtSDQvtC/0LvQsNGC0Ysg0L7RgNCw0LDRgiDQutC10LLQsCDRh9C10YDQtdC3INCx0LDQvdC6LCDQvtC/0LvQsNGC0LAg0YLQsNC60LbQtSwg0L/RgNC+0LjRgdGF0L7QtNC40YIg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LguXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2UtZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2UtZGVzY3JfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCd0LUg0L3QsNGI0LvQuCDQvtGC0LLQtdGC0LAg0L3QsCDQstCw0Ygg0LLQvtC/0YDQvtGBP1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwYWdlLWRlc2NyX19hY3Rpb25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1yZWRcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjIwXFxcIiBoZWlnaHQ9XFxcIjIwXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjAgMjBcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE2LjYyNSAxNy41QzE0Ljg4ODkgMTcuNSAxMy4xNzM2IDE3LjEyMTUgMTEuNDc5MiAxNi4zNjQ2QzkuNzg0NzIgMTUuNjA3NiA4LjI0MzA2IDE0LjUzNDcgNi44NTQxNyAxMy4xNDU4QzUuNDY1MjggMTEuNzU2OSA0LjM5MjM2IDEwLjIxNTMgMy42MzU0MiA4LjUyMDgzQzIuODc4NDcgNi44MjYzOSAyLjUgNS4xMTExMSAyLjUgMy4zNzVDMi41IDMuMTI1IDIuNTgzMzMgMi45MTY2NyAyLjc1IDIuNzVDMi45MTY2NyAyLjU4MzMzIDMuMTI1IDIuNSAzLjM3NSAyLjVINi43NUM2Ljk0NDQ0IDIuNSA3LjExODA2IDIuNTY1OTcgNy4yNzA4MyAyLjY5NzkyQzcuNDIzNjEgMi44Mjk4NiA3LjUxMzg5IDIuOTg2MTEgNy41NDE2NyAzLjE2NjY3TDguMDgzMzMgNi4wODMzM0M4LjExMTExIDYuMzA1NTYgOC4xMDQxNyA2LjQ5MzA2IDguMDYyNSA2LjY0NTgzQzguMDIwODMgNi43OTg2MSA3Ljk0NDQ0IDYuOTMwNTYgNy44MzMzMyA3LjA0MTY3TDUuODEyNSA5LjA4MzMzQzYuMDkwMjggOS41OTcyMiA2LjQyMDE0IDEwLjA5MzggNi44MDIwOCAxMC41NzI5QzcuMTg0MDMgMTEuMDUyMSA3LjYwNDE3IDExLjUxMzkgOC4wNjI1IDExLjk1ODNDOC40OTMwNiAxMi4zODg5IDguOTQ0NDQgMTIuNzg4MiA5LjQxNjY3IDEzLjE1NjJDOS44ODg4OSAxMy41MjQzIDEwLjM4ODkgMTMuODYxMSAxMC45MTY3IDE0LjE2NjdMMTIuODc1IDEyLjIwODNDMTMgMTIuMDgzMyAxMy4xNjMyIDExLjk4OTYgMTMuMzY0NiAxMS45MjcxQzEzLjU2NiAxMS44NjQ2IDEzLjc2MzkgMTEuODQ3MiAxMy45NTgzIDExLjg3NUwxNi44MzMzIDEyLjQ1ODNDMTcuMDI3OCAxMi41MTM5IDE3LjE4NzUgMTIuNjE0NiAxNy4zMTI1IDEyLjc2MDRDMTcuNDM3NSAxMi45MDYyIDE3LjUgMTMuMDY5NCAxNy41IDEzLjI1VjE2LjYyNUMxNy41IDE2Ljg3NSAxNy40MTY3IDE3LjA4MzMgMTcuMjUgMTcuMjVDMTcuMDgzMyAxNy40MTY3IDE2Ljg3NSAxNy41IDE2LjYyNSAxNy41Wk01LjAyMDgzIDcuNUw2LjM5NTgzIDYuMTI1TDYuMDQxNjcgNC4xNjY2N0g0LjE4NzVDNC4yNTY5NCA0LjczNjExIDQuMzU0MTcgNS4yOTg2MSA0LjQ3OTE3IDUuODU0MTdDNC42MDQxNyA2LjQwOTcyIDQuNzg0NzIgNi45NTgzMyA1LjAyMDgzIDcuNVpNMTIuNDc5MiAxNC45NTgzQzEzLjAyMDggMTUuMTk0NCAxMy41NzI5IDE1LjM4MTkgMTQuMTM1NCAxNS41MjA4QzE0LjY5NzkgMTUuNjU5NyAxNS4yNjM5IDE1Ljc1IDE1LjgzMzMgMTUuNzkxN1YxMy45NTgzTDEzLjg3NSAxMy41NjI1TDEyLjQ3OTIgMTQuOTU4M1pcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDc3BhblxcdTAwM0XQodCy0Y/Qt9Cw0YLRjNGB0Y8g0YEg0LrQvtC90YHRg9C70YzRgtCw0L3RgtC+0LxcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzZWN0aW9uXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZhcVRvZ2dsZSgpIHtcbiAgICB2YXIgZmFxVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZhcV9faXRlbS10aXRsZScpO1xuICAgIC8vIGNvbnN0IGNvbW1vblRpdGxlOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy4uanMtZmFxX19xdWVzdGlvbi0tY29tbW9uJyk7XG4gICAgLy8gY29uc3QgdGVjaFRpdGxlOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1mYXFfX3F1ZXN0aW9uLS1nZW5lcmFsJyk7XG4gICAgZmFxVGl0bGVzLmZvckVhY2goZnVuY3Rpb24gKHRpdGxlKSB7XG4gICAgICAgIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICAgIHZhciBmYXFJdGVtID0gdGl0bGUuY2xvc2VzdCgnLmZhcV9faXRlbScpO1xuICAgICAgICAgICAgdmFyIGRlc2NyID0gdGl0bGUubmV4dEVsZW1lbnRTaWJsaW5nO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRBY3RpdmUgJiYgY3VycmVudEFjdGl2ZSAhPT0gZmFxSXRlbSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRBY3RpdmUuY2xhc3NMaXN0LnJlbW92ZSgnZmFxX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudERlc2NyID0gY3VycmVudEFjdGl2ZS5xdWVyeVNlbGVjdG9yKCcuZmFxX19pdGVtLWRlc2NyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnREZXNjcikge1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3Iuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICBjdXJyZW50RGVzY3Iuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZmFxSXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2YXRpbmdfMSA9ICFmYXFJdGVtLmNsYXNzTGlzdC5jb250YWlucygnZmFxX19pdGVtLS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBmYXFJdGVtLmNsYXNzTGlzdC50b2dnbGUoJ2ZhcV9faXRlbS0tYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgaWYgKGRlc2NyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2YXRpbmdfMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3Iuc3R5bGUubWF4SGVpZ2h0ID0gZGVzY3Iuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3Iuc3R5bGUubWF4SGVpZ2h0ID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3Iuc3R5bGUub3BhY2l0eSA9IGlzQWN0aXZhdGluZ18xID8gJzEnIDogJzAnO1xuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciBjb21tb25RdWVzdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mYXFfX3F1ZXN0aW9uLS1jb21tb24nKTtcbiAgICB2YXIgdGVjaFF1ZXN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZhcV9fcXVlc3Rpb24tLXRlY2gnKTtcbiAgICB2YXIgZ2VuZXJhbEZhcSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXFfX3F1ZXN0aW9uLS1nZW5lcmFsJyk7XG4gICAgdmFyIHRlY2hGYXEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmFxX19xdWVzdGlvbnMtLXRlY2gnKTtcbiAgICBjb21tb25RdWVzdGlvbiA9PT0gbnVsbCB8fCBjb21tb25RdWVzdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogY29tbW9uUXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbW1vblF1ZXN0aW9uLmNsYXNzTGlzdC5hZGQoJ2ZhcV9fYWN0aW9uLS1hY3RpdmUnKTtcbiAgICAgICAgdGVjaFF1ZXN0aW9uID09PSBudWxsIHx8IHRlY2hRdWVzdGlvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVjaFF1ZXN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcV9fYWN0aW9uLS1hY3RpdmUnKTtcbiAgICAgICAgZ2VuZXJhbEZhcSA9PT0gbnVsbCB8fCBnZW5lcmFsRmFxID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZW5lcmFsRmFxLmNsYXNzTGlzdC5hZGQoJ2ZhcV9fcXVlc3Rpb24tLWZsZXgnKTtcbiAgICAgICAgZ2VuZXJhbEZhcSA9PT0gbnVsbCB8fCBnZW5lcmFsRmFxID09PSB2b2lkIDAgPyB2b2lkIDAgOiBnZW5lcmFsRmFxLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcV9fcXVlc3Rpb24tLW5vbmUnKTtcbiAgICAgICAgdGVjaEZhcSA9PT0gbnVsbCB8fCB0ZWNoRmFxID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZWNoRmFxLmNsYXNzTGlzdC5hZGQoJ2ZhcV9fcXVlc3Rpb24tLW5vbmUnKTtcbiAgICAgICAgdGVjaEZhcSA9PT0gbnVsbCB8fCB0ZWNoRmFxID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZWNoRmFxLmNsYXNzTGlzdC5yZW1vdmUoJ2ZhcV9fcXVlc3Rpb24tLWZsZXgnKTtcbiAgICB9KTtcbiAgICB0ZWNoUXVlc3Rpb24gPT09IG51bGwgfHwgdGVjaFF1ZXN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0ZWNoUXVlc3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRlY2hRdWVzdGlvbi5jbGFzc0xpc3QuYWRkKCdmYXFfX2FjdGlvbi0tYWN0aXZlJyk7XG4gICAgICAgIGNvbW1vblF1ZXN0aW9uID09PSBudWxsIHx8IGNvbW1vblF1ZXN0aW9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21tb25RdWVzdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdmYXFfX2FjdGlvbi0tYWN0aXZlJyk7XG4gICAgICAgIGdlbmVyYWxGYXEgPT09IG51bGwgfHwgZ2VuZXJhbEZhcSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2VuZXJhbEZhcS5jbGFzc0xpc3QuYWRkKCdmYXFfX3F1ZXN0aW9uLS1ub25lJyk7XG4gICAgICAgIGdlbmVyYWxGYXEgPT09IG51bGwgfHwgZ2VuZXJhbEZhcSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZ2VuZXJhbEZhcS5jbGFzc0xpc3QucmVtb3ZlKCdmYXFfX3F1ZXN0aW9uLS1mbGV4Jyk7XG4gICAgICAgIHRlY2hGYXEgPT09IG51bGwgfHwgdGVjaEZhcSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVjaEZhcS5jbGFzc0xpc3QuYWRkKCdmYXFfX3F1ZXN0aW9uLS1mbGV4Jyk7XG4gICAgICAgIHRlY2hGYXEgPT09IG51bGwgfHwgdGVjaEZhcSA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGVjaEZhcS5jbGFzc0xpc3QucmVtb3ZlKCdmYXFfX3F1ZXN0aW9uLS1ub25lJyk7XG4gICAgfSk7XG59XG4iLCJpbXBvcnQgeyBmYXFUb2dnbGUgfSBmcm9tIFwiLi9mYXFUb2dnbGVcIjtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgIGZhcVRvZ2dsZSgpO1xuICAgIC8vIGJ1cmdlclRvZ2dsZSgpXG4gICAgLy8gZmlyc3RMb2FkKCk7XG59KTtcbiIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEZvbnQiLCJtb2JpbGVGb250IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJkZWZhdWx0SGVpZ2h0IiwiZlNpemUiLCJkZXZpY2UiLCJ2VyIsInZIIiwiTWF0aCIsIm1pbiIsIm1heCIsIm1vZGlmaWVyRGV2aWNlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpc01vYmlsZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiZm9udFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbmxvYWQiLCJvbnJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=