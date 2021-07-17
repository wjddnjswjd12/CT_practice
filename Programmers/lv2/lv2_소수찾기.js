function solution(numbers) {
  var answer = 0;
  let temp = [];

  let arr = [...numbers];
  for (let i = 0; i < arr.length; i++) {
    temp.push(permutation(arr, i + 1));
  }

  temp = [...new Set(temp.join().split(",").map(Number))];
  console.log(temp);

  for (let i = 0; i < temp.length; i++) {
    if (isPrime(temp[i])) answer++;
  }

  return answer;
}

const isPrime = (num) => {
  let start = 2;
  while (start <= Math.sqrt(num)) {
    if (num % start++ < 1) {
      return false;
    }
  }
  return num > 1;
};

const permutation = (arr, numLength) => {
  const results = [];
  if (numLength === 1) return arr.map((value) => value);

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = permutation(rest, numLength - 1);
    const attached = permutations.map((perm) => [fixed, ...perm].join(""));
    results.push(...attached);
  });

  return results;
};
