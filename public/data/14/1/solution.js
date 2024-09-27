function climbStairs(n) {
  // Base cases: 1 way for 1 step, 2 ways for 2 steps
  if (n <= 2) return n;

  // Ways to reach step 1
  let first = 1;
  // Ways to reach step 2
  let second = 2;

  for (let i = 3; i <= n; i++) {
    // Total ways to reach the current step
    const current = first + second;
    // Move to the next step
    first = second;
    // Update second to the current
    second = current;
  }

  // The number of ways to reach step n
  return second;
}

const n = Number(args[0]);
return climbStairs(n);
