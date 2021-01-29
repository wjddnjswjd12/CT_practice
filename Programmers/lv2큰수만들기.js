let solution = (number, k) => {
  let answer = "",
    startIndex = 0,
    maximumCandidateIndex = 0;

  for (let i = number.length - k; i > 0; i--) {
    let maximumCandidate = "0";

    for (let j = startIndex; j <= number.length - i; j++) {
      if (number[j] > maximumCandidate) {
        maximumCandidate = number[j];
        maximumCandidateIndex = j;
        if (maximumCandidate === "9") break;
      }
    }

    answer = answer + maximumCandidate;
    startIndex = maximumCandidateIndex + 1;
  }

  return answer;
};
