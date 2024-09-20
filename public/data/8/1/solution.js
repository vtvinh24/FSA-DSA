let str = args[0];

function delAdjDupe(str) {
  let arr = str.split("");

  // Using array manipulation to remove adjacent duplicates
  // let i = 0;
  // while (i < arr.length) {
  //   if (arr[i] === arr[i + 1]) {
  //     arr.splice(i, 2);
  //     if (i > 0) i--;
  //   } else {
  //     i++;
  //   }
  // }
  // return arr.join("");

  // Using array as a queue to remove all duplicates
  let queue = [];
  for (let i = 0; i < arr.length; i++) {
    // if (queue[-1] === arr[i]) {
    if (queue[queue.length - 1] === arr[i]) {
      queue.pop();
    } else {
      queue.push(arr[i]);
    }
  }

  return queue.join("");
}

let result = delAdjDupe(str);
return result ? result : "Empty String";
