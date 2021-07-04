function solution(N, A) {
  let numArr = Array(N).fill(0);
  let max = 0;
  let lastMax = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] <= N) {
      if (numArr[A[i] - 1] < lastMax) {
        numArr[A[i] - 1] = lastMax;
      }
      numArr[A[i] - 1]++;
      if (max < numArr[A[i] - 1]) {
        max = numArr[A[i] - 1];
      }
    } else {
      lastMax = max;
    }
  }

  for (let j = 0; j < N; j++) {
    if (numArr[j] < lastMax) numArr[j] = lastMax;
  }

  return numArr;
}
