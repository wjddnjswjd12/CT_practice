const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let counter = 0;
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  input.shift();
  answer(input[0].split(" ").map(Number));
  console.log(counter);
  process.exit();
});

// function answer(arr) {
//   const s = new Set();
//   for (let i = 3; i <= arr[arr.length - 1]; i += 2) {
//     s.add(i);
//   }
//   s.add(2);

//   for (let i = 3; i <= arr[arr.length - 1] * 2; i++) {
//     if (s.has(i)) {
//       for (let j = i * 2; j <= arr[arr.length - 1]; j += i) {
//         s.delete(j);
//       }
//     }
//   }
//   return arr.filter((v) => s.has(v));
// }

function answer(arr) {
  for (let i = 0; i < arr.length; i++) {
    getPrime(arr[i]);
  }
}

function getPrime(n) {
  if (n < 2) return;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return;
    }
  }

  counter++;
}
