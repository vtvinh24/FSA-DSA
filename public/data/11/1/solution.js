let line = 0;
let n = Number(args[line++]);
let result = "";

// Main loop
for (let i = 0; i < n; i++) {
  let str = args[line++];
  result += countAnagramPairs(str) + "\n";
}

function countAnagramPairs(str) {
  const frequencyMap = {};
  let count = 0;

  // Outer loop: from single-letter to n-letter string
  for (let len = 1; len <= str.length; len++) {
    // Inner loop: get all substring of same length, store sorted version to freq map
    for (let start = 0; start <= str.length - len; start++) {
      let subStr = str.substring(start, start + len);
      let sortedSubStr = [...subStr].sort().join('');

      frequencyMap[sortedSubStr] = (frequencyMap[sortedSubStr] || 0) + 1;
    }
  }

  // Count pairs
  for (let freq of Object.values(frequencyMap)) {
    if (freq > 1) {
      count += (freq * (freq - 1)) / 2;
    }
  }

  return count;
}

return result.trim();
