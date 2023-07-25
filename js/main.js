$(document).ready(function(){
    /* menu responsivo*/
    $('.block').click(function() {
        $('#navigator').toggleClass('open')
    })

    /* Scroll effecr */
    $(window).scroll(function(){
        $('#navigator').toggleClass('scrolled', $(this).scrollTop() > 1)
    })

    /*Typed*/
    const element = [
        "front-end",
        "back-end",
        "student",
        "developer", 
        "lover"
    ]
    var typed = new Typed(".typed", {
        strings: element,
        typeSpeed: 15,
        backSpeed: 15,
        backDelay: 1000,
        loop: true
    })
})