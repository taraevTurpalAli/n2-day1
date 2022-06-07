let arr = [
  "Адам",
  "Якъуб",
  "Султан",
  "Рабек",
  "Ислам",
  "Халид",
  "Сахрудин",
  "Ахьмад",
  "Али"
]

let accumulator = [];
let pr = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == 'А') {
    accumulator[pr] = arr[i];
    pr++;
  }
}

