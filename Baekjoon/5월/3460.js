// const readline = require("readline");

// const r1 = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];
// r1.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   const N = input.shift();
//   for (let i = 0; i < N; i++) console.log(answer(Number(input.shift())));

//   process.exit();
// });

function answer(num) {
  let temp = num.toString(2);
  let tempArr = temp.split("");

  let temp2 = [];
  tempArr.forEach((v, i) => (v === "1" ? temp2.push(temp.length - 1 - i) : ""));

  let answer = [];
  for (let i = temp2.length - 1; i >= 0; i--) {
    answer.push(temp2[i]);
  }

  return answer.join(" ");
}
