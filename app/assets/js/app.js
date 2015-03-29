$(document).ready(function() {
    parallaxScroll();
    contactFormCallback();
});

function parallaxScroll() {
    $window = $(window);
    $bg_img = $(".jumbotron-background");
    var isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    $window.on("scroll", function() {
        var top = $window.scrollTop();
        if (!isMobile) {
            $bg_img.css('transform', 'translate3d(0, '+top/3+'px, 0)')
                   .css('opacity', Math.min(1-top/2500, 1));
        }
    });
}

function contactFormCallback() {
    $("#contact").submit(function(event) {
        event.preventDefault();
        var $form = $(this),
            name = $form.find('input[name="name"]').val(),
            email = $form.find('input[name="_replyto"]').val(),
            message = $("#formMessage").val();
        $.ajax({
            url: "//formspree.io/xbrendashih@gmail.com",
            method: "POST",
            data: {
                name: name,
                _replyto: email,
                subject: "brendashih.com contact form message",
                message: message,
                _gotcha: ""
            },
            dataType: "json",
            success: function() {
                var $form = $("#contact");
                $form.after("<div><p>thanks!</p></div>");
                $form.slideUp();
            }
        });
    });
}