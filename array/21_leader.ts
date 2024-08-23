const array: Array<number> = [5, 4, 3, 2, 1];

// Time complexity => O(N)
// Space complexity => O(N)
function leader(nums: number[]): number[] {
  const len: number = nums.length;
  const leaders: number[] = [nums[len - 1]];
  let rightMax: number = nums[len - 1];
  for (let i = len; i >= 0; i--) {
    if (nums[i] > rightMax) {
      rightMax = nums[i];
      leaders.push(nums[i]);
    }
  }
  return leaders;
}

console.log(leader(array));
