let arr = [
  8357,
  2345,
  64,
  -747,
  34570,
  -468,
  843962,
  -93497,
  3863,
  4566
]
let pr = 0;
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i]%2 == 1) {
    accumulator[pr] = arr[i];
    pr++;
  }
}