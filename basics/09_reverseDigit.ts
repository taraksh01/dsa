import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(`The reverse of ${num} is ${reverseDigit(num)}\n`);
  rl.close();
});

// Time complexity => O(log(N))
// Space complexity => O(1)
function reverseDigit(input: number): number {
  let reverse: number = 0;
  while (input > 0) {
    reverse = reverse * 10 + (input % 10);
    input = Math.floor(input / 10);
  }
  return reverse;
}
