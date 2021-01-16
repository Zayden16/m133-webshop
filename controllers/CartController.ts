import {
    RouterContext,
    renderFileToString,
    Router,
    Article
} from "../deps.ts";
import {
    CartItem
} from "../models/CartItem.ts";
import {
    Cart
} from "../models/Cart.ts";
import helpers from "../helpers.ts"
import data from "../data/data.ts"



export class CartController {
    async getCart(ctx: RouterContext) {
        const cart = await helpers.getSessionCart(ctx);
        ctx.response.body = JSON.stringify(cart);
        ctx.response.status = 200;
    }

    async getCartTotal(ctx: RouterContext) {
        const cart = await helpers.getSessionCart(ctx);
        const articles = data.getAllArticles();

        var total: number = 0;
        // deno-lint-ignore no-explicit-any
        const cartMatrix: any = []
        let matrixItem;

        if (cart.CartItems.length > 0) {
            articles.forEach((art: Article) => {
                cart.CartItems.forEach((cartItem: CartItem) => {
                    if (art.ArticleId == cartItem.ArticleId) {
                        matrixItem = Object.assign(art, cartItem);
                        cartMatrix.push(matrixItem);
                    }
                });
            });

            cartMatrix.forEach((item: any) => {
                total += (item.Amount * item.ArticlePrice)
            });
            ctx.response.body = helpers.swissCommercialRounding(total);
            ctx.response.status = 200;
        } else {
            ctx.response.body = "Cart is empty!";
            ctx.response.status = 404;
        }

    }

    async addToCart(ctx: RouterContext) {
        let cart = await helpers.getSessionCart(ctx);
        const {
            value
        } = ctx.request.body({
            type: "json"
        });
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
                } else {
                    cart.addItem(newItem);
                }
            });
        } else {
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