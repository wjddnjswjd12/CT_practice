function solution(s) {
  return s
    .split(" ")
    .map((str) => {
      let answer = "";
      for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) answer += str[i].toUpperCase();
        else answer += str[i].toLowerCase();
      }
      return answer;
    })
    .join(" ");
}
