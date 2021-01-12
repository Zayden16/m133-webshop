import { RouterContext, renderFileToString, Router, Article} from "../deps.ts";
import data  from "../data/data.ts"
import articleController from "./ArticleController.ts";

export class CartController{
    async Cart(ctx: RouterContext) {
        const cartId:string = await ctx.params.id!;
        const cart = data.getCart(cartId);
        if (cart){
            ctx.response.status = 200;
            ctx.response.body = cart;
        }
        else{
            ctx.response.status = 200;
            ctx.response.body = "Cart not found";
        }
    }
    async getCartTotal(ctx: RouterContext){
        const cart = await ctx.state.session.get("cart");
        for (const cartItem of cart.CartItems) {
            let total = 0;
            const art: Article = data.getArticle(cartItem.ArtId);
            total += art.ArticlePrice;
        }
    }

    async addToCart(ctx: RouterContext){
        const { value } = ctx.request.body({type: "json"});
        const obj = await value;
        data.addToCart(obj.cartId, obj.itemId, obj.amount);
    }
}
const cartController = new CartController();
export default cartController;