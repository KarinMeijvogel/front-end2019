// variables
var closeNotificationButton = document.getElementsByTagName('button')[0];
var notification = document.getElementsByTagName('div')[0];

var hamburgerButton = document.getElementsByTagName('button')[1];
var closeMenuButton = document.getElementsByTagName('button')[2];
var sliderMenu = document.getElementsByTagName('nav')[0].children[3];
var overlay = document.getElementsByTagName('nav')[0].children[1];

var toTopButton = document.getElementsByTagName('button')[2];


// functions
function closeNotification() {
    notification.classList.add('onzichtbaar');
}

function closeMenu() {
    sliderMenu.classList.remove('schuifmenuuit');
        overlay.classList.remove('zichtbaar');
}

function openMenu() {
    sliderMenu.classList.add('schuifmenuuit');
    overlay.classList.add('zichtbaar');
}

function toTopButtonToggle() {
    if (window.scrollY >= 450) {
        toTopButton.classList.add('zichtbaar');
    } else if (window.scrollY < 450) {
        toTopButton.classList.remove('zichtbaar');
    }
}


// listeners
closeNotificationButton.addEventListener('click', closeNotification)

hamburgerButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

document.addEventListener('scroll', toTopButtonToggle);
