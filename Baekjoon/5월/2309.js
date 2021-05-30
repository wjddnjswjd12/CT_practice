const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  answer(input).forEach((v) => console.log(v));
  process.exit();
});

function answer(inputArr) {
  const arr = inputArr.map(Number);
  const sum = arr.reduce((acc, curr) => (acc += curr), 0);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (sum - arr[i] - arr[j] === 100) {
        return arr
          .filter((v) => v !== arr[i] && v !== arr[j])
          .sort((a, b) => a - b);
      }
    }
  }
}
