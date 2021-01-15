// deno-lint-ignore-file

import { CartItem } from "../../models/CartItem.ts";

const artId = document.getElementById("addToCart").value;

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

let incrementBtn = document.getElementById("incrementor-" + artId);
incrementBtn.addEventListener("click", function(){
    incrementArticleCounter();
});

let decrementBtn = document.getElementById("decrementor-" + artId);
decrementBtn.addEventListener("click", function(){
    decrementArticleCounter();
});

function addToCart() {
    const amount = document.getElementById("article-counter-" + artId).value;
    const cartItem = new CartItem(artId, amount);
    fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
     });
     window.location.reload()
}

function incrementArticleCounter() {
    let counter = document.getElementById("article-counter-" + artId);
    let newVal = counter.value++;
    return newVal;
}

$('.decrementor').on('click', function(e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());
    if (value &amp;amp;gt; 1) {
        value = value - 1;
    } else {
        value = 0;
    }
 
  $input.val(value);
 
});

// function decrementArticleCounter() {
//     let counter = document.getElementById("article-counter-" + artId);
//     if (counter.value < 2) {
//         return 1;
//     }
//     let newVal = counter.value--;
//     return newVal;
// }