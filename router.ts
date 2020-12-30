import { Router } from "https://deno.land/x/oak/mod.ts";
import articleController from "./controllers/ArticleController.ts";
import siteController from "./controllers/SiteController.ts";

const router = new Router();

router.get("/", siteController.Index);
router.get("/test", siteController.Test);

// Router Def for Articles
router.get("/api/getallarticles", articleController.getAllArticles);
router.get("/api/article/:id", articleController.article);
router.post("/api/createarticle", articleController.createArticle);
router.delete("/api/deletearticle/:id", articleController.deleteArticle);

export default router;