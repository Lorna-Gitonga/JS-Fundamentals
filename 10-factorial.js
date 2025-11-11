// Recursive function to compute factorial
function factorial(n) {
    if (n <= 1 || isNaN(n)) return 1;
    return n * factorial(n - 1);
}

// Get the first argument and convert to integer
const num = parseInt(process.argv[2]);

// Print the factorial
console.log(factorial(num));
