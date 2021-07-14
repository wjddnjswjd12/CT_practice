function solution(N) {
  let count = 0;
  if (N === 1) return 1;
  if (N === 2) return 2;

  for (let i = 2; i < Math.sqrt(N); i++) {
    if (N % i === 0) {
      count++;
    }
  }
  if (Number.isInteger(Math.sqrt(N))) count = count * 2 + 1;
  else count = count * 2;
  return count + 2;
}
