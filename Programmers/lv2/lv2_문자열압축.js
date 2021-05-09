function solution(s) {
  var answer = s; //일단 answer에 s를 그대로 복사해둔다.
  for (let i = 1; i <= s.length / 2; i++) {
    //자를 수 있는 크기: 1~문자열크기/2
    let tempStr = ""; //비교가 끝난 문자열들이 들어갈 tempStr
    let cutStr = s.slice(0, i); //비교할 문자열들
    let count = 1;

    for (let j = i; j < s.length; j += i) {
      const str = s.slice(j, j + i);

      if (cutStr === str) count++;
      else {
        tempStr += count > 1 ? count + cutStr : cutStr;
        cutStr = str;
        count = 1;
      }
    }
    if (cutStr) tempStr += count > 1 ? count + cutStr : cutStr;
    if (answer.length > tempStr.length) answer = tempStr;
  }
  return answer.length;
}
/*
    cutSTr에 잘라둔 문자열과, 아래 slice(j,j+i)만틈의 문자열이같으면 count가 증가한다.
    예를들면 abcabcbedce이고 i가 3이면 [abc]가 cutSTr이 되는거고,
    s.slice(3,6);이 되는거니까 가운데의 abc와 비교를 하는거다.
    abc===abc니까 count를 2로 높이고, j는 j+=i로 인해 6이 된다. 그러면 바로
    s.slice(6,9)로 또 3개를 잘라서 비교해보면, abc!==bed니까 else{}부분으로 넘어간다.
    count는 앞서 2인상태로 넘어가는데, count>1이면 count+cutStr를 해준다. 즉 "2abc"
    그 이후 cutStr=bed가 된 상태로 다음단계로 간다.
    s.slice(9,12)는 ce니까 bed!==ce가 됨. 그러니 그냥 tempStr+=cutSTr로 기존 tempStr에 ce를 집어넣음.
    j로의 for루프가 끝난 후 마지막에 cutStr에 남아있는 문자열도 처리해줘야함.
    if (cutStr) tempStr += count > 1 ? count + cutStr : cutStr; 똑같이 해줌
    그리고 answer보다 tempSTr이 짧으면, 즉 잘 압축됐으면 answer에 tempStr을 넣음.
    그 다음엔 i가 4가 되어 다시 위의 방법을 반복함.
    반복했을때 나온 tempStr의 길이가 이전 3으로 나눴을때의 answer보다짧으면
    answer갱신
    */
