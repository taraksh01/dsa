import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(`Sum of first ${num} numbers is ${sumOfFirstN(num)}\n`);
  rl.close();
});

// Time complexity => O(N)
// Spaace complexity => O(1)
function sumOfFirstN(input: number): number {
  if (input <= 0) return 0;
  return input + sumOfFirstN(input - 1);
}
