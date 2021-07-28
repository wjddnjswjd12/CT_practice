function solution(people, limit) {
  var answer = 0;
  people.sort((a, b) => a - b);

  let start = 0;
  let end = people.length - 1;
  while (start <= end) {
    if (start === end) {
      answer++;
      break;
    }
    if (people[start] + people[end] <= limit) {
      start++;
      end--;
    } else {
      end--;
    }
    answer++;
  }

  return answer;
}
