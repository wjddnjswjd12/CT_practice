function solution(numbers, hand) {
  var temp = [];
  numbers.map((v) => {
    if (v in [1, 4, 7]) temp.push("L");
    else if (v in [3, 6, 8]) temp.push("R");
    else if (v in [2, 5, 8, 0] && hand === "right") temp.push("R");
    else temp.push("L");
  });
  return temp.join("");
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
