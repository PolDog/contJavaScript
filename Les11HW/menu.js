const menuActive=document.querySelector('.menu-active');
//const burger = document.querySelector('user-list__item-menu');
const burger = document.querySelector('.btn_right');
const menuClose = document.querySelector('.menu-close');

function toggleMenu(){
    menuActive.classList.toggle('hidden');
}

burger.addEventListener('click',toggleMenu);
menuClose.addEventListener('click',toggleMenu);