$('document').ready(function() {
    switchPage("home.html");
})

$('.home-link').on('click', () => {
    switchPage("home.html");
});

$('.nav-link').on('click', (e) => {
    switchPage("search.html");
    search($(e.target).text());
});

$('.burger-nav').on('click', () => {
    $('.nav-links').toggleClass('nav-active');
    $('.burger-nav').toggleClass('toggle');
});

function switchPage(pageRef) {
    $.get(pageRef, (data) => {
        $('main').html(data);
    });
}