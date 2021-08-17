function climbingLeaderboard(ranked, player) {
  const setRank = [...new Set(ranked)];
  let index = setRank.length - 1;
  const answer = [];
  for (let i = 0; i < player.length; i++) {
    for (let j = index; j >= 0; j--) {
      if (player[i] === setRank[j]) {
        answer.push(j + 1);
        index = j;
        break;
      } else if (player[i] < setRank[j]) {
        index++;
        index = j;
        answer.push(j + 2);
        break;
      } else if (j === 0) {
        answer.push(1);
      }
    }
  }

  return answer;
}

/*
Sort로 오름차순으로 다 정렬하고 또 Set으로 겹치는걸 제외하다가
생각해보니 그냥 player은 오름차순으로 이미 정렬되어오고
ranked는 내림차순으로 오는데,
ranked에 Set만 해주고 뒤에서부터 비교하면 되겠구나 라고 생각하고
뒤에서부터 비교해서 answer배열에 push
*/
