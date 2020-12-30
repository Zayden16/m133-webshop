import { RouterContext } from "../deps.ts";
import { renderFileToString } from "../deps.ts"
import data  from "../data/data.ts"

export class SiteController{
    async Index(ctx: RouterContext) {
        const articles = data.getAllArticles();
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/index.ejs`,
            {articles : articles}
        );
    }
    async Test(ctx: RouterContext) {
        ctx.response.body = await renderFileToString(
            `${Deno.cwd()}/views/test.ejs`,
            {}
        );
    }
}
const siteController = new SiteController();
export default siteController;