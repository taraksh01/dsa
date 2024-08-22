const array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 1, 2, 4, 2, 3, 4, 5, 4, 2, 3,
];

// Time complexity => O(N*N*N)
// Space complexity => O(1)
function longestSubarray(nums: number[], k: number): number {
  const len: number = nums.length;
  let sum: number = 0;
  let longest: number = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      for (let k = i; k <= j; k++) {
        sum += nums[k];
      }
      if (sum === k) {
        longest = Math.max(longest, j - i + 1);
      }
      sum = 0;
    }
  }
  return longest;
}

// Time complexity => O(N*N)
// Space complexity => O(1)
function betterLongestSubarray(nums: number[], k: number): number {
  const len: number = nums.length;
  let sum: number = 0;
  let longest: number = 0;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += nums[j];
      if (sum === k) longest = Math.max(longest, j - i + 1);
    }
  }
  return longest;
}

// Time complexity => O(N)
// Space complexity => O(N)
function optimizedLongestSubarray(nums: number[], k: number): number {
  const len: number = nums.length;
  let sum: number = 0;
  let longest: number = 0;
  let prefixSum: Map<number, number> = new Map();
  for (let i = 0; i < len; i++) {
    sum += nums[i];
    if (sum === k) longest = Math.max(longest, i + 1);
    let rem: number = sum - k;
    if (prefixSum.has(rem)) {
      let current: number = i - (prefixSum.get(rem) || 0);
      longest = Math.max(longest, current);
    }
    if (!prefixSum.has(sum)) prefixSum.set(sum, i);
  }
  return longest;
}

// Time complexity => O(N)
// Space complexity => O(1)
function bestLongestSubarray(nums: number[], k: number): number {
  const len: number = nums.length;
  let left: number = 0;
  let right: number = 0;
  let sum: number = nums[0];
  let maxLen: number = 0;
  while (right < len) {
    while (left <= right && sum > k) {
      sum -= nums[left];
      left++;
    }
    if (sum === k) {
      maxLen = Math.max(maxLen, right - left + 1);
    }

    right++;
    if (right < len) sum += nums[right];
  }

  return maxLen;
}

console.log(longestSubarray(array, 9));
console.log(betterLongestSubarray(array, 9));
console.log(optimizedLongestSubarray(array, 9));
console.log(bestLongestSubarray(array, 9));
