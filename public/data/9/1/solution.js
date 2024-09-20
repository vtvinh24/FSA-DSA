let currentLine = 0;
const inputSize = args[currentLine++];
let input = new Array(inputSize);
for (let i = 0; i < inputSize; i++) {
  input[i] = args[currentLine++].split(" ").map(Number);
  input[i].shift();
}
const querySize = args[currentLine++];
let query = new Array(querySize);
for (let i = 0; i < querySize; i++) {
  query[i] = args[currentLine++].split(" ").map(Number);
}

let result = "";
query.forEach((q) => {
  //   console.log("At row", q[0], "column", q[1], "value is", input[q[0] - 1][q[1] - 1]);
  if (q[0] > input.length || q[1] > input[q[0] - 1].length) {
    result += "ERROR!\n";
  } else {
    result += input[q[0] - 1][q[1] - 1] + "\n";
  }
});

return result.trim();
