function solution(nums) {
  var answer = -1;
  let temp = [];
  let check = [2, 3, 5, 7];

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        temp.push(nums[i] + nums[j] + nums[k]);
      }
    }
  }

  let count = 0;

  console.log(temp.filter((v) => isPrime(v)));

  return temp.filter((v) => isPrime(v)).length;
}

function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
