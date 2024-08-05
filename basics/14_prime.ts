import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(
    `${num} is ${isPrime(num) ? "" : "not "}a prime number.\n`
  );
  process.stdout.write(
    `${num} is ${optimalIsPrime(num) ? "" : "not "}a prime number.\n`
  );
  rl.close();
});

// Time complexity => O(N)
// Space complexity => O(1)
function isPrime(input: number): boolean {
  for (let i = 2; i < input; i++) {
    if (input % i === 0) return false;
  }
  return true;
}

// Time complexity => O(sqrt(N))
// Space complexity => O(1)
function optimalIsPrime(input: number): boolean {
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (input % i === 0) return false;
  }
  return true;
}
