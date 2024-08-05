const array: number[] = [
  23, 4, 1, 6, 7, 3, 39, 47, 670, 26, 262, 9, 36, 85, 37, 68,
];

// Time complexity => O(N*N)
// Space complexity => O(1)
function selectionSort(array: number[]): void {
  let len: number = array.length;
  for (let i = 0; i < len; i++) {
    let minIndex: number = i;
    for (let j = i + 1; j < len; j++) {
      if (array[j] < array[minIndex]) minIndex = j;
    }
    if (minIndex !== i) {
      let temp: number = array[minIndex];
      array[minIndex] = array[i];
      array[i] = temp;
    }
  }
}

selectionSort(array);
console.log(`sorted array: ${array}`);
