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
