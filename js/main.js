import charCounter from "./components/char-counter";
import loadContactForm, {
  loadContactFormListener,
} from "./components/contactform";
import loadCookieHandler from "./components/cookies-handler";
import loadCustomScrollbar from "./components/custom-scrollbar";
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
loadCustomScrollbar();
loadCookieHandler();
