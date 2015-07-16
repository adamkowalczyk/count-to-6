// ...args is a REAL ARRAY! no more arguments BS
module.exports = function average(...args) {
	var total = args.reduce( (prev, cur) => prev += cur);
	return total/args.length;
};