import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(`Divisors of ${num} are ${allDivisors(num)}\n`);
  process.stdout.write(`Divisors of ${num} are ${optimalDivisors(num)}\n`);
  rl.close();
});

// Time complexity => O(N)
// Space complexity => O(N)
function allDivisors(input: number): number[] {
  let divisors: number[] = [];
  for (let i = 1; i <= input; i++) {
    if (input % i === 0) divisors.push(i);
  }
  return divisors;
}

// Time complexity => O(sqrt(N))
// Space complexity => O(sqrt(N))
function optimalDivisors(input: number): number[] {
  let divisors: number[] = [];
  for (let i = 1; i <= Math.sqrt(input); i++) {
    if (input % i === 0) {
      divisors.push(i);
      if (input / i !== i) divisors.push(input / i);
    }
  }
  return divisors;
}
