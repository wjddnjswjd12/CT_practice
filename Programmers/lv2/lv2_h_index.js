function solution(citations) {
  citations = citations.sort((a, b) => b - a);
  let answer = 0;

  if (citations[citations.length - 1] >= citations.length) {
    return citations.length;
  }
  if (citation[0] === 0) {
    answer = 0;
  }
  for (let i = 0; i < citations.length; i++) {
    if (i >= citations[i]) {
      answer = i;
      break;
    }
  }
}
