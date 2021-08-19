
function luckBalance(k, contests) {
    // Write your code here
  let answer = 0;
  contests.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      return b[0] - a[0];
    }
  });
  //입력값을 내림차순 해줘야함

  
  for (let i = 0; i < contests.length; i++) {
    if (k <= i && contests[i][1] === 1) {
    //k번 이후로는 고려 x 최소 k-1
      answer -= contests[i][0];
    } else {
      answer += contests[i][0];
    }
  }

  return answer;
}
