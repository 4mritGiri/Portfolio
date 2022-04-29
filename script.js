$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll script
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        // scroll-up button show/hide script
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", " ", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student", "Developer", " ", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});
function sendEmail(){
    Email.send({
        // SecureToken : "afcf8de8-63ac-4320-a8ad-591ee8f2140e",
        Host : "smtp.gmail.com",
        Username : "trggamer02595@gmail.com",
        Password : "vnfzvnwcoehumojm",
        To : 'amritgiri02595@gmail.com',
        From : document.getElementById("email").value,
        Subject : document.getElementById("subject").value,
        Body : "Name &emsp; &nbsp; &nbsp;: " + document.getElementById("name").value + 
            "<br> Email &emsp; &nbsp; &nbsp; : " + document.getElementById("email").value + 
            "<br>Phone No. : " + document.getElementById("phone").value + 
            "<br>Address &nbsp; &nbsp; : " + document.getElementById("address").value + 
            "<br>Message &nbsp; &nbsp;: " + document.getElementById("message").value
    }).then(
        message => alert("Message Sent Succesfully.\nPlease Check Your provide Email to see the reply.\nThanks for Contact.")
      );
}