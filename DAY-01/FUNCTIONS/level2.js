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
const Array = [1, 2, 3, "hello", true];
printArray(Array);



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


function capitalizeArray(arr) {
    return arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
}

// Example usage:
const originalArray = ['apple', 'banana', 'cherry'];
const capitalizedArray = capitalizeArray(originalArray);
console.log(capitalizedArray); // Output: ['Apple', 'Banana', 'Cherry']


function addItem(arr, newItem) {
    return [...arr, newItem];
}

// Example usage:
const myArray = [1, 2, 3];
const updatedArray = addItem(myArray, 4);
console.log(updatedArray); // Output: [1, 2, 3, 4]

function removeItem(arr, index) {
    if (index >= 0 && index < arr.length) {
        arr.splice(index, 1);
    }
    return arr;
}

// Example usage:
const myArray2 = [1, 2, 3, 4];
const updatedArray2 = removeItem(myArray, 1); // Remove item at index 1
console.log(updatedArray); // Output: [1, 3, 4]



function evensAndOdds(num) {
    if (num < 0) {
        return "Please provide a positive integer.";
    }

    let evenCount = 0;
    let oddCount = 0;

    while (num > 0) {
        const digit = num % 10;
        if (digit % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
        num = Math.floor(num / 10);
    }

    return { even: evenCount, odd: oddCount };
}

// Example usage:
const number = 123456;
const result = evensAndOdds(number);
console.log(result); // Output: { even: 3, odd: 3 }
