/* eslint-disable */

const swup = new Swup();

function resetNav() {
    document.querySelector(".menu-icon__checkbox").checked = false;
}

swup.on('contentReplaced', resetNav);
