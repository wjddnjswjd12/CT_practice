function solution(n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr[i - 1] = i % 2 === 0 ? "박" : "수";
  }

  return arr.join("");
}
