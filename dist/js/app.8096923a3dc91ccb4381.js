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
pug_html = pug_html + "\u003Cspan\u003EАкаунт\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./main/hero.pug */ "./src/views/main/hero.pug").call)(this, locals)) ? "" : pug_interp) + (null == (pug_interp = (__webpack_require__(/*! ./parts/footer.pug */ "./src/views/parts/footer.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
module.exports = template;

/***/ }),

/***/ "./src/views/main/hero.pug":
/*!*********************************!*\
  !*** ./src/views/main/hero.pug ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ "./node_modules/pug-runtime/index.js");

function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;pug_html = pug_html + "\u003Csection class=\"hero\"\u003E\u003Cdiv class=\"hero__text\"\u003E\u003Cdiv class=\"hero__title\"\u003E\u003Cspan\u003EВаш домашний ТВ Мир\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__subtitle\"\u003E\u003Cspan\u003EБолее 200 каналов и огромная библиотека фильмов и сериалов ваш лучший источник домашнего развлечения!\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__actions\"\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan\u003EОформить подписку\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan\u003EСмотреть тарифы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__slider\"\u003E\u003Cdiv class=\"hero__aside\"\u003E\u003Cdiv class=\"hero__aside-logo\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.5349 0.680675C27.2321 1.34825 23.1724 10.4981 23.0347 10.8253C22.9934 10.9169 22.8696 10.9955 22.7457 10.9955C22.6356 10.9955 21.8925 11.2049 21.1218 11.4536L19.6906 11.9118L16.3052 9.81737C14.4336 8.65238 12.851 7.69685 12.7822 7.68376C12.7272 7.67068 12.5483 7.8408 12.3969 8.06334L12.1216 8.46917L15.163 10.3541C15.4464 10.529 15.7062 10.6894 15.9444 10.8363C18.1128 12.1741 18.4854 12.404 18.4555 12.4712C18.4492 12.4851 18.4257 12.4921 18.3973 12.5005C18.384 12.5043 18.3698 12.5086 18.3557 12.5139C18.2731 12.5532 17.53 12.9983 16.7043 13.5219C14.0758 15.158 11.7501 17.6189 10.4152 20.1322C9.24542 22.3313 8.75 24.4387 8.75 27.096C8.75 29.2035 8.94266 30.2114 9.72709 32.3319C9.9748 33.0126 11.64 38.6151 13.4428 44.7673C15.2318 50.9195 16.7181 55.9722 16.7318 55.9984C16.771 56.0357 19.0751 55.4372 25.6395 53.6671L22.3379 42.2982C22.4379 42.3458 23.0883 42.4982 24.8891 42.7267C24.8891 42.7267 26.9901 43.0125 29.2413 42.7267C31.4924 42.441 33.1084 41.9268 33.1084 41.9268C33.1084 41.9268 34.691 43.8772 36.4525 46.0501L39.6727 50.0032L40.5122 49.3749C40.9801 49.0215 42.4802 47.922 43.8425 46.9271C45.205 45.9192 46.4022 45.0291 46.4986 44.9375L40.4968 37.5839C40.679 37.3964 41.0637 36.9921 41.1453 36.8741L41.5581 36.4029C42.3287 35.539 43.6224 33.654 44.0903 32.6985C46.5949 27.6327 46.072 22.0041 42.6865 17.4095C41.2278 15.4329 38.3516 13.1815 35.9158 12.1212C34.4708 11.506 32.5166 10.93 30.9891 10.6813C29.5853 10.4588 25.9798 10.4064 24.9614 10.5897C24.6311 10.6551 24.3696 10.642 24.3696 10.5897C24.3696 10.5243 25.3605 8.23354 26.5715 5.49774C27.7825 2.74887 28.7734 0.471238 28.7734 0.405788C28.7734 0.301069 28.1679 0 27.9614 0C27.8927 0 27.7 0.314156 27.5349 0.680675Z\" fill=\"#DF1F28\"\u002F\u003E\n\u003Cpath d=\"M47.2498 44.2983C47.2498 44.2983 46.5947 44.8459 46.4984 44.9375L40.4966 37.5839C40.6788 37.3965 41.0636 36.9921 41.1451 36.8741L44.2002 40.631C47.1452 44.27 47.2498 44.2983 47.2498 44.2983Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M27.8101 52.9616C27.8101 53.027 27.3284 53.2103 26.7504 53.3674C26.3673 53.4709 25.997 53.5707 25.6395 53.6672L22.3379 42.2982C22.4379 42.3458 23.0883 42.4982 24.8891 42.7268C24.8891 42.7268 25.567 45.16 26.3651 47.8827C27.1633 50.6054 27.8101 52.883 27.8101 52.9616Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M16.0346 31.8695L14.5339 27.0122C14.0336 25.5837 13.6334 22.5836 16.785 21.155C19.9365 19.7264 26.5398 17.0121 28.0405 16.4407C29.5412 15.8692 34.0434 14.5835 36.1445 21.155L38.5456 28.5837C39.0458 30.298 39.0259 33.9266 34.9439 34.7266C30.8619 35.5266 24.5388 36.246 21.8874 36.5057C19.0361 36.785 17.2932 35.8232 16.0346 31.8695Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M20.1152 32.2606L18.8688 28.2195C18.4533 27.0309 18.3697 25.058 20.9872 23.8694C23.6046 22.6808 28.8952 20.7734 30.1416 20.298C31.388 19.8225 35.6002 17.8791 37.3451 23.3464L38.8111 29.527C39.2266 30.9532 38.2456 33.999 35.9945 34.441C31.7924 35.2659 27.1781 35.9019 24.9761 36.1179C22.608 36.3503 21.1605 35.55 20.1152 32.2606Z\" fill=\"white\"\u002F\u003E\n\u003Cpath d=\"M23.0884 27.8694L29.3914 26.1551L31.6425 29.5837V25.5836L32.9932 25.1551L32.8431 31.0123L31.3424 31.4409L27.8156 26.5836L28.0408 27.5837L26.3899 28.0123L27.5905 32.298L26.3899 32.5838L25.0393 28.4408L23.3885 28.8694L23.0884 27.8694Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-fill\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-menu\"\u003E\u003Cdiv class=\"hero__aside-item\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_532_1751)\"\u003E\n\u003Cpath d=\"M23.7068 22.5037L17.7378 16.5347C19.3644 14.5453 20.1642 12.0068 19.9716 9.44428C19.7791 6.88175 18.609 4.49125 16.7034 2.76724C14.7977 1.04323 12.3024 0.117612 9.73342 0.181844C7.16447 0.246075 4.71848 1.29524 2.9014 3.11233C1.08431 4.92942 0.0351378 7.37541 -0.029094 9.94436C-0.0933258 12.5133 0.832292 15.0087 2.5563 16.9143C4.28031 18.8199 6.67081 19.99 9.23334 20.1826C11.7959 20.3751 14.3344 19.5753 16.3238 17.9487L22.2928 23.9177C22.4814 24.0999 22.734 24.2007 22.9962 24.1984C23.2584 24.1961 23.5092 24.0909 23.6946 23.9055C23.88 23.7201 23.9852 23.4693 23.9875 23.2071C23.9897 22.9449 23.8889 22.6923 23.7068 22.5037ZM9.99978 18.2107C8.41753 18.2107 6.87081 17.7415 5.55522 16.8625C4.23963 15.9834 3.21425 14.734 2.60875 13.2722C2.00324 11.8104 1.84482 10.2018 2.1535 8.65C2.46218 7.09815 3.22411 5.67269 4.34293 4.55386C5.46175 3.43504 6.88721 2.67312 8.43906 2.36444C9.99091 2.05576 11.5994 2.21418 13.0612 2.81968C14.5231 3.42518 15.7725 4.45056 16.6515 5.76616C17.5306 7.08175 17.9998 8.62847 17.9998 10.2107C17.9974 12.3317 17.1538 14.3652 15.654 15.8649C14.1542 17.3647 12.1208 18.2083 9.99978 18.2107Z\" fill=\"#D7D7D7\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_532_1751\"\u003E\n\u003Crect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0 0.210022)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-full\"\u003E\u003Cspan\u003EПоиск\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-item\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M23.121 9.27895L15.536 1.69295C14.5973 0.756939 13.3257 0.231323 12 0.231323C10.6744 0.231323 9.40277 0.756939 8.46401 1.69295L0.879012 9.27895C0.599438 9.55673 0.377782 9.88725 0.226895 10.2513C0.0760072 10.6154 -0.0011104 11.0058 1.20795e-05 11.3999V21.2169C1.20795e-05 22.0126 0.316083 22.7757 0.878692 23.3383C1.4413 23.9009 2.20436 24.2169 3.00001 24.2169H21C21.7957 24.2169 22.5587 23.9009 23.1213 23.3383C23.6839 22.7757 24 22.0126 24 21.2169V11.3999C24.0011 11.0058 23.924 10.6154 23.7731 10.2513C23.6222 9.88725 23.4006 9.55673 23.121 9.27895ZM15 22.2169H9.00001V18.2829C9.00001 17.4873 9.31608 16.7242 9.87869 16.1616C10.4413 15.599 11.2044 15.2829 12 15.2829C12.7957 15.2829 13.5587 15.599 14.1213 16.1616C14.6839 16.7242 15 17.4873 15 18.2829V22.2169ZM22 21.2169C22 21.4822 21.8947 21.7365 21.7071 21.9241C21.5196 22.1116 21.2652 22.2169 21 22.2169H17V18.2829C17 16.9569 16.4732 15.6851 15.5355 14.7474C14.5979 13.8097 13.3261 13.2829 12 13.2829C10.6739 13.2829 9.40216 13.8097 8.46448 14.7474C7.5268 15.6851 7.00001 16.9569 7.00001 18.2829V22.2169H3.00001C2.7348 22.2169 2.48044 22.1116 2.29291 21.9241C2.10537 21.7365 2.00001 21.4822 2.00001 21.2169V11.3999C2.00094 11.1349 2.1062 10.8809 2.29301 10.6929L9.87801 3.10995C10.4417 2.54888 11.2047 2.23389 12 2.23389C12.7953 2.23389 13.5583 2.54888 14.122 3.10995L21.707 10.6959C21.8931 10.8832 21.9983 11.136 22 11.3999V21.2169Z\" fill=\"white\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-full\"\u003E\u003Cspan\u003EГлавная\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-item\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19 1.20972H5C3.67441 1.2113 2.40356 1.7386 1.46622 2.67594C0.528882 3.61327 0.00158786 4.88412 0 6.20972V14.2097C0.00158786 15.5353 0.528882 16.8062 1.46622 17.7435C2.40356 18.6808 3.67441 19.2081 5 19.2097H11V21.2097H7C6.73478 21.2097 6.48043 21.3151 6.29289 21.5026C6.10536 21.6901 6 21.9445 6 22.2097C6 22.4749 6.10536 22.7293 6.29289 22.9168C6.48043 23.1044 6.73478 23.2097 7 23.2097H17C17.2652 23.2097 17.5196 23.1044 17.7071 22.9168C17.8946 22.7293 18 22.4749 18 22.2097C18 21.9445 17.8946 21.6901 17.7071 21.5026C17.5196 21.3151 17.2652 21.2097 17 21.2097H13V19.2097H19C20.3256 19.2081 21.5964 18.6808 22.5338 17.7435C23.4711 16.8062 23.9984 15.5353 24 14.2097V6.20972C23.9984 4.88412 23.4711 3.61327 22.5338 2.67594C21.5964 1.7386 20.3256 1.2113 19 1.20972ZM5 3.20972H19C19.7956 3.20972 20.5587 3.52579 21.1213 4.0884C21.6839 4.65101 22 5.41407 22 6.20972V13.2097H2V6.20972C2 5.41407 2.31607 4.65101 2.87868 4.0884C3.44129 3.52579 4.20435 3.20972 5 3.20972ZM19 17.2097H5C4.38174 17.2072 3.77937 17.0136 3.2753 16.6556C2.77123 16.2976 2.39008 15.7926 2.184 15.2097H21.816C21.6099 15.7926 21.2288 16.2976 20.7247 16.6556C20.2206 17.0136 19.6183 17.2072 19 17.2097Z\" fill=\"#D7D7D7\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-full\"\u003E\u003Cspan\u003EТелеканалы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-item\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_532_1760)\"\u003E\n\u003Cpath d=\"M19 0.210022H5C3.67441 0.21161 2.40356 0.738904 1.46622 1.67624C0.528882 2.61358 0.00158786 3.88443 0 5.21002V19.21C0.00158786 20.5356 0.528882 21.8065 1.46622 22.7438C2.40356 23.6811 3.67441 24.2084 5 24.21H19C20.3256 24.2084 21.5964 23.6811 22.5338 22.7438C23.4711 21.8065 23.9984 20.5356 24 19.21V5.21002C23.9984 3.88443 23.4711 2.61358 22.5338 1.67624C21.5964 0.738904 20.3256 0.21161 19 0.210022ZM20 11.21H22V13.21H20V11.21ZM20 9.21002V7.21002H22V9.21002H20ZM18 11.21H6V2.21002H18V11.21ZM4 13.21H2V11.21H4V13.21ZM4 9.21002H2V7.21002H4V9.21002ZM2 15.21H4V17.21H2V15.21ZM6 13.21H18V22.21H6V13.21ZM20 15.21H22V17.21H20V15.21ZM22 5.21002H20V2.39402C20.5829 2.60011 21.0879 2.98125 21.4459 3.48532C21.8039 3.98939 21.9974 4.59176 22 5.21002ZM4 2.39402V5.21002H2C2.00256 4.59176 2.19608 3.98939 2.55409 3.48532C2.91209 2.98125 3.41709 2.60011 4 2.39402ZM2 19.21H4V22.026C3.41709 21.8199 2.91209 21.4388 2.55409 20.9347C2.19608 20.4307 2.00256 19.8283 2 19.21ZM20 22.026V19.21H22C21.9974 19.8283 21.8039 20.4307 21.4459 20.9347C21.0879 21.4388 20.5829 21.8199 20 22.026Z\" fill=\"#D7D7D7\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_532_1760\"\u003E\n\u003Crect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0 0.210022)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-full\"\u003E\u003Cspan\u003EКинозал\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-item\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"24\" height=\"23\" viewBox=\"0 0 24 23\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19 2.21021H12.472C12.3173 2.21123 12.1645 2.17703 12.025 2.11021L8.869 0.526205C8.45239 0.31875 7.9934 0.210591 7.528 0.210205H5C3.67441 0.211793 2.40356 0.739087 1.46622 1.67643C0.528882 2.61376 0.00158786 3.88461 0 5.21021V17.2102C0.00158786 18.5358 0.528882 19.8067 1.46622 20.744C2.40356 21.6813 3.67441 22.2086 5 22.2102H19C20.3256 22.2086 21.5964 21.6813 22.5338 20.744C23.4711 19.8067 23.9984 18.5358 24 17.2102V7.21021C23.9984 5.88461 23.4711 4.61376 22.5338 3.67643C21.5964 2.73909 20.3256 2.21179 19 2.21021ZM5 2.21021H7.528C7.68266 2.20918 7.83552 2.24338 7.975 2.31021L11.131 3.88921C11.5472 4.09839 12.0062 4.20827 12.472 4.21021H19C19.598 4.21118 20.1821 4.39088 20.6773 4.72622C21.1725 5.06156 21.5561 5.53725 21.779 6.09221L2 6.20421V5.21021C2 4.41456 2.31607 3.65149 2.87868 3.08889C3.44129 2.52628 4.20435 2.21021 5 2.21021ZM19 20.2102H5C4.20435 20.2102 3.44129 19.8941 2.87868 19.3315C2.31607 18.7689 2 18.0059 2 17.2102V8.20421L22 8.09121V17.2102C22 18.0059 21.6839 18.7689 21.1213 19.3315C20.5587 19.8941 19.7956 20.2102 19 20.2102Z\" fill=\"#D7D7D7\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-full\"\u003E\u003Cspan\u003EАрхив\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-item\"\u003E\u003Cdiv class=\"hero__aside-mini\"\u003E\u003Csvg width=\"24\" height=\"22\" viewBox=\"0 0 24 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M17.5 0.126465C16.3739 0.14398 15.2724 0.458318 14.3067 1.03774C13.341 1.61715 12.5453 2.44113 12 3.42646C11.4546 2.44113 10.6589 1.61715 9.6932 1.03774C8.7275 0.458318 7.62601 0.14398 6.49996 0.126465C4.7049 0.204456 3.01366 0.989719 1.79574 2.3107C0.577818 3.63168 -0.0677922 5.38099 -4.17088e-05 7.17646C-4.17088e-05 11.7235 4.78596 16.6895 8.79996 20.0565C9.69618 20.8096 10.8293 21.2225 12 21.2225C13.1706 21.2225 14.3037 20.8096 15.2 20.0565C19.214 16.6895 24 11.7235 24 7.17646C24.0677 5.38099 23.4221 3.63168 22.2042 2.3107C20.9863 0.989719 19.295 0.204456 17.5 0.126465ZM13.915 18.5265C13.3789 18.9778 12.7007 19.2254 12 19.2254C11.2992 19.2254 10.621 18.9778 10.085 18.5265C4.94696 14.2155 1.99996 10.0795 1.99996 7.17646C1.9316 5.91118 2.36632 4.67019 3.20932 3.72416C4.05232 2.77813 5.23519 2.20381 6.49996 2.12646C7.76472 2.20381 8.9476 2.77813 9.7906 3.72416C10.6336 4.67019 11.0683 5.91118 11 7.17646C11 7.44168 11.1053 7.69603 11.2929 7.88357C11.4804 8.07111 11.7347 8.17646 12 8.17646C12.2652 8.17646 12.5195 8.07111 12.7071 7.88357C12.8946 7.69603 13 7.44168 13 7.17646C12.9316 5.91118 13.3663 4.67019 14.2093 3.72416C15.0523 2.77813 16.2352 2.20381 17.5 2.12646C18.7647 2.20381 19.9476 2.77813 20.7906 3.72416C21.6336 4.67019 22.0683 5.91118 22 7.17646C22 10.0795 19.053 14.2155 13.915 18.5225V18.5265Z\" fill=\"#D7D7D7\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__aside-full\"\u003E\u003Cspan\u003EИзбранное\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__content\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E";;return pug_html;};
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

/***/ "./src/core/main.ts":
/*!**************************!*\
  !*** ./src/core/main.ts ***!
  \**************************/
