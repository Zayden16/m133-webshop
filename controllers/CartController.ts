import { RouterContext, renderFileToString, Router, Article} from "../deps.ts";
import { CartItem } from "../models/CartItem.ts";
import { Cart } from "../models/Cart.ts";
import helpers from "../helpers.ts"


export class CartController{
    async addToCart(ctx: RouterContext){
        let cart = await helpers.getSessionCart(ctx);
        const { value } = ctx.request.body({type: "json"});
        const tempItem = await value;
        const newItem = new CartItem(tempItem.ArticleId, tempItem.Amount);
        const helperCart = new Cart(); //Deep Clone
        cart = Object.assign(helperCart, cart);
        if (cart.CartItems.length > 0) {
            cart.CartItems.forEach((element: CartItem) => {
                if (element.ArticleId == newItem.ArticleId) {
                    if (newItem.Amount == 0) {
                        cart.removeItem(element);
                    } else {   
                    const amount: number = element.Amount + newItem.Amount;
                    element.Amount = amount;
                    cart.removeItem(element);
                    cart.addItem(newItem);
                    }
                }
                else{
                    cart.addItem(newItem);
                }
            });
        } else{
            cart.addItem(newItem);
        }
        console.log(cart);
        await ctx.state.session.set("cart", cart);
        ctx.response.body = "Item added";
        ctx.response.status = 200;
    }
}

const cartController = new CartController();
export default cartController;