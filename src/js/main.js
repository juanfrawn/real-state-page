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

