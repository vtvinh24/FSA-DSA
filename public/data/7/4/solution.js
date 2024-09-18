let n = Number(args[0]);
let arr = Array.from({ length: n }, () => new Array(n).fill(0));

for (let i = 0; i < n; i++) {
  let rowValues = args[i + 1].split(" ").map(Number);
  for (let j = 0; j < n; j++) {
    arr[i][j] = rowValues[j];
  }
}

return calcDiagonal(arr);

function calcDiagonal(arr) {
  let left = 0;
  let right = 0;

  if (Array.isArray(arr) && Array.isArray(arr[0])) {
    for (let i = 0; i < arr.length; i++) {
      left += arr[i][i];
      right += arr[arr.length - 1 - i][i];
    }
  }

  return Math.abs(left - right);
}
