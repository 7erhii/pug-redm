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




pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml lang=\"en\"\u003E\u003Chead\u003E\u003Cmeta charset=\"UTF-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"\u003E\u003Cmeta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\"\u003E\u003Clink" + (" rel=\"shortcut icon\""+pug.attr("href", __webpack_require__(/*! ../assets/images/favicon.png */ "./src/assets/images/favicon.png"), true, true)+" type=\"image\u002Fpng\"") + "\u003E\u003Ctitle\u003EEmpty Project\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Cheader class=\"header\"\u003E\u003Ca class=\"header__logo\" href=\"#\"\u003E";
pug_mixins["image"]("Logo.png");
pug_html = pug_html + "\u003C\u002Fa\u003E\u003Cdiv class=\"header__menu\"\u003E\u003Cul class=\"header__list\"\u003E\u003Cli class=\"header__item header__item--active\"\u003E\u003Cspan\u003ERedmax TV\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003ERedmax TV\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EКаналы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EВозможности\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EПомощь\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EВопросы и ответы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EДекодеры\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EАкции\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EАкции\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EАкции\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EАкции и придложения\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EУслуги\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EУслуги\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОбновление декодера\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОборудование\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EПереезд\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EСотрудничество\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EО сотруднечестве\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EРеклама\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EТарифы\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EТарифы\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EТарифные планы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОтмена сделки\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EО Нас\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EО Нас\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EПро Redmax\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EОтзывы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EБлог\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EБлог\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EПоследние новости\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EПолезно знать\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EIPTV в Европе\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EТелевиденье в Европе\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EИнтернет в Европе\u003C\u002Fspan\u003E\u003Cspan\u003EОтзывы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003Cli class=\"header__item\"\u003E\u003Cspan\u003EКонтакты\u003C\u002Fspan\u003E\u003Cdiv class=\"header__dropdown\"\u003E\u003Cdiv class=\"header__dropdown-left\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EКонтакты\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EТелефон\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EE-MAIL\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EЛокация\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-right\"\u003E\u003Cdiv class=\"header__dropdown-title\"\u003E\u003Cp\u003EСоциальные сети\u003C\u002Fp\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EFacebook\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EInstagram\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__dropdown-subtitle\"\u003E\u003Cspan\u003EWhats Up\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions\"\u003E\u003Cdiv class=\"header__actions-call\"\u003E\u003Cdiv class=\"main-btn main-btn--sm\"\u003E";
pug_mixins["image"]("icon-phone.png");
pug_html = pug_html + "\u003Cspan\u003E*2186\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions-join\"\u003E\u003Cdiv class=\"main-btn main-btn--sm\"\u003E\u003Cspan\u003EВход\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"header__actions-account\"\u003E\u003Cdiv class=\"main-btn main-btn--sm\"\u003E";
pug_mixins["image"]("Icon-user.png");
pug_html = pug_html + "\u003Cspan\u003EАкаунт\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Csection class=\"hero\"\u003E\u003Cdiv class=\"hero__text\"\u003E\u003Cdiv class=\"hero__title\"\u003E\u003Cspan\u003EВаш домашний ТВ Мир\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__subtitle\"\u003E\u003Cspan\u003EБолее 200 каналов и огромная библиотека фильмов и сериалов ваш лучший источник домашнего развлечения!\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__actions\"\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan\u003EОформить подписку\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan\u003EСмотреть тарифы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__slider\" id=\"hero-slider-js\"\u003E\u003Cdiv class=\"slider\"\u003E\u003Cdiv class=\"slider__starter\" id=\"slider-hide-js\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside\"\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.5349 0.680675C27.2321 1.34825 23.1724 10.4981 23.0347 10.8253C22.9934 10.9169 22.8696 10.9955 22.7457 10.9955C22.6356 10.9955 21.8925 11.2049 21.1218 11.4536L19.6906 11.9118L16.3052 9.81737C14.4336 8.65238 12.851 7.69685 12.7822 7.68376C12.7272 7.67068 12.5483 7.8408 12.3969 8.06334L12.1216 8.46917L15.163 10.3541C15.4464 10.529 15.7062 10.6894 15.9444 10.8363C18.1128 12.1741 18.4854 12.404 18.4555 12.4712C18.4492 12.4851 18.4257 12.4921 18.3973 12.5005C18.384 12.5043 18.3698 12.5086 18.3557 12.5139C18.2731 12.5532 17.53 12.9983 16.7043 13.5219C14.0758 15.158 11.7501 17.6189 10.4152 20.1322C9.24542 22.3313 8.75 24.4387 8.75 27.096C8.75 29.2035 8.94266 30.2114 9.72709 32.3319C9.9748 33.0126 11.64 38.6151 13.4428 44.7673C15.2318 50.9195 16.7181 55.9722 16.7318 55.9984C16.771 56.0357 19.0751 55.4372 25.6395 53.6671L22.3379 42.2982C22.4379 42.3458 23.0883 42.4982 24.8891 42.7267C24.8891 42.7267 26.9901 43.0125 29.2413 42.7267C31.4924 42.441 33.1084 41.9268 33.1084 41.9268C33.1084 41.9268 34.691 43.8772 36.4525 46.0501L39.6727 50.0032L40.5122 49.3749C40.9801 49.0215 42.4802 47.922 43.8425 46.9271C45.205 45.9192 46.4022 45.0291 46.4986 44.9375L40.4968 37.5839C40.679 37.3964 41.0637 36.9921 41.1453 36.8741L41.5581 36.4029C42.3287 35.539 43.6224 33.654 44.0903 32.6985C46.5949 27.6327 46.072 22.0041 42.6865 17.4095C41.2278 15.4329 38.3516 13.1815 35.9158 12.1212C34.4708 11.506 32.5166 10.93 30.9891 10.6813C29.5853 10.4588 25.9798 10.4064 24.9614 10.5897C24.6311 10.6551 24.3696 10.642 24.3696 10.5897C24.3696 10.5243 25.3605 8.23354 26.5715 5.49774C27.7825 2.74887 28.7734 0.471238 28.7734 0.405788C28.7734 0.301069 28.1679 0 27.9614 0C27.8927 0 27.7 0.314156 27.5349 0.680675Z\" fill=\"#DF1F28\"\u002F\u003E\n\u003Cpath d=\"M47.2498 44.2983C47.2498 44.2983 46.5947 44.8459 46.4984 44.9375L40.4966 37.5839C40.6788 37.3965 41.0636 36.9921 41.1451 36.8741L44.2002 40.631C47.1452 44.27 47.2498 44.2983 47.2498 44.2983Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M27.8101 52.9616C27.8101 53.027 27.3284 53.2103 26.7504 53.3674C26.3673 53.4709 25.997 53.5707 25.6395 53.6672L22.3379 42.2982C22.4379 42.3458 23.0883 42.4982 24.8891 42.7268C24.8891 42.7268 25.567 45.16 26.3651 47.8827C27.1633 50.6054 27.8101 52.883 27.8101 52.9616Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M16.0346 31.8695L14.5339 27.0122C14.0336 25.5837 13.6334 22.5836 16.785 21.155C19.9365 19.7264 26.5398 17.0121 28.0405 16.4407C29.5412 15.8692 34.0434 14.5835 36.1445 21.155L38.5456 28.5837C39.0458 30.298 39.0259 33.9266 34.9439 34.7266C30.8619 35.5266 24.5388 36.246 21.8874 36.5057C19.0361 36.785 17.2932 35.8232 16.0346 31.8695Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M20.1152 32.2606L18.8688 28.2195C18.4533 27.0309 18.3697 25.058 20.9872 23.8694C23.6046 22.6808 28.8952 20.7734 30.1416 20.298C31.388 19.8225 35.6002 17.8791 37.3451 23.3464L38.8111 29.527C39.2266 30.9532 38.2456 33.999 35.9945 34.441C31.7924 35.2659 27.1781 35.9019 24.9761 36.1179C22.608 36.3503 21.1605 35.55 20.1152 32.2606Z\" fill=\"white\"\u002F\u003E\n\u003Cpath d=\"M23.0884 27.8694L29.3914 26.1551L31.6425 29.5837V25.5836L32.9932 25.1551L32.8431 31.0123L31.3424 31.4409L27.8156 26.5836L28.0408 27.5837L26.3899 28.0123L27.5905 32.298L26.3899 32.5838L25.0393 28.4408L23.3885 28.8694L23.0884 27.8694Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E";
pug_mixins["image"]('logo-text.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_532_1751)\"\u003E\n\u003Cpath d=\"M23.7068 22.5037L17.7378 16.5347C19.3644 14.5453 20.1642 12.0068 19.9716 9.44428C19.7791 6.88175 18.609 4.49125 16.7034 2.76724C14.7977 1.04323 12.3024 0.117612 9.73342 0.181844C7.16447 0.246075 4.71848 1.29524 2.9014 3.11233C1.08431 4.92942 0.0351378 7.37541 -0.029094 9.94436C-0.0933258 12.5133 0.832292 15.0087 2.5563 16.9143C4.28031 18.8199 6.67081 19.99 9.23334 20.1826C11.7959 20.3751 14.3344 19.5753 16.3238 17.9487L22.2928 23.9177C22.4814 24.0999 22.734 24.2007 22.9962 24.1984C23.2584 24.1961 23.5092 24.0909 23.6946 23.9055C23.88 23.7201 23.9852 23.4693 23.9875 23.2071C23.9897 22.9449 23.8889 22.6923 23.7068 22.5037ZM9.99978 18.2107C8.41753 18.2107 6.87081 17.7415 5.55522 16.8625C4.23963 15.9834 3.21425 14.734 2.60875 13.2722C2.00324 11.8104 1.84482 10.2018 2.1535 8.65C2.46218 7.09815 3.22411 5.67269 4.34293 4.55386C5.46175 3.43504 6.88721 2.67312 8.43906 2.36444C9.99091 2.05576 11.5994 2.21418 13.0612 2.81968C14.5231 3.42518 15.7725 4.45056 16.6515 5.76616C17.5306 7.08175 17.9998 8.62847 17.9998 10.2107C17.9974 12.3317 17.1538 14.3652 15.654 15.8649C14.1542 17.3647 12.1208 18.2083 9.99978 18.2107Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_532_1751\"\u003E\n\u003Crect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0 0.210022)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EПоиск\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\" id=\"slider-home-btn-js\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M23.121 9.27895L15.536 1.69295C14.5973 0.756939 13.3257 0.231323 12 0.231323C10.6744 0.231323 9.40277 0.756939 8.46401 1.69295L0.879012 9.27895C0.599438 9.55673 0.377782 9.88725 0.226895 10.2513C0.0760072 10.6154 -0.0011104 11.0058 1.20795e-05 11.3999V21.2169C1.20795e-05 22.0126 0.316083 22.7757 0.878692 23.3383C1.4413 23.9009 2.20436 24.2169 3.00001 24.2169H21C21.7957 24.2169 22.5587 23.9009 23.1213 23.3383C23.6839 22.7757 24 22.0126 24 21.2169V11.3999C24.0011 11.0058 23.924 10.6154 23.7731 10.2513C23.6222 9.88725 23.4006 9.55673 23.121 9.27895ZM15 22.2169H9.00001V18.2829C9.00001 17.4873 9.31608 16.7242 9.87869 16.1616C10.4413 15.599 11.2044 15.2829 12 15.2829C12.7957 15.2829 13.5587 15.599 14.1213 16.1616C14.6839 16.7242 15 17.4873 15 18.2829V22.2169ZM22 21.2169C22 21.4822 21.8947 21.7365 21.7071 21.9241C21.5196 22.1116 21.2652 22.2169 21 22.2169H17V18.2829C17 16.9569 16.4732 15.6851 15.5355 14.7474C14.5979 13.8097 13.3261 13.2829 12 13.2829C10.6739 13.2829 9.40216 13.8097 8.46448 14.7474C7.5268 15.6851 7.00001 16.9569 7.00001 18.2829V22.2169H3.00001C2.7348 22.2169 2.48044 22.1116 2.29291 21.9241C2.10537 21.7365 2.00001 21.4822 2.00001 21.2169V11.3999C2.00094 11.1349 2.1062 10.8809 2.29301 10.6929L9.87801 3.10995C10.4417 2.54888 11.2047 2.23389 12 2.23389C12.7953 2.23389 13.5583 2.54888 14.122 3.10995L21.707 10.6959C21.8931 10.8832 21.9983 11.136 22 11.3999V21.2169Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EГлавная\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\" id=\"slider-tv-btn-js\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19 1.20972H5C3.67441 1.2113 2.40356 1.7386 1.46622 2.67594C0.528882 3.61327 0.00158786 4.88412 0 6.20972V14.2097C0.00158786 15.5353 0.528882 16.8062 1.46622 17.7435C2.40356 18.6808 3.67441 19.2081 5 19.2097H11V21.2097H7C6.73478 21.2097 6.48043 21.3151 6.29289 21.5026C6.10536 21.6901 6 21.9445 6 22.2097C6 22.4749 6.10536 22.7293 6.29289 22.9168C6.48043 23.1044 6.73478 23.2097 7 23.2097H17C17.2652 23.2097 17.5196 23.1044 17.7071 22.9168C17.8946 22.7293 18 22.4749 18 22.2097C18 21.9445 17.8946 21.6901 17.7071 21.5026C17.5196 21.3151 17.2652 21.2097 17 21.2097H13V19.2097H19C20.3256 19.2081 21.5964 18.6808 22.5338 17.7435C23.4711 16.8062 23.9984 15.5353 24 14.2097V6.20972C23.9984 4.88412 23.4711 3.61327 22.5338 2.67594C21.5964 1.7386 20.3256 1.2113 19 1.20972ZM5 3.20972H19C19.7956 3.20972 20.5587 3.52579 21.1213 4.0884C21.6839 4.65101 22 5.41407 22 6.20972V13.2097H2V6.20972C2 5.41407 2.31607 4.65101 2.87868 4.0884C3.44129 3.52579 4.20435 3.20972 5 3.20972ZM19 17.2097H5C4.38174 17.2072 3.77937 17.0136 3.2753 16.6556C2.77123 16.2976 2.39008 15.7926 2.184 15.2097H21.816C21.6099 15.7926 21.2288 16.2976 20.7247 16.6556C20.2206 17.0136 19.6183 17.2072 19 17.2097Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EТелеканалы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\" id=\"slider-movie-btn-js\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_532_1760)\"\u003E\n\u003Cpath d=\"M19 0.210022H5C3.67441 0.21161 2.40356 0.738904 1.46622 1.67624C0.528882 2.61358 0.00158786 3.88443 0 5.21002V19.21C0.00158786 20.5356 0.528882 21.8065 1.46622 22.7438C2.40356 23.6811 3.67441 24.2084 5 24.21H19C20.3256 24.2084 21.5964 23.6811 22.5338 22.7438C23.4711 21.8065 23.9984 20.5356 24 19.21V5.21002C23.9984 3.88443 23.4711 2.61358 22.5338 1.67624C21.5964 0.738904 20.3256 0.21161 19 0.210022ZM20 11.21H22V13.21H20V11.21ZM20 9.21002V7.21002H22V9.21002H20ZM18 11.21H6V2.21002H18V11.21ZM4 13.21H2V11.21H4V13.21ZM4 9.21002H2V7.21002H4V9.21002ZM2 15.21H4V17.21H2V15.21ZM6 13.21H18V22.21H6V13.21ZM20 15.21H22V17.21H20V15.21ZM22 5.21002H20V2.39402C20.5829 2.60011 21.0879 2.98125 21.4459 3.48532C21.8039 3.98939 21.9974 4.59176 22 5.21002ZM4 2.39402V5.21002H2C2.00256 4.59176 2.19608 3.98939 2.55409 3.48532C2.91209 2.98125 3.41709 2.60011 4 2.39402ZM2 19.21H4V22.026C3.41709 21.8199 2.91209 21.4388 2.55409 20.9347C2.19608 20.4307 2.00256 19.8283 2 19.21ZM20 22.026V19.21H22C21.9974 19.8283 21.8039 20.4307 21.4459 20.9347C21.0879 21.4388 20.5829 21.8199 20 22.026Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_532_1760\"\u003E\n\u003Crect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0 0.210022)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EКинозал\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\" id=\"slider-arch-btn-js\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"23\" viewBox=\"0 0 24 23\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19 2.21021H12.472C12.3173 2.21123 12.1645 2.17703 12.025 2.11021L8.869 0.526205C8.45239 0.31875 7.9934 0.210591 7.528 0.210205H5C3.67441 0.211793 2.40356 0.739087 1.46622 1.67643C0.528882 2.61376 0.00158786 3.88461 0 5.21021V17.2102C0.00158786 18.5358 0.528882 19.8067 1.46622 20.744C2.40356 21.6813 3.67441 22.2086 5 22.2102H19C20.3256 22.2086 21.5964 21.6813 22.5338 20.744C23.4711 19.8067 23.9984 18.5358 24 17.2102V7.21021C23.9984 5.88461 23.4711 4.61376 22.5338 3.67643C21.5964 2.73909 20.3256 2.21179 19 2.21021ZM5 2.21021H7.528C7.68266 2.20918 7.83552 2.24338 7.975 2.31021L11.131 3.88921C11.5472 4.09839 12.0062 4.20827 12.472 4.21021H19C19.598 4.21118 20.1821 4.39088 20.6773 4.72622C21.1725 5.06156 21.5561 5.53725 21.779 6.09221L2 6.20421V5.21021C2 4.41456 2.31607 3.65149 2.87868 3.08889C3.44129 2.52628 4.20435 2.21021 5 2.21021ZM19 20.2102H5C4.20435 20.2102 3.44129 19.8941 2.87868 19.3315C2.31607 18.7689 2 18.0059 2 17.2102V8.20421L22 8.09121V17.2102C22 18.0059 21.6839 18.7689 21.1213 19.3315C20.5587 19.8941 19.7956 20.2102 19 20.2102Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EАрхив\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\" id=\"slider-fav-btn-js\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"22\" viewBox=\"0 0 24 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M17.5 0.126465C16.3739 0.14398 15.2724 0.458318 14.3067 1.03774C13.341 1.61715 12.5453 2.44113 12 3.42646C11.4546 2.44113 10.6589 1.61715 9.6932 1.03774C8.7275 0.458318 7.62601 0.14398 6.49996 0.126465C4.7049 0.204456 3.01366 0.989719 1.79574 2.3107C0.577818 3.63168 -0.0677922 5.38099 -4.17088e-05 7.17646C-4.17088e-05 11.7235 4.78596 16.6895 8.79996 20.0565C9.69618 20.8096 10.8293 21.2225 12 21.2225C13.1706 21.2225 14.3037 20.8096 15.2 20.0565C19.214 16.6895 24 11.7235 24 7.17646C24.0677 5.38099 23.4221 3.63168 22.2042 2.3107C20.9863 0.989719 19.295 0.204456 17.5 0.126465ZM13.915 18.5265C13.3789 18.9778 12.7007 19.2254 12 19.2254C11.2992 19.2254 10.621 18.9778 10.085 18.5265C4.94696 14.2155 1.99996 10.0795 1.99996 7.17646C1.9316 5.91118 2.36632 4.67019 3.20932 3.72416C4.05232 2.77813 5.23519 2.20381 6.49996 2.12646C7.76472 2.20381 8.9476 2.77813 9.7906 3.72416C10.6336 4.67019 11.0683 5.91118 11 7.17646C11 7.44168 11.1053 7.69603 11.2929 7.88357C11.4804 8.07111 11.7347 8.17646 12 8.17646C12.2652 8.17646 12.5195 8.07111 12.7071 7.88357C12.8946 7.69603 13 7.44168 13 7.17646C12.9316 5.91118 13.3663 4.67019 14.2093 3.72416C15.0523 2.77813 16.2352 2.20381 17.5 2.12646C18.7647 2.20381 19.9476 2.77813 20.7906 3.72416C21.6336 4.67019 22.0683 5.91118 22 7.17646C22 10.0795 19.053 14.2155 13.915 18.5225V18.5265Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EИзбранное\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__content\"\u003E\u003Cdiv class=\"slider__home\" id=\"slider-home-js\"\u003E";
pug_mixins["image"]("slider-home2.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__tv\" id=\"slider-tv-js\"\u003E";
pug_mixins["image"]("slider-tv2.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__cinema\" id=\"slider-cinema-js\"\u003E";
pug_mixins["image"]("slider-cinema2.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__arcive\" id=\"slider-arcive-js\"\u003E";
pug_mixins["image"]("slider-arcive2.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__fav\" id=\"slider-fav-js\"\u003E";
pug_mixins["image"]("slider-favotite.png");
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__starter\" id=\"slider-starter-js\"\u003E\u003Cspan\u003E\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Cdiv class=\"spinners\"\u003E\u003Cdiv class=\"spinner spinner--left\"\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image1\"\u003E";
pug_mixins["image"]('spiner-img1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image2\"\u003E";
pug_mixins["image"]('spiner-img2.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image3\"\u003E";
pug_mixins["image"]('spiner-img3.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image4\"\u003E";
pug_mixins["image"]('spiner-img4.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image5\"\u003E";
pug_mixins["image"]('spiner-img5.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image6\"\u003E";
pug_mixins["image"]('spiner-img6.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image7\"\u003E";
pug_mixins["image"]('spiner-img7.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-l-image8\"\u003E";
pug_mixins["image"]('spiner-img8.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"spinner spinner--right\"\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image1\"\u003E";
pug_mixins["image"]('spiner-img1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image2\"\u003E";
pug_mixins["image"]('spiner-img2.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image3\"\u003E";
pug_mixins["image"]('spiner-img3.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image4\"\u003E";
pug_mixins["image"]('spiner-img4.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image5\"\u003E";
pug_mixins["image"]('spiner-img5.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image6\"\u003E";
pug_mixins["image"]('spiner-img6.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image7\"\u003E";
pug_mixins["image"]('spiner-img7.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"spiner__image\" id=\"spiner-r-image8\"\u003E";
pug_mixins["image"]('spiner-img8.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/footer.pug */ "./src/views/parts/footer.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
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
    }, 1800);
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
// В файле main.ts

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuMDI1YjY4ZTE5OGUxYTc3NjM0NzAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHLElBQW5CO0FBQUEsSUFDRUMsV0FBVyxHQUFHLEVBRGhCO0FBQUEsSUFFRUMsVUFBVSxHQUFHLEVBRmY7QUFBQSxJQUdFQyxRQUFRLEdBQUcsR0FIYjtBQUFBLElBSUVDLFNBQVMsR0FBRyxHQUpkO0FBQUEsSUFLRUMsYUFBYSxHQUFHLEdBTGxCOztBQU9BLFNBQVNDLEtBQVQsQ0FBZUMsTUFBZixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCO0VBQzdCLElBQUlELEVBQUUsSUFBSSxHQUFWLEVBQWU7SUFDYixPQUFPLEVBQVA7RUFDRDs7RUFFRCxPQUFPRCxNQUFNLEdBQ1RMLFVBRFMsR0FFVEQsV0FBVyxHQUNUUyxJQUFJLENBQUNDLEdBQUwsQ0FDRUQsSUFBSSxDQUFDRSxHQUFMLENBQVNULFFBQVQsRUFBbUJLLEVBQW5CLElBQXlCUixZQUQzQixFQUVFVSxJQUFJLENBQUNFLEdBQUwsQ0FBU1IsU0FBVCxFQUFvQkssRUFBcEIsSUFBMEJKLGFBRjVCLENBSE47QUFPRDs7QUFFRCxTQUFTUSxjQUFULEdBQTBCO0VBQ3hCLElBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxVQUF6QjtFQUNBLElBQUlDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUExQjtFQUNBLElBQUlDLFFBQVEsR0FBR0wsV0FBVyxJQUFJLEdBQTlCOztFQUVBLElBQUlNLFFBQVEsQ0FBQ0MsSUFBYixFQUFtQjtJQUNqQkQsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQ0VqQixLQUFLLENBQUNhLFFBQUQsRUFBV0wsV0FBWCxFQUF3QkcsWUFBeEIsQ0FBTCxHQUE2QyxJQUQvQztFQUVEOztFQUVELElBQUlFLFFBQUosRUFBYztJQUNaQyxRQUFRLENBQUNJLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxRQUF2QztFQUNELENBRkQsTUFFTztJQUNMTixRQUFRLENBQUNJLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DRSxNQUFuQyxDQUEwQyxRQUExQztFQUNEO0FBQ0Y7O0FBRURaLE1BQU0sQ0FBQ2EsTUFBUCxHQUFnQixZQUFZO0VBQzFCZixjQUFjO0FBQ2YsQ0FGRDs7QUFJQUUsTUFBTSxDQUFDYyxRQUFQLEdBQWtCLFlBQVk7RUFDNUJoQixjQUFjO0FBQ2YsQ0FGRDs7QUFJQUEsY0FBYzs7Ozs7Ozs7Ozs7O0FDOUNkOzs7Ozs7Ozs7OztBQ0FBLFVBQVUsbUJBQU8sQ0FBQyxxRkFBMEM7O0FBRTVELDJCQUEyQixrQ0FBa0MsYUFBYTtBQUMxRTtBQUNBLDhIQUE4SCxxRUFBUSxHQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pLOzs7OztBQUtBLDhVQUE4VSxtQkFBTyxDQUFDLHFFQUE4QjtBQUNwWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlIQUFpSCxvRkFBa0MscUZBQXFGO0FBQ3hPOzs7Ozs7Ozs7O0FDN0RBLFVBQVUsbUJBQU8sQ0FBQyx3RkFBNkM7O0FBRS9ELDJCQUEyQixrQ0FBa0MsY0FBYztBQUMzRTs7Ozs7Ozs7Ozs7QUNIYTs7QUFFYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFlBQVksUUFBUTtBQUNwQjtBQUNBOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsY0FBYztBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGlEQUFpRCxhQUFhO0FBQzlEO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtEQUFrRDtBQUM3RCxXQUFXLGlCQUFpQjtBQUM1QixZQUFZO0FBQ1o7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtDQUFrQztBQUM3QyxZQUFZO0FBQ1o7O0FBRUEsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxTQUFTO0FBQ3BCLFlBQVk7QUFDWjtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkNBQTZDLGlCQUFpQjtBQUM5RDtBQUNBLCtCQUErQixHQUFHO0FBQ2xDLDhCQUE4QixHQUFHO0FBQ2pDLDZCQUE2QixHQUFHO0FBQ2hDLDZCQUE2QixHQUFHO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQjtBQUNBOztBQUVBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxREFBMEI7QUFDM0MsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDN1BPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELDhDQUE4QztBQUNyRyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZELDBDQUEwQztBQUN2RztBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7OztBQ3BFQTtBQUN3QztBQUN4QztBQUNBO0FBQ0EsSUFBSSxxREFBUztBQUNiLENBQUM7Ozs7Ozs7Ozs7O0FDTEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvcGFydHMvZm9vdGVyLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9ob21lLXBhZ2UudHMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9jb3JlL21haW4udHMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9hc3NldHMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy9pZ25vcmVkfC9Vc2Vycy83ZXJoaXkvRGVza3RvcC9XRUIvcHJvamVjdHMvUmVkbWF4ZXUvcHVnL25vZGVfbW9kdWxlcy9wdWctcnVudGltZXxmcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBkZWZhdWx0V2lkdGggPSAxNDQwLFxuICBkZWZhdWx0Rm9udCA9IDE2LFxuICBtb2JpbGVGb250ID0gMTYsXG4gIG1pbldpZHRoID0gNzY4LFxuICBtaW5IZWlnaHQgPSA2MDAsXG4gIGRlZmF1bHRIZWlnaHQgPSA5MDA7XG5cbmZ1bmN0aW9uIGZTaXplKGRldmljZSwgdlcsIHZIKSB7XG4gIGlmICh2VyA8PSAzNzQpIHtcbiAgICByZXR1cm4gMTM7XG4gIH1cblxuICByZXR1cm4gZGV2aWNlXG4gICAgPyBtb2JpbGVGb250XG4gICAgOiBkZWZhdWx0Rm9udCAqXG4gICAgICAgIE1hdGgubWluKFxuICAgICAgICAgIE1hdGgubWF4KG1pbldpZHRoLCB2VykgLyBkZWZhdWx0V2lkdGgsXG4gICAgICAgICAgTWF0aC5tYXgobWluSGVpZ2h0LCB2SCkgLyBkZWZhdWx0SGVpZ2h0XG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmaWVyRGV2aWNlKCkge1xuICB2YXIgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIGlzTW9iaWxlID0gd2luZG93V2lkdGggPD0gNzY3O1xuXG4gIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5mb250U2l6ZSA9XG4gICAgICBmU2l6ZShpc01vYmlsZSwgd2luZG93V2lkdGgsIHdpbmRvd0hlaWdodCkgKyBcInB4XCI7XG4gIH1cblxuICBpZiAoaXNNb2JpbGUpIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcIm1vYmlsZVwiKTtcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcIm1vYmlsZVwiKTtcbiAgfVxufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxud2luZG93Lm9ucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICBtb2RpZmllckRldmljZSgpO1xufTtcblxubW9kaWZpZXJEZXZpY2UoKTtcblxuXG5cblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7cHVnX21peGluc1tcImltYWdlXCJdID0gcHVnX2ludGVycCA9IGZ1bmN0aW9uKGZpbGUpe1xudmFyIGJsb2NrID0gKHRoaXMgJiYgdGhpcy5ibG9jayksIGF0dHJpYnV0ZXMgPSAodGhpcyAmJiB0aGlzLmF0dHJpYnV0ZXMpIHx8IHt9O1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ2ltZ1wiICsgKHB1Zy5hdHRyKFwiY2xhc3NcIiwgcHVnLmNsYXNzZXMoW2F0dHJpYnV0ZXMuY2xhc3NdLCBbZmFsc2VdKSwgZmFsc2UsIHRydWUpK3B1Zy5hdHRyKFwic3JjXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvJHtmaWxlfWApLCB0cnVlLCB0cnVlKStcIiBhbHQ9XFxcIlxcXCJcIikgKyBcIlxcdTAwM0VcIjtcbn07XG5cblxuXG5cbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0MhRE9DVFlQRSBodG1sXFx1MDAzRVxcdTAwM0NodG1sIGxhbmc9XFxcImVuXFxcIlxcdTAwM0VcXHUwMDNDaGVhZFxcdTAwM0VcXHUwMDNDbWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIGh0dHAtZXF1aXY9XFxcIlgtVUEtQ29tcGF0aWJsZVxcXCIgY29udGVudD1cXFwiaWU9ZWRnZVxcXCJcXHUwMDNFXFx1MDAzQ2xpbmtcIiArIChcIiByZWw9XFxcInNob3J0Y3V0IGljb25cXFwiXCIrcHVnLmF0dHIoXCJocmVmXCIsIHJlcXVpcmUoYC4uL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdgKSwgdHJ1ZSwgdHJ1ZSkrXCIgdHlwZT1cXFwiaW1hZ2VcXHUwMDJGcG5nXFxcIlwiKSArIFwiXFx1MDAzRVxcdTAwM0N0aXRsZVxcdTAwM0VFbXB0eSBQcm9qZWN0XFx1MDAzQ1xcdTAwMkZ0aXRsZVxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRcXHUwMDNFXFx1MDAzQ2JvZHlcXHUwMDNFXFx1MDAzQ2hlYWRlciBjbGFzcz1cXFwiaGVhZGVyXFxcIlxcdTAwM0VcXHUwMDNDYSBjbGFzcz1cXFwiaGVhZGVyX19sb2dvXFxcIiBocmVmPVxcXCIjXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcIkxvZ28ucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZhXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fbWVudVxcXCJcXHUwMDNFXFx1MDAzQ3VsIGNsYXNzPVxcXCJoZWFkZXJfX2xpc3RcXFwiXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtIGhlYWRlcl9faXRlbS0tYWN0aXZlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VSZWRtYXggVFZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0VSZWRtYXggVFZcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JrQsNC90LDQu9GLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCS0L7Qt9C80L7QttC90L7RgdGC0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0J/QvtC80L7RidGMXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCS0L7Qv9GA0L7RgdGLINC4INC+0YLQstC10YLRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQlNC10LrQvtC00LXRgNGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCQ0LrRhtC40LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCQ0LrRhtC40LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutGG0LjQuCDQuCDQv9GA0LjQtNC70L7QttC10L3QuNGPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCj0YHQu9GD0LPQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCj0YHQu9GD0LPQuFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntCx0L3QvtCy0LvQtdC90LjQtSDQtNC10LrQvtC00LXRgNCwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCe0LHQvtGA0YPQtNC+0LLQsNC90LjQtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C10YDQtdC10LfQtFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXJpZ2h0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQodC+0YLRgNGD0LTQvdC40YfQtdGB0YLQstC+XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCeINGB0L7RgtGA0YPQtNC90LXRh9C10YHRgtCy0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KDQtdC60LvQsNC80LBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQsNGA0LjRhNGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0KLQsNGA0LjRhNGLXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LDRgNC40YTQvdGL0LUg0L/Qu9Cw0L3Ri1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LzQtdC90LAg0YHQtNC10LvQutC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCeINCd0LDRgVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCeINCd0LDRgVxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9GA0L4gUmVkbWF4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCe0YLQt9GL0LLRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkdC70L7Qs1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCR0LvQvtCzXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCf0L7RgdC70LXQtNC90LjQtSDQvdC+0LLQvtGB0YLQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXJpZ2h0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQn9C+0LvQtdC30L3QviDQt9C90LDRgtGMXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUlQVFYg0LIg0JXQstGA0L7Qv9C1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LXQu9C10LLQuNC00LXQvdGM0LUg0LIg0JXQstGA0L7Qv9C1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCY0L3RgtC10YDQvdC10YIg0LIg0JXQstGA0L7Qv9C1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCe0YLQt9GL0LLRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtC+0L3RgtCw0LrRgtGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0JrQvtC90YLQsNC60YLRi1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotC10LvQtdGE0L7QvVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VFLU1BSUxcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JvQvtC60LDRhtC40Y9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0KHQvtGG0LjQsNC70YzQvdGL0LUg0YHQtdGC0LhcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRmFjZWJvb2tcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFSW5zdGFncmFtXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVdoYXRzIFVwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZ1bFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FjdGlvbnNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYWN0aW9ucy1jYWxsXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluLWJ0biBtYWluLWJ0bi0tc21cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwiaWNvbi1waG9uZS5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc3BhblxcdTAwM0UqMjE4NlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FjdGlvbnMtam9pblxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXNtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktGF0L7QtFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FjdGlvbnMtYWNjb3VudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXNtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcIkljb24tdXNlci5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc3BhblxcdTAwM0XQkNC60LDRg9C90YJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkZXJcXHUwMDNFXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcImhlcm9cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX3RleHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX3RpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktCw0Ygg0LTQvtC80LDRiNC90LjQuSDQotCSINCc0LjRgFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JHQvtC70LXQtSAyMDAg0LrQsNC90LDQu9C+0LIg0Lgg0L7Qs9GA0L7QvNC90LDRjyDQsdC40LHQu9C40L7RgtC10LrQsCDRhNC40LvRjNC80L7QsiDQuCDRgdC10YDQuNCw0LvQvtCyINCy0LDRiCDQu9GD0YfRiNC40Lkg0LjRgdGC0L7Rh9C90LjQuiDQtNC+0LzQsNGI0L3QtdCz0L4g0YDQsNC30LLQu9C10YfQtdC90LjRjyFcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYWN0aW9uc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCe0YTQvtGA0LzQuNGC0Ywg0L/QvtC00L/QuNGB0LrRg1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluLWJ0blxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KHQvNC+0YLRgNC10YLRjCDRgtCw0YDQuNGE0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fc2xpZGVyXFxcIiBpZD1cXFwiaGVyby1zbGlkZXItanNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19zdGFydGVyXFxcIiBpZD1cXFwic2xpZGVyLWhpZGUtanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNTZcXFwiIGhlaWdodD1cXFwiNTZcXFwiIHZpZXdCb3g9XFxcIjAgMCA1NiA1NlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTI3LjUzNDkgMC42ODA2NzVDMjcuMjMyMSAxLjM0ODI1IDIzLjE3MjQgMTAuNDk4MSAyMy4wMzQ3IDEwLjgyNTNDMjIuOTkzNCAxMC45MTY5IDIyLjg2OTYgMTAuOTk1NSAyMi43NDU3IDEwLjk5NTVDMjIuNjM1NiAxMC45OTU1IDIxLjg5MjUgMTEuMjA0OSAyMS4xMjE4IDExLjQ1MzZMMTkuNjkwNiAxMS45MTE4TDE2LjMwNTIgOS44MTczN0MxNC40MzM2IDguNjUyMzggMTIuODUxIDcuNjk2ODUgMTIuNzgyMiA3LjY4Mzc2QzEyLjcyNzIgNy42NzA2OCAxMi41NDgzIDcuODQwOCAxMi4zOTY5IDguMDYzMzRMMTIuMTIxNiA4LjQ2OTE3TDE1LjE2MyAxMC4zNTQxQzE1LjQ0NjQgMTAuNTI5IDE1LjcwNjIgMTAuNjg5NCAxNS45NDQ0IDEwLjgzNjNDMTguMTEyOCAxMi4xNzQxIDE4LjQ4NTQgMTIuNDA0IDE4LjQ1NTUgMTIuNDcxMkMxOC40NDkyIDEyLjQ4NTEgMTguNDI1NyAxMi40OTIxIDE4LjM5NzMgMTIuNTAwNUMxOC4zODQgMTIuNTA0MyAxOC4zNjk4IDEyLjUwODYgMTguMzU1NyAxMi41MTM5QzE4LjI3MzEgMTIuNTUzMiAxNy41MyAxMi45OTgzIDE2LjcwNDMgMTMuNTIxOUMxNC4wNzU4IDE1LjE1OCAxMS43NTAxIDE3LjYxODkgMTAuNDE1MiAyMC4xMzIyQzkuMjQ1NDIgMjIuMzMxMyA4Ljc1IDI0LjQzODcgOC43NSAyNy4wOTZDOC43NSAyOS4yMDM1IDguOTQyNjYgMzAuMjExNCA5LjcyNzA5IDMyLjMzMTlDOS45NzQ4IDMzLjAxMjYgMTEuNjQgMzguNjE1MSAxMy40NDI4IDQ0Ljc2NzNDMTUuMjMxOCA1MC45MTk1IDE2LjcxODEgNTUuOTcyMiAxNi43MzE4IDU1Ljk5ODRDMTYuNzcxIDU2LjAzNTcgMTkuMDc1MSA1NS40MzcyIDI1LjYzOTUgNTMuNjY3MUwyMi4zMzc5IDQyLjI5ODJDMjIuNDM3OSA0Mi4zNDU4IDIzLjA4ODMgNDIuNDk4MiAyNC44ODkxIDQyLjcyNjdDMjQuODg5MSA0Mi43MjY3IDI2Ljk5MDEgNDMuMDEyNSAyOS4yNDEzIDQyLjcyNjdDMzEuNDkyNCA0Mi40NDEgMzMuMTA4NCA0MS45MjY4IDMzLjEwODQgNDEuOTI2OEMzMy4xMDg0IDQxLjkyNjggMzQuNjkxIDQzLjg3NzIgMzYuNDUyNSA0Ni4wNTAxTDM5LjY3MjcgNTAuMDAzMkw0MC41MTIyIDQ5LjM3NDlDNDAuOTgwMSA0OS4wMjE1IDQyLjQ4MDIgNDcuOTIyIDQzLjg0MjUgNDYuOTI3MUM0NS4yMDUgNDUuOTE5MiA0Ni40MDIyIDQ1LjAyOTEgNDYuNDk4NiA0NC45Mzc1TDQwLjQ5NjggMzcuNTgzOUM0MC42NzkgMzcuMzk2NCA0MS4wNjM3IDM2Ljk5MjEgNDEuMTQ1MyAzNi44NzQxTDQxLjU1ODEgMzYuNDAyOUM0Mi4zMjg3IDM1LjUzOSA0My42MjI0IDMzLjY1NCA0NC4wOTAzIDMyLjY5ODVDNDYuNTk0OSAyNy42MzI3IDQ2LjA3MiAyMi4wMDQxIDQyLjY4NjUgMTcuNDA5NUM0MS4yMjc4IDE1LjQzMjkgMzguMzUxNiAxMy4xODE1IDM1LjkxNTggMTIuMTIxMkMzNC40NzA4IDExLjUwNiAzMi41MTY2IDEwLjkzIDMwLjk4OTEgMTAuNjgxM0MyOS41ODUzIDEwLjQ1ODggMjUuOTc5OCAxMC40MDY0IDI0Ljk2MTQgMTAuNTg5N0MyNC42MzExIDEwLjY1NTEgMjQuMzY5NiAxMC42NDIgMjQuMzY5NiAxMC41ODk3QzI0LjM2OTYgMTAuNTI0MyAyNS4zNjA1IDguMjMzNTQgMjYuNTcxNSA1LjQ5Nzc0QzI3Ljc4MjUgMi43NDg4NyAyOC43NzM0IDAuNDcxMjM4IDI4Ljc3MzQgMC40MDU3ODhDMjguNzczNCAwLjMwMTA2OSAyOC4xNjc5IDAgMjcuOTYxNCAwQzI3Ljg5MjcgMCAyNy43IDAuMzE0MTU2IDI3LjUzNDkgMC42ODA2NzVaXFxcIiBmaWxsPVxcXCIjREYxRjI4XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTQ3LjI0OTggNDQuMjk4M0M0Ny4yNDk4IDQ0LjI5ODMgNDYuNTk0NyA0NC44NDU5IDQ2LjQ5ODQgNDQuOTM3NUw0MC40OTY2IDM3LjU4MzlDNDAuNjc4OCAzNy4zOTY1IDQxLjA2MzYgMzYuOTkyMSA0MS4xNDUxIDM2Ljg3NDFMNDQuMjAwMiA0MC42MzFDNDcuMTQ1MiA0NC4yNyA0Ny4yNDk4IDQ0LjI5ODMgNDcuMjQ5OCA0NC4yOTgzWlxcXCIgZmlsbD1cXFwiIzBBODRGRlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yNy44MTAxIDUyLjk2MTZDMjcuODEwMSA1My4wMjcgMjcuMzI4NCA1My4yMTAzIDI2Ljc1MDQgNTMuMzY3NEMyNi4zNjczIDUzLjQ3MDkgMjUuOTk3IDUzLjU3MDcgMjUuNjM5NSA1My42NjcyTDIyLjMzNzkgNDIuMjk4MkMyMi40Mzc5IDQyLjM0NTggMjMuMDg4MyA0Mi40OTgyIDI0Ljg4OTEgNDIuNzI2OEMyNC44ODkxIDQyLjcyNjggMjUuNTY3IDQ1LjE2IDI2LjM2NTEgNDcuODgyN0MyNy4xNjMzIDUwLjYwNTQgMjcuODEwMSA1Mi44ODMgMjcuODEwMSA1Mi45NjE2WlxcXCIgZmlsbD1cXFwiIzBBODRGRlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNi4wMzQ2IDMxLjg2OTVMMTQuNTMzOSAyNy4wMTIyQzE0LjAzMzYgMjUuNTgzNyAxMy42MzM0IDIyLjU4MzYgMTYuNzg1IDIxLjE1NUMxOS45MzY1IDE5LjcyNjQgMjYuNTM5OCAxNy4wMTIxIDI4LjA0MDUgMTYuNDQwN0MyOS41NDEyIDE1Ljg2OTIgMzQuMDQzNCAxNC41ODM1IDM2LjE0NDUgMjEuMTU1TDM4LjU0NTYgMjguNTgzN0MzOS4wNDU4IDMwLjI5OCAzOS4wMjU5IDMzLjkyNjYgMzQuOTQzOSAzNC43MjY2QzMwLjg2MTkgMzUuNTI2NiAyNC41Mzg4IDM2LjI0NiAyMS44ODc0IDM2LjUwNTdDMTkuMDM2MSAzNi43ODUgMTcuMjkzMiAzNS44MjMyIDE2LjAzNDYgMzEuODY5NVpcXFwiIGZpbGw9XFxcIiMwQTg0RkZcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMjAuMTE1MiAzMi4yNjA2TDE4Ljg2ODggMjguMjE5NUMxOC40NTMzIDI3LjAzMDkgMTguMzY5NyAyNS4wNTggMjAuOTg3MiAyMy44Njk0QzIzLjYwNDYgMjIuNjgwOCAyOC44OTUyIDIwLjc3MzQgMzAuMTQxNiAyMC4yOThDMzEuMzg4IDE5LjgyMjUgMzUuNjAwMiAxNy44NzkxIDM3LjM0NTEgMjMuMzQ2NEwzOC44MTExIDI5LjUyN0MzOS4yMjY2IDMwLjk1MzIgMzguMjQ1NiAzMy45OTkgMzUuOTk0NSAzNC40NDFDMzEuNzkyNCAzNS4yNjU5IDI3LjE3ODEgMzUuOTAxOSAyNC45NzYxIDM2LjExNzlDMjIuNjA4IDM2LjM1MDMgMjEuMTYwNSAzNS41NSAyMC4xMTUyIDMyLjI2MDZaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMy4wODg0IDI3Ljg2OTRMMjkuMzkxNCAyNi4xNTUxTDMxLjY0MjUgMjkuNTgzN1YyNS41ODM2TDMyLjk5MzIgMjUuMTU1MUwzMi44NDMxIDMxLjAxMjNMMzEuMzQyNCAzMS40NDA5TDI3LjgxNTYgMjYuNTgzNkwyOC4wNDA4IDI3LjU4MzdMMjYuMzg5OSAyOC4wMTIzTDI3LjU5MDUgMzIuMjk4TDI2LjM4OTkgMzIuNTgzOEwyNS4wMzkzIDI4LjQ0MDhMMjMuMzg4NSAyOC44Njk0TDIzLjA4ODQgMjcuODY5NFpcXFwiIGZpbGw9XFxcIiMwQTg0RkZcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdsb2dvLXRleHQucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfNTMyXzE3NTEpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMjMuNzA2OCAyMi41MDM3TDE3LjczNzggMTYuNTM0N0MxOS4zNjQ0IDE0LjU0NTMgMjAuMTY0MiAxMi4wMDY4IDE5Ljk3MTYgOS40NDQyOEMxOS43NzkxIDYuODgxNzUgMTguNjA5IDQuNDkxMjUgMTYuNzAzNCAyLjc2NzI0QzE0Ljc5NzcgMS4wNDMyMyAxMi4zMDI0IDAuMTE3NjEyIDkuNzMzNDIgMC4xODE4NDRDNy4xNjQ0NyAwLjI0NjA3NSA0LjcxODQ4IDEuMjk1MjQgMi45MDE0IDMuMTEyMzNDMS4wODQzMSA0LjkyOTQyIDAuMDM1MTM3OCA3LjM3NTQxIC0wLjAyOTA5NCA5Ljk0NDM2Qy0wLjA5MzMyNTggMTIuNTEzMyAwLjgzMjI5MiAxNS4wMDg3IDIuNTU2MyAxNi45MTQzQzQuMjgwMzEgMTguODE5OSA2LjY3MDgxIDE5Ljk5IDkuMjMzMzQgMjAuMTgyNkMxMS43OTU5IDIwLjM3NTEgMTQuMzM0NCAxOS41NzUzIDE2LjMyMzggMTcuOTQ4N0wyMi4yOTI4IDIzLjkxNzdDMjIuNDgxNCAyNC4wOTk5IDIyLjczNCAyNC4yMDA3IDIyLjk5NjIgMjQuMTk4NEMyMy4yNTg0IDI0LjE5NjEgMjMuNTA5MiAyNC4wOTA5IDIzLjY5NDYgMjMuOTA1NUMyMy44OCAyMy43MjAxIDIzLjk4NTIgMjMuNDY5MyAyMy45ODc1IDIzLjIwNzFDMjMuOTg5NyAyMi45NDQ5IDIzLjg4ODkgMjIuNjkyMyAyMy43MDY4IDIyLjUwMzdaTTkuOTk5NzggMTguMjEwN0M4LjQxNzUzIDE4LjIxMDcgNi44NzA4MSAxNy43NDE1IDUuNTU1MjIgMTYuODYyNUM0LjIzOTYzIDE1Ljk4MzQgMy4yMTQyNSAxNC43MzQgMi42MDg3NSAxMy4yNzIyQzIuMDAzMjQgMTEuODEwNCAxLjg0NDgyIDEwLjIwMTggMi4xNTM1IDguNjVDMi40NjIxOCA3LjA5ODE1IDMuMjI0MTEgNS42NzI2OSA0LjM0MjkzIDQuNTUzODZDNS40NjE3NSAzLjQzNTA0IDYuODg3MjEgMi42NzMxMiA4LjQzOTA2IDIuMzY0NDRDOS45OTA5MSAyLjA1NTc2IDExLjU5OTQgMi4yMTQxOCAxMy4wNjEyIDIuODE5NjhDMTQuNTIzMSAzLjQyNTE4IDE1Ljc3MjUgNC40NTA1NiAxNi42NTE1IDUuNzY2MTZDMTcuNTMwNiA3LjA4MTc1IDE3Ljk5OTggOC42Mjg0NyAxNy45OTk4IDEwLjIxMDdDMTcuOTk3NCAxMi4zMzE3IDE3LjE1MzggMTQuMzY1MiAxNS42NTQgMTUuODY0OUMxNC4xNTQyIDE3LjM2NDcgMTIuMTIwOCAxOC4yMDgzIDkuOTk5NzggMTguMjEwN1pcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFx1MDAzQ2NsaXBQYXRoIGlkPVxcXCJjbGlwMF81MzJfMTc1MVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3JlY3Qgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCAwLjIxMDAyMilcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmNsaXBQYXRoXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCf0L7QuNGB0LpcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIiBpZD1cXFwic2xpZGVyLWhvbWUtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIzLjEyMSA5LjI3ODk1TDE1LjUzNiAxLjY5Mjk1QzE0LjU5NzMgMC43NTY5MzkgMTMuMzI1NyAwLjIzMTMyMyAxMiAwLjIzMTMyM0MxMC42NzQ0IDAuMjMxMzIzIDkuNDAyNzcgMC43NTY5MzkgOC40NjQwMSAxLjY5Mjk1TDAuODc5MDEyIDkuMjc4OTVDMC41OTk0MzggOS41NTY3MyAwLjM3Nzc4MiA5Ljg4NzI1IDAuMjI2ODk1IDEwLjI1MTNDMC4wNzYwMDcyIDEwLjYxNTQgLTAuMDAxMTEwNCAxMS4wMDU4IDEuMjA3OTVlLTA1IDExLjM5OTlWMjEuMjE2OUMxLjIwNzk1ZS0wNSAyMi4wMTI2IDAuMzE2MDgzIDIyLjc3NTcgMC44Nzg2OTIgMjMuMzM4M0MxLjQ0MTMgMjMuOTAwOSAyLjIwNDM2IDI0LjIxNjkgMy4wMDAwMSAyNC4yMTY5SDIxQzIxLjc5NTcgMjQuMjE2OSAyMi41NTg3IDIzLjkwMDkgMjMuMTIxMyAyMy4zMzgzQzIzLjY4MzkgMjIuNzc1NyAyNCAyMi4wMTI2IDI0IDIxLjIxNjlWMTEuMzk5OUMyNC4wMDExIDExLjAwNTggMjMuOTI0IDEwLjYxNTQgMjMuNzczMSAxMC4yNTEzQzIzLjYyMjIgOS44ODcyNSAyMy40MDA2IDkuNTU2NzMgMjMuMTIxIDkuMjc4OTVaTTE1IDIyLjIxNjlIOS4wMDAwMVYxOC4yODI5QzkuMDAwMDEgMTcuNDg3MyA5LjMxNjA4IDE2LjcyNDIgOS44Nzg2OSAxNi4xNjE2QzEwLjQ0MTMgMTUuNTk5IDExLjIwNDQgMTUuMjgyOSAxMiAxNS4yODI5QzEyLjc5NTcgMTUuMjgyOSAxMy41NTg3IDE1LjU5OSAxNC4xMjEzIDE2LjE2MTZDMTQuNjgzOSAxNi43MjQyIDE1IDE3LjQ4NzMgMTUgMTguMjgyOVYyMi4yMTY5Wk0yMiAyMS4yMTY5QzIyIDIxLjQ4MjIgMjEuODk0NyAyMS43MzY1IDIxLjcwNzEgMjEuOTI0MUMyMS41MTk2IDIyLjExMTYgMjEuMjY1MiAyMi4yMTY5IDIxIDIyLjIxNjlIMTdWMTguMjgyOUMxNyAxNi45NTY5IDE2LjQ3MzIgMTUuNjg1MSAxNS41MzU1IDE0Ljc0NzRDMTQuNTk3OSAxMy44MDk3IDEzLjMyNjEgMTMuMjgyOSAxMiAxMy4yODI5QzEwLjY3MzkgMTMuMjgyOSA5LjQwMjE2IDEzLjgwOTcgOC40NjQ0OCAxNC43NDc0QzcuNTI2OCAxNS42ODUxIDcuMDAwMDEgMTYuOTU2OSA3LjAwMDAxIDE4LjI4MjlWMjIuMjE2OUgzLjAwMDAxQzIuNzM0OCAyMi4yMTY5IDIuNDgwNDQgMjIuMTExNiAyLjI5MjkxIDIxLjkyNDFDMi4xMDUzNyAyMS43MzY1IDIuMDAwMDEgMjEuNDgyMiAyLjAwMDAxIDIxLjIxNjlWMTEuMzk5OUMyLjAwMDk0IDExLjEzNDkgMi4xMDYyIDEwLjg4MDkgMi4yOTMwMSAxMC42OTI5TDkuODc4MDEgMy4xMDk5NUMxMC40NDE3IDIuNTQ4ODggMTEuMjA0NyAyLjIzMzg5IDEyIDIuMjMzODlDMTIuNzk1MyAyLjIzMzg5IDEzLjU1ODMgMi41NDg4OCAxNC4xMjIgMy4xMDk5NUwyMS43MDcgMTAuNjk1OUMyMS44OTMxIDEwLjg4MzIgMjEuOTk4MyAxMS4xMzYgMjIgMTEuMzk5OVYyMS4yMTY5WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JPQu9Cw0LLQvdCw0Y9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIiBpZD1cXFwic2xpZGVyLXR2LWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pY29uXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI1XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xOSAxLjIwOTcySDVDMy42NzQ0MSAxLjIxMTMgMi40MDM1NiAxLjczODYgMS40NjYyMiAyLjY3NTk0QzAuNTI4ODgyIDMuNjEzMjcgMC4wMDE1ODc4NiA0Ljg4NDEyIDAgNi4yMDk3MlYxNC4yMDk3QzAuMDAxNTg3ODYgMTUuNTM1MyAwLjUyODg4MiAxNi44MDYyIDEuNDY2MjIgMTcuNzQzNUMyLjQwMzU2IDE4LjY4MDggMy42NzQ0MSAxOS4yMDgxIDUgMTkuMjA5N0gxMVYyMS4yMDk3SDdDNi43MzQ3OCAyMS4yMDk3IDYuNDgwNDMgMjEuMzE1MSA2LjI5Mjg5IDIxLjUwMjZDNi4xMDUzNiAyMS42OTAxIDYgMjEuOTQ0NSA2IDIyLjIwOTdDNiAyMi40NzQ5IDYuMTA1MzYgMjIuNzI5MyA2LjI5Mjg5IDIyLjkxNjhDNi40ODA0MyAyMy4xMDQ0IDYuNzM0NzggMjMuMjA5NyA3IDIzLjIwOTdIMTdDMTcuMjY1MiAyMy4yMDk3IDE3LjUxOTYgMjMuMTA0NCAxNy43MDcxIDIyLjkxNjhDMTcuODk0NiAyMi43MjkzIDE4IDIyLjQ3NDkgMTggMjIuMjA5N0MxOCAyMS45NDQ1IDE3Ljg5NDYgMjEuNjkwMSAxNy43MDcxIDIxLjUwMjZDMTcuNTE5NiAyMS4zMTUxIDE3LjI2NTIgMjEuMjA5NyAxNyAyMS4yMDk3SDEzVjE5LjIwOTdIMTlDMjAuMzI1NiAxOS4yMDgxIDIxLjU5NjQgMTguNjgwOCAyMi41MzM4IDE3Ljc0MzVDMjMuNDcxMSAxNi44MDYyIDIzLjk5ODQgMTUuNTM1MyAyNCAxNC4yMDk3VjYuMjA5NzJDMjMuOTk4NCA0Ljg4NDEyIDIzLjQ3MTEgMy42MTMyNyAyMi41MzM4IDIuNjc1OTRDMjEuNTk2NCAxLjczODYgMjAuMzI1NiAxLjIxMTMgMTkgMS4yMDk3MlpNNSAzLjIwOTcySDE5QzE5Ljc5NTYgMy4yMDk3MiAyMC41NTg3IDMuNTI1NzkgMjEuMTIxMyA0LjA4ODRDMjEuNjgzOSA0LjY1MTAxIDIyIDUuNDE0MDcgMjIgNi4yMDk3MlYxMy4yMDk3SDJWNi4yMDk3MkMyIDUuNDE0MDcgMi4zMTYwNyA0LjY1MTAxIDIuODc4NjggNC4wODg0QzMuNDQxMjkgMy41MjU3OSA0LjIwNDM1IDMuMjA5NzIgNSAzLjIwOTcyWk0xOSAxNy4yMDk3SDVDNC4zODE3NCAxNy4yMDcyIDMuNzc5MzcgMTcuMDEzNiAzLjI3NTMgMTYuNjU1NkMyLjc3MTIzIDE2LjI5NzYgMi4zOTAwOCAxNS43OTI2IDIuMTg0IDE1LjIwOTdIMjEuODE2QzIxLjYwOTkgMTUuNzkyNiAyMS4yMjg4IDE2LjI5NzYgMjAuNzI0NyAxNi42NTU2QzIwLjIyMDYgMTcuMDEzNiAxOS42MTgzIDE3LjIwNzIgMTkgMTcuMjA5N1pcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LXQu9C10LrQsNC90LDQu9GLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaXRlbVxcXCIgaWQ9XFxcInNsaWRlci1tb3ZpZS1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfNTMyXzE3NjApXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTkgMC4yMTAwMjJINUMzLjY3NDQxIDAuMjExNjEgMi40MDM1NiAwLjczODkwNCAxLjQ2NjIyIDEuNjc2MjRDMC41Mjg4ODIgMi42MTM1OCAwLjAwMTU4Nzg2IDMuODg0NDMgMCA1LjIxMDAyVjE5LjIxQzAuMDAxNTg3ODYgMjAuNTM1NiAwLjUyODg4MiAyMS44MDY1IDEuNDY2MjIgMjIuNzQzOEMyLjQwMzU2IDIzLjY4MTEgMy42NzQ0MSAyNC4yMDg0IDUgMjQuMjFIMTlDMjAuMzI1NiAyNC4yMDg0IDIxLjU5NjQgMjMuNjgxMSAyMi41MzM4IDIyLjc0MzhDMjMuNDcxMSAyMS44MDY1IDIzLjk5ODQgMjAuNTM1NiAyNCAxOS4yMVY1LjIxMDAyQzIzLjk5ODQgMy44ODQ0MyAyMy40NzExIDIuNjEzNTggMjIuNTMzOCAxLjY3NjI0QzIxLjU5NjQgMC43Mzg5MDQgMjAuMzI1NiAwLjIxMTYxIDE5IDAuMjEwMDIyWk0yMCAxMS4yMUgyMlYxMy4yMUgyMFYxMS4yMVpNMjAgOS4yMTAwMlY3LjIxMDAySDIyVjkuMjEwMDJIMjBaTTE4IDExLjIxSDZWMi4yMTAwMkgxOFYxMS4yMVpNNCAxMy4yMUgyVjExLjIxSDRWMTMuMjFaTTQgOS4yMTAwMkgyVjcuMjEwMDJINFY5LjIxMDAyWk0yIDE1LjIxSDRWMTcuMjFIMlYxNS4yMVpNNiAxMy4yMUgxOFYyMi4yMUg2VjEzLjIxWk0yMCAxNS4yMUgyMlYxNy4yMUgyMFYxNS4yMVpNMjIgNS4yMTAwMkgyMFYyLjM5NDAyQzIwLjU4MjkgMi42MDAxMSAyMS4wODc5IDIuOTgxMjUgMjEuNDQ1OSAzLjQ4NTMyQzIxLjgwMzkgMy45ODkzOSAyMS45OTc0IDQuNTkxNzYgMjIgNS4yMTAwMlpNNCAyLjM5NDAyVjUuMjEwMDJIMkMyLjAwMjU2IDQuNTkxNzYgMi4xOTYwOCAzLjk4OTM5IDIuNTU0MDkgMy40ODUzMkMyLjkxMjA5IDIuOTgxMjUgMy40MTcwOSAyLjYwMDExIDQgMi4zOTQwMlpNMiAxOS4yMUg0VjIyLjAyNkMzLjQxNzA5IDIxLjgxOTkgMi45MTIwOSAyMS40Mzg4IDIuNTU0MDkgMjAuOTM0N0MyLjE5NjA4IDIwLjQzMDcgMi4wMDI1NiAxOS44MjgzIDIgMTkuMjFaTTIwIDIyLjAyNlYxOS4yMUgyMkMyMS45OTc0IDE5LjgyODMgMjEuODAzOSAyMC40MzA3IDIxLjQ0NTkgMjAuOTM0N0MyMS4wODc5IDIxLjQzODggMjAuNTgyOSAyMS44MTk5IDIwIDIyLjAyNlpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFx1MDAzQ2NsaXBQYXRoIGlkPVxcXCJjbGlwMF81MzJfMTc2MFxcXCJcXHUwMDNFXFxuXFx1MDAzQ3JlY3Qgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCAwLjIxMDAyMilcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmNsaXBQYXRoXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0LjQvdC+0LfQsNC7XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaXRlbVxcXCIgaWQ9XFxcInNsaWRlci1hcmNoLWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pY29uXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyM1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDIzXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xOSAyLjIxMDIxSDEyLjQ3MkMxMi4zMTczIDIuMjExMjMgMTIuMTY0NSAyLjE3NzAzIDEyLjAyNSAyLjExMDIxTDguODY5IDAuNTI2MjA1QzguNDUyMzkgMC4zMTg3NSA3Ljk5MzQgMC4yMTA1OTEgNy41MjggMC4yMTAyMDVINUMzLjY3NDQxIDAuMjExNzkzIDIuNDAzNTYgMC43MzkwODcgMS40NjYyMiAxLjY3NjQzQzAuNTI4ODgyIDIuNjEzNzYgMC4wMDE1ODc4NiAzLjg4NDYxIDAgNS4yMTAyMVYxNy4yMTAyQzAuMDAxNTg3ODYgMTguNTM1OCAwLjUyODg4MiAxOS44MDY3IDEuNDY2MjIgMjAuNzQ0QzIuNDAzNTYgMjEuNjgxMyAzLjY3NDQxIDIyLjIwODYgNSAyMi4yMTAySDE5QzIwLjMyNTYgMjIuMjA4NiAyMS41OTY0IDIxLjY4MTMgMjIuNTMzOCAyMC43NDRDMjMuNDcxMSAxOS44MDY3IDIzLjk5ODQgMTguNTM1OCAyNCAxNy4yMTAyVjcuMjEwMjFDMjMuOTk4NCA1Ljg4NDYxIDIzLjQ3MTEgNC42MTM3NiAyMi41MzM4IDMuNjc2NDNDMjEuNTk2NCAyLjczOTA5IDIwLjMyNTYgMi4yMTE3OSAxOSAyLjIxMDIxWk01IDIuMjEwMjFINy41MjhDNy42ODI2NiAyLjIwOTE4IDcuODM1NTIgMi4yNDMzOCA3Ljk3NSAyLjMxMDIxTDExLjEzMSAzLjg4OTIxQzExLjU0NzIgNC4wOTgzOSAxMi4wMDYyIDQuMjA4MjcgMTIuNDcyIDQuMjEwMjFIMTlDMTkuNTk4IDQuMjExMTggMjAuMTgyMSA0LjM5MDg4IDIwLjY3NzMgNC43MjYyMkMyMS4xNzI1IDUuMDYxNTYgMjEuNTU2MSA1LjUzNzI1IDIxLjc3OSA2LjA5MjIxTDIgNi4yMDQyMVY1LjIxMDIxQzIgNC40MTQ1NiAyLjMxNjA3IDMuNjUxNDkgMi44Nzg2OCAzLjA4ODg5QzMuNDQxMjkgMi41MjYyOCA0LjIwNDM1IDIuMjEwMjEgNSAyLjIxMDIxWk0xOSAyMC4yMTAySDVDNC4yMDQzNSAyMC4yMTAyIDMuNDQxMjkgMTkuODk0MSAyLjg3ODY4IDE5LjMzMTVDMi4zMTYwNyAxOC43Njg5IDIgMTguMDA1OSAyIDE3LjIxMDJWOC4yMDQyMUwyMiA4LjA5MTIxVjE3LjIxMDJDMjIgMTguMDA1OSAyMS42ODM5IDE4Ljc2ODkgMjEuMTIxMyAxOS4zMzE1QzIwLjU1ODcgMTkuODk0MSAxOS43OTU2IDIwLjIxMDIgMTkgMjAuMjEwMlpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCQ0YDRhdC40LJcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIiBpZD1cXFwic2xpZGVyLWZhdi1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjJcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyMlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTcuNSAwLjEyNjQ2NUMxNi4zNzM5IDAuMTQzOTggMTUuMjcyNCAwLjQ1ODMxOCAxNC4zMDY3IDEuMDM3NzRDMTMuMzQxIDEuNjE3MTUgMTIuNTQ1MyAyLjQ0MTEzIDEyIDMuNDI2NDZDMTEuNDU0NiAyLjQ0MTEzIDEwLjY1ODkgMS42MTcxNSA5LjY5MzIgMS4wMzc3NEM4LjcyNzUgMC40NTgzMTggNy42MjYwMSAwLjE0Mzk4IDYuNDk5OTYgMC4xMjY0NjVDNC43MDQ5IDAuMjA0NDU2IDMuMDEzNjYgMC45ODk3MTkgMS43OTU3NCAyLjMxMDdDMC41Nzc4MTggMy42MzE2OCAtMC4wNjc3OTIyIDUuMzgwOTkgLTQuMTcwODhlLTA1IDcuMTc2NDZDLTQuMTcwODhlLTA1IDExLjcyMzUgNC43ODU5NiAxNi42ODk1IDguNzk5OTYgMjAuMDU2NUM5LjY5NjE4IDIwLjgwOTYgMTAuODI5MyAyMS4yMjI1IDEyIDIxLjIyMjVDMTMuMTcwNiAyMS4yMjI1IDE0LjMwMzcgMjAuODA5NiAxNS4yIDIwLjA1NjVDMTkuMjE0IDE2LjY4OTUgMjQgMTEuNzIzNSAyNCA3LjE3NjQ2QzI0LjA2NzcgNS4zODA5OSAyMy40MjIxIDMuNjMxNjggMjIuMjA0MiAyLjMxMDdDMjAuOTg2MyAwLjk4OTcxOSAxOS4yOTUgMC4yMDQ0NTYgMTcuNSAwLjEyNjQ2NVpNMTMuOTE1IDE4LjUyNjVDMTMuMzc4OSAxOC45Nzc4IDEyLjcwMDcgMTkuMjI1NCAxMiAxOS4yMjU0QzExLjI5OTIgMTkuMjI1NCAxMC42MjEgMTguOTc3OCAxMC4wODUgMTguNTI2NUM0Ljk0Njk2IDE0LjIxNTUgMS45OTk5NiAxMC4wNzk1IDEuOTk5OTYgNy4xNzY0NkMxLjkzMTYgNS45MTExOCAyLjM2NjMyIDQuNjcwMTkgMy4yMDkzMiAzLjcyNDE2QzQuMDUyMzIgMi43NzgxMyA1LjIzNTE5IDIuMjAzODEgNi40OTk5NiAyLjEyNjQ2QzcuNzY0NzIgMi4yMDM4MSA4Ljk0NzYgMi43NzgxMyA5Ljc5MDYgMy43MjQxNkMxMC42MzM2IDQuNjcwMTkgMTEuMDY4MyA1LjkxMTE4IDExIDcuMTc2NDZDMTEgNy40NDE2OCAxMS4xMDUzIDcuNjk2MDMgMTEuMjkyOSA3Ljg4MzU3QzExLjQ4MDQgOC4wNzExMSAxMS43MzQ3IDguMTc2NDYgMTIgOC4xNzY0NkMxMi4yNjUyIDguMTc2NDYgMTIuNTE5NSA4LjA3MTExIDEyLjcwNzEgNy44ODM1N0MxMi44OTQ2IDcuNjk2MDMgMTMgNy40NDE2OCAxMyA3LjE3NjQ2QzEyLjkzMTYgNS45MTExOCAxMy4zNjYzIDQuNjcwMTkgMTQuMjA5MyAzLjcyNDE2QzE1LjA1MjMgMi43NzgxMyAxNi4yMzUyIDIuMjAzODEgMTcuNSAyLjEyNjQ2QzE4Ljc2NDcgMi4yMDM4MSAxOS45NDc2IDIuNzc4MTMgMjAuNzkwNiAzLjcyNDE2QzIxLjYzMzYgNC42NzAxOSAyMi4wNjgzIDUuOTExMTggMjIgNy4xNzY0NkMyMiAxMC4wNzk1IDE5LjA1MyAxNC4yMTU1IDEzLjkxNSAxOC41MjI1VjE4LjUyNjVaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmNC30LHRgNCw0L3QvdC+0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19jb250ZW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2hvbWVcXFwiIGlkPVxcXCJzbGlkZXItaG9tZS1qc1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJzbGlkZXItaG9tZTIucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX190dlxcXCIgaWQ9XFxcInNsaWRlci10di1qc1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJzbGlkZXItdHYyLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fY2luZW1hXFxcIiBpZD1cXFwic2xpZGVyLWNpbmVtYS1qc1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJzbGlkZXItY2luZW1hMi5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FyY2l2ZVxcXCIgaWQ9XFxcInNsaWRlci1hcmNpdmUtanNcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwic2xpZGVyLWFyY2l2ZTIucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19mYXZcXFwiIGlkPVxcXCJzbGlkZXItZmF2LWpzXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcInNsaWRlci1mYXZvdGl0ZS5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX3N0YXJ0ZXJcXFwiIGlkPVxcXCJzbGlkZXItc3RhcnRlci1qc1xcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlubmVyc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpbm5lciBzcGlubmVyLS1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2UxXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzEucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2UyXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzIucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2UzXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzMucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2U0XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzQucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2U1XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzUucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2U2XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzYucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2U3XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzcucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLWwtaW1hZ2U4XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzgucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGlubmVyIHNwaW5uZXItLXJpZ2h0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2UxXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzEucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2UyXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzIucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2UzXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzMucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2U0XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzQucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2U1XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzUucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2U2XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzYucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2U3XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzcucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzcGluZXJfX2ltYWdlXFxcIiBpZD1cXFwic3BpbmVyLXItaW1hZ2U4XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnc3BpbmVyLWltZzgucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvZm9vdGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDXFx1MDAyRmJvZHlcXHUwMDNFXFx1MDAzQ1xcdTAwMkZodG1sXFx1MDAzRVwiOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwidmFyIHB1ZyA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lL2luZGV4LmpzXCIpO1xuXG5mdW5jdGlvbiB0ZW1wbGF0ZShsb2NhbHMpIHt2YXIgcHVnX2h0bWwgPSBcIlwiLCBwdWdfbWl4aW5zID0ge30sIHB1Z19pbnRlcnA7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCIndXNlIHN0cmljdCc7XG5cbnZhciBwdWdfaGFzX293bl9wcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbi8qKlxuICogTWVyZ2UgdHdvIGF0dHJpYnV0ZSBvYmplY3RzIGdpdmluZyBwcmVjZWRlbmNlXG4gKiB0byB2YWx1ZXMgaW4gb2JqZWN0IGBiYC4gQ2xhc3NlcyBhcmUgc3BlY2lhbC1jYXNlZFxuICogYWxsb3dpbmcgZm9yIGFycmF5cyBhbmQgbWVyZ2luZy9qb2luaW5nIGFwcHJvcHJpYXRlbHlcbiAqIHJlc3VsdGluZyBpbiBhIHN0cmluZy5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gYVxuICogQHBhcmFtIHtPYmplY3R9IGJcbiAqIEByZXR1cm4ge09iamVjdH0gYVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZXhwb3J0cy5tZXJnZSA9IHB1Z19tZXJnZTtcbmZ1bmN0aW9uIHB1Z19tZXJnZShhLCBiKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgdmFyIGF0dHJzID0gYVswXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGF0dHJzID0gcHVnX21lcmdlKGF0dHJzLCBhW2ldKTtcbiAgICB9XG4gICAgcmV0dXJuIGF0dHJzO1xuICB9XG5cbiAgZm9yICh2YXIga2V5IGluIGIpIHtcbiAgICBpZiAoa2V5ID09PSAnY2xhc3MnKSB7XG4gICAgICB2YXIgdmFsQSA9IGFba2V5XSB8fCBbXTtcbiAgICAgIGFba2V5XSA9IChBcnJheS5pc0FycmF5KHZhbEEpID8gdmFsQSA6IFt2YWxBXSkuY29uY2F0KGJba2V5XSB8fCBbXSk7XG4gICAgfSBlbHNlIGlmIChrZXkgPT09ICdzdHlsZScpIHtcbiAgICAgIHZhciB2YWxBID0gcHVnX3N0eWxlKGFba2V5XSk7XG4gICAgICB2YWxBID0gdmFsQSAmJiB2YWxBW3ZhbEEubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEEgKyAnOycgOiB2YWxBO1xuICAgICAgdmFyIHZhbEIgPSBwdWdfc3R5bGUoYltrZXldKTtcbiAgICAgIHZhbEIgPSB2YWxCICYmIHZhbEJbdmFsQi5sZW5ndGggLSAxXSAhPT0gJzsnID8gdmFsQiArICc7JyA6IHZhbEI7XG4gICAgICBhW2tleV0gPSB2YWxBICsgdmFsQjtcbiAgICB9IGVsc2Uge1xuICAgICAgYVtrZXldID0gYltrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBhO1xufTtcblxuLyoqXG4gKiBQcm9jZXNzIGFycmF5LCBvYmplY3QsIG9yIHN0cmluZyBhcyBhIHN0cmluZyBvZiBjbGFzc2VzIGRlbGltaXRlZCBieSBhIHNwYWNlLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIGFycmF5LCBhbGwgbWVtYmVycyBvZiBpdCBhbmQgaXRzIHN1YmFycmF5cyBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gSWYgYGVzY2FwaW5nYCBpcyBhbiBhcnJheSwgdGhlbiB3aGV0aGVyIG9yIG5vdCB0aGUgaXRlbSBpbiBgdmFsYCBpc1xuICogZXNjYXBlZCBkZXBlbmRzIG9uIHRoZSBjb3JyZXNwb25kaW5nIGl0ZW0gaW4gYGVzY2FwaW5nYC4gSWYgYGVzY2FwaW5nYCBpc1xuICogbm90IGFuIGFycmF5LCBubyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIElmIGB2YWxgIGlzIGFuIG9iamVjdCwgYWxsIHRoZSBrZXlzIHdob3NlIHZhbHVlIGlzIHRydXRoeSBhcmUgY291bnRlZCBhc1xuICogY2xhc3Nlcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhIHN0cmluZywgaXQgaXMgY291bnRlZCBhcyBhIGNsYXNzLiBObyBlc2NhcGluZyBpcyBkb25lLlxuICpcbiAqIEBwYXJhbSB7KEFycmF5LjxzdHJpbmc+fE9iamVjdC48c3RyaW5nLCBib29sZWFuPnxzdHJpbmcpfSB2YWxcbiAqIEBwYXJhbSB7P0FycmF5LjxzdHJpbmc+fSBlc2NhcGluZ1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmNsYXNzZXMgPSBwdWdfY2xhc3NlcztcbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIGNsYXNzTmFtZSwgcGFkZGluZyA9ICcnLCBlc2NhcGVFbmFibGVkID0gQXJyYXkuaXNBcnJheShlc2NhcGluZyk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsLmxlbmd0aDsgaSsrKSB7XG4gICAgY2xhc3NOYW1lID0gcHVnX2NsYXNzZXModmFsW2ldKTtcbiAgICBpZiAoIWNsYXNzTmFtZSkgY29udGludWU7XG4gICAgZXNjYXBlRW5hYmxlZCAmJiBlc2NhcGluZ1tpXSAmJiAoY2xhc3NOYW1lID0gcHVnX2VzY2FwZShjbGFzc05hbWUpKTtcbiAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGNsYXNzTmFtZTtcbiAgICBwYWRkaW5nID0gJyAnO1xuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzX29iamVjdCh2YWwpIHtcbiAgdmFyIGNsYXNzU3RyaW5nID0gJycsIHBhZGRpbmcgPSAnJztcbiAgZm9yICh2YXIga2V5IGluIHZhbCkge1xuICAgIGlmIChrZXkgJiYgdmFsW2tleV0gJiYgcHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIGtleSkpIHtcbiAgICAgIGNsYXNzU3RyaW5nID0gY2xhc3NTdHJpbmcgKyBwYWRkaW5nICsga2V5O1xuICAgICAgcGFkZGluZyA9ICcgJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGNsYXNzU3RyaW5nO1xufVxuZnVuY3Rpb24gcHVnX2NsYXNzZXModmFsLCBlc2NhcGluZykge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgcmV0dXJuIHB1Z19jbGFzc2VzX2FycmF5KHZhbCwgZXNjYXBpbmcpO1xuICB9IGVsc2UgaWYgKHZhbCAmJiB0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsIHx8ICcnO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydCBvYmplY3Qgb3Igc3RyaW5nIHRvIGEgc3RyaW5nIG9mIENTUyBzdHlsZXMgZGVsaW1pdGVkIGJ5IGEgc2VtaWNvbG9uLlxuICpcbiAqIEBwYXJhbSB7KE9iamVjdC48c3RyaW5nLCBzdHJpbmc+fHN0cmluZyl9IHZhbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5cbmV4cG9ydHMuc3R5bGUgPSBwdWdfc3R5bGU7XG5mdW5jdGlvbiBwdWdfc3R5bGUodmFsKSB7XG4gIGlmICghdmFsKSByZXR1cm4gJyc7XG4gIGlmICh0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xuICAgIHZhciBvdXQgPSAnJztcbiAgICBmb3IgKHZhciBzdHlsZSBpbiB2YWwpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAocHVnX2hhc19vd25fcHJvcGVydHkuY2FsbCh2YWwsIHN0eWxlKSkge1xuICAgICAgICBvdXQgPSBvdXQgKyBzdHlsZSArICc6JyArIHZhbFtzdHlsZV0gKyAnOyc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvdXQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCArICcnO1xuICB9XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBrZXlcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWxcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZXNjYXBlZFxuICogQHBhcmFtIHtCb29sZWFufSB0ZXJzZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHIgPSBwdWdfYXR0cjtcbmZ1bmN0aW9uIHB1Z19hdHRyKGtleSwgdmFsLCBlc2NhcGVkLCB0ZXJzZSkge1xuICBpZiAodmFsID09PSBmYWxzZSB8fCB2YWwgPT0gbnVsbCB8fCAhdmFsICYmIChrZXkgPT09ICdjbGFzcycgfHwga2V5ID09PSAnc3R5bGUnKSkge1xuICAgIHJldHVybiAnJztcbiAgfVxuICBpZiAodmFsID09PSB0cnVlKSB7XG4gICAgcmV0dXJuICcgJyArICh0ZXJzZSA/IGtleSA6IGtleSArICc9XCInICsga2V5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIHR5cGUgPSB0eXBlb2YgdmFsO1xuICBpZiAoKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpICYmIHR5cGVvZiB2YWwudG9KU09OID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFsID0gdmFsLnRvSlNPTigpO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsICE9PSAnc3RyaW5nJykge1xuICAgIHZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgaWYgKCFlc2NhcGVkICYmIHZhbC5pbmRleE9mKCdcIicpICE9PSAtMSkge1xuICAgICAgcmV0dXJuICcgJyArIGtleSArICc9XFwnJyArIHZhbC5yZXBsYWNlKC8nL2csICcmIzM5OycpICsgJ1xcJyc7XG4gICAgfVxuICB9XG4gIGlmIChlc2NhcGVkKSB2YWwgPSBwdWdfZXNjYXBlKHZhbCk7XG4gIHJldHVybiAnICcgKyBrZXkgKyAnPVwiJyArIHZhbCArICdcIic7XG59O1xuXG4vKipcbiAqIFJlbmRlciB0aGUgZ2l2ZW4gYXR0cmlidXRlcyBvYmplY3QuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHBhcmFtIHtPYmplY3R9IHRlcnNlIHdoZXRoZXIgdG8gdXNlIEhUTUw1IHRlcnNlIGJvb2xlYW4gYXR0cmlidXRlc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5leHBvcnRzLmF0dHJzID0gcHVnX2F0dHJzO1xuZnVuY3Rpb24gcHVnX2F0dHJzKG9iaiwgdGVyc2Upe1xuICB2YXIgYXR0cnMgPSAnJztcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgdmFsID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnY2xhc3MnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX2NsYXNzZXModmFsKTtcbiAgICAgICAgYXR0cnMgPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKSArIGF0dHJzO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICgnc3R5bGUnID09PSBrZXkpIHtcbiAgICAgICAgdmFsID0gcHVnX3N0eWxlKHZhbCk7XG4gICAgICB9XG4gICAgICBhdHRycyArPSBwdWdfYXR0cihrZXksIHZhbCwgZmFsc2UsIHRlcnNlKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYXR0cnM7XG59O1xuXG4vKipcbiAqIEVzY2FwZSB0aGUgZ2l2ZW4gc3RyaW5nIG9mIGBodG1sYC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxudmFyIHB1Z19tYXRjaF9odG1sID0gL1tcIiY8Pl0vO1xuZXhwb3J0cy5lc2NhcGUgPSBwdWdfZXNjYXBlO1xuZnVuY3Rpb24gcHVnX2VzY2FwZShfaHRtbCl7XG4gIHZhciBodG1sID0gJycgKyBfaHRtbDtcbiAgdmFyIHJlZ2V4UmVzdWx0ID0gcHVnX21hdGNoX2h0bWwuZXhlYyhodG1sKTtcbiAgaWYgKCFyZWdleFJlc3VsdCkgcmV0dXJuIF9odG1sO1xuXG4gIHZhciByZXN1bHQgPSAnJztcbiAgdmFyIGksIGxhc3RJbmRleCwgZXNjYXBlO1xuICBmb3IgKGkgPSByZWdleFJlc3VsdC5pbmRleCwgbGFzdEluZGV4ID0gMDsgaSA8IGh0bWwubGVuZ3RoOyBpKyspIHtcbiAgICBzd2l0Y2ggKGh0bWwuY2hhckNvZGVBdChpKSkge1xuICAgICAgY2FzZSAzNDogZXNjYXBlID0gJyZxdW90Oyc7IGJyZWFrO1xuICAgICAgY2FzZSAzODogZXNjYXBlID0gJyZhbXA7JzsgYnJlYWs7XG4gICAgICBjYXNlIDYwOiBlc2NhcGUgPSAnJmx0Oyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MjogZXNjYXBlID0gJyZndDsnOyBicmVhaztcbiAgICAgIGRlZmF1bHQ6IGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXN1bHQgKz0gaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgICBsYXN0SW5kZXggPSBpICsgMTtcbiAgICByZXN1bHQgKz0gZXNjYXBlO1xuICB9XG4gIGlmIChsYXN0SW5kZXggIT09IGkpIHJldHVybiByZXN1bHQgKyBodG1sLnN1YnN0cmluZyhsYXN0SW5kZXgsIGkpO1xuICBlbHNlIHJldHVybiByZXN1bHQ7XG59O1xuXG4vKipcbiAqIFJlLXRocm93IHRoZSBnaXZlbiBgZXJyYCBpbiBjb250ZXh0IHRvIHRoZVxuICogdGhlIHB1ZyBpbiBgZmlsZW5hbWVgIGF0IHRoZSBnaXZlbiBgbGluZW5vYC5cbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJcbiAqIEBwYXJhbSB7U3RyaW5nfSBmaWxlbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IGxpbmVub1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBvcmlnaW5hbCBzb3VyY2VcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMucmV0aHJvdyA9IHB1Z19yZXRocm93O1xuZnVuY3Rpb24gcHVnX3JldGhyb3coZXJyLCBmaWxlbmFtZSwgbGluZW5vLCBzdHIpe1xuICBpZiAoIShlcnIgaW5zdGFuY2VvZiBFcnJvcikpIHRocm93IGVycjtcbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnIHx8ICFmaWxlbmFtZSkgJiYgIXN0cikge1xuICAgIGVyci5tZXNzYWdlICs9ICcgb24gbGluZSAnICsgbGluZW5vO1xuICAgIHRocm93IGVycjtcbiAgfVxuICB0cnkge1xuICAgIHN0ciA9IHN0ciB8fCByZXF1aXJlKCdmcycpLnJlYWRGaWxlU3luYyhmaWxlbmFtZSwgJ3V0ZjgnKVxuICB9IGNhdGNoIChleCkge1xuICAgIHB1Z19yZXRocm93KGVyciwgbnVsbCwgbGluZW5vKVxuICB9XG4gIHZhciBjb250ZXh0ID0gM1xuICAgICwgbGluZXMgPSBzdHIuc3BsaXQoJ1xcbicpXG4gICAgLCBzdGFydCA9IE1hdGgubWF4KGxpbmVubyAtIGNvbnRleHQsIDApXG4gICAgLCBlbmQgPSBNYXRoLm1pbihsaW5lcy5sZW5ndGgsIGxpbmVubyArIGNvbnRleHQpO1xuXG4gIC8vIEVycm9yIGNvbnRleHRcbiAgdmFyIGNvbnRleHQgPSBsaW5lcy5zbGljZShzdGFydCwgZW5kKS5tYXAoZnVuY3Rpb24obGluZSwgaSl7XG4gICAgdmFyIGN1cnIgPSBpICsgc3RhcnQgKyAxO1xuICAgIHJldHVybiAoY3VyciA9PSBsaW5lbm8gPyAnICA+ICcgOiAnICAgICcpXG4gICAgICArIGN1cnJcbiAgICAgICsgJ3wgJ1xuICAgICAgKyBsaW5lO1xuICB9KS5qb2luKCdcXG4nKTtcblxuICAvLyBBbHRlciBleGNlcHRpb24gbWVzc2FnZVxuICBlcnIucGF0aCA9IGZpbGVuYW1lO1xuICBlcnIubWVzc2FnZSA9IChmaWxlbmFtZSB8fCAnUHVnJykgKyAnOicgKyBsaW5lbm9cbiAgICArICdcXG4nICsgY29udGV4dCArICdcXG5cXG4nICsgZXJyLm1lc3NhZ2U7XG4gIHRocm93IGVycjtcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gZmlyc3RMb2FkKCkge1xuICAgIC8vIFF1ZXJ5aW5nIGJ1dHRvbiBhbmQgY29udGVudCBlbGVtZW50c1xuICAgIHZhciBzbGlkZXJIb21lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItaG9tZS1idG4tanNcIik7XG4gICAgdmFyIHNsaWRlclR2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItdHYtYnRuLWpzXCIpO1xuICAgIHZhciBzbGlkZXJNb3ZpZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLW1vdmllLWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyQXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWFyY2gtYnRuLWpzXCIpO1xuICAgIHZhciBzbGlkZXJGYXZCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1mYXYtYnRuLWpzXCIpO1xuICAgIHZhciBzbGlkZXJIb21lQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWhvbWUtanNcIik7XG4gICAgdmFyIHNsaWRlclR2QnRuQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLXR2LWpzXCIpO1xuICAgIHZhciBzbGlkZXJNb3ZpZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1jaW5lbWEtanNcIik7XG4gICAgdmFyIHNsaWRlckFyY2hDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItYXJjaXZlLWpzXCIpO1xuICAgIHZhciBzbGlkZXJGYXZDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItZmF2LWpzXCIpO1xuICAgIC8vIEdyb3VwaW5nIGJ1dHRvbnMgYW5kIGNvbnRlbnRzIGludG8gYXJyYXlzXG4gICAgdmFyIGJ1dHRvbnMgPSBbc2xpZGVySG9tZUJ0biwgc2xpZGVyVHZCdG4sIHNsaWRlck1vdmllQnRuLCBzbGlkZXJBcmNoQnRuLCBzbGlkZXJGYXZCdG5dO1xuICAgIHZhciBjb250ZW50cyA9IFtzbGlkZXJIb21lQ29udGVudCwgc2xpZGVyVHZCdG5Db250ZW50LCBzbGlkZXJNb3ZpZUNvbnRlbnQsIHNsaWRlckFyY2hDb250ZW50LCBzbGlkZXJGYXZDb250ZW50XTtcbiAgICAvLyBJbml0aWFsIGFjdGl2ZSBzdGF0ZSBmb3IgdGhlIGhvbWUgYnV0dG9uIGFuZCBjb250ZW50XG4gICAgaWYgKHNsaWRlckhvbWVCdG4pIHtcbiAgICAgICAgc2xpZGVySG9tZUJ0bi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBzbGlkZXJIb21lQ29udGVudC5jbGFzc0xpc3QuYWRkKFwidmlzaWJsZVwiKTtcbiAgICB9XG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciBidXR0b25zXG4gICAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24sIGluZGV4KSB7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gaGFuZGxlQ2xpY2soYnV0dG9uLCBjb250ZW50c1tpbmRleF0pOyB9KTtcbiAgICB9KTtcbiAgICAvLyBIYW5kbGUgY2xpY2sgZnVuY3Rpb24gdG8gdG9nZ2xlIGFjdGl2ZSBhbmQgdmlzaWJsZSBjbGFzc2VzXG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soYnV0dG9uLCBjb250ZW50KSB7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnRuKSB7XG4gICAgICAgICAgICBpZiAoYnRuICE9PSBidXR0b24pXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb250ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChjb250KSB7XG4gICAgICAgICAgICBpZiAoY29udCAhPT0gY29udGVudClcbiAgICAgICAgICAgICAgICBjb250LmNsYXNzTGlzdC5yZW1vdmUoXCJ2aXNpYmxlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgfVxuICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgaXMgdmlzaWJsZSBpbiB0aGUgdmlld3BvcnRcbiAgICBmdW5jdGlvbiBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmxlZnQgPj0gMCAmJlxuICAgICAgICAgICAgcmVjdC5ib3R0b20gPD0gKHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0KSAmJlxuICAgICAgICAgICAgcmVjdC5yaWdodCA8PSAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICB9XG4gICAgLy8gT24gc2Nyb2xsLCBjaGVjayB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZWxlbWVudCBhbmQgc2hvdyB0aGUgYXNpZGUgcGFuZWxcbiAgICBmdW5jdGlvbiBjaGVja1Zpc2liaWxpdHlPblNjcm9sbCgpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNsaWRlci1zdGFydGVyLWpzXCIpO1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBpc0VsZW1lbnRWaXNpYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnNsaWRlcl9fYXNpZGUtdGV4dFwiKS5mb3JFYWNoKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudClcbiAgICAgICAgICAgICAgICAgICAgZS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBjaGVja1Zpc2liaWxpdHlPblNjcm9sbCk7XG4gICAgLy8gQXV0b21hdGljIHN3aXRjaCBiZXR3ZWVuIGJ1dHRvbnNcbiAgICB2YXIgYXV0b1N3aXRjaCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGFjdGl2ZUluZGV4ID0gYnV0dG9ucy5maW5kSW5kZXgoZnVuY3Rpb24gKGJ0bikgeyByZXR1cm4gYnRuLmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKTsgfSk7XG4gICAgICAgIHZhciBuZXh0SW5kZXggPSAoYWN0aXZlSW5kZXggKyAxKSAlIGJ1dHRvbnMubGVuZ3RoO1xuICAgICAgICBoYW5kbGVDbGljayhidXR0b25zW25leHRJbmRleF0sIGNvbnRlbnRzW25leHRJbmRleF0pO1xuICAgIH0sIDE4MDApO1xuICAgIC8vIENsZWFyIGludGVydmFsIG9uIGJ1dHRvbiBjbGljayBhbmQgY2FsbCBoYW5kbGVDbGlja1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoYXV0b1N3aXRjaCk7XG4gICAgICAgICAgICBoYW5kbGVDbGljayhidXR0b24sIGNvbnRlbnRzW2luZGV4XSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufVxuIiwiLy8g0JIg0YTQsNC50LvQtSBtYWluLnRzXG5pbXBvcnQgeyBmaXJzdExvYWQgfSBmcm9tICcuL2hvbWUtcGFnZSc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vINCS0YvQt9C+0LIg0YTRg9C90LrRhtC40Lggc2hvd1xuICAgIGZpcnN0TG9hZCgpO1xufSk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSWNvbi1hdHRlbnRpb24uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWF0dGVudGlvbi5zdmdcIixcblx0XCIuL0ljb24tZmF2b3JpdGUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWZhdm9yaXRlLnN2Z1wiLFxuXHRcIi4vSWNvbi1mb2xkZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWZvbGRlci5zdmdcIixcblx0XCIuL0ljb24tZ3JvdXAuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWdyb3VwLnN2Z1wiLFxuXHRcIi4vSWNvbi1ob21lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1ob21lLnN2Z1wiLFxuXHRcIi4vSWNvbi1tb3ZpZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tbW92aWUuc3ZnXCIsXG5cdFwiLi9JY29uLXNlYXJjaC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tc2VhcmNoLnN2Z1wiLFxuXHRcIi4vSWNvbi1zZXR0aW5ncy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tc2V0dGluZ3Muc3ZnXCIsXG5cdFwiLi9JY29uLXR2LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi10di5zdmdcIixcblx0XCIuL0ljb24tdXNlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tdXNlci5wbmdcIixcblx0XCIuL0ljb25zLXVzZXIuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29ucy11c2VyLnN2Z1wiLFxuXHRcIi4vTG9nby1zdmcuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Mb2dvLXN2Zy5zdmdcIixcblx0XCIuL0xvZ28ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Mb2dvLnBuZ1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9oZWFydC1zdGFydC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hlYXJ0LXN0YXJ0LnN2Z1wiLFxuXHRcIi4vaGVhcnQtc3RhcnRfMS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hlYXJ0LXN0YXJ0XzEuc3ZnXCIsXG5cdFwiLi9oZWFydC10by5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2hlYXJ0LXRvLnN2Z1wiLFxuXHRcIi4vaWNvbi1nby5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tZ28uc3ZnXCIsXG5cdFwiLi9pY29uLXBob25lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1waG9uZS5wbmdcIixcblx0XCIuL2xvZ28tdGV4dC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28tdGV4dC5wbmdcIixcblx0XCIuL2xvZ28tdGV4dC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28tdGV4dC5zdmdcIixcblx0XCIuL3Bvc3Rlci5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Bvc3Rlci5wbmdcIixcblx0XCIuL3NsaWRlci1hcmNpdmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWFyY2l2ZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlMi5wbmdcIixcblx0XCIuL3NsaWRlci1jaW5lbWEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWNpbmVtYTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hMi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2LnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWZhdjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2Mi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXZvdGl0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NsaWRlci1mYXZvdGl0ZS5wbmdcIixcblx0XCIuL3NsaWRlci1ob21lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLWhvbWUucG5nXCIsXG5cdFwiLi9zbGlkZXItaG9tZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItaG9tZTIucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItdHYucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLXR2Mi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWcxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzEucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWcyLnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nMy5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzQucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc1LnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nNi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzcucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc4LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==