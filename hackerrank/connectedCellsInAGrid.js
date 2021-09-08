function connectedCell(matrix) {
  // Write your code here
  let totalCount = 0;
  let largest = 0;
  let visited = Array.from(Array(matrix.length), () =>
    Array(matrix.length).fill(false),
  );
  let moveX = [-1, 1, 0, 0, -1, 1, -1, 1];
  let moveY = [0, 0, -1, 1, -1, -1, 1, 1];

  const dfs = (i, j) => {
    totalCount++;
    visited[i][j] = true;

    for (let move = 0; move < moveX.length; move++) {
      let x = i + moveX[move];
      let y = j + moveY[move];

      if (check(x, y) && visited[x][y] === false && matrix[x][y] === 1) {
        dfs(x, y);
      }
    }
  };

  const check = (x, y) => {
    return x >= 0 && x < matrix.length && y >= 0 && y < matrix.length;
  };

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      if (visited[i][j] === false && matrix[i][j] === 1) {
        totalCount = 0;

        dfs(i, j);

        largest = totalCount > largest ? totalCount : largest;
      }
    }
  }

  return largest;
}

/*
문제 요구사항: 0과 1로 채워진 N x M 개의 grid가 있는데, 1은 filled cell로 간주한다
이때 1끼리 수평, 수직 대각선으로 닿으면 연결되어있다고 판단한다
인접한 1끼리 합쳐서 하나의 영역으로 보는데, 영역은 1개이상 존재한다
존재하는 영역들 중 가장 큰 영역의 크기를 구하는 문제

알고리즘:
일단 dfs알고리즘으로 풀었다
위 아래 왼 오 대각선들 을 나타내는 moveX, moveY를 만들고
하나의 startNode 탐색을 시작할 때 totalCount를 0으로 초기화하여 영역 count를 할 시작 노드가 바뀔때마다 새로 count하도록 설정했다.
가능한 모든 방향들에 대해 전체 dfs탐색을 하도록 했다.
그리고 영역 탐색이 끝나면 크기 비교 후 largest영역 기록을 갈아끼워줬다.

시간이 오래걸린 이유:

n X n 짜리, 즉 column row의 수가 같은 정사각형의 grid라고 생각하여
matrix.length로 전부 판단을 해두었다... j의 경우 matrix[0].length로 탐색을 했어야 했다. 
정확한 문제 요구사항 파악의 중요성...

*/
