let n = Number(args[0]);
let result = "";

for(let i = 1; i <= n; i++) {
    let number = Number(args[i]);
    result += summingSeries(number) + "\n";

}

function summingSeries(n) {
    return n * n;
}

return result.trim();