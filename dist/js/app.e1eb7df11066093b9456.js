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
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Csection class=\"promo\"\u003E\u003Cdiv class=\"promo__wrapper\"\u003E\u003Cdiv class=\"promo__title\"\u003E\u003Cspan\u003EАкции и предложения\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"promo__slider\"\u003E\u003Cdiv class=\"swiper-pagination\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper mySwiper\"\u003E\u003Cdiv class=\"swiper-wrapper\"\u003E\u003Cdiv class=\"swiper-slide\"\u003E";
pug_mixins["image"]('promo-1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-slide\"\u003E";
pug_mixins["image"]('promo-1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003Cdiv class=\"swiper-slide\"\u003E";
pug_mixins["image"]('promo-1.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"promo__line\"\u003E\u003Csvg width=\"1254\" height=\"917\" viewBox=\"0 0 1254 917\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath opacity=\"0.5\" d=\"M0.666667 6C0.666667 8.94552 3.05448 11.3333 6 11.3333C8.94552 11.3333 11.3333 8.94552 11.3333 6C11.3333 3.05448 8.94552 0.666667 6 0.666667C3.05448 0.666667 0.666667 3.05448 0.666667 6ZM6 7H1183V5H6V7ZM1252 76V916.5H1254V76H1252ZM1183 7C1221.11 7 1252 37.8924 1252 76H1254C1254 36.7878 1222.21 5 1183 5V7Z\" fill=\"white\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/footer.pug */ "./src/views/parts/footer.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C!-- Script for Swiper--\u003E\u003Cscript src=\"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002Fswiper@11\u002Fswiper-bundle.min.js\"\u003E\u003C\u002Fscript\u003E\u003C!-- Initialize Swiper--\u003E\u003Cscript\u003Evar swiper = new Swiper(\".mySwiper\", {\n  direction: \"vertical\",\n  slidesPerView: 1,\n  spaceBetween: 30,\n  mousewheel: true,\n  pagination: {\n    el: \".swiper-pagination\",\n    clickable: true,\n  },\n});\u003C\u002Fscript\u003E\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9qcy9hcHAuZTFlYjdkZjExMDY2MDkzYjk0NTYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBSUEsWUFBWSxHQUFHLElBQW5CO0FBQUEsSUFDRUMsV0FBVyxHQUFHLEVBRGhCO0FBQUEsSUFFRUMsVUFBVSxHQUFHLEVBRmY7QUFBQSxJQUdFQyxRQUFRLEdBQUcsR0FIYjtBQUFBLElBSUVDLFNBQVMsR0FBRyxHQUpkO0FBQUEsSUFLRUMsYUFBYSxHQUFHLEdBTGxCOztBQU9BLFNBQVNDLEtBQVQsQ0FBZUMsTUFBZixFQUF1QkMsRUFBdkIsRUFBMkJDLEVBQTNCLEVBQStCO0VBQzdCLElBQUlELEVBQUUsSUFBSSxHQUFWLEVBQWU7SUFDYixPQUFPLEVBQVA7RUFDRDs7RUFFRCxPQUFPRCxNQUFNLEdBQ1RMLFVBRFMsR0FFVEQsV0FBVyxHQUNUUyxJQUFJLENBQUNDLEdBQUwsQ0FDRUQsSUFBSSxDQUFDRSxHQUFMLENBQVNULFFBQVQsRUFBbUJLLEVBQW5CLElBQXlCUixZQUQzQixFQUVFVSxJQUFJLENBQUNFLEdBQUwsQ0FBU1IsU0FBVCxFQUFvQkssRUFBcEIsSUFBMEJKLGFBRjVCLENBSE47QUFPRDs7QUFFRCxTQUFTUSxjQUFULEdBQTBCO0VBQ3hCLElBQUlDLFdBQVcsR0FBR0MsTUFBTSxDQUFDQyxVQUF6QjtFQUNBLElBQUlDLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxXQUExQjtFQUNBLElBQUlDLFFBQVEsR0FBR0wsV0FBVyxJQUFJLEdBQTlCOztFQUVBLElBQUlNLFFBQVEsQ0FBQ0MsSUFBYixFQUFtQjtJQUNqQkQsUUFBUSxDQUFDQyxJQUFULENBQWNDLEtBQWQsQ0FBb0JDLFFBQXBCLEdBQ0VqQixLQUFLLENBQUNhLFFBQUQsRUFBV0wsV0FBWCxFQUF3QkcsWUFBeEIsQ0FBTCxHQUE2QyxJQUQvQztFQUVEOztFQUVELElBQUlFLFFBQUosRUFBYztJQUNaQyxRQUFRLENBQUNJLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxRQUF2QztFQUNELENBRkQsTUFFTztJQUNMTixRQUFRLENBQUNJLGVBQVQsQ0FBeUJDLFNBQXpCLENBQW1DRSxNQUFuQyxDQUEwQyxRQUExQztFQUNEO0FBQ0Y7O0FBRURaLE1BQU0sQ0FBQ2EsTUFBUCxHQUFnQixZQUFZO0VBQzFCZixjQUFjO0FBQ2YsQ0FGRDs7QUFJQUUsTUFBTSxDQUFDYyxRQUFQLEdBQWtCLFlBQVk7RUFDNUJoQixjQUFjO0FBQ2YsQ0FGRDs7QUFJQUEsY0FBYzs7Ozs7Ozs7Ozs7O0FDOUNkOzs7Ozs7Ozs7OztBQ0FBLFVBQVUsbUJBQU8sQ0FBQyxxRkFBMEM7O0FBRTVELDJCQUEyQixrQ0FBa0MsYUFBYTtBQUMxRTtBQUNBLDhIQUE4SCxxRUFBUSxHQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ2pLOzs7OztBQUtBLDhVQUE4VSxtQkFBTyxDQUFDLHFFQUE4QjtBQUNwWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG93QkFBb3dCLG9GQUFrQyw2U0FBNlMsNEdBQTRHLDREQUE0RCxJQUFJLEVBQUUsdUVBQXVFO0FBQ3gwQzs7Ozs7Ozs7OztBQ25FQSxVQUFVLG1CQUFPLENBQUMsd0ZBQTZDOztBQUUvRCwyQkFBMkIsa0NBQWtDLGNBQWM7QUFDM0U7Ozs7Ozs7Ozs7O0FDSGE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxpREFBaUQsYUFBYTtBQUM5RDtBQUNBLGlEQUFpRCxhQUFhO0FBQzlEO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrREFBa0Q7QUFDN0QsV0FBVyxpQkFBaUI7QUFDNUIsWUFBWTtBQUNaO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxrQ0FBa0M7QUFDN0MsWUFBWTtBQUNaOztBQUVBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsV0FBVyxTQUFTO0FBQ3BCLFdBQVcsU0FBUztBQUNwQixZQUFZO0FBQ1o7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsWUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE2QyxpQkFBaUI7QUFDOUQ7QUFDQSwrQkFBK0IsR0FBRztBQUNsQyw4QkFBOEIsR0FBRztBQUNqQyw2QkFBNkIsR0FBRztBQUNoQyw2QkFBNkIsR0FBRztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxRQUFRO0FBQ25CLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTs7QUFFQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscURBQTBCO0FBQzNDLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQzdQTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCw4Q0FBOEM7QUFDckcsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwwQ0FBMEM7QUFDdkc7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7QUNwRXdDO0FBQ3hDO0FBQ0E7QUFDQSxJQUFJLHFEQUFTO0FBQ2IsQ0FBQzs7Ozs7Ozs7Ozs7QUNKRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEVBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUI7QUFDRDtBQUNIO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3Njc3MvYXBwLnNjc3M/OGI2ZiIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2Zvb3Rlci5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvaG9tZS1wYWdlLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3Byb2plY3RzL1JlZG1heGV1L3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19taXhpbnNbXCJpbWFnZVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihmaWxlKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzLyR7ZmlsZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXCI7XG59O1xuXG5cblxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJlblxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQyEtLSBTdHlsZXNoZWV0IGZvciBTd2lwZXItLVxcdTAwM0VcXHUwMDNDbGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY2RuLmpzZGVsaXZyLm5ldFxcdTAwMkZucG1cXHUwMDJGc3dpcGVyQDExXFx1MDAyRnN3aXBlci1idW5kbGUubWluLmNzc1xcXCJcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJMb2dvLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX21lbnVcXFwiXFx1MDAzRVxcdTAwM0N1bCBjbGFzcz1cXFwiaGVhZGVyX19saXN0XFxcIlxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbSBoZWFkZXJfX2l0ZW0tLWFjdGl2ZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0LDQvdCw0LvRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktC+0LfQvNC+0LbQvdC+0YHRgtC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCf0L7QvNC+0YnRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktC+0L/RgNC+0YHRiyDQuCDQvtGC0LLQtdGC0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JTQtdC60L7QtNC10YDRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0JDQutGG0LjQuFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCQ0LrRhtC40Lgg0Lgg0L/RgNC10LTQu9C+0LbQtdC90LjRj1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQo9GB0LvRg9Cz0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQo9GB0LvRg9Cz0LhcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7QsdC90L7QstC70LXQvdC40LUg0LTQtdC60L7QtNC10YDQsFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntCx0L7RgNGD0LTQvtCy0LDQvdC40LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QtdGA0LXQtdC30LRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0KHQvtGC0YDRg9C00L3QuNGH0LXRgdGC0LLQvlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQniDRgdC+0YLRgNGD0LTQvdC10YfQtdGB0YLQstC1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCg0LXQutC70LDQvNCwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCi0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotCw0YDQuNGE0L3Ri9C1INC/0LvQsNC90YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7RgtC80LXQvdCwINGB0LTQtdC70LrQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQniDQndCw0YFcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQniDQndCw0YFcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/RgNC+IFJlZG1heFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LfRi9Cy0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JHQu9C+0LNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQkdC70L7Qs1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0J/QvtC70LXQt9C90L4g0LfQvdCw0YLRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VJUFRWINCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotC10LvQtdCy0LjQtNC10L3RjNC1INCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmNC90YLQtdGA0L3QtdGCINCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LfRi9Cy0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JrQvtC90YLQsNC60YLRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCa0L7QvdGC0LDQutGC0YtcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdC70LXRhNC+0L1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRS1NQUlMXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCb0L7QutCw0YbQuNGPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCh0L7RhtC40LDQu9GM0L3Ri9C1INGB0LXRgtC4XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUZhY2Vib29rXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUluc3RhZ3JhbVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VXaGF0cyBVcFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FjdGlvbnMtY2FsbFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXNtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcImljb24tcGhvbmUucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NwYW5cXHUwMDNFKjIxODZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWpvaW5cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLRhdC+0LRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWFjY291bnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJJY29uLXVzZXIucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutCw0YPQvdGCXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJoZXJvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX190ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLQsNGIINC00L7QvNCw0YjQvdC40Lkg0KLQkiDQnNC40YBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCR0L7Qu9C10LUgMjAwINC60LDQvdCw0LvQvtCyINC4INC+0LPRgNC+0LzQvdCw0Y8g0LHQuNCx0LvQuNC+0YLQtdC60LAg0YTQuNC70YzQvNC+0LIg0Lgg0YHQtdGA0LjQsNC70L7QsiDQstCw0Ygg0LvRg9GH0YjQuNC5INC40YHRgtC+0YfQvdC40Log0LTQvtC80LDRiNC90LXQs9C+INGA0LDQt9Cy0LvQtdGH0LXQvdC40Y8hXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FjdGlvbnNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGE0L7RgNC80LjRgtGMINC/0L7QtNC/0LjRgdC60YNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCh0LzQvtGC0YDQtdGC0Ywg0YLQsNGA0LjRhNGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX3NsaWRlclxcXCIgaWQ9XFxcImhlcm8tc2xpZGVyLWpzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fc3RhcnRlclxcXCIgaWQ9XFxcInNsaWRlci1oaWRlLWpzXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjU2XFxcIiBoZWlnaHQ9XFxcIjU2XFxcIiB2aWV3Qm94PVxcXCIwIDAgNTYgNTZcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZmlsbC1ydWxlPVxcXCJldmVub2RkXFxcIiBjbGlwLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGQ9XFxcIk0yNy41MzQ5IDAuNjgwNjc1QzI3LjIzMjEgMS4zNDgyNSAyMy4xNzI0IDEwLjQ5ODEgMjMuMDM0NyAxMC44MjUzQzIyLjk5MzQgMTAuOTE2OSAyMi44Njk2IDEwLjk5NTUgMjIuNzQ1NyAxMC45OTU1QzIyLjYzNTYgMTAuOTk1NSAyMS44OTI1IDExLjIwNDkgMjEuMTIxOCAxMS40NTM2TDE5LjY5MDYgMTEuOTExOEwxNi4zMDUyIDkuODE3MzdDMTQuNDMzNiA4LjY1MjM4IDEyLjg1MSA3LjY5Njg1IDEyLjc4MjIgNy42ODM3NkMxMi43MjcyIDcuNjcwNjggMTIuNTQ4MyA3Ljg0MDggMTIuMzk2OSA4LjA2MzM0TDEyLjEyMTYgOC40NjkxN0wxNS4xNjMgMTAuMzU0MUMxNS40NDY0IDEwLjUyOSAxNS43MDYyIDEwLjY4OTQgMTUuOTQ0NCAxMC44MzYzQzE4LjExMjggMTIuMTc0MSAxOC40ODU0IDEyLjQwNCAxOC40NTU1IDEyLjQ3MTJDMTguNDQ5MiAxMi40ODUxIDE4LjQyNTcgMTIuNDkyMSAxOC4zOTczIDEyLjUwMDVDMTguMzg0IDEyLjUwNDMgMTguMzY5OCAxMi41MDg2IDE4LjM1NTcgMTIuNTEzOUMxOC4yNzMxIDEyLjU1MzIgMTcuNTMgMTIuOTk4MyAxNi43MDQzIDEzLjUyMTlDMTQuMDc1OCAxNS4xNTggMTEuNzUwMSAxNy42MTg5IDEwLjQxNTIgMjAuMTMyMkM5LjI0NTQyIDIyLjMzMTMgOC43NSAyNC40Mzg3IDguNzUgMjcuMDk2QzguNzUgMjkuMjAzNSA4Ljk0MjY2IDMwLjIxMTQgOS43MjcwOSAzMi4zMzE5QzkuOTc0OCAzMy4wMTI2IDExLjY0IDM4LjYxNTEgMTMuNDQyOCA0NC43NjczQzE1LjIzMTggNTAuOTE5NSAxNi43MTgxIDU1Ljk3MjIgMTYuNzMxOCA1NS45OTg0QzE2Ljc3MSA1Ni4wMzU3IDE5LjA3NTEgNTUuNDM3MiAyNS42Mzk1IDUzLjY2NzFMMjIuMzM3OSA0Mi4yOTgyQzIyLjQzNzkgNDIuMzQ1OCAyMy4wODgzIDQyLjQ5ODIgMjQuODg5MSA0Mi43MjY3QzI0Ljg4OTEgNDIuNzI2NyAyNi45OTAxIDQzLjAxMjUgMjkuMjQxMyA0Mi43MjY3QzMxLjQ5MjQgNDIuNDQxIDMzLjEwODQgNDEuOTI2OCAzMy4xMDg0IDQxLjkyNjhDMzMuMTA4NCA0MS45MjY4IDM0LjY5MSA0My44NzcyIDM2LjQ1MjUgNDYuMDUwMUwzOS42NzI3IDUwLjAwMzJMNDAuNTEyMiA0OS4zNzQ5QzQwLjk4MDEgNDkuMDIxNSA0Mi40ODAyIDQ3LjkyMiA0My44NDI1IDQ2LjkyNzFDNDUuMjA1IDQ1LjkxOTIgNDYuNDAyMiA0NS4wMjkxIDQ2LjQ5ODYgNDQuOTM3NUw0MC40OTY4IDM3LjU4MzlDNDAuNjc5IDM3LjM5NjQgNDEuMDYzNyAzNi45OTIxIDQxLjE0NTMgMzYuODc0MUw0MS41NTgxIDM2LjQwMjlDNDIuMzI4NyAzNS41MzkgNDMuNjIyNCAzMy42NTQgNDQuMDkwMyAzMi42OTg1QzQ2LjU5NDkgMjcuNjMyNyA0Ni4wNzIgMjIuMDA0MSA0Mi42ODY1IDE3LjQwOTVDNDEuMjI3OCAxNS40MzI5IDM4LjM1MTYgMTMuMTgxNSAzNS45MTU4IDEyLjEyMTJDMzQuNDcwOCAxMS41MDYgMzIuNTE2NiAxMC45MyAzMC45ODkxIDEwLjY4MTNDMjkuNTg1MyAxMC40NTg4IDI1Ljk3OTggMTAuNDA2NCAyNC45NjE0IDEwLjU4OTdDMjQuNjMxMSAxMC42NTUxIDI0LjM2OTYgMTAuNjQyIDI0LjM2OTYgMTAuNTg5N0MyNC4zNjk2IDEwLjUyNDMgMjUuMzYwNSA4LjIzMzU0IDI2LjU3MTUgNS40OTc3NEMyNy43ODI1IDIuNzQ4ODcgMjguNzczNCAwLjQ3MTIzOCAyOC43NzM0IDAuNDA1Nzg4QzI4Ljc3MzQgMC4zMDEwNjkgMjguMTY3OSAwIDI3Ljk2MTQgMEMyNy44OTI3IDAgMjcuNyAwLjMxNDE1NiAyNy41MzQ5IDAuNjgwNjc1WlxcXCIgZmlsbD1cXFwiI0RGMUYyOFxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk00Ny4yNDk4IDQ0LjI5ODNDNDcuMjQ5OCA0NC4yOTgzIDQ2LjU5NDcgNDQuODQ1OSA0Ni40OTg0IDQ0LjkzNzVMNDAuNDk2NiAzNy41ODM5QzQwLjY3ODggMzcuMzk2NSA0MS4wNjM2IDM2Ljk5MjEgNDEuMTQ1MSAzNi44NzQxTDQ0LjIwMDIgNDAuNjMxQzQ3LjE0NTIgNDQuMjcgNDcuMjQ5OCA0NC4yOTgzIDQ3LjI0OTggNDQuMjk4M1pcXFwiIGZpbGw9XFxcIiMwQTg0RkZcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMjcuODEwMSA1Mi45NjE2QzI3LjgxMDEgNTMuMDI3IDI3LjMyODQgNTMuMjEwMyAyNi43NTA0IDUzLjM2NzRDMjYuMzY3MyA1My40NzA5IDI1Ljk5NyA1My41NzA3IDI1LjYzOTUgNTMuNjY3MkwyMi4zMzc5IDQyLjI5ODJDMjIuNDM3OSA0Mi4zNDU4IDIzLjA4ODMgNDIuNDk4MiAyNC44ODkxIDQyLjcyNjhDMjQuODg5MSA0Mi43MjY4IDI1LjU2NyA0NS4xNiAyNi4zNjUxIDQ3Ljg4MjdDMjcuMTYzMyA1MC42MDU0IDI3LjgxMDEgNTIuODgzIDI3LjgxMDEgNTIuOTYxNlpcXFwiIGZpbGw9XFxcIiMwQTg0RkZcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTYuMDM0NiAzMS44Njk1TDE0LjUzMzkgMjcuMDEyMkMxNC4wMzM2IDI1LjU4MzcgMTMuNjMzNCAyMi41ODM2IDE2Ljc4NSAyMS4xNTVDMTkuOTM2NSAxOS43MjY0IDI2LjUzOTggMTcuMDEyMSAyOC4wNDA1IDE2LjQ0MDdDMjkuNTQxMiAxNS44NjkyIDM0LjA0MzQgMTQuNTgzNSAzNi4xNDQ1IDIxLjE1NUwzOC41NDU2IDI4LjU4MzdDMzkuMDQ1OCAzMC4yOTggMzkuMDI1OSAzMy45MjY2IDM0Ljk0MzkgMzQuNzI2NkMzMC44NjE5IDM1LjUyNjYgMjQuNTM4OCAzNi4yNDYgMjEuODg3NCAzNi41MDU3QzE5LjAzNjEgMzYuNzg1IDE3LjI5MzIgMzUuODIzMiAxNi4wMzQ2IDMxLjg2OTVaXFxcIiBmaWxsPVxcXCIjMEE4NEZGXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIwLjExNTIgMzIuMjYwNkwxOC44Njg4IDI4LjIxOTVDMTguNDUzMyAyNy4wMzA5IDE4LjM2OTcgMjUuMDU4IDIwLjk4NzIgMjMuODY5NEMyMy42MDQ2IDIyLjY4MDggMjguODk1MiAyMC43NzM0IDMwLjE0MTYgMjAuMjk4QzMxLjM4OCAxOS44MjI1IDM1LjYwMDIgMTcuODc5MSAzNy4zNDUxIDIzLjM0NjRMMzguODExMSAyOS41MjdDMzkuMjI2NiAzMC45NTMyIDM4LjI0NTYgMzMuOTk5IDM1Ljk5NDUgMzQuNDQxQzMxLjc5MjQgMzUuMjY1OSAyNy4xNzgxIDM1LjkwMTkgMjQuOTc2MSAzNi4xMTc5QzIyLjYwOCAzNi4zNTAzIDIxLjE2MDUgMzUuNTUgMjAuMTE1MiAzMi4yNjA2WlxcXCIgZmlsbD1cXFwid2hpdGVcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMjMuMDg4NCAyNy44Njk0TDI5LjM5MTQgMjYuMTU1MUwzMS42NDI1IDI5LjU4MzdWMjUuNTgzNkwzMi45OTMyIDI1LjE1NTFMMzIuODQzMSAzMS4wMTIzTDMxLjM0MjQgMzEuNDQwOUwyNy44MTU2IDI2LjU4MzZMMjguMDQwOCAyNy41ODM3TDI2LjM4OTkgMjguMDEyM0wyNy41OTA1IDMyLjI5OEwyNi4zODk5IDMyLjU4MzhMMjUuMDM5MyAyOC40NDA4TDIzLjM4ODUgMjguODY5NEwyMy4wODg0IDI3Ljg2OTRaXFxcIiBmaWxsPVxcXCIjMEE4NEZGXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgnbG9nby10ZXh0LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ2cgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAwXzUzMl8xNzUxKVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIzLjcwNjggMjIuNTAzN0wxNy43Mzc4IDE2LjUzNDdDMTkuMzY0NCAxNC41NDUzIDIwLjE2NDIgMTIuMDA2OCAxOS45NzE2IDkuNDQ0MjhDMTkuNzc5MSA2Ljg4MTc1IDE4LjYwOSA0LjQ5MTI1IDE2LjcwMzQgMi43NjcyNEMxNC43OTc3IDEuMDQzMjMgMTIuMzAyNCAwLjExNzYxMiA5LjczMzQyIDAuMTgxODQ0QzcuMTY0NDcgMC4yNDYwNzUgNC43MTg0OCAxLjI5NTI0IDIuOTAxNCAzLjExMjMzQzEuMDg0MzEgNC45Mjk0MiAwLjAzNTEzNzggNy4zNzU0MSAtMC4wMjkwOTQgOS45NDQzNkMtMC4wOTMzMjU4IDEyLjUxMzMgMC44MzIyOTIgMTUuMDA4NyAyLjU1NjMgMTYuOTE0M0M0LjI4MDMxIDE4LjgxOTkgNi42NzA4MSAxOS45OSA5LjIzMzM0IDIwLjE4MjZDMTEuNzk1OSAyMC4zNzUxIDE0LjMzNDQgMTkuNTc1MyAxNi4zMjM4IDE3Ljk0ODdMMjIuMjkyOCAyMy45MTc3QzIyLjQ4MTQgMjQuMDk5OSAyMi43MzQgMjQuMjAwNyAyMi45OTYyIDI0LjE5ODRDMjMuMjU4NCAyNC4xOTYxIDIzLjUwOTIgMjQuMDkwOSAyMy42OTQ2IDIzLjkwNTVDMjMuODggMjMuNzIwMSAyMy45ODUyIDIzLjQ2OTMgMjMuOTg3NSAyMy4yMDcxQzIzLjk4OTcgMjIuOTQ0OSAyMy44ODg5IDIyLjY5MjMgMjMuNzA2OCAyMi41MDM3Wk05Ljk5OTc4IDE4LjIxMDdDOC40MTc1MyAxOC4yMTA3IDYuODcwODEgMTcuNzQxNSA1LjU1NTIyIDE2Ljg2MjVDNC4yMzk2MyAxNS45ODM0IDMuMjE0MjUgMTQuNzM0IDIuNjA4NzUgMTMuMjcyMkMyLjAwMzI0IDExLjgxMDQgMS44NDQ4MiAxMC4yMDE4IDIuMTUzNSA4LjY1QzIuNDYyMTggNy4wOTgxNSAzLjIyNDExIDUuNjcyNjkgNC4zNDI5MyA0LjU1Mzg2QzUuNDYxNzUgMy40MzUwNCA2Ljg4NzIxIDIuNjczMTIgOC40MzkwNiAyLjM2NDQ0QzkuOTkwOTEgMi4wNTU3NiAxMS41OTk0IDIuMjE0MTggMTMuMDYxMiAyLjgxOTY4QzE0LjUyMzEgMy40MjUxOCAxNS43NzI1IDQuNDUwNTYgMTYuNjUxNSA1Ljc2NjE2QzE3LjUzMDYgNy4wODE3NSAxNy45OTk4IDguNjI4NDcgMTcuOTk5OCAxMC4yMTA3QzE3Ljk5NzQgMTIuMzMxNyAxNy4xNTM4IDE0LjM2NTIgMTUuNjU0IDE1Ljg2NDlDMTQuMTU0MiAxNy4zNjQ3IDEyLjEyMDggMTguMjA4MyA5Ljk5OTc4IDE4LjIxMDdaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NkZWZzXFx1MDAzRVxcblxcdTAwM0NjbGlwUGF0aCBpZD1cXFwiY2xpcDBfNTMyXzE3NTFcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAgMC4yMTAwMjIpXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZjbGlwUGF0aFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRlZnNcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C+0LjRgdC6XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaXRlbVxcXCIgaWQ9XFxcInNsaWRlci1ob21lLWJ0bi1qc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pY29uXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI1XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMy4xMjEgOS4yNzg5NUwxNS41MzYgMS42OTI5NUMxNC41OTczIDAuNzU2OTM5IDEzLjMyNTcgMC4yMzEzMjMgMTIgMC4yMzEzMjNDMTAuNjc0NCAwLjIzMTMyMyA5LjQwMjc3IDAuNzU2OTM5IDguNDY0MDEgMS42OTI5NUwwLjg3OTAxMiA5LjI3ODk1QzAuNTk5NDM4IDkuNTU2NzMgMC4zNzc3ODIgOS44ODcyNSAwLjIyNjg5NSAxMC4yNTEzQzAuMDc2MDA3MiAxMC42MTU0IC0wLjAwMTExMDQgMTEuMDA1OCAxLjIwNzk1ZS0wNSAxMS4zOTk5VjIxLjIxNjlDMS4yMDc5NWUtMDUgMjIuMDEyNiAwLjMxNjA4MyAyMi43NzU3IDAuODc4NjkyIDIzLjMzODNDMS40NDEzIDIzLjkwMDkgMi4yMDQzNiAyNC4yMTY5IDMuMDAwMDEgMjQuMjE2OUgyMUMyMS43OTU3IDI0LjIxNjkgMjIuNTU4NyAyMy45MDA5IDIzLjEyMTMgMjMuMzM4M0MyMy42ODM5IDIyLjc3NTcgMjQgMjIuMDEyNiAyNCAyMS4yMTY5VjExLjM5OTlDMjQuMDAxMSAxMS4wMDU4IDIzLjkyNCAxMC42MTU0IDIzLjc3MzEgMTAuMjUxM0MyMy42MjIyIDkuODg3MjUgMjMuNDAwNiA5LjU1NjczIDIzLjEyMSA5LjI3ODk1Wk0xNSAyMi4yMTY5SDkuMDAwMDFWMTguMjgyOUM5LjAwMDAxIDE3LjQ4NzMgOS4zMTYwOCAxNi43MjQyIDkuODc4NjkgMTYuMTYxNkMxMC40NDEzIDE1LjU5OSAxMS4yMDQ0IDE1LjI4MjkgMTIgMTUuMjgyOUMxMi43OTU3IDE1LjI4MjkgMTMuNTU4NyAxNS41OTkgMTQuMTIxMyAxNi4xNjE2QzE0LjY4MzkgMTYuNzI0MiAxNSAxNy40ODczIDE1IDE4LjI4MjlWMjIuMjE2OVpNMjIgMjEuMjE2OUMyMiAyMS40ODIyIDIxLjg5NDcgMjEuNzM2NSAyMS43MDcxIDIxLjkyNDFDMjEuNTE5NiAyMi4xMTE2IDIxLjI2NTIgMjIuMjE2OSAyMSAyMi4yMTY5SDE3VjE4LjI4MjlDMTcgMTYuOTU2OSAxNi40NzMyIDE1LjY4NTEgMTUuNTM1NSAxNC43NDc0QzE0LjU5NzkgMTMuODA5NyAxMy4zMjYxIDEzLjI4MjkgMTIgMTMuMjgyOUMxMC42NzM5IDEzLjI4MjkgOS40MDIxNiAxMy44MDk3IDguNDY0NDggMTQuNzQ3NEM3LjUyNjggMTUuNjg1MSA3LjAwMDAxIDE2Ljk1NjkgNy4wMDAwMSAxOC4yODI5VjIyLjIxNjlIMy4wMDAwMUMyLjczNDggMjIuMjE2OSAyLjQ4MDQ0IDIyLjExMTYgMi4yOTI5MSAyMS45MjQxQzIuMTA1MzcgMjEuNzM2NSAyLjAwMDAxIDIxLjQ4MjIgMi4wMDAwMSAyMS4yMTY5VjExLjM5OTlDMi4wMDA5NCAxMS4xMzQ5IDIuMTA2MiAxMC44ODA5IDIuMjkzMDEgMTAuNjkyOUw5Ljg3ODAxIDMuMTA5OTVDMTAuNDQxNyAyLjU0ODg4IDExLjIwNDcgMi4yMzM4OSAxMiAyLjIzMzg5QzEyLjc5NTMgMi4yMzM4OSAxMy41NTgzIDIuNTQ4ODggMTQuMTIyIDMuMTA5OTVMMjEuNzA3IDEwLjY5NTlDMjEuODkzMSAxMC44ODMyIDIxLjk5ODMgMTEuMTM2IDIyIDExLjM5OTlWMjEuMjE2OVpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCT0LvQsNCy0L3QsNGPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaXRlbVxcXCIgaWQ9XFxcInNsaWRlci10di1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTkgMS4yMDk3Mkg1QzMuNjc0NDEgMS4yMTEzIDIuNDAzNTYgMS43Mzg2IDEuNDY2MjIgMi42NzU5NEMwLjUyODg4MiAzLjYxMzI3IDAuMDAxNTg3ODYgNC44ODQxMiAwIDYuMjA5NzJWMTQuMjA5N0MwLjAwMTU4Nzg2IDE1LjUzNTMgMC41Mjg4ODIgMTYuODA2MiAxLjQ2NjIyIDE3Ljc0MzVDMi40MDM1NiAxOC42ODA4IDMuNjc0NDEgMTkuMjA4MSA1IDE5LjIwOTdIMTFWMjEuMjA5N0g3QzYuNzM0NzggMjEuMjA5NyA2LjQ4MDQzIDIxLjMxNTEgNi4yOTI4OSAyMS41MDI2QzYuMTA1MzYgMjEuNjkwMSA2IDIxLjk0NDUgNiAyMi4yMDk3QzYgMjIuNDc0OSA2LjEwNTM2IDIyLjcyOTMgNi4yOTI4OSAyMi45MTY4QzYuNDgwNDMgMjMuMTA0NCA2LjczNDc4IDIzLjIwOTcgNyAyMy4yMDk3SDE3QzE3LjI2NTIgMjMuMjA5NyAxNy41MTk2IDIzLjEwNDQgMTcuNzA3MSAyMi45MTY4QzE3Ljg5NDYgMjIuNzI5MyAxOCAyMi40NzQ5IDE4IDIyLjIwOTdDMTggMjEuOTQ0NSAxNy44OTQ2IDIxLjY5MDEgMTcuNzA3MSAyMS41MDI2QzE3LjUxOTYgMjEuMzE1MSAxNy4yNjUyIDIxLjIwOTcgMTcgMjEuMjA5N0gxM1YxOS4yMDk3SDE5QzIwLjMyNTYgMTkuMjA4MSAyMS41OTY0IDE4LjY4MDggMjIuNTMzOCAxNy43NDM1QzIzLjQ3MTEgMTYuODA2MiAyMy45OTg0IDE1LjUzNTMgMjQgMTQuMjA5N1Y2LjIwOTcyQzIzLjk5ODQgNC44ODQxMiAyMy40NzExIDMuNjEzMjcgMjIuNTMzOCAyLjY3NTk0QzIxLjU5NjQgMS43Mzg2IDIwLjMyNTYgMS4yMTEzIDE5IDEuMjA5NzJaTTUgMy4yMDk3MkgxOUMxOS43OTU2IDMuMjA5NzIgMjAuNTU4NyAzLjUyNTc5IDIxLjEyMTMgNC4wODg0QzIxLjY4MzkgNC42NTEwMSAyMiA1LjQxNDA3IDIyIDYuMjA5NzJWMTMuMjA5N0gyVjYuMjA5NzJDMiA1LjQxNDA3IDIuMzE2MDcgNC42NTEwMSAyLjg3ODY4IDQuMDg4NEMzLjQ0MTI5IDMuNTI1NzkgNC4yMDQzNSAzLjIwOTcyIDUgMy4yMDk3MlpNMTkgMTcuMjA5N0g1QzQuMzgxNzQgMTcuMjA3MiAzLjc3OTM3IDE3LjAxMzYgMy4yNzUzIDE2LjY1NTZDMi43NzEyMyAxNi4yOTc2IDIuMzkwMDggMTUuNzkyNiAyLjE4NCAxNS4yMDk3SDIxLjgxNkMyMS42MDk5IDE1Ljc5MjYgMjEuMjI4OCAxNi4yOTc2IDIwLjcyNDcgMTYuNjU1NkMyMC4yMjA2IDE3LjAxMzYgMTkuNjE4MyAxNy4yMDcyIDE5IDE3LjIwOTdaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotC10LvQtdC60LDQvdCw0LvRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiIGlkPVxcXCJzbGlkZXItbW92aWUtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ2cgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAwXzUzMl8xNzYwKVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE5IDAuMjEwMDIySDVDMy42NzQ0MSAwLjIxMTYxIDIuNDAzNTYgMC43Mzg5MDQgMS40NjYyMiAxLjY3NjI0QzAuNTI4ODgyIDIuNjEzNTggMC4wMDE1ODc4NiAzLjg4NDQzIDAgNS4yMTAwMlYxOS4yMUMwLjAwMTU4Nzg2IDIwLjUzNTYgMC41Mjg4ODIgMjEuODA2NSAxLjQ2NjIyIDIyLjc0MzhDMi40MDM1NiAyMy42ODExIDMuNjc0NDEgMjQuMjA4NCA1IDI0LjIxSDE5QzIwLjMyNTYgMjQuMjA4NCAyMS41OTY0IDIzLjY4MTEgMjIuNTMzOCAyMi43NDM4QzIzLjQ3MTEgMjEuODA2NSAyMy45OTg0IDIwLjUzNTYgMjQgMTkuMjFWNS4yMTAwMkMyMy45OTg0IDMuODg0NDMgMjMuNDcxMSAyLjYxMzU4IDIyLjUzMzggMS42NzYyNEMyMS41OTY0IDAuNzM4OTA0IDIwLjMyNTYgMC4yMTE2MSAxOSAwLjIxMDAyMlpNMjAgMTEuMjFIMjJWMTMuMjFIMjBWMTEuMjFaTTIwIDkuMjEwMDJWNy4yMTAwMkgyMlY5LjIxMDAySDIwWk0xOCAxMS4yMUg2VjIuMjEwMDJIMThWMTEuMjFaTTQgMTMuMjFIMlYxMS4yMUg0VjEzLjIxWk00IDkuMjEwMDJIMlY3LjIxMDAySDRWOS4yMTAwMlpNMiAxNS4yMUg0VjE3LjIxSDJWMTUuMjFaTTYgMTMuMjFIMThWMjIuMjFINlYxMy4yMVpNMjAgMTUuMjFIMjJWMTcuMjFIMjBWMTUuMjFaTTIyIDUuMjEwMDJIMjBWMi4zOTQwMkMyMC41ODI5IDIuNjAwMTEgMjEuMDg3OSAyLjk4MTI1IDIxLjQ0NTkgMy40ODUzMkMyMS44MDM5IDMuOTg5MzkgMjEuOTk3NCA0LjU5MTc2IDIyIDUuMjEwMDJaTTQgMi4zOTQwMlY1LjIxMDAySDJDMi4wMDI1NiA0LjU5MTc2IDIuMTk2MDggMy45ODkzOSAyLjU1NDA5IDMuNDg1MzJDMi45MTIwOSAyLjk4MTI1IDMuNDE3MDkgMi42MDAxMSA0IDIuMzk0MDJaTTIgMTkuMjFINFYyMi4wMjZDMy40MTcwOSAyMS44MTk5IDIuOTEyMDkgMjEuNDM4OCAyLjU1NDA5IDIwLjkzNDdDMi4xOTYwOCAyMC40MzA3IDIuMDAyNTYgMTkuODI4MyAyIDE5LjIxWk0yMCAyMi4wMjZWMTkuMjFIMjJDMjEuOTk3NCAxOS44MjgzIDIxLjgwMzkgMjAuNDMwNyAyMS40NDU5IDIwLjkzNDdDMjEuMDg3OSAyMS40Mzg4IDIwLjU4MjkgMjEuODE5OSAyMCAyMi4wMjZaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NkZWZzXFx1MDAzRVxcblxcdTAwM0NjbGlwUGF0aCBpZD1cXFwiY2xpcDBfNTMyXzE3NjBcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAgMC4yMTAwMjIpXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZjbGlwUGF0aFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRlZnNcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtC40L3QvtC30LDQu1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiIGlkPVxcXCJzbGlkZXItYXJjaC1idG4tanNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjNcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyM1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTkgMi4yMTAyMUgxMi40NzJDMTIuMzE3MyAyLjIxMTIzIDEyLjE2NDUgMi4xNzcwMyAxMi4wMjUgMi4xMTAyMUw4Ljg2OSAwLjUyNjIwNUM4LjQ1MjM5IDAuMzE4NzUgNy45OTM0IDAuMjEwNTkxIDcuNTI4IDAuMjEwMjA1SDVDMy42NzQ0MSAwLjIxMTc5MyAyLjQwMzU2IDAuNzM5MDg3IDEuNDY2MjIgMS42NzY0M0MwLjUyODg4MiAyLjYxMzc2IDAuMDAxNTg3ODYgMy44ODQ2MSAwIDUuMjEwMjFWMTcuMjEwMkMwLjAwMTU4Nzg2IDE4LjUzNTggMC41Mjg4ODIgMTkuODA2NyAxLjQ2NjIyIDIwLjc0NEMyLjQwMzU2IDIxLjY4MTMgMy42NzQ0MSAyMi4yMDg2IDUgMjIuMjEwMkgxOUMyMC4zMjU2IDIyLjIwODYgMjEuNTk2NCAyMS42ODEzIDIyLjUzMzggMjAuNzQ0QzIzLjQ3MTEgMTkuODA2NyAyMy45OTg0IDE4LjUzNTggMjQgMTcuMjEwMlY3LjIxMDIxQzIzLjk5ODQgNS44ODQ2MSAyMy40NzExIDQuNjEzNzYgMjIuNTMzOCAzLjY3NjQzQzIxLjU5NjQgMi43MzkwOSAyMC4zMjU2IDIuMjExNzkgMTkgMi4yMTAyMVpNNSAyLjIxMDIxSDcuNTI4QzcuNjgyNjYgMi4yMDkxOCA3LjgzNTUyIDIuMjQzMzggNy45NzUgMi4zMTAyMUwxMS4xMzEgMy44ODkyMUMxMS41NDcyIDQuMDk4MzkgMTIuMDA2MiA0LjIwODI3IDEyLjQ3MiA0LjIxMDIxSDE5QzE5LjU5OCA0LjIxMTE4IDIwLjE4MjEgNC4zOTA4OCAyMC42NzczIDQuNzI2MjJDMjEuMTcyNSA1LjA2MTU2IDIxLjU1NjEgNS41MzcyNSAyMS43NzkgNi4wOTIyMUwyIDYuMjA0MjFWNS4yMTAyMUMyIDQuNDE0NTYgMi4zMTYwNyAzLjY1MTQ5IDIuODc4NjggMy4wODg4OUMzLjQ0MTI5IDIuNTI2MjggNC4yMDQzNSAyLjIxMDIxIDUgMi4yMTAyMVpNMTkgMjAuMjEwMkg1QzQuMjA0MzUgMjAuMjEwMiAzLjQ0MTI5IDE5Ljg5NDEgMi44Nzg2OCAxOS4zMzE1QzIuMzE2MDcgMTguNzY4OSAyIDE4LjAwNTkgMiAxNy4yMTAyVjguMjA0MjFMMjIgOC4wOTEyMVYxNy4yMTAyQzIyIDE4LjAwNTkgMjEuNjgzOSAxOC43Njg5IDIxLjEyMTMgMTkuMzMxNUMyMC41NTg3IDE5Ljg5NDEgMTkuNzk1NiAyMC4yMTAyIDE5IDIwLjIxMDJaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNGA0YXQuNCyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaXRlbVxcXCIgaWQ9XFxcInNsaWRlci1mYXYtYnRuLWpzXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjIyXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE3LjUgMC4xMjY0NjVDMTYuMzczOSAwLjE0Mzk4IDE1LjI3MjQgMC40NTgzMTggMTQuMzA2NyAxLjAzNzc0QzEzLjM0MSAxLjYxNzE1IDEyLjU0NTMgMi40NDExMyAxMiAzLjQyNjQ2QzExLjQ1NDYgMi40NDExMyAxMC42NTg5IDEuNjE3MTUgOS42OTMyIDEuMDM3NzRDOC43Mjc1IDAuNDU4MzE4IDcuNjI2MDEgMC4xNDM5OCA2LjQ5OTk2IDAuMTI2NDY1QzQuNzA0OSAwLjIwNDQ1NiAzLjAxMzY2IDAuOTg5NzE5IDEuNzk1NzQgMi4zMTA3QzAuNTc3ODE4IDMuNjMxNjggLTAuMDY3NzkyMiA1LjM4MDk5IC00LjE3MDg4ZS0wNSA3LjE3NjQ2Qy00LjE3MDg4ZS0wNSAxMS43MjM1IDQuNzg1OTYgMTYuNjg5NSA4Ljc5OTk2IDIwLjA1NjVDOS42OTYxOCAyMC44MDk2IDEwLjgyOTMgMjEuMjIyNSAxMiAyMS4yMjI1QzEzLjE3MDYgMjEuMjIyNSAxNC4zMDM3IDIwLjgwOTYgMTUuMiAyMC4wNTY1QzE5LjIxNCAxNi42ODk1IDI0IDExLjcyMzUgMjQgNy4xNzY0NkMyNC4wNjc3IDUuMzgwOTkgMjMuNDIyMSAzLjYzMTY4IDIyLjIwNDIgMi4zMTA3QzIwLjk4NjMgMC45ODk3MTkgMTkuMjk1IDAuMjA0NDU2IDE3LjUgMC4xMjY0NjVaTTEzLjkxNSAxOC41MjY1QzEzLjM3ODkgMTguOTc3OCAxMi43MDA3IDE5LjIyNTQgMTIgMTkuMjI1NEMxMS4yOTkyIDE5LjIyNTQgMTAuNjIxIDE4Ljk3NzggMTAuMDg1IDE4LjUyNjVDNC45NDY5NiAxNC4yMTU1IDEuOTk5OTYgMTAuMDc5NSAxLjk5OTk2IDcuMTc2NDZDMS45MzE2IDUuOTExMTggMi4zNjYzMiA0LjY3MDE5IDMuMjA5MzIgMy43MjQxNkM0LjA1MjMyIDIuNzc4MTMgNS4yMzUxOSAyLjIwMzgxIDYuNDk5OTYgMi4xMjY0NkM3Ljc2NDcyIDIuMjAzODEgOC45NDc2IDIuNzc4MTMgOS43OTA2IDMuNzI0MTZDMTAuNjMzNiA0LjY3MDE5IDExLjA2ODMgNS45MTExOCAxMSA3LjE3NjQ2QzExIDcuNDQxNjggMTEuMTA1MyA3LjY5NjAzIDExLjI5MjkgNy44ODM1N0MxMS40ODA0IDguMDcxMTEgMTEuNzM0NyA4LjE3NjQ2IDEyIDguMTc2NDZDMTIuMjY1MiA4LjE3NjQ2IDEyLjUxOTUgOC4wNzExMSAxMi43MDcxIDcuODgzNTdDMTIuODk0NiA3LjY5NjAzIDEzIDcuNDQxNjggMTMgNy4xNzY0NkMxMi45MzE2IDUuOTExMTggMTMuMzY2MyA0LjY3MDE5IDE0LjIwOTMgMy43MjQxNkMxNS4wNTIzIDIuNzc4MTMgMTYuMjM1MiAyLjIwMzgxIDE3LjUgMi4xMjY0NkMxOC43NjQ3IDIuMjAzODEgMTkuOTQ3NiAyLjc3ODEzIDIwLjc5MDYgMy43MjQxNkMyMS42MzM2IDQuNjcwMTkgMjIuMDY4MyA1LjkxMTE4IDIyIDcuMTc2NDZDMjIgMTAuMDc5NSAxOS4wNTMgMTQuMjE1NSAxMy45MTUgMTguNTIyNVYxOC41MjY1WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JjQt9Cx0YDQsNC90L3QvtC1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fY29udGVudFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19ob21lXFxcIiBpZD1cXFwic2xpZGVyLWhvbWUtanNcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwic2xpZGVyLWhvbWUyLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fdHZcXFwiIGlkPVxcXCJzbGlkZXItdHYtanNcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwic2xpZGVyLXR2Mi5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2NpbmVtYVxcXCIgaWQ9XFxcInNsaWRlci1jaW5lbWEtanNcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwic2xpZGVyLWNpbmVtYTIucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hcmNpdmVcXFwiIGlkPVxcXCJzbGlkZXItYXJjaXZlLWpzXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcInNsaWRlci1hcmNpdmUyLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fZmF2XFxcIiBpZD1cXFwic2xpZGVyLWZhdi1qc1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJzbGlkZXItZmF2b3RpdGUucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19zdGFydGVyXFxcIiBpZD1cXFwic2xpZGVyLXN0YXJ0ZXItanNcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpbm5lcnNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNwaW5uZXIgc3Bpbm5lci0tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlMVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWcxLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlMlxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWcyLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlM1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWczLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlNFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc0LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlNVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc1LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlNlxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc2LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlN1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc3LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1sLWltYWdlOFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc4LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3Bpbm5lciBzcGlubmVyLS1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlMVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWcxLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlMlxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWcyLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlM1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWczLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlNFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc0LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlNVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc1LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlNlxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc2LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlN1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc3LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3BpbmVyX19pbWFnZVxcXCIgaWQ9XFxcInNwaW5lci1yLWltYWdlOFxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3NwaW5lci1pbWc4LnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ3NlY3Rpb24gY2xhc3M9XFxcInByb21vXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJwcm9tb19fd3JhcHBlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicHJvbW9fX3RpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4INC4INC/0YDQtdC00LvQvtC20LXQvdC40Y9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwicHJvbW9fX3NsaWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3dpcGVyLXBhZ2luYXRpb25cXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN3aXBlciBteVN3aXBlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3dpcGVyLXdyYXBwZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInN3aXBlci1zbGlkZVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oJ3Byb21vLTEucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzd2lwZXItc2xpZGVcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdwcm9tby0xLnBuZycpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic3dpcGVyLXNsaWRlXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXSgncHJvbW8tMS5wbmcnKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInByb21vX19saW5lXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIxMjU0XFxcIiBoZWlnaHQ9XFxcIjkxN1xcXCIgdmlld0JveD1cXFwiMCAwIDEyNTQgOTE3XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIG9wYWNpdHk9XFxcIjAuNVxcXCIgZD1cXFwiTTAuNjY2NjY3IDZDMC42NjY2NjcgOC45NDU1MiAzLjA1NDQ4IDExLjMzMzMgNiAxMS4zMzMzQzguOTQ1NTIgMTEuMzMzMyAxMS4zMzMzIDguOTQ1NTIgMTEuMzMzMyA2QzExLjMzMzMgMy4wNTQ0OCA4Ljk0NTUyIDAuNjY2NjY3IDYgMC42NjY2NjdDMy4wNTQ0OCAwLjY2NjY2NyAwLjY2NjY2NyAzLjA1NDQ4IDAuNjY2NjY3IDZaTTYgN0gxMTgzVjVINlY3Wk0xMjUyIDc2VjkxNi41SDEyNTRWNzZIMTI1MlpNMTE4MyA3QzEyMjEuMTEgNyAxMjUyIDM3Ljg5MjQgMTI1MiA3NkgxMjU0QzEyNTQgMzYuNzg3OCAxMjIyLjIxIDUgMTE4MyA1VjdaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vcGFydHMvZm9vdGVyLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgXCJcXHUwMDNDIS0tIFNjcmlwdCBmb3IgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ3NjcmlwdCBzcmM9XFxcImh0dHBzOlxcdTAwMkZcXHUwMDJGY2RuLmpzZGVsaXZyLm5ldFxcdTAwMkZucG1cXHUwMDJGc3dpcGVyQDExXFx1MDAyRnN3aXBlci1idW5kbGUubWluLmpzXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNjcmlwdFxcdTAwM0VcXHUwMDNDIS0tIEluaXRpYWxpemUgU3dpcGVyLS1cXHUwMDNFXFx1MDAzQ3NjcmlwdFxcdTAwM0V2YXIgc3dpcGVyID0gbmV3IFN3aXBlcihcXFwiLm15U3dpcGVyXFxcIiwge1xcbiAgZGlyZWN0aW9uOiBcXFwidmVydGljYWxcXFwiLFxcbiAgc2xpZGVzUGVyVmlldzogMSxcXG4gIHNwYWNlQmV0d2VlbjogMzAsXFxuICBtb3VzZXdoZWVsOiB0cnVlLFxcbiAgcGFnaW5hdGlvbjoge1xcbiAgICBlbDogXFxcIi5zd2lwZXItcGFnaW5hdGlvblxcXCIsXFxuICAgIGNsaWNrYWJsZTogdHJ1ZSxcXG4gIH0sXFxufSk7XFx1MDAzQ1xcdTAwMkZzY3JpcHRcXHUwMDNFXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIGZpcnN0TG9hZCgpIHtcbiAgICAvLyBRdWVyeWluZyBidXR0b24gYW5kIGNvbnRlbnQgZWxlbWVudHNcbiAgICB2YXIgc2xpZGVySG9tZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWhvbWUtYnRuLWpzXCIpO1xuICAgIHZhciBzbGlkZXJUdkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLXR2LWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyTW92aWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1tb3ZpZS1idG4tanNcIik7XG4gICAgdmFyIHNsaWRlckFyY2hCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1hcmNoLWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVyRmF2QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItZmF2LWJ0bi1qc1wiKTtcbiAgICB2YXIgc2xpZGVySG9tZUNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci1ob21lLWpzXCIpO1xuICAgIHZhciBzbGlkZXJUdkJ0bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NsaWRlci10di1qc1wiKTtcbiAgICB2YXIgc2xpZGVyTW92aWVDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzbGlkZXItY2luZW1hLWpzXCIpO1xuICAgIHZhciBzbGlkZXJBcmNoQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWFyY2l2ZS1qc1wiKTtcbiAgICB2YXIgc2xpZGVyRmF2Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2xpZGVyLWZhdi1qc1wiKTtcbiAgICAvLyBHcm91cGluZyBidXR0b25zIGFuZCBjb250ZW50cyBpbnRvIGFycmF5c1xuICAgIHZhciBidXR0b25zID0gW3NsaWRlckhvbWVCdG4sIHNsaWRlclR2QnRuLCBzbGlkZXJNb3ZpZUJ0biwgc2xpZGVyQXJjaEJ0biwgc2xpZGVyRmF2QnRuXTtcbiAgICB2YXIgY29udGVudHMgPSBbc2xpZGVySG9tZUNvbnRlbnQsIHNsaWRlclR2QnRuQ29udGVudCwgc2xpZGVyTW92aWVDb250ZW50LCBzbGlkZXJBcmNoQ29udGVudCwgc2xpZGVyRmF2Q29udGVudF07XG4gICAgLy8gSW5pdGlhbCBhY3RpdmUgc3RhdGUgZm9yIHRoZSBob21lIGJ1dHRvbiBhbmQgY29udGVudFxuICAgIGlmIChzbGlkZXJIb21lQnRuKSB7XG4gICAgICAgIHNsaWRlckhvbWVCdG4uY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICAgICAgc2xpZGVySG9tZUNvbnRlbnQuY2xhc3NMaXN0LmFkZChcInZpc2libGVcIik7XG4gICAgfVxuICAgIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgYnV0dG9uc1xuICAgIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uLCBpbmRleCkge1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIGhhbmRsZUNsaWNrKGJ1dHRvbiwgY29udGVudHNbaW5kZXhdKTsgfSk7XG4gICAgfSk7XG4gICAgLy8gSGFuZGxlIGNsaWNrIGZ1bmN0aW9uIHRvIHRvZ2dsZSBhY3RpdmUgYW5kIHZpc2libGUgY2xhc3Nlc1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGJ1dHRvbiwgY29udGVudCkge1xuICAgICAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ0bikge1xuICAgICAgICAgICAgaWYgKGJ0biAhPT0gYnV0dG9uKVxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29udGVudHMuZm9yRWFjaChmdW5jdGlvbiAoY29udCkge1xuICAgICAgICAgICAgaWYgKGNvbnQgIT09IGNvbnRlbnQpXG4gICAgICAgICAgICAgICAgY29udC5jbGFzc0xpc3QucmVtb3ZlKFwidmlzaWJsZVwiKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoXCJ2aXNpYmxlXCIpO1xuICAgIH1cbiAgICAvLyBDaGVjayBpZiBlbGVtZW50IGlzIHZpc2libGUgaW4gdGhlIHZpZXdwb3J0XG4gICAgZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZShlbGVtZW50KSB7XG4gICAgICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgcmV0dXJuIHJlY3QudG9wID49IDAgJiYgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgICAgIHJlY3QuYm90dG9tIDw9ICh3aW5kb3cuaW5uZXJIZWlnaHQgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCkgJiZcbiAgICAgICAgICAgIHJlY3QucmlnaHQgPD0gKHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgfVxuICAgIC8vIE9uIHNjcm9sbCwgY2hlY2sgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGVsZW1lbnQgYW5kIHNob3cgdGhlIGFzaWRlIHBhbmVsXG4gICAgZnVuY3Rpb24gY2hlY2tWaXNpYmlsaXR5T25TY3JvbGwoKSB7XG4gICAgICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzbGlkZXItc3RhcnRlci1qc1wiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgJiYgaXNFbGVtZW50VmlzaWJsZShlbGVtZW50KSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5zbGlkZXJfX2FzaWRlLXRleHRcIikuZm9yRWFjaChmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgY2hlY2tWaXNpYmlsaXR5T25TY3JvbGwpO1xuICAgIC8vIEF1dG9tYXRpYyBzd2l0Y2ggYmV0d2VlbiBidXR0b25zXG4gICAgdmFyIGF1dG9Td2l0Y2ggPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhY3RpdmVJbmRleCA9IGJ1dHRvbnMuZmluZEluZGV4KGZ1bmN0aW9uIChidG4pIHsgcmV0dXJuIGJ0bi5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIik7IH0pO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gKGFjdGl2ZUluZGV4ICsgMSkgJSBidXR0b25zLmxlbmd0aDtcbiAgICAgICAgaGFuZGxlQ2xpY2soYnV0dG9uc1tuZXh0SW5kZXhdLCBjb250ZW50c1tuZXh0SW5kZXhdKTtcbiAgICB9LCAyMjAwKTtcbiAgICAvLyBDbGVhciBpbnRlcnZhbCBvbiBidXR0b24gY2xpY2sgYW5kIGNhbGwgaGFuZGxlQ2xpY2tcbiAgICBidXR0b25zLmZvckVhY2goZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKGF1dG9Td2l0Y2gpO1xuICAgICAgICAgICAgaGFuZGxlQ2xpY2soYnV0dG9uLCBjb250ZW50c1tpbmRleF0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cbiIsImltcG9ydCB7IGZpcnN0TG9hZCB9IGZyb20gJy4vaG9tZS1wYWdlJztcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgLy8g0JLRi9C30L7QsiDRhNGD0L3QutGG0LjQuCBzaG93XG4gICAgZmlyc3RMb2FkKCk7XG59KTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9JY29uLWF0dGVudGlvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tYXR0ZW50aW9uLnN2Z1wiLFxuXHRcIi4vSWNvbi1mYXZvcml0ZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZmF2b3JpdGUuc3ZnXCIsXG5cdFwiLi9JY29uLWZvbGRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZm9sZGVyLnN2Z1wiLFxuXHRcIi4vSWNvbi1ncm91cC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZ3JvdXAuc3ZnXCIsXG5cdFwiLi9JY29uLWhvbWUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWhvbWUuc3ZnXCIsXG5cdFwiLi9JY29uLW1vdmllLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1tb3ZpZS5zdmdcIixcblx0XCIuL0ljb24tc2VhcmNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZWFyY2guc3ZnXCIsXG5cdFwiLi9JY29uLXNldHRpbmdzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZXR0aW5ncy5zdmdcIixcblx0XCIuL0ljb24tdHYuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXR2LnN2Z1wiLFxuXHRcIi4vSWNvbi11c2VyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi11c2VyLnBuZ1wiLFxuXHRcIi4vSWNvbnMtdXNlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb25zLXVzZXIuc3ZnXCIsXG5cdFwiLi9Mb2dvLXN2Zy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28tc3ZnLnN2Z1wiLFxuXHRcIi4vTG9nby5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28ucG5nXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2hlYXJ0LXN0YXJ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtc3RhcnQuc3ZnXCIsXG5cdFwiLi9oZWFydC1zdGFydF8xLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtc3RhcnRfMS5zdmdcIixcblx0XCIuL2hlYXJ0LXRvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaGVhcnQtdG8uc3ZnXCIsXG5cdFwiLi9pY29uLWdvLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1nby5zdmdcIixcblx0XCIuL2ljb24tcGhvbmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLXBob25lLnBuZ1wiLFxuXHRcIi4vbG9nby10ZXh0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby10ZXh0LnBuZ1wiLFxuXHRcIi4vbG9nby10ZXh0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby10ZXh0LnN2Z1wiLFxuXHRcIi4vcG9zdGVyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcG9zdGVyLnBuZ1wiLFxuXHRcIi4vcHJvbW8tMS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3Byb21vLTEucG5nXCIsXG5cdFwiLi9wcm9tby1saW5lLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvcHJvbW8tbGluZS5zdmdcIixcblx0XCIuL3NsaWRlci1hcmNpdmUucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWFyY2l2ZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItYXJjaXZlMi5wbmdcIixcblx0XCIuL3NsaWRlci1jaW5lbWEucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hLnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWNpbmVtYTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItY2luZW1hMi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2LnBuZ1wiLFxuXHRcIi4vc2xpZGVyLWZhdjIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItZmF2Mi5wbmdcIixcblx0XCIuL3NsaWRlci1mYXZvdGl0ZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NsaWRlci1mYXZvdGl0ZS5wbmdcIixcblx0XCIuL3NsaWRlci1ob21lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLWhvbWUucG5nXCIsXG5cdFwiLi9zbGlkZXItaG9tZTIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItaG9tZTIucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zbGlkZXItdHYucG5nXCIsXG5cdFwiLi9zbGlkZXItdHYyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc2xpZGVyLXR2Mi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWcxLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzEucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nMi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWcyLnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzMucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nMy5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc0LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzQucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nNS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc1LnBuZ1wiLFxuXHRcIi4vc3BpbmVyLWltZzYucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9zcGluZXItaW1nNi5wbmdcIixcblx0XCIuL3NwaW5lci1pbWc3LnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvc3BpbmVyLWltZzcucG5nXCIsXG5cdFwiLi9zcGluZXItaW1nOC5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL3NwaW5lci1pbWc4LnBuZ1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMvaW1hZ2VzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLiokXCI7IiwiLyogKGlnbm9yZWQpICovIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybCArIFwiLi4vXCI7IiwiLy8gbnB4IHByZXR0aWVyIC0td3JpdGUgXCIqKi8qLnB1Z1wiXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjtcbmltcG9ydCBcIi4vY29yZS9yZXNpemVyXCI7XG5pbXBvcnQgXCIuL2NvcmUvbWFpblwiO1xuaW1wb3J0IFwiLi92aWV3cy9pbmRleC5wdWdcIjtcbiJdLCJuYW1lcyI6WyJkZWZhdWx0V2lkdGgiLCJkZWZhdWx0Rm9udCIsIm1vYmlsZUZvbnQiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsImRlZmF1bHRIZWlnaHQiLCJmU2l6ZSIsImRldmljZSIsInZXIiwidkgiLCJNYXRoIiwibWluIiwibWF4IiwibW9kaWZpZXJEZXZpY2UiLCJ3aW5kb3dXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJ3aW5kb3dIZWlnaHQiLCJpbm5lckhlaWdodCIsImlzTW9iaWxlIiwiZG9jdW1lbnQiLCJib2R5Iiwic3R5bGUiLCJmb250U2l6ZSIsImRvY3VtZW50RWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIm9ubG9hZCIsIm9ucmVzaXplIl0sInNvdXJjZVJvb3QiOiIifQ==