/***/ (() => {

// console.log(1);
// document.querySelector('.themetoggle').addEventListener('click', (event) => {
//    event.preventDefault();
//    if (localStorage.getItem('theme') === 'dark') {
//       localStorage.removeItem('theme');
//    }
//    else {
//       localStorage.setItem('theme', 'dark')
//    }
//    addDarkClassToHTML()
// });
// function addDarkClassToHTML() {
//    try {
//       if (localStorage.getItem('theme') === 'dark') {
//          document.querySelector('.page').classList.add('dark');
//       }
//       else {
//          document.querySelector('.page').classList.remove('dark');
//       }
//    } catch (err) { }
// }
// addDarkClassToHTML();


/***/ }),

/***/ "./src/assets/images sync recursive ^\\.\\/.*$":
/*!******************************************!*\
  !*** ./src/assets/images/ sync ^\.\/.*$ ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./Icon-favorite.svg": "./src/assets/images/Icon-favorite.svg",
	"./Icon-folder.svg": "./src/assets/images/Icon-folder.svg",
	"./Icon-group.svg": "./src/assets/images/Icon-group.svg",
	"./Icon-home.svg": "./src/assets/images/Icon-home.svg",
	"./Icon-movie.svg": "./src/assets/images/Icon-movie.svg",
	"./Icon-search.svg": "./src/assets/images/Icon-search.svg",
	"./Icon-settings.svg": "./src/assets/images/Icon-settings.svg",
	"./Icon-tv.svg": "./src/assets/images/Icon-tv.svg",
	"./Icon-user.png": "./src/assets/images/Icon-user.png",
	"./Logo-svg.svg": "./src/assets/images/Logo-svg.svg",
	"./Logo.png": "./src/assets/images/Logo.png",
	"./favicon.png": "./src/assets/images/favicon.png",
	"./icon-phone.png": "./src/assets/images/icon-phone.png"
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

/***/ "./src/assets/images/Icon-favorite.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/Icon-favorite.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a52ebb28ce76cf8ba9af.svg";

