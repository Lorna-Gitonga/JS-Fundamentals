// Function that adds two integers
function add(a, b) {
    return a + b;
}

// Convert the first two arguments to integers
const a = parseInt(process.argv[2]);
const b = parseInt(process.argv[3]);

// Print the sum
console.log(add(a, b));
