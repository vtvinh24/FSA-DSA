// Size is provided by the problem
const SIZE = 6;
// Pre-fill the canvas
let arr = new Array(SIZE).fill(0).map(() => new Array(SIZE).fill(0));
let currentLine = 0;

// Get input
for (let i = 0; i < SIZE; i++) {
  for (let j = 0; j < SIZE; j++) {
    arr[i][j] = Number(args[i].split(" ")[j]);
  }
}

function maxHourglass(arr) {
  if (Array.isArray(arr) && Array.isArray(arr[0])) {
    let sizeX = arr.length;
    let sizeY = arr[0].length;
    let max = -Infinity; // Initialize to the lowest possible value
    for (let i = 0; i < sizeX - 2; i++) {
      for (let j = 0; j < sizeY - 2; j++) {
        let hourglassSum = calcHourglass(arr, i, j);
        if (hourglassSum > max) max = hourglassSum;
      }
    }
    return max;
  }
  return 0; // Return 0 in case of invalid input
}

function calcHourglass(arr, x, y) {
  if (!Array.isArray(arr) || x + 2 >= arr.length || y + 2 >= arr[0].length) return 0;

  return arr[x][y] + arr[x][y + 1] + arr[x][y + 2] + arr[x + 1][y + 1] + arr[x + 2][y] + arr[x + 2][y + 1] + arr[x + 2][y + 2];
}

return maxHourglass(arr);
