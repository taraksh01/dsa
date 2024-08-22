const array = [0, 1, 2, 3, 4, 6, 7, 8, 9];

// Time complexity => O(N)
// Space complexity => O(1)
function missingNumber(nums: number[]): number {
  let len: number = nums.length;
  const sumOfN = (len * (len + 1)) / 2;
  let sum: number = 0;
  for (let i = 0; i < len; i++) {
    sum += nums[i];
  }

  return sumOfN - sum;
}

console.log(missingNumber(array));
