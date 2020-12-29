import { Application, send } from "https://deno.land/x/oak/mod.ts"
import { Article } from './models/Article.ts'
import api from "./router.ts";
import db from "./dbHelper.ts"

const app = new Application();
const PORT = 8000;

// Logging Middleware
app.use(async (ctx, next) => {
    await next();
    const responseTime = ctx.response.headers.get("X-Response-Time");
    const time: number = Date.now();
    const currentTime : Date = new Date(time);
    currentTime.toUTCString();
    console.log(`${currentTime} ${responseTime} ${ctx.request.method} ${ctx.request.url}`);
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
//Returns HTTP 405 if an unallowed method is used
app.use(api.allowedMethods());

//Db stuff
await db.link([Article]);
await db.sync({drop:true});

//Security + Static Server
//Using the FileWhitelist to manually approve of all files shared publicly
app.use(async (ctx) =>{
    const filePath = ctx.request.url.pathname;
    const fileWhitelist = [
        "/index.html",
        "/media/XPhone.png",
        "/media/icon.svg",
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