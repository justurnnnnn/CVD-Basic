const burgir = document.querySelector(".burgir__menu");
const headerNav = document.querySelector(".header__nav");
burgir.addEventListener("click", () => {                                                                    
    burgir.classList.toggle("open");
    headerNav.classList.toggle("open");
})