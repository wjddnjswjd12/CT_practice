const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let color = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

let input = [];
//yello violet red
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let value = String(color.indexOf(input[0])) + String(color.indexOf(input[1]));

  console.log(parseInt(value) * Math.pow(10, color.indexOf(input[2])));

  process.exit();
});
