function solution(n, words) {
  var answer = [];
  let wordObj = {};
  let count = 0;
  let wrong = false;

  for (let i = 0; i < words.length; i++) {
    count++;
    if (!wordObj[words[i]]) {
      wordObj[words[i]] = 1;
    } else {
      wrong = true;
      break;
    }

    if (count < 2) continue;

    const last = words[i - 1][words[i - 1].length - 1];
    const first = words[i][0];

    if (last !== first) {
      wrong = true;
      break;
    }
  }

  if (wrong) {
    answer.push(count % n ? count % n : n, Math.ceil(count / n));
  } else {
    return [0, 0];
  }

  return answer;
}

//조건이 많다보니 코드가 더러워짐
//다음에 풀어볼 땐 좀 더 간결하게 써보자
