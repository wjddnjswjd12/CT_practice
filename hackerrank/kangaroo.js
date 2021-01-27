//무식하게 한 방법
/*
function kangaroo(x1, v1, x2, v2) {
  for (let j = 1; j < 10000; j++) {
    if (x1 + v1 * j === x2 + v2 * j) return "YES";
  }
  return "NO";
}
*/
// x1+v1*Jump=x2+v2*Jump
// Jump(v1-v2)=x2-x1
// Jump=(x2-x1)/(v1-v2)
// 제약 조건에서 x1은 무조건 x2보다 작음 그러니 v1이 v2보다 커야지 만날 가능성이라도 생김. 작으면 절대 안만남
// Jump는 무조건 INTEGER이어야 하니까(캥거루는 1,2,3...정수에서 만남) (x2-x1)%(v1-v2) 한 값이 0이어야함.
// (x2-x1)/(v1-v2)이 만약 2.33333 이런게 나오면 만난게 아닌게되니까! (x2-x1)%(v1-v2)나머지가 남으면 안됨!!!!!!!!!!!!!!!!!!!!!!!!!!!

function kangaroo(x1, v1, x2, v2) {
  if (v1 < v2) return "NO";
  else if ((x2 - x1) % (v1 - v2) === 0) {
    return "YES";
  }
  return "NO";
}
