const array1 = [1, 2, 3, 4, 5, 6];
const array2 = [2, 3, 4, 5, 6, 7, 8];

// Time complexity => O(M+N)
// Space complexity => O(M+N)
function union(nums1: number[], nums2: number[]): number[] {
  const nums: Set<number> = new Set();
  for (let i = 0; i < nums1.length; i++) {
    if (!nums.has(nums1[i])) nums.add(nums1[i]);
  }
  for (let i = 0; i < nums2.length; i++) {
    if (!nums.has(nums2[i])) nums.add(nums2[i]);
  }
  return Array.from(nums);
}

console.log(union(array1, array2));
