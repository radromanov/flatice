import ExpressConfig from "./config";
import Env from "./env";

const env = new Env();
const PORT = env.getOne("SERVER_PORT");

const app = ExpressConfig();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
