
import { getNames, updateName, getRandomNames } from "./controllers";
import express from 'express'


//Genero un router
const rutas = express.Router();

//Get all userNames
rutas.get("/api/namescounter", async (req, res) => {

  const data = await getNames();

  return res.json(data);
});


rutas.get('/api/randomnames', async (req,res)=>{
  
  res.json(await getRandomNames())
})


//Count a userName 
rutas.post("/api/namescounter", async(req,res)=>{

  const {name,type} = req.body

  const responseUpdate = await updateName(name,type)

  res.json(responseUpdate)

})


//exporto el router que tiene todas las rutas de est ebloque
export default rutas;
