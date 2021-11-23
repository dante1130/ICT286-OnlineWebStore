function search(input, category) {
    $.get("php/search.php", { userinput: input, category: category}, (data) => {
        displayItems(JSON.parse(data));
    });
}

function displayItems(products) {
    $('.grid-container').empty();

    if (products.length > 0) {
        products.forEach((element) => {
            let productDiv = $('<div/>')
                                .addClass("grid-item")
                                .html(`<img class="product-img" src=${element.ImageURL} alt="product-img">
                                       <h2>${element.ProductName}</h2>
                                       <p class="price">$${element.Price}</p>
                                       <p class="product-desc">${element.ProductDesc}</p>
                                       <a href="#" class="add-product-btn">Add to cart</a>`);
    
            $('.grid-container').append(productDiv);
        });   
    } else {
        $('.grid-container').append($('<div/>')
                            .html(`<p>No products returned.</p>`));
    }
}

$('#search').on('input', () => {
    search($('#search').val(), $('#product-category').val());
});

$('#product-category').on('change', () => {
    search($('#search').val(), $('#product-category').val());
})