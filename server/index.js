// import express from "express";
// import fs, { readFileSync } from "fs";
// import path from "path";
// import { json } from "stream/consumers";
// import { Request } from "express";

const express = require("express");
const fs = require("fs");
const path = require("path");
// const jso

const app = express();
const port = 3333;

app.get("/api", (req, response) => {
  return response.json({ version: 0.1 });
});

//get data
app.get("/api/usernames", async (req, res) => {
  const data = await getData();

  return res.json(data);
});

// type RequestParams = {
//   name: string,
// };

app.post("/api/usernames", async (req, res) => {
  //leer el file

  // console.log(req.query)

  const data = await getData();

  const { name } = req.query;

  if (name && typeof name === "string") {
    if (data[name]) {
      data[name]++;
    } else {
      data[name] = 1;
    }

    // console.log(name, typeof name, data);

    await writeData(JSON.stringify(data));

    res.json({ message: "succesfull", data });
  } else {
    res.json("Porfavor Ingresa un nombre");
  }

  // if(data[])
});

let getData = async () => {
  const filePath = path.resolve(__dirname, "counter.txt");
  return new Promise((res, rej) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        rej(err);
        return;
      }
      res(JSON.parse(data));
    });
  });
};

let writeData = async (text) => {
  const filePath = path.resolve(__dirname, "counter.txt");

  return new Promise((res, rej) => {
    fs.writeFile(filePath, text, function (err) {
      if (err) return rej(err);

      console.log("todo melo");
      res("Write sucesfull");
    });
  });
};

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

//leer un archivo

//convertir el texto a objeto

//modificar el objeto

//sobrescribir el archivo

//tu tienes 1000 nombres

//obtener de manera aleatoria 5-8 nombres

//enviar esos 5 u 8 nombres

//frontend

//listar esos elementos
//si se le da click al boton  + -

//actualizar interfaz visual, enviar la solicitud pero si hay un error retornar al vlaor
//anterior y mostrar un mensaje de error

//cuando ocurre una solicitud de conteo de un nombre
//leer el txt evaluar si el nombre si existe +1
// si no existe añadirlo y agregar 1

// 1) tener una api externa que construya esos 5 u 8 elementos en la solicitud

// 2) tner un archivo con 1000 nombres

// escoger un numeor entre 5 y 8 (5,6,7,8)

//1) a la api solicitar n elementos random

//2) escoger de mi archivo o lista n elementos random (indices)

// enviar esa response

//2-- Type:POST URL:api/usernames?name='nombre'

//3-- type:DELETE URL:api/usernames?name='nombre'

//FRONTEND

//getRandomNames and updateName

//getRandomnames listarlos

//cada boton del name tener la funcion updateName

// hacer que sea forma de tabla y que se pueda no solo sumar contador si no restar, eliminar

//Correr todo esto en un servidor
