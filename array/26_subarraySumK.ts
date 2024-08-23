const nums = [1, 2, 3, 4, 2, 3, 1, 4];

// Time complexity => O(N*N)
// Space complexity => O(1)
function subarraySum(nums: number[], k: number): number {
  const len: number = nums.length;
  let count: number = 0;
  for (let i = 0; i < len; i++) {
    let sum: number = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum === k) count++;
    }
  }
  return count;
}

console.log(subarraySum(nums, 4));
