const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

// Time complexity => O(N*N+N)
// Space complexity => O(1)
function rotate(matrix: number[][]): void {
  const len: number = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < i; j++) {
      let temp: number = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let i = 0; i < len; i++) {
    matrix[i].reverse();
  }
}

rotate(matrix);
console.log(matrix);
