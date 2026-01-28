var cartCount = 0;

function addToCart(item) {
    cartCount++;
    document.getElementById("cartCount").innerHTML = cartCount;
    alert(item + " added to cart");
}
