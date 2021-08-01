const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let [num, money] = input[0].split(" ").map((el) => parseInt(el));
  let list = input.slice(1).map((el) => parseInt(el));
  let count = 0;
  for (let i = num - 1; i >= 0; i--) {
    const max = list[i];
    if (money / max >= 1) {
      let divided = parseInt(money / max);
      let leftover = money % max;
      money = leftover;
      count += divided;
    } else list.pop();

    if (money === 0) break;
  }
  console.log(count);
});
