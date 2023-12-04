const menuBtn = document.querySelector('#menuBtn')
const aside = document.querySelector('aside')
const closeBtn = document.querySelector('.close')
let width = window.innerWidth;
let height = window.innerHeight;
const sections = document.querySelectorAll('section')
const Section = document.querySelector('section')


menuBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
window.addEventListener('resize', closeAuto)

function openMenu(e) {
    e.preventDefault()
    aside.classList.toggle('visibility')
}

function closeMenu() {
    aside.classList.remove('visibility')
}

function closeAuto() {
    if (width > 600) {
      closeMenu();
    }
}

 