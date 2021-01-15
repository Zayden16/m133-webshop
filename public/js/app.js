class CartItem {
    constructor(artId, amount){
        this.ArticleId = artId;
        this.Amount = amount;
    }
}
const artId1 = document.getElementById("artId").innerHTML;
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
let incrementBtn = document.getElementById("card-incrementor-" + artId1);
incrementBtn.addEventListener("click", function() {
    incrementArticleCounter();
});
let decrementBtn = document.getElementById("card-decrementor-" + artId1);
decrementBtn.addEventListener("click", function() {
    decrementArticleCounter();
});
function addToCart() {
    const amount1 = document.getElementById("card-article-counter-" + artId1).value;
    const cartItem = new CartItem(artId1, amount1);
    fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
    });
    window.location.reload();
}
function incrementArticleCounter() {
    let counter = document.getElementById("card-article-counter-" + artId1);
    let newVal = counter.value++;
    return newVal;
}
function decrementArticleCounter() {
    let counter = document.getElementById("card-article-counter-" + artId1);
    if (counter.value < 2) {
        return 1;
    }
    let newVal = counter.value--;
    return newVal;
}
