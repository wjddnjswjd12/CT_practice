function solution(a, b) {
  var day = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var numdays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var sum = 0;
  for (var i = 0; i < a - 1; i++) {
    sum += numdays[i];
  }
  sum = sum + b - 1;

  console.log(sum);
  var answer = day[sum % 7];
  return answer;
}
