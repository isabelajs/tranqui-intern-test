import fs from "fs";
import path from "path";
import mockData from "./mockData.json";
import {randomNumber} from './utils'

interface nameCounters{
  [key: string]: number
}

interface returnUpdateName{
  message: string,
  error: boolean,
  data: number,
}


const getData = async () => {
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

export const getRandomNames = async ()=>{

  const counters = await getData() as nameCounters

  const randomQuantity = randomNumber(5,8) as number

  const randomIndex = randomNumber(0,mockData.length-1,randomQuantity) as number[]

  const randomData = {} as nameCounters

  mockData.filter((v,index) => randomIndex.includes(index)).forEach(element =>{
    randomData[Object.keys(element)[0]] = counters[Object.keys(element)[0]] || 0 
  })

  return {
    quantity: randomQuantity,
    names: randomData
  }
}

const writeData = async (text:string) => {
  const filePath = path.resolve(__dirname, "counter.txt");

  return new Promise((res, rej) => {
    fs.writeFile(filePath, text, function (err) {
      if (err) return rej(err);

      res("Write sucesfull");
    });
  });
};

export async function getNames() {
  const data = await getData();

  return data;
}

export async function updateName(name:string,type:string):Promise<returnUpdateName>{

  const data = await getNames() as nameCounters

  console.log(type,name)

  if (name && typeof name === "string") {

    if (data[name]) {
      
      switch (type) {
        case "plus":
          data[name]++
          break;
        case "minus":
          data[name]--
          break

        case "delete":
          delete data[name]
          break
        default:
          break;
      }

    } else {
      data[name] = 1;
    }

    await writeData(JSON.stringify(data));

    return{
      message: "sucessfull",
      error: false,
      data: data[name]
    }
  }else{
      return{
      message: "",
      error: true,
      data: 0
    }
  }

}


