import { env } from "../lib/env";
import router from "./api";
import { ExpressConfig } from "./config";

const PORT = env.init().getOne("SERVER_PORT");

const app = ExpressConfig();

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
