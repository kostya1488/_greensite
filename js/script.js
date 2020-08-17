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
    form.parent().animate({
            opacity: 0,
            left: "20%"
        },
        800, () => {
            setTimeout(() => {
                form.hide();
                res.show();
                form.parent().animate({
                        paddingTop: 100,
                        paddingBottom: 100,
                        opacity: 1,
                        left: 0
                    },
                    800);
            }, 400)

        }
    )
}