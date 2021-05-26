const input = [];
let graph,
  visited,
  result = 0;

require("readline")
  .createInterface(process.stdin, process.stdout)
  .on("line", function (line) {
    input.push(line.trim());
  })
  .on("close", function () {
    const N = Number(input.shift());
    graph = [...Array(N + 1)].map(() => []);
    visited = Array(N + 1).fill(false);
    input.shift();
    input.forEach((str) => {
      let temp = str.split(" ").map(Number);
      graph[temp[0]].push(temp[1]);
      graph[temp[1]].push(temp[0]);
    });

    dfs(1);
    console.log(result - 1);
  });

const dfs = (v) => {
  if (visited[v]) {
    return;
  }

  visited[v] = true;
  result++;
  graph[v].forEach((vertex) => {
    if (!visited[vertex]) {
      dfs(vertex);
    }
  });
};
