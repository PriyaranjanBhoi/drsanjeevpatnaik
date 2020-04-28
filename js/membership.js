$(document).on('ready', function() {

    $('.membership').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            },
            2000: {
                items: 1
            }
        }
    })

});