import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(
    `${num} is ${isPalindrome(num) ? "" : "not "}a palindromic number\n`
  );
  rl.close();
});

function isPalindrome(input: number): boolean {
  const temp: number = input;
  let reverse: number = 0;
  while (input > 0) {
    reverse = reverse * 10 + (input % 10);
    input = Math.floor(input / 10);
  }
  return reverse === temp;
}
