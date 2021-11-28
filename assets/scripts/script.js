$(document).ready(function () {
    $('.hits-slider').slick({
        slidesToShow:4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 565,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });
    $('.sell__slider').slick({
        slidesToShow:4,
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 445,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.news__slider').slick({
        slidesToShow:4,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 545,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 345,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.review__slider').slick({
        slidesToShow:2,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $('.header__burger').click(function (event) {
        $('.burger-menu').addClass('active');
        $('body').addClass('lock');
    });
    $('.burger-menu__close').click(function (event) {
        $('.burger-menu').removeClass('active');
        $('body').removeClass('lock');
    });

    $('.el-for-menu-catalog').click(function (event) {
        $('.catalogs-menu').toggleClass('active');
    });
    $('.back').click(function (event) {
        $('.catalogs-menu').removeClass('active');
    });

    $('.heart').click(function (event) {
        $(this).toggleClass('active');
    });
});
