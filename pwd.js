// function pwdCommand() {
// process.stdout.write("prompt > ");
// process.stdin.on("data", (data) => {
// 	const cmd = data.toString().trim();
// 	// process.stdout.write("you typed: " + cmd);
// 	process.stdout.write("\nprompt > ");

// if (cmd === 'pwd') {
// 	process.stdout.write(process.cwd());
// }

// });
// }

module.exports = function() {
  process.stdout.write("prompt > ");
process.stdin.on("data", (data) => {
	const cmd = data.toString().trim();
	// process.stdout.write("you typed: " + cmd);
	process.stdout.write("\nprompt > ");

if (cmd === 'pwd') {
	process.stdout.write(process.cwd());
}
});
}