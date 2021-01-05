import { RouterContext, renderFileToString} from "../deps.ts";
import data  from "../data/data.ts"
import { Cart } from "../models/Cart.ts";
import cartController from "./CartController.ts";

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
        if (await ctx.state.session.get("sessionId") == null){
            const cart = new Cart();
            await ctx.state.session.set("sessionId", cart.CartId);
            data.createCart(cart);
            console.log(cart);
        }
        else{
            const cart = data.getCart(await ctx.state.session.get("sessionId"));
        }
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/IndexView.ejs`,
            {articles : articles}
        );
    }

    async ArticleDetail(ctx: RouterContext) {
        const artId: string = ctx.params.id!;
        const article = data.getArticle(artId);
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/ArticleDetailView.ejs`,
            {article: article}
        );
    }

    async Cart(ctx: RouterContext){
        const sessionId = await ctx.state.session.get("sessionId");
        const cart = data.getCart("6585c438-59f5-4b4a-97bf-2cb271a11377");
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/CartView.ejs`,
            {cart: cart}
        );
    }
}
const siteController = new SiteController();
export default siteController;