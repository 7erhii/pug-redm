import { firstLoad } from "./home-page";
import { burgerToggle } from "./burger-menu";

document.addEventListener("DOMContentLoaded", () => {
  // Вызов функции show
  burgerToggle()

  firstLoad();
});
