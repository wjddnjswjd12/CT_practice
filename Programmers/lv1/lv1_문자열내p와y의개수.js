function solution(s) {
  var answer = true;
  const wordArr = s.toUpperCase().split("");
  let count1 = 0;
  let count2 = 0;
  wordArr.forEach((word) =>
    word === "P" ? count1++ : word === "Y" ? count2++ : ""
  );

  return count1 === count2;
}
