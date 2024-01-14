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


function printArray(arr) {
    for (const value of arr) {
        console.log(value);
    }
}

// Example usage:
const myArray = [1, 2, 3, "hello", true];
printArray(myArray);



function showDateTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');

    console.log(`${month}/${day}/${year} ${hours}:${minutes}`);
}

// Example usage:
showDateTime(); // Output: 08/01/2020 04:08


function swapValues(x, y) {
    const temp = x;
    x = y;
    y = temp;
    console.log(`x => ${x}, y => ${y}`);
}

// Example usage:
swapValues(3, 4); // Output: x => 4, y => 3
swapValues(4, 5); // Output: x => 5, y => 4


function reverseArray(NewArr){
    const RevArr = []
    const end = NewArr.length - 1
    for (i = end; i >= 0; i-- ){
        RevArr.push(NewArr[i])
    }
    console.log(RevArr)
}

reverseArray([1,2,3,4,5])
reverseArray(['A','B','C','D','E'])