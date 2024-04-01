// DOM Element
const switchLanguage = document.getElementById("lang-selector");
const headerEl = document.querySelector("header");
const chosenCard = document.querySelectorAll(".card input");
const msgEl = document.querySelector(".msg");
const formEl = document.getElementById("form");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollY > 20
    ? headerEl.classList.replace("not-scrolled", "scrolled")
    : headerEl.classList.replace("scrolled", "not-scrolled");
});

switchLanguage.addEventListener("change", () => {
  const rootElem = document.documentElement,
    lang = rootElem.getAttribute("lang"),
    newLang = lang === "en" ? "ar" : "en";

  rootElem.setAttribute("lang", newLang);

  setLanguage(newLang);
});

const setLanguage = async (language) => {
  const data = await fetch("js/translations.json");
  const response = await data.json();
  const elements = document.querySelectorAll("[data-translation]");
  const imgsAlt = document.querySelectorAll("[data-alt]");

  elements.forEach((el) => {
    const translationKey = el.getAttribute("data-translation");
    el.textContent = response.sponsorsPage[language][translationKey];
  });

  imgsAlt.forEach((el) => {
    const translationKey = el.getAttribute("data-alt");
    el.alt = response.sponsorsPage[language][translationKey];
  });

  language === "ar" ? (document.dir = "rtl") : (document.dir = "ltr");
};

chosenCard.forEach((card) => {
  card.addEventListener("change", (e) => {
    e.target.checked
      ? msgEl.classList.remove("d-none")
      : msgEl.classList.add("d-none");
  });
});

const scroller = document.querySelector(".scroller");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
