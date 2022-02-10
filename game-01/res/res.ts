let M: number[] = [2, 12, 5, 15, 18, 14, 0, 8];
let N: number = 10;

const F = (M: number[], N: number): number[] => {
    if (!M.length) return [];
    for (let i: number = 0; i < M.length; i++) {
        if (M[i] + M[i + 1] === N) return [M[i], M[i + 1]];
        if (M[i + 2] === undefined) return [];
        for (let j: number = i + 2; j < M.length; j++) {
            if (M[i] + M[j] === N) return [M[i], M[j]];
        }
    }
    return [];
}

console.log(F(M, N));