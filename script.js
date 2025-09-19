const btnContainer = document.querySelector(".nav__container--btn");
const menuBtns = document.querySelectorAll(".nav__btn");
// const openMenuBtn = document.querySelector(".nav__btn--open");
// const closeMenuBtn = document.querySelector(".nav__btn--close");
const menuContainer = document.querySelector(".header__nav");

//******* helpers function *********/
const toggleBtns = () =>
  menuBtns.forEach((btn) => btn.classList.toggle("active"));

const toggleMenu = () => menuContainer.classList.toggle("active");

const toggleBody = () => document.body.classList.toggle("no-scroll");
//******* helpers function *********/
function handleClick(e) {
  const currentBtn = e.target.closest(".nav__btn");
  if (!currentBtn) return;

  toggleBtns();
  toggleMenu();
  toggleBody();
}

btnContainer.addEventListener("click", handleClick);
