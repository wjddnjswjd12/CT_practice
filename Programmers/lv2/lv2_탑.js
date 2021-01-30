function solution(arr) {
  return arr.map((v, i) => {
    while (i) {
      i--;
      if (arr[i] > v) {
        return i + 1;
      }
    }
    return 0;
  });
}
