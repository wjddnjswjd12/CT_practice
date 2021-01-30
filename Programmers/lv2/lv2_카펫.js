function solution(brown, red) {
  var n = 0;
  for (var m = red; m >= 1; m--) {
    n = Math.floor(red / m);
    if (red % m == 0 && (m + 2) * (n + 2) == brown + red) return [m + 2, n + 2];
  }
}
