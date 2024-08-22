const array = [
  3, 50, 5, 0, 4, 0, 8, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 5, 9, 0, 3,
];

// Time complexity => O(N)
// Space complexity => O(1)
function moveZeros(nums: number[]): void {
  let len: number = nums.length;
  let i: number = 0;
  while (i < len) {
    if (nums[i] === 0) {
      for (let j = i; j < len - 1; j++) {
        let temp: number = nums[j + 1];
        nums[j + 1] = nums[j];
        nums[j] = temp;
      }
      len--;
    } else {
      i++;
    }
  }
}

moveZeros(array);
console.log(array);
