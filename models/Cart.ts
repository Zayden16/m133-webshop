
import { CartItem } from "./CartItem.ts";

export class Cart{
    CartItems: CartItem[];

    constructor() {
        this.CartItems = [];
    }

    addItem(item: CartItem) {
        this.CartItems.push(item);
    }
    removeItem(item:CartItem){
        const filteredArray = this.CartItems.filter(function(element){
            return element.ArticleId !== item.ArticleId;
        });
        this.CartItems = filteredArray;
    }
}