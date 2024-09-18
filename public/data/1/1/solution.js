let inputCount = args[0];
let arr = [];
let sum = 0;

for(let i = 1; i <= inputCount; i++) {
    arr.push(args[i]);
    sum += Number(args[i]);
}

return sum;