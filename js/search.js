function search(input) {
    $.get("php/search.php", (data) => {
        console.log(input);
    });
}

$('#search-form').on('submit', (e) => {
    e.preventDefault();
    search($('#search').val());
});