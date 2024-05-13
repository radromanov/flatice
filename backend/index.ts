import express from "express";
import { env } from "../lib/env";
import router from "./api";
import { handleError } from "./lib";
import { ExpressConfig } from "./lib/config";
import path from "path";
import serveStatic from "serve-static";

const PORT = env.init().getOne("SERVER_PORT");

const app = ExpressConfig();

app.use("/api/v1", router);

app.use(handleError);

// Serves the static React app
app.use(serveStatic(path.join(__dirname, "../client/dist")));
// Any request that is sent to a not found path, serves the index.html React page
app.use("*", serveStatic(path.join(__dirname, "../client/dist/index.html")));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
