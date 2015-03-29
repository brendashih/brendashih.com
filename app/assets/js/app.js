$(document).ready(function() {
    contactFormCallback();
});

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