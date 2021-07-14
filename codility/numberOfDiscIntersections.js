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

/*
반성할점: 
귀찮다고 이중배열 저런식으로 [0][1] 이렇게 접근하지말고...
편하게 할 부분들 다 변수로 좀 선언해서 편하게 코딩하자...
가독성도 훨씬 낫네 ㅠ
*/
