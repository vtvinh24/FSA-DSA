let arr = [];
let n = args[0];

for (let i = 0; i < n; i++) {
  arr.push(args[1].split(" ")[i]);
}

let max = Math.max(...arr);
let occurences = 0;
arr.forEach((t) => {
  if (t == max) occurences++;
});

return occurences;