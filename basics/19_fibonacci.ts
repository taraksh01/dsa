import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  const num: number = Number(input);
  process.stdout.write(
    `Fibonacci series of first ${num}th term is ${fibonacci(num)}\n`
  );
  process.stdout.write(
    `Fibonacci of ${num}th term is ${recursiveFibonacci(num)}\n`
  );
  rl.close();
});

// Time complexity => O(N)
// Space complexity => O(N)
function fibonacci(input: number): number[] {
  let series: number[] = [1, 1];
  for (let i = 2; i < input; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series;
}

// Time complexity => O(2^N)
// Space complexity => O(1)
function recursiveFibonacci(input: number): number {
  if (input <= 1) return input;
  return recursiveFibonacci(input - 1) + recursiveFibonacci(input - 2);
}
