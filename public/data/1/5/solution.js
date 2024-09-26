function isSequenceFull(sequence) {
    let R = 0, G = 0, Y = 0, B = 0;

    // Count occurrences of each color
    for (let char of sequence) {
        if (char === 'R') R++;
        if (char === 'G') G++;
        if (char === 'Y') Y++;
        if (char === 'B') B++;
    }

    // Check if R == G and Y == B
    if (R !== G || Y !== B) return 'NO';

    let prefixR = 0, prefixG = 0, prefixY = 0, prefixB = 0;

    // Validate prefix conditions
    for (let char of sequence) {
        if (char === 'R') prefixR++;
        if (char === 'G') prefixG++;
        if (char === 'Y') prefixY++;
        if (char === 'B') prefixB++;

        if (Math.abs(prefixR - prefixG) > 1 || Math.abs(prefixY - prefixB) > 1) {
            return 'NO';
        }
    }

    return 'YES';
}

let numberOfTestCases = parseInt(args[0], 10);
let results = [];

for (let i = 1; i <= numberOfTestCases; i++) {
    results.push(isSequenceFull(args[i]));
}

return results.join('\n').trim();