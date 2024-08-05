import { createInterface } from "readline";

const rl = createInterface({ input: process.stdin, output: process.stdout });
rl.question(`Enter a string: `, (input: string) => {
  process.stdout.write(
    `${input} is ${isPalindrome(input) ? "" : "not "}a palindromic string\n`
  );
  process.stdout.write(
    `${input} is ${
      recursivePalindrome(input, 0, input.length - 1) ? "" : "not "
    }a palindromic string\n`
  );
  rl.close();
});

// Time complexity => O(N)
// Space complexity => O(1)
function isPalindrome(input: string): boolean {
  const len: number = input.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (input[i] !== input[len - i - 1]) return false;
  }
  return true;
}

// Time complexity => O(N)
// Space complexity => O(N)
function recursivePalindrome(
  input: string,
  start: number,
  end: number
): boolean {
  if (start >= end) return true;
  if (input[start] !== input[end]) return false;
  return recursivePalindrome(input, start + 1, end - 1);
}
