function solution(participant, completion) {
  var temp1 = participant.sort();
  let temp2 = completion.sort();

  for (let i in temp1) {
    if (temp1[i] !== temp2[i]) {
      var answer = temp1[i];
      break;
    }
  }

  return answer;
}
