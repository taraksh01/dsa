const array = [1, 2, 3, 4, 5, 6, 7, 8];

// Time complexity => O(N*N)
// Space complexity => O(1)
function twoSum(nums: number[], target: number): number[] {
  const len: number = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
  return [];
}

// Time complexity => O(N*log(N))
// Space complexity => O(1)
function optimisedTwoSum(nums: number[], target: number): number[] {
  nums.sort((a: number, b: number) => a - b);
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left < right) {
    let sum: number = nums[left] + nums[right];
    if (sum === target) return [left, right];
    else if (sum > target) right--;
    else left++;
  }
  return [];
}

// Time complexity => O(N)
// Space complexity => O(N)
function betterTwoSum(nums: number[], target: number): number[] {
  const len: number = nums.length;
  const hash: Map<number, number> = new Map();
  for (let i = 0; i < len; i++) {
    if (hash.has(target - nums[i])) {
      return [Number(hash.get(target - nums[i])), i];
    } else hash.set(nums[i], i);
  }
  return [];
}

console.log(twoSum(array, 2));
console.log(optimisedTwoSum(array, 8));
console.log(betterTwoSum(array, 8));
