function wrongSolution(A) {
  let passing = 0;

  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[i] === 0 && A[j] === 1) passing++;
      if (passing > 1000000000) return -1;
    }
  }
  return passing;
}

function solution(A) {
  let zeroCnt = 0;
  let passing = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) {
      zeroCnt++;
    } else {
      passing += 1 * zeroCnt;
      if (passing > 1000000000) return -1;
    }
  }
  return passing;
}
