const search = (input) => {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(input);
        }
    }

    xhr.open("GET", "#", true);
    xhr.send();
}

$('#search-form').on('submit', (e) => {
    e.preventDefault();
    search($('#search').val());
});