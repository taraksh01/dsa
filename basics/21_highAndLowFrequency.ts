const array: number[] = [
  2, 3, 4, 2, 5, 23, 6, 3, 5, 5, 2, 5, 1, 5, 2, 4, 1, 4, 7, 22, 5, 34, 67, 132,
  67, 3, 6, 2, 32, 65, 2, 4, 54, 4, 5, 3, 4, 3, 3, 45, 2, 43,
];

// Time complexity => O(N)
// Space complexity => O(N)
function highAndLowFrequency(array: number[]): [String, number][] {
  const frequency: { [key: number]: number } = {};
  for (let i = 0; i < array.length; i++) {
    frequency[array[i]] = frequency[array[i]] + 1 || 1;
  }
  let sorted: [String, number][] = Object.entries(frequency).sort(
    (a, b) => a[1] - b[1]
  );
  return [sorted[0], sorted[sorted.length - 1]];
}

console.log(
  `High and low Frequency of array elements are ${highAndLowFrequency(array)}`
);
