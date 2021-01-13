import { CartItem } from "../../models/CartItem.ts"

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


// export async function addToCart(artId: string) {
//     const amount = document.getElementById(`article-counter-${artId}`);
//     const cartItem = new CartItem(artId, amount);
//     await fetch("/api/cart/addItem", {
//         method: 'POST',
//         mode: 'no-cors',
//         body: JSON.stringify(cartItem)
//     });
// }