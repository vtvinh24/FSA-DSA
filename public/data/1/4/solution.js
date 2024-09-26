function factorial(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorial(num - 1);
}

function pascalTriangle(n) {
  let triangle = [];
  for (let row = 0; row < n; row++) {
    let currentRow = [];
    for (let col = 0; col < row + 1; col++) {
      currentRow.push(factorial(row) / (factorial(col) * factorial(row - col)));
    }
    triangle.push(currentRow);
  }
  return triangle.map((row) => row.join(" ")).join("\n");
}

let n = parseInt(args[0], 10);
return pascalTriangle(n);
