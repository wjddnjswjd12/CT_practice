const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input = [];
rl.on("line", function (line) {
  input = line.split(" ").map((v) => Number(v));
}).on("close", function () {
  let N = input[0];
  let K = input[1];
  let answer = N;
  while (true) {
    if (getBottles(answer) <= K) break;
    else answer++;
  }
  console.log(answer - N); //추가되는 병의 수
  process.exit();
});

function getBottles(N) {
  let count = 0;
  while (N > 0) {
    if (N % 2 === 1) count++;
    N = Math.floor(N / 2);
  }

  return count;
}

// console.log(getBottles(3, 1));
