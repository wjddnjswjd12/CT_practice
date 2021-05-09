function solution(s) {
  var answer = s;
  let count = 1;
  for (let i = 1; i <= s.length / 2; i++) {
    let tempStr = "";
    let cutStr = s.slice(0, i);
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      const str = s.slice(j, j + i);

      if (cutStr === str) count++;
      else {
        tempStr += count > 1 ? count + cutStr : cutStr;
        cutStr = str;
        count = 1;
      }
    }
    if (cutStr) tempStr += count > 1 ? count + cutStr : cutStr;
    if (answer.length > tempStr.length) answer = tempStr;
  }
  return answer.length;
}
