const array: number[] = [
  2, 3, 4, 2, 5, 23, 6, 3, 5, 5, 2, 5, 1, 5, 2, 4, 1, 4, 7, 22, 5, 34, 67, 132,
  67, 3, 6, 2, 32, 65, 2, 4, 54, 4, 5, 3, 4, 3, 3, 45, 2, 43,
];

function arrayFrequency(array: number[]): [string, number][] {
  const frequency: { [key: number]: number } = {};
  for (let i = 0; i < array.length; i++) {
    frequency[array[i]] = frequency[array[i]] + 1 || 1;
  }
  return Object.entries(frequency);
}

console.log(`Frequency of array elements are ${arrayFrequency(array)}`);
