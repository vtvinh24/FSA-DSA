let inputString = args[0];
let result = '';

for (let i = 0; i < inputString.length; i++) {
    if (result.indexOf(inputString[i]) === -1) {
        result += inputString[i];
    }
}

return result;