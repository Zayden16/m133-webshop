import { RouterContext, renderFileToString} from "../deps.ts";
import data  from "../data/data.ts"

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
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