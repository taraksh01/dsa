const array = [1, 2, 2, 3, 4, 5, 6, 5, 4, 3, 1];

// Time complexity => O(N)
// Space complexity => O(1)
function singleNumber(nums: number[]): number {
  const len: number = nums.length;
  let single: number = 0;
  for (let i = 0; i < len; i++) {
    single ^= nums[i];
  }
  return single;
}

console.log(singleNumber(array));
