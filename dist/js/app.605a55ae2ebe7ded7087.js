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
pug_html = pug_html + "\u003Cspan\u003EАкаунт\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fheader\u003E\u003Csection class=\"hero\"\u003E\u003Cdiv class=\"hero__text\"\u003E\u003Cdiv class=\"hero__title\"\u003E\u003Cspan\u003EВаш домашний ТВ Мир\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__subtitle\"\u003E\u003Cspan\u003EБолее 200 каналов и огромная библиотека фильмов и сериалов ваш лучший источник домашнего развлечения!\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__actions\"\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan\u003EОформить подписку\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"main-btn\"\u003E\u003Cspan\u003EСмотреть тарифы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"hero__slider\"\u003E\u003Cdiv class=\"slider\"\u003E\u003Cdiv class=\"slider__aside\"\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"56\" height=\"56\" viewBox=\"0 0 56 56\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M27.5349 0.680675C27.2321 1.34825 23.1724 10.4981 23.0347 10.8253C22.9934 10.9169 22.8696 10.9955 22.7457 10.9955C22.6356 10.9955 21.8925 11.2049 21.1218 11.4536L19.6906 11.9118L16.3052 9.81737C14.4336 8.65238 12.851 7.69685 12.7822 7.68376C12.7272 7.67068 12.5483 7.8408 12.3969 8.06334L12.1216 8.46917L15.163 10.3541C15.4464 10.529 15.7062 10.6894 15.9444 10.8363C18.1128 12.1741 18.4854 12.404 18.4555 12.4712C18.4492 12.4851 18.4257 12.4921 18.3973 12.5005C18.384 12.5043 18.3698 12.5086 18.3557 12.5139C18.2731 12.5532 17.53 12.9983 16.7043 13.5219C14.0758 15.158 11.7501 17.6189 10.4152 20.1322C9.24542 22.3313 8.75 24.4387 8.75 27.096C8.75 29.2035 8.94266 30.2114 9.72709 32.3319C9.9748 33.0126 11.64 38.6151 13.4428 44.7673C15.2318 50.9195 16.7181 55.9722 16.7318 55.9984C16.771 56.0357 19.0751 55.4372 25.6395 53.6671L22.3379 42.2982C22.4379 42.3458 23.0883 42.4982 24.8891 42.7267C24.8891 42.7267 26.9901 43.0125 29.2413 42.7267C31.4924 42.441 33.1084 41.9268 33.1084 41.9268C33.1084 41.9268 34.691 43.8772 36.4525 46.0501L39.6727 50.0032L40.5122 49.3749C40.9801 49.0215 42.4802 47.922 43.8425 46.9271C45.205 45.9192 46.4022 45.0291 46.4986 44.9375L40.4968 37.5839C40.679 37.3964 41.0637 36.9921 41.1453 36.8741L41.5581 36.4029C42.3287 35.539 43.6224 33.654 44.0903 32.6985C46.5949 27.6327 46.072 22.0041 42.6865 17.4095C41.2278 15.4329 38.3516 13.1815 35.9158 12.1212C34.4708 11.506 32.5166 10.93 30.9891 10.6813C29.5853 10.4588 25.9798 10.4064 24.9614 10.5897C24.6311 10.6551 24.3696 10.642 24.3696 10.5897C24.3696 10.5243 25.3605 8.23354 26.5715 5.49774C27.7825 2.74887 28.7734 0.471238 28.7734 0.405788C28.7734 0.301069 28.1679 0 27.9614 0C27.8927 0 27.7 0.314156 27.5349 0.680675Z\" fill=\"#DF1F28\"\u002F\u003E\n\u003Cpath d=\"M47.2498 44.2983C47.2498 44.2983 46.5947 44.8459 46.4984 44.9375L40.4966 37.5839C40.6788 37.3965 41.0636 36.9921 41.1451 36.8741L44.2002 40.631C47.1452 44.27 47.2498 44.2983 47.2498 44.2983Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M27.8101 52.9616C27.8101 53.027 27.3284 53.2103 26.7504 53.3674C26.3673 53.4709 25.997 53.5707 25.6395 53.6672L22.3379 42.2982C22.4379 42.3458 23.0883 42.4982 24.8891 42.7268C24.8891 42.7268 25.567 45.16 26.3651 47.8827C27.1633 50.6054 27.8101 52.883 27.8101 52.9616Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M16.0346 31.8695L14.5339 27.0122C14.0336 25.5837 13.6334 22.5836 16.785 21.155C19.9365 19.7264 26.5398 17.0121 28.0405 16.4407C29.5412 15.8692 34.0434 14.5835 36.1445 21.155L38.5456 28.5837C39.0458 30.298 39.0259 33.9266 34.9439 34.7266C30.8619 35.5266 24.5388 36.246 21.8874 36.5057C19.0361 36.785 17.2932 35.8232 16.0346 31.8695Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003Cpath d=\"M20.1152 32.2606L18.8688 28.2195C18.4533 27.0309 18.3697 25.058 20.9872 23.8694C23.6046 22.6808 28.8952 20.7734 30.1416 20.298C31.388 19.8225 35.6002 17.8791 37.3451 23.3464L38.8111 29.527C39.2266 30.9532 38.2456 33.999 35.9945 34.441C31.7924 35.2659 27.1781 35.9019 24.9761 36.1179C22.608 36.3503 21.1605 35.55 20.1152 32.2606Z\" fill=\"white\"\u002F\u003E\n\u003Cpath d=\"M23.0884 27.8694L29.3914 26.1551L31.6425 29.5837V25.5836L32.9932 25.1551L32.8431 31.0123L31.3424 31.4409L27.8156 26.5836L28.0408 27.5837L26.3899 28.0123L27.5905 32.298L26.3899 32.5838L25.0393 28.4408L23.3885 28.8694L23.0884 27.8694Z\" fill=\"#0A84FF\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E";
pug_mixins["image"]('logo-text.png');
pug_html = pug_html + "\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_532_1751)\"\u003E\n\u003Cpath d=\"M23.7068 22.5037L17.7378 16.5347C19.3644 14.5453 20.1642 12.0068 19.9716 9.44428C19.7791 6.88175 18.609 4.49125 16.7034 2.76724C14.7977 1.04323 12.3024 0.117612 9.73342 0.181844C7.16447 0.246075 4.71848 1.29524 2.9014 3.11233C1.08431 4.92942 0.0351378 7.37541 -0.029094 9.94436C-0.0933258 12.5133 0.832292 15.0087 2.5563 16.9143C4.28031 18.8199 6.67081 19.99 9.23334 20.1826C11.7959 20.3751 14.3344 19.5753 16.3238 17.9487L22.2928 23.9177C22.4814 24.0999 22.734 24.2007 22.9962 24.1984C23.2584 24.1961 23.5092 24.0909 23.6946 23.9055C23.88 23.7201 23.9852 23.4693 23.9875 23.2071C23.9897 22.9449 23.8889 22.6923 23.7068 22.5037ZM9.99978 18.2107C8.41753 18.2107 6.87081 17.7415 5.55522 16.8625C4.23963 15.9834 3.21425 14.734 2.60875 13.2722C2.00324 11.8104 1.84482 10.2018 2.1535 8.65C2.46218 7.09815 3.22411 5.67269 4.34293 4.55386C5.46175 3.43504 6.88721 2.67312 8.43906 2.36444C9.99091 2.05576 11.5994 2.21418 13.0612 2.81968C14.5231 3.42518 15.7725 4.45056 16.6515 5.76616C17.5306 7.08175 17.9998 8.62847 17.9998 10.2107C17.9974 12.3317 17.1538 14.3652 15.654 15.8649C14.1542 17.3647 12.1208 18.2083 9.99978 18.2107Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_532_1751\"\u003E\n\u003Crect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0 0.210022)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EПоиск\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M23.121 9.27895L15.536 1.69295C14.5973 0.756939 13.3257 0.231323 12 0.231323C10.6744 0.231323 9.40277 0.756939 8.46401 1.69295L0.879012 9.27895C0.599438 9.55673 0.377782 9.88725 0.226895 10.2513C0.0760072 10.6154 -0.0011104 11.0058 1.20795e-05 11.3999V21.2169C1.20795e-05 22.0126 0.316083 22.7757 0.878692 23.3383C1.4413 23.9009 2.20436 24.2169 3.00001 24.2169H21C21.7957 24.2169 22.5587 23.9009 23.1213 23.3383C23.6839 22.7757 24 22.0126 24 21.2169V11.3999C24.0011 11.0058 23.924 10.6154 23.7731 10.2513C23.6222 9.88725 23.4006 9.55673 23.121 9.27895ZM15 22.2169H9.00001V18.2829C9.00001 17.4873 9.31608 16.7242 9.87869 16.1616C10.4413 15.599 11.2044 15.2829 12 15.2829C12.7957 15.2829 13.5587 15.599 14.1213 16.1616C14.6839 16.7242 15 17.4873 15 18.2829V22.2169ZM22 21.2169C22 21.4822 21.8947 21.7365 21.7071 21.9241C21.5196 22.1116 21.2652 22.2169 21 22.2169H17V18.2829C17 16.9569 16.4732 15.6851 15.5355 14.7474C14.5979 13.8097 13.3261 13.2829 12 13.2829C10.6739 13.2829 9.40216 13.8097 8.46448 14.7474C7.5268 15.6851 7.00001 16.9569 7.00001 18.2829V22.2169H3.00001C2.7348 22.2169 2.48044 22.1116 2.29291 21.9241C2.10537 21.7365 2.00001 21.4822 2.00001 21.2169V11.3999C2.00094 11.1349 2.1062 10.8809 2.29301 10.6929L9.87801 3.10995C10.4417 2.54888 11.2047 2.23389 12 2.23389C12.7953 2.23389 13.5583 2.54888 14.122 3.10995L21.707 10.6959C21.8931 10.8832 21.9983 11.136 22 11.3999V21.2169Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EГлавная\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19 1.20972H5C3.67441 1.2113 2.40356 1.7386 1.46622 2.67594C0.528882 3.61327 0.00158786 4.88412 0 6.20972V14.2097C0.00158786 15.5353 0.528882 16.8062 1.46622 17.7435C2.40356 18.6808 3.67441 19.2081 5 19.2097H11V21.2097H7C6.73478 21.2097 6.48043 21.3151 6.29289 21.5026C6.10536 21.6901 6 21.9445 6 22.2097C6 22.4749 6.10536 22.7293 6.29289 22.9168C6.48043 23.1044 6.73478 23.2097 7 23.2097H17C17.2652 23.2097 17.5196 23.1044 17.7071 22.9168C17.8946 22.7293 18 22.4749 18 22.2097C18 21.9445 17.8946 21.6901 17.7071 21.5026C17.5196 21.3151 17.2652 21.2097 17 21.2097H13V19.2097H19C20.3256 19.2081 21.5964 18.6808 22.5338 17.7435C23.4711 16.8062 23.9984 15.5353 24 14.2097V6.20972C23.9984 4.88412 23.4711 3.61327 22.5338 2.67594C21.5964 1.7386 20.3256 1.2113 19 1.20972ZM5 3.20972H19C19.7956 3.20972 20.5587 3.52579 21.1213 4.0884C21.6839 4.65101 22 5.41407 22 6.20972V13.2097H2V6.20972C2 5.41407 2.31607 4.65101 2.87868 4.0884C3.44129 3.52579 4.20435 3.20972 5 3.20972ZM19 17.2097H5C4.38174 17.2072 3.77937 17.0136 3.2753 16.6556C2.77123 16.2976 2.39008 15.7926 2.184 15.2097H21.816C21.6099 15.7926 21.2288 16.2976 20.7247 16.6556C20.2206 17.0136 19.6183 17.2072 19 17.2097Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EТелеканалы\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"25\" viewBox=\"0 0 24 25\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_532_1760)\"\u003E\n\u003Cpath d=\"M19 0.210022H5C3.67441 0.21161 2.40356 0.738904 1.46622 1.67624C0.528882 2.61358 0.00158786 3.88443 0 5.21002V19.21C0.00158786 20.5356 0.528882 21.8065 1.46622 22.7438C2.40356 23.6811 3.67441 24.2084 5 24.21H19C20.3256 24.2084 21.5964 23.6811 22.5338 22.7438C23.4711 21.8065 23.9984 20.5356 24 19.21V5.21002C23.9984 3.88443 23.4711 2.61358 22.5338 1.67624C21.5964 0.738904 20.3256 0.21161 19 0.210022ZM20 11.21H22V13.21H20V11.21ZM20 9.21002V7.21002H22V9.21002H20ZM18 11.21H6V2.21002H18V11.21ZM4 13.21H2V11.21H4V13.21ZM4 9.21002H2V7.21002H4V9.21002ZM2 15.21H4V17.21H2V15.21ZM6 13.21H18V22.21H6V13.21ZM20 15.21H22V17.21H20V15.21ZM22 5.21002H20V2.39402C20.5829 2.60011 21.0879 2.98125 21.4459 3.48532C21.8039 3.98939 21.9974 4.59176 22 5.21002ZM4 2.39402V5.21002H2C2.00256 4.59176 2.19608 3.98939 2.55409 3.48532C2.91209 2.98125 3.41709 2.60011 4 2.39402ZM2 19.21H4V22.026C3.41709 21.8199 2.91209 21.4388 2.55409 20.9347C2.19608 20.4307 2.00256 19.8283 2 19.21ZM20 22.026V19.21H22C21.9974 19.8283 21.8039 20.4307 21.4459 20.9347C21.0879 21.4388 20.5829 21.8199 20 22.026Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_532_1760\"\u003E\n\u003Crect width=\"24\" height=\"24\" fill=\"white\" transform=\"translate(0 0.210022)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EКинозал\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"23\" viewBox=\"0 0 24 23\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M19 2.21021H12.472C12.3173 2.21123 12.1645 2.17703 12.025 2.11021L8.869 0.526205C8.45239 0.31875 7.9934 0.210591 7.528 0.210205H5C3.67441 0.211793 2.40356 0.739087 1.46622 1.67643C0.528882 2.61376 0.00158786 3.88461 0 5.21021V17.2102C0.00158786 18.5358 0.528882 19.8067 1.46622 20.744C2.40356 21.6813 3.67441 22.2086 5 22.2102H19C20.3256 22.2086 21.5964 21.6813 22.5338 20.744C23.4711 19.8067 23.9984 18.5358 24 17.2102V7.21021C23.9984 5.88461 23.4711 4.61376 22.5338 3.67643C21.5964 2.73909 20.3256 2.21179 19 2.21021ZM5 2.21021H7.528C7.68266 2.20918 7.83552 2.24338 7.975 2.31021L11.131 3.88921C11.5472 4.09839 12.0062 4.20827 12.472 4.21021H19C19.598 4.21118 20.1821 4.39088 20.6773 4.72622C21.1725 5.06156 21.5561 5.53725 21.779 6.09221L2 6.20421V5.21021C2 4.41456 2.31607 3.65149 2.87868 3.08889C3.44129 2.52628 4.20435 2.21021 5 2.21021ZM19 20.2102H5C4.20435 20.2102 3.44129 19.8941 2.87868 19.3315C2.31607 18.7689 2 18.0059 2 17.2102V8.20421L22 8.09121V17.2102C22 18.0059 21.6839 18.7689 21.1213 19.3315C20.5587 19.8941 19.7956 20.2102 19 20.2102Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EАрхив\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-item\"\u003E\u003Cdiv class=\"slider__aside-icon\"\u003E\u003Csvg width=\"24\" height=\"22\" viewBox=\"0 0 24 22\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cpath d=\"M17.5 0.126465C16.3739 0.14398 15.2724 0.458318 14.3067 1.03774C13.341 1.61715 12.5453 2.44113 12 3.42646C11.4546 2.44113 10.6589 1.61715 9.6932 1.03774C8.7275 0.458318 7.62601 0.14398 6.49996 0.126465C4.7049 0.204456 3.01366 0.989719 1.79574 2.3107C0.577818 3.63168 -0.0677922 5.38099 -4.17088e-05 7.17646C-4.17088e-05 11.7235 4.78596 16.6895 8.79996 20.0565C9.69618 20.8096 10.8293 21.2225 12 21.2225C13.1706 21.2225 14.3037 20.8096 15.2 20.0565C19.214 16.6895 24 11.7235 24 7.17646C24.0677 5.38099 23.4221 3.63168 22.2042 2.3107C20.9863 0.989719 19.295 0.204456 17.5 0.126465ZM13.915 18.5265C13.3789 18.9778 12.7007 19.2254 12 19.2254C11.2992 19.2254 10.621 18.9778 10.085 18.5265C4.94696 14.2155 1.99996 10.0795 1.99996 7.17646C1.9316 5.91118 2.36632 4.67019 3.20932 3.72416C4.05232 2.77813 5.23519 2.20381 6.49996 2.12646C7.76472 2.20381 8.9476 2.77813 9.7906 3.72416C10.6336 4.67019 11.0683 5.91118 11 7.17646C11 7.44168 11.1053 7.69603 11.2929 7.88357C11.4804 8.07111 11.7347 8.17646 12 8.17646C12.2652 8.17646 12.5195 8.07111 12.7071 7.88357C12.8946 7.69603 13 7.44168 13 7.17646C12.9316 5.91118 13.3663 4.67019 14.2093 3.72416C15.0523 2.77813 16.2352 2.20381 17.5 2.12646C18.7647 2.20381 19.9476 2.77813 20.7906 3.72416C21.6336 4.67019 22.0683 5.91118 22 7.17646C22 10.0795 19.053 14.2155 13.915 18.5225V18.5265Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__aside-text\"\u003E\u003Cspan\u003EИзбранное\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__content\"\u003E\u003Cdiv class=\"slider__search hidden\"\u003E\u003Cdiv class=\"custom-input\"\u003E\u003Cdiv class=\"custom-input__label\"\u003E\u003Cspan\u003EПоиск\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-input__insert custom-input__insert--active\"\u003E\u003Cdiv class=\"custom-input__logo\"\u003E\u003Csvg width=\"20\" height=\"20\" viewBox=\"0 0 20 20\" fill=\"none\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\n\u003Cg clip-path=\"url(#clip0_559_9446)\"\u003E\n\u003Cpath d=\"M10.0003 10C9.01137 10 8.04467 9.70676 7.22243 9.15735C6.40018 8.60794 5.75932 7.82705 5.38088 6.91342C5.00244 5.99979 4.90343 4.99446 5.09635 4.02455C5.28928 3.05465 5.76548 2.16373 6.46475 1.46447C7.16401 0.765206 8.05492 0.289002 9.02483 0.0960759C9.99473 -0.0968503 11.0001 0.00216643 11.9137 0.380605C12.8273 0.759043 13.6082 1.39991 14.1576 2.22215C14.707 3.0444 15.0003 4.0111 15.0003 5C14.999 6.32568 14.4717 7.59668 13.5344 8.53407C12.597 9.47147 11.326 9.99868 10.0003 10ZM10.0003 1.66667C9.34101 1.66667 8.69654 1.86217 8.14838 2.22844C7.60021 2.59471 7.17297 3.1153 6.92068 3.72439C6.66839 4.33348 6.60238 5.0037 6.731 5.6503C6.85961 6.29691 7.17708 6.89085 7.64326 7.35703C8.10943 7.8232 8.70337 8.14067 9.34998 8.26929C9.99658 8.3979 10.6668 8.33189 11.2759 8.0796C11.885 7.82731 12.4056 7.40007 12.7718 6.8519C13.1381 6.30374 13.3336 5.65927 13.3336 5C13.3336 4.11595 12.9824 3.2681 12.3573 2.64298C11.7322 2.01786 10.8843 1.66667 10.0003 1.66667Z\" fill=\"#currentColor\"\u002F\u003E\n\u003Cpath d=\"M10.0003 11.4286C12.0834 11.4309 14.0806 12.2444 15.5536 13.6906C17.0266 15.1368 17.8551 17.0977 17.8574 19.1429C17.8574 19.3702 17.7654 19.5883 17.6017 19.749C17.438 19.9097 17.2159 20.0001 16.9844 20.0001C16.7529 20.0001 16.5308 19.9097 16.3671 19.749C16.2034 19.5883 16.1114 19.3702 16.1114 19.1429C16.1114 17.5516 15.4675 16.0255 14.3215 14.9003C13.1754 13.7751 11.621 13.1429 10.0003 13.1429C8.37951 13.1429 6.82513 13.7751 5.67908 14.9003C4.53302 16.0255 3.88917 17.5516 3.88917 19.1429C3.88917 19.3702 3.7972 19.5883 3.63347 19.749C3.46975 19.9097 3.24769 20.0001 3.01616 20.0001C2.78462 20.0001 2.56256 19.9097 2.39884 19.749C2.23512 19.5883 2.14314 19.3702 2.14314 19.1429C2.14545 17.0977 2.974 15.1368 4.447 13.6906C5.92 12.2444 7.91715 11.4309 10.0003 11.4286Z\" fill=\"#currentColor\"\u002F\u003E\n\u003C\u002Fg\u003E\n\u003Cdefs\u003E\n\u003CclipPath id=\"clip0_559_9446\"\u003E\n\u003Crect width=\"20\" height=\"20\" fill=\"white\" transform=\"matrix(-1 0 0 1 20 0)\"\u002F\u003E\n\u003C\u002FclipPath\u003E\n\u003C\u002Fdefs\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-input__input\"\u003E\u003Cinput type=\"text\"\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-input__add custom-input__add--forward\"\u003E\u003C?xml version=\"1.0\" ?\u003E\u003C!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools --\u003E\n\u003Csvg fill=\"#000000\" width=\"800px\" height=\"800px\" viewBox=\"0 0 512 512\" data-name=\"Layer 1\" id=\"Layer_1\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\"\u003E\u003Cpath d=\"M460.54,169.58A222.6,222.6,0,1,0,478,256,221.16,221.16,0,0,0,460.54,169.58ZM256,448C150,448,64,362,64,256S150,64,256,64s192,86,192,192S362,448,256,448Zm28.06-307.33L399.39,256,284.06,371.33l-21.21-21.21L342,271H133.82V241H342l-79.12-79.12Z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"custom-input__hint\"\u003E\u003Cspan\u003EВведите запрос\u003C\u002Fspan\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003Cdiv class=\"slider__home\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E" + (null == (pug_interp = (__webpack_require__(/*! ./parts/footer.pug */ "./src/views/parts/footer.pug").call)(this, locals)) ? "" : pug_interp) + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";;return pug_html;};
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
/* harmony export */   "show": () => (/* binding */ show)
/* harmony export */ });
function show() {
    console.log(1);
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
    (0,_home_page__WEBPACK_IMPORTED_MODULE_0__.show)();
    // Здесь вы можете добавить другой код или вызовы функций, которые должны быть выполнены после загрузки страницы
    // Например:
    // someOtherFunction();
    // additionalCode();
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
	"./icon-go.svg": "./src/assets/images/icon-go.svg",
	"./icon-phone.png": "./src/assets/images/icon-phone.png",
	"./logo-text.png": "./src/assets/images/logo-text.png",
	"./logo-text.svg": "./src/assets/images/logo-text.svg",
	"./poster.png": "./src/assets/images/poster.png"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O0FDeENBOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDeUI7QUFDRDtBQUNIO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvcmVzaXplci5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3Njc3MvYXBwLnNjc3M/OGI2ZiIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL2luZGV4LnB1ZyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL3ZpZXdzL3BhcnRzL2Zvb3Rlci5wdWciLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzLy4vc3JjL2NvcmUvaG9tZS1wYWdlLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvY29yZS9tYWluLnRzIiwid2VicGFjazovL2phc2tzaGVldHMvLi9zcmMvYXNzZXRzL2ltYWdlcy8gc3luYyBeXFwuXFwvLiokIiwid2VicGFjazovL2phc2tzaGVldHMvaWdub3JlZHwvVXNlcnMvN2VyaGl5L0Rlc2t0b3AvV0VCL3Byb2plY3RzL1JlZG1heGV1L3B1Zy9ub2RlX21vZHVsZXMvcHVnLXJ1bnRpbWV8ZnMiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9qYXNrc2hlZXRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2phc2tzaGVldHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vamFza3NoZWV0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGVmYXVsdFdpZHRoID0gMTQ0MCxcbiAgZGVmYXVsdEZvbnQgPSAxNixcbiAgbW9iaWxlRm9udCA9IDE2LFxuICBtaW5XaWR0aCA9IDc2OCxcbiAgbWluSGVpZ2h0ID0gNjAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gOTAwO1xuXG5mdW5jdGlvbiBmU2l6ZShkZXZpY2UsIHZXLCB2SCkge1xuICBpZiAodlcgPD0gMzc0KSB7XG4gICAgcmV0dXJuIDEzO1xuICB9XG5cbiAgcmV0dXJuIGRldmljZVxuICAgID8gbW9iaWxlRm9udFxuICAgIDogZGVmYXVsdEZvbnQgKlxuICAgICAgICBNYXRoLm1pbihcbiAgICAgICAgICBNYXRoLm1heChtaW5XaWR0aCwgdlcpIC8gZGVmYXVsdFdpZHRoLFxuICAgICAgICAgIE1hdGgubWF4KG1pbkhlaWdodCwgdkgpIC8gZGVmYXVsdEhlaWdodFxuICAgICAgICApO1xufVxuXG5mdW5jdGlvbiBtb2RpZmllckRldmljZSgpIHtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gIHZhciBpc01vYmlsZSA9IHdpbmRvd1dpZHRoIDw9IDc2NztcblxuICBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZm9udFNpemUgPVxuICAgICAgZlNpemUoaXNNb2JpbGUsIHdpbmRvd1dpZHRoLCB3aW5kb3dIZWlnaHQpICsgXCJweFwiO1xuICB9XG5cbiAgaWYgKGlzTW9iaWxlKSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJtb2JpbGVcIik7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJtb2JpbGVcIik7XG4gIH1cbn1cblxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbndpbmRvdy5vbnJlc2l6ZSA9IGZ1bmN0aW9uICgpIHtcbiAgbW9kaWZpZXJEZXZpY2UoKTtcbn07XG5cbm1vZGlmaWVyRGV2aWNlKCk7XG5cblxuXG5cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwO3B1Z19taXhpbnNbXCJpbWFnZVwiXSA9IHB1Z19pbnRlcnAgPSBmdW5jdGlvbihmaWxlKXtcbnZhciBibG9jayA9ICh0aGlzICYmIHRoaXMuYmxvY2spLCBhdHRyaWJ1dGVzID0gKHRoaXMgJiYgdGhpcy5hdHRyaWJ1dGVzKSB8fCB7fTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NpbWdcIiArIChwdWcuYXR0cihcImNsYXNzXCIsIHB1Zy5jbGFzc2VzKFthdHRyaWJ1dGVzLmNsYXNzXSwgW2ZhbHNlXSksIGZhbHNlLCB0cnVlKStwdWcuYXR0cihcInNyY1wiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzLyR7ZmlsZX1gKSwgdHJ1ZSwgdHJ1ZSkrXCIgYWx0PVxcXCJcXFwiXCIpICsgXCJcXHUwMDNFXCI7XG59O1xuXG5cblxuXG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDIURPQ1RZUEUgaHRtbFxcdTAwM0VcXHUwMDNDaHRtbCBsYW5nPVxcXCJlblxcXCJcXHUwMDNFXFx1MDAzQ2hlYWRcXHUwMDNFXFx1MDAzQ21ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiXFx1MDAzRVxcdTAwM0NtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIlxcdTAwM0VcXHUwMDNDbWV0YSBodHRwLWVxdWl2PVxcXCJYLVVBLUNvbXBhdGlibGVcXFwiIGNvbnRlbnQ9XFxcImllPWVkZ2VcXFwiXFx1MDAzRVxcdTAwM0NsaW5rXCIgKyAoXCIgcmVsPVxcXCJzaG9ydGN1dCBpY29uXFxcIlwiK3B1Zy5hdHRyKFwiaHJlZlwiLCByZXF1aXJlKGAuLi9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nYCksIHRydWUsIHRydWUpK1wiIHR5cGU9XFxcImltYWdlXFx1MDAyRnBuZ1xcXCJcIikgKyBcIlxcdTAwM0VcXHUwMDNDdGl0bGVcXHUwMDNFRW1wdHkgUHJvamVjdFxcdTAwM0NcXHUwMDJGdGl0bGVcXHUwMDNFXFx1MDAzQ1xcdTAwMkZoZWFkXFx1MDAzRVxcdTAwM0Nib2R5XFx1MDAzRVxcdTAwM0NoZWFkZXIgY2xhc3M9XFxcImhlYWRlclxcXCJcXHUwMDNFXFx1MDAzQ2EgY2xhc3M9XFxcImhlYWRlcl9fbG9nb1xcXCIgaHJlZj1cXFwiI1xcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJMb2dvLnBuZ1wiKTtcbnB1Z19odG1sID0gcHVnX2h0bWwgKyBcIlxcdTAwM0NcXHUwMDJGYVxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX21lbnVcXFwiXFx1MDAzRVxcdTAwM0N1bCBjbGFzcz1cXFwiaGVhZGVyX19saXN0XFxcIlxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbSBoZWFkZXJfX2l0ZW0tLWFjdGl2ZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNFUmVkbWF4IFRWXFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCa0LDQvdCw0LvRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktC+0LfQvNC+0LbQvdC+0YHRgtC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCf0L7QvNC+0YnRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktC+0L/RgNC+0YHRiyDQuCDQvtGC0LLQtdGC0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JTQtdC60L7QtNC10YDRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd25cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tbGVmdFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0JDQutGG0LjQuFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNC60YbQuNC4XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCQ0LrRhtC40Lgg0Lgg0L/RgNC40LTQu9C+0LbQtdC90LjRj1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQo9GB0LvRg9Cz0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQo9GB0LvRg9Cz0LhcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7QsdC90L7QstC70LXQvdC40LUg0LTQtdC60L7QtNC10YDQsFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntCx0L7RgNGD0LTQvtCy0LDQvdC40LVcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/QtdGA0LXQtdC30LRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0KHQvtGC0YDRg9C00L3QuNGH0LXRgdGC0LLQvlxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQniDRgdC+0YLRgNGD0LTQvdC10YfQtdGB0YLQstC1XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCg0LXQutC70LDQvNCwXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGbGlcXHUwMDNFXFx1MDAzQ2xpIGNsYXNzPVxcXCJoZWFkZXJfX2l0ZW1cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCi0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCi0LDRgNC40YTRi1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotCw0YDQuNGE0L3Ri9C1INC/0LvQsNC90YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J7RgtC80LXQvdCwINGB0LTQtdC70LrQuFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NsaSBjbGFzcz1cXFwiaGVhZGVyX19pdGVtXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQniDQndCw0YFcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQniDQndCw0YFcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0J/RgNC+IFJlZG1heFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LfRi9Cy0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JHQu9C+0LNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93blxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1sZWZ0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDcFxcdTAwM0XQkdC70L7Qs1xcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C+0YHQu9C10LTQvdC40LUg0L3QvtCy0L7RgdGC0LhcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1yaWdodFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi10aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3BcXHUwMDNF0J/QvtC70LXQt9C90L4g0LfQvdCw0YLRjFxcdTAwM0NcXHUwMDJGcFxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VJUFRWINCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQotC10LvQtdCy0LjQtNC10L3RjNC1INCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmNC90YLQtdGA0L3QtdGCINCyINCV0LLRgNC+0L/QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGC0LfRi9Cy0YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZsaVxcdTAwM0VcXHUwMDNDbGkgY2xhc3M9XFxcImhlYWRlcl9faXRlbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JrQvtC90YLQsNC60YLRi1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLWxlZnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCa0L7QvdGC0LDQutGC0YtcXHUwMDNDXFx1MDAyRnBcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdC70LXRhNC+0L1cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19kcm9wZG93bi1zdWJ0aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNFRS1NQUlMXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCb0L7QutCw0YbQuNGPXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tcmlnaHRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tdGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NwXFx1MDAzRdCh0L7RhtC40LDQu9GM0L3Ri9C1INGB0LXRgtC4XFx1MDAzQ1xcdTAwMkZwXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUZhY2Vib29rXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlYWRlcl9fZHJvcGRvd24tc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRUluc3RhZ3JhbVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2Ryb3Bkb3duLXN1YnRpdGxlXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0VXaGF0cyBVcFxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmxpXFx1MDAzRVxcdTAwM0NcXHUwMDJGdWxcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZWFkZXJfX2FjdGlvbnMtY2FsbFxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG4gbWFpbi1idG4tLXNtXFxcIlxcdTAwM0VcIjtcbnB1Z19taXhpbnNbXCJpbWFnZVwiXShcImljb24tcGhvbmUucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NwYW5cXHUwMDNFKjIxODZcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWpvaW5cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLRhdC+0LRcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVhZGVyX19hY3Rpb25zLWFjY291bnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuIG1haW4tYnRuLS1zbVxcXCJcXHUwMDNFXCI7XG5wdWdfbWl4aW5zW1wiaW1hZ2VcIl0oXCJJY29uLXVzZXIucG5nXCIpO1xucHVnX2h0bWwgPSBwdWdfaHRtbCArIFwiXFx1MDAzQ3NwYW5cXHUwMDNF0JDQutCw0YPQvdGCXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGaGVhZGVyXFx1MDAzRVxcdTAwM0NzZWN0aW9uIGNsYXNzPVxcXCJoZXJvXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX190ZXh0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJoZXJvX190aXRsZVxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JLQsNGIINC00L7QvNCw0YjQvdC40Lkg0KLQkiDQnNC40YBcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiaGVyb19fc3VidGl0bGVcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCR0L7Qu9C10LUgMjAwINC60LDQvdCw0LvQvtCyINC4INC+0LPRgNC+0LzQvdCw0Y8g0LHQuNCx0LvQuNC+0YLQtdC60LAg0YTQuNC70YzQvNC+0LIg0Lgg0YHQtdGA0LjQsNC70L7QsiDQstCw0Ygg0LvRg9GH0YjQuNC5INC40YHRgtC+0YfQvdC40Log0LTQvtC80LDRiNC90LXQs9C+INGA0LDQt9Cy0LvQtdGH0LXQvdC40Y8hXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX2FjdGlvbnNcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcIm1haW4tYnRuXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQntGE0L7RgNC80LjRgtGMINC/0L7QtNC/0LjRgdC60YNcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwibWFpbi1idG5cXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCh0LzQvtGC0YDQtdGC0Ywg0YLQsNGA0LjRhNGLXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImhlcm9fX3NsaWRlclxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiNTZcXFwiIGhlaWdodD1cXFwiNTZcXFwiIHZpZXdCb3g9XFxcIjAgMCA1NiA1NlxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBmaWxsLXJ1bGU9XFxcImV2ZW5vZGRcXFwiIGNsaXAtcnVsZT1cXFwiZXZlbm9kZFxcXCIgZD1cXFwiTTI3LjUzNDkgMC42ODA2NzVDMjcuMjMyMSAxLjM0ODI1IDIzLjE3MjQgMTAuNDk4MSAyMy4wMzQ3IDEwLjgyNTNDMjIuOTkzNCAxMC45MTY5IDIyLjg2OTYgMTAuOTk1NSAyMi43NDU3IDEwLjk5NTVDMjIuNjM1NiAxMC45OTU1IDIxLjg5MjUgMTEuMjA0OSAyMS4xMjE4IDExLjQ1MzZMMTkuNjkwNiAxMS45MTE4TDE2LjMwNTIgOS44MTczN0MxNC40MzM2IDguNjUyMzggMTIuODUxIDcuNjk2ODUgMTIuNzgyMiA3LjY4Mzc2QzEyLjcyNzIgNy42NzA2OCAxMi41NDgzIDcuODQwOCAxMi4zOTY5IDguMDYzMzRMMTIuMTIxNiA4LjQ2OTE3TDE1LjE2MyAxMC4zNTQxQzE1LjQ0NjQgMTAuNTI5IDE1LjcwNjIgMTAuNjg5NCAxNS45NDQ0IDEwLjgzNjNDMTguMTEyOCAxMi4xNzQxIDE4LjQ4NTQgMTIuNDA0IDE4LjQ1NTUgMTIuNDcxMkMxOC40NDkyIDEyLjQ4NTEgMTguNDI1NyAxMi40OTIxIDE4LjM5NzMgMTIuNTAwNUMxOC4zODQgMTIuNTA0MyAxOC4zNjk4IDEyLjUwODYgMTguMzU1NyAxMi41MTM5QzE4LjI3MzEgMTIuNTUzMiAxNy41MyAxMi45OTgzIDE2LjcwNDMgMTMuNTIxOUMxNC4wNzU4IDE1LjE1OCAxMS43NTAxIDE3LjYxODkgMTAuNDE1MiAyMC4xMzIyQzkuMjQ1NDIgMjIuMzMxMyA4Ljc1IDI0LjQzODcgOC43NSAyNy4wOTZDOC43NSAyOS4yMDM1IDguOTQyNjYgMzAuMjExNCA5LjcyNzA5IDMyLjMzMTlDOS45NzQ4IDMzLjAxMjYgMTEuNjQgMzguNjE1MSAxMy40NDI4IDQ0Ljc2NzNDMTUuMjMxOCA1MC45MTk1IDE2LjcxODEgNTUuOTcyMiAxNi43MzE4IDU1Ljk5ODRDMTYuNzcxIDU2LjAzNTcgMTkuMDc1MSA1NS40MzcyIDI1LjYzOTUgNTMuNjY3MUwyMi4zMzc5IDQyLjI5ODJDMjIuNDM3OSA0Mi4zNDU4IDIzLjA4ODMgNDIuNDk4MiAyNC44ODkxIDQyLjcyNjdDMjQuODg5MSA0Mi43MjY3IDI2Ljk5MDEgNDMuMDEyNSAyOS4yNDEzIDQyLjcyNjdDMzEuNDkyNCA0Mi40NDEgMzMuMTA4NCA0MS45MjY4IDMzLjEwODQgNDEuOTI2OEMzMy4xMDg0IDQxLjkyNjggMzQuNjkxIDQzLjg3NzIgMzYuNDUyNSA0Ni4wNTAxTDM5LjY3MjcgNTAuMDAzMkw0MC41MTIyIDQ5LjM3NDlDNDAuOTgwMSA0OS4wMjE1IDQyLjQ4MDIgNDcuOTIyIDQzLjg0MjUgNDYuOTI3MUM0NS4yMDUgNDUuOTE5MiA0Ni40MDIyIDQ1LjAyOTEgNDYuNDk4NiA0NC45Mzc1TDQwLjQ5NjggMzcuNTgzOUM0MC42NzkgMzcuMzk2NCA0MS4wNjM3IDM2Ljk5MjEgNDEuMTQ1MyAzNi44NzQxTDQxLjU1ODEgMzYuNDAyOUM0Mi4zMjg3IDM1LjUzOSA0My42MjI0IDMzLjY1NCA0NC4wOTAzIDMyLjY5ODVDNDYuNTk0OSAyNy42MzI3IDQ2LjA3MiAyMi4wMDQxIDQyLjY4NjUgMTcuNDA5NUM0MS4yMjc4IDE1LjQzMjkgMzguMzUxNiAxMy4xODE1IDM1LjkxNTggMTIuMTIxMkMzNC40NzA4IDExLjUwNiAzMi41MTY2IDEwLjkzIDMwLjk4OTEgMTAuNjgxM0MyOS41ODUzIDEwLjQ1ODggMjUuOTc5OCAxMC40MDY0IDI0Ljk2MTQgMTAuNTg5N0MyNC42MzExIDEwLjY1NTEgMjQuMzY5NiAxMC42NDIgMjQuMzY5NiAxMC41ODk3QzI0LjM2OTYgMTAuNTI0MyAyNS4zNjA1IDguMjMzNTQgMjYuNTcxNSA1LjQ5Nzc0QzI3Ljc4MjUgMi43NDg4NyAyOC43NzM0IDAuNDcxMjM4IDI4Ljc3MzQgMC40MDU3ODhDMjguNzczNCAwLjMwMTA2OSAyOC4xNjc5IDAgMjcuOTYxNCAwQzI3Ljg5MjcgMCAyNy43IDAuMzE0MTU2IDI3LjUzNDkgMC42ODA2NzVaXFxcIiBmaWxsPVxcXCIjREYxRjI4XFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTQ3LjI0OTggNDQuMjk4M0M0Ny4yNDk4IDQ0LjI5ODMgNDYuNTk0NyA0NC44NDU5IDQ2LjQ5ODQgNDQuOTM3NUw0MC40OTY2IDM3LjU4MzlDNDAuNjc4OCAzNy4zOTY1IDQxLjA2MzYgMzYuOTkyMSA0MS4xNDUxIDM2Ljg3NDFMNDQuMjAwMiA0MC42MzFDNDcuMTQ1MiA0NC4yNyA0Ny4yNDk4IDQ0LjI5ODMgNDcuMjQ5OCA0NC4yOTgzWlxcXCIgZmlsbD1cXFwiIzBBODRGRlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yNy44MTAxIDUyLjk2MTZDMjcuODEwMSA1My4wMjcgMjcuMzI4NCA1My4yMTAzIDI2Ljc1MDQgNTMuMzY3NEMyNi4zNjczIDUzLjQ3MDkgMjUuOTk3IDUzLjU3MDcgMjUuNjM5NSA1My42NjcyTDIyLjMzNzkgNDIuMjk4MkMyMi40Mzc5IDQyLjM0NTggMjMuMDg4MyA0Mi40OTgyIDI0Ljg4OTEgNDIuNzI2OEMyNC44ODkxIDQyLjcyNjggMjUuNTY3IDQ1LjE2IDI2LjM2NTEgNDcuODgyN0MyNy4xNjMzIDUwLjYwNTQgMjcuODEwMSA1Mi44ODMgMjcuODEwMSA1Mi45NjE2WlxcXCIgZmlsbD1cXFwiIzBBODRGRlxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNi4wMzQ2IDMxLjg2OTVMMTQuNTMzOSAyNy4wMTIyQzE0LjAzMzYgMjUuNTgzNyAxMy42MzM0IDIyLjU4MzYgMTYuNzg1IDIxLjE1NUMxOS45MzY1IDE5LjcyNjQgMjYuNTM5OCAxNy4wMTIxIDI4LjA0MDUgMTYuNDQwN0MyOS41NDEyIDE1Ljg2OTIgMzQuMDQzNCAxNC41ODM1IDM2LjE0NDUgMjEuMTU1TDM4LjU0NTYgMjguNTgzN0MzOS4wNDU4IDMwLjI5OCAzOS4wMjU5IDMzLjkyNjYgMzQuOTQzOSAzNC43MjY2QzMwLjg2MTkgMzUuNTI2NiAyNC41Mzg4IDM2LjI0NiAyMS44ODc0IDM2LjUwNTdDMTkuMDM2MSAzNi43ODUgMTcuMjkzMiAzNS44MjMyIDE2LjAzNDYgMzEuODY5NVpcXFwiIGZpbGw9XFxcIiMwQTg0RkZcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMjAuMTE1MiAzMi4yNjA2TDE4Ljg2ODggMjguMjE5NUMxOC40NTMzIDI3LjAzMDkgMTguMzY5NyAyNS4wNTggMjAuOTg3MiAyMy44Njk0QzIzLjYwNDYgMjIuNjgwOCAyOC44OTUyIDIwLjc3MzQgMzAuMTQxNiAyMC4yOThDMzEuMzg4IDE5LjgyMjUgMzUuNjAwMiAxNy44NzkxIDM3LjM0NTEgMjMuMzQ2NEwzOC44MTExIDI5LjUyN0MzOS4yMjY2IDMwLjk1MzIgMzguMjQ1NiAzMy45OTkgMzUuOTk0NSAzNC40NDFDMzEuNzkyNCAzNS4yNjU5IDI3LjE3ODEgMzUuOTAxOSAyNC45NzYxIDM2LjExNzlDMjIuNjA4IDM2LjM1MDMgMjEuMTYwNSAzNS41NSAyMC4xMTUyIDMyLjI2MDZaXFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0yMy4wODg0IDI3Ljg2OTRMMjkuMzkxNCAyNi4xNTUxTDMxLjY0MjUgMjkuNTgzN1YyNS41ODM2TDMyLjk5MzIgMjUuMTU1MUwzMi44NDMxIDMxLjAxMjNMMzEuMzQyNCAzMS40NDA5TDI3LjgxNTYgMjYuNTgzNkwyOC4wNDA4IDI3LjU4MzdMMjYuMzg5OSAyOC4wMTIzTDI3LjU5MDUgMzIuMjk4TDI2LjM4OTkgMzIuNTgzOEwyNS4wMzkzIDI4LjQ0MDhMMjMuMzg4NSAyOC44Njk0TDIzLjA4ODQgMjcuODY5NFpcXFwiIGZpbGw9XFxcIiMwQTg0RkZcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVwiO1xucHVnX21peGluc1tcImltYWdlXCJdKCdsb2dvLXRleHQucG5nJyk7XG5wdWdfaHRtbCA9IHB1Z19odG1sICsgXCJcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNVxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfNTMyXzE3NTEpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMjMuNzA2OCAyMi41MDM3TDE3LjczNzggMTYuNTM0N0MxOS4zNjQ0IDE0LjU0NTMgMjAuMTY0MiAxMi4wMDY4IDE5Ljk3MTYgOS40NDQyOEMxOS43NzkxIDYuODgxNzUgMTguNjA5IDQuNDkxMjUgMTYuNzAzNCAyLjc2NzI0QzE0Ljc5NzcgMS4wNDMyMyAxMi4zMDI0IDAuMTE3NjEyIDkuNzMzNDIgMC4xODE4NDRDNy4xNjQ0NyAwLjI0NjA3NSA0LjcxODQ4IDEuMjk1MjQgMi45MDE0IDMuMTEyMzNDMS4wODQzMSA0LjkyOTQyIDAuMDM1MTM3OCA3LjM3NTQxIC0wLjAyOTA5NCA5Ljk0NDM2Qy0wLjA5MzMyNTggMTIuNTEzMyAwLjgzMjI5MiAxNS4wMDg3IDIuNTU2MyAxNi45MTQzQzQuMjgwMzEgMTguODE5OSA2LjY3MDgxIDE5Ljk5IDkuMjMzMzQgMjAuMTgyNkMxMS43OTU5IDIwLjM3NTEgMTQuMzM0NCAxOS41NzUzIDE2LjMyMzggMTcuOTQ4N0wyMi4yOTI4IDIzLjkxNzdDMjIuNDgxNCAyNC4wOTk5IDIyLjczNCAyNC4yMDA3IDIyLjk5NjIgMjQuMTk4NEMyMy4yNTg0IDI0LjE5NjEgMjMuNTA5MiAyNC4wOTA5IDIzLjY5NDYgMjMuOTA1NUMyMy44OCAyMy43MjAxIDIzLjk4NTIgMjMuNDY5MyAyMy45ODc1IDIzLjIwNzFDMjMuOTg5NyAyMi45NDQ5IDIzLjg4ODkgMjIuNjkyMyAyMy43MDY4IDIyLjUwMzdaTTkuOTk5NzggMTguMjEwN0M4LjQxNzUzIDE4LjIxMDcgNi44NzA4MSAxNy43NDE1IDUuNTU1MjIgMTYuODYyNUM0LjIzOTYzIDE1Ljk4MzQgMy4yMTQyNSAxNC43MzQgMi42MDg3NSAxMy4yNzIyQzIuMDAzMjQgMTEuODEwNCAxLjg0NDgyIDEwLjIwMTggMi4xNTM1IDguNjVDMi40NjIxOCA3LjA5ODE1IDMuMjI0MTEgNS42NzI2OSA0LjM0MjkzIDQuNTUzODZDNS40NjE3NSAzLjQzNTA0IDYuODg3MjEgMi42NzMxMiA4LjQzOTA2IDIuMzY0NDRDOS45OTA5MSAyLjA1NTc2IDExLjU5OTQgMi4yMTQxOCAxMy4wNjEyIDIuODE5NjhDMTQuNTIzMSAzLjQyNTE4IDE1Ljc3MjUgNC40NTA1NiAxNi42NTE1IDUuNzY2MTZDMTcuNTMwNiA3LjA4MTc1IDE3Ljk5OTggOC42Mjg0NyAxNy45OTk4IDEwLjIxMDdDMTcuOTk3NCAxMi4zMzE3IDE3LjE1MzggMTQuMzY1MiAxNS42NTQgMTUuODY0OUMxNC4xNTQyIDE3LjM2NDcgMTIuMTIwOCAxOC4yMDgzIDkuOTk5NzggMTguMjEwN1pcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmdcXHUwMDNFXFxuXFx1MDAzQ2RlZnNcXHUwMDNFXFxuXFx1MDAzQ2NsaXBQYXRoIGlkPVxcXCJjbGlwMF81MzJfMTc1MVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3JlY3Qgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI0XFxcIiBmaWxsPVxcXCJ3aGl0ZVxcXCIgdHJhbnNmb3JtPVxcXCJ0cmFuc2xhdGUoMCAwLjIxMDAyMilcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmNsaXBQYXRoXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGVmc1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCf0L7QuNGB0LpcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTIzLjEyMSA5LjI3ODk1TDE1LjUzNiAxLjY5Mjk1QzE0LjU5NzMgMC43NTY5MzkgMTMuMzI1NyAwLjIzMTMyMyAxMiAwLjIzMTMyM0MxMC42NzQ0IDAuMjMxMzIzIDkuNDAyNzcgMC43NTY5MzkgOC40NjQwMSAxLjY5Mjk1TDAuODc5MDEyIDkuMjc4OTVDMC41OTk0MzggOS41NTY3MyAwLjM3Nzc4MiA5Ljg4NzI1IDAuMjI2ODk1IDEwLjI1MTNDMC4wNzYwMDcyIDEwLjYxNTQgLTAuMDAxMTEwNCAxMS4wMDU4IDEuMjA3OTVlLTA1IDExLjM5OTlWMjEuMjE2OUMxLjIwNzk1ZS0wNSAyMi4wMTI2IDAuMzE2MDgzIDIyLjc3NTcgMC44Nzg2OTIgMjMuMzM4M0MxLjQ0MTMgMjMuOTAwOSAyLjIwNDM2IDI0LjIxNjkgMy4wMDAwMSAyNC4yMTY5SDIxQzIxLjc5NTcgMjQuMjE2OSAyMi41NTg3IDIzLjkwMDkgMjMuMTIxMyAyMy4zMzgzQzIzLjY4MzkgMjIuNzc1NyAyNCAyMi4wMTI2IDI0IDIxLjIxNjlWMTEuMzk5OUMyNC4wMDExIDExLjAwNTggMjMuOTI0IDEwLjYxNTQgMjMuNzczMSAxMC4yNTEzQzIzLjYyMjIgOS44ODcyNSAyMy40MDA2IDkuNTU2NzMgMjMuMTIxIDkuMjc4OTVaTTE1IDIyLjIxNjlIOS4wMDAwMVYxOC4yODI5QzkuMDAwMDEgMTcuNDg3MyA5LjMxNjA4IDE2LjcyNDIgOS44Nzg2OSAxNi4xNjE2QzEwLjQ0MTMgMTUuNTk5IDExLjIwNDQgMTUuMjgyOSAxMiAxNS4yODI5QzEyLjc5NTcgMTUuMjgyOSAxMy41NTg3IDE1LjU5OSAxNC4xMjEzIDE2LjE2MTZDMTQuNjgzOSAxNi43MjQyIDE1IDE3LjQ4NzMgMTUgMTguMjgyOVYyMi4yMTY5Wk0yMiAyMS4yMTY5QzIyIDIxLjQ4MjIgMjEuODk0NyAyMS43MzY1IDIxLjcwNzEgMjEuOTI0MUMyMS41MTk2IDIyLjExMTYgMjEuMjY1MiAyMi4yMTY5IDIxIDIyLjIxNjlIMTdWMTguMjgyOUMxNyAxNi45NTY5IDE2LjQ3MzIgMTUuNjg1MSAxNS41MzU1IDE0Ljc0NzRDMTQuNTk3OSAxMy44MDk3IDEzLjMyNjEgMTMuMjgyOSAxMiAxMy4yODI5QzEwLjY3MzkgMTMuMjgyOSA5LjQwMjE2IDEzLjgwOTcgOC40NjQ0OCAxNC43NDc0QzcuNTI2OCAxNS42ODUxIDcuMDAwMDEgMTYuOTU2OSA3LjAwMDAxIDE4LjI4MjlWMjIuMjE2OUgzLjAwMDAxQzIuNzM0OCAyMi4yMTY5IDIuNDgwNDQgMjIuMTExNiAyLjI5MjkxIDIxLjkyNDFDMi4xMDUzNyAyMS43MzY1IDIuMDAwMDEgMjEuNDgyMiAyLjAwMDAxIDIxLjIxNjlWMTEuMzk5OUMyLjAwMDk0IDExLjEzNDkgMi4xMDYyIDEwLjg4MDkgMi4yOTMwMSAxMC42OTI5TDkuODc4MDEgMy4xMDk5NUMxMC40NDE3IDIuNTQ4ODggMTEuMjA0NyAyLjIzMzg5IDEyIDIuMjMzODlDMTIuNzk1MyAyLjIzMzg5IDEzLjU1ODMgMi41NDg4OCAxNC4xMjIgMy4xMDk5NUwyMS43MDcgMTAuNjk1OUMyMS44OTMxIDEwLjg4MzIgMjEuOTk4MyAxMS4xMzYgMjIgMTEuMzk5OVYyMS4yMTY5WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0JPQu9Cw0LLQvdCw0Y9cXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE5IDEuMjA5NzJINUMzLjY3NDQxIDEuMjExMyAyLjQwMzU2IDEuNzM4NiAxLjQ2NjIyIDIuNjc1OTRDMC41Mjg4ODIgMy42MTMyNyAwLjAwMTU4Nzg2IDQuODg0MTIgMCA2LjIwOTcyVjE0LjIwOTdDMC4wMDE1ODc4NiAxNS41MzUzIDAuNTI4ODgyIDE2LjgwNjIgMS40NjYyMiAxNy43NDM1QzIuNDAzNTYgMTguNjgwOCAzLjY3NDQxIDE5LjIwODEgNSAxOS4yMDk3SDExVjIxLjIwOTdIN0M2LjczNDc4IDIxLjIwOTcgNi40ODA0MyAyMS4zMTUxIDYuMjkyODkgMjEuNTAyNkM2LjEwNTM2IDIxLjY5MDEgNiAyMS45NDQ1IDYgMjIuMjA5N0M2IDIyLjQ3NDkgNi4xMDUzNiAyMi43MjkzIDYuMjkyODkgMjIuOTE2OEM2LjQ4MDQzIDIzLjEwNDQgNi43MzQ3OCAyMy4yMDk3IDcgMjMuMjA5N0gxN0MxNy4yNjUyIDIzLjIwOTcgMTcuNTE5NiAyMy4xMDQ0IDE3LjcwNzEgMjIuOTE2OEMxNy44OTQ2IDIyLjcyOTMgMTggMjIuNDc0OSAxOCAyMi4yMDk3QzE4IDIxLjk0NDUgMTcuODk0NiAyMS42OTAxIDE3LjcwNzEgMjEuNTAyNkMxNy41MTk2IDIxLjMxNTEgMTcuMjY1MiAyMS4yMDk3IDE3IDIxLjIwOTdIMTNWMTkuMjA5N0gxOUMyMC4zMjU2IDE5LjIwODEgMjEuNTk2NCAxOC42ODA4IDIyLjUzMzggMTcuNzQzNUMyMy40NzExIDE2LjgwNjIgMjMuOTk4NCAxNS41MzUzIDI0IDE0LjIwOTdWNi4yMDk3MkMyMy45OTg0IDQuODg0MTIgMjMuNDcxMSAzLjYxMzI3IDIyLjUzMzggMi42NzU5NEMyMS41OTY0IDEuNzM4NiAyMC4zMjU2IDEuMjExMyAxOSAxLjIwOTcyWk01IDMuMjA5NzJIMTlDMTkuNzk1NiAzLjIwOTcyIDIwLjU1ODcgMy41MjU3OSAyMS4xMjEzIDQuMDg4NEMyMS42ODM5IDQuNjUxMDEgMjIgNS40MTQwNyAyMiA2LjIwOTcyVjEzLjIwOTdIMlY2LjIwOTcyQzIgNS40MTQwNyAyLjMxNjA3IDQuNjUxMDEgMi44Nzg2OCA0LjA4ODRDMy40NDEyOSAzLjUyNTc5IDQuMjA0MzUgMy4yMDk3MiA1IDMuMjA5NzJaTTE5IDE3LjIwOTdINUM0LjM4MTc0IDE3LjIwNzIgMy43NzkzNyAxNy4wMTM2IDMuMjc1MyAxNi42NTU2QzIuNzcxMjMgMTYuMjk3NiAyLjM5MDA4IDE1Ljc5MjYgMi4xODQgMTUuMjA5N0gyMS44MTZDMjEuNjA5OSAxNS43OTI2IDIxLjIyODggMTYuMjk3NiAyMC43MjQ3IDE2LjY1NTZDMjAuMjIwNiAxNy4wMTM2IDE5LjYxODMgMTcuMjA3MiAxOSAxNy4yMDk3WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtdGV4dFxcXCJcXHUwMDNFXFx1MDAzQ3NwYW5cXHUwMDNF0KLQtdC70LXQutCw0L3QsNC70YtcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pdGVtXFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWljb25cXFwiXFx1MDAzRVxcdTAwM0Nzdmcgd2lkdGg9XFxcIjI0XFxcIiBoZWlnaHQ9XFxcIjI1XFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjVcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHhtbG5zPVxcXCJodHRwOlxcdTAwMkZcXHUwMDJGd3d3LnczLm9yZ1xcdTAwMkYyMDAwXFx1MDAyRnN2Z1xcXCJcXHUwMDNFXFxuXFx1MDAzQ2cgY2xpcC1wYXRoPVxcXCJ1cmwoI2NsaXAwXzUzMl8xNzYwKVxcXCJcXHUwMDNFXFxuXFx1MDAzQ3BhdGggZD1cXFwiTTE5IDAuMjEwMDIySDVDMy42NzQ0MSAwLjIxMTYxIDIuNDAzNTYgMC43Mzg5MDQgMS40NjYyMiAxLjY3NjI0QzAuNTI4ODgyIDIuNjEzNTggMC4wMDE1ODc4NiAzLjg4NDQzIDAgNS4yMTAwMlYxOS4yMUMwLjAwMTU4Nzg2IDIwLjUzNTYgMC41Mjg4ODIgMjEuODA2NSAxLjQ2NjIyIDIyLjc0MzhDMi40MDM1NiAyMy42ODExIDMuNjc0NDEgMjQuMjA4NCA1IDI0LjIxSDE5QzIwLjMyNTYgMjQuMjA4NCAyMS41OTY0IDIzLjY4MTEgMjIuNTMzOCAyMi43NDM4QzIzLjQ3MTEgMjEuODA2NSAyMy45OTg0IDIwLjUzNTYgMjQgMTkuMjFWNS4yMTAwMkMyMy45OTg0IDMuODg0NDMgMjMuNDcxMSAyLjYxMzU4IDIyLjUzMzggMS42NzYyNEMyMS41OTY0IDAuNzM4OTA0IDIwLjMyNTYgMC4yMTE2MSAxOSAwLjIxMDAyMlpNMjAgMTEuMjFIMjJWMTMuMjFIMjBWMTEuMjFaTTIwIDkuMjEwMDJWNy4yMTAwMkgyMlY5LjIxMDAySDIwWk0xOCAxMS4yMUg2VjIuMjEwMDJIMThWMTEuMjFaTTQgMTMuMjFIMlYxMS4yMUg0VjEzLjIxWk00IDkuMjEwMDJIMlY3LjIxMDAySDRWOS4yMTAwMlpNMiAxNS4yMUg0VjE3LjIxSDJWMTUuMjFaTTYgMTMuMjFIMThWMjIuMjFINlYxMy4yMVpNMjAgMTUuMjFIMjJWMTcuMjFIMjBWMTUuMjFaTTIyIDUuMjEwMDJIMjBWMi4zOTQwMkMyMC41ODI5IDIuNjAwMTEgMjEuMDg3OSAyLjk4MTI1IDIxLjQ0NTkgMy40ODUzMkMyMS44MDM5IDMuOTg5MzkgMjEuOTk3NCA0LjU5MTc2IDIyIDUuMjEwMDJaTTQgMi4zOTQwMlY1LjIxMDAySDJDMi4wMDI1NiA0LjU5MTc2IDIuMTk2MDggMy45ODkzOSAyLjU1NDA5IDMuNDg1MzJDMi45MTIwOSAyLjk4MTI1IDMuNDE3MDkgMi42MDAxMSA0IDIuMzk0MDJaTTIgMTkuMjFINFYyMi4wMjZDMy40MTcwOSAyMS44MTk5IDIuOTEyMDkgMjEuNDM4OCAyLjU1NDA5IDIwLjkzNDdDMi4xOTYwOCAyMC40MzA3IDIuMDAyNTYgMTkuODI4MyAyIDE5LjIxWk0yMCAyMi4wMjZWMTkuMjFIMjJDMjEuOTk3NCAxOS44MjgzIDIxLjgwMzkgMjAuNDMwNyAyMS40NDU5IDIwLjkzNDdDMjEuMDg3OSAyMS40Mzg4IDIwLjU4MjkgMjEuODE5OSAyMCAyMi4wMjZaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZnXFx1MDAzRVxcblxcdTAwM0NkZWZzXFx1MDAzRVxcblxcdTAwM0NjbGlwUGF0aCBpZD1cXFwiY2xpcDBfNTMyXzE3NjBcXFwiXFx1MDAzRVxcblxcdTAwM0NyZWN0IHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyNFxcXCIgZmlsbD1cXFwid2hpdGVcXFwiIHRyYW5zZm9ybT1cXFwidHJhbnNsYXRlKDAgMC4yMTAwMjIpXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZjbGlwUGF0aFxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRlZnNcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQmtC40L3QvtC30LDQu1xcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLWl0ZW1cXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaWNvblxcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjRcXFwiIGhlaWdodD1cXFwiMjNcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyM1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTkgMi4yMTAyMUgxMi40NzJDMTIuMzE3MyAyLjIxMTIzIDEyLjE2NDUgMi4xNzcwMyAxMi4wMjUgMi4xMTAyMUw4Ljg2OSAwLjUyNjIwNUM4LjQ1MjM5IDAuMzE4NzUgNy45OTM0IDAuMjEwNTkxIDcuNTI4IDAuMjEwMjA1SDVDMy42NzQ0MSAwLjIxMTc5MyAyLjQwMzU2IDAuNzM5MDg3IDEuNDY2MjIgMS42NzY0M0MwLjUyODg4MiAyLjYxMzc2IDAuMDAxNTg3ODYgMy44ODQ2MSAwIDUuMjEwMjFWMTcuMjEwMkMwLjAwMTU4Nzg2IDE4LjUzNTggMC41Mjg4ODIgMTkuODA2NyAxLjQ2NjIyIDIwLjc0NEMyLjQwMzU2IDIxLjY4MTMgMy42NzQ0MSAyMi4yMDg2IDUgMjIuMjEwMkgxOUMyMC4zMjU2IDIyLjIwODYgMjEuNTk2NCAyMS42ODEzIDIyLjUzMzggMjAuNzQ0QzIzLjQ3MTEgMTkuODA2NyAyMy45OTg0IDE4LjUzNTggMjQgMTcuMjEwMlY3LjIxMDIxQzIzLjk5ODQgNS44ODQ2MSAyMy40NzExIDQuNjEzNzYgMjIuNTMzOCAzLjY3NjQzQzIxLjU5NjQgMi43MzkwOSAyMC4zMjU2IDIuMjExNzkgMTkgMi4yMTAyMVpNNSAyLjIxMDIxSDcuNTI4QzcuNjgyNjYgMi4yMDkxOCA3LjgzNTUyIDIuMjQzMzggNy45NzUgMi4zMTAyMUwxMS4xMzEgMy44ODkyMUMxMS41NDcyIDQuMDk4MzkgMTIuMDA2MiA0LjIwODI3IDEyLjQ3MiA0LjIxMDIxSDE5QzE5LjU5OCA0LjIxMTE4IDIwLjE4MjEgNC4zOTA4OCAyMC42NzczIDQuNzI2MjJDMjEuMTcyNSA1LjA2MTU2IDIxLjU1NjEgNS41MzcyNSAyMS43NzkgNi4wOTIyMUwyIDYuMjA0MjFWNS4yMTAyMUMyIDQuNDE0NTYgMi4zMTYwNyAzLjY1MTQ5IDIuODc4NjggMy4wODg4OUMzLjQ0MTI5IDIuNTI2MjggNC4yMDQzNSAyLjIxMDIxIDUgMi4yMTAyMVpNMTkgMjAuMjEwMkg1QzQuMjA0MzUgMjAuMjEwMiAzLjQ0MTI5IDE5Ljg5NDEgMi44Nzg2OCAxOS4zMzE1QzIuMzE2MDcgMTguNzY4OSAyIDE4LjAwNTkgMiAxNy4yMTAyVjguMjA0MjFMMjIgOC4wOTEyMVYxNy4yMTAyQzIyIDE4LjAwNTkgMjEuNjgzOSAxOC43Njg5IDIxLjEyMTMgMTkuMzMxNUMyMC41NTg3IDE5Ljg5NDEgMTkuNzk1NiAyMC4yMTAyIDE5IDIwLjIxMDJaXFxcIiBmaWxsPVxcXCIjY3VycmVudENvbG9yXFxcIlxcdTAwMkZcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS10ZXh0XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQkNGA0YXQuNCyXFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fYXNpZGUtaXRlbVxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19hc2lkZS1pY29uXFxcIlxcdTAwM0VcXHUwMDNDc3ZnIHdpZHRoPVxcXCIyNFxcXCIgaGVpZ2h0PVxcXCIyMlxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDIyXFxcIiBmaWxsPVxcXCJub25lXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xNy41IDAuMTI2NDY1QzE2LjM3MzkgMC4xNDM5OCAxNS4yNzI0IDAuNDU4MzE4IDE0LjMwNjcgMS4wMzc3NEMxMy4zNDEgMS42MTcxNSAxMi41NDUzIDIuNDQxMTMgMTIgMy40MjY0NkMxMS40NTQ2IDIuNDQxMTMgMTAuNjU4OSAxLjYxNzE1IDkuNjkzMiAxLjAzNzc0QzguNzI3NSAwLjQ1ODMxOCA3LjYyNjAxIDAuMTQzOTggNi40OTk5NiAwLjEyNjQ2NUM0LjcwNDkgMC4yMDQ0NTYgMy4wMTM2NiAwLjk4OTcxOSAxLjc5NTc0IDIuMzEwN0MwLjU3NzgxOCAzLjYzMTY4IC0wLjA2Nzc5MjIgNS4zODA5OSAtNC4xNzA4OGUtMDUgNy4xNzY0NkMtNC4xNzA4OGUtMDUgMTEuNzIzNSA0Ljc4NTk2IDE2LjY4OTUgOC43OTk5NiAyMC4wNTY1QzkuNjk2MTggMjAuODA5NiAxMC44MjkzIDIxLjIyMjUgMTIgMjEuMjIyNUMxMy4xNzA2IDIxLjIyMjUgMTQuMzAzNyAyMC44MDk2IDE1LjIgMjAuMDU2NUMxOS4yMTQgMTYuNjg5NSAyNCAxMS43MjM1IDI0IDcuMTc2NDZDMjQuMDY3NyA1LjM4MDk5IDIzLjQyMjEgMy42MzE2OCAyMi4yMDQyIDIuMzEwN0MyMC45ODYzIDAuOTg5NzE5IDE5LjI5NSAwLjIwNDQ1NiAxNy41IDAuMTI2NDY1Wk0xMy45MTUgMTguNTI2NUMxMy4zNzg5IDE4Ljk3NzggMTIuNzAwNyAxOS4yMjU0IDEyIDE5LjIyNTRDMTEuMjk5MiAxOS4yMjU0IDEwLjYyMSAxOC45Nzc4IDEwLjA4NSAxOC41MjY1QzQuOTQ2OTYgMTQuMjE1NSAxLjk5OTk2IDEwLjA3OTUgMS45OTk5NiA3LjE3NjQ2QzEuOTMxNiA1LjkxMTE4IDIuMzY2MzIgNC42NzAxOSAzLjIwOTMyIDMuNzI0MTZDNC4wNTIzMiAyLjc3ODEzIDUuMjM1MTkgMi4yMDM4MSA2LjQ5OTk2IDIuMTI2NDZDNy43NjQ3MiAyLjIwMzgxIDguOTQ3NiAyLjc3ODEzIDkuNzkwNiAzLjcyNDE2QzEwLjYzMzYgNC42NzAxOSAxMS4wNjgzIDUuOTExMTggMTEgNy4xNzY0NkMxMSA3LjQ0MTY4IDExLjEwNTMgNy42OTYwMyAxMS4yOTI5IDcuODgzNTdDMTEuNDgwNCA4LjA3MTExIDExLjczNDcgOC4xNzY0NiAxMiA4LjE3NjQ2QzEyLjI2NTIgOC4xNzY0NiAxMi41MTk1IDguMDcxMTEgMTIuNzA3MSA3Ljg4MzU3QzEyLjg5NDYgNy42OTYwMyAxMyA3LjQ0MTY4IDEzIDcuMTc2NDZDMTIuOTMxNiA1LjkxMTE4IDEzLjM2NjMgNC42NzAxOSAxNC4yMDkzIDMuNzI0MTZDMTUuMDUyMyAyLjc3ODEzIDE2LjIzNTIgMi4yMDM4MSAxNy41IDIuMTI2NDZDMTguNzY0NyAyLjIwMzgxIDE5Ljk0NzYgMi43NzgxMyAyMC43OTA2IDMuNzI0MTZDMjEuNjMzNiA0LjY3MDE5IDIyLjA2ODMgNS45MTExOCAyMiA3LjE3NjQ2QzIyIDEwLjA3OTUgMTkuMDUzIDE0LjIxNTUgMTMuOTE1IDE4LjUyMjVWMTguNTI2NVpcXFwiIGZpbGw9XFxcIiNjdXJyZW50Q29sb3JcXFwiXFx1MDAyRlxcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRnN2Z1xcdTAwM0VcXG5cXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2FzaWRlLXRleHRcXFwiXFx1MDAzRVxcdTAwM0NzcGFuXFx1MDAzRdCY0LfQsdGA0LDQvdC90L7QtVxcdTAwM0NcXHUwMDJGc3BhblxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJzbGlkZXJfX2NvbnRlbnRcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcInNsaWRlcl9fc2VhcmNoIGhpZGRlblxcXCJcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY3VzdG9tLWlucHV0XFxcIlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjdXN0b20taW5wdXRfX2xhYmVsXFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQn9C+0LjRgdC6XFx1MDAzQ1xcdTAwMkZzcGFuXFx1MDAzRVxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImN1c3RvbS1pbnB1dF9faW5zZXJ0IGN1c3RvbS1pbnB1dF9faW5zZXJ0LS1hY3RpdmVcXFwiXFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImN1c3RvbS1pbnB1dF9fbG9nb1xcXCJcXHUwMDNFXFx1MDAzQ3N2ZyB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiIHZpZXdCb3g9XFxcIjAgMCAyMCAyMFxcXCIgZmlsbD1cXFwibm9uZVxcXCIgeG1sbnM9XFxcImh0dHA6XFx1MDAyRlxcdTAwMkZ3d3cudzMub3JnXFx1MDAyRjIwMDBcXHUwMDJGc3ZnXFxcIlxcdTAwM0VcXG5cXHUwMDNDZyBjbGlwLXBhdGg9XFxcInVybCgjY2xpcDBfNTU5Xzk0NDYpXFxcIlxcdTAwM0VcXG5cXHUwMDNDcGF0aCBkPVxcXCJNMTAuMDAwMyAxMEM5LjAxMTM3IDEwIDguMDQ0NjcgOS43MDY3NiA3LjIyMjQzIDkuMTU3MzVDNi40MDAxOCA4LjYwNzk0IDUuNzU5MzIgNy44MjcwNSA1LjM4MDg4IDYuOTEzNDJDNS4wMDI0NCA1Ljk5OTc5IDQuOTAzNDMgNC45OTQ0NiA1LjA5NjM1IDQuMDI0NTVDNS4yODkyOCAzLjA1NDY1IDUuNzY1NDggMi4xNjM3MyA2LjQ2NDc1IDEuNDY0NDdDNy4xNjQwMSAwLjc2NTIwNiA4LjA1NDkyIDAuMjg5MDAyIDkuMDI0ODMgMC4wOTYwNzU5QzkuOTk0NzMgLTAuMDk2ODUwMyAxMS4wMDAxIDAuMDAyMTY2NDMgMTEuOTEzNyAwLjM4MDYwNUMxMi44MjczIDAuNzU5MDQzIDEzLjYwODIgMS4zOTk5MSAxNC4xNTc2IDIuMjIyMTVDMTQuNzA3IDMuMDQ0NCAxNS4wMDAzIDQuMDExMSAxNS4wMDAzIDVDMTQuOTk5IDYuMzI1NjggMTQuNDcxNyA3LjU5NjY4IDEzLjUzNDQgOC41MzQwN0MxMi41OTcgOS40NzE0NyAxMS4zMjYgOS45OTg2OCAxMC4wMDAzIDEwWk0xMC4wMDAzIDEuNjY2NjdDOS4zNDEwMSAxLjY2NjY3IDguNjk2NTQgMS44NjIxNyA4LjE0ODM4IDIuMjI4NDRDNy42MDAyMSAyLjU5NDcxIDcuMTcyOTcgMy4xMTUzIDYuOTIwNjggMy43MjQzOUM2LjY2ODM5IDQuMzMzNDggNi42MDIzOCA1LjAwMzcgNi43MzEgNS42NTAzQzYuODU5NjEgNi4yOTY5MSA3LjE3NzA4IDYuODkwODUgNy42NDMyNiA3LjM1NzAzQzguMTA5NDMgNy44MjMyIDguNzAzMzcgOC4xNDA2NyA5LjM0OTk4IDguMjY5MjlDOS45OTY1OCA4LjM5NzkgMTAuNjY2OCA4LjMzMTg5IDExLjI3NTkgOC4wNzk2QzExLjg4NSA3LjgyNzMxIDEyLjQwNTYgNy40MDAwNyAxMi43NzE4IDYuODUxOUMxMy4xMzgxIDYuMzAzNzQgMTMuMzMzNiA1LjY1OTI3IDEzLjMzMzYgNUMxMy4zMzM2IDQuMTE1OTUgMTIuOTgyNCAzLjI2ODEgMTIuMzU3MyAyLjY0Mjk4QzExLjczMjIgMi4wMTc4NiAxMC44ODQzIDEuNjY2NjcgMTAuMDAwMyAxLjY2NjY3WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NwYXRoIGQ9XFxcIk0xMC4wMDAzIDExLjQyODZDMTIuMDgzNCAxMS40MzA5IDE0LjA4MDYgMTIuMjQ0NCAxNS41NTM2IDEzLjY5MDZDMTcuMDI2NiAxNS4xMzY4IDE3Ljg1NTEgMTcuMDk3NyAxNy44NTc0IDE5LjE0MjlDMTcuODU3NCAxOS4zNzAyIDE3Ljc2NTQgMTkuNTg4MyAxNy42MDE3IDE5Ljc0OUMxNy40MzggMTkuOTA5NyAxNy4yMTU5IDIwLjAwMDEgMTYuOTg0NCAyMC4wMDAxQzE2Ljc1MjkgMjAuMDAwMSAxNi41MzA4IDE5LjkwOTcgMTYuMzY3MSAxOS43NDlDMTYuMjAzNCAxOS41ODgzIDE2LjExMTQgMTkuMzcwMiAxNi4xMTE0IDE5LjE0MjlDMTYuMTExNCAxNy41NTE2IDE1LjQ2NzUgMTYuMDI1NSAxNC4zMjE1IDE0LjkwMDNDMTMuMTc1NCAxMy43NzUxIDExLjYyMSAxMy4xNDI5IDEwLjAwMDMgMTMuMTQyOUM4LjM3OTUxIDEzLjE0MjkgNi44MjUxMyAxMy43NzUxIDUuNjc5MDggMTQuOTAwM0M0LjUzMzAyIDE2LjAyNTUgMy44ODkxNyAxNy41NTE2IDMuODg5MTcgMTkuMTQyOUMzLjg4OTE3IDE5LjM3MDIgMy43OTcyIDE5LjU4ODMgMy42MzM0NyAxOS43NDlDMy40Njk3NSAxOS45MDk3IDMuMjQ3NjkgMjAuMDAwMSAzLjAxNjE2IDIwLjAwMDFDMi43ODQ2MiAyMC4wMDAxIDIuNTYyNTYgMTkuOTA5NyAyLjM5ODg0IDE5Ljc0OUMyLjIzNTEyIDE5LjU4ODMgMi4xNDMxNCAxOS4zNzAyIDIuMTQzMTQgMTkuMTQyOUMyLjE0NTQ1IDE3LjA5NzcgMi45NzQgMTUuMTM2OCA0LjQ0NyAxMy42OTA2QzUuOTIgMTIuMjQ0NCA3LjkxNzE1IDExLjQzMDkgMTAuMDAwMyAxMS40Mjg2WlxcXCIgZmlsbD1cXFwiI2N1cnJlbnRDb2xvclxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZ1xcdTAwM0VcXG5cXHUwMDNDZGVmc1xcdTAwM0VcXG5cXHUwMDNDY2xpcFBhdGggaWQ9XFxcImNsaXAwXzU1OV85NDQ2XFxcIlxcdTAwM0VcXG5cXHUwMDNDcmVjdCB3aWR0aD1cXFwiMjBcXFwiIGhlaWdodD1cXFwiMjBcXFwiIGZpbGw9XFxcIndoaXRlXFxcIiB0cmFuc2Zvcm09XFxcIm1hdHJpeCgtMSAwIDAgMSAyMCAwKVxcXCJcXHUwMDJGXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGY2xpcFBhdGhcXHUwMDNFXFxuXFx1MDAzQ1xcdTAwMkZkZWZzXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGc3ZnXFx1MDAzRVxcblxcdTAwM0NcXHUwMDJGZGl2XFx1MDAzRVxcdTAwM0NkaXYgY2xhc3M9XFxcImN1c3RvbS1pbnB1dF9faW5wdXRcXFwiXFx1MDAzRVxcdTAwM0NpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDZGl2IGNsYXNzPVxcXCJjdXN0b20taW5wdXRfX2FkZCBjdXN0b20taW5wdXRfX2FkZC0tZm9yd2FyZFxcXCJcXHUwMDNFXFx1MDAzQz94bWwgdmVyc2lvbj1cXFwiMS4wXFxcIiA/XFx1MDAzRVxcdTAwM0MhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIEdlbmVyYXRvcjogU1ZHIFJlcG8gTWl4ZXIgVG9vbHMgLS1cXHUwMDNFXFxuXFx1MDAzQ3N2ZyBmaWxsPVxcXCIjMDAwMDAwXFxcIiB3aWR0aD1cXFwiODAwcHhcXFwiIGhlaWdodD1cXFwiODAwcHhcXFwiIHZpZXdCb3g9XFxcIjAgMCA1MTIgNTEyXFxcIiBkYXRhLW5hbWU9XFxcIkxheWVyIDFcXFwiIGlkPVxcXCJMYXllcl8xXFxcIiB4bWxucz1cXFwiaHR0cDpcXHUwMDJGXFx1MDAyRnd3dy53My5vcmdcXHUwMDJGMjAwMFxcdTAwMkZzdmdcXFwiXFx1MDAzRVxcdTAwM0NwYXRoIGQ9XFxcIk00NjAuNTQsMTY5LjU4QTIyMi42LDIyMi42LDAsMSwwLDQ3OCwyNTYsMjIxLjE2LDIyMS4xNiwwLDAsMCw0NjAuNTQsMTY5LjU4Wk0yNTYsNDQ4QzE1MCw0NDgsNjQsMzYyLDY0LDI1NlMxNTAsNjQsMjU2LDY0czE5Miw4NiwxOTIsMTkyUzM2Miw0NDgsMjU2LDQ0OFptMjguMDYtMzA3LjMzTDM5OS4zOSwyNTYsMjg0LjA2LDM3MS4zM2wtMjEuMjEtMjEuMjFMMzQyLDI3MUgxMzMuODJWMjQxSDM0MmwtNzkuMTItNzkuMTJaXFxcIlxcdTAwMkZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZzdmdcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwiY3VzdG9tLWlucHV0X19oaW50XFxcIlxcdTAwM0VcXHUwMDNDc3BhblxcdTAwM0XQktCy0LXQtNC40YLQtSDQt9Cw0L/RgNC+0YFcXHUwMDNDXFx1MDAyRnNwYW5cXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ1xcdTAwMkZkaXZcXHUwMDNFXFx1MDAzQ2RpdiBjbGFzcz1cXFwic2xpZGVyX19ob21lXFxcIlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRmRpdlxcdTAwM0VcXHUwMDNDXFx1MDAyRnNlY3Rpb25cXHUwMDNFXCIgKyAobnVsbCA9PSAocHVnX2ludGVycCA9IHJlcXVpcmUoXCIuL3BhcnRzL2Zvb3Rlci5wdWdcIikuY2FsbCh0aGlzLCBsb2NhbHMpKSA/IFwiXCIgOiBwdWdfaW50ZXJwKSArIFwiXFx1MDAzQ1xcdTAwMkZib2R5XFx1MDAzRVxcdTAwM0NcXHUwMDJGaHRtbFxcdTAwM0VcIjs7cmV0dXJuIHB1Z19odG1sO307XG5tb2R1bGUuZXhwb3J0cyA9IHRlbXBsYXRlOyIsInZhciBwdWcgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wdWctcnVudGltZS9pbmRleC5qc1wiKTtcblxuZnVuY3Rpb24gdGVtcGxhdGUobG9jYWxzKSB7dmFyIHB1Z19odG1sID0gXCJcIiwgcHVnX21peGlucyA9IHt9LCBwdWdfaW50ZXJwOztyZXR1cm4gcHVnX2h0bWw7fTtcbm1vZHVsZS5leHBvcnRzID0gdGVtcGxhdGU7IiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgcHVnX2hhc19vd25fcHJvcGVydHkgPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuXG4vKipcbiAqIE1lcmdlIHR3byBhdHRyaWJ1dGUgb2JqZWN0cyBnaXZpbmcgcHJlY2VkZW5jZVxuICogdG8gdmFsdWVzIGluIG9iamVjdCBgYmAuIENsYXNzZXMgYXJlIHNwZWNpYWwtY2FzZWRcbiAqIGFsbG93aW5nIGZvciBhcnJheXMgYW5kIG1lcmdpbmcvam9pbmluZyBhcHByb3ByaWF0ZWx5XG4gKiByZXN1bHRpbmcgaW4gYSBzdHJpbmcuXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IGFcbiAqIEBwYXJhbSB7T2JqZWN0fSBiXG4gKiBAcmV0dXJuIHtPYmplY3R9IGFcbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmV4cG9ydHMubWVyZ2UgPSBwdWdfbWVyZ2U7XG5mdW5jdGlvbiBwdWdfbWVyZ2UoYSwgYikge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgIHZhciBhdHRycyA9IGFbMF07XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhdHRycyA9IHB1Z19tZXJnZShhdHRycywgYVtpXSk7XG4gICAgfVxuICAgIHJldHVybiBhdHRycztcbiAgfVxuXG4gIGZvciAodmFyIGtleSBpbiBiKSB7XG4gICAgaWYgKGtleSA9PT0gJ2NsYXNzJykge1xuICAgICAgdmFyIHZhbEEgPSBhW2tleV0gfHwgW107XG4gICAgICBhW2tleV0gPSAoQXJyYXkuaXNBcnJheSh2YWxBKSA/IHZhbEEgOiBbdmFsQV0pLmNvbmNhdChiW2tleV0gfHwgW10pO1xuICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnc3R5bGUnKSB7XG4gICAgICB2YXIgdmFsQSA9IHB1Z19zdHlsZShhW2tleV0pO1xuICAgICAgdmFsQSA9IHZhbEEgJiYgdmFsQVt2YWxBLmxlbmd0aCAtIDFdICE9PSAnOycgPyB2YWxBICsgJzsnIDogdmFsQTtcbiAgICAgIHZhciB2YWxCID0gcHVnX3N0eWxlKGJba2V5XSk7XG4gICAgICB2YWxCID0gdmFsQiAmJiB2YWxCW3ZhbEIubGVuZ3RoIC0gMV0gIT09ICc7JyA/IHZhbEIgKyAnOycgOiB2YWxCO1xuICAgICAgYVtrZXldID0gdmFsQSArIHZhbEI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFba2V5XSA9IGJba2V5XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gYTtcbn07XG5cbi8qKlxuICogUHJvY2VzcyBhcnJheSwgb2JqZWN0LCBvciBzdHJpbmcgYXMgYSBzdHJpbmcgb2YgY2xhc3NlcyBkZWxpbWl0ZWQgYnkgYSBzcGFjZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBhcnJheSwgYWxsIG1lbWJlcnMgb2YgaXQgYW5kIGl0cyBzdWJhcnJheXMgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIElmIGBlc2NhcGluZ2AgaXMgYW4gYXJyYXksIHRoZW4gd2hldGhlciBvciBub3QgdGhlIGl0ZW0gaW4gYHZhbGAgaXNcbiAqIGVzY2FwZWQgZGVwZW5kcyBvbiB0aGUgY29ycmVzcG9uZGluZyBpdGVtIGluIGBlc2NhcGluZ2AuIElmIGBlc2NhcGluZ2AgaXNcbiAqIG5vdCBhbiBhcnJheSwgbm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBJZiBgdmFsYCBpcyBhbiBvYmplY3QsIGFsbCB0aGUga2V5cyB3aG9zZSB2YWx1ZSBpcyB0cnV0aHkgYXJlIGNvdW50ZWQgYXNcbiAqIGNsYXNzZXMuIE5vIGVzY2FwaW5nIGlzIGRvbmUuXG4gKlxuICogSWYgYHZhbGAgaXMgYSBzdHJpbmcsIGl0IGlzIGNvdW50ZWQgYXMgYSBjbGFzcy4gTm8gZXNjYXBpbmcgaXMgZG9uZS5cbiAqXG4gKiBAcGFyYW0geyhBcnJheS48c3RyaW5nPnxPYmplY3QuPHN0cmluZywgYm9vbGVhbj58c3RyaW5nKX0gdmFsXG4gKiBAcGFyYW0gez9BcnJheS48c3RyaW5nPn0gZXNjYXBpbmdcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5jbGFzc2VzID0gcHVnX2NsYXNzZXM7XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBjbGFzc05hbWUsIHBhZGRpbmcgPSAnJywgZXNjYXBlRW5hYmxlZCA9IEFycmF5LmlzQXJyYXkoZXNjYXBpbmcpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xuICAgIGNsYXNzTmFtZSA9IHB1Z19jbGFzc2VzKHZhbFtpXSk7XG4gICAgaWYgKCFjbGFzc05hbWUpIGNvbnRpbnVlO1xuICAgIGVzY2FwZUVuYWJsZWQgJiYgZXNjYXBpbmdbaV0gJiYgKGNsYXNzTmFtZSA9IHB1Z19lc2NhcGUoY2xhc3NOYW1lKSk7XG4gICAgY2xhc3NTdHJpbmcgPSBjbGFzc1N0cmluZyArIHBhZGRpbmcgKyBjbGFzc05hbWU7XG4gICAgcGFkZGluZyA9ICcgJztcbiAgfVxuICByZXR1cm4gY2xhc3NTdHJpbmc7XG59XG5mdW5jdGlvbiBwdWdfY2xhc3Nlc19vYmplY3QodmFsKSB7XG4gIHZhciBjbGFzc1N0cmluZyA9ICcnLCBwYWRkaW5nID0gJyc7XG4gIGZvciAodmFyIGtleSBpbiB2YWwpIHtcbiAgICBpZiAoa2V5ICYmIHZhbFtrZXldICYmIHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBrZXkpKSB7XG4gICAgICBjbGFzc1N0cmluZyA9IGNsYXNzU3RyaW5nICsgcGFkZGluZyArIGtleTtcbiAgICAgIHBhZGRpbmcgPSAnICc7XG4gICAgfVxuICB9XG4gIHJldHVybiBjbGFzc1N0cmluZztcbn1cbmZ1bmN0aW9uIHB1Z19jbGFzc2VzKHZhbCwgZXNjYXBpbmcpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiBwdWdfY2xhc3Nlc19hcnJheSh2YWwsIGVzY2FwaW5nKTtcbiAgfSBlbHNlIGlmICh2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gcHVnX2NsYXNzZXNfb2JqZWN0KHZhbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbCB8fCAnJztcbiAgfVxufVxuXG4vKipcbiAqIENvbnZlcnQgb2JqZWN0IG9yIHN0cmluZyB0byBhIHN0cmluZyBvZiBDU1Mgc3R5bGVzIGRlbGltaXRlZCBieSBhIHNlbWljb2xvbi5cbiAqXG4gKiBAcGFyYW0geyhPYmplY3QuPHN0cmluZywgc3RyaW5nPnxzdHJpbmcpfSB2YWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuXG5leHBvcnRzLnN0eWxlID0gcHVnX3N0eWxlO1xuZnVuY3Rpb24gcHVnX3N0eWxlKHZhbCkge1xuICBpZiAoIXZhbCkgcmV0dXJuICcnO1xuICBpZiAodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcbiAgICB2YXIgb3V0ID0gJyc7XG4gICAgZm9yICh2YXIgc3R5bGUgaW4gdmFsKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKHB1Z19oYXNfb3duX3Byb3BlcnR5LmNhbGwodmFsLCBzdHlsZSkpIHtcbiAgICAgICAgb3V0ID0gb3V0ICsgc3R5bGUgKyAnOicgKyB2YWxbc3R5bGVdICsgJzsnO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb3V0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWwgKyAnJztcbiAgfVxufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGVzY2FwZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gdGVyc2VcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRyID0gcHVnX2F0dHI7XG5mdW5jdGlvbiBwdWdfYXR0cihrZXksIHZhbCwgZXNjYXBlZCwgdGVyc2UpIHtcbiAgaWYgKHZhbCA9PT0gZmFsc2UgfHwgdmFsID09IG51bGwgfHwgIXZhbCAmJiAoa2V5ID09PSAnY2xhc3MnIHx8IGtleSA9PT0gJ3N0eWxlJykpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbiAgaWYgKHZhbCA9PT0gdHJ1ZSkge1xuICAgIHJldHVybiAnICcgKyAodGVyc2UgPyBrZXkgOiBrZXkgKyAnPVwiJyArIGtleSArICdcIicpO1xuICB9XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKCh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKSAmJiB0eXBlb2YgdmFsLnRvSlNPTiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhbCA9IHZhbC50b0pTT04oKTtcbiAgfVxuICBpZiAodHlwZW9mIHZhbCAhPT0gJ3N0cmluZycpIHtcbiAgICB2YWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgIGlmICghZXNjYXBlZCAmJiB2YWwuaW5kZXhPZignXCInKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAnICcgKyBrZXkgKyAnPVxcJycgKyB2YWwucmVwbGFjZSgvJy9nLCAnJiMzOTsnKSArICdcXCcnO1xuICAgIH1cbiAgfVxuICBpZiAoZXNjYXBlZCkgdmFsID0gcHVnX2VzY2FwZSh2YWwpO1xuICByZXR1cm4gJyAnICsga2V5ICsgJz1cIicgKyB2YWwgKyAnXCInO1xufTtcblxuLyoqXG4gKiBSZW5kZXIgdGhlIGdpdmVuIGF0dHJpYnV0ZXMgb2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEBwYXJhbSB7T2JqZWN0fSB0ZXJzZSB3aGV0aGVyIHRvIHVzZSBIVE1MNSB0ZXJzZSBib29sZWFuIGF0dHJpYnV0ZXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZXhwb3J0cy5hdHRycyA9IHB1Z19hdHRycztcbmZ1bmN0aW9uIHB1Z19hdHRycyhvYmosIHRlcnNlKXtcbiAgdmFyIGF0dHJzID0gJyc7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChwdWdfaGFzX293bl9wcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIHZhbCA9IG9ialtrZXldO1xuXG4gICAgICBpZiAoJ2NsYXNzJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19jbGFzc2VzKHZhbCk7XG4gICAgICAgIGF0dHJzID0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSkgKyBhdHRycztcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoJ3N0eWxlJyA9PT0ga2V5KSB7XG4gICAgICAgIHZhbCA9IHB1Z19zdHlsZSh2YWwpO1xuICAgICAgfVxuICAgICAgYXR0cnMgKz0gcHVnX2F0dHIoa2V5LCB2YWwsIGZhbHNlLCB0ZXJzZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF0dHJzO1xufTtcblxuLyoqXG4gKiBFc2NhcGUgdGhlIGdpdmVuIHN0cmluZyBvZiBgaHRtbGAuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbnZhciBwdWdfbWF0Y2hfaHRtbCA9IC9bXCImPD5dLztcbmV4cG9ydHMuZXNjYXBlID0gcHVnX2VzY2FwZTtcbmZ1bmN0aW9uIHB1Z19lc2NhcGUoX2h0bWwpe1xuICB2YXIgaHRtbCA9ICcnICsgX2h0bWw7XG4gIHZhciByZWdleFJlc3VsdCA9IHB1Z19tYXRjaF9odG1sLmV4ZWMoaHRtbCk7XG4gIGlmICghcmVnZXhSZXN1bHQpIHJldHVybiBfaHRtbDtcblxuICB2YXIgcmVzdWx0ID0gJyc7XG4gIHZhciBpLCBsYXN0SW5kZXgsIGVzY2FwZTtcbiAgZm9yIChpID0gcmVnZXhSZXN1bHQuaW5kZXgsIGxhc3RJbmRleCA9IDA7IGkgPCBodG1sLmxlbmd0aDsgaSsrKSB7XG4gICAgc3dpdGNoIChodG1sLmNoYXJDb2RlQXQoaSkpIHtcbiAgICAgIGNhc2UgMzQ6IGVzY2FwZSA9ICcmcXVvdDsnOyBicmVhaztcbiAgICAgIGNhc2UgMzg6IGVzY2FwZSA9ICcmYW1wOyc7IGJyZWFrO1xuICAgICAgY2FzZSA2MDogZXNjYXBlID0gJyZsdDsnOyBicmVhaztcbiAgICAgIGNhc2UgNjI6IGVzY2FwZSA9ICcmZ3Q7JzsgYnJlYWs7XG4gICAgICBkZWZhdWx0OiBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKGxhc3RJbmRleCAhPT0gaSkgcmVzdWx0ICs9IGh0bWwuc3Vic3RyaW5nKGxhc3RJbmRleCwgaSk7XG4gICAgbGFzdEluZGV4ID0gaSArIDE7XG4gICAgcmVzdWx0ICs9IGVzY2FwZTtcbiAgfVxuICBpZiAobGFzdEluZGV4ICE9PSBpKSByZXR1cm4gcmVzdWx0ICsgaHRtbC5zdWJzdHJpbmcobGFzdEluZGV4LCBpKTtcbiAgZWxzZSByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBSZS10aHJvdyB0aGUgZ2l2ZW4gYGVycmAgaW4gY29udGV4dCB0byB0aGVcbiAqIHRoZSBwdWcgaW4gYGZpbGVuYW1lYCBhdCB0aGUgZ2l2ZW4gYGxpbmVub2AuXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyXG4gKiBAcGFyYW0ge1N0cmluZ30gZmlsZW5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSBsaW5lbm9cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgb3JpZ2luYWwgc291cmNlXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5leHBvcnRzLnJldGhyb3cgPSBwdWdfcmV0aHJvdztcbmZ1bmN0aW9uIHB1Z19yZXRocm93KGVyciwgZmlsZW5hbWUsIGxpbmVubywgc3RyKXtcbiAgaWYgKCEoZXJyIGluc3RhbmNlb2YgRXJyb3IpKSB0aHJvdyBlcnI7XG4gIGlmICgodHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyB8fCAhZmlsZW5hbWUpICYmICFzdHIpIHtcbiAgICBlcnIubWVzc2FnZSArPSAnIG9uIGxpbmUgJyArIGxpbmVubztcbiAgICB0aHJvdyBlcnI7XG4gIH1cbiAgdHJ5IHtcbiAgICBzdHIgPSBzdHIgfHwgcmVxdWlyZSgnZnMnKS5yZWFkRmlsZVN5bmMoZmlsZW5hbWUsICd1dGY4JylcbiAgfSBjYXRjaCAoZXgpIHtcbiAgICBwdWdfcmV0aHJvdyhlcnIsIG51bGwsIGxpbmVubylcbiAgfVxuICB2YXIgY29udGV4dCA9IDNcbiAgICAsIGxpbmVzID0gc3RyLnNwbGl0KCdcXG4nKVxuICAgICwgc3RhcnQgPSBNYXRoLm1heChsaW5lbm8gLSBjb250ZXh0LCAwKVxuICAgICwgZW5kID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBsaW5lbm8gKyBjb250ZXh0KTtcblxuICAvLyBFcnJvciBjb250ZXh0XG4gIHZhciBjb250ZXh0ID0gbGluZXMuc2xpY2Uoc3RhcnQsIGVuZCkubWFwKGZ1bmN0aW9uKGxpbmUsIGkpe1xuICAgIHZhciBjdXJyID0gaSArIHN0YXJ0ICsgMTtcbiAgICByZXR1cm4gKGN1cnIgPT0gbGluZW5vID8gJyAgPiAnIDogJyAgICAnKVxuICAgICAgKyBjdXJyXG4gICAgICArICd8ICdcbiAgICAgICsgbGluZTtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgLy8gQWx0ZXIgZXhjZXB0aW9uIG1lc3NhZ2VcbiAgZXJyLnBhdGggPSBmaWxlbmFtZTtcbiAgZXJyLm1lc3NhZ2UgPSAoZmlsZW5hbWUgfHwgJ1B1ZycpICsgJzonICsgbGluZW5vXG4gICAgKyAnXFxuJyArIGNvbnRleHQgKyAnXFxuXFxuJyArIGVyci5tZXNzYWdlO1xuICB0aHJvdyBlcnI7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgY29uc29sZS5sb2coMSk7XG59XG4iLCIvLyDQkiDRhNCw0LnQu9C1IG1haW4udHNcbmltcG9ydCB7IHNob3cgfSBmcm9tICcuL2hvbWUtcGFnZSc7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgZnVuY3Rpb24gKCkge1xuICAgIC8vINCS0YvQt9C+0LIg0YTRg9C90LrRhtC40Lggc2hvd1xuICAgIHNob3coKTtcbiAgICAvLyDQl9C00LXRgdGMINCy0Ysg0LzQvtC20LXRgtC1INC00L7QsdCw0LLQuNGC0Ywg0LTRgNGD0LPQvtC5INC60L7QtCDQuNC70Lgg0LLRi9C30L7QstGLINGE0YPQvdC60YbQuNC5LCDQutC+0YLQvtGA0YvQtSDQtNC+0LvQttC90Ysg0LHRi9GC0Ywg0LLRi9C/0L7Qu9C90LXQvdGLINC/0L7RgdC70LUg0LfQsNCz0YDRg9C30LrQuCDRgdGC0YDQsNC90LjRhtGLXG4gICAgLy8g0J3QsNC/0YDQuNC80LXRgDpcbiAgICAvLyBzb21lT3RoZXJGdW5jdGlvbigpO1xuICAgIC8vIGFkZGl0aW9uYWxDb2RlKCk7XG59KTtcbiIsInZhciBtYXAgPSB7XG5cdFwiLi9JY29uLWF0dGVudGlvbi5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tYXR0ZW50aW9uLnN2Z1wiLFxuXHRcIi4vSWNvbi1mYXZvcml0ZS5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZmF2b3JpdGUuc3ZnXCIsXG5cdFwiLi9JY29uLWZvbGRlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZm9sZGVyLnN2Z1wiLFxuXHRcIi4vSWNvbi1ncm91cC5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb24tZ3JvdXAuc3ZnXCIsXG5cdFwiLi9JY29uLWhvbWUuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLWhvbWUuc3ZnXCIsXG5cdFwiLi9JY29uLW1vdmllLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1tb3ZpZS5zdmdcIixcblx0XCIuL0ljb24tc2VhcmNoLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZWFyY2guc3ZnXCIsXG5cdFwiLi9JY29uLXNldHRpbmdzLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi1zZXR0aW5ncy5zdmdcIixcblx0XCIuL0ljb24tdHYuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9JY29uLXR2LnN2Z1wiLFxuXHRcIi4vSWNvbi11c2VyLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvSWNvbi11c2VyLnBuZ1wiLFxuXHRcIi4vSWNvbnMtdXNlci5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0ljb25zLXVzZXIuc3ZnXCIsXG5cdFwiLi9Mb2dvLXN2Zy5zdmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28tc3ZnLnN2Z1wiLFxuXHRcIi4vTG9nby5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL0xvZ28ucG5nXCIsXG5cdFwiLi9mYXZpY29uLnBuZ1wiOiBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMvZmF2aWNvbi5wbmdcIixcblx0XCIuL2ljb24tZ28uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29uLWdvLnN2Z1wiLFxuXHRcIi4vaWNvbi1waG9uZS5wbmdcIjogXCIuL3NyYy9hc3NldHMvaW1hZ2VzL2ljb24tcGhvbmUucG5nXCIsXG5cdFwiLi9sb2dvLXRleHQucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLXRleHQucG5nXCIsXG5cdFwiLi9sb2dvLXRleHQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9sb2dvLXRleHQuc3ZnXCIsXG5cdFwiLi9wb3N0ZXIucG5nXCI6IFwiLi9zcmMvYXNzZXRzL2ltYWdlcy9wb3N0ZXIucG5nXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cy9pbWFnZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKiRcIjsiLCIvKiAoaWdub3JlZCkgKi8iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsICsgXCIuLi9cIjsiLCIvLyBucHggcHJldHRpZXIgLS13cml0ZSBcIioqLyoucHVnXCJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiO1xuaW1wb3J0IFwiLi9jb3JlL3Jlc2l6ZXJcIjtcbmltcG9ydCBcIi4vY29yZS9tYWluXCI7XG5pbXBvcnQgXCIuL3ZpZXdzL2luZGV4LnB1Z1wiO1xuIl0sIm5hbWVzIjpbImRlZmF1bHRXaWR0aCIsImRlZmF1bHRGb250IiwibW9iaWxlRm9udCIsIm1pbldpZHRoIiwibWluSGVpZ2h0IiwiZGVmYXVsdEhlaWdodCIsImZTaXplIiwiZGV2aWNlIiwidlciLCJ2SCIsIk1hdGgiLCJtaW4iLCJtYXgiLCJtb2RpZmllckRldmljZSIsIndpbmRvd1dpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIndpbmRvd0hlaWdodCIsImlubmVySGVpZ2h0IiwiaXNNb2JpbGUiLCJkb2N1bWVudCIsImJvZHkiLCJzdHlsZSIsImZvbnRTaXplIiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwib25sb2FkIiwib25yZXNpemUiXSwic291cmNlUm9vdCI6IiJ9