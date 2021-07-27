function solution(info, query) {
  var answer = [];
  const map = {};

  function combination(arr, score, start) {
    const key = arr.join("");
    const value = map[key];

    if (value) {
      map[key].push(score);
    } else {
      map[key] = [score];
    }

    for (let i = start; i < arr.length; i++) {
      const temp = [...arr];
      temp[i] = "-";
      combination(temp, score, i + 1);
    }
  }
  for (let val of info) {
    const splitValue = val.split(" ");
    const score = Number(splitValue.pop());
    combination(splitValue, score, 0);
  }

  for (const key in map) {
    map[key] = map[key].sort((a, b) => a - b);
  }
  console.log(map);
  for (const val of query) {
    const temp = val.replace(/ and /g, " ").split(" ");
    const score = Number(temp.pop());
    const key = temp.join("");
    const p = map[key];

    if (p) {
      let start = 0;
      let limit = p.length;
      while (start < limit) {
        const mid = Math.floor((start + limit) / 2);

        if (p[mid] >= score) {
          limit = mid;
        } else if (p[mid] < score) {
          start = mid + 1;
        }
      }
      const result = p.length - start;
      answer.push(result);
    } else {
      answer.push(0);
    }
  }

  return answer;
}
//진짜 너무어렵네 ㅡㅡ...
// map 쓰는것까진 맞췄고 정렬완료했는데 뭔가 자꾸 몇몇 테케에서 안되길래
//결국 답을 참고했다.
