const array = [23, 7, 3, 89, 34, 652, 25, 37, 2];

// Time complexity => O(N)
// Space complexity => O(1)
function secondSmallestAndLargestElement(array: number[]): number[] {
  let largest: number = array[0];
  let secondLargest: number = -1;
  let smallest: number = array[0];
  let secondSmallest: number = -1;
  array.forEach((item) => {
    if (item > largest) {
      secondLargest = largest;
      largest = item;
    } else if (item < smallest) {
      secondSmallest = smallest;
      smallest = item;
    }
  });
  return [secondSmallest, secondLargest];
}

console.log(
  `Second smallest and  largest elements are ${secondSmallestAndLargestElement(
    array
  )}`
);
