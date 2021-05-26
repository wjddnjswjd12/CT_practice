const input = [];
let temp = [];

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const [N, K] = input[0].split(" ");
    answer(Number(N), Number(K));
  });

const answer = (N, K) => {
  for (let i = 1; i <= N; i++) {
    if (!(N % i)) temp.push(i);
  }

  temp.length < K
    ? console.log(0)
    : console.log(temp.sort((a, b) => a - b)[K - 1]);
};
