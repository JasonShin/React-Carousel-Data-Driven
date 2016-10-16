module.exports = {
    className: 'center',
    centerMode: true,
    infinite: false,
    slidesToShow: 5,
    speed: 250,
    dots: false,
    responsive: [{
        breakpoint: 1400,
        settings: {
            slidesToShow: 3,
            infinite: false
        }
    }, {
        breakpoint: 775,
        settings: {
            slidesToShow: 1,
            infinite: false
        }
    }, {
        breakpoint: 620,
        settings: {
            slidesToShow: 1,
            infinite: false
        }
    }]
};