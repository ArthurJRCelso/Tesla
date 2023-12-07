const menuBtn = document.querySelector('#menuBtn')
const aside = document.querySelector('aside')
const closeBtn = document.querySelector('.close')
let width = window.innerWidth;
let height = window.innerHeight;
let sections = document.querySelectorAll('.description')

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
  let lastScrollTop = 0;
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (currentScroll > lastScrollTop) {
      section.classList.add('effect')
    } else {
      section.classList.remove('effect')
    }
    lastScrollTop = currentScroll;
    console.log(lastScrollTop)
  })
  };


