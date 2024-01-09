import { firstLoad } from './home-page';

import Swiper from 'swiper';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

document.addEventListener('DOMContentLoaded', () => {

    // Вызов функции show
    firstLoad();

    const swiper = new Swiper('.swiper', {
      direction: 'vertical',
      loop: true,

      pagination: {
        el: '.swiper-pagination',
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });

});
