import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (ctx => {
    ctx.response.redirect("/index.html");
}));

export default router;