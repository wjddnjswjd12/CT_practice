function solution(left, right) {
  let temp = [];
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let num = yack(i);
    if (num % 2 === 0) answer += i;
    else answer -= i;
  }

  console.log(temp);

  return answer;
}

const yack = (num) => {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) count++;
  }
  return count;
};
