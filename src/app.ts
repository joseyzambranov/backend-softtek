import "dotenv/config";
import { configureApp } from "./server";

const port = process.env.PORT || 4000;
const app = configureApp("/dev/api");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
