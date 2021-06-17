function solution(N) {
  let binary = N.toString(2).split("");
  let count = 0;
  let answer = 0;

  binary.forEach((bin) => {
    if (bin === "1") {
      if (answer < count) {
        answer = count;
        count = 0;
      } else {
        count = 0;
      }
    } else {
      count++;
    }
  });
  return answer;
}
