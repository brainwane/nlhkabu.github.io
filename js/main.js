$(document).ready(function(){

    var nav = $('.main-nav');

    // Toggle mobile nav
    $('.toggle-nav').click(function(e){
        e.preventDefault();
        nav.slideToggle();
    });

    // Reset when window switches to desktop view
    $(window).resize(function() {
        if ($(window).width() > 750) {
            nav.show();
        } else {
            nav.hide();
        }
    });

    //Smooth scroll to page id (for index page)

    $('a[href^="/#"], a[href^="#"]').on('click',function (e) {

        var target = this.hash;
        var $target = $(target);
        var path = window.location.pathname;

        if (path == '/' || target == '#contact'){
            e.preventDefault();

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 900, 'swing', function () {
                window.location.hash = target;
            });
        }
    });

});
