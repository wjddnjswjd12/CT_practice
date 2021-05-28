function solution(absolutes, signs) {
  const temp = [];
  for (let i = 0; i < absolutes.length; i++) {
    if (!signs[i]) {
      temp.push(absolutes[i] - absolutes[i] * 2);
    } else {
      temp.push(absolutes[i]);
    }
  }

  var answer = temp.reduce((acc, cur) => {
    return (acc += cur);
  }, 0);

  return answer;
}
