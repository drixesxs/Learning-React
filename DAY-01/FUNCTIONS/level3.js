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



function generateColors(type, num) {
    const colors = [];
    const hexChars = '0123456789ABCDEF';

    for (let i = 0; i < num; i++) {
        if (type === 'hexa') {
            let hex = '#';
            for (let j = 0; j < 6; j++) {
                hex += hexChars[Math.floor(Math.random() * 16)];
            }
            colors.push(hex);
        } else if (type === 'rgb') {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            colors.push(`rgb(${r}, ${g}, ${b})`);
        } else {
            return 'Invalid color type';
        }
    }

    return num === 1 ? colors[0] : colors;
}

// Example usage:
console.log(generateColors('hexa', 3)); // Output: ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1)); // Output: '#b334ef'
console.log(generateColors('rgb', 2)); // Output: ['rgb(123, 45, 67)', 'rgb(89, 12, 34)']