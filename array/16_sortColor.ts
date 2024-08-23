const array: Array<number> = [1, 0, 2, 2, 2, 2, 1, 2, 2, 1, 0, 0, 0, 2];

// Time complexity => (2*N)
// Space complexity => (1)
function sortColor(nums: number[]): void {
  let zeros: number = 0;
  let ones: number = 0;
  let twos: number = 0;
  const len: number = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === 0) zeros++;
    else if (nums[i] === 1) ones++;
    else twos++;
  }

  for (let i = 0; i < zeros; i++) {
    nums[i] = 0;
  }

  for (let i = zeros; i < zeros + ones; i++) {
    nums[i] = 1;
  }

  for (let i = zeros + ones; i < zeros + ones + twos; i++) {
    nums[i] = 2;
  }
}
// Time complexity => (N)
// Space complexity => (1)
function optimisedSortColor(nums: number[]): void {
  let low: number = 0;
  let mid: number = 0;
  let high: number = nums.length - 1;
  while (mid <= high) {
    if (nums[mid] === 0) {
      swap(nums, low, mid);
      low++;
      mid++;
    } else if (nums[mid] === 1) mid++;
    else {
      swap(nums, mid, high);
      high--;
    }
  }
}

function swap(nums: number[], x: number, y: number) {
  let temp: number = nums[x];
  nums[x] = nums[y];
  nums[y] = temp;
}

// sortColor(array);
optimisedSortColor(array);
console.log(array);
