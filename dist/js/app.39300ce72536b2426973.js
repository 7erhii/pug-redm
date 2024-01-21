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

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"possib-page\"\u003E\u003Cdiv class=\"page-descr\"\u003E\u003Cdiv class=\"page-descr__text\"\u003E\u003Cspan\u003EВозможности Redmax TV\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"page-descr__action\"\u003E\u003Cdiv class=\"main-btn main-btn--red\"\u003E\u003Cspan\u003EПолучить список каналов\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__cards\"\u003E\u003Cdiv class=\"possib-page__card\"\u003E\u003Cdiv class=\"possib-page__card-header\"\u003E\u003Csvg width=\"96\" height=\"96\" viewBox=\"0 0 96 96\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_41_16834\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"96\" height=\"96\"\u003E\n\u003Crect width=\"96\" height=\"96\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_41_16834)\"\u003E\n\u003Cpath d=\"M19.9999 35.231H75.9999V25.2309C75.9999 24.9232 75.8717 24.6411 75.6153 24.3846C75.3588 24.1282 75.0767 24 74.769 24H21.2308C20.9231 24 20.641 24.1282 20.3845 24.3846C20.1281 24.6411 19.9999 24.9232 19.9999 25.2309V35.231ZM21.2308 85.9999C19.2103 85.9999 17.5 85.2999 16.1 83.8999C14.7 82.4999 14 80.7896 14 78.7691V25.2309C14 23.2104 14.7 21.5001 16.1 20.1001C17.5 18.7001 19.2103 18.0001 21.2308 18.0001H26.7693V12.6154C26.7693 11.7385 27.0629 11.0065 27.6501 10.4193C28.2372 9.83217 28.9693 9.5386 29.8462 9.5386C30.7231 9.5386 31.4551 9.83217 32.0423 10.4193C32.6294 11.0065 32.923 11.7385 32.923 12.6154V18.0001H63.2306V12.5385C63.2306 11.6872 63.5178 10.9744 64.0921 10.4001C64.6664 9.82577 65.3792 9.5386 66.2305 9.5386C67.0818 9.5386 67.7946 9.82577 68.3689 10.4001C68.9433 10.9744 69.2305 11.6872 69.2305 12.5385V18.0001H74.769C76.7895 18.0001 78.4998 18.7001 79.8998 20.1001C81.2998 21.5001 81.9998 23.2104 81.9998 25.2309V47.0846C81.0408 46.6641 80.0613 46.3244 79.0614 46.0654C78.0614 45.8065 77.0409 45.6026 75.9999 45.4539V41.2309H19.9999V78.7691C19.9999 79.0768 20.1281 79.3589 20.3845 79.6154C20.641 79.8718 20.9231 80 21.2308 80H47.2385C47.577 81.1077 47.9859 82.1551 48.4654 83.1422C48.9449 84.1294 49.4897 85.082 50.1 85.9999H21.2308ZM72.7692 89.9999C67.7743 89.9999 63.5256 88.2486 60.0231 84.7461C56.5206 81.2435 54.7693 76.9948 54.7693 72C54.7693 67.0052 56.5206 62.7565 60.0231 59.2539C63.5256 55.7514 67.7743 54.0001 72.7692 54.0001C77.764 54.0001 82.0127 55.7514 85.5152 59.2539C89.0177 62.7565 90.769 67.0052 90.769 72C90.769 76.9948 89.0177 81.2435 85.5152 84.7461C82.0127 88.2486 77.764 89.9999 72.7692 89.9999ZM74.5384 71.2769V62C74.5384 61.5179 74.364 61.1026 74.0153 60.7539C73.6666 60.4052 73.2513 60.2308 72.7692 60.2308C72.2871 60.2308 71.8717 60.4052 71.523 60.7539C71.1743 61.1026 71 61.5179 71 62V71.2154C71 71.6975 71.0872 72.1564 71.2615 72.5923C71.4358 73.0282 71.7102 73.4333 72.0846 73.8077L78.1846 79.9077C78.5333 80.2564 78.9423 80.4371 79.4115 80.45C79.8807 80.4628 80.3025 80.282 80.6769 79.9077C81.0512 79.5333 81.2384 79.1179 81.2384 78.6615C81.2384 78.2051 81.0512 77.7897 80.6769 77.4154L74.5384 71.2769Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cdiv class=\"possib-page__card-text\"\u003E\u003Cp\u003EПробный период\u003C\u002Fp\u003E\u003Cspan\u003EТысячи фильмов и сериалов в лучшем качестве\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card-descr\"\u003E\u003Cdiv class=\"possib-page__card-line\"\u003E\u003Csvg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_302_38586\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"41\"\u003E\n\u003Crect y=\"0.599609\" width=\"40\" height=\"40\" fill=\"#D9D9D9\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_302_38586)\"\u003E\n\u003Cpath d=\"M15.9168 25.8496L30.0419 11.7246C30.3752 11.3913 30.771 11.2246 31.2294 11.2246C31.6877 11.2246 32.0835 11.3913 32.4169 11.7246C32.7502 12.0579 32.9169 12.4538 32.9169 12.9121C32.9169 13.3704 32.7502 13.7663 32.4169 14.0996L17.0835 29.4329C16.7502 29.7663 16.3613 29.9329 15.9168 29.9329C15.4724 29.9329 15.0835 29.7663 14.7502 29.4329L7.58352 22.2663C7.25018 21.9329 7.09046 21.5371 7.10435 21.0788C7.11824 20.6204 7.29185 20.2246 7.62518 19.8913C7.95852 19.5579 8.35435 19.3913 8.81268 19.3913C9.27102 19.3913 9.66685 19.5579 10.0002 19.8913L15.9168 25.8496Z\" fill=\"#CD1C29\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EТысячи фильмов и сериалов в лучшем качестве\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card-line\"\u003E\u003Csvg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_302_38586\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"41\"\u003E\n\u003Crect y=\"0.599609\" width=\"40\" height=\"40\" fill=\"#D9D9D9\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_302_38586)\"\u003E\n\u003Cpath d=\"M15.9168 25.8496L30.0419 11.7246C30.3752 11.3913 30.771 11.2246 31.2294 11.2246C31.6877 11.2246 32.0835 11.3913 32.4169 11.7246C32.7502 12.0579 32.9169 12.4538 32.9169 12.9121C32.9169 13.3704 32.7502 13.7663 32.4169 14.0996L17.0835 29.4329C16.7502 29.7663 16.3613 29.9329 15.9168 29.9329C15.4724 29.9329 15.0835 29.7663 14.7502 29.4329L7.58352 22.2663C7.25018 21.9329 7.09046 21.5371 7.10435 21.0788C7.11824 20.6204 7.29185 20.2246 7.62518 19.8913C7.95852 19.5579 8.35435 19.3913 8.81268 19.3913C9.27102 19.3913 9.66685 19.5579 10.0002 19.8913L15.9168 25.8496Z\" fill=\"#CD1C29\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EБесплатная возможность оценить сервис перед покупкой\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card-line\"\u003E\u003Csvg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_302_38586\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"41\"\u003E\n\u003Crect y=\"0.599609\" width=\"40\" height=\"40\" fill=\"#D9D9D9\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_302_38586)\"\u003E\n\u003Cpath d=\"M15.9168 25.8496L30.0419 11.7246C30.3752 11.3913 30.771 11.2246 31.2294 11.2246C31.6877 11.2246 32.0835 11.3913 32.4169 11.7246C32.7502 12.0579 32.9169 12.4538 32.9169 12.9121C32.9169 13.3704 32.7502 13.7663 32.4169 14.0996L17.0835 29.4329C16.7502 29.7663 16.3613 29.9329 15.9168 29.9329C15.4724 29.9329 15.0835 29.7663 14.7502 29.4329L7.58352 22.2663C7.25018 21.9329 7.09046 21.5371 7.10435 21.0788C7.11824 20.6204 7.29185 20.2246 7.62518 19.8913C7.95852 19.5579 8.35435 19.3913 8.81268 19.3913C9.27102 19.3913 9.66685 19.5579 10.0002 19.8913L15.9168 25.8496Z\" fill=\"#CD1C29\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EНаслаждайтесь бесплатным просмотром с качественным контентом и приятным интерфейсом\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card\"\u003E\u003Cdiv class=\"possib-page__card-header\"\u003E\u003Csvg width=\"96\" height=\"96\" viewBox=\"0 0 96 96\" fill=\"#currentColor\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_41_16834\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"96\" height=\"96\"\u003E\n\u003Crect width=\"96\" height=\"96\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_41_16834)\"\u003E\n\u003Cpath d=\"M19.9999 35.231H75.9999V25.2309C75.9999 24.9232 75.8717 24.6411 75.6153 24.3846C75.3588 24.1282 75.0767 24 74.769 24H21.2308C20.9231 24 20.641 24.1282 20.3845 24.3846C20.1281 24.6411 19.9999 24.9232 19.9999 25.2309V35.231ZM21.2308 85.9999C19.2103 85.9999 17.5 85.2999 16.1 83.8999C14.7 82.4999 14 80.7896 14 78.7691V25.2309C14 23.2104 14.7 21.5001 16.1 20.1001C17.5 18.7001 19.2103 18.0001 21.2308 18.0001H26.7693V12.6154C26.7693 11.7385 27.0629 11.0065 27.6501 10.4193C28.2372 9.83217 28.9693 9.5386 29.8462 9.5386C30.7231 9.5386 31.4551 9.83217 32.0423 10.4193C32.6294 11.0065 32.923 11.7385 32.923 12.6154V18.0001H63.2306V12.5385C63.2306 11.6872 63.5178 10.9744 64.0921 10.4001C64.6664 9.82577 65.3792 9.5386 66.2305 9.5386C67.0818 9.5386 67.7946 9.82577 68.3689 10.4001C68.9433 10.9744 69.2305 11.6872 69.2305 12.5385V18.0001H74.769C76.7895 18.0001 78.4998 18.7001 79.8998 20.1001C81.2998 21.5001 81.9998 23.2104 81.9998 25.2309V47.0846C81.0408 46.6641 80.0613 46.3244 79.0614 46.0654C78.0614 45.8065 77.0409 45.6026 75.9999 45.4539V41.2309H19.9999V78.7691C19.9999 79.0768 20.1281 79.3589 20.3845 79.6154C20.641 79.8718 20.9231 80 21.2308 80H47.2385C47.577 81.1077 47.9859 82.1551 48.4654 83.1422C48.9449 84.1294 49.4897 85.082 50.1 85.9999H21.2308ZM72.7692 89.9999C67.7743 89.9999 63.5256 88.2486 60.0231 84.7461C56.5206 81.2435 54.7693 76.9948 54.7693 72C54.7693 67.0052 56.5206 62.7565 60.0231 59.2539C63.5256 55.7514 67.7743 54.0001 72.7692 54.0001C77.764 54.0001 82.0127 55.7514 85.5152 59.2539C89.0177 62.7565 90.769 67.0052 90.769 72C90.769 76.9948 89.0177 81.2435 85.5152 84.7461C82.0127 88.2486 77.764 89.9999 72.7692 89.9999ZM74.5384 71.2769V62C74.5384 61.5179 74.364 61.1026 74.0153 60.7539C73.6666 60.4052 73.2513 60.2308 72.7692 60.2308C72.2871 60.2308 71.8717 60.4052 71.523 60.7539C71.1743 61.1026 71 61.5179 71 62V71.2154C71 71.6975 71.0872 72.1564 71.2615 72.5923C71.4358 73.0282 71.7102 73.4333 72.0846 73.8077L78.1846 79.9077C78.5333 80.2564 78.9423 80.4371 79.4115 80.45C79.8807 80.4628 80.3025 80.282 80.6769 79.9077C81.0512 79.5333 81.2384 79.1179 81.2384 78.6615C81.2384 78.2051 81.0512 77.7897 80.6769 77.4154L74.5384 71.2769Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cdiv class=\"possib-page__card-text\"\u003E\u003Cp\u003EПробный период\u003C\u002Fp\u003E\u003Cspan\u003EТысячи фильмов и сериалов в лучшем качестве\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card-descr\"\u003E\u003Cdiv class=\"possib-page__card-line\"\u003E\u003Csvg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_302_38586\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"41\"\u003E\n\u003Crect y=\"0.599609\" width=\"40\" height=\"40\" fill=\"#D9D9D9\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_302_38586)\"\u003E\n\u003Cpath d=\"M15.9168 25.8496L30.0419 11.7246C30.3752 11.3913 30.771 11.2246 31.2294 11.2246C31.6877 11.2246 32.0835 11.3913 32.4169 11.7246C32.7502 12.0579 32.9169 12.4538 32.9169 12.9121C32.9169 13.3704 32.7502 13.7663 32.4169 14.0996L17.0835 29.4329C16.7502 29.7663 16.3613 29.9329 15.9168 29.9329C15.4724 29.9329 15.0835 29.7663 14.7502 29.4329L7.58352 22.2663C7.25018 21.9329 7.09046 21.5371 7.10435 21.0788C7.11824 20.6204 7.29185 20.2246 7.62518 19.8913C7.95852 19.5579 8.35435 19.3913 8.81268 19.3913C9.27102 19.3913 9.66685 19.5579 10.0002 19.8913L15.9168 25.8496Z\" fill=\"#CD1C29\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EТысячи фильмов и сериалов в лучшем качестве\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card-line\"\u003E\u003Csvg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_302_38586\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"41\"\u003E\n\u003Crect y=\"0.599609\" width=\"40\" height=\"40\" fill=\"#D9D9D9\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_302_38586)\"\u003E\n\u003Cpath d=\"M15.9168 25.8496L30.0419 11.7246C30.3752 11.3913 30.771 11.2246 31.2294 11.2246C31.6877 11.2246 32.0835 11.3913 32.4169 11.7246C32.7502 12.0579 32.9169 12.4538 32.9169 12.9121C32.9169 13.3704 32.7502 13.7663 32.4169 14.0996L17.0835 29.4329C16.7502 29.7663 16.3613 29.9329 15.9168 29.9329C15.4724 29.9329 15.0835 29.7663 14.7502 29.4329L7.58352 22.2663C7.25018 21.9329 7.09046 21.5371 7.10435 21.0788C7.11824 20.6204 7.29185 20.2246 7.62518 19.8913C7.95852 19.5579 8.35435 19.3913 8.81268 19.3913C9.27102 19.3913 9.66685 19.5579 10.0002 19.8913L15.9168 25.8496Z\" fill=\"#CD1C29\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EБесплатная возможность оценить сервис перед покупкой\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"possib-page__card-line\"\u003E\u003Csvg width=\"40\" height=\"41\" viewBox=\"0 0 40 41\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cmask id=\"mask0_302_38586\" style=\"mask-type:alpha\" maskUnits=\"userSpaceOnUse\" x=\"0\" y=\"0\" width=\"40\" height=\"41\"\u003E\n\u003Crect y=\"0.599609\" width=\"40\" height=\"40\" fill=\"#D9D9D9\"\u002F\u003E\n\u003C\u002Fmask\u003E\n\u003Cg mask=\"url(#mask0_302_38586)\"\u003E\n\u003Cpath d=\"M15.9168 25.8496L30.0419 11.7246C30.3752 11.3913 30.771 11.2246 31.2294 11.2246C31.6877 11.2246 32.0835 11.3913 32.4169 11.7246C32.7502 12.0579 32.9169 12.4538 32.9169 12.9121C32.9169 13.3704 32.7502 13.7663 32.4169 14.0996L17.0835 29.4329C16.7502 29.7663 16.3613 29.9329 15.9168 29.9329C15.4724 29.9329 15.0835 29.7663 14.7502 29.4329L7.58352 22.2663C7.25018 21.9329 7.09046 21.5371 7.10435 21.0788C7.11824 20.6204 7.29185 20.2246 7.62518 19.8913C7.95852 19.5579 8.35435 19.3913 8.81268 19.3913C9.27102 19.3913 9.66685 19.5579 10.0002 19.8913L15.9168 25.8496Z\" fill=\"#CD1C29\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003Cspan\u003EНаслаждайтесь бесплатным просмотром с качественным контентом и приятным интерфейсом\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
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

