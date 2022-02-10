let M = [2, 12, 5, 15, 18, 14, 0, 8];
let N = 10;
/**
 * Function to obtain the two values within an array of numbers that added together give a specific value.
 * @param M {number[]} array that contains the numbers to add to get ___`N`___
 * @param N {number} number that represents the result of the sum to be found in ___`M`___
 * @returns {number[]} array with the numbers that add up to ___`N`___ or an empty array in case of not finding a correct sum.
 */
const F = (M, N) => {
    if (!M.length)
        return [];
    for (let i = 0; i < M.length; i++) {
        if (M[i] + M[i + 1] === N)
            return [M[i], M[i + 1]];
        if (M[i + 2] === undefined)
            return [];
        for (let j = i + 2; j < M.length; j++) {
            if (M[i] + M[j] === N)
                return [M[i], M[j]];
        }
    }
    return [];
};
console.log(F(M, N));
//# sourceMappingURL=res.js.map