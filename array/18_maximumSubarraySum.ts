const array: Array<number> = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// Time complexity => O(N*N)
// Space complexity => O(1)
function maxSubArray(nums: number[]): number {
  const len: number = nums.length;
  let maxSubArray: number = -Infinity;
  for (let i = 0; i < len; i++) {
    let sum: number = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum > maxSubArray) maxSubArray = sum;
    }
  }
  return maxSubArray;
}

// Time complexity => O(N)
// Space complexity => O(1)
function optimisedMaxSubArray(nums: number[]): number[] {
  const len: number = nums.length;
  let maxSubArray: number = -Infinity;
  let sum: number = 0;
  let start: number = -1;
  let end: number = -1;
  let startT: number = -1;
  for (let i = 0; i < len; i++) {
    if (sum === 0) startT = i;
    sum += nums[i];
    if (sum > maxSubArray) {
      maxSubArray = sum;
      start = startT;
      end = i;
    }
    if (sum < 0) {
      sum = 0;
    }
  }
  return [maxSubArray, start, end];
}
console.log(maxSubArray(array));
console.log(optimisedMaxSubArray(array));
