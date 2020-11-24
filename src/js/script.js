var mySwiper = new Swiper('.swiper-1', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },
})

 new Swiper('.swiper-2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

     // Navigation arrows
     navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
     },
})

new Swiper('.swiper-3', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
    allowSlideNext: false,
    allowSlidePrev: false,
    autoplay:true,

    //autoplay
    autoplay:{
        delay:2000,
    },


})

