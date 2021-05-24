const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function answer(numbers) {
  const newArr = numbers
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return `${newArr[0]} ${newArr[newArr.length - 1]}`;
}
let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(answer(input[1]));

  process.exit();
});
