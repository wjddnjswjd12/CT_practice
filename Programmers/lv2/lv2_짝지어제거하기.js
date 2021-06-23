function solution(s) {
  let stack = [];

  if (s.length % 2) return 0;

  for (let char = 0; char < s.length; char++) {
    let lastStack = stack[stack.length - 1];
    if (s[char] !== lastStack) {
      stack.push(s[char]);
    } else if (s[char] === lastStack) {
      stack.pop();
    }
  }

  return stack.length ? 0 : 1;
}

//효율성에서 자꾸 틀려서 간단하게 해보려 했다
// 위에서 미리 홀수개는 거르도록 했더니 좀 나아짐
