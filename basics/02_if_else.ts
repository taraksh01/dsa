import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a number: `, (input: string) => {
  let num: number = Number(input);
  if (num >= 0) {
    process.stdout.write(`You entered a positive number.\n`);
  } else if (num < 0) {
    process.stdout.write(`You entered a negative number.\n`);
  } else {
    process.stdout.write(`You entered an invalid number.\n`);
  }
  rl.close();
});
