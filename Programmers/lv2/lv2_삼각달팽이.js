function solution(n) {
  var answer = [];
  const arr = Array.from({ length: n }, (v, i) =>
    Array.from({ length: i + 1 }, (_, index) => 0)
  );
  let number = 1;
  let [x, y] = [-1, 0];
  while (n > 0) {
    for (let i = 0; i < n; i++) arr[++x][y] = number++;
    for (let i = 0; i < n - 1; i++) arr[x][++y] = number++;
    for (let i = 0; i < n - 2; i++) arr[--x][--y] = number++;
    n -= 3;
  }
  answer = arr.join(",");
  return answer.split(",").map(Number);
}
