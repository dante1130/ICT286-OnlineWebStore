$(document).ready(function () {
    $('.browse-btn').on('click', () => {
        switchPage("search.html");
        search('', 'All');
    });
});

