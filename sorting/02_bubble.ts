const array: number[] = [
  23, 4, 1, 6, 7, 3, 39, 47, 670, 26, 262, 9, 36, 85, 37, 68,
];

function bubbleSort(array: number[]): void {
  let len: number = array.length;
  for (let i = 0; i < len; i++) {
    let didSwap: boolean = false;
    for (let j = 0; j < len; j++) {
      if (array[j] > array[j + 1]) {
        let temp: number = array[j + 1];
        array[j + 1] = array[j];
        array[j] = temp;
        didSwap = true;
      }
      if (!didSwap) return;
    }
  }
}

bubbleSort(array);
console.log(`Sorted array: ${array}`);
