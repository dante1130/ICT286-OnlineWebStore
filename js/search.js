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
                            .html(`<img class="product-img" src=images/cpu.jpg>
                                   <h2>${element.ProductName}</h2>
                                   <p class="price">$${element.Price}</p>
                                   <p class="product-desc">${element.ProductDesc}</p>`);

        $('.grid-container').append(productDiv);
    });   
}

$('#search').on('input', (e) => {
    search($('#search').val());
});