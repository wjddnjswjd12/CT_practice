function solution(priorities, location) {
  let alpha = [];
  let AcharCode = 65;
  let outCount = 0;
  for (let i = 0; i < priorities.length; i++) {
    alpha.push(String.fromCharCode(AcharCode));
    AcharCode++;
  }

  let myAlpha = alpha[location];

  while (priorities.length !== 0) {
    let temp = priorities.shift();
    let tempAlpha = alpha.shift();
    if (priorities.some((v) => v > temp)) {
      //만약 priorities내에 방금빼낸 값보다 큰 값이 있으면 뒤로 보내기
      priorities.push(temp);
      alpha.push(tempAlpha);
      //이 조건문이 발동했다는것은 아직 내가 지정한애가 확실하게 pop되지 않았다는말
    } else {
      //내가 방금 빼낸 값보다 큰 애들이 없으면 발동
      //즉 그냥 바로 shift해버리면 되는 아이 기준
      outCount++;
      if (tempAlpha === myAlpha) {
        //내가 지정한 알파벳이 빠져나온게 아니면 count++
        break;
      }
    }
  }
  return outCount;
}

/*
ㅋㅋㅋ너무 단순하고 비효율적으로 풀었다. 다른사람 코드 보니까 갑자기 현타온다
뭣하러 alpha배열을 하나 더 팠을까 걍 객체마냥 만들어버리고 비교하면되는데..

*/

//다른사람 코드
function someonesSolution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location, //이러면 true, false가 매핑되겠네 머리좋다 ㅡㅡ
    val: t,
  }));

  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
//이런 비슷한 문제 많이 나오는데 다음엔 이렇게 풀어봐야지~
