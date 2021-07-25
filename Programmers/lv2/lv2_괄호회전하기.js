const checkStack = (strArr) => {
  let stack = [];

  const checkBracket = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  for (let i = 0; i < strArr.length; i++) {
    const char = strArr[i];

    if (checkBracket[char] === undefined) stack.push(char);
    //열리는 괄호면 그냥 넣어라
    else {
      if (checkBracket[char] !== stack[stack.length - 1]) return false;
      stack.pop();
    }
  }

  if (stack.length) return false;
  return true;
};

function solution(s) {
  var answer = 0;
  let arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    if (checkStack(arr)) answer++;
    arr.push(arr.shift());
  }

  return answer;
}
