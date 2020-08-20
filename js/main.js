AOS.init();

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
        el: '.works-pagination',
        type: 'bullets',
        bulletClass: 'works-bullet',
        bulletActiveClass: 'works-bullet-active',
        clickable: true,
    },
})