$(document).ready(function () {
    $('.wrapper').slick({
        dots: true,
        autoplay: true,
        arrows: true
    });

    $('.new-arrivals-cards').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.prev-arrivals'),
        nextArrow: $('.next-arrivals')
    });

    $('.publishing-cards').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 4,
        prevArrow: $('.prev-publishing'),
        nextArrow: $('.next-publishing')
    });

    $('.news-items').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev-news'),
        nextArrow: $('.next-news')
    });
});

