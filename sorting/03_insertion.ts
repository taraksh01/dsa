const array: number[] = [
  23, 4, 1, 6, 7, 3, 39, 47, 670, 26, 262, 9, 36, 85, 37, 68,
];

// Time complexity => O(N*N)
// Space complexity => O(1)
function insertionSort(array: number[]): void {
  let len: number = array.length;
  for (let i = 0; i < len; i++) {
    let j: number = i;
    while (j > 0 && array[j - 1] > array[j]) {
      let temp: number = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j--;
    }
  }
}

insertionSort(array);
console.log(`Sorted array: ${array}`);
