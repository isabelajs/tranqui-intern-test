import express from "express";
import router from "./views";
import cors from "cors";
import dotenv from "dotenv";

const app = express();
const port = 5000;
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

//import and injected the routes
app.use(router);

app.get("/api", (req, response) => {
  return response.json({ version: 0.1 });
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
