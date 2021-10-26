function search(input) {
    $.get("php/search.php", { userinput: input }, (data) => {
        console.log(data);
    });
}

$('#search-form').on('submit', (e) => {
    e.preventDefault();
    search($('#search').val());
});