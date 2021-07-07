function solution(A, B, K) {
  const left = Math.floor((A - 1) / K);
  const right = Math.floor(B / K);

  return right - left;
}

/*
바보같이 for문부터 돌릴 생각해서
Timeout error 엄청 뜬 문제
엄청 간단한 문제였다
A~B사이의 K와 나누어떨어지는 수를 구하려면
걍 B까지의 K와 나누어지는수 - A전까지의 K와 나누어지는수

예를들면 6 ~ 11이고 K=2였다면

5까지의 2로나누어지는애들 = 5/2 = 2.솰라솰라
11까지의 2로 나누어지는애들 = 11/2 = 5.솰라솰라
요아이들을 Math.floor하고 둘사이를 빼면 됨
*/
