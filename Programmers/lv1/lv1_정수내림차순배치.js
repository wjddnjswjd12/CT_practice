function solution(n) {
  const temp = (n + "").split("").map(Number);

  return Number(temp.sort((a, b) => b - a).join(""));
}
