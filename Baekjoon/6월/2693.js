const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  input.forEach((v) => console.log(answer(v.split(" ").map(Number))));
  process.exit();
});

const answer = (arr) => {
  //
  return arr.sort((a, b) => b - a)[2];
};
