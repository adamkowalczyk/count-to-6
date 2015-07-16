var numbers = process.argv.slice(2);

// ... operator spreads an array in multiple args (Math.min expects a comma seperated list)
var min = Math.min(...numbers);

console.log(`The minimum of [${numbers}] is ${min}`);