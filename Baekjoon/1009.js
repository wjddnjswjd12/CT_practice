const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  input.shift();
  input.forEach((v) => solution(v));
  process.exit();
});

function solution(line) {
  let [a, b] = line.split(" ").map((v) => parseInt(v));
  a = a % 10;
  b = b % 4 ? b % 4 : 4;
  let temp = 1;
  for (let i = 0; i < b; i++) {
    temp *= a;
    temp = temp % 10;
  }
  temp = temp ? temp : 10;
  console.log(temp);
}
