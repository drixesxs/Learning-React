function userIdGeneratedByUser() {
    const numChars = parseInt(prompt("Enter the number of characters for each ID:"));
    const numIds = parseInt(prompt("Enter the number of IDs to generate:"));

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const ids = [];

    for (let i = 0; i < numIds; i++) {
        let id = '';
        for (let j = 0; j < numChars; j++) {
            id += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        ids.push(id);
    }

    return ids;
}

// Example usage:
const ids = userIdGeneratedByUser();
console.log(ids); // Output: ['a5Bf9Gh', 'c3Dk7Rt', 'e9Fj2Lm']
