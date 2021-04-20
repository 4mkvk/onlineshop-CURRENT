

$('.cards').ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
})

$('#items').ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: true,
        slidesToShow: 3,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2,
                    centerMode: false,
                }
            },
            {
                breakpoint: 770,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 580,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
})

let link = document.getElementById("link")
link.addEventListener("click", function () {
    localStorage.removeItem("login")
    localStorage.removeItem("password")
    localStorage.removeItem("username")
})


let katalog = () => {
    location.href = 'katalog.html'
}