const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
const queue = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const num = input.shift();

  for (let i = 0; i < num; i++) {
    const arr = input[i].split(" ").map((v) => parseInt(v));
    for (let j = 0; j < num; j++) {
      queue.push(arr[j]);
    }
    if (i == 0) continue;
    queue.sort((a, b) => b - a);
    queue.splice(num);
  }
  console.log(queue[num - 1]);
});
