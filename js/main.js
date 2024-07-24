import charCounter from "./components/char-counter";
import loadContactForm, {
  loadContactFormListener,
} from "./components/contactform";
import loadFooter from "./components/footer";
import loadHeader from "./components/header";
import loadKebabMenu from "./components/kebabmenu";
import loadSliders from "./components/slider";

loadHeader();
loadFooter();
loadSliders();
loadKebabMenu();
loadContactForm();
loadContactFormListener();
charCounter();
