const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Time complexity => O(N)
// Space complexity => O(1)
function leftRotate(array: number[]): void {
  const left: number = array[0];
  const len: number = array.length;
  for (let i = 0; i < len - 1; i++) {
    let temp: number = array[i];
    array[i] = array[i + 1];
    array[i + 1] = temp;
  }
  array[len - 1] = left;
}

leftRotate(array);
console.log(`After left rotate: ${array}`);
