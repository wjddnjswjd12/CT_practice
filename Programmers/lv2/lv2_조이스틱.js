function solution(name) {
  const alpha = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode("A".charCodeAt(0) + i)
  );
  var answer = 0;
  const temp = [0];
  let word = Array.from({ length: name.length }, (_, i) => "A");
  let idx = 0;
  // name!==word.join("")
  while (idx !== name.length) {
    if (name[idx] === "A") {
      if (name[idx - 1] !== "A") {
        temp.push(findRepeat(name.substring(idx)) - (idx - 1));
      }
      idx++;
      if (idx !== name.length) answer += 1;
      continue;
    }

    const charLocation = alpha.indexOf(name[idx]);
    const upWay = charLocation;
    const downWay = alpha.length - charLocation;

    if (upWay <= downWay) answer += upWay;
    else {
      answer += downWay;
    }

    idx++;
    if (idx !== name.length) answer += 1;
  }
  console.log(temp);
  return answer - Math.max(...temp);
}

const findRepeat = (name) => {
  let repeat = 0;
  for (let i = 0; i < name.length; i++) {
    if (name[i] !== "A") break;
    repeat++;
  }
  return repeat;
};
