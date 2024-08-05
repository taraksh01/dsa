import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(
    `${num} is ${isArmstrong(num) ? "" : "not "}a armstrong number.\n`
  );
  rl.close();
});

// Time complexity => O(log(N))
// Space complexity => O(1)
function isArmstrong(input: number): boolean {
  let temp: number = input;
  let sum: number = 0;
  const digits = Math.floor(Math.log10(input) + 1);
  while (temp > 0) {
    sum += (temp % 10) ** digits;
    temp = Math.floor(temp / 10);
  }
  return sum === input;
}
