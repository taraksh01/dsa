const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Time complexity => O(N)
// Space complexity => O(1)
function isSorted(array: number[]): boolean {
  let len: number = array.length;
  for (let i = 1; i < len; i++) {
    if (array[i - 1] > array[i]) return false;
  }
  return true;
}

console.log(`Array is ${isSorted(array) ? "already" : "not"} sorted`);
