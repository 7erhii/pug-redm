export function faqToggle(): void {
  const faqTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.faq__item-title');
  // const commonTitle: NodeListOf<HTMLElement> = document.querySelectorAll('..js-faq__question--common');
  // const techTitle: NodeListOf<HTMLElement> = document.querySelectorAll('.js-faq__question--general');



  faqTitles.forEach((title: HTMLElement): void => {
    title.addEventListener('click', (): void => {
      const currentActive: HTMLElement | null = document.querySelector('.faq__item--active');
      const faqItem: HTMLElement | null = title.closest('.faq__item');
      const descr: HTMLElement | null = title.nextElementSibling as HTMLElement;

      if (currentActive && currentActive !== faqItem) {
        currentActive.classList.remove('faq__item--active');
        let currentDescr: HTMLElement | null = currentActive.querySelector('.faq__item-descr');
        if (currentDescr) {
          currentDescr.style.maxHeight = '0';
          currentDescr.style.opacity = '0';
        }
      }

      if (faqItem) {
        const isActivating = !faqItem.classList.contains('faq__item--active');
        faqItem.classList.toggle('faq__item--active');

        if (descr) {
          if (isActivating) {
            descr.style.maxHeight = descr.scrollHeight + "px";
          } else {
            descr.style.maxHeight = '0';
          }
          setTimeout(() => {
            descr.style.opacity = isActivating ? '1' : '0';
          }, 0);
        }
      }
    });
  });



    const commonQuestion = document.querySelector('.js-faq__question--common');
    const techQuestion = document.querySelector('.js-faq__question--tech');
    const generalFaq = document.querySelector('.faq__question--general');
    const techFaq = document.querySelector('.faq__questions--tech');

    commonQuestion?.addEventListener('click', () => {
        commonQuestion.classList.add('faq__action--active');
        techQuestion?.classList.remove('faq__action--active');
        generalFaq?.classList.add('faq__question--flex');
        generalFaq?.classList.remove('faq__question--none');
        techFaq?.classList.add('faq__question--none');
        techFaq?.classList.remove('faq__question--flex');
    });

    techQuestion?.addEventListener('click', () => {

        techQuestion.classList.add('faq__action--active');
        commonQuestion?.classList.remove('faq__action--active');
        generalFaq?.classList.add('faq__question--none');
        generalFaq?.classList.remove('faq__question--flex');
        techFaq?.classList.add('faq__question--flex');
        techFaq?.classList.remove('faq__question--none');
    });

}

