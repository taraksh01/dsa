import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(`Factorial of ${num} is ${factorial(num)}\n`);
  process.stdout.write(`Factorial of ${num} is ${iterativeFactorial(num)}\n`);
  rl.close();
});

// Time complexity => O(N)
// Space comeplexity => O(N)
function factorial(input: number): number {
  if (input === 1) return 1;
  return input * factorial(input - 1);
}

// Time complexity => O(N)
// Space complexity => O(1)
function iterativeFactorial(input: number): number {
  let factorial: number = 1;
  for (let i = 2; i <= input; i++) {
    factorial *= i;
  }
  return factorial;
}
