const items = [
  {
    time: "00:00",
    number: 0,
    checked: true,
  },
  {
    time: "00:07",
    number: 7,
    checked: true,
  },
  {
    time: "00:13",
    number: 13,
    checked: false,
  },
  {
    time: "00:19",
    number: 19,
    checked: true,
  },
  {
    time: "00:25",
    number: 25,
    checked: true,
  },
  {
    time: "00:28",
    number: 28,
    checked: true,
  },
  {
    time: "00:33",
    number: 33,
    checked: false,
  },
  {
    time: "00:49",
    number: 49,
    checked: true,
  },
  {
    time: "00:58",
    number: 58,
    checked: false,
  },
  {
    time: "01:09",
    number: 69,
    checked: true,
  },
  {
    time: "01:11",
    number: 71,
    checked: true,
  },
  {
    time: "01:12",
    number: 72,
    checked: true,
  },
  {
    time: "01:21",
    number: 81,
    checked: false,
  },
  {
    time: "01:30",
    number: 90,
    checked: true,
  },
];

console.log(items.length); //14

// 5.請過濾以下陣列中每項物件之鍵(key)為 "checked", 值(value)為 false 者：
let resultFive = items.filter((element) => element.checked !== false);
console.log(resultFive);

// 6.承上題，請將上題之答案為轉換為一陣列中每項只含有鍵(key)為 "number" 的物件(額外)
let resultSix = items.map((element) => {
  // 目標 => [{number : 0},{...},...{...}]
  let obj = {}; //創造一個空物件
  obj.number = element.number; //將組合(key:value)放入物件
  // console.log(obj);
  return obj;
});
console.log(resultSix);

// 7. 承上題，請寫一支純函式(pure function)，將參數傳入上題所產生之結果，若陣列中前後兩項鍵(key)為 "number" 所對應之值(value)差距小於等於 3，則除去前項，試問結果應為何(請執行純函式)？(額外)
function resultSeven(arrObj) {
  // console.log(arrObj);
  // 深淺拷貝疑問?
  let temp = JSON.parse(JSON.stringify(arrObj)); //做深拷貝避免記憶體相同
  for (let i = 0; i < temp.length - 1; i++) {
    // 求證寫法
    // console.log(`(${i},${i+1})`);
    // console.log(`(${temp[i].number},${temp[i + 1].number})`);
    // console.log(
    //   `(${temp[i].number},${temp[i + 1].number},${
    //     temp[i + 1].number - temp[i].number
    //   })`
    // );
    if (temp[i + 1].number - temp[i].number <= 3) {
      temp.splice(i, 1);
      i = i - 1;
    }
  }
  return temp;
}

let result = resultSeven(resultSix);
console.log(result);
