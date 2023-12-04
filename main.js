const menuBtn = document.querySelector('#menuBtn')
const aside = document.querySelector('aside')
const closeBtn = document.querySelector('.close')
let width = window.innerWidth;
let height = window.innerHeight;
const sections = document.querySelectorAll('section .description')


menuBtn.addEventListener('click', openMenu)
closeBtn.addEventListener('click', closeMenu)
window.addEventListener('resize', closeAuto)
window.addEventListener('scroll', effectTranslate)

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

function effectTranslate() {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i]
        let position = section.getBoundingClientRect().top
        if (position < height * 0.75) {
            section.classList.toggle('effect')
        } else {
            section.classList.remove('effect')
        }
    }
}
 