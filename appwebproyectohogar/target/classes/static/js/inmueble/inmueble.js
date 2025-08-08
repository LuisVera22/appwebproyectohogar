var thumbSwiper = new Swiper('.thumb-swiper', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true
});

var mainSwiper = new Swiper('.main-swiper', {
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    effect: 'fade',
    thumbs: {
        swiper: thumbSwiper,
    },
    navigation: {
        nextEl: '#nextBtn',
        prevEl: '#prevBtn'
    }
});