const COOKIES = ".cookies";
const COOKIES_ACCEPT_BTN = ".cookies_acceptbtn";

const checkIfCookieExists = () => {
  const isCookiesAccepted = localStorage.getItem("cookiesAccepted");

  return isCookiesAccepted && isCookiesAccepted === "1";
};

const setCookieAsAccepted = () => {
  localStorage.setItem("cookiesAccepted", "1");
};

const loadCookieHandler = () => {
  const isAccepted = checkIfCookieExists();

  if (!isAccepted) {
    const cookies = document.querySelector(COOKIES);
    const acceptBtn = document.querySelector(COOKIES_ACCEPT_BTN);

    cookies.classList.add("active");

    acceptBtn.addEventListener("click", () => {
      cookies.classList.remove("active");
      setCookieAsAccepted();
    });
  }
};

export default loadCookieHandler;
