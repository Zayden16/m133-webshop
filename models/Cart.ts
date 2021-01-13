
import { CartItem } from "./CartItem.ts";

export class Cart{
    CartItems: CartItem[];

    constructor() {
        this.CartItems = [];
    }

    addItem(item: CartItem) {
        this.CartItems.push(item);
        console.log(this);
    }
}