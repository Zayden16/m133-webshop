import { Router } from "https://deno.land/x/oak/mod.ts";
import articleController from "./controllers/ArticleController.ts";
import cartController from "./controllers/CartController.ts";
import siteController from "./controllers/SiteController.ts";
import checkoutController from "./controllers/CheckoutController.ts";

const router = new Router();

// Router Def for the Site
router.get("/", siteController.Index);
router.get("/ArticleDetail/:id", siteController.ArticleDetail);
router.get("/Cart", siteController.Cart);
router.get("/Checkout", siteController.Checkout);

// Router Def for Articles
router.get("/api/getallarticles", articleController.getAllArticles);
router.get("/api/article/:id", articleController.article);
router.post("/api/createarticle", articleController.createArticle);
router.delete("/api/deletearticle/:id", articleController.deleteArticle);

// Router Def for Cart
router.post("/api/cart/addItem", cartController.addToCart);
router.get("/api/cart", cartController.getCart);

// Router Def for Checkout
router.post("/api/checkout", checkoutController.Checkout);

export default router;