import { RouterContext, renderFileToString} from "../deps.ts";
import data  from "../data/data.ts"
import helpers from "../helpers.ts"

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
        const cart = helpers.getSessionCart(ctx);
        const dataContext = {
            articles: articles,
            cart: cart
        };
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/IndexView.ejs`,
            {dataContext : dataContext}
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
        const cart = await helpers.getSessionCart(ctx);
        const articles = data.getAllArticles();
        const dataContext = {
            articles: articles,
            cart: cart
        };
        console.log(dataContext);
        
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/CartView.ejs`,
            {dataContext: dataContext}
        );
    }
}
const siteController = new SiteController();
export default siteController;