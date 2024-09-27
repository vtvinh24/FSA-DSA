let s1 = args[0];
let s2 = args[1];

// Check if s2 loosely contains s1
function isSubsequence(s1, s2) {

  // If s1 is empty, return true
  if (s1.length === 0) {
    return true;
  }

  // If s2 is empty, return false
  if (s2.length === 0) {
    return false;
  }

  // If s2 is shorter than s1, return false
  if (s2.length < s1.length) {
    return false;
  }

  // Loop through s1
  for (let i = 0; i < s1.length; i++) {
    // Find first occurence of s1[i] in s2
    let index = s2.indexOf(s1[i]);

    if (index === -1) {
      return false;
    }
    s2 = s2.slice(index);
  }

  return true;
}

return isSubsequence(s1, s2);
