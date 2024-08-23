const array = [1, 2, 3, 4, 56, 7];

// Time complexity => O(N+Nlog(N))
// Space complexity => O(1)
function longestConsecutive(nums: number[]): number {
  const len: number = nums.length;
  let lastSmaller: number = -Infinity;
  let count: number = 0;
  let longest: number = 1;
  nums.sort((a: number, b: number) => a - b);

  for (let i = 0; i < len; i++) {
    if (lastSmaller === nums[i] - 1) {
      count++;
      lastSmaller = nums[i];
    } else if (lastSmaller !== nums[i]) {
      lastSmaller = nums[i];
      count = 1;
    }
    longest = Math.max(longest, count);
  }
  return longest;
}

console.log(longestConsecutive(array));
