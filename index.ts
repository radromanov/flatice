import router from "./api/routes";
import ExpressConfig from "./config";
import env from "./env";

const PORT = env.init().getOne("SERVER_PORT");

const app = ExpressConfig();

app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
