const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Time complexity => O(M+N)
// Space complexity => O(1)
function spiralOrder(matrix: number[][]): number[] {
  let left: number = 0;
  let right: number = matrix.length - 1;
  let top: number = 0;
  let bottom: number = matrix[0].length - 1;
  const result: number[] = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      result.push(matrix[i][right]);
    }
    right--;
    for (let i = right; i >= left; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
}

console.log(spiralOrder(matrix));
