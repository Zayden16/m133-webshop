import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (ctx => {
    ctx.response.redirect("/index.html");
}));

router.get("home", (ctx => {
    ctx.response.body=
}))

export default router;