const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let graph, graph2, visited1, visited2;
let temp1 = [];
let temp2 = [];
rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const firstLine = input.shift().split(" ");
  const numOfPoints = Number(firstLine[0]);
  const numOfLines = Number(firstLine[1]);
  const startingPoint = Number(firstLine[2]);
  graph = [...Array(numOfPoints + 1)].map(() => []);
  graph2 = [...Array(numOfPoints + 1)].map(() => []);
  visited1 = Array(numOfPoints + 1).fill(false);
  visited2 = Array(numOfPoints + 1).fill(false);

  input.forEach((str) => {
    let temp = str.split(" ").map(Number);
    insertEdge(temp[0], temp[1]);
    insertEdge(temp[1], temp[0]);
  });

  dfs(startingPoint);
  bfs(startingPoint);

  console.log(temp1.join(" "));
  console.log(temp2.join(" "));
  process.exit();
});

const insertEdge = (F, B) => {
  let index;
  for (index = 0; index < graph[F].length; index++) {
    if (graph[F][index] < B) continue;
    if (graph[F][index] === B) index = null;
    break;
  }
  if (index !== null) {
    graph[F].splice(index, 0, B);
  }
};

const dfs = (v) => {
  if (visited1[v]) return;
  visited1[v] = true;
  temp1.push(v);
  graph[v].forEach((ver) => {
    if (!visited1[ver]) dfs(ver);
  });
};

const bfs = (v) => {
  const willVisit = [v];
  let vertex;

  while (willVisit.length !== 0) {
    vertex = willVisit.shift();
    if (visited2[vertex]) {
      continue;
    }
    visited2[vertex] = true;
    temp2.push(vertex);

    graph[vertex].forEach((v) => {
      if (!visited2[v]) {
        willVisit.push(v);
      }
    });
  }
};
