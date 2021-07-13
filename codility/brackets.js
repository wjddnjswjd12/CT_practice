function wrongSolution(S) {
  const stack = [];
  if (S.length === 0) return 1;
  if (S[0] === ")" || S[0] === "}" || S[0] === "]") return 0;

  for (let i in S) {
    if (S[i] === "(" || S[i] === "[" || S[i] === "{") {
      stack.push(S[i]);
    } else {
      if (S[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else if (S[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (S[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      }
    }
  }

  return stack.length ? 0 : 1;
}

function solution(S) {
  const stack = [];
  if (S.length === 0) return 1;
  if (S[0] === ")" || S[0] === "}" || S[0] === "]") return 0;

  for (let i in S) {
    if (S[i] === "(" || S[i] === "[" || S[i] === "{") {
      stack.push(S[i]);
    } else {
      if (S[i] === "}" && stack[stack.length - 1] === "{") {
        stack.pop();
      } else if (S[i] === ")" && stack[stack.length - 1] === "(") {
        stack.pop();
      } else if (S[i] === "]" && stack[stack.length - 1] === "[") {
        stack.pop();
      } else return 0;
    }
  }

  return stack.length ? 0 : 1;
}

// 자꾸 어딜 빼먹는지 모르겠어서 결국 답을 찾아봤는데 38번째 줄에 else return 0를 하니 해결됐다...
// 내가 생각치 못한 예외가 있나...했는데..
// 모르겠다 여전히 ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ
// 아니 뭔데 저게 그래서 아 짜증나~ S의 char가 },),]가 아니면서 stack의 마지막 애가 저 셋이랑 매칭 안된다?
// char==="}" 이고 stack[stack.length - 1]이 "[" 이런거일 경우를 말하는건가?
// 아니 그러면 그냥 stack에 찌꺼기가 남을테니 마지막 리턴때 걸러지지 않나? 뭐지...ㅠ

// 너무 궁금해서 다시 38번 else문을 빼고 돌려봤다
// 87퍼가 나온다. 다시 생각해보니
// stack= [ "{" ] 인 상황이라고 치고, char가 "]" 라고 치고... 그러면 뭐 당연히 else문들에 걸러지는거 없으니 for문에 의하여 다음 char를 비교하겠지?
// 그러면 stack = [ "{" ] 인 상태에서 다음 char가 "}" 이면? 당연히 틀린답. 난 바보였다 하하
// 긍꼐 s="{]}" 이런 경우이면 당연히 틀려야하는데... 그 부분을 왜 생각 못했을까~~~~~~~~~~ 꼼꼼하게 체크해야겠다.
