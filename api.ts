import { Router } from "https://deno.land/x/oak/mod.ts";

const router = new Router();

router.get("/", (ctx => {
    ctx.response.body = "Welcome to this Website"
}));

export default router;