import {
    RouterContext,
    isJSON
} from "../deps.ts";
import helpers from "../helpers.ts"



export class CheckoutController {
    async Checkout(ctx: RouterContext) {
        const {
            value
        } = ctx.request.body({
            type: "json"
        });
        const obj = await value;
        JSON.stringify(obj);
        helpers.validate(obj);
        await Deno.writeTextFile(`./checkouts/order-${Date.now()}.json`, obj);
        ctx.response.body = "Checkout was Recieved";
        ctx.response.status = 200;
    }
}


const checkoutController = new CheckoutController();
export default checkoutController;