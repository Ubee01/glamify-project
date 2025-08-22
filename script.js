"use strict";
const menuToggle = document.querySelector(".control-icons");
const navBar = document.querySelector(".nav-bar");

menuToggle.addEventListener("click", () => {
  navBar.classList.toggle("active");
});
