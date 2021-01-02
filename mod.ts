import { Application, send, Session } from "./deps.ts"
import router from "./router.ts";

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

// Session Middleware
const session = new Session({ framework:"oak" });
await session.init();
app.use(session.use()(session));


//Router Middleware
app.use(router.routes());
//Returns HTTP 405 if an unallowed method is used
app.use(router.allowedMethods());

//Security + Static Server
//Using the FileWhitelist to manually approve of all files shared publicly
app.use(async (ctx) =>{
    const filePath = ctx.request.url.pathname;
    const fileWhitelist = [
        "/media/XPhone.png",
        "/media/icon.svg",
        "/js/app.js",
        "/stylesheets/styles.css",
        "/views/test.ejs"
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