let arr = parseInput(args);

function parseInput(args) {
  return args.map((line) => line.split(" ").map(Number));
}

function calcArray(arr) {
  let sum = 0;
  let max = -Infinity;
  let min = Infinity;

  if (Array.isArray(arr)) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        for (let j = 0; j < arr[i].length; j++) {
          let tmp = arr[i][j];
          sum += tmp;
          if (tmp < min) min = tmp;
          if (tmp > max) max = tmp;
        }
      }
    }
  }

  return { max, min, sum };
}

let { max, min, sum } = calcArray(arr);
return `Max: ${max}\nMin: ${min}\nSum: ${sum}`;
