function solution(A) {
  let ans = 0;
  const maxNum = A.length + 1;
  const arr = [...A].sort((a, b) => a - b);

  if (arr[0] !== 1) {
    return 1;
  } else if (arr[arr.length - 1] !== maxNum) {
    return maxNum;
  }

  for (let i = 0; i < A.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      ans = arr[i];
      break;
    } else {
      continue;
    }
  }

  return ans + 1;
}
