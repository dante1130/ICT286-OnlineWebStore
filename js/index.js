function switchPage(pageRef) {
    $.get(pageRef, (data) => {
        $('main').html(data);
    });
}

$('.nav-link').on('click', (e) => {
    switchPage("search.html");
    search($(e.target).text());
});