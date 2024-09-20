let size = Number(args[0]);
let str = args[1];
let rotates = Number(args[2]);
const aCode = 97; // ASCII code for 'a'
const zCode = 122; // ASCII code for 'z'
const codeA = 65; // ASCII code for 'A'
const codeZ = 90; // ASCII code for 'Z'

function rotate(str, times) {
  return str
    .split("")
    .map((char) => rotateChar(char, times))
    .join("");
}

function rotateChar(char, times) {
  const code = char.charCodeAt(0);

  // Check if it's a lowercase letter
  if (code >= aCode && code <= zCode) {
    const newCode = ((code - aCode + times) % 26) + aCode;
    return String.fromCharCode(newCode);
  }

  // Check if it's an uppercase letter
  if (code >= codeA && code <= codeZ) {
    const newCode = ((code - codeA + times) % 26) + codeA;
    return String.fromCharCode(newCode);
  }

  // If it's not a letter, return the character as is
  return char;
}

return rotate(str, rotates);
