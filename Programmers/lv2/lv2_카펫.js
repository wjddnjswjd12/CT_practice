function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;
  const s = Math.sqrt(sum);
  console.log(s);
  if (s === parseInt(s)) return [s, s];
  else {
    for (let i = parseInt(s); i > 0; i--) {
      if (sum % i === 0) {
        let a = i;
        let b = sum / i;
        if ((a - 2) * (b - 2) !== yellow) continue;
        return a > b ? [a, b] : [b, a];
      }
    }
  }
  return answer;
}

//전에는 답을 참고했는데 이번엔 답 참고 안함 ㅎ
//그래서 더 길어졌나 ㅋㅋ..ㅠ
