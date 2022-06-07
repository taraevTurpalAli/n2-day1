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
for (let i = 0; i < arr.length; i++) {
  if (arr[i]%2 == 0) {
    console.log(arr[i])
  }
}
let i = 0; 
while (i < arr.length) {
  if (arr[i]%2 == 1) {
    console.log(arr[i])
  }
  i++
}