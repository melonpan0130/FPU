$(function() {
    $height = $(window).height();
    $width = $(window).width();
    $("#section1, #section2").css({"height": $height});

    $("#menuButton").on("click", function() {
        $("nav").toggleClass("open");
        if ($("nav").hasClass("open")) {
            $("nav").animate({right:"0px"}, 300);
        } else {
            $("nav").animate({right:"-100px"}, 300);
        }
    });
});