function solution(A) {
  const sorted = A.sort((a, b) => b - a);

  const s = sorted.length;

  return Math.max(
    sorted[0] * sorted[1] * sorted[2],
    sorted[0] * sorted[s - 1] * sorted[s - 2]
  );
}
