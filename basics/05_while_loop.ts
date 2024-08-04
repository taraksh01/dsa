const players: string[] = [
  "rohit",
  "virat",
  "rishabh",
  "surya",
  "axar",
  "shivam",
  "hardik",
  "ravindra",
  "kuldeep",
  "jasprit",
  "arshdip",
];

const len: number = players.length;
let current: number = 0;
while (current < len) {
  console.log(`${players[current]} was one of the player.`);
  current++;
}
