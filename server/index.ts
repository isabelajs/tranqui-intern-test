import express from "express";
import router from './views';
import cors from 'cors';
import path from "path";
import dotenv from 'dotenv'

const app = express()
const port = 5000;
dotenv.config()

console.log(process.env.NODE_ENV, process.env.NODE_MODE)
//middlewares
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));


app.use(express.static(path.join(path.dirname(__dirname), 'build')));


console.log(path.join(path.dirname(__dirname), 'build'))

//importo e inyecto las rutas
app.use(router);

app.get("/api", (req, response) => {
  return response.json({ version: 0.1 });
});

//para toda que no coincida con las otras rutas

app.get('/', (req, res) => {
  res.sendFile(path.join(path.dirname(__dirname), 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`server started at ${port}`);
});
