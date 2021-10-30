var currentPage = "";

$('document').ready(function() {
    switchPage("home.html");
})

$('.home-link').on('click', () => {
    switchPage("home.html");
});

$('.shopping-cart-link').on('click', () => {
    switchPage("shoppingcart.html");
    getShoppingCart();
})

$('.nav-link').on('click', (e) => {
    if (currentPage != "search.html") {
        switchPage("search.html");
    }

    let category = $(e.target).text();

    $('#product-category').val(category);

    search('', category);
});

$('.burger-nav').on('click', () => {
    $('.nav-links').toggleClass('nav-active');
    $('.burger-nav').toggleClass('toggle');
});

$('.footer-link').on('click', (e) => {
    e.preventDefault();
    switchPage($(e.currentTarget).attr('href'));
});



function switchPage(pageRef) {
    currentPage = pageRef;

    $.get(pageRef, (data) => {
        $('main').html(data);
    });
}
