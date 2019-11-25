var hamburgerButton = document.getElementsByTagName('button')[1];
var closeMenuButton = document.getElementsByTagName('button')[0];
var sliderMenu = document.getElementById('phonemenu');

function openMenu() {
    sliderMenu.style.right = '0';
}
function closeMenu() {
    sliderMenu.style.right = '-300px';
}

hamburgerButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

