function solution(arr) {
  var min = arr[0];
  let index;
  let removed;

  if (arr.length === 1 || arr.length === 0) {
    return [-1];
  } else {
    for (let a in arr) {
      if (arr[a] <= min) {
        min = arr[a];
        index = a;
      }
    }
    removed = arr.splice(index, 1);
    return arr;
  }
}

function solution2(arr) {
  let temp = [...arr].sort((a, b) => b - a);
  const index = arr.indexOf(temp.pop());
  arr.splice(index, 1);
  if (!arr.length) return [-1];
  else return arr;
}
