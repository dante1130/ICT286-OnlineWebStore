$(document).ready(() => {
    $('.add-product-btn').on('click', (e) => {
        const product = {
            ProductImg: $(e.currentTarget).prevAll('.product-img').first().attr('src'),
            ProductName: $(e.currentTarget).prevAll('h2').first().text(),
            Price: $(e.currentTarget).prevAll('.price').first().text(),
            ProductDesc: $(e.currentTarget).prevAll('.product-desc').first().text()
        }
    
        addToShoppingCart(product);
    });

    $('.checkout-btn').on('click', (e) => {
        checkOut();
    })
});


function addToShoppingCart(product) {
    $.post("php/addtocart.php", { product: product });
}

function removeFromShoppingCart(product) {
    $.post("php/removefromcart.php", { product: product });
}

function getShoppingCart() {
    $.get("php/getshoppingcart.php", {}, (data) => {
        displayCartTable(JSON.parse(data));
    });
}

function displayCartTable(products) {
    if (products.length > 0) {
        products.forEach((element) => {
            let productRow = $('<tr/>')
                                .html(`<td><img class="product-img" src=${element.ProductImg} alt="product-img"></td>
                                       <td><p>${element.ProductName}</p></td>
                                       <td><p>${element.ProductDesc}</p></td>
                                       <td><p>${element.Price}</p></td>`);
    
            $('#product-table tbody').append(productRow);
        });   
    } else {
        $('#product-table').hide();
        $('.checkout-btn').hide();

        $('.shopping-cart-container').append($('<div/>')
                                     .html(`<center><h2>Nothing in cart.</h2></center>`));
    }
}

function checkOut() {
    $.get("php/getshoppingcart.php", {}, (data) => {
        let products = JSON.parse(data);

        products.forEach((element) => {
            removeFromShoppingCart(element);
        });   
    });
}