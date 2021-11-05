import express from "express";
import router from './views';
import cors from 'cors';
import path from "path";

const app = express();
const port = 3333;

//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'build')));

//importo e inyecto las rutas
app.use(router);

app.get("/api", (req, response) => {
  return response.json({ version: 0.1 });
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});