function solution(maps) {
  let yLength = maps.length - 1;
  let xLength = maps[0].length - 1;

  let queue = [[0, 0]];

  let visited = Array.from(new Array(maps.length), () =>
    new Array(maps[0].length).fill(false)
  );

  let result = 0;

  while (queue.length) {
    result++;
    let size = queue.length;
    for (let i = 0; i < size; i++) {
      let point = queue.shift();
      let y = point[0];
      let x = point[1];

      if (visited[y][x]) continue;

      maps[y][x] = 0;

      visited[y][x] = true;

      if (y === yLength && x === xLength) return result;

      if (y < yLength && maps[y + 1][x] === 1) queue.push([y + 1, x]);
      if (x < xLength && maps[y][x + 1] === 1) queue.push([y, x + 1]);
      if (y > 0 && maps[y - 1][x] === 1) queue.push([y - 1, x]);
      if (x > 0 && maps[y][x - 1] === 1) queue.push([y, x - 1]);
    }
  }

  return -1;
}
