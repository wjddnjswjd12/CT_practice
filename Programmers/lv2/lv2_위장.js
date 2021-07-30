function solution(clothes) {
  let obj = {};
  var answer = 1;
  for (let i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = obj[clothes[i][1]] ? obj[clothes[i][1]] + 1 : 1;
  }
  const values = Object.values(obj);
  if (values.length === 1) return values[0];

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
