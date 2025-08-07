const buttons = document.querySelectorAll('.button-group button');
buttons.forEach(button => {
    button.addEventListener("click", function () {
        buttons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");
    });
});

new Swiper(".card-wrapper", {
    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },

    slidesPerView: 1,
    spaceBetween: 40,
    grabCursor: true,

    // Responsive breakpoints
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
        1500: {
            slidesPerView: 5,
        }
    }
});