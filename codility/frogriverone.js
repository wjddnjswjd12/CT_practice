function solution(X, A) {
  const obj = {};
  let sum = (X * (X + 1)) / 2;
  for (let i = 0; i < A.length; i++) {
    if (X >= A[i] && !obj[A[i]]) {
      sum -= A[i];
      obj[A[i]] = A[i];
    }
    if (sum === 0) return i;
  }
  return -1;
}
