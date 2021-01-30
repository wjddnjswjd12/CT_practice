function solution(board, moves) {
  let temp = [];
  let answer = 0;

  moves.forEach((v) => {
    let i = 0;
    while (i < board.length) {
      if (board[i][v - 1] !== 0) {
        if (temp.length !== 0 && temp[temp.length - 1] === board[i][v - 1]) {
          temp.pop();
          answer += 2;
        } else {
          temp.push(board[i][v - 1]);
        }
        board[i][v - 1] = 0;
        break;
      }
      i++;
    }
  });

  return answer;
}
