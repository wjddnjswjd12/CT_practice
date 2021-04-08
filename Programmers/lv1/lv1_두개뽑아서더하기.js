function solution(numbers) {
  var answer = [];
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numners[i] + number[j]);
    }
  }
  const set = new Set(temp);
  return [...set].sort((a, b) => a - b);
}
