import { Router } from "https://deno.land/x/oak/mod.ts";
import articleController from "./controllers/ArticleController.ts";
import cartController from "./controllers/CartController.ts";
import siteController from "./controllers/SiteController.ts";

const router = new Router();

router.get("/", siteController.Index);
router.get("/ArticleDetail/:id", siteController.ArticleDetail);
router.get("/Cart", siteController.Cart);

// Router Def for Articles
router.get("/api/getallarticles", articleController.getAllArticles);
router.get("/api/article/:id", articleController.article);
router.post("/api/createarticle", articleController.createArticle);
router.delete("/api/deletearticle/:id", articleController.deleteArticle);

export default router;