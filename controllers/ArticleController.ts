import { Article, Router, RouterContext } from "../deps.ts"
import data from "../data/data.ts"

class ArticleController{
    async getAllArticles(ctx: RouterContext){
        const articles = await data.getAllArticles();
        if (articles){
            ctx.response.body = articles;
            ctx.response.status = 200;
        }
        if (articles.length == 0) {
            ctx.response.body = "No articles found!";
            ctx.response.status = 404;
        }
    }

    async article(ctx: RouterContext){
        const id: string = await ctx.params.id!;
        const article = data.getArticle(id);
        if (article){
            ctx.response.status = 200;
            ctx.response.body = article;
        }
        else{
            ctx.response.status = 200;
            ctx.response.body = "Article not found";
        }
    }

    async createArticle(ctx: RouterContext){
        const { value } = ctx.request.body({type: "json"});
        const obj = await value;
        data.createArticle(obj);
        ctx.response.body = "Article was created";
        ctx.response.status = 200;
    }

    async updateArticle(ctx: RouterContext){
        //TO-DO
    }

    async deleteArticle(ctx: RouterContext){
        try {
            const id: string = await ctx.params.id!;
            data.deleteArticle(id);
            ctx.response.status = 200;
            ctx.response.body = {
                success: true,
                message: `Article with ID ${id} was deleted`,
                };
        }
        catch (error) {
            ctx.response.status = 400;
            ctx.response.body = {
            success: false,
            message: `Error: ${error}`,
            };
        }
    }
}
const articleController = new ArticleController();
export default articleController;