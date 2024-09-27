function waiter(numberOfPlates, plates, numberOfRounds) {
  const primes = [];
  const results = [];

  // Function to generate prime numbers using Sieve of Eratosthenes
  function sieve(n) {
    const isPrime = new Array(n + 1).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i <= n; i++) {
      if (isPrime[i]) {
        for (let j = i * i; j <= n; j += i) {
          isPrime[j] = false;
        }
      }
    }

    for (let i = 2; i <= n; i++) {
      if (isPrime[i]) {
        primes.push(i);
      }
    }
  }

  // Determine the maximum plate value
  const maxPlateValue = Math.max(...plates);
  // Generate primes up to the max plate value
  sieve(maxPlateValue); 

  // Copy original plates for manipulation
  let currentPlates = plates.slice(); 

  // Process the plates for the given number of rounds
  for (let round = 0; round < numberOfRounds; round++) {
    const currentPrimes = [];
    const nextPlates = [];

    // Filter plates based on current prime number
    const prime = primes[round];
    for (const plate of currentPlates) {
      if (plate % prime === 0) {
        currentPrimes.push(plate);
      } else {
        nextPlates.push(plate);
      }
    }

    results.push(...currentPrimes);
    currentPlates = nextPlates; // Update plates for the next round
  }

  // Add any remaining plates (not filtered out)
  results.push(...currentPlates);

  return results;
}

let n = Number(args[0].split(' ')[0]);
let q = Number(args[0].split(' ')[1]);

let a = args[1].split(' ').map(Number);

return waiter(n, a, q).join('\n');