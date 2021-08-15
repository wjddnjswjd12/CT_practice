const readline = require("readline");
r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
r1.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  const arr = input
    .map((v) => v.split(" ").map(Number))
    .sort((a, b) => a[0] - b[0]);
  solution(arr);
});

// function solution(arr) {
//   const [highestIdx, highest] = [...arr].sort((a, b) => b[1] - a[1])[0];
//   let squares={}
// for(let i=0; i<arr[arr.length-1][0];
// }
//   let total = 0;
//   let tempHigh = 0;
//   let idx = 0;
//   for (let i = arr[0][0]; i < highest[0]; i++) {
//     tempHigh = tempHigh > arr[idx][1] ? tempHigh : arr[idx][1];

//     total += tempHigh;
//     console.log(tempHigh, total);
//   }
//   console.log(total, tempHigh);
// }

//다음에 풀자 짜증남 ㅡㅡ
