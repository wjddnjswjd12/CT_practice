function solution(n) {
  let answer = "";
  let temp = n;
  let leftover = 0;

  while (temp !== 0) {
    leftover = temp % 3;
    temp = parseInt(temp / 3);

    if (leftover === 0) {
      answer = "4" + answer;
      temp--;
    } else if (leftover === 1) {
      answer = "1" + answer;
    } else if (leftover === 2) {
      answer = "2" + answer;
    }
  }
  return answer;
}
