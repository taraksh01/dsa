const matrix = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

// Time complexity => O((N*M)(N+M))
// Space complexity => O(1)
function setZeroes(matrix: number[][]): void {
  const row: number = matrix.length;
  const column: number = matrix[0].length;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === 0) {
        markRow(matrix, row, i);
        markCol(matrix, column, j);
      }
    }
  }

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      if (matrix[i][j] === -1) matrix[i][j] = 0;
    }
  }
}

function markRow(matrix: number[][], row: number, i: number) {
  for (let j = 0; j < row; j++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

function markCol(matrix: number[][], column: number, j: number) {
  for (let i = 0; i < column; i++) {
    if (matrix[i][j] !== 0) {
      matrix[i][j] = -1;
    }
  }
}

// Time complexity => O(2*M*N)
// Space complexity => O(M+N)
function betterSetZeroes(matrix: number[][]): void {
  const rows: number = matrix.length;
  const columns: number = matrix[0].length;
  const rowArray: number[] = Array(rows).fill(0);
  const columnArray: number[] = Array(columns).fill(0);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        rowArray[i] = 1;
        columnArray[j] = 1;
      }
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (rowArray[i] || columnArray[j]) {
        matrix[i][j] = 0;
      }
    }
  }
}

setZeroes(matrix);
// betterSetZeroes(matrix);
console.log(matrix);
