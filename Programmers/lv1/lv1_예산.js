function solution(d, budget) {
  var answer = 0;
  let temp = [];
  let sum = 0;
  temp = d.sort((a, b) => a - b);
  for (let i = 0; i < temp.length; i++) {
    sum += temp[i];
    answer++;
    if (sum > budget) {
      answer--;
      break;
    }
  }
  return answer;
}
