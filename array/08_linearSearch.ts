const array = [3, 87, 3, 8, 4, 8, 4, 8, 3, 8, 4, 4, 8, 3, 8, 3, 9, 43, 76, 54];

// Time complexity => O(N)
// Space complexity => O(1)
function linearSearch(nums: number[], k: number): number {
  let len: number = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === k) return i;
  }
  return -1;
}

console.log(linearSearch(array, 8));
