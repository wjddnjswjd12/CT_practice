const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(answer(input));
  process.exit();
});

function answer(totalArr) {
  //
  let tempArr = [];
  let ppCount = 0;
  totalArr.forEach((input) => {
    const [v1, v2] = input.split(" ").map(Number);

    ppCount = ppCount - v1 + v2;

    tempArr.push(ppCount);
  });
  tempArr.sort((a, b) => b - a);

  return tempArr[0];
}
