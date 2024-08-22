const array = [
  1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1,
];

// Time complexity => O(N)
// Space complexity => O(1)
function maxConsecutiveOnes(nums: number[]): number {
  let maxConsecutiveOnes: number = 0;
  let consecutiveOnes: number = 0;
  const len: number = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 1) consecutiveOnes++;
    else consecutiveOnes = 0;
    maxConsecutiveOnes = Math.max(consecutiveOnes, maxConsecutiveOnes);
  }
  return maxConsecutiveOnes;
}

console.log(maxConsecutiveOnes(array));
