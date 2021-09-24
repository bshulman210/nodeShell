const fs = require("fs");
// import { readFile } from 'fs';

module.exports = function (fileName) {
	process.stdout.write("prompt > ");
	process.stdin.on("data", (data) => {
		const cmd = data.toString().trim();

		if (cmd === "cat ls.js" || cmd === 'cat pwd.js' || cmd === 'cat bash.js') {
			fs.readFile("./", (err, data) => {
				if (err) {
					throw err;
				} else {
					process.stdout.write(data + 'hellooo');
					process.stdout.write("\nprompt > ");
				}
			});
		}
	});
};