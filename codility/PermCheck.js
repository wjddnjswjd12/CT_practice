function solution(A) {
  let answer = 1;
  const set = new Set(A);
  for (let i = 1; i <= A.length; i++) {
    if (set.has(i)) continue;
    else {
      answer = 0;
      break;
    }
  }
  return answer;
}
