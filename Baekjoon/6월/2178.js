const readline = require("readline");

const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let Row = 0;
let Col = 0;
let shortestDist = BigInt(Number.MAX_SAFE_INTEGER);
let curDist = 1;
let map = [];
let visited = [];

r1.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [rows, cols] = input.shift().split(" ");
  Row = rows;
  Col = cols;

  input.forEach((arr) => map.push(arr.split("").map(Number)));
  for (let i = 0; i < Row; i++) {
    visited[i] = new Array(Col).fill(0);
  }
  bfs(0, 0);
  console.log(visited[Row - 1][Col - 1]);
  process.exit();
});

const bfs = (currentX, currentY) => {
  const xMove = [0, 0, -1, 1];
  const yMove = [1, -1, 0, 0];
  const queue = [{ x: currentX, y: currentY }];
  visited[currentY][currentX] = 1;

  while (queue.length) {
    const { x, y } = queue.shift();
    for (let i = 0; i < 4; i++) {
      const nextY = y + yMove[i];
      const nextX = x + xMove[i];
      if (nextY >= 0 && nextY < Row && nextX >= 0 && nextX < Col) {
        if (!visited[nextY][nextX] && map[nextY][nextX]) {
          visited[nextY][nextX] = visited[y][x] + 1;
          queue.push({ x: nextX, y: nextY });
        }
      }
    }
  }
};
