function superDigit(x) {
    let sum = 0;
    while (x > 0) {
        sum += x % 10;
        x = Math.floor(x / 10);
    }
    if (sum > 9) {
        return superDigit(sum);
    }
    return sum;
}

let inputString = args[0];
let inputNumber = parseInt(inputString, 10);
let result = superDigit(inputNumber);

return result.toString();