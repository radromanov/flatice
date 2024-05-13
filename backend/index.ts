import { env } from "../lib/env";
import router from "./api";
import { handleError, notFound } from "./lib";
import { ExpressConfig } from "./lib/config";

const PORT = env.init().getOne("SERVER_PORT");

const app = ExpressConfig();

app.use("/api/v1", router);

app.use("*", notFound);
app.use(handleError);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
