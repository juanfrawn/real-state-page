function scrollHeader() {
    const header = document.querySelector('header');
    if(this.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}

window.addEventListener('scroll', scrollHeader);

var swiperPopular = new Swiper('.popular__container', {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
})

const accordionItems = document.querySelectorAll('.value__accordion-item')

const toggleItem = (item) => {
    const accordionContent = item.querySelector('.value__accordion-content')
    
    if(item.classList.contains('accordion-open')) {
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px'
        item.classList.add('accordion-open')
    }
    
}

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.value__accordion-header')

    accordionHeader.addEventListener('click', () => {
        const openItem = document.querySelector('.accordion-open')
        toggleItem(item)

        if(openItem && openItem !== item) {
            toggleItem(openItem)
        }
    }

)
})

const sections = document.querySelectorAll('.section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(elem => {
        const sectionHeight = elem.offsetHeight,
                sectionTop = elem.offsetTop - 58,
                sectionId = elem.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
        document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
    })
}

window.addEventListener('scroll', scrollActive)

const scrollUp = () => {
    const scrollBtn = document.getElementById('scroll-up')

    if(scrollY >= 350) scrollBtn.classList.add('show-scroll')
    else scrollBtn.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


const themeBtn = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeBtn.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

if(selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeBtn.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeBtn.classList.toggle(iconTheme)

    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// Scroll reveal
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__title, .popular__container, .subscribe__container, .footer__container`)
sr.reveal('.home__description', { delay: 500 })
sr.reveal('.home__search', { delay: 600 })
sr.reveal('.home__value', { delay: 700 })
sr.reveal('.home__images', { delay: 800, origin: 'bottom' })

sr.reveal('.logos__img', { interval: 100 })

sr.reveal('.value__images, .contact__content', { origin: 'left' })
sr.reveal('.value__content, .contact__images', { origin: 'right' })



