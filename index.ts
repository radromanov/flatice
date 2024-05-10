import { PORT } from "./env";
import ExpressConfig from "./config";

const app = ExpressConfig();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
