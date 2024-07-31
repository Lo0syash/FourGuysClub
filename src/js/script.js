document.addEventListener('DOMContentLoaded', () => {

// HEADER BTN ACTIVITY
// HEADER BTN ACTIVITY

    const headerBtn = document.querySelectorAll('.header__body-btn');

    for (let i = 0; i < headerBtn.length; i++) {
        headerBtn[i].addEventListener('mouseover', function () {
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }
        });

        headerBtn[i].addEventListener('mouseout', function () {
            if (!this.classList.contains('active')) {
                this.classList.add('active');
            } else {
                this.classList.remove('active');
            }
        });
    }

// SLIDER
// SLIDER

    const slides = document.querySelectorAll('.participants__slider-slide')
    const btnPrevDesktop = document.querySelector('.desktop-prev')
    const btnNextDesktop = document.querySelector('.desktop-next')

    const btnPrevMobile = document.querySelector('.mobile-prev')
    const btnNextMobile = document.querySelector('.mobile-next')

    let currentIndex = 0
    let slidesToShow = 3

    if (window.innerWidth <= 680) {
        slidesToShow = 1
    } else if (window.innerWidth <= 1024) {
        slidesToShow = 2
    }

    function showSlides(index) {
        slides.forEach((slide, i) => {
            const slideIndex = (i - index + slides.length) % slides.length
            if (slideIndex < slidesToShow) {
                slide.classList.add('active')
            } else {
                slide.classList.remove('active')
            }
        })


        if (window.innerWidth <= 680) {
            document.querySelector('.num-desktop').textContent = currentIndex + 1
            document.querySelector('.num-mobile').textContent = currentIndex + 1
        } else if (window.innerWidth <= 1024) {
            document.querySelector('.num-desktop').textContent = currentIndex + 2
            document.querySelector('.num-mobile').textContent = currentIndex + 2
        } else {
            document.querySelector('.num-desktop').textContent = currentIndex + 3
            document.querySelector('.num-mobile').textContent = currentIndex + 3
        }

        btnPrevDesktop.classList.toggle('disabled', index === 0)
        btnPrevMobile.classList.toggle('disabled', index === 0)
        btnNextDesktop.classList.toggle('disabled', index === slides.length - slidesToShow)
        btnNextMobile.classList.toggle('disabled', index === slides.length - slidesToShow)
    }

    showSlides(currentIndex)

    btnNextDesktop.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length
        showSlides(currentIndex)
    })
    btnNextMobile.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length
        showSlides(currentIndex)
    })

    btnPrevDesktop.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length
        showSlides(currentIndex)
    })
    btnPrevMobile.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length
        showSlides(currentIndex)
    })


})
