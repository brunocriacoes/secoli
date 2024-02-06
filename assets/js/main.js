
function agendar_contato() {
    const dialog = document.getElementById("favDialog");
    dialog.showModal();

}

function close_contato() {
    const dialog = document.getElementById("favDialog");
    dialog.close();
}

const swiper = new Swiper('.banner', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 3000,
    },
    pagination: {
        el: '.swiper-pagination',
    },
});

new Swiper('.slide__destaque', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 4,
    spaceBetween: 10,

    pagination: {
        el: '.pagination__destaque',
    },

    navigation: {
        nextEl: '.slide__destaque__next',
        prevEl: '.slide__destaque__prev',
    },

    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});

new Swiper('.slide__feedback', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 5,
    spaceBetween: 10,

    navigation: {
        nextEl: '.slide__feedback__next',
        prevEl: '.slide__feedback__prev',
    },

    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        640: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});

new Swiper('.card__profile', {

    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    slidesPerView: 4,
    spaceBetween: 10,

    pagination: {
        el: '.pagination__profile',
    },

    breakpoints: {

        320: {
            slidesPerView: 2,
            spaceBetween: 20
        },

        480: {
            slidesPerView: 3,
            spaceBetween: 30
        },

        640: {
            slidesPerView: 4,
            spaceBetween: 40
        }
    }
});


window.addEventListener('scroll', function () {
    if (window.scrollY > 50) {
        document.querySelector('.header__none').style.display = 'none';
        document.querySelector('.header__btn__black').style.display = 'none';
        document.querySelector('.js__space__remove').style.display = 'none';
        const contatos = document.querySelector('.header__search__contact');
        contatos.classList.add('contatos-empilhados');
    } else {
        document.querySelector('.header__none').style.display = 'flex';
        document.querySelector('.header__btn__black').style.display = 'flex';
        document.querySelector('.js__space__remove').style.display = 'grid';
        const contatos = document.querySelector('.header__search__contact');
        contatos.classList.remove('contatos-empilhados');

    }
});

new Swiper('.slide__prod', {
    direction: 'horizontal',
    slidesPerView: 3,
    spaceBetween: 10,
});

function troca_image($e){
    let image = document.querySelector('.js-image-grande')
    image.src=$e.src;
}

