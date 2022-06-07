let arr = [
  'edgfuh',
  'wgert',
  'wth',
  'ergweg',
  'qergthrw',
  'qreghwd',
  'F',
  'er',
  'eqrgh',
  'erhwrhgsegwesget'
]
let accumulator = [];
let pr = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > 3) {
    accumulator[pr] = arr[i];
    pr++;
  }
}