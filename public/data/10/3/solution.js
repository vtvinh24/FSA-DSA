let line = 0;
let n = Number(args[line++]);
let map = new Map();
let result = "";
for (let i = 0; i < n; i++) {
  let tmp = args[line++];
  map.set(tmp.split(" ")[0], tmp.split(" ")[1]);
}

function printContact(name) {
  if (map.has(name)) {
    result += `name=${map.get(name)}\n`;
  } else {
    result += "Not found\n";
  }
}

// Loop through end of input to get queries
while (true) {
  let tmp = args[line++];
  if (!tmp || tmp === "") break;
  printContact(tmp);
}

return result;
