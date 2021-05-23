function solution(nums) {
  const available = nums.length / 2;
  const numsSet = [...new Set(nums)];

  return available >= numsSet.length ? numsSet.length : available;
}
