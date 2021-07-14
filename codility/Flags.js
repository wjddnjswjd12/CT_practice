function wrong73Solution(A) {
  const peaks = [];
  let flags = 1;
  for (let i = 1; i < A.length; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) {
      peaks.push(i);
      i++;
    }
  }
  if (peaks.length === 1) return flags;

  const root = Math.floor(Math.sqrt((peaks[0], peaks[peaks.length - 1]))) + 1;
  for (let i = root; i > 0; i--) {
    let distanceSum = 0;
    for (let j = 0; j < peaks.length; j++) {
      var current = peaks[j];
      var next = peaks[j + 1];
      var difference = Math.abs(next - current);
      if (difference + distanceSum >= i) {
        flags++;
        distanceSum = 0;
      } else distanceSum += difference;
      if (flags == i) return flags;
    }
  }
}

function solution(A) {
  const peaks = [];
  for (let i = 1; i < A.length - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks.push(i);
  }
  if (peaks.length < 2) return peaks.length;
  const root = Math.floor(Math.sqrt(peaks[peaks.length - 1] - peaks[0]));
  for (let i = root + 1; i > 0; i--) {
    let distanceSum = 0;
    let flags = 1;
    for (let j = 0; j < peaks.length - 1; j++) {
      const current = peaks[j];
      const next = peaks[j + 1];
      const difference = Math.abs(next - current);
      if (difference + distanceSum >= i) {
        flags++;
        distanceSum = 0;
      } else distanceSum += difference;
      if (flags == i) return flags;
    }
  }
}
