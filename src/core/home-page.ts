export function firstLoad() {
  // Querying button and content elements
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

  // Grouping buttons and contents into arrays
  const buttons = [sliderHomeBtn, sliderTvBtn, sliderMovieBtn, sliderArchBtn, sliderFavBtn];
  const contents = [sliderHomeContent, sliderTvBtnContent, sliderMovieContent, sliderArchContent, sliderFavContent];

  // Initial active state for the home button and content
  if (sliderHomeBtn) {
    sliderHomeBtn.classList.add("active");
    sliderHomeContent.classList.add("visible");
  }

  // Event listeners for buttons
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => handleClick(button, contents[index]));
  });

  // Handle click function to toggle active and visible classes
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

  // Check if element is visible in the viewport
  function isElementVisible(element: HTMLElement) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth);
  }

  // On scroll, check the visibility of the element and show the aside panel
  function checkVisibilityOnScroll() {
    const element = document.getElementById("slider-starter-js");
    if (element && isElementVisible(element)) {
      document.querySelectorAll(".slider__aside-text").forEach(e => {
        if (e instanceof HTMLElement) e.style.display = "flex";
      });
    }
  }
  window.addEventListener("scroll", checkVisibilityOnScroll);

  // Automatic switch between buttons
  let autoSwitch = setInterval(() => {
    const activeIndex = buttons.findIndex(btn => btn.classList.contains("active"));
    const nextIndex = (activeIndex + 1) % buttons.length;
    handleClick(buttons[nextIndex], contents[nextIndex]);
  }, 1800);

  // Clear interval on button click and call handleClick
  buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
      clearInterval(autoSwitch);
      handleClick(button, contents[index]);
    });
  });
}
