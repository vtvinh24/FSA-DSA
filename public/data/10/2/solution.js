let line = 0;
let n = Number(args[line++]);
let result = "";
for (let i = 0; i < n; i++) {
  let tmp = args[line++];
  let tmpSet = new Set(tmp);
  result += tmpSet.size + "\n";
}

return result.trim();
