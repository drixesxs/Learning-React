function solveQuadratic(a, b, c) {
    if (a === 0) {
        // If 'a' is zero, it's not a quadratic equation
        return { 0: "Not a quadratic equation" };
    }

    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        // Two distinct real roots
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return { root1, root2 };
    } else if (discriminant === 0) {
        // One real root (repeated)
        const root = -b / (2 * a);
        return { root };
    } else {
        // Complex roots
        const realPart = -b / (2 * a);
        const imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return { root1: `${realPart} + ${imaginaryPart}i`, root2: `${realPart} - ${imaginaryPart}i` };
    }
}

console.log(solveQuadratic()); // { 0: "Not a quadratic equation" }
console.log(solveQuadratic(1, 4, 4)); // { root1: -2, root2: -2 }
