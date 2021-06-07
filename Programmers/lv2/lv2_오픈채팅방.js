function solution(record) {
  const answer = [];

  const temp = record.map((str) => str.split(" "));

  let nichObj = {};
  for (let i = 0; i < temp.length; i++) {
    if (temp[i].length === 3) {
      nichObj[temp[i][1]] = temp[i][2];
    }
  }

  for (let i = 0; i < temp.length; i++) {
    if (temp[i][0] === "Enter") {
      answer.push(nichObj[temp[i][1]] + "님이 들어왔습니다.");
    } else if (temp[i][0] === "Leave") {
      answer.push(nichObj[temp[i][1]] + "님이 나갔습니다.");
    }
  }

  return answer;
}
