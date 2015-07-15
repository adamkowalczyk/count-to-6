var inputs = process.argv.slice(2);
var result = inputs.map( word => word.charAt(0))
.reduce( (prev,current) => prev += current, '' );

// inital value not needed in reduce, but testing how multiple args work with arrow functions/
// answer: as normal!

console.log(`[${inputs}] becomes "${result}"`);