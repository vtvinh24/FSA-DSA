// Bits op
function countBits(n) {
  const ans = new Array(n + 1).fill(0);
  for (let i = 0; i <= n; i++) {
    ans[i] = countOnes(i);
  }
  return ans;
}

// String op
function countBits2(n) {
    const ans = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
        ans[i] = i.toString(2).split('0').join('').length; // Count the '1's
    }
    return ans;
}

function countOnes(num) {
  let count = 0;
  while (num > 0) {
    // Add 1 if the last bit is 1
    count += num & 1;
    // Shift right
    num >>= 1;
  }
  return count;
}

const n = Number(args[0]);
let result = countOnes(n);
return result;