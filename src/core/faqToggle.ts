export function faqToggle(): void {
  const faqTitles: NodeListOf<HTMLElement> = document.querySelectorAll('.faq__item-title');

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
}

