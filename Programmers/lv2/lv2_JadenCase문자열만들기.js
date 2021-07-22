function solution(s) {
  var answer = "";

  let arr = s.toLowerCase().split(" ");

  answer = arr
    .map((str) => (str === "" ? "" : str.toLowerCase()))
    .map((str) => (str === "" ? "" : str.replace(str[0], str[0].toUpperCase())))
    .join(" ");

  return answer;
}
