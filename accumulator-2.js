let arr = [
  8357,
  2345,
  64,
  -747,
  34570,
  -468,
  843967,
  -93497,
  3867,
  4567
]
let otvet = 0;
let i = 0; 
while (i < arr.length) {
  if (arr[i] > 0) {
    otvet += arr[i]
  }
  i++
}