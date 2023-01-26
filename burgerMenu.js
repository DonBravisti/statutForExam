let burgerIcon = $('.burger-icon')[0];
let burgerMenu = $('.burger-menu')[0];

console.log(burgerIcon);
console.log(burgerMenu);

burgerIcon.onclick = function () {
    burgerMenu.classList.toggle('hidden');
}