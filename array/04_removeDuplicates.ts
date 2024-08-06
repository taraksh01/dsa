const array = [1, 1, 2, 3, 3, 5, 22, 45, 45, 66, 66, 72, 72];

// Time complexity => O(N*N)
// Space complexity => O(1)
function removeDuplicates(array: number[]): number {
  let len: number = array.length;
  let j: number = 0;
  while (j < len && array[j] <= array[j + 1]) {
    if (array[j] === array[j + 1]) {
      for (let i = j + 1; i < len - 1; i++) {
        let temp: number = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
      len--;
    }
    j++;
  }
  return j;
}

// Time complexity => O(N)
// Space complexity => O(N)
function betterRemoveDuplicates(array: number[]): number {
  const set: Set<number> = new Set(array);
  let uniqueArray: number[] = Array.from(set);
  let len: number = uniqueArray.length;
  for (let i = 0; i < len; i++) {
    array[i] = uniqueArray[i];
  }
  return len;
}

// Time complexity => O(N)
// Space complexity => O(1)
function optimisedRemoveDuplicates(array: number[]): number {
  let i: number = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] !== array[j]) {
      i++;
      array[i] = array[j];
    }
  }
  return i + 1;
}

// removeDuplicates(array);
// betterRemoveDuplicates(array);
optimisedRemoveDuplicates(array);
console.log(`Sorted array withoud duplicates ${array}`);
