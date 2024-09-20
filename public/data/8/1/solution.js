let str = args[0];

function delAdjDupe(str) {
  let arr = str.split("");
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      if (i > 0) i--;
    } else {
      i++;
    }
  }

  return arr.join("");
}

let result = delAdjDupe(str);
return result ? result : "Empty String";
