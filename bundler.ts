const [diagnostics_appJs, appJs] = await Deno.bundle(
    "./public/js/app.ts",
);
await Deno.writeTextFile("./public/js/app.js", appJs);