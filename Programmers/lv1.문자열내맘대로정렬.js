function solution(strings, n) {
  var answer = [];

  answer = strings.sort(function (a, b) {
    var first = a[n];
    var second = b[n];
    if (first === second) return (a > b) - (a < b);
    else return (first > second) - (first < second);
  });

  console.log(strings);
  return answer;
}
