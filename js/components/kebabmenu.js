const KEBABMENU = ".kebabmenu";
const KEBABMENU_BTN = ".kebabmenu_btn";

const loadKebabMenu = () => {
  const kebabmenu = document.querySelector(KEBABMENU);
  const kebabmenu_btn = document.querySelector(KEBABMENU_BTN);

  kebabmenu_btn.addEventListener("click", () => {
    kebabmenu.classList.toggle("active");
  });
};

export default loadKebabMenu;
