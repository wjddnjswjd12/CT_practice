function solution(arr, divisor) {
  var answer = [];
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      answer.push(arr[i]);
      count++;
    }
  }
  if (count !== 0)
    answer.sort(function (a, b) {
      return a - b;
    });
  else answer[0] = -1;
  return answer;
}
