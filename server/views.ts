import { getNames, updateName, getRandomNames } from "./controllers";
import express from "express";

//route generator
const rutas = express.Router();

//Get all userNames in the counter.txt
rutas.get("/api/namescounter", async (req, res) => {
  const data = await getNames();

  return res.json(data);
});

//get random names
rutas.get("/api/randomnames", async (req, res) => {
  res.json(await getRandomNames());
});

//modify names information
rutas.post("/api/namescounter", async (req, res) => {
  const { name, type } = req.body;

  const responseUpdate = await updateName(name, type);

  res.json(responseUpdate);
});

export default rutas;
