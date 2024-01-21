export function firstLoad() {
  const sliderHomeBtn = document.querySelector("#slider-home-btn-js");
  const sliderTvBtn = document.querySelector("#slider-tv-btn-js");
  const sliderMovieBtn = document.querySelector("#slider-movie-btn-js");
  const sliderArchBtn = document.querySelector("#slider-arch-btn-js");
  const sliderFavBtn = document.querySelector("#slider-fav-btn-js");

  const sliderHomeContent = document.querySelector("#slider-home-js");
  const sliderTvBtnContent = document.querySelector("#slider-tv-js");
  const sliderMovieContent = document.querySelector("#slider-cinema-js");
  const sliderArchContent = document.querySelector("#slider-arcive-js");
  const sliderFavContent = document.querySelector("#slider-fav-js");

  const buttons = [sliderHomeBtn, sliderTvBtn, sliderMovieBtn, sliderArchBtn, sliderFavBtn];
  const contents = [sliderHomeContent, sliderTvBtnContent, sliderMovieContent, sliderArchContent, sliderFavContent];

  if (sliderHomeBtn) {
    sliderHomeBtn.classList.add("active");
    sliderHomeContent.classList.add("visible");
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleClick(button, contents[index]));
  });

  function handleClick(button: Element, content: Element) {
    buttons.forEach(btn => {
      if (btn !== button) btn.classList.remove("active");
    });
    contents.forEach(cont => {
      if (cont !== content) cont.classList.remove("visible");
    });

    button.classList.add("active");
    content.classList.add("visible");
  }

  function isElementVisible(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  function checkVisibilityOnScroll() {
    const element = document.getElementById("slider-starter-js");
    if (element && isElementVisible(element)) {
      if (!document.documentElement.classList.contains("mobile")) {
        document.querySelectorAll(".slider__aside-text").forEach(e => {
          if (e instanceof HTMLElement) e.style.display = "flex";
        });
      } else {

      }
    }
  }
  window.addEventListener("scroll", checkVisibilityOnScroll);

  let autoSwitch = setInterval(() => {
    const activeIndex = buttons.findIndex(btn => btn.classList.contains("active"));
    const nextIndex = (activeIndex + 1) % buttons.length;
    handleClick(buttons[nextIndex], contents[nextIndex]);
  }, 2200);

  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(autoSwitch);
      handleClick(button, contents[index]);
    });
  });
}
