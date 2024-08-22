let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Time complextiy => O(N)
// Space complexity => O(N)
function rotate(nums: number[], k: number): void {
  const len: number = nums.length;
  if (k > len) k % len;
  const newNums = [...nums.slice(len - k, len), ...nums.slice(0, len - k)];
  for (let i = 0; i < len; i++) {
    nums[i] = newNums[i];
  }
  return;
}

// Time complexity => O(k*N)
// Space complexity => O(1)
function betterRotate(nums: number[], k: number): void {
  const len: number = nums.length;
  if (k > len) k %= len;
  let i: number = 0;
  while (i < k) {
    const right: number = nums[len - 1];
    for (let i = len - 1; i > 0; i--) {
      let temp: number = nums[i];
      nums[i] = nums[i - 1];
      nums[i - 1] = temp;
    }
    nums[0] = right;
    i++;
  }
}

// Time complexity => O(N)
// Space complexity => O(1)
function optimisedRotate(nums: number[], k: number): void {
  const len: number = nums.length;
  if (k > len) k %= len;
  reverse(nums, 0, len - k - 1);
  reverse(nums, len - k, len - 1);
  reverse(nums, 0, len - 1);
  return;
}

function reverse(nums: number[], start: number, end: number): void {
  while (start < end) {
    let temp: number = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}

// rotate(array, 22);
// betterRotate(array, 25);
optimisedRotate(array, 2);
console.log(array);
