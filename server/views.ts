
import { getNames, updateName } from "./controllers";
import express from 'express'


//Genero un router
const rutas = express.Router();

//Get all userNames
rutas.get("/api/usernames", async (req, res) => {

  const data = await getNames();

  return res.json(data);
});


//Count a userName 
rutas.post("/api/usernames", async(req,res)=>{

  const {name,minusType} = req.body

  console.log(name,minusType)

  const responseUpdate = await updateName(name,minusType ? true : false)

  res.json(responseUpdate)

})


//exporto el router que tiene todas las rutas de est ebloque
export default rutas;
