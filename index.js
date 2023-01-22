const iconMenu = document.querySelector('.menu_icon');
const menuBody = document.querySelector('.header_navigation ul');
if (iconMenu) {
iconMenu.addEventListener("click", function (e) {
    document.body.classList.toggle('_active');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
});
}