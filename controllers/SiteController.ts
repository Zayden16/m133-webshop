import { RouterContext, renderFileToString, v4} from "../deps.ts";
import data  from "../data/data.ts"

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
        if (await ctx.state.session.get("sessionId") == null){
            await ctx.state.session.set("sessionId", v4.generate());
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
}
const siteController = new SiteController();
export default siteController;