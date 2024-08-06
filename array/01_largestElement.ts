const array = [23, 7, 3, 89, 34, 652, 25, 37, 2];

// Time complexity => O(N)
// Space complexity => O(1)
function findLargest(array: number[]): number {
  let largest: number = array[0];
  array.forEach((item) => {
    if (item > largest) {
      largest = item;
    }
  });
  return largest;
}

console.log(`Largest element is ${findLargest(array)}`);
