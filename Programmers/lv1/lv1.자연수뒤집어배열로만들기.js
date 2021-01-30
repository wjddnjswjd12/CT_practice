function solution(n) {
  var answer = [];
  var temp = String(n).split("").reverse();
  temp.forEach((v) => answer.push(parseInt(v)));
  return answer;
}
console.log(typeof solution(12345));
