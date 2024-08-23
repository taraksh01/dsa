const array: Array<number> = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2,
];

// Time complexity => O(N*log(N))
// Space complexity => O(N)
function majorityElement(nums: number[]): number {
  const len: number = nums.length;
  const hash: Map<number, number> = new Map();
  for (let i = 0; i < len; i++) {
    if (hash.has(nums[i])) {
      hash.set(nums[i], Number(hash.get(nums[i])) + 1);
    } else hash.set(nums[i], 1);
  }

  for (let [num, count] of hash) {
    if (count > Math.floor(len / 2)) return num;
  }
  return -1;
}

// Time complexity => O(2N)
// Space complexity => O(1)
function optimisedMajorityElement(nums: number[]): number {
  const len: number = nums.length;
  let element: number = -Infinity;
  let count: number = 0;
  for (let i = 0; i < len; i++) {
    if (count === 0) element = nums[i];
    if (element === nums[i]) count++;
    else count--;
  }

  let majCount: number = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] === element) {
      majCount++;
      if (majCount > Math.floor(len / 2)) return element;
    }
  }

  return -1;
}

console.log(majorityElement(array));
console.log(optimisedMajorityElement(array));
