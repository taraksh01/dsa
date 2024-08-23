const nums = [3, 1, -2, -5, 2, -4];

// Time complexity => O(N+N/2)
// Space complexity => O(N)
function rearrangeArray(nums: number[]): number[] {
  const len: number = nums.length;
  const posNum: number[] = [];
  const negNum: number[] = [];
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) posNum.push(nums[i]);
    if (nums[i] < 0) negNum.push(nums[i]);
  }

  for (let i = 0; i < len / 2; i++) {
    nums[2 * i] = posNum[i];
    nums[2 * i + 1] = negNum[i];
  }
  return nums;
}

// Time complexity => O(N)
// Space complexity => O(N)
function betterRearrangeArray(nums: number[]): number[] {
  const len: number = nums.length;
  const array: number[] = [];
  let pos: number = 0;
  let neg: number = 1;
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      array[pos] = nums[i];
      pos += 2;
    }
    if (nums[i] < 0) {
      array[neg] = nums[i];
      neg += 2;
    }
  }

  return array;
}

console.log(rearrangeArray(nums));
console.log(betterRearrangeArray(nums));
