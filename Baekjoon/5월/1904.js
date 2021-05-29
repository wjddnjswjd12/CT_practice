function answer(num) {
  let arr = [0, 1, 2];

  for (let i = 3; i <= num; i++) {
    arr[i] = (arr[i - 2] + arr[i - 1]) % 15746;
  }
  return arr[num];
}
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(answer(input[0]));

  process.exit();
});
