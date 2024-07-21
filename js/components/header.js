import detectOutsideClick from "../lib/outside-click-detect";

// CLASSNAMES
const HEADER = ".header";
const HEADER_NAV = ".header_nav";
const HEADER_NAV_TABS_ITEM = ".header_nav_tabs_item";
const HEADER_NAV_DROPDOWN_CONTENT = ".header_nav_dropdown_content";
const HEADER_NAV_DROPDOWN = ".header_nav_dropdown ";
const HEADER_NAV_TABCONTENT_CONTENT = ".header_nav_tabcontent_content";
const BURGER = ".burger";
const BURGERMENU = ".header_burgermenu";

const HEADER_BURGERMENU_TABS_ITEM_TABNAME =
  ".header_burgermenu_tabs_item_tabname";
const HEADER_BURGERMENU_TABS_ITEM = ".header_burgermenu_tabs_item";
const HEADER_BURGERMENU_TABS_ITEM_LIST = ".header_burgermenu_tabs_item_list";
const HEADER_BURGERMENU_TABS_ITEM_CONTAINER =
  ".header_burgermenu_tabs_item_container";

const loadNav = () => {
  const header_nav = document.querySelector(HEADER_NAV);
  const header_nav_tabs_items = [
    ...document.querySelectorAll(HEADER_NAV_TABS_ITEM),
  ];

  const getCurrentActive = () => {
    return document.querySelector(`${HEADER_NAV_TABS_ITEM}.active`);
  };

  const header = document.querySelector(HEADER);

  const minimizeNav = () => {
    const currentActive = getCurrentActive();
    if (currentActive) {
      currentActive.classList.remove("active");
      header_nav.removeAttribute("data-active_tab");
    }
  };
  detectOutsideClick(header, minimizeNav);

  for (let i = 0; i < header_nav_tabs_items.length; i++) {
    const item = header_nav_tabs_items[i];
    item.addEventListener("click", () => {
      const currentActive = getCurrentActive();
      if (currentActive && currentActive !== item) {
        currentActive.classList.remove("active");
      }
      item.classList.toggle("active");

      const newCurrentActive = getCurrentActive();

      if (newCurrentActive) {
        header_nav.dataset.active_tab = newCurrentActive.dataset.tab;
      } else {
        header_nav.removeAttribute("data-active_tab");
      }
    });
  }
};

const loadBurgerMenuToggler = () => {
  const burgermenu = document.querySelector(BURGERMENU);
  // burger button
  const burger = document.querySelector(BURGER);

  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    burgermenu.classList.toggle("active");
  });
};

const loadBurgerMenuTabs = () => {
  const setHeightForTabContainers = () => {
    [...document.querySelectorAll(HEADER_BURGERMENU_TABS_ITEM_LIST)].forEach(
      (list) => {
        const container = list.parentElement;
        container.style.setProperty("--height", list.scrollHeight + "px");
      }
    );
  };
  setHeightForTabContainers();

  const getCurrentActive = () => {
    return document.querySelector(`${HEADER_BURGERMENU_TABS_ITEM}.active`);
  };

  [...document.querySelectorAll(HEADER_BURGERMENU_TABS_ITEM_TABNAME)].forEach(
    (tabname) => {
      const tab_item = tabname.closest(HEADER_BURGERMENU_TABS_ITEM);

      tabname.addEventListener("click", () => {
        const currentActive = getCurrentActive();
        if (currentActive && currentActive !== tab_item) {
          currentActive.classList.remove("active");
        }

        tab_item.classList.toggle("active");
      });
    }
  );
};

const loadEventHandler = () => {
  // set dropdown height
  const header_nav_dropdown = document.querySelector(HEADER_NAV_DROPDOWN);
  const header_nav_dropdown_content = document.querySelector(
    HEADER_NAV_DROPDOWN_CONTENT
  );

  header_nav_dropdown.style.setProperty(
    "--height",
    header_nav_dropdown_content.scrollHeight + "px"
  );
  // set tabcontent heights
  [...document.querySelectorAll(HEADER_NAV_TABCONTENT_CONTENT)].forEach(
    (content) => {
      const tabcontent = content.parentElement;
      tabcontent.style.setProperty("--height", content.scrollHeight + "px");
    }
  );
};

const loadHeader = () => {
  window.addEventListener("load", loadEventHandler);
  window.addEventListener("resize", loadEventHandler);
  window.addEventListener("orientationchange", loadEventHandler);
  loadBurgerMenuToggler();
  loadBurgerMenuTabs();
  loadNav();
};

export default loadHeader;
