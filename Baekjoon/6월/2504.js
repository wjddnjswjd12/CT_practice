const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let stack = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  console.log(answer(input[0]));
  process.exit();
});

function answer(arr) {
  const temp = arr.split("");
  while (temp.length !== 0) {
    let nextStr = temp.shift();
    if (nextStr === "{" || nextStr === "}") return 0;
    if (stack.length === 0) stack.push(nextStr);
    else {
      const secLast = stack[stack.length - 2];
      const last = stack[stack.length - 1];
      if (typeof last === "number" && typeof secLast === "number") {
        const last = stack.pop();
        const secLast = stack.pop();
        stack.push(last + secLast);
      }
      const lastStackStr = stack[stack.length - 1];
      if (lastStackStr === "(") {
        if (nextStr === ")") {
          stack.pop();
          stack.push(2);
        } else {
          if (nextStr === "(") {
            stack.push(nextStr);
          } else if (nextStr === "[") {
            stack.push(nextStr);
          }
        }
      } else if (lastStackStr === "[") {
        if (nextStr === "]") {
          stack.pop();
          stack.push(3);
        } else {
          if (nextStr === "[") {
            stack.push(nextStr);
          } else if (nextStr === "(") {
            stack.push(nextStr);
          }
        }
      } else {
        //lastStackStr 이 숫자일때
        if (
          (stack[stack.length - 2] === "(" && nextStr === ")") ||
          (stack[stack.length - 2] === "[" && nextStr === "]")
        ) {
          //
          stack.pop();
          stack.pop();
          const num = nextStr === ")" ? 2 : 3;
          stack.push(num * lastStackStr);
        } else {
          stack.push(nextStr);
        }
      }
    }
  }

  const answer = stack.reduce((acc, curr) => {
    acc += curr;
    return acc;
  }, 0);

  return typeof answer === "number" && stack.length >= 1 ? answer : 0;
}
