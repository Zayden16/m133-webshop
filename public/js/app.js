class CartItem {
    constructor(artId, amount){
        this.ArticleId = artId;
        this.Amount = amount;
    }
}
export async function addToCart(artId1) {
    const amount1 = document.getElementById(`article-counter-${artId1}`);
    const cartItem = new CartItem(artId1, amount1);
    await fetch("/api/cart/addItem", {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(cartItem)
    });
}
