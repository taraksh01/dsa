import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter an interger value: `, (input: string) => {
  let num = Number(input);
  process.stdout.write(`There are ${countDigit(num)} digits in ${num}\n`);
  process.stdout.write(
    `There are ${countDigitOptimal(num)} digits in ${num}\n`
  );
  rl.close();
});

// Time complexity => O(N)
// Space complextiy => O(1)
function countDigit(input: number): number {
  let digits: number = 0;
  while (input > 0) {
    digits++;
    input = Math.floor(input / 10);
  }
  return digits;
}

// Time complexity => O1)
// Space complextiy => O(1)
function countDigitOptimal(input: number): number {
  return Math.floor(Math.log10(input) + 1);
}
