// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input.push(line);
// }).on("close", function () {
//   process.exit();
// });

const test = "(()[[]])([])";
let stack = [];
let answerStr = "";

function answer(arr) {
  const temp = arr.split("");
  while (temp.length !== 0) {
    let nextStr = temp.shift();
    if (stack.length === 0) stack.push(nextStr);
    else {
      const lastStackStr = stack[stack.length - 1];
      if (lastStackStr === "(") {
        answerStr += 2;
        if (nextStr === ")") {
          answerStr += "+";
          stack.pop();
        } else {
          if (nextStr === "(") {
            answerStr += "*";
            stack.push(nextStr);
          } else if (nextStr === "[") {
            answerStr += "*";
            stack.push(nextStr);
          }
        }
      } else if (lastStackStr === "[") {
        answerStr += 3;
        if (nextStr === "]") {
          answerStr += "+";
          stack.pop();
        } else {
          if (nextStr === "[") {
            answerStr += "*";
            stack.push(nextStr);
          } else if (nextStr === "(") {
            stack.push(nextStr);
            answerStr += "*";
          }
        }
      }
    }
  }
  console.log(stack);
  console.log(answerStr);
}
answer(test);
