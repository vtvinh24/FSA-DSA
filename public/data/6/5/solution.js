let currentLine = 0;
let result = "";
const opCount = parseInt(args[currentLine++], 10);
let str = "";
const logs = new Array();
logs.push(str);

for (let i = 0; i < opCount; i++) {
  const tmp = args[currentLine++];

  const [op, data] = tmp.split(" ");
  const opCode = parseInt(op, 10);
  const dataNum = parseInt(data, 10);

  switch (opCode) {
    case 1: {
      // Append operation
      str += data;
      logs.push(str);
      break;
    }
    case 2: {
      // Delete last N chars
      str = str.slice(0, str.length - dataNum);
      logs.push(str);
      break;
    }

    case 3: {
      // Print Nth character operation
      result += str[dataNum - 1] + "\n";
      break;
    }
    case 4: {
      // Undo operation (pop twice)
      logs.pop(); // Remove the current state
      str = logs[logs.length - 1]; // Set the previous state
      break;
    }
    default:
      console.error("Unknown operation:", opCode);
      break;
  }
}

return result.trim() || "No output";
