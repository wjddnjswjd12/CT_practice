const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
r1.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const T = Number(input.shift());
  for (let i = 0; i < T; i++) {
    input.shift();
    const arr = input.shift().split(" ").map(Number);
    solution(arr);
  }
});

function solution(arr) {
  let diff = -1;
  arr.sort((a, b) => b - a);
  for (let i = 0; i < arr.length - 2; i++) {
    diff = Math.max(diff, arr[i] - arr[i + 2]);
  }

  console.log(diff);
}

/* 
처음엔 arr를 오름차순으로 정렬하고 
직접 산 형태로 가운데에 가장 큰 수가 가도록
sorting까지 다 했다..역시 틀렸다
그러다가 생각해보니 굳이 sorting을 해야하나..? 싶어서 방법을 생각해보았다.
다시 내림차순으로 가장 큰 수가 맨 앞에 오도록 sort를 하고
예를들면 [9 7 5 4 2] 의 경우 7,5는 똑 떼어서 9 양옆에 있을거 아닌가
근데 또 9랑 7은 이미 sorting을 통해 가장 작은 차이가 날 것이 인증됨
즉, 9랑 5만 비교하면됨. arr[i]-arr[i+2] 요 아이들만 비교하면 되는것임
7도 4랑만 비교하면 됨. 4랑 2를 똑 떼어서 2는 앞으로 보낼거니 4가 7 옆으로 오겠지? 9랑은 비교할 필요 x
그런식으로 비교해서 count를 갱신해주면 됨...
*/
