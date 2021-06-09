function solution(N, stages) {
  var answer = [];
  let obj = {};
  for (let i = 0; i < stages.length; i++) {
    obj[stages[i]] = obj[stages[i]] ? obj[stages[i]] + 1 : 1;
  }
  console.log(obj);
  let count = stages.length;
  let temp = {};
  for (let i = 1; i <= N; i++) {
    if (!obj[i]) {
      temp[i] = 0;
      continue;
    }
    temp[i] = obj[i] / count;
    count = count - obj[i];
  }

  answer = Object.entries(temp).sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return b[1] - a[1];
  });

  return answer.map((v) => parseInt(v[0]));
}
