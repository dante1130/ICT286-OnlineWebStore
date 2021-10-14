function switchPage(pageRef) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4 && xhr.status == 200) {
            $('main').html(xhr.responseText);
        }
    }

    xhr.open("GET", pageRef, true);
    xhr.send();
}

$('.nav-link').on('click', (e) => {
    switchPage("search.html");
    search($(e.target).text());
});