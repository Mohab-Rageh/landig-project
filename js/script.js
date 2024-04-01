new Swiper("#swiper-1", {
  slidesPerView: 1,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#swiper-1 .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#swiper-1 .swiper-button-next",
    prevEl: "#swiper-1 .swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    994: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  },
});

new Swiper("#swiper-2", {
  slidesPerView: 1,
  spaceBetween: 24,
  slidesPerGroup: 1,
  loop: false,
  loopFillGroupWithBlank: true,
  pagination: {
    el: "#swiper-2 .swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: "#swiper-2 .swiper-button-next",
    prevEl: "#swiper-2 .swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 24,
    },
    994: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 32,
    },
  },
});

const rootEle = document.documentElement;

const phrases = [
  "Entrepreneurship and Startup Support Forum From Idea to Market",
  "The most important event in Jordan that gathers the best",
];

const specialWords = [
  "Entrepreneurs",
  "Investors",
  "Developers",
  "Influencers",
];

const phrasesAr = [
  "ملتقى ريادة الأعمال ودعم المشاريع الناشئة من الفكرة إلى السوق ",
  "الحدث الاهم في الاردن الذي يجمع نخبة من افضل ",
];

const specialWordsAr = [
  "رواد الاعمال",
  "المستثمرين",
  "الخبراء",
  "المطورين",
  "المؤثرين",
];

const element = document.querySelectorAll(".hero-main_text");
const specialText = document.querySelectorAll(".orange-txt");

function typePhrase(index) {
  if (!index) specialText.forEach((txt) => (txt.textContent = ""));

  const selectedEle =
    rootEle.getAttribute("lang") === "en" ? element[0] : element[1];

  const phrase =
    rootEle.getAttribute("lang") === "en" ? phrases[index] : phrasesAr[index];

  let i = 0;
  const typingInterval = setInterval(function () {
    selectedEle.textContent += phrase[i];
    i++;
    if (i > phrase.length - 1) {
      if (index && i === phrase.length) {
        typeWord(0);
      }
      clearInterval(typingInterval);
      setTimeout(
        function () {
          selectedEle.textContent = "";
          typePhrase(index ? 0 : 1);
        },
        index ? 6000 : 2000
      );
    }
  }, 100);
}

function typeWord(index) {
  const phrase =
    rootEle.getAttribute("lang") === "en" ? specialWords : specialWordsAr;

  const selectedSpecialWord =
    rootEle.getAttribute("lang") === "en" ? specialText[0] : specialText[1];

  const selectedPhrase = phrase[index];

  let i = 0;
  const typingIntervala = setInterval(function () {
    selectedSpecialWord.textContent += selectedPhrase[i] || "";
    i++;
    if (i >= selectedPhrase.length) {
      clearInterval(typingIntervala);
      setTimeout(function () {
        if (phrase[index + 1]) {
          selectedSpecialWord.textContent = "";
          typeWord(index + 1);
        }
      }, 200);
    }
  }, 100);
}

typePhrase(0);

const navbar = document.querySelectorAll("header");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  scrollY > 20
    ? navbar.forEach((nav) => nav.classList.replace("not-scrolled", "scrolled"))
    : navbar.forEach((nav) =>
        nav.classList.replace("scrolled", "not-scrolled")
      );
});

const paragraph = document.querySelectorAll(".hero-secondary_text span");

function highlightSpan(currentIndex) {
  const currentSpan = paragraph[currentIndex];
  currentSpan.classList.add("highlighted");

  setTimeout(function () {
    currentSpan.classList.remove("highlighted");
    highlightSpan(paragraph[currentIndex + 1] ? currentIndex + 1 : 0);
  }, 1000);
}

highlightSpan(0);

// => DOM Elements
const toggleDescriptionEle = document.querySelectorAll(".toggle-desc"),
  daysElem = document.querySelectorAll(".time-div .days"),
  hoursElem = document.querySelectorAll(".time-div .hours"),
  minutesElem = document.querySelectorAll(".time-div .minutes"),
  secondsElem = document.querySelectorAll(".time-div .seconds");

let countDownDate = new Date().setHours(new Date().getHours() + 597.4);
let timerInterval;

