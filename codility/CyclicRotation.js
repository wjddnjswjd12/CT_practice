function solution(A, K) {
  for (let i = 1; i <= K; i++) {
    if (A.length === 0) break;
    A.unshift(A.pop());
  }
  return A;
}
