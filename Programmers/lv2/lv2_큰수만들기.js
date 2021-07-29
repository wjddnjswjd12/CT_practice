function solution(number, k) {
  var answer = "";
  const arr = number.split("").map(Number);
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    while (k > 0 && stack[stack.length - 1] < num) {
      //stack의 마지막 수가 비교하는 수보다 작을때
      stack.pop();
      k--;
    }
    //마지막 애 빼고 더 큰 애 넣어줌
    stack.push(num);
  }
  console.log(stack);
  stack.splice(stack.length - k, k);
  return stack.join("");
}
