import express from "express";
import router from './views';
import cors from 'cors';

const app = express();
const port = 3333;

//middlewares
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));

//importo e inyecto las rutas
app.use(router);

app.get("/api", (req, response) => {
  return response.json({ version: 0.1 });
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});