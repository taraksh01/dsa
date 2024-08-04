import { createInterface } from "node:readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`What is your name? `, (name: string) => {
  process.stdout.write(`Namaste ${name}! \n`);
  rl.close();
});
