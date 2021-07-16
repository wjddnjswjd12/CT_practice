function solution(numbers, hand) {
  var answer = "";
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    "*": [3, 0],
    0: [3, 1],
    "#": [3, 2],
  };
  let lastLeft = keyPad["*"];
  let lastRight = keyPad["#"];

  const getDist = (LeftCoord, RightCoord, nextKey, hand) => {
    const nextKeyCoord = keyPad[nextKey];
    const leftDistance =
      Math.abs(LeftCoord[0] - nextKeyCoord[0]) +
      Math.abs(LeftCoord[1] - nextKeyCoord[1]);
    const rightDistance =
      Math.abs(RightCoord[0] - nextKeyCoord[0]) +
      Math.abs(RightCoord[1] - nextKeyCoord[1]);

    if (leftDistance === rightDistance) {
      return hand === "right" ? "R" : "L";
    } else {
      return leftDistance > rightDistance ? "R" : "L";
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      answer += "L";
      lastLeft = keyPad[numbers[i]];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      answer += "R";
      lastRight = keyPad[numbers[i]];
    } else {
      const temp = getDist(lastLeft, lastRight, numbers[i], hand);
      console.log(temp);
      if (temp === "R") lastRight = keyPad[numbers[i]];
      else lastLeft = keyPad[numbers[i]];
      answer += temp;
    }
  }

  return answer;
}
