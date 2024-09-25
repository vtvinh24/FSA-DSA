let n = Number(args[0]);
// to be clear: in JS, an array can be used as a queue
// (queue.pop() = array.get(first) + array.shift(), and push() is equal to array.push())
let queue = new Array();
let result = "";
for (let i = 0; i < n; i++) {
  process(args[i + 1]);
}

// this code is able to run, however it is not instructed
function process(line) {
  const op = Number(line.split(" ")[0]);
  switch (op) {
    case 1:
      // enqueue
      var value = Number(line.split(" ")[1]);
      queue.push(value);
      break;
    case 3:
      // read queue
      result += queue[0] + "\n";
      break;
    case 2:
      // dequeue
      queue.shift();
      break;
    default:
      break;
  }
}

return result.trim();
