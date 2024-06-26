window.addEventListener('scroll', e => {
    document.body.style.cssText += `--scrollTop: ${this.scrollY}px`

})

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
ScrollSmoother.create({
    wrapper: '.wrapper',
    content: '.content'
})

const BurgerBtn = document.querySelector('.burger');
const BurgerMenu = document.querySelector('.menu');
BurgerBtn.addEventListener('click', function(){
    this.classList.toggle('burger--active');
    BurgerMenu.classList.toggle('menu--active')
})