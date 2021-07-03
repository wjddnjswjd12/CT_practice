function solution(n) {
  return (n + "")
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc + curr, 0);
}
