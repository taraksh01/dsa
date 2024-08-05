const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Time complexity => O(N)
// Space complexity => O(N)
function reverseArray(array: number[]): number[] {
  let reverse: number[] = [];
  for (let i = array.length - 1; i >= 0; i--) reverse.push(array[i]);
  return reverse;
}

// Time complexity => O(N)
// Space complexity => O(1)
function betterReverse(array: number[]): number[] {
  let len: number = array.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    let temp: number = array[i];
    array[i] = array[len - i - 1];
    array[len - i - 1] = temp;
  }
  return array;
}

console.log(`Reverse of ${array} is ${reverseArray(array)}`);
console.log(`Reverse of ${array} is ${betterReverse(array)}`);