/***/ }),

/***/ "./src/assets/images/Icon-folder.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/Icon-folder.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/08bcc799db1f0c0b2e00.svg";

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
module.exports = __webpack_require__.p + "assets/22fdf1128ecdd9672a06.svg";

/***/ }),

/***/ "./src/assets/images/Icon-movie.svg":
/*!******************************************!*\
  !*** ./src/assets/images/Icon-movie.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/a3fa0ee5a5acf808dd73.svg";

/***/ }),

/***/ "./src/assets/images/Icon-search.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/Icon-search.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/f7ddd257fc9bb343360f.svg";

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
module.exports = __webpack_require__.p + "assets/feddd823bb60998ff727.svg";

/***/ }),

/***/ "./src/assets/images/Icon-user.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Icon-user.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/6e5b373b2bccb538924f.png";

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

/***/ "./src/assets/images/icon-phone.png":
/*!******************************************!*\
  !*** ./src/assets/images/icon-phone.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/80f47d30684a5fdafc39.png";

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
/* harmony import */ var _core_main__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_main__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.pug */ "./src/views/index.pug");
/* harmony import */ var _views_index_pug__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_index_pug__WEBPACK_IMPORTED_MODULE_3__);
// npx prettier --write "**/*.pug"





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7OztBQ2xDQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUN5QjtBQUNEO0FBQ0g7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9yZXNpemVyLmpzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvc2Nzcy9hcHAuc2Nzcz84YjZmIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvaW5kZXgucHVnIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvdmlld3MvbWFpbi9oZXJvLnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2Zvb3Rlci5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvbWFpbi50cyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2Fzc2V0cy9pbWFnZXMvIHN5bmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL2lnbm9yZWR8L1VzZXJzLzdlcmhpeS9EZXNrdG9wL1dFQi9wcm9qZWN0cy9SZWRtYXhldS9wdWcvbm9kZV9tb2R1bGVzL3B1Zy1ydW50aW1lfGZzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGRlZmF1bHRXaWR0aCA9IDE0NDAsXG4gIGRlZmF1bHRGb250ID0gMTYsXG4gIG1vYmlsZUZvbnQgPSAxNixcbiAgbWluV2lkdGggPSA3NjgsXG4gIG1pbkhlaWdodCA9IDYwMCxcbiAgZGVmYXVsdEhlaWdodCA9IDkwMDtcblxuZnVuY3Rpb24gZlNpemUoZGV2aWNlLCB2VywgdkgpIHtcbiAgaWYgKHZXIDw9IDM3NCkge1xuICAgIHJldHVybiAxMztcbiAgfVxuXG4gIHJldHVybiBkZXZpY2VcbiAgICA/IG1vYmlsZUZvbnRcbiAgICA6IGRlZmF1bHRGb250ICpcbiAgICAgICAgTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5tYXgobWluV2lkdGgsIHZXKSAvIGRlZmF1bHRXaWR0aCxcbiAgICAgICAgICBNYXRoLm1heChtaW5IZWlnaHQsIHZIKSAvIGRlZmF1bHRIZWlnaHRcbiAgICAgICAgKTtcbn1cblxuZnVuY3Rpb24gbW9kaWZpZXJEZXZpY2UoKSB7XG4gIHZhciB3aW5kb3dXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICB2YXIgd2luZG93SGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB2YXIgaXNNb2JpbGUgPSB3aW5kb3dXaWR0aCA8PSA3Njc7XG5cbiAgaWYgKGRvY3VtZW50LmJvZHkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmZvbnRTaXplID1cbiAgICAgIGZTaXplKGlzTW9iaWxlLCB3aW5kb3dXaWR0aCwgd2luZG93SGVpZ2h0KSArIFwicHhcIjtcbiAgfVxuXG4gIGlmIChpc01vYmlsZSkge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibW9iaWxlXCIpO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwibW9iaWxlXCIpO1xuICB9XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG53aW5kb3cub25yZXNpemUgPSBmdW5jdGlvbiAoKSB7XG4gIG1vZGlmaWVyRGV2aWNlKCk7XG59O1xuXG5tb2RpZmllckRldmljZSgpO1xuXG5cblxuXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfbWl4aW5zW1wiaW1hZ2VcIl0gPSBwdWdfaW50ZXJwID0gZnVuY3Rpb24oZmlsZSl7XG52YXIgYmxvY2sgPSAodGhpcyAmJiB0aGlzLmJsb2NrKSwgYXR0cmlidXRlcyA9ICh0aGlzICYmIHRoaXMuYXR0cmlidXRlcykgfHwge307XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDaW1nXCIgKyAocHVnLmF0dHIoXCJjbGFzc1wiLCBwdWcuY2xhc3NlcyhbYXR0cmlidXRlcy5jbGFzc10sIFtmYWxzZV0pLCBmYWxzZSwgdHJ1ZSkrcHVnLmF0dHIoXCJzcmNcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy8ke2ZpbGV9YCksIHRydWUsIHRydWUpK1wiIGFsdD1cXFwiXFxcIlwiKSArIFwiXFx1MDAzRVwiO1xufTtcblxuXG5cblxucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQyFET0NUWVBFIGh0bWxcXHUwMDNFXFx1MDAzQ2h0bWwgbGFuZz1cXFwiZW5cXFwiXFx1MDAzRVxcdTAwM0NoZWFkXFx1MDAzRVxcdTAwM0NtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCJcXHUwMDNFXFx1MDAzQ21ldGEgaHR0cC1lcXVpdj1cXFwiWC1VQS1Db21wYXRpYmxlXFxcIiBjb250ZW50PVxcXCJpZT1lZGdlXFxcIlxcdTAwM0VcXHUwMDNDbGlua1wiICsgKFwiIHJlbD1cXFwic2hvcnRjdXQgaWNvblxcXCJcIitwdWcuYXR0cihcImhyZWZcIiwgcmVxdWlyZShgLi4vYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ2ApLCB0cnVlLCB0cnVlKStcIiB0eXBlPVxcXCJpbWFnZVxcdTAwMkZwbmdcXFwiXCIpICsgXCJcXHUwMDNFXFx1MDAzQ3RpdGxlXFx1MDAzRUVtcHR5IFByb2plY3RcXHUwMDNDXFx1MDAyRnRpdGxlXFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZFxcdTAwM0VcXHUwMDNDYm9keVxcdTAwM0VcXHUwMDNDaGVhZGVyIGNsYXNzPVxcXCJoZWFkZXJcXFwiXFx1MDAzRVxcdTAwM0NhIGNsYXNzPVxcXCJoZWFkZXJfX2xvZ29cXFwiIGhyZWY9XFxcIiNcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwiTG9nby5wbmdcIik7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmFcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19tZW51XFxcIlxcdTAwM0VcXHUwMDNDdWwgY2xhc3M9XFxcImhlYWRlcl9fbGlzdFxcXCJcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW0gaGVhZGVyX19pdGVtLS1hY3RpdmVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRVJlZG1heCBUVlxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRVJlZG1heCBUVlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtCw0L3QsNC70YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLQvtC30LzQvtC20L3QvtGB0YLQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXJpZ2h0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQn9C+0LzQvtGJ0YxcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLQvtC/0YDQvtGB0Ysg0Lgg0L7RgtCy0LXRgtGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCU0LXQutC+0LTQtdGA0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutGG0LjQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCQ0LrRhtC40LhcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutGG0LjQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4INC4INC/0YDQuNC00LvQvtC20LXQvdC40Y9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KPRgdC70YPQs9C4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0KPRgdC70YPQs9C4XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCe0LHQvdC+0LLQu9C10L3QuNC1INC00LXQutC+0LTQtdGA0LBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7QsdC+0YDRg9C00L7QstCw0L3QuNC1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCf0LXRgNC10LXQt9C0XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCh0L7RgtGA0YPQtNC90LjRh9C10YHRgtCy0L5cXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J4g0YHQvtGC0YDRg9C00L3QtdGH0LXRgdGC0LLQtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQoNC10LrQu9Cw0LzQsFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotCw0YDQuNGE0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQotCw0YDQuNGE0YtcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQsNGA0LjRhNC90YvQtSDQv9C70LDQvdGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCe0YLQvNC10L3QsCDRgdC00LXQu9C60LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J4g0J3QsNGBXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0J4g0J3QsNGBXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCf0YDQviBSZWRtYXhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7RgtC30YvQstGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCR0LvQvtCzXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0JHQu9C+0LNcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QvtGB0LvQtdC00L3QuNC1INC90L7QstC+0YHRgtC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCf0L7Qu9C10LfQvdC+INC30L3QsNGC0YxcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFSVBUViDQsiDQldCy0YDQvtC/0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdC70LXQstC40LTQtdC90YzQtSDQsiDQldCy0YDQvtC/0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JjQvdGC0LXRgNC90LXRgiDQsiDQldCy0YDQvtC/0LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7RgtC30YvQstGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0L7QvdGC0LDQutGC0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQmtC+0L3RgtCw0LrRgtGLXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LXQu9C10YTQvtC9XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUUtTUFJTFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQm9C+0LrQsNGG0LjRj1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXJpZ2h0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQodC+0YbQuNCw0LvRjNC90YvQtSDRgdC10YLQuFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VGYWNlYm9va1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VJbnN0YWdyYW1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFV2hhdHMgVXBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDXFx1MDAyRnVsXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYWN0aW9uc1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWNhbGxcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJpY29uLXBob25lLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzcGFuXFx1MDAzRSoyMTg2XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYWN0aW9ucy1qb2luXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluLWJ0biBtYWluLWJ0bi0tc21cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCS0YXQvtC0XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fYWN0aW9ucy1hY2NvdW50XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluLWJ0biBtYWluLWJ0bi0tc21cXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKFwiSWNvbi11c2VyLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NzcGFuXFx1MDAzRdCQ0LrQsNGD0L3RglxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmhlYWRlclxcdTAwM0VcIiArIChudWxsID09IChwdWdfaW50ZXJwID0gcmVxdWlyZShcIi4vbWFpbi9oZXJvLnB1Z1wiKS5jYWxsKHRoaXMsIGxvY2FscykpID8gXCJcIiA6IHB1Z19pbnRlcnApICsgKG51bGwgPT0gKHB1Z19pbnRlcnAgPSByZXF1aXJlKFwiLi9wYXJ0cy9mb290ZXIucHVnXCIpLmNhbGwodGhpcywgbG9jYWxzKSkgPyBcIlwiIDogcHVnX2ludGVycCkgKyBcIlxcdTAwM0NcXHUwMDJGYm9keVxcdTAwM0VcXHUwMDNDXFx1MDAyRmh0bWxcXHUwMDNFXCI7O3JldHVybiBwdWdfaHRtbDt9O1xubW9kdWxlLmV4cG9ydHMgPSB0ZW1wbGF0ZTsiLCJ2YXIgcHVnID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWUvaW5kZXguanNcIik7XG5cbmZ1bmN0aW9uIHRlbXBsYXRlKGxvY2Fscykge3ZhciBwdWdfaHRtbCA9IFwiXCIsIHB1Z19taXhpbnMgPSB7fSwgcHVnX2ludGVycDtwdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDc2VjdGlvbiBjbGFzcz1cXFwiaGVyb1xcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCS0LDRiCDQtNC+0LzQsNGI0L3QuNC5INCi0JIg0JzQuNGAXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX3N1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkdC+0LvQtdC1IDIwMCDQutCw0L3QsNC70L7QsiDQuCDQvtCz0YDQvtC80L3QsNGPINCx0LjQsdC70LjQvtGC0LXQutCwINGE0LjQu9GM0LzQvtCyINC4INGB0LXRgNC40LDQu9C+0LIg0LLQsNGIINC70YPRh9GI0LjQuSDQuNGB0YLQvtGH0L3QuNC6INC00L7QvNCw0YjQvdC10LPQviDRgNCw0LfQstC70LXRh9C10L3QuNGPIVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJtYWluLWJ0blxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7RhNC+0YDQvNC40YLRjCDQv9C+0LTQv9C40YHQutGDXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQodC80L7RgtGA0LXRgtGMINGC0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19zbGlkZXJcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1sb2dvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1taW5pXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCI1NlxcXCIgaGVpZ2h0PVxcXCI1NlxcXCIgdmlld0JveD1cXFwiMCAwIDU2IDU2XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGZpbGwtcnVsZT1cXFwiZXZlbm9kZFxcXCIgY2xpcC1ydWxlPVxcXCJldmVub2RkXFxcIiBkPVxcXCJNMjcuNTM0OSAwLjY4MDY3NUMyNy4yMzIxIDEuMzQ4MjUgMjMuMTcyNCAxMC40OTgxIDIzLjAzNDcgMTAuODI1M0MyMi45OTM0IDEwLjkxNjkgMjIuODY5NiAxMC45OTU1IDIyLjc0NTcgMTAuOTk1NUMyMi42MzU2IDEwLjk5NTUgMjEuODkyNSAxMS4yMDQ5IDIxLjEyMTggMTEuNDUzNkwxOS42OTA2IDExLjkxMThMMTYuMzA1MiA5LjgxNzM3QzE0LjQzMzYgOC42NTIzOCAxMi44NTEgNy42OTY4NSAxMi43ODIyIDcuNjgzNzZDMTIuNzI3MiA3LjY3MDY4IDEyLjU0ODMgNy44NDA4IDEyLjM5NjkgOC4wNjMzNEwxMi4xMjE2IDguNDY5MTdMMTUuMTYzIDEwLjM1NDFDMTUuNDQ2NCAxMC41MjkgMTUuNzA2MiAxMC42ODk0IDE1Ljk0NDQgMTAuODM2M0MxOC4xMTI4IDEyLjE3NDEgMTguNDg1NCAxMi40MDQgMTguNDU1NSAxMi40NzEyQzE4LjQ0OTIgMTIuNDg1MSAxOC40MjU3IDEyLjQ5MjEgMTguMzk3MyAxMi41MDA1QzE4LjM4NCAxMi41MDQzIDE4LjM2OTggMTIuNTA4NiAxOC4zNTU3IDEyLjUxMzlDMTguMjczMSAxMi41NTMyIDE3LjUzIDEyLjk5ODMgMTYuNzA0MyAxMy41MjE5QzE0LjA3NTggMTUuMTU4IDExLjc1MDEgMTcuNjE4OSAxMC40MTUyIDIwLjEzMjJDOS4yNDU0MiAyMi4zMzEzIDguNzUgMjQuNDM4NyA4Ljc1IDI3LjA5NkM4Ljc1IDI5LjIwMzUgOC45NDI2NiAzMC4yMTE0IDkuNzI3MDkgMzIuMzMxOUM5Ljk3NDggMzMuMDEyNiAxMS42NCAzOC42MTUxIDEzLjQ0MjggNDQuNzY3M0MxNS4yMzE4IDUwLjkxOTUgMTYuNzE4MSA1NS45NzIyIDE2LjczMTggNTUuOTk4NEMxNi43NzEgNTYuMDM1NyAxOS4wNzUxIDU1LjQzNzIgMjUuNjM5NSA1My42NjcxTDIyLjMzNzkgNDIuMjk4MkMyMi40Mzc5IDQyLjM0NTggMjMuMDg4MyA0Mi40OTgyIDI0Ljg4OTEgNDIuNzI2N0MyNC44ODkxIDQyLjcyNjcgMjYuOTkwMSA0My4wMTI1IDI5LjI0MTMgNDIuNzI2N0MzMS40OTI0IDQyLjQ0MSAzMy4xMDg0IDQxLjkyNjggMzMuMTA4NCA0MS45MjY4QzMzLjEwODQgNDEuOTI2OCAzNC42OTEgNDMuODc3MiAzNi40NTI1IDQ2LjA1MDFMMzkuNjcyNyA1MC4wMDMyTDQwLjUxMjIgNDkuMzc0OUM0MC45ODAxIDQ5LjAyMTUgNDIuNDgwMiA0Ny45MjIgNDMuODQyNSA0Ni45MjcxQzQ1LjIwNSA0NS45MTkyIDQ2LjQwMjIgNDUuMDI5MSA0Ni40OTg2IDQ0LjkzNzVMNDAuNDk2OCAzNy41ODM5QzQwLjY3OSAzNy4zOTY0IDQxLjA2MzcgMzYuOTkyMSA0MS4xNDUzIDM2Ljg3NDFMNDEuNTU4MSAzNi40MDI5QzQyLjMyODcgMzUuNTM5IDQzLjYyMjQgMzMuNjU0IDQ0LjA5MDMgMzIuNjk4NUM0Ni41OTQ5IDI3LjYzMjcgNDYuMDcyIDIyLjAwNDEgNDIuNjg2NSAxNy40MDk1QzQxLjIyNzggMTUuNDMyOSAzOC4zNTE2IDEzLjE4MTUgMzUuOTE1OCAxMi4xMjEyQzM0LjQ3MDggMTEuNTA2IDMyLjUxNjYgMTAuOTMgMzAuOTg5MSAxMC42ODEzQzI5LjU4NTMgMTAuNDU4OCAyNS45Nzk4IDEwLjQwNjQgMjQuOTYxNCAxMC41ODk3QzI0LjYzMTEgMTAuNjU1MSAyNC4zNjk2IDEwLjY0MiAyNC4zNjk2IDEwLjU4OTdDMjQuMzY5NiAxMC41MjQzIDI1LjM2MDUgOC4yMzM1NCAyNi41NzE1IDUuNDk3NzRDMjcuNzgyNSAyLjc0ODg3IDI4Ljc3MzQgMC40NzEyMzggMjguNzczNCAwLjQwNTc4OEMyOC43NzM0IDAuMzAxMDY5IDI4LjE2NzkgMCAyNy45NjE0IDBDMjcuODkyNyAwIDI3LjcgMC4zMTQxNTYgMjcuNTM0OSAwLjY4MDY3NVpcXFwiIGZpbGw9XFxcIiNERjFGMjhcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNNDcuMjQ5OCA0NC4yOTgzQzQ3LjI0OTggNDQuMjk4MyA0Ni41OTQ3IDQ0Ljg0NTkgNDYuNDk4NCA0NC45Mzc1TDQwLjQ5NjYgMzcuNTgzOUM0MC42Nzg4IDM3LjM5NjUgNDEuMDYzNiAzNi45OTIxIDQxLjE0NTEgMzYuODc0MUw0NC4yMDAyIDQwLjYzMUM0Ny4xNDUyIDQ0LjI3IDQ3LjI0OTggNDQuMjk4MyA0Ny4yNDk4IDQ0LjI5ODNaXFxcIiBmaWxsPVxcXCIjMEE4NEZGXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTI3LjgxMDEgNTIuOTYxNkMyNy44MTAxIDUzLjAyNyAyNy4zMjg0IDUzLjIxMDMgMjYuNzUwNCA1My4zNjc0QzI2LjM2NzMgNTMuNDcwOSAyNS45OTcgNTMuNTcwNyAyNS42Mzk1IDUzLjY2NzJMMjIuMzM3OSA0Mi4yOTgyQzIyLjQzNzkgNDIuMzQ1OCAyMy4wODgzIDQyLjQ5ODIgMjQuODg5MSA0Mi43MjY4QzI0Ljg4OTEgNDIuNzI2OCAyNS41NjcgNDUuMTYgMjYuMzY1MSA0Ny44ODI3QzI3LjE2MzMgNTAuNjA1NCAyNy44MTAxIDUyLjg4MyAyNy44MTAxIDUyLjk2MTZaXFxcIiBmaWxsPVxcXCIjMEE4NEZGXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE2LjAzNDYgMzEuODY5NUwxNC41MzM5IDI3LjAxMjJDMTQuMDMzNiAyNS41ODM3IDEzLjYzMzQgMjIuNTgzNiAxNi43ODUgMjEuMTU1QzE5LjkzNjUgMTkuNzI2NCAyNi41Mzk4IDE3LjAxMjEgMjguMDQwNSAxNi40NDA3QzI5LjU0MTIgMTUuODY5MiAzNC4wNDM0IDE0LjU4MzUgMzYuMTQ0NSAyMS4xNTVMMzguNTQ1NiAyOC41ODM3QzM5LjA0NTggMzAuMjk4IDM5LjAyNTkgMzMuOTI2NiAzNC45NDM5IDM0LjcyNjZDMzAuODYxOSAzNS41MjY2IDI0LjUzODggMzYuMjQ2IDIxLjg4NzQgMzYuNTA1N0MxOS4wMzYxIDM2Ljc4NSAxNy4yOTMyIDM1LjgyMzIgMTYuMDM0NiAzMS44Njk1WlxcXCIgZmlsbD1cXFwiIzBBODRGRlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMC4xMTUyIDMyLjI2MDZMMTguODY4OCAyOC4yMTk1QzE4LjQ1MzMgMjcuMDMwOSAxOC4zNjk3IDI1LjA1OCAyMC45ODcyIDIzLjg2OTRDMjMuNjA0NiAyMi42ODA4IDI4Ljg5NTIgMjAuNzczNCAzMC4xNDE2IDIwLjI5OEMzMS4zODggMTkuODIyNSAzNS42MDAyIDE3Ljg3OTEgMzcuMzQ1MSAyMy4zNDY0TDM4LjgxMTEgMjkuNTI3QzM5LjIyNjYgMzAuOTUzMiAzOC4yNDU2IDMzLjk5OSAzNS45OTQ1IDM0LjQ0MUMzMS43OTI0IDM1LjI2NTkgMjcuMTc4MSAzNS45MDE5IDI0Ljk3NjEgMzYuMTE3OUMyMi42MDggMzYuMzUwMyAyMS4xNjA1IDM1LjU1IDIwLjExNTIgMzIuMjYwNlpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIzLjA4ODQgMjcuODY5NEwyOS4zOTE0IDI2LjE1NTFMMzEuNjQyNSAyOS41ODM3VjI1LjU4MzZMMzIuOTkzMiAyNS4xNTUxTDMyLjg0MzEgMzEuMDEyM0wzMS4zNDI0IDMxLjQ0MDlMMjcuODE1NiAyNi41ODM2TDI4LjA0MDggMjcuNTgzN0wyNi4zODk5IDI4LjAxMjNMMjcuNTkwNSAzMi4yOThMMjYuMzg5OSAzMi41ODM4TDI1LjAzOTMgMjguNDQwOEwyMy4zODg1IDI4Ljg2OTRMMjMuMDg4NCAyNy44Njk0WlxcXCIgZmlsbD1cXFwiIzBBODRGRlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLWZpbGxcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLW1lbnVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLW1pbmlcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ2cgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAwXzUzMl8xNzUxKVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIzLjcwNjggMjIuNTAzN0wxNy43Mzc4IDE2LjUzNDdDMTkuMzY0NCAxNC41NDUzIDIwLjE2NDIgMTIuMDA2OCAxOS45NzE2IDkuNDQ0MjhDMTkuNzc5MSA2Ljg4MTc1IDE4LjYwOSA0LjQ5MTI1IDE2LjcwMzQgMi43NjcyNEMxNC43OTc3IDEuMDQzMjMgMTIuMzAyNCAwLjExNzYxMiA5LjczMzQyIDAuMTgxODQ0QzcuMTY0NDcgMC4yNDYwNzUgNC43MTg0OCAxLjI5NTI0IDIuOTAxNCAzLjExMjMzQzEuMDg0MzEgNC45Mjk0MiAwLjAzNTEzNzggNy4zNzU0MSAtMC4wMjkwOTQgOS45NDQzNkMtMC4wOTMzMjU4IDEyLjUxMzMgMC44MzIyOTIgMTUuMDA4NyAyLjU1NjMgMTYuOTE0M0M0LjI4MDMxIDE4LjgxOTkgNi42NzA4MSAxOS45OSA5LjIzMzM0IDIwLjE4MjZDMTEuNzk1OSAyMC4zNzUxIDE0LjMzNDQgMTkuNTc1MyAxNi4zMjM4IDE3Ljk0ODdMMjIuMjkyOCAyMy45MTc3QzIyLjQ4MTQgMjQuMDk5OSAyMi43MzQgMjQuMjAwNyAyMi45OTYyIDI0LjE5ODRDMjMuMjU4NCAyNC4xOTYxIDIzLjUwOTIgMjQuMDkwOSAyMy42OTQ2IDIzLjkwNTVDMjMuODggMjMuNzIwMSAyMy45ODUyIDIzLjQ2OTMgMjMuOTg3NSAyMy4yMDcxQzIzLjk4OTcgMjIuOTQ0OSAyMy44ODg5IDIyLjY5MjMgMjMuNzA2OCAyMi41MDM3Wk05Ljk5OTc4IDE4LjIxMDdDOC40MTc1MyAxOC4yMTA3IDYuODcwODEgMTcuNzQxNSA1LjU1NTIyIDE2Ljg2MjVDNC4yMzk2MyAxNS45ODM0IDMuMjE0MjUgMTQuNzM0IDIuNjA4NzUgMTMuMjcyMkMyLjAwMzI0IDExLjgxMDQgMS44NDQ4MiAxMC4yMDE4IDIuMTUzNSA4LjY1QzIuNDYyMTggNy4wOTgxNSAzLjIyNDExIDUuNjcyNjkgNC4zNDI5MyA0LjU1Mzg2QzUuNDYxNzUgMy40MzUwNCA2Ljg4NzIxIDIuNjczMTIgOC40MzkwNiAyLjM2NDQ0QzkuOTkwOTEgMi4wNTU3NiAxMS41OTk0IDIuMjE0MTggMTMuMDYxMiAyLjgxOTY4QzE0LjUyMzEgMy40MjUxOCAxNS43NzI1IDQuNDUwNTYgMTYuNjUxNSA1Ljc2NjE2QzE3LjUzMDYgNy4wODE3NSAxNy45OTk4IDguNjI4NDcgMTcuOTk5OCAxMC4yMTA3QzE3Ljk5NzQgMTIuMzMxNyAxNy4xNTM4IDE0LjM2NTIgMTUuNjU0IDE1Ljg2NDlDMTQuMTU0MiAxNy4zNjQ3IDEyLjEyMDggMTguMjA4MyA5Ljk5OTc4IDE4LjIxMDdaXFxcIiBmaWxsPVxcXCIjRDdEN0Q3XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NkZWZzXFx1MDAzRVxcblxcdTAwM0NjbGlwUGF0aCBpZD1cXFwiY2xpcDBfNTMyXzE3NTFcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAgMC4yMTAwMjIpXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZjbGlwUGF0aFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRlZnNcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtZnVsbFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QvtC40YHQulxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1taW5pXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI1XFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMy4xMjEgOS4yNzg5NUwxNS41MzYgMS42OTI5NUMxNC41OTczIDAuNzU2OTM5IDEzLjMyNTcgMC4yMzEzMjMgMTIgMC4yMzEzMjNDMTAuNjc0NCAwLjIzMTMyMyA5LjQwMjc3IDAuNzU2OTM5IDguNDY0MDEgMS42OTI5NUwwLjg3OTAxMiA5LjI3ODk1QzAuNTk5NDM4IDkuNTU2NzMgMC4zNzc3ODIgOS44ODcyNSAwLjIyNjg5NSAxMC4yNTEzQzAuMDc2MDA3MiAxMC42MTU0IC0wLjAwMTExMDQgMTEuMDA1OCAxLjIwNzk1ZS0wNSAxMS4zOTk5VjIxLjIxNjlDMS4yMDc5NWUtMDUgMjIuMDEyNiAwLjMxNjA4MyAyMi43NzU3IDAuODc4NjkyIDIzLjMzODNDMS40NDEzIDIzLjkwMDkgMi4yMDQzNiAyNC4yMTY5IDMuMDAwMDEgMjQuMjE2OUgyMUMyMS43OTU3IDI0LjIxNjkgMjIuNTU4NyAyMy45MDA5IDIzLjEyMTMgMjMuMzM4M0MyMy42ODM5IDIyLjc3NTcgMjQgMjIuMDEyNiAyNCAyMS4yMTY5VjExLjM5OTlDMjQuMDAxMSAxMS4wMDU4IDIzLjkyNCAxMC42MTU0IDIzLjc3MzEgMTAuMjUxM0MyMy42MjIyIDkuODg3MjUgMjMuNDAwNiA5LjU1NjczIDIzLjEyMSA5LjI3ODk1Wk0xNSAyMi4yMTY5SDkuMDAwMDFWMTguMjgyOUM5LjAwMDAxIDE3LjQ4NzMgOS4zMTYwOCAxNi43MjQyIDkuODc4NjkgMTYuMTYxNkMxMC40NDEzIDE1LjU5OSAxMS4yMDQ0IDE1LjI4MjkgMTIgMTUuMjgyOUMxMi43OTU3IDE1LjI4MjkgMTMuNTU4NyAxNS41OTkgMTQuMTIxMyAxNi4xNjE2QzE0LjY4MzkgMTYuNzI0MiAxNSAxNy40ODczIDE1IDE4LjI4MjlWMjIuMjE2OVpNMjIgMjEuMjE2OUMyMiAyMS40ODIyIDIxLjg5NDcgMjEuNzM2NSAyMS43MDcxIDIxLjkyNDFDMjEuNTE5NiAyMi4xMTE2IDIxLjI2NTIgMjIuMjE2OSAyMSAyMi4yMTY5SDE3VjE4LjI4MjlDMTcgMTYuOTU2OSAxNi40NzMyIDE1LjY4NTEgMTUuNTM1NSAxNC43NDc0QzE0LjU5NzkgMTMuODA5NyAxMy4zMjYxIDEzLjI4MjkgMTIgMTMuMjgyOUMxMC42NzM5IDEzLjI4MjkgOS40MDIxNiAxMy44MDk3IDguNDY0NDggMTQuNzQ3NEM3LjUyNjggMTUuNjg1MSA3LjAwMDAxIDE2Ljk1NjkgNy4wMDAwMSAxOC4yODI5VjIyLjIxNjlIMy4wMDAwMUMyLjczNDggMjIuMjE2OSAyLjQ4MDQ0IDIyLjExMTYgMi4yOTI5MSAyMS45MjQxQzIuMTA1MzcgMjEuNzM2NSAyLjAwMDAxIDIxLjQ4MjIgMi4wMDAwMSAyMS4yMTY5VjExLjM5OTlDMi4wMDA5NCAxMS4xMzQ5IDIuMTA2MiAxMC44ODA5IDIuMjkzMDEgMTAuNjkyOUw5Ljg3ODAxIDMuMTA5OTVDMTAuNDQxNyAyLjU0ODg4IDExLjIwNDcgMi4yMzM4OSAxMiAyLjIzMzg5QzEyLjc5NTMgMi4yMzM4OSAxMy41NTgzIDIuNTQ4ODggMTQuMTIyIDMuMTA5OTVMMjEuNzA3IDEwLjY5NTlDMjEuODkzMSAxMC44ODMyIDIxLjk5ODMgMTEuMTM2IDIyIDExLjM5OTlWMjEuMjE2OVpcXFwiIGZpbGw9XFxcIndoaXRlXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtZnVsbFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JPQu9Cw0LLQvdCw0Y9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtbWluaVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTkgMS4yMDk3Mkg1QzMuNjc0NDEgMS4yMTEzIDIuNDAzNTYgMS43Mzg2IDEuNDY2MjIgMi42NzU5NEMwLjUyODg4MiAzLjYxMzI3IDAuMDAxNTg3ODYgNC44ODQxMiAwIDYuMjA5NzJWMTQuMjA5N0MwLjAwMTU4Nzg2IDE1LjUzNTMgMC41Mjg4ODIgMTYuODA2MiAxLjQ2NjIyIDE3Ljc0MzVDMi40MDM1NiAxOC42ODA4IDMuNjc0NDEgMTkuMjA4MSA1IDE5LjIwOTdIMTFWMjEuMjA5N0g3QzYuNzM0NzggMjEuMjA5NyA2LjQ4MDQzIDIxLjMxNTEgNi4yOTI4OSAyMS41MDI2QzYuMTA1MzYgMjEuNjkwMSA2IDIxLjk0NDUgNiAyMi4yMDk3QzYgMjIuNDc0OSA2LjEwNTM2IDIyLjcyOTMgNi4yOTI4OSAyMi45MTY4QzYuNDgwNDMgMjMuMTA0NCA2LjczNDc4IDIzLjIwOTcgNyAyMy4yMDk3SDE3QzE3LjI2NTIgMjMuMjA5NyAxNy41MTk2IDIzLjEwNDQgMTcuNzA3MSAyMi45MTY4QzE3Ljg5NDYgMjIuNzI5MyAxOCAyMi40NzQ5IDE4IDIyLjIwOTdDMTggMjEuOTQ0NSAxNy44OTQ2IDIxLjY5MDEgMTcuNzA3MSAyMS41MDI2QzE3LjUxOTYgMjEuMzE1MSAxNy4yNjUyIDIxLjIwOTcgMTcgMjEuMjA5N0gxM1YxOS4yMDk3SDE5QzIwLjMyNTYgMTkuMjA4MSAyMS41OTY0IDE4LjY4MDggMjIuNTMzOCAxNy43NDM1QzIzLjQ3MTEgMTYuODA2MiAyMy45OTg0IDE1LjUzNTMgMjQgMTQuMjA5N1Y2LjIwOTcyQzIzLjk5ODQgNC44ODQxMiAyMy40NzExIDMuNjEzMjcgMjIuNTMzOCAyLjY3NTk0QzIxLjU5NjQgMS43Mzg2IDIwLjMyNTYgMS4yMTEzIDE5IDEuMjA5NzJaTTUgMy4yMDk3MkgxOUMxOS43OTU2IDMuMjA5NzIgMjAuNTU4NyAzLjUyNTc5IDIxLjEyMTMgNC4wODg0QzIxLjY4MzkgNC42NTEwMSAyMiA1LjQxNDA3IDIyIDYuMjA5NzJWMTMuMjA5N0gyVjYuMjA5NzJDMiA1LjQxNDA3IDIuMzE2MDcgNC42NTEwMSAyLjg3ODY4IDQuMDg4NEMzLjQ0MTI5IDMuNTI1NzkgNC4yMDQzNSAzLjIwOTcyIDUgMy4yMDk3MlpNMTkgMTcuMjA5N0g1QzQuMzgxNzQgMTcuMjA3MiAzLjc3OTM3IDE3LjAxMzYgMy4yNzUzIDE2LjY1NTZDMi43NzEyMyAxNi4yOTc2IDIuMzkwMDggMTUuNzkyNiAyLjE4NCAxNS4yMDk3SDIxLjgxNkMyMS42MDk5IDE1Ljc5MjYgMjEuMjI4OCAxNi4yOTc2IDIwLjcyNDcgMTYuNjU1NkMyMC4yMjA2IDE3LjAxMzYgMTkuNjE4MyAxNy4yMDcyIDE5IDE3LjIwOTdaXFxcIiBmaWxsPVxcXCIjRDdEN0Q3XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtZnVsbFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdC70LXQutCw0L3QsNC70YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fYXNpZGUtbWluaVxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfNTMyXzE3NjApXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTkgMC4yMTAwMjJINUMzLjY3NDQxIDAuMjExNjEgMi40MDM1NiAwLjczODkwNCAxLjQ2NjIyIDEuNjc2MjRDMC41Mjg4ODIgMi42MTM1OCAwLjAwMTU4Nzg2IDMuODg0NDMgMCA1LjIxMDAyVjE5LjIxQzAuMDAxNTg3ODYgMjAuNTM1NiAwLjUyODg4MiAyMS44MDY1IDEuNDY2MjIgMjIuNzQzOEMyLjQwMzU2IDIzLjY4MTEgMy42NzQ0MSAyNC4yMDg0IDUgMjQuMjFIMTlDMjAuMzI1NiAyNC4yMDg0IDIxLjU5NjQgMjMuNjgxMSAyMi41MzM4IDIyLjc0MzhDMjMuNDcxMSAyMS44MDY1IDIzLjk5ODQgMjAuNTM1NiAyNCAxOS4yMVY1LjIxMDAyQzIzLjk5ODQgMy44ODQ0MyAyMy40NzExIDIuNjEzNTggMjIuNTMzOCAxLjY3NjI0QzIxLjU5NjQgMC43Mzg5MDQgMjAuMzI1NiAwLjIxMTYxIDE5IDAuMjEwMDIyWk0yMCAxMS4yMUgyMlYxMy4yMUgyMFYxMS4yMVpNMjAgOS4yMTAwMlY3LjIxMDAySDIyVjkuMjEwMDJIMjBaTTE4IDExLjIxSDZWMi4yMTAwMkgxOFYxMS4yMVpNNCAxMy4yMUgyVjExLjIxSDRWMTMuMjFaTTQgOS4yMTAwMkgyVjcuMjEwMDJINFY5LjIxMDAyWk0yIDE1LjIxSDRWMTcuMjFIMlYxNS4yMVpNNiAxMy4yMUgxOFYyMi4yMUg2VjEzLjIxWk0yMCAxNS4yMUgyMlYxNy4yMUgyMFYxNS4yMVpNMjIgNS4yMTAwMkgyMFYyLjM5NDAyQzIwLjU4MjkgMi42MDAxMSAyMS4wODc5IDIuOTgxMjUgMjEuNDQ1OSAzLjQ4NTMyQzIxLjgwMzkgMy45ODkzOSAyMS45OTc0IDQuNTkxNzYgMjIgNS4yMTAwMlpNNCAyLjM5NDAyVjUuMjEwMDJIMkMyLjAwMjU2IDQuNTkxNzYgMi4xOTYwOCAzLjk4OTM5IDIuNTU0MDkgMy40ODUzMkMyLjkxMjA5IDIuOTgxMjUgMy40MTcwOSAyLjYwMDExIDQgMi4zOTQwMlpNMiAxOS4yMUg0VjIyLjAyNkMzLjQxNzA5IDIxLjgxOTkgMi45MTIwOSAyMS40Mzg4IDIuNTU0MDkgMjAuOTM0N0MyLjE5NjA4IDIwLjQzMDcgMi4wMDI1NiAxOS44MjgzIDIgMTkuMjFaTTIwIDIyLjAyNlYxOS4yMUgyMkMyMS45OTc0IDE5LjgyODMgMjEuODAzOSAyMC40MzA3IDIxLjQ0NTkgMjAuOTM0N0MyMS4wODc5IDIxLjQzODggMjAuNTgyOSAyMS44MTk5IDIwIDIyLjAyNlpcXFwiIGZpbGw9XFxcIiNEN0Q3RDdcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFx1MDAzQ2NsaXBQYXRoIGlkPVxcXCJjbGlwMF81MzJfMTc2MFxcXCJcXHUwMDNFXFxuXFx1MDAzQ3JlY3Qgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCAwLjIxMDAyMilcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmNsaXBQYXRoXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtC40L3QvtC30LDQu1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1taW5pXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyM1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDIzXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xOSAyLjIxMDIxSDEyLjQ3MkMxMi4zMTczIDIuMjExMjMgMTIuMTY0NSAyLjE3NzAzIDEyLjAyNSAyLjExMDIxTDguODY5IDAuNTI2MjA1QzguNDUyMzkgMC4zMTg3NSA3Ljk5MzQgMC4yMTA1OTEgNy41MjggMC4yMTAyMDVINUMzLjY3NDQxIDAuMjExNzkzIDIuNDAzNTYgMC43MzkwODcgMS40NjYyMiAxLjY3NjQzQzAuNTI4ODgyIDIuNjEzNzYgMC4wMDE1ODc4NiAzLjg4NDYxIDAgNS4yMTAyMVYxNy4yMTAyQzAuMDAxNTg3ODYgMTguNTM1OCAwLjUyODg4MiAxOS44MDY3IDEuNDY2MjIgMjAuNzQ0QzIuNDAzNTYgMjEuNjgxMyAzLjY3NDQxIDIyLjIwODYgNSAyMi4yMTAySDE5QzIwLjMyNTYgMjIuMjA4NiAyMS41OTY0IDIxLjY4MTMgMjIuNTMzOCAyMC43NDRDMjMuNDcxMSAxOS44MDY3IDIzLjk5ODQgMTguNTM1OCAyNCAxNy4yMTAyVjcuMjEwMjFDMjMuOTk4NCA1Ljg4NDYxIDIzLjQ3MTEgNC42MTM3NiAyMi41MzM4IDMuNjc2NDNDMjEuNTk2NCAyLjczOTA5IDIwLjMyNTYgMi4yMTE3OSAxOSAyLjIxMDIxWk01IDIuMjEwMjFINy41MjhDNy42ODI2NiAyLjIwOTE4IDcuODM1NTIgMi4yNDMzOCA3Ljk3NSAyLjMxMDIxTDExLjEzMSAzLjg4OTIxQzExLjU0NzIgNC4wOTgzOSAxMi4wMDYyIDQuMjA4MjcgMTIuNDcyIDQuMjEwMjFIMTlDMTkuNTk4IDQuMjExMTggMjAuMTgyMSA0LjM5MDg4IDIwLjY3NzMgNC43MjYyMkMyMS4xNzI1IDUuMDYxNTYgMjEuNTU2MSA1LjUzNzI1IDIxLjc3OSA2LjA5MjIxTDIgNi4yMDQyMVY1LjIxMDIxQzIgNC40MTQ1NiAyLjMxNjA3IDMuNjUxNDkgMi44Nzg2OCAzLjA4ODg5QzMuNDQxMjkgMi41MjYyOCA0LjIwNDM1IDIuMjEwMjEgNSAyLjIxMDIxWk0xOSAyMC4yMTAySDVDNC4yMDQzNSAyMC4yMTAyIDMuNDQxMjkgMTkuODk0MSAyLjg3ODY4IDE5LjMzMTVDMi4zMTYwNyAxOC43Njg5IDIgMTguMDA1OSAyIDE3LjIxMDJWOC4yMDQyMUwyMiA4LjA5MTIxVjE3LjIxMDJDMjIgMTguMDA1OSAyMS42ODM5IDE4Ljc2ODkgMjEuMTIxMyAxOS4zMzE1QzIwLjU1ODcgMTkuODk0MSAxOS43OTU2IDIwLjIxMDIgMTkgMjAuMjEwMlpcXFwiIGZpbGw9XFxcIiNEN0Q3RDdcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX19hc2lkZS1mdWxsXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNGA0YXQuNCyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLW1pbmlcXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjIyXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjJcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE3LjUgMC4xMjY0NjVDMTYuMzczOSAwLjE0Mzk4IDE1LjI3MjQgMC40NTgzMTggMTQuMzA2NyAxLjAzNzc0QzEzLjM0MSAxLjYxNzE1IDEyLjU0NTMgMi40NDExMyAxMiAzLjQyNjQ2QzExLjQ1NDYgMi40NDExMyAxMC42NTg5IDEuNjE3MTUgOS42OTMyIDEuMDM3NzRDOC43Mjc1IDAuNDU4MzE4IDcuNjI2MDEgMC4xNDM5OCA2LjQ5OTk2IDAuMTI2NDY1QzQuNzA0OSAwLjIwNDQ1NiAzLjAxMzY2IDAuOTg5NzE5IDEuNzk1NzQgMi4zMTA3QzAuNTc3ODE4IDMuNjMxNjggLTAuMDY3NzkyMiA1LjM4MDk5IC00LjE3MDg4ZS0wNSA3LjE3NjQ2Qy00LjE3MDg4ZS0wNSAxMS43MjM1IDQuNzg1OTYgMTYuNjg5NSA4Ljc5OTk2IDIwLjA1NjVDOS42OTYxOCAyMC44MDk2IDEwLjgyOTMgMjEuMjIyNSAxMiAyMS4yMjI1QzEzLjE3MDYgMjEuMjIyNSAxNC4zMDM3IDIwLjgwOTYgMTUuMiAyMC4wNTY1QzE5LjIxNCAxNi42ODk1IDI0IDExLjcyMzUgMjQgNy4xNzY0NkMyNC4wNjc3IDUuMzgwOTkgMjMuNDIyMSAzLjYzMTY4IDIyLjIwNDIgMi4zMTA3QzIwLjk4NjMgMC45ODk3MTkgMTkuMjk1IDAuMjA0NDU2IDE3LjUgMC4xMjY0NjVaTTEzLjkxNSAxOC41MjY1QzEzLjM3ODkgMTguOTc3OCAxMi43MDA3IDE5LjIyNTQgMTIgMTkuMjI1NEMxMS4yOTkyIDE5LjIyNTQgMTAuNjIxIDE4Ljk3NzggMTAuMDg1IDE4LjUyNjVDNC45NDY5NiAxNC4yMTU1IDEuOTk5OTYgMTAuMDc5NSAxLjk5OTk2IDcuMTc2NDZDMS45MzE2IDUuOTExMTggMi4zNjYzMiA0LjY3MDE5IDMuMjA5MzIgMy43MjQxNkM0LjA1MjMyIDIuNzc4MTMgNS4yMzUxOSAyLjIwMzgxIDYuNDk5OTYgMi4xMjY0NkM3Ljc2NDcyIDIuMjAzODEgOC45NDc2IDIuNzc4MTMgOS43OTA2IDMuNzI0MTZDMTAuNjMzNiA0LjY3MDE5IDExLjA2ODMgNS45MTExOCAxMSA3LjE3NjQ2QzExIDcuNDQxNjggMTEuMTA1MyA3LjY5NjAzIDExLjI5MjkgNy44ODM1N0MxMS40ODA0IDguMDcxMTEgMTEuNzM0NyA4LjE3NjQ2IDEyIDguMTc2NDZDMTIuMjY1MiA4LjE3NjQ2IDEyLjUxOTUgOC4wNzExMSAxMi43MDcxIDcuODgzNTdDMTIuODk0NiA3LjY5NjAzIDEzIDcuNDQxNjggMTMgNy4xNzY0NkMxMi45MzE2IDUuOTExMTggMTMuMzY2MyA0LjY3MDE5IDE0LjIwOTMgMy43MjQxNkMxNS4wNTIzIDIuNzc4MTMgMTYuMjM1MiAyLjIwMzgxIDE3LjUgMi4xMjY0NkMxOC43NjQ3IDIuMjAzODEgMTkuOTQ3NiAyLjc3ODEzIDIwLjc5MDYgMy43MjQxNkMyMS42MzM2IDQuNjcwMTkgMjIuMDY4MyA1LjkxMTE4IDIyIDcuMTc2NDZDMjIgMTAuMDc5NSAxOS4wNTMgMTQuMjE1NSAxMy45MTUgMTguNTIyNVYxOC41MjY1WlxcXCIgZmlsbD1cXFwiI0Q3RDdEN1xcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FzaWRlLWZ1bGxcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCY0LfQsdGA0LDQvdC90L7QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGc2VjdGlvblxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiLy8gY29uc29sZS5sb2coMSk7XG4vLyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhlbWV0b2dnbGUnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuLy8gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbi8vICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2RhcmsnKSB7XG4vLyAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWUnKTtcbi8vICAgIH1cbi8vICAgIGVsc2Uge1xuLy8gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgJ2RhcmsnKVxuLy8gICAgfVxuLy8gICAgYWRkRGFya0NsYXNzVG9IVE1MKClcbi8vIH0pO1xuLy8gZnVuY3Rpb24gYWRkRGFya0NsYXNzVG9IVE1MKCkge1xuLy8gICAgdHJ5IHtcbi8vICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSA9PT0gJ2RhcmsnKSB7XG4vLyAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnZScpLmNsYXNzTGlzdC5hZGQoJ2RhcmsnKTtcbi8vICAgICAgIH1cbi8vICAgICAgIGVsc2Uge1xuLy8gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2UnKS5jbGFzc0xpc3QucmVtb3ZlKCdkYXJrJyk7XG4vLyAgICAgICB9XG4vLyAgICB9IGNhdGNoIChlcnIpIHsgfVxuLy8gfVxuLy8gYWRkRGFya0NsYXNzVG9IVE1MKCk7XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vSWNvbi1mYXZvcml0ZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZmF2b3JpdGUuc3ZnXCIsXG5cdFwiLi9JY29uLWZvbGRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZm9sZGVyLnN2Z1wiLFxuXHRcIi4vSWNvbi1ncm91cC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZ3JvdXAuc3ZnXCIsXG5cdFwiLi9JY29uLWhvbWUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWhvbWUuc3ZnXCIsXG5cdFwiLi9JY29uLW1vdmllLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1tb3ZpZS5zdmdcIixcblx0XCIuL0ljb24tc2VhcmNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZWFyY2guc3ZnXCIsXG5cdFwiLi9JY29uLXNldHRpbmdzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZXR0aW5ncy5zdmdcIixcblx0XCIuL0ljb24tdHYuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXR2LnN2Z1wiLFxuXHRcIi4vSWNvbi11c2VyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi11c2VyLnBuZ1wiLFxuXHRcIi4vTG9nby1zdmcuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Mb2dvLXN2Zy5zdmdcIixcblx0XCIuL0xvZ28ucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9Mb2dvLnBuZ1wiLFxuXHRcIi4vZmF2aWNvbi5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nXCIsXG5cdFwiLi9pY29uLXBob25lLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbi1waG9uZS5wbmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsIi8qIChpZ25vcmVkKSAqLyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmwgKyBcIi4uL1wiOyIsIi8vIG5weCBwcmV0dGllciAtLXdyaXRlIFwiKiovKi5wdWdcIlxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7XG5pbXBvcnQgXCIuL2NvcmUvcmVzaXplclwiO1xuaW1wb3J0IFwiLi9jb3JlL21haW5cIjtcbmltcG9ydCBcIi4vdmlld3MvaW5kZXgucHVnXCI7XG4iXSwibmFtZXMiOlsiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdEZvbnQiLCJtb2JpbGVGb250IiwibWluV2lkdGgiLCJtaW5IZWlnaHQiLCJkZWZhdWx0SGVpZ2h0IiwiZlNpemUiLCJkZXZpY2UiLCJ2VyIsInZIIiwiTWF0aCIsIm1pbiIsIm1heCIsIm1vZGlmaWVyRGV2aWNlIiwid2luZG93V2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJpc01vYmlsZSIsImRvY3VtZW50IiwiYm9keSIsInN0eWxlIiwiZm9udFNpemUiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJvbmxvYWQiLCJvbnJlc2l6ZSJdLCJzb3VyY2VSb290IjoiIn0=