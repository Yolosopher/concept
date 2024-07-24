import detectOutsideClick from "../lib/outside-click-detect";

const KEBABMENU = ".kebabmenu";
const KEBABMENU_BTN = ".kebabmenu_btn";

const loadKebabMenu = () => {
  const kebabmenu = document.querySelector(KEBABMENU);
  const kebabmenu_btn = document.querySelector(KEBABMENU_BTN);

  kebabmenu_btn.addEventListener("click", () => {
    kebabmenu.classList.toggle("active");
  });

  const closeKebabmenu = () => {
    kebabmenu.classList.remove("active");
  };

  detectOutsideClick(kebabmenu, closeKebabmenu);
};

export default loadKebabMenu;
