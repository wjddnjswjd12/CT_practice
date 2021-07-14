// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function Wrong81solution(A) {
  const circles = A.map((v, i) => [i - v, i + v]);
  let count = 0;
  for (let i = 0; i < circles.length - 1; i++) {
    if (count > 10000000) return -1;
    for (let j = i + 1; j < circles.length; j++) {
      if (circles[i][0] >= circles[j][0] && circles[i][1] <= circles[j][1]) {
        count++;
      } else if (
        circles[i][0] <= circles[j][0] &&
        circles[i][1] >= circles[j][0]
      ) {
        count++;
      } else if (
        circles[i][0] <= circles[j][1] &&
        circles[i][1] >= circles[j][1]
      ) {
        count++;
      }
    }
  }
  return count;
}

function solution(A) {
  const circles = A.map((v, i) => ({ left: i - v, right: i + v }));
  circles.sort((a, b) => a.left - b.left);
  let count = 0;
  for (let i = 0; i < circles.length - 1; i++) {
    if (count > 10000000) return -1;
    for (let j = i + 1; j < circles.length; j++) {
      if (circles[j].left > circles[i].right) break;
      else if (circles[j].left <= circles[i].right) {
        count++;
      }
    }
  }
  return count;
}