/***/ "./src/core/burger-menu.ts":
/*!*********************************!*\
  !*** ./src/core/burger-menu.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "burgerToggle": () => (/* binding */ burgerToggle)
/* harmony export */ });
function burgerToggle() {
    document.getElementById('menu-toggle')
        .addEventListener('click', function () {
        document.body.classList.toggle('nav-open');
    });
}


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
    var buttons = [sliderHomeBtn, sliderTvBtn, sliderMovieBtn, sliderArchBtn, sliderFavBtn];
    var contents = [sliderHomeContent, sliderTvBtnContent, sliderMovieContent, sliderArchContent, sliderFavContent];
    if (sliderHomeBtn) {
        sliderHomeBtn.classList.add("active");
        sliderHomeContent.classList.add("visible");
    }
    buttons.forEach(function (button, index) {
        button.addEventListener("click", function () { return handleClick(button, contents[index]); });
    });
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
    function isElementVisible(element) {
        var rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
    function checkVisibilityOnScroll() {
        var element = document.getElementById("slider-starter-js");
        if (element && isElementVisible(element)) {
            if (!document.documentElement.classList.contains("mobile")) {
                document.querySelectorAll(".slider__aside-text").forEach(function (e) {
                    if (e instanceof HTMLElement)
                        e.style.display = "flex";
                });
            }
            else {
            }
        }
    }
    window.addEventListener("scroll", checkVisibilityOnScroll);
    var autoSwitch = setInterval(function () {
        var activeIndex = buttons.findIndex(function (btn) { return btn.classList.contains("active"); });
        var nextIndex = (activeIndex + 1) % buttons.length;
        handleClick(buttons[nextIndex], contents[nextIndex]);
    }, 2200);
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
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./burger-menu */ "./src/core/burger-menu.ts");


