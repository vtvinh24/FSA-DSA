const str = args[0];

function checkAllLettersSameFreq(str) {
  // Use a Map to track the frequency of each letter
  const alphabet = new Map();

  // Loop through each character in the string
  for (let char of str) {
    alphabet.set(char, (alphabet.get(char) || 0) + 1);
  }

  // Convert the frequencies to an array and filter out zero frequencies
  const frequencies = Array.from(alphabet.values());
  frequencies.forEach((t) => {
    console.log(t);
  });
  // Check if all frequencies are the same
  const allSameFreq = frequencies.every((freq) => freq === frequencies[0]);

  // Return true if all frequencies are the same or the special condition is met
  return allSameFreq || isSpecial(frequencies);
}

function isSpecial(freqs) {
  if (!Array.isArray(freqs)) return false;
  const minFreq = Math.min(...freqs);
  const maxFreq = Math.max(...freqs);
  // Special case: allow for one letter to have a frequency of maxFreq, and maxFreq is exactly 1 more than minFreq
  const maxCount = freqs.filter((freq) => freq === maxFreq).length;
  const minCount = freqs.filter((freq) => freq === minFreq).length;

  if (maxCount + minCount != freqs.length)
    // if count of max and min does not add up to freqs.length, then there is a middle-value freq in the array -> false
    return false;
  if (minCount == 1 && minFreq == 1) return true;
  if (maxCount == 1 && maxFreq - minFreq == 1) return true;
  if (maxFreq - minFreq > 1)
    // if diff > 2 -> false
    return false;
  return false;
}

// Return "YES" if all letters appear the same number of times, else "NO"
return checkAllLettersSameFreq(str) ? "YES" : "NO";
