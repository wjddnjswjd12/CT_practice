function solution1(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; j++) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

function solution2(strings, n) {
  return strings.sort((a, b) => {
    if (a.charCodeAt(n) === b.charCodeAt(n)) {
      for (let i = 0; i < a.length; i++) {
        if (a.charCodeAt(i) !== b.charCodeAt(i)) {
          return a.charCodeAt(i) - b.charCodeAt(i);
        }
      }
    } else return a.charCodeAt(n) - b.charCodeAt(n);
  });
}
