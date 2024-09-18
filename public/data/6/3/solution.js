// Get input
let currentLine = 0;
let list = new Array(Number(args[currentLine++]));
for (let i = 0; i < list.length; i++) {
  list[i] = args[currentLine++];
}
let queries = new Array(Number(args[currentLine++]));
for (let i = 0; i < queries.length; i++) {
  queries[i] = args[currentLine++];
}

// Initialize occurrences array with zeros
let occurrences = new Array(queries.length).fill(0);

// Count occurrences of each query
for (let i = 0; i < queries.length; i++) {
  list.forEach((item) => {
    if (item === queries[i]) {
      occurrences[i] += 1;
    }
  });
}

// Output result
let result = "";
for (let i = 0; i < occurrences.length; i++) {
  result += occurrences[i] + " ";
}

return result.trim();
