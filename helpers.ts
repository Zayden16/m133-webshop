import {
    RouterContext,
    isJSON
} from "./deps.ts"
import {
    Cart
} from "./models/Cart.ts"

class Helpers {
    async getSessionCart(ctx: RouterContext) {
        if (await ctx.state.session.get("cart") == undefined) {
            const cart = new Cart();
            await ctx.state.session.set("cart", cart);
            return cart;
        } else {
            return await ctx.state.session.get("cart");
        }
    }
    swissCommercialRounding(value: number) {
        let roundedValue = (Math.ceil(value * 20 - 0.5) / 20).toFixed(2);
        return roundedValue;
    }

    validate(json: string) {
        if (isJSON(json)) {
            return true;
        } else {
            throw "Recieved file was not a JSON"
        }
    }
}

const helpers = new Helpers();
export default helpers;