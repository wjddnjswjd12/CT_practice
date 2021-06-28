function solution(A) {
  let leftSum = 0;
  let rightSum = A.slice(0, A.length).reduce((acc, curr) => (acc += curr));

  let diff = Number.MAX_SAFE_INTEGER;

  for (let j = 0; j < A.length - 1; j++) {
    leftSum += A[j];
    rightSum -= A[j];
    diff =
      diff > Math.abs(leftSum - rightSum) ? Math.abs(leftSum - rightSum) : diff;
  }
  return diff;
}
