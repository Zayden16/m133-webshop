import { RouterContext, renderFileToString, Article} from "../deps.ts";
import data  from "../data/data.ts"
import helpers from "../helpers.ts"
import { CartItem } from "../models/CartItem.ts";

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
        const cart = await helpers.getSessionCart(ctx);
        console.log(await cart);
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
        const articles = data.getAllArticles();
        const cart = await helpers.getSessionCart(ctx);
        console.log(await cart);
        const dataContext = {
            article : article,
            articles: articles,
            cart: cart
        };
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/ArticleDetailView.ejs`,
            {dataContext: dataContext}
        );
    }

    async Cart(ctx: RouterContext){
        const cart = await helpers.getSessionCart(ctx);
        const articles = data.getAllArticles();
        // const actualCart:Article[] = [];
        // cart.CartItems.forEach((element: CartItem) => {
        //     articles.forEach((article: Article)=>{
        //         if (article.ArticleId === element.ArticleId) {
        //             actualCart.push(article);
        //         }
        //     })
        // });
        // console.log(actualCart);
        
        // deno-lint-ignore no-explicit-any
        const cartMatrix: any = []
        let matrixItem;

        articles.forEach((art: Article) => {
            cart.CartItems.forEach((cartItem: CartItem) => {
                if (art.ArticleId == cartItem.ArticleId) {
                    matrixItem = Object.assign(art, cartItem);
                    cartMatrix.push(matrixItem);
                 }
            });
        });
        
        const dataContext = {
            cartMatrix
        };

        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/CartView.ejs`,
            {dataContext: dataContext}
        );
    }
}
const siteController = new SiteController();
export default siteController;