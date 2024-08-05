const array: number[] = [
  23, 4, 1, 6, 7, 3, 39, 47, 670, 26, 262, 9, 36, 85, 37, 68,
];

// Time complexity => O(N)
// Space complexity => O(N)
function merge(array: number[], low: number, mid: number, high: number) {
  let temp: number[] = [];
  let left: number = low;
  let right: number = mid + 1;
  while (left <= mid && right <= high) {
    if (array[left] <= array[right]) {
      temp.push(array[left]);
      left++;
    } else {
      temp.push(array[right]);
      right++;
    }
  }

  while (left <= mid) {
    temp.push(array[left]);
    left++;
  }

  while (right <= high) {
    temp.push(array[right]);
    right++;
  }

  for (let i = low; i <= high; i++) {
    array[i] = temp[i - low];
  }
}

// Time complexity => O(Nlog(N))
// Space complexity => O(N)
function mergeSort(array: number[], low: number, high: number) {
  if (low >= high) return;
  let mid: number = Math.floor((low + high) / 2);
  mergeSort(array, low, mid);
  mergeSort(array, mid + 1, high);

  merge(array, low, mid, high);
}

mergeSort(array, 0, array.length - 1);
console.log(`Sorted array: ${array}`);
