import { RouterContext, renderFileToString} from "../deps.ts";
import data  from "../data/data.ts"

export class CartController{
    async Cart(ctx: RouterContext) {
        sessionId = await getSessionId(ctx);
        const cart = getCart(sessionId);
        );
    }
}
const cartController = new CartController();
export default cartController;