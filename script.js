const navBarHam = document.querySelector(".nav__bars");
const navListItem = document.querySelectorAll(".nav__list__items");
const headerDelivery = document.querySelector(".nav-delivery");
const navBar = document.querySelector(".nav__logo__containter");
const navList = document.querySelector(".nav__list");
navBarHam.addEventListener("click", openHamMenu);
function openHamMenu() {
  navListItem.forEach((element) => {
    element.classList.toggle("active");
  });
  headerDelivery.classList.toggle("delivery__display");
  navBar.classList.toggle("box-shadow");
  navList.classList.toggle("box-shadow");
}
new Glide(".glide", {
  type: "carousel",
  perView: 1,
  activeNav: "glide__bullet--active",
}).mount();
