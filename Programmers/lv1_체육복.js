function solution(n, lost, reserve) {
  var possible = n - lost.length;
  for (var i = 0; i < lost.length; i++) {
    for (var j = 0; j < reserve.length; j++) {
      if (lost[i] == reserve[j]) {
        possible += 1;
        reserve.splice(j, 1);
        lost.splice(i, 1);
        i--;
      }
    }
  }
  for (var i = 0; i < lost.length; i++) {
    for (var j = 0; j < reserve.length; j++) {
      if (lost[i] - reserve[j] === -1) {
        possible += 1;
        reserve.splice(j, 1);
        break;
      } else if (lost[i] - reserve[j] === 1) {
        possible += 1;
        reserve.splice(j, 1);
        break;
      }
    }
  }

  var answer = possible;
  return answer;
}
