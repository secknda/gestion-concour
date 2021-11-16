$(function () {
    var tabEl = $('.tabSelected');
    var tabElContent = $('.tabSelectedContent');
    tabEl.click(function () {

        tabEl.removeClass('active');
        $(this).addClass("active");

        var id = $(this).attr('id');

        tabElContent.removeClass('show active');

        $("." + id).addClass('show active');
    });
})