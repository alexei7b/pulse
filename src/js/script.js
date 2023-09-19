$(document).ready(function () {


    $('.carousel__inner').slick({
        speed: 1200,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.png"></button>',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]


    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab-active)', function () {
        $(this)
            .addClass('catalog__tab-active').siblings().removeClass('catalog__tab-active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content-active').eq($(this).index()).addClass('catalog__content-active');
    });

    // $('.catalog-item__link').each(function (i) {
    //     $(this).on("click", function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     })
    // });

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on("click", function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
    //     })
    // });

    function toggleSlide(item) {
        $(item).each(function (i) {
            $(this).on("click", function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active')
            })
        });
    };
    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');



    // toggleSlide('.catalog-item__link');
    // toggleSlide('.catalog-item__back');
});

// $(document).on("ready", function () {
//     $('.carousel__inner').slick();
// });


