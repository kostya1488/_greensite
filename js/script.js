$(".nav_link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
});



//------------------------------------------------- ajax

function submit_form(id) {

    var form = $('#' + id);
    var res = $('#ajax_respounce');

    form.submit(function() {
        form.parent().animate({
                opacity: 0,
                left: "60%"
            },
            800, () => {
                setTimeout(() => {
                    form.hide();
                    form.parent().css('padding', '100px 0')
                    res.show();
                    form.parent().animate({
                            opacity: 1,
                            left: 0
                        },
                        800);
                }, 600)

            }
        );
        return false;
    });

}