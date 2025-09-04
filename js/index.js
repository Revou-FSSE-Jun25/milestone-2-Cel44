// ------------------------ HAMBURGER BUTTON ------------------------------//

const burger_button = document.querySelector(".burger_button");
const nav = document.querySelector("#navigation_links");
const close_menu = document.querySelector(".close_menu_button");

burger_button.addEventListener('click', () => {
    nav.classList.toggle('active');
});

close_menu.addEventListener('click', () => {
    nav.classList.remove('active')
});


