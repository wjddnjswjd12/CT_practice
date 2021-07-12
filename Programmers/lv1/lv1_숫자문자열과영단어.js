function solution(s) {
  var answer = "";
  const numberObj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  let word = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] in "0123456789".split("")) {
      answer += s[i];
      continue;
    } else {
      word += s[i];

      if (Object.keys(numberObj).indexOf(word) !== -1) {
        answer += numberObj[word];
        word = "";
      }
    }
  }

  return Number(answer);
}
