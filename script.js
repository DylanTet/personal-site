
$(function() {

    $('header').hide();

    $(function () {
        $(window).on('scroll', function () {

                 // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > 100) {
                $('header').fadeIn();
            } else {
                $('header').fadeOut();
            }
        });
    });

    // Project selector logic to filter the types of projects selected.

    $(".all").on("click", function() {
        $(".list-group-item").removeClass("is-checked")
        $(".all").addClass("is-checked");
        $(".project").show();
    });
    
    $(".web-app-btn").on("click", function() {
        $(".list-group-item").removeClass("is-checked")
        $(".web-app-btn").addClass("is-checked");
        $(".project").hide();
        $(".web-app").show();
    });
    
    $(".landing-page-btn").on("click", function() {
        $(".list-group-item").removeClass("is-checked")
        $(".landing-page-btn").addClass("is-checked");
        $(".project").hide();
        $(".landing-page").show();
    });
    
    $(".web-design-btn").on("click", function() {
        $(".list-group-item").removeClass("is-checked")
        $(".web-design-btn").addClass("is-checked");
        $(".project").hide();
        $(".web-design").show();
    });
});





