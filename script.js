const button = document.getElementById("btn");
const ok_button = document.getElementById("ok-btn");
const menu = document.querySelector(".menu");
let slides = document.querySelectorAll(".slide");
let array = document.querySelectorAll(".pic");
let tag = document.querySelector(".tag");

// form actions

button.addEventListener("click", e => {
  e.preventDefault();
  let subject = document.getElementById("subject").value.toString();
  let describe = document.getElementById("describe").value.toString();
  if (subject.length < 1) {
    document.getElementById("sub-result").innerText = "Без темы";
  } else if (subject.length > 0) {
    document.getElementById("sub-result").innerText = "Тема:" + " " + subject;
  }
  if (describe.length < 1) {
    document.getElementById("describe-result").innerText = "Без Описания";
  } else if (describe.length > 0) {
    document.getElementById("describe-result").innerText =
      "Описание:" + " " + describe;
  }
  document.getElementById("message-block").classList.remove("hidden");
});

ok_button.addEventListener("click", e => {
  document.getElementById("message-block").classList.add("hidden");
  document.getElementById("sub-result").innerText = "";
  document.getElementById("describe-result").innerText = "";
  document
    .querySelector("body > div > section.singolo-3 > div.contacts > form")
    .reset();
});

//header

menu.addEventListener("click", e => {
  menu.querySelectorAll("a").forEach(el => el.classList.remove("red"));
  e.target.classList.add("red");
});

//slides
let currentSlide = 0;
let enabled = true;

function changeCurrentSlide(n) {
  currentSlide = (n + slides.length) % slides.length;
}
function hideSlide(direction) {
  enabled = false;
  slides[currentSlide].classList.add(direction);
  slides[currentSlide].addEventListener("animationend", function() {
    this.classList.remove("active", direction);
  });
}
function showSlide(direction) {
  slides[currentSlide].classList.add("next", direction);
  slides[currentSlide].addEventListener("animationend", function() {
    this.classList.remove("next", direction);
    this.classList.add("active");
    enabled = true;
  });
}
function previousSlide(n) {
  hideSlide("to-right");
  changeCurrentSlide(n - 1);
  showSlide("from-left");
}
document.querySelector(".pointer-left").addEventListener("click", function() {
  if (enabled) {
    previousSlide(currentSlide);
  }
});
function nextSlide(n) {
  hideSlide("to-left");
  changeCurrentSlide(n + 1);
  showSlide("from-right");
}
document.querySelector(".pointer-right").addEventListener("click", function() {
  if (enabled) {
    nextSlide(currentSlide);
  }
});
