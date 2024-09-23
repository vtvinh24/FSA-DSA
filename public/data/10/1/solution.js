let line = 0;
let n = Number(args[line++]);
let result = "";

for (let i = 0; i < n; i++) {
  let s1 = args[line++];
  let s2 = args[line++];
  let match = false;

  for (let c of s1) {
    if (s2.includes(c)) {
      match = true;
      break;
    }
  }

  result += match ? "YES\n" : "NO\n";
}

return result.trim();