document.addEventListener("DOMContentLoaded", function () {
    // Вызов функции show
    (0,_burger_menu__WEBPACK_IMPORTED_MODULE_1__.burgerToggle)();
    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.firstLoad)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvbWFpbi9mYXEtcGFnZS5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvYnVyZ2VyLW1lbnUudHMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL2hvbWUtcGFnZS50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzLzdlcmhpeS9EZXNrdG9wL1dFQi9wcm9qZWN0cy9SZWRtYXhldS9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lfGZzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtcblxuXG5cblxuXG5cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0MhLS0gU3R5bGVzaGVldCBmb3IgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ2xpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmNkbi5qc2RlbGl2ci5uZXRcXHUwMDJGbnBtXFx1MDAyRnN3aXBlckAxMVxcdTAwMkZzd2lwZXItYnVuZGxlLm1pbi5jc3NcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJ3cmFwcGVyXFxcIlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vbWFpbi9mYXEtcGFnZS5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQyEtLSBTY3JpcHQgZm9yIFN3aXBlci0tXFx1MDAzRVxcdTAwM0NzY3JpcHQgc3JjPVxcXCJodHRwczpcXHUwMDJGXFx1MDAyRmNkbi5qc2RlbGl2ci5uZXRcXHUwMDJGbnBtXFx1MDAyRnN3aXBlckAxMVxcdTAwMkZzd2lwZXItYnVuZGxlLm1pbi5qc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQyEtLSBJbml0aWFsaXplIFN3aXBlci0tXFx1MDAzRVxcdTAwM0NzY3JpcHRcXHUwMDNFdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoXFxcIi5teVN3aXBlclxcXCIsIHtcXG4gIGRpcmVjdGlvbjogXFxcInZlcnRpY2FsXFxcIixcXG4gIHNsaWRlc1BlclZpZXc6IDEsXFxuICBzcGFjZUJldHdlZW46IDMwLFxcbiAgbW91c2V3aGVlbDogdHJ1ZSxcXG4gIHBhZ2luYXRpb246IHtcXG4gICAgZWw6IFxcXCIuc3dpcGVyLXBhZ2luYXRpb25cXFwiLFxcbiAgICBjbGlja2FibGU6IHRydWUsXFxuICB9LFxcbn0pO1xcdTAwM0NcXHUwMDJGc2NyaXB0XFx1MDAzRVxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwicG9zc2liLXBhZ2VcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2UtZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2UtZGVzY3JfX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCS0L7Qt9C80L7QttC90L7RgdGC0LggUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBhZ2UtZGVzY3JfX2FjdGlvblxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXJlZFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QvtC70YPRh9C40YLRjCDRgdC/0LjRgdC+0Log0LrQsNC90LDQu9C+0LJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmRzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwb3NzaWItcGFnZV9fY2FyZFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCI5NlxcXCIgaGVpZ2h0PVxcXCI5NlxcXCIgdmlld0JveD1cXFwiMCAwIDk2IDk2XFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NtYXNrIGlkPVxcXCJtYXNrMF80MV8xNjgzNFxcXCIgc3R5bGU9XFxcIm1hc2stdHlwZTphbHBoYVxcXCIgbWFza1VuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjk2XFxcIiBoZWlnaHQ9XFxcIjk2XFxcIlxcdTAwM0VcXG5cXHUwMDNDcmVjdCB3aWR0aD1cXFwiOTZcXFwiIGhlaWdodD1cXFwiOTZcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRm1hc2tcXHUwMDNFXFxuXFx1MDAzQ2cgbWFzaz1cXFwidXJsKCNtYXNrMF80MV8xNjgzNClcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xOS45OTk5IDM1LjIzMUg3NS45OTk5VjI1LjIzMDlDNzUuOTk5OSAyNC45MjMyIDc1Ljg3MTcgMjQuNjQxMSA3NS42MTUzIDI0LjM4NDZDNzUuMzU4OCAyNC4xMjgyIDc1LjA3NjcgMjQgNzQuNzY5IDI0SDIxLjIzMDhDMjAuOTIzMSAyNCAyMC42NDEgMjQuMTI4MiAyMC4zODQ1IDI0LjM4NDZDMjAuMTI4MSAyNC42NDExIDE5Ljk5OTkgMjQuOTIzMiAxOS45OTk5IDI1LjIzMDlWMzUuMjMxWk0yMS4yMzA4IDg1Ljk5OTlDMTkuMjEwMyA4NS45OTk5IDE3LjUgODUuMjk5OSAxNi4xIDgzLjg5OTlDMTQuNyA4Mi40OTk5IDE0IDgwLjc4OTYgMTQgNzguNzY5MVYyNS4yMzA5QzE0IDIzLjIxMDQgMTQuNyAyMS41MDAxIDE2LjEgMjAuMTAwMUMxNy41IDE4LjcwMDEgMTkuMjEwMyAxOC4wMDAxIDIxLjIzMDggMTguMDAwMUgyNi43NjkzVjEyLjYxNTRDMjYuNzY5MyAxMS43Mzg1IDI3LjA2MjkgMTEuMDA2NSAyNy42NTAxIDEwLjQxOTNDMjguMjM3MiA5LjgzMjE3IDI4Ljk2OTMgOS41Mzg2IDI5Ljg0NjIgOS41Mzg2QzMwLjcyMzEgOS41Mzg2IDMxLjQ1NTEgOS44MzIxNyAzMi4wNDIzIDEwLjQxOTNDMzIuNjI5NCAxMS4wMDY1IDMyLjkyMyAxMS43Mzg1IDMyLjkyMyAxMi42MTU0VjE4LjAwMDFINjMuMjMwNlYxMi41Mzg1QzYzLjIzMDYgMTEuNjg3MiA2My41MTc4IDEwLjk3NDQgNjQuMDkyMSAxMC40MDAxQzY0LjY2NjQgOS44MjU3NyA2NS4zNzkyIDkuNTM4NiA2Ni4yMzA1IDkuNTM4NkM2Ny4wODE4IDkuNTM4NiA2Ny43OTQ2IDkuODI1NzcgNjguMzY4OSAxMC40MDAxQzY4Ljk0MzMgMTAuOTc0NCA2OS4yMzA1IDExLjY4NzIgNjkuMjMwNSAxMi41Mzg1VjE4LjAwMDFINzQuNzY5Qzc2Ljc4OTUgMTguMDAwMSA3OC40OTk4IDE4LjcwMDEgNzkuODk5OCAyMC4xMDAxQzgxLjI5OTggMjEuNTAwMSA4MS45OTk4IDIzLjIxMDQgODEuOTk5OCAyNS4yMzA5VjQ3LjA4NDZDODEuMDQwOCA0Ni42NjQxIDgwLjA2MTMgNDYuMzI0NCA3OS4wNjE0IDQ2LjA2NTRDNzguMDYxNCA0NS44MDY1IDc3LjA0MDkgNDUuNjAyNiA3NS45OTk5IDQ1LjQ1MzlWNDEuMjMwOUgxOS45OTk5Vjc4Ljc2OTFDMTkuOTk5OSA3OS4wNzY4IDIwLjEyODEgNzkuMzU4OSAyMC4zODQ1IDc5LjYxNTRDMjAuNjQxIDc5Ljg3MTggMjAuOTIzMSA4MCAyMS4yMzA4IDgwSDQ3LjIzODVDNDcuNTc3IDgxLjEwNzcgNDcuOTg1OSA4Mi4xNTUxIDQ4LjQ2NTQgODMuMTQyMkM0OC45NDQ5IDg0LjEyOTQgNDkuNDg5NyA4NS4wODIgNTAuMSA4NS45OTk5SDIxLjIzMDhaTTcyLjc2OTIgODkuOTk5OUM2Ny43NzQzIDg5Ljk5OTkgNjMuNTI1NiA4OC4yNDg2IDYwLjAyMzEgODQuNzQ2MUM1Ni41MjA2IDgxLjI0MzUgNTQuNzY5MyA3Ni45OTQ4IDU0Ljc2OTMgNzJDNTQuNzY5MyA2Ny4wMDUyIDU2LjUyMDYgNjIuNzU2NSA2MC4wMjMxIDU5LjI1MzlDNjMuNTI1NiA1NS43NTE0IDY3Ljc3NDMgNTQuMDAwMSA3Mi43NjkyIDU0LjAwMDFDNzcuNzY0IDU0LjAwMDEgODIuMDEyNyA1NS43NTE0IDg1LjUxNTIgNTkuMjUzOUM4OS4wMTc3IDYyLjc1NjUgOTAuNzY5IDY3LjAwNTIgOTAuNzY5IDcyQzkwLjc2OSA3Ni45OTQ4IDg5LjAxNzcgODEuMjQzNSA4NS41MTUyIDg0Ljc0NjFDODIuMDEyNyA4OC4yNDg2IDc3Ljc2NCA4OS45OTk5IDcyLjc2OTIgODkuOTk5OVpNNzQuNTM4NCA3MS4yNzY5VjYyQzc0LjUzODQgNjEuNTE3OSA3NC4zNjQgNjEuMTAyNiA3NC4wMTUzIDYwLjc1MzlDNzMuNjY2NiA2MC40MDUyIDczLjI1MTMgNjAuMjMwOCA3Mi43NjkyIDYwLjIzMDhDNzIuMjg3MSA2MC4yMzA4IDcxLjg3MTcgNjAuNDA1MiA3MS41MjMgNjAuNzUzOUM3MS4xNzQzIDYxLjEwMjYgNzEgNjEuNTE3OSA3MSA2MlY3MS4yMTU0QzcxIDcxLjY5NzUgNzEuMDg3MiA3Mi4xNTY0IDcxLjI2MTUgNzIuNTkyM0M3MS40MzU4IDczLjAyODIgNzEuNzEwMiA3My40MzMzIDcyLjA4NDYgNzMuODA3N0w3OC4xODQ2IDc5LjkwNzdDNzguNTMzMyA4MC4yNTY0IDc4Ljk0MjMgODAuNDM3MSA3OS40MTE1IDgwLjQ1Qzc5Ljg4MDcgODAuNDYyOCA4MC4zMDI1IDgwLjI4MiA4MC42NzY5IDc5LjkwNzdDODEuMDUxMiA3OS41MzMzIDgxLjIzODQgNzkuMTE3OSA4MS4yMzg0IDc4LjY2MTVDODEuMjM4NCA3OC4yMDUxIDgxLjA1MTIgNzcuNzg5NyA4MC42NzY5IDc3LjQxNTRMNzQuNTM4NCA3MS4yNzY5WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJwb3NzaWItcGFnZV9fY2FyZC10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQn9GA0L7QsdC90YvQuSDQv9C10YDQuNC+0LRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLRi9GB0Y/Rh9C4INGE0LjQu9GM0LzQvtCyINC4INGB0LXRgNC40LDQu9C+0LIg0LIg0LvRg9GH0YjQtdC8INC60LDRh9C10YHRgtCy0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBvc3NpYi1wYWdlX19jYXJkLWxpbmVcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQxXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAgNDFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ21hc2sgaWQ9XFxcIm1hc2swXzMwMl8zODU4NlxcXCIgc3R5bGU9XFxcIm1hc2stdHlwZTphbHBoYVxcXCIgbWFza1VuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQxXFxcIlxcdTAwM0VcXG5cXHUwMDNDcmVjdCB5PVxcXCIwLjU5OTYwOVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBmaWxsPVxcXCIjRDlEOUQ5XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZtYXNrXFx1MDAzRVxcblxcdTAwM0NnIG1hc2s9XFxcInVybCgjbWFzazBfMzAyXzM4NTg2KVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE1LjkxNjggMjUuODQ5NkwzMC4wNDE5IDExLjcyNDZDMzAuMzc1MiAxMS4zOTEzIDMwLjc3MSAxMS4yMjQ2IDMxLjIyOTQgMTEuMjI0NkMzMS42ODc3IDExLjIyNDYgMzIuMDgzNSAxMS4zOTEzIDMyLjQxNjkgMTEuNzI0NkMzMi43NTAyIDEyLjA1NzkgMzIuOTE2OSAxMi40NTM4IDMyLjkxNjkgMTIuOTEyMUMzMi45MTY5IDEzLjM3MDQgMzIuNzUwMiAxMy43NjYzIDMyLjQxNjkgMTQuMDk5NkwxNy4wODM1IDI5LjQzMjlDMTYuNzUwMiAyOS43NjYzIDE2LjM2MTMgMjkuOTMyOSAxNS45MTY4IDI5LjkzMjlDMTUuNDcyNCAyOS45MzI5IDE1LjA4MzUgMjkuNzY2MyAxNC43NTAyIDI5LjQzMjlMNy41ODM1MiAyMi4yNjYzQzcuMjUwMTggMjEuOTMyOSA3LjA5MDQ2IDIxLjUzNzEgNy4xMDQzNSAyMS4wNzg4QzcuMTE4MjQgMjAuNjIwNCA3LjI5MTg1IDIwLjIyNDYgNy42MjUxOCAxOS44OTEzQzcuOTU4NTIgMTkuNTU3OSA4LjM1NDM1IDE5LjM5MTMgOC44MTI2OCAxOS4zOTEzQzkuMjcxMDIgMTkuMzkxMyA5LjY2Njg1IDE5LjU1NzkgMTAuMDAwMiAxOS44OTEzTDE1LjkxNjggMjUuODQ5NlpcXFwiIGZpbGw9XFxcIiNDRDFDMjlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ3NwYW5cXHUwMDNF0KLRi9GB0Y/Rh9C4INGE0LjQu9GM0LzQvtCyINC4INGB0LXRgNC40LDQu9C+0LIg0LIg0LvRg9GH0YjQtdC8INC60LDRh9C10YHRgtCy0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtbGluZVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDbWFzayBpZD1cXFwibWFzazBfMzAyXzM4NTg2XFxcIiBzdHlsZT1cXFwibWFzay10eXBlOmFscGhhXFxcIiBtYXNrVW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIiB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHk9XFxcIjAuNTk5NjA5XFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGZpbGw9XFxcIiNEOUQ5RDlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRm1hc2tcXHUwMDNFXFxuXFx1MDAzQ2cgbWFzaz1cXFwidXJsKCNtYXNrMF8zMDJfMzg1ODYpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTUuOTE2OCAyNS44NDk2TDMwLjA0MTkgMTEuNzI0NkMzMC4zNzUyIDExLjM5MTMgMzAuNzcxIDExLjIyNDYgMzEuMjI5NCAxMS4yMjQ2QzMxLjY4NzcgMTEuMjI0NiAzMi4wODM1IDExLjM5MTMgMzIuNDE2OSAxMS43MjQ2QzMyLjc1MDIgMTIuMDU3OSAzMi45MTY5IDEyLjQ1MzggMzIuOTE2OSAxMi45MTIxQzMyLjkxNjkgMTMuMzcwNCAzMi43NTAyIDEzLjc2NjMgMzIuNDE2OSAxNC4wOTk2TDE3LjA4MzUgMjkuNDMyOUMxNi43NTAyIDI5Ljc2NjMgMTYuMzYxMyAyOS45MzI5IDE1LjkxNjggMjkuOTMyOUMxNS40NzI0IDI5LjkzMjkgMTUuMDgzNSAyOS43NjYzIDE0Ljc1MDIgMjkuNDMyOUw3LjU4MzUyIDIyLjI2NjNDNy4yNTAxOCAyMS45MzI5IDcuMDkwNDYgMjEuNTM3MSA3LjEwNDM1IDIxLjA3ODhDNy4xMTgyNCAyMC42MjA0IDcuMjkxODUgMjAuMjI0NiA3LjYyNTE4IDE5Ljg5MTNDNy45NTg1MiAxOS41NTc5IDguMzU0MzUgMTkuMzkxMyA4LjgxMjY4IDE5LjM5MTNDOS4yNzEwMiAxOS4zOTEzIDkuNjY2ODUgMTkuNTU3OSAxMC4wMDAyIDE5Ljg5MTNMMTUuOTE2OCAyNS44NDk2WlxcXCIgZmlsbD1cXFwiI0NEMUMyOVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDc3BhblxcdTAwM0XQkdC10YHQv9C70LDRgtC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC+0YbQtdC90LjRgtGMINGB0LXRgNCy0LjRgSDQv9C10YDQtdC0INC/0L7QutGD0L/QutC+0LlcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtbGluZVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDbWFzayBpZD1cXFwibWFzazBfMzAyXzM4NTg2XFxcIiBzdHlsZT1cXFwibWFzay10eXBlOmFscGhhXFxcIiBtYXNrVW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIiB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHk9XFxcIjAuNTk5NjA5XFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGZpbGw9XFxcIiNEOUQ5RDlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRm1hc2tcXHUwMDNFXFxuXFx1MDAzQ2cgbWFzaz1cXFwidXJsKCNtYXNrMF8zMDJfMzg1ODYpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTUuOTE2OCAyNS44NDk2TDMwLjA0MTkgMTEuNzI0NkMzMC4zNzUyIDExLjM5MTMgMzAuNzcxIDExLjIyNDYgMzEuMjI5NCAxMS4yMjQ2QzMxLjY4NzcgMTEuMjI0NiAzMi4wODM1IDExLjM5MTMgMzIuNDE2OSAxMS43MjQ2QzMyLjc1MDIgMTIuMDU3OSAzMi45MTY5IDEyLjQ1MzggMzIuOTE2OSAxMi45MTIxQzMyLjkxNjkgMTMuMzcwNCAzMi43NTAyIDEzLjc2NjMgMzIuNDE2OSAxNC4wOTk2TDE3LjA4MzUgMjkuNDMyOUMxNi43NTAyIDI5Ljc2NjMgMTYuMzYxMyAyOS45MzI5IDE1LjkxNjggMjkuOTMyOUMxNS40NzI0IDI5LjkzMjkgMTUuMDgzNSAyOS43NjYzIDE0Ljc1MDIgMjkuNDMyOUw3LjU4MzUyIDIyLjI2NjNDNy4yNTAxOCAyMS45MzI5IDcuMDkwNDYgMjEuNTM3MSA3LjEwNDM1IDIxLjA3ODhDNy4xMTgyNCAyMC42MjA0IDcuMjkxODUgMjAuMjI0NiA3LjYyNTE4IDE5Ljg5MTNDNy45NTg1MiAxOS41NTc5IDguMzU0MzUgMTkuMzkxMyA4LjgxMjY4IDE5LjM5MTNDOS4yNzEwMiAxOS4zOTEzIDkuNjY2ODUgMTkuNTU3OSAxMC4wMDAyIDE5Ljg5MTNMMTUuOTE2OCAyNS44NDk2WlxcXCIgZmlsbD1cXFwiI0NEMUMyOVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDc3BhblxcdTAwM0XQndCw0YHQu9Cw0LbQtNCw0LnRgtC10YHRjCDQsdC10YHQv9C70LDRgtC90YvQvCDQv9GA0L7RgdC80L7RgtGA0L7QvCDRgSDQutCw0YfQtdGB0YLQstC10L3QvdGL0Lwg0LrQvtC90YLQtdC90YLQvtC8INC4INC/0YDQuNGP0YLQvdGL0Lwg0LjQvdGC0LXRgNGE0LXQudGB0L7QvFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwb3NzaWItcGFnZV9fY2FyZFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCI5NlxcXCIgaGVpZ2h0PVxcXCI5NlxcXCIgdmlld0JveD1cXFwiMCAwIDk2IDk2XFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NtYXNrIGlkPVxcXCJtYXNrMF80MV8xNjgzNFxcXCIgc3R5bGU9XFxcIm1hc2stdHlwZTphbHBoYVxcXCIgbWFza1VuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjk2XFxcIiBoZWlnaHQ9XFxcIjk2XFxcIlxcdTAwM0VcXG5cXHUwMDNDcmVjdCB3aWR0aD1cXFwiOTZcXFwiIGhlaWdodD1cXFwiOTZcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRm1hc2tcXHUwMDNFXFxuXFx1MDAzQ2cgbWFzaz1cXFwidXJsKCNtYXNrMF80MV8xNjgzNClcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xOS45OTk5IDM1LjIzMUg3NS45OTk5VjI1LjIzMDlDNzUuOTk5OSAyNC45MjMyIDc1Ljg3MTcgMjQuNjQxMSA3NS42MTUzIDI0LjM4NDZDNzUuMzU4OCAyNC4xMjgyIDc1LjA3NjcgMjQgNzQuNzY5IDI0SDIxLjIzMDhDMjAuOTIzMSAyNCAyMC42NDEgMjQuMTI4MiAyMC4zODQ1IDI0LjM4NDZDMjAuMTI4MSAyNC42NDExIDE5Ljk5OTkgMjQuOTIzMiAxOS45OTk5IDI1LjIzMDlWMzUuMjMxWk0yMS4yMzA4IDg1Ljk5OTlDMTkuMjEwMyA4NS45OTk5IDE3LjUgODUuMjk5OSAxNi4xIDgzLjg5OTlDMTQuNyA4Mi40OTk5IDE0IDgwLjc4OTYgMTQgNzguNzY5MVYyNS4yMzA5QzE0IDIzLjIxMDQgMTQuNyAyMS41MDAxIDE2LjEgMjAuMTAwMUMxNy41IDE4LjcwMDEgMTkuMjEwMyAxOC4wMDAxIDIxLjIzMDggMTguMDAwMUgyNi43NjkzVjEyLjYxNTRDMjYuNzY5MyAxMS43Mzg1IDI3LjA2MjkgMTEuMDA2NSAyNy42NTAxIDEwLjQxOTNDMjguMjM3MiA5LjgzMjE3IDI4Ljk2OTMgOS41Mzg2IDI5Ljg0NjIgOS41Mzg2QzMwLjcyMzEgOS41Mzg2IDMxLjQ1NTEgOS44MzIxNyAzMi4wNDIzIDEwLjQxOTNDMzIuNjI5NCAxMS4wMDY1IDMyLjkyMyAxMS43Mzg1IDMyLjkyMyAxMi42MTU0VjE4LjAwMDFINjMuMjMwNlYxMi41Mzg1QzYzLjIzMDYgMTEuNjg3MiA2My41MTc4IDEwLjk3NDQgNjQuMDkyMSAxMC40MDAxQzY0LjY2NjQgOS44MjU3NyA2NS4zNzkyIDkuNTM4NiA2Ni4yMzA1IDkuNTM4NkM2Ny4wODE4IDkuNTM4NiA2Ny43OTQ2IDkuODI1NzcgNjguMzY4OSAxMC40MDAxQzY4Ljk0MzMgMTAuOTc0NCA2OS4yMzA1IDExLjY4NzIgNjkuMjMwNSAxMi41Mzg1VjE4LjAwMDFINzQuNzY5Qzc2Ljc4OTUgMTguMDAwMSA3OC40OTk4IDE4LjcwMDEgNzkuODk5OCAyMC4xMDAxQzgxLjI5OTggMjEuNTAwMSA4MS45OTk4IDIzLjIxMDQgODEuOTk5OCAyNS4yMzA5VjQ3LjA4NDZDODEuMDQwOCA0Ni42NjQxIDgwLjA2MTMgNDYuMzI0NCA3OS4wNjE0IDQ2LjA2NTRDNzguMDYxNCA0NS44MDY1IDc3LjA0MDkgNDUuNjAyNiA3NS45OTk5IDQ1LjQ1MzlWNDEuMjMwOUgxOS45OTk5Vjc4Ljc2OTFDMTkuOTk5OSA3OS4wNzY4IDIwLjEyODEgNzkuMzU4OSAyMC4zODQ1IDc5LjYxNTRDMjAuNjQxIDc5Ljg3MTggMjAuOTIzMSA4MCAyMS4yMzA4IDgwSDQ3LjIzODVDNDcuNTc3IDgxLjEwNzcgNDcuOTg1OSA4Mi4xNTUxIDQ4LjQ2NTQgODMuMTQyMkM0OC45NDQ5IDg0LjEyOTQgNDkuNDg5NyA4NS4wODIgNTAuMSA4NS45OTk5SDIxLjIzMDhaTTcyLjc2OTIgODkuOTk5OUM2Ny43NzQzIDg5Ljk5OTkgNjMuNTI1NiA4OC4yNDg2IDYwLjAyMzEgODQuNzQ2MUM1Ni41MjA2IDgxLjI0MzUgNTQuNzY5MyA3Ni45OTQ4IDU0Ljc2OTMgNzJDNTQuNzY5MyA2Ny4wMDUyIDU2LjUyMDYgNjIuNzU2NSA2MC4wMjMxIDU5LjI1MzlDNjMuNTI1NiA1NS43NTE0IDY3Ljc3NDMgNTQuMDAwMSA3Mi43NjkyIDU0LjAwMDFDNzcuNzY0IDU0LjAwMDEgODIuMDEyNyA1NS43NTE0IDg1LjUxNTIgNTkuMjUzOUM4OS4wMTc3IDYyLjc1NjUgOTAuNzY5IDY3LjAwNTIgOTAuNzY5IDcyQzkwLjc2OSA3Ni45OTQ4IDg5LjAxNzcgODEuMjQzNSA4NS41MTUyIDg0Ljc0NjFDODIuMDEyNyA4OC4yNDg2IDc3Ljc2NCA4OS45OTk5IDcyLjc2OTIgODkuOTk5OVpNNzQuNTM4NCA3MS4yNzY5VjYyQzc0LjUzODQgNjEuNTE3OSA3NC4zNjQgNjEuMTAyNiA3NC4wMTUzIDYwLjc1MzlDNzMuNjY2NiA2MC40MDUyIDczLjI1MTMgNjAuMjMwOCA3Mi43NjkyIDYwLjIzMDhDNzIuMjg3MSA2MC4yMzA4IDcxLjg3MTcgNjAuNDA1MiA3MS41MjMgNjAuNzUzOUM3MS4xNzQzIDYxLjEwMjYgNzEgNjEuNTE3OSA3MSA2MlY3MS4yMTU0QzcxIDcxLjY5NzUgNzEuMDg3MiA3Mi4xNTY0IDcxLjI2MTUgNzIuNTkyM0M3MS40MzU4IDczLjAyODIgNzEuNzEwMiA3My40MzMzIDcyLjA4NDYgNzMuODA3N0w3OC4xODQ2IDc5LjkwNzdDNzguNTMzMyA4MC4yNTY0IDc4Ljk0MjMgODAuNDM3MSA3OS40MTE1IDgwLjQ1Qzc5Ljg4MDcgODAuNDYyOCA4MC4zMDI1IDgwLjI4MiA4MC42NzY5IDc5LjkwNzdDODEuMDUxMiA3OS41MzMzIDgxLjIzODQgNzkuMTE3OSA4MS4yMzg0IDc4LjY2MTVDODEuMjM4NCA3OC4yMDUxIDgxLjA1MTIgNzcuNzg5NyA4MC42NzY5IDc3LjQxNTRMNzQuNTM4NCA3MS4yNzY5WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDZGl2IGNsYXNzPVxcXCJwb3NzaWItcGFnZV9fY2FyZC10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQn9GA0L7QsdC90YvQuSDQv9C10YDQuNC+0LRcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLRi9GB0Y/Rh9C4INGE0LjQu9GM0LzQvtCyINC4INGB0LXRgNC40LDQu9C+0LIg0LIg0LvRg9GH0YjQtdC8INC60LDRh9C10YHRgtCy0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtZGVzY3JcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInBvc3NpYi1wYWdlX19jYXJkLWxpbmVcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQxXFxcIiB2aWV3Qm94PVxcXCIwIDAgNDAgNDFcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ21hc2sgaWQ9XFxcIm1hc2swXzMwMl8zODU4NlxcXCIgc3R5bGU9XFxcIm1hc2stdHlwZTphbHBoYVxcXCIgbWFza1VuaXRzPVxcXCJ1c2VyU3BhY2VPblVzZVxcXCIgeD1cXFwiMFxcXCIgeT1cXFwiMFxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQxXFxcIlxcdTAwM0VcXG5cXHUwMDNDcmVjdCB5PVxcXCIwLjU5OTYwOVxcXCIgd2lkdGg9XFxcIjQwXFxcIiBoZWlnaHQ9XFxcIjQwXFxcIiBmaWxsPVxcXCIjRDlEOUQ5XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZtYXNrXFx1MDAzRVxcblxcdTAwM0NnIG1hc2s9XFxcInVybCgjbWFzazBfMzAyXzM4NTg2KVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE1LjkxNjggMjUuODQ5NkwzMC4wNDE5IDExLjcyNDZDMzAuMzc1MiAxMS4zOTEzIDMwLjc3MSAxMS4yMjQ2IDMxLjIyOTQgMTEuMjI0NkMzMS42ODc3IDExLjIyNDYgMzIuMDgzNSAxMS4zOTEzIDMyLjQxNjkgMTEuNzI0NkMzMi43NTAyIDEyLjA1NzkgMzIuOTE2OSAxMi40NTM4IDMyLjkxNjkgMTIuOTEyMUMzMi45MTY5IDEzLjM3MDQgMzIuNzUwMiAxMy43NjYzIDMyLjQxNjkgMTQuMDk5NkwxNy4wODM1IDI5LjQzMjlDMTYuNzUwMiAyOS43NjYzIDE2LjM2MTMgMjkuOTMyOSAxNS45MTY4IDI5LjkzMjlDMTUuNDcyNCAyOS45MzI5IDE1LjA4MzUgMjkuNzY2MyAxNC43NTAyIDI5LjQzMjlMNy41ODM1MiAyMi4yNjYzQzcuMjUwMTggMjEuOTMyOSA3LjA5MDQ2IDIxLjUzNzEgNy4xMDQzNSAyMS4wNzg4QzcuMTE4MjQgMjAuNjIwNCA3LjI5MTg1IDIwLjIyNDYgNy42MjUxOCAxOS44OTEzQzcuOTU4NTIgMTkuNTU3OSA4LjM1NDM1IDE5LjM5MTMgOC44MTI2OCAxOS4zOTEzQzkuMjcxMDIgMTkuMzkxMyA5LjY2Njg1IDE5LjU1NzkgMTAuMDAwMiAxOS44OTEzTDE1LjkxNjggMjUuODQ5NlpcXFwiIGZpbGw9XFxcIiNDRDFDMjlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ3NwYW5cXHUwMDNF0KLRi9GB0Y/Rh9C4INGE0LjQu9GM0LzQvtCyINC4INGB0LXRgNC40LDQu9C+0LIg0LIg0LvRg9GH0YjQtdC8INC60LDRh9C10YHRgtCy0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtbGluZVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDbWFzayBpZD1cXFwibWFzazBfMzAyXzM4NTg2XFxcIiBzdHlsZT1cXFwibWFzay10eXBlOmFscGhhXFxcIiBtYXNrVW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIiB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHk9XFxcIjAuNTk5NjA5XFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGZpbGw9XFxcIiNEOUQ5RDlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRm1hc2tcXHUwMDNFXFxuXFx1MDAzQ2cgbWFzaz1cXFwidXJsKCNtYXNrMF8zMDJfMzg1ODYpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTUuOTE2OCAyNS44NDk2TDMwLjA0MTkgMTEuNzI0NkMzMC4zNzUyIDExLjM5MTMgMzAuNzcxIDExLjIyNDYgMzEuMjI5NCAxMS4yMjQ2QzMxLjY4NzcgMTEuMjI0NiAzMi4wODM1IDExLjM5MTMgMzIuNDE2OSAxMS43MjQ2QzMyLjc1MDIgMTIuMDU3OSAzMi45MTY5IDEyLjQ1MzggMzIuOTE2OSAxMi45MTIxQzMyLjkxNjkgMTMuMzcwNCAzMi43NTAyIDEzLjc2NjMgMzIuNDE2OSAxNC4wOTk2TDE3LjA4MzUgMjkuNDMyOUMxNi43NTAyIDI5Ljc2NjMgMTYuMzYxMyAyOS45MzI5IDE1LjkxNjggMjkuOTMyOUMxNS40NzI0IDI5LjkzMjkgMTUuMDgzNSAyOS43NjYzIDE0Ljc1MDIgMjkuNDMyOUw3LjU4MzUyIDIyLjI2NjNDNy4yNTAxOCAyMS45MzI5IDcuMDkwNDYgMjEuNTM3MSA3LjEwNDM1IDIxLjA3ODhDNy4xMTgyNCAyMC42MjA0IDcuMjkxODUgMjAuMjI0NiA3LjYyNTE4IDE5Ljg5MTNDNy45NTg1MiAxOS41NTc5IDguMzU0MzUgMTkuMzkxMyA4LjgxMjY4IDE5LjM5MTNDOS4yNzEwMiAxOS4zOTEzIDkuNjY2ODUgMTkuNTU3OSAxMC4wMDAyIDE5Ljg5MTNMMTUuOTE2OCAyNS44NDk2WlxcXCIgZmlsbD1cXFwiI0NEMUMyOVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDc3BhblxcdTAwM0XQkdC10YHQv9C70LDRgtC90LDRjyDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC+0YbQtdC90LjRgtGMINGB0LXRgNCy0LjRgSDQv9C10YDQtdC0INC/0L7QutGD0L/QutC+0LlcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicG9zc2liLXBhZ2VfX2NhcmQtbGluZVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiIHZpZXdCb3g9XFxcIjAgMCA0MCA0MVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDbWFzayBpZD1cXFwibWFzazBfMzAyXzM4NTg2XFxcIiBzdHlsZT1cXFwibWFzay10eXBlOmFscGhhXFxcIiBtYXNrVW5pdHM9XFxcInVzZXJTcGFjZU9uVXNlXFxcIiB4PVxcXCIwXFxcIiB5PVxcXCIwXFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDFcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHk9XFxcIjAuNTk5NjA5XFxcIiB3aWR0aD1cXFwiNDBcXFwiIGhlaWdodD1cXFwiNDBcXFwiIGZpbGw9XFxcIiNEOUQ5RDlcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRm1hc2tcXHUwMDNFXFxuXFx1MDAzQ2cgbWFzaz1cXFwidXJsKCNtYXNrMF8zMDJfMzg1ODYpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTUuOTE2OCAyNS44NDk2TDMwLjA0MTkgMTEuNzI0NkMzMC4zNzUyIDExLjM5MTMgMzAuNzcxIDExLjIyNDYgMzEuMjI5NCAxMS4yMjQ2QzMxLjY4NzcgMTEuMjI0NiAzMi4wODM1IDExLjM5MTMgMzIuNDE2OSAxMS43MjQ2QzMyLjc1MDIgMTIuMDU3OSAzMi45MTY5IDEyLjQ1MzggMzIuOTE2OSAxMi45MTIxQzMyLjkxNjkgMTMuMzcwNCAzMi43NTAyIDEzLjc2NjMgMzIuNDE2OSAxNC4wOTk2TDE3LjA4MzUgMjkuNDMyOUMxNi43NTAyIDI5Ljc2NjMgMTYuMzYxMyAyOS45MzI5IDE1LjkxNjggMjkuOTMyOUMxNS40NzI0IDI5LjkzMjkgMTUuMDgzNSAyOS43NjYzIDE0Ljc1MDIgMjkuNDMyOUw3LjU4MzUyIDIyLjI2NjNDNy4yNTAxOCAyMS45MzI5IDcuMDkwNDYgMjEuNTM3MSA3LjEwNDM1IDIxLjA3ODhDNy4xMTgyNCAyMC42MjA0IDcuMjkxODUgMjAuMjI0NiA3LjYyNTE4IDE5Ljg5MTNDNy45NTg1MiAxOS41NTc5IDguMzU0MzUgMTkuMzkxMyA4LjgxMjY4IDE5LjM5MTNDOS4yNzEwMiAxOS4zOTEzIDkuNjY2ODUgMTkuNTU3OSAxMC4wMDAyIDE5Ljg5MTNMMTUuOTE2OCAyNS44NDk2WlxcXCIgZmlsbD1cXFwiI0NEMUMyOVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDc3BhblxcdTAwM0XQndCw0YHQu9Cw0LbQtNCw0LnRgtC10YHRjCDQsdC10YHQv9C70LDRgtC90YvQvCDQv9GA0L7RgdC80L7RgtGA0L7QvCDRgSDQutCw0YfQtdGB0YLQstC10L3QvdGL0Lwg0LrQvtC90YLQtdC90YLQvtC8INC4INC/0YDQuNGP0YLQvdGL0Lwg0LjQvdGC0LXRgNGE0LXQudGB0L7QvFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gYnVyZ2VyVG9nZ2xlKCkge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXRvZ2dsZScpXG4gICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QudG9nZ2xlKCduYXYtb3BlbicpO1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpcnN0TG9hZCgpIHtcbiAgICB2YXIgc2xpZGVySG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWhvbWUtYnRuLWpzXCIpO1xuICAgIHZhciBzbGlkZXJUdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLXR2LWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyTW92aWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1tb3ZpZS1idG4tanNcIik7XG4gICAgdmFyIHNsaWRlckFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1hcmNoLWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyRmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItZmF2LWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVySG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1ob21lLWpzXCIpO1xuICAgIHZhciBzbGlkZXJUdkJ0bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci10di1qc1wiKTtcbiAgICB2YXIgc2xpZGVyTW92aWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItY2luZW1hLWpzXCIpO1xuICAgIHZhciBzbGlkZXJBcmNoQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWFyY2l2ZS1qc1wiKTtcbiAgICB2YXIgc2xpZGVyRmF2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWZhdi1qc1wiKTtcbiAgICB2YXIgYnV0dG9ucyA9IFtzbGlkZXJIb21lQnRuLCBzbGlkZXJUdkJ0biwgc2xpZGVyTW92aWVCdG4sIHNsaWRlckFyY2hCdG4sIHNsaWRlckZhdkJ0bl07XG4gICAgdmFyIGNvbnRlbnRzID0gW3NsaWRlckhvbWVDb250ZW50LCBzbGlkZXJUdkJ0bkNvbnRlbnQsIHNsaWRlck1vdmllQ29udGVudCwgc2xpZGVyQXJjaENvbnRlbnQsIHNsaWRlckZhdkNvbnRlbnRdO1xuICAgIGlmIChzbGlkZXJIb21lQnRuKSB7XG4gICAgICAgIHNsaWRlckhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgc2xpZGVySG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgfVxuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUNsaWNrKGJ1dHRvbiwgY29udGVudHNbaW5kZXhdKTsgfSk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soYnV0dG9uLCBjb250ZW50KSB7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBpZiAoYnRuICE9PSBidXR0b24pXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb250KSB7XG4gICAgICAgICAgICBpZiAoY29udCAhPT0gY29udGVudClcbiAgICAgICAgICAgICAgICBjb250LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGlzRWxlbWVudFZpc2libGUoZWxlbWVudCkge1xuICAgICAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIHJldHVybiByZWN0LnRvcCA+PSAwICYmIHJlY3QubGVmdCA+PSAwICYmXG4gICAgICAgICAgICByZWN0LmJvdHRvbSA8PSAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICAgICAgICByZWN0LnJpZ2h0IDw9ICh3aW5kb3cuaW5uZXJXaWR0aCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjaGVja1Zpc2liaWxpdHlPblNjcm9sbCgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlci1zdGFydGVyLWpzXCIpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBpZiAoIWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2JpbGVcIikpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlcl9fYXNpZGUtdGV4dFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGNoZWNrVmlzaWJpbGl0eU9uU2Nyb2xsKTtcbiAgICB2YXIgYXV0b1N3aXRjaCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gYnV0dG9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKGJ0bikgeyByZXR1cm4gYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTsgfSk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAoYWN0aXZlSW5kZXggKyAxKSAlIGJ1dHRvbnMubGVuZ3RoO1xuICAgICAgICBoYW5kbGVDbGljayhidXR0b25zW25leHRJbmRleF0sIGNvbnRlbnRzW25leHRJbmRleF0pO1xuICAgIH0sIDIyMDApO1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1N3aXRjaCk7XG4gICAgICAgICAgICBoYW5kbGVDbGljayhidXR0b24sIGNvbnRlbnRzW2luZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiaW1wb3J0IHsgZmlyc3RMb2FkIH0gZnJvbSBcIi4vaG9tZS1wYWdlXCI7XG5pbXBvcnQgeyBidXJnZXJUb2dnbGUgfSBmcm9tIFwiLi9idXJnZXItbWVudVwiO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgIC8vINCS0YvQt9C+0LIg0YTRg9C90LrRhtC40Lggc2hvd1xuICAgIGJ1cmdlclRvZ2dsZSgpO1xuICAgIGZpcnN0TG9hZCgpO1xufSk7XG4iLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25sb2FkIiwib25yZXNpemUiXSwic291cmNlUm9vdCI6IiJ9