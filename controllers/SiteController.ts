import { RouterContext, renderFileToString} from "../deps.ts";
import data  from "../data/data.ts"
import { Cart } from "../models/Cart.ts";
import cartController from "./CartController.ts";

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
        if (await ctx.state.session.get("cart") == null){
            const cart = new Cart();
            await ctx.state.session.set("cart", cart);
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
        const cart = await ctx.state.session.get("cart");
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/CartView.ejs`,
            {cart: cart}
        );
    }
}
const siteController = new SiteController();
export default siteController;