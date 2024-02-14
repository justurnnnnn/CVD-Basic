const burgir = document.querySelector(".burgir__menu");
const headerNav = document.querySelector(".header__nav");
burgir.addEventListener("click", () => {                                                                    
    burgir.classList.toggle("open");
    headerNav.classList.toggle("open");
})
const header = document.querySelector(".header");
window.console.log(scrollY);
window.addEventListener("scroll", () => {
  if (scrollY >= 100) {
    header.classList.add("open");
  } else {
    header.classList.remove("open");
  }
}); 