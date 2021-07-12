function solution(s) {
  let obj = {};
  const regex = /[^0-9]/g;
  const onlyNum = s
    .split(",")
    .map((v) => v.replace(regex, ""))
    .map(Number);
  console.log(onlyNum);
  for (let i = 0; i < onlyNum.length; i++) {
    obj[onlyNum[i]] = obj[onlyNum[i]] ? obj[onlyNum[i]] + 1 : 1;
  }

  var answer = Object.entries(obj)
    .sort((a, b) => b[1] - a[1])
    .map((v) => Number(v[0]));
  return answer;
}
