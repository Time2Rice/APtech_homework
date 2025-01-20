const toggleButton = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

toggleButton.addEventListener("click", () => {
    navList.classList.toggle('active');
});
