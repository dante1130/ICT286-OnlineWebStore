function search(input, category) {
    $.get("php/search.php", { userinput: input, category: category}, (data) => {
        displayItems(JSON.parse(data));
    });
}

function displayItems(products) {
    $('.grid-container').empty();

    products.forEach((element) => {
        let productDiv = $('<div/>')
                            .addClass("grid-item")
                            .html(`<img class="product-img" src=${element.ImageURL}>
                                   <h2>${element.ProductName}</h2>
                                   <p class="price">$${element.Price}</p>
                                   <p class="product-desc">${element.ProductDesc}</p>`);

        $('.grid-container').append(productDiv);
    });   
}

$('#search').on('input', () => {
    search($('#search').val(), $('#product-category').val());
});

$('#product-category').on('change', () => {
    search($('#search').val(), $('#product-category').val());
})