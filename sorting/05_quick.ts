const array: number[] = [
  23, 4, 1, 6, 7, 3, 39, 47, 670, 26, 262, 9, 36, 85, 37, 68,
];

// Time complexity => O(N*N)
// Space complexity => O(1)
function quickSort(array: number[], low: number, high: number) {
  if (low < high) {
    let pIndex: number = partition(array, low, high);
    quickSort(array, low, pIndex - 1);
    quickSort(array, pIndex + 1, high);
  }
}

// Time complexity => O(N*N)
// Space complexity => O(1)
function partition(array: number[], low: number, high: number): number {
  let pivot: number = array[low];
  let i: number = low;
  let j: number = high;
  while (i < j) {
    while (i <= high - 1 && array[i] <= pivot) i++;
    while (j >= low + 1 && array[j] > pivot) j--;
    if (i < j) {
      let temp: number = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let temp: number = array[low];
  array[low] = array[j];
  array[j] = temp;
  return j;
}

quickSort(array, 0, array.length - 1);
console.log(`Sorted array: ${array}`);
