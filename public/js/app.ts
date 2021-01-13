import { CartItem } from "../../models/CartItem.ts"

export async function addToCart(artId: string) {
    const amount = document.getElementById(`article-counter-${artId}`);
    const cartItem = new CartItem(artId, amount);
    await fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
    });
}