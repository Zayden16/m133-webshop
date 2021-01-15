// deno-lint-ignore-file

import { CartItem } from "../../models/CartItem.ts";

const artId = document.getElementById("artId").innerHTML;

let toggler = document.getElementById("cart-toggler");
let minicart = document.getElementById("minicart");

toggler.addEventListener("click", function() {
    if (minicart.style.display == "none" || minicart.style.display == "") {
        minicart.style.display = "flex";
    }
    else {
        minicart.style.display = "none";
    }
});


let addToCartBtn = document.getElementById("addToCart");
addToCartBtn.addEventListener("click", function(){
    addToCart();
});

let incrementBtn = document.getElementById("card-incrementor-" + artId);
incrementBtn.addEventListener("click", function(){
    incrementArticleCounter();
});

let decrementBtn = document.getElementById("card-decrementor-" + artId);
decrementBtn.addEventListener("click", function(){
    decrementArticleCounter();
});


function addToCart() {
    const amount = document.getElementById("card-article-counter-" + artId).value;
    const cartItem = new CartItem(artId, amount);
    fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
     });
     window.location.reload()
}

function incrementArticleCounter() {
    let counter = document.getElementById("card-article-counter-" + artId);
    let newVal = counter.value++;
    return newVal;
}

function decrementArticleCounter() {
    let counter = document.getElementById("card-article-counter-" + artId);
    if (counter.value < 2) {
        return 1;
    }
    let newVal = counter.value--;
    return newVal;
}