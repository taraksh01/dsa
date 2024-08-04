import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
// pattern1(5)
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function pattern1(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      process.stdout.write("*");
    }
    process.stdout.write("\n");
  }
}

// pattern2(5)
// *
// * *
// * * *
// * * * *
// * * * * *

function pattern2(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      process.stdout.write(`* `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern3(5)
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern3(n: number) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern4(5)
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function pattern4(n: number) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${i} `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern5(5)
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern5(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write(`* `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern6(6)
// 1 1 1 1 1
// 2 2 2 2
// 3 3 3
// 4 4
// 5

function pattern6(n: number) {
  for (let i = 1; i < n; i++) {
    for (let j = n; j > i; j--) {
      process.stdout.write(`${i} `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern7(6);
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

function pattern7(n: number) {
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < n - i + 1; j++) {
      process.stdout.write(`${j} `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern8(5);
//         *
//       * * *
//     * * * * *
//   * * * * * * *
// * * * * * * * * *

function pattern8(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      process.stdout.write(`  `);
    }
    for (let j = 0; j < 2 * i + 1; j++) {
      process.stdout.write(`* `);
    }
    process.stdout.write(`\n`);
  }
}

// pattern9(5);
// * * * * * * * * *
//   * * * * * * *
//     * * * * *
//       * * *
//         *

function pattern9(n: number) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`  `);
    }
    for (let j = 0; j < 2 * n - 1 - 2 * i; j++) {
      process.stdout.write(`* `);
    }
    process.stdout.write(`\n`);
  }
}

pattern10(5);
function pattern10(n: number) {
  for (let i = 0; i <= 2 * n - 1; i++) {
    let spaces: number = n - i - 1;
    let stars: number = 2 * i + 1;
    // if (i > n) {
    //   spaces = 2 * n - i;
    //   stars = 2 * n - 2 * i - 1;
    // }
    if (i <= n) {
      for (let j = 0; j < spaces; j++) {
        process.stdout.write(`  `);
      }
      for (let j = 0; j < stars; j++) {
        process.stdout.write(`* `);
      }
    }
    process.stdout.write(`\n`);
  }
}

// pattern11(5);
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

function pattern11(n: number) {
  for (let i = 0; i <= 2 * n - 1; i++) {
    let stars: number = i;
    if (i > n) stars = 2 * n - i;
    for (let i = 0; i < stars; i++) {
      process.stdout.write(`* `);
    }
    process.stdout.write(`\n`);
  }
}

rl.close();
