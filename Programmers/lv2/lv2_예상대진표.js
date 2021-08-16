function solution(a, b) {
  let answer = 1;

  while (Math.ceil(a / 2) !== Math.ceil(b / 2)) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

/*
처음엔 if문으로 이상한 삽질을 하다가 생각을 바꿨다.
1,2 3,4가 서로 붙으니  2로 나누어떨어지는 값으 n-1번째 값과 붙는다고 보면 됨
같은번호가 되면 while문 종료
*/
