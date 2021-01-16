class CartItem {
    constructor(artId, amount){
        this.ArticleId = artId;
        this.Amount = amount;
    }
}
const artId1 = document.getElementById("addToCart").value;
let toggler = document.getElementById("cart-toggler");
let minicart = document.getElementById("minicart");
toggler.addEventListener("click", function() {
    if (minicart.style.display == "none" || minicart.style.display == "") {
        minicart.style.display = "flex";
    } else {
        minicart.style.display = "none";
    }
});
let addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", function() {
    addToCart();
});
function addToCart() {
    const amount1 = document.getElementById("article-counter-" + artId1).value;
    const cartItem = new CartItem(artId1, amount1);
    fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
    });
    window.location.reload();
}
$('.decrementor').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    if (value > 1) {
        value = value - 1;
    } else {
        value = 0;
    }
    $input.val(value);
});
$('.incrementor').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    if (value < 100) {
        value = value + 1;
    } else {
        value = 100;
    }
    $input.val(value);
});
