import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input1: string) => {
  rl.question(`Enter another number: `, (input2: string) => {
    const num1: number = Number(input1);
    const num2: number = Number(input2);
    process.stdout.write(`HCF of ${num1} and ${num2} is ${hcf(num1, num2)}\n`);
    process.stdout.write(
      `HCF of ${num1} and ${num2} is ${betterHcf(num1, num2)}\n`
    );
    process.stdout.write(
      `HCF of ${num1} and ${num2} is ${optimalHcf(num1, num2)}\n`
    );
    rl.close();
  });
});

// Time complexity => O(min(input))
// Space complexity => O(1)
function hcf(input1: number, input2: number): number {
  let hcf: number = 1;
  for (let i = 1; i <= Math.min(input1, input2); i++) {
    if (input1 % i === 0 && input2 % i === 0) hcf = i;
  }
  return hcf;
}

// Time complexity => O(min(input))
// Space complexity => O(1)
function betterHcf(input1: number, input2: number): number {
  let hcf: number = 1;
  for (let i = Math.min(input1, input2); i > 0; i--) {
    if (input1 % i === 0 && input2 % i === 0) {
      hcf = i;
      return hcf;
    }
  }
  return hcf;
}

// Time complexity => O(min(input))
// Space complexity => O(1)
function optimalHcf(input1: number, input2: number): number {
  const larger = Math.max(input1, input2);
  const smaller = Math.min(input1, input2);
  if (input1 === 0) return input2;
  else if (input2 === 0) return input1;
  else return optimalHcf(larger - smaller, smaller);
}
