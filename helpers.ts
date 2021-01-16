import { RouterContext } from "./deps.ts"
import { Cart } from "./models/Cart.ts"

class Helpers {
    async getSessionCart(ctx: RouterContext) {
        if (await ctx.state.session.get("cart") == undefined){
            const cart = new Cart();
            await ctx.state.session.set("cart", cart);
            return cart;
        }
        else{
            return await ctx.state.session.get("cart");
        }
    }
}

const helpers = new Helpers();
export default helpers;