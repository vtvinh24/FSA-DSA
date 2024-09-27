let n = Number(args[0]);
let result = "";
// Read next n numbers
for(let i = 1; i <= n; i++) {
    let number = Number(args[i]);
    result += specialMultiple(number) + "\n";
}


// Solution from classmate
function specialMultiple(n) {
    let queue = [];
    queue.push(9);
    while(true) {
        let current = queue.shift();
        if(current % n == 0) {
            return current;
        }
        queue.push(current * 10);
        queue.push(current * 10 + 9);
    }
}

return result.trim();