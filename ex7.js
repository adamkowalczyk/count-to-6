module.exports = ( lowerBound = 0, upperBound = 1) => (lowerBound + upperBound)/2;

// NB passing 'undefined' to a function with default values will invoke the default.
// other falsy values will *not*