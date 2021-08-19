
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
// T1중요도순으로 내리다가 T1이 같으면 L1기준으로 sort함
// t1이 1일땐 중요하고 0이면 안중요한거
  
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

