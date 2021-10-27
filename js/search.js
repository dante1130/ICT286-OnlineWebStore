function search(input) {
    $.get("php/search.php", { userinput: input }, (data) => {
        displayItems(JSON.parse(data));
    });
}

function displayItems(products) {
    $('.grid-container').empty();

    products.forEach((element) => {
        let productDiv = $('<div/>')
                            .addClass("grid-item")
                            .html(`<h2>${element.ProductName}</h2>
                                   <p>${element.ProductDesc}</p>
                                   <p>$${element.Price}</p>`);

        $('.grid-container').append(productDiv);
    });   
}

$('#search').on('input', (e) => {
    search($('#search').val());
});