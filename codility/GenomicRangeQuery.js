function solution(S, P, Q) {
  let answer = [];
  let obj = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  };
  for (let i = 0; i < P.length; i++) {
    let arr = S.slice(P[i], Q[i] + 1);
    if (arr.indexOf("A") !== -1) {
      answer.push(obj["A"]);
      continue;
    } else if (arr.indexOf("C") !== -1) {
      answer.push(obj["C"]);
      continue;
    } else if (arr.indexOf("G") !== -1) {
      answer.push(obj["G"]);
      continue;
    } else {
      answer.push(obj["T"]);
      continue;
    }
  }

  return answer;
}