const startCountdown = () => {
  const now = new Date().getTime();
  const countDown = new Date(countDownDate).getTime();
  const difference = (countDown - now) / 1000;

  if (difference < 1) endCountDown();

  let days = Math.trunc(difference / (60 * 60 * 24));
  let hours = Math.trunc((difference % (60 * 60 * 24)) / (60 * 60));
  let minutes = Math.trunc((difference % (60 * 60)) / 60);
  let seconds = Math.trunc(difference % 60);

  daysElem.forEach((ele) => (ele.innerHTML = days < 10 ? `0${days}` : days));
  hoursElem.forEach(
    (ele) => (ele.innerHTML = hours < 10 ? `0${hours}` : hours)
  );
  minutesElem.forEach(
    (ele) => (ele.innerHTML = minutes < 10 ? `0${minutes}` : minutes)
  );
  secondsElem.forEach(
    (ele) => (ele.innerHTML = seconds < 10 ? `0${seconds}` : seconds)
  );
};

const endCountDown = () => {
  clearInterval(timerInterval);
};

startCountdown();
timerInterval = setInterval(() => {
  startCountdown();
}, 1000);

toggleDescriptionEle.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    ele.firstElementChild.classList.toggle("d-none");
    ele.lastElementChild.classList.toggle("d-none");
    ele.parentElement.nextElementSibling.classList.toggle("d-none");

    if (
      ele.parentElement.parentElement.dataset.color ===
      "hsl(205deg 90% 57% / 20%)"
    ) {
      ele.parentElement.parentElement.classList.toggle("selected-section1");
      ele.parentElement.parentElement.classList.toggle("selected-section");
    }

    if (
      ele.parentElement.parentElement.dataset.color ===
      "hsl(16deg 92% 61% / 20%)"
    ) {
      ele.parentElement.parentElement.classList.toggle("selected-section2");
    }

    if (
      ele.parentElement.parentElement.dataset.color ===
      "hsl(243deg 83% 63% / 20%)"
    ) {
      ele.parentElement.parentElement.classList.toggle("selected-section3");
    }

    if (
      ele.parentElement.parentElement.dataset.color ===
      "hsl(86deg 55% 57% / 20%)"
    ) {
      ele.parentElement.parentElement.classList.toggle("selected-section4");
    }

    if (
      ele.parentElement.parentElement.dataset.color ===
      "hsl(0deg 100% 64% / 20%)"
    ) {
      ele.parentElement.parentElement.classList.toggle("selected-section5");
    }

    if (
      ele.parentElement.parentElement.dataset.color ===
      "hsl(159deg 51% 55% / 20%)"
    ) {
      ele.parentElement.parentElement.classList.toggle("selected-section6");
    }

    ele.parentElement.parentElement.classList.toggle("selected-section");
  });
});

const currentYear = new Date().getFullYear();
const currentYearEl = document
  .querySelectorAll(".current-year")
  .forEach((el) => (el.textContent = currentYear));

const numbersEl = document.querySelectorAll(".section-2-number");
const section = document.getElementById("hero");
let start = false;

const countUp = (el) => {
  const targetNum = el.dataset.target;
  let counter = setInterval(() => {
    el.textContent++;
    if (el.textContent == targetNum) clearInterval(counter);
  }, 2000 / targetNum);
};

addEventListener("scroll", () => {
  if (screenY >= section.offsetTop) {
    if (!start) numbersEl.forEach((num) => countUp(num));
    start = true;
  }
});

const englishContent = document.getElementById("english-content");
const otherLanguageContent = document.getElementById("arabic-content");
const langSelector = document.querySelectorAll(".lang-selector");

langSelector.forEach((select) => {
  select.addEventListener("change", (e) => {
    element.forEach((ele) => (ele.textContent = ""));
    specialText.forEach((txt) => (txt.textContent = ""));
    englishContent.classList.toggle("d-none");
    otherLanguageContent.classList.toggle("d-none");

    let dataDirection = rootEle.getAttribute("dir"),
      newDirection = dataDirection === "rtl" ? "ltr" : "rtl";

    rootEle.setAttribute("dir", newDirection);

    let dataLang = rootEle.getAttribute("lang"),
      newLang = dataLang === "en" ? "ar" : "en";

    rootEle.setAttribute("lang", newLang);
  });
});

const txtArea = document.querySelectorAll(".txt-area");
document.addEventListener("change", (e) => {
  if (e.target.value === "no")
    txtArea.forEach((area) => area.classList.add("d-none"));
  if (e.target.value === "yes")
    txtArea.forEach((area) => area.classList.remove("d-none"));
});

const scroller = document.querySelector(".scroller");
const height =
  document.documentElement.scrollHeight - document.documentElement.clientHeight;

addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  scroller.style.width = `${(scrollTop / height) * 100}%`;
});
