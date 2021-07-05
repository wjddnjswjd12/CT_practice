function solution(A) {
  let index = 1;
  let answer = 0;
  if (A.every((v) => v < 0)) return 1;

  const set = new Set(A);

  while (true) {
    if (set.has(index)) index++;
    else {
      answer = index;
      break;
    }
  }

  return answer;
}
