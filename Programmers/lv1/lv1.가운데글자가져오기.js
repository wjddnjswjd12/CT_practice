function solution(s) {
  var temp = s.split("");
  var ans;
  console.log(temp);
  if (temp.length % 2 === 0) {
    ans = temp.splice(temp.length / 2 - 1, 2);
  } else ans = temp.splice((temp.length - 1) / 2, 1);
  var answer = ans.join("");
  return answer;
}
