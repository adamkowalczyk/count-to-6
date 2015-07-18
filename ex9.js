 console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`);

function html(array, ...args) {

	var result = array[0];
	args.forEach( (elem, index) => result += escape(elem) + array[index + 1]);
	return result;
}

// chain #replace calls
function escape(s) {
    return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&apos;")
            .replace(/"/g, "&quot;");
}