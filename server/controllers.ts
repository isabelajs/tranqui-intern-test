import fs from "fs";
import path from "path";
import mockData from "./mockData.json";
import { randomNumber } from "./utils";

interface nameCounters {
  [key: string]: number;
}

interface returnUpdateName {
  message: string;
  error: boolean;
  data: number;
}

enum actionType {
  plus = "plus",
  minus = "minus",
  delete = "delete",
}

//get data from counter.txt
const getData = async () => {
  const filePath = path.resolve(__dirname, "counter.txt");
  return new Promise((res, rej) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        rej(err);
        return;
      }

      const dataResponse = data ? data : "{}";

      res(JSON.parse(dataResponse));
    });
  });
};

// get random names from database
export const getRandomNames = async () => {
  const counters = (await getData()) as nameCounters;

  const randomQuantity = randomNumber(5, 8) as number;

  const randomIndex = randomNumber(
    0,
    mockData.length - 1,
    randomQuantity
  ) as number[];

  const randomData = {} as nameCounters;

  randomIndex
    .map((index) => mockData[index])
    .forEach((element) => {
      randomData[Object.keys(element)[0]] =
        counters[Object.keys(element)[0]] || 0;
    });

  return {
    quantity: randomQuantity,
    names: randomData,
  };
};

//write modificactions in the counter.txt
const writeData = async (text: string) => {
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

//update name values ​​according to actions
export async function updateName(
  name: string,
  type: actionType
): Promise<returnUpdateName> {
  const data = (await getNames()) as nameCounters;

  console.log(type, name);

  if (!!name) {
    switch (type) {
      case actionType.plus:
        data[name] ? data[name]++ : (data[name] = 1);
        break;

      case actionType.minus:
        data[name] > 1 ? data[name]-- : delete data[name];
        break;

      case actionType.delete:
        data[name] && delete data[name];
        break;

      default:
        break;
    }

    await writeData(JSON.stringify(data));

    return {
      message: "sucessfull",
      error: false,
      data: data[name] || 0,
    };
  } else {
    return {
      message: "",
      error: true,
      data: 0,
    };
  }
}
