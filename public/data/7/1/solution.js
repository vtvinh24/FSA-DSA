let n = args[0].split(" ")[0];
let rotates = args[0].split(" ")[1];
let arr = new Array();
for (let i = 0; i < n; i++) {
  arr.push(args[1].split(" ")[i]);
}

for (let i = 0; i < rotates; i++) {
  rotate(arr);
}

function rotate(arr) {
  if (Array.isArray(arr)) {
    let first = arr.shift();
    arr.push(first);
  }
}

function arrString(arr) {
  if (Array.isArray(arr)) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
      str += arr[i] + " ";
    }
    return str.trim();
  }
}

return arrString(arr);
