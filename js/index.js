$('document').ready(function() {
    switchPage("home.html");
})

$('.home-link').on('click', (e) => {
    switchPage("home.html");
});

$('.nav-link').on('click', (e) => {
    switchPage("search.html");
    search($(e.target).text());
});

function switchPage(pageRef) {
    $.get(pageRef, (data) => {
        $('main').html(data);
    });
}
