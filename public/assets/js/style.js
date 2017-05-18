$(document).ready(function() {
    var targetOffset = $("#hero-img").offset().top;

    var $w = $(window).scroll(function() {
        if ($w.scrollTop() > targetOffset) {
            $('#hero-img').css({ "position": "fixed" });
            $('#hero-img').css({ "top": "0px" });
            $('#hero-img').css({ "width": "100%" });
            $('#logo').css({ "position": "relative" });
            $('#logo').css({ "top": "0" });

            // $('#logo').css({""})
        } else {
            $('#hero-img').css({ "position": "relative" });
            $('#logo').css({ "position": "absolute" });
            $('#logo').css({ "top": "156px" });

        }
    });
})
