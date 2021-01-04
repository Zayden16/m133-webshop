import { Router } from "https://deno.land/x/oak/mod.ts";
import articleController from "./controllers/ArticleController.ts";
import cartController from "./controllers/CartController.ts";
import siteController from "./controllers/SiteController.ts";

const router = new Router();

router.get("/", siteController.Index);
router.get("/ArticleDetail/:id", siteController.ArticleDetail);

// Router Def for Articles
router.get("/api/getallarticles", articleController.getAllArticles);
router.get("/api/article/:id", articleController.article);
router.post("/api/createarticle", articleController.createArticle);
router.delete("/api/deletearticle/:id", articleController.deleteArticle);

// Router Def for Carts
router.get("/api/cart/:id", cartController.Cart);
router.post("/api/addtocart", cartController.addToCart);


export default router;