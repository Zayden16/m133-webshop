import { Application, send } from "https://deno.land/x/oak/mod.ts"
import { Article } from './models/Article.ts'
import api from "./api.ts";
import db from "./dbHelper.ts"

const app = new Application();
const PORT = 8000;

// Logging Middleware
app.use(async (ctx, next) => {
    await next();
    const time = ctx.response.headers.get("X-Response-Time");
    console.log(`${time} ${ctx.request.method} ${ctx.request.url}`);
});

// Timing Middleware
app.use(async (ctx, next) =>{
    const start = Date.now();
    await next();
    const delta = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${delta}ms`);
});

//Router Middleware
app.use(api.routes());
app.use(api.allowedMethods());

//Db stuff
await db.link([Article]);

//Security + Static Server
app.use(async (ctx) =>{
    const filePath = ctx.request.url.pathname;
    const fileWhitelist = [
        "/index.html",
        "/media/XPhone.png",
        "/js/app.js",
        "/stylesheets/styles.css"
    ];
    if (fileWhitelist.includes(filePath)){
        await send (ctx, filePath, {
            root: `${Deno.cwd()}/public`,
        });
    }
});

console.log(`Application running on Port ${PORT}`);

await app.listen({
    port: PORT
});

