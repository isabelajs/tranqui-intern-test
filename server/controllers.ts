import fs from "fs";
import path from "path";

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

const writeData = async (text:string) => {
  const filePath = path.resolve(__dirname, "counter.txt");

  return new Promise((res, rej) => {
    fs.writeFile(filePath, text, function (err) {
      if (err) return rej(err);

      console.log("todo melo");
      res("Write sucesfull");
    });
  });
};

export async function getNames() {
  const data = await getData();

  return data;
}


interface Test{
  [key: string]: number
}

interface returnUpdateName{
  message: string,
  error: boolean,
  data: number,
}

export async function updateName(name:string,minusType?:boolean):Promise<returnUpdateName>{

  const data = await getNames() as Test

  console.log('llego',minusType)

  if (name && typeof name === "string") {
    if (data[name]) {

      data[name] =  minusType ? data[name] - 1 : data[name] + 1;


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


