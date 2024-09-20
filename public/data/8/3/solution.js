const str = args[0];

function checkAllLettersPresent(str) {
  // Create an array of size 26 (for a-z) and initialize all values to false
  const alphabet = Array(26).fill(false);
  const aCode = 97;

  // Loop through each character in the string
  for (let char of str.toLowerCase()) {
    const charCode = char.charCodeAt(0);

    // Check if the character is a lowercase letter (a-z)
    if (charCode >= aCode && charCode <= aCode + 25) {
      // Find corresponding index for the letter
      const index = charCode - aCode;
      // Mark the letter as found
      alphabet[index] = true;
    }
  }

  // Check if all values in the alphabet array are true
  return alphabet.every((letterFound) => letterFound === true);
}

return checkAllLettersPresent(str) ? "pangram" : "not pangram";
