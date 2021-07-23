function solution(numbers, target) {
  var answer = 0;
  let temp = 0;
  const length = numbers.length;

  return dfs(1, length, target, temp, answer, numbers);
  return answer;
}

const dfs = (x, numLength, target, temp, answer, numbers) => {
  if (x > Math.pow(2, numLength + 1) - 1) return answer;
  else {
    if (x % 2 == 0) temp += numbers[Math.floor(Math.log2(x)) - 1];
    else if (x % 2 == 1 && x != 1)
      temp -= numbers[Math.floor(Math.log2(x)) - 1];

    if (x > Math.pow(2, numLength) && target == temp) {
      answer++;
      console.log(temp, x);
    }

    answer = dfs(x * 2, numLength, target, temp, answer, numbers);
    answer = dfs(x * 2 + 1, numLength, target, temp, answer, numbers);
  }
  return answer;
};

// 모르겠어서 결국 풀이를 참고하게됨
//dfs랑 bfs는 다시 한번 개념부터 잡아봐야겠다...슬프넹
