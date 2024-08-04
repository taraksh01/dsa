let num: number = 5;
let names: string[] = ["rohit", "virat", "hardik", "jasprit"];
console.log("before", num, names);

function passByValue(newNumber: number) {
  num = newNumber;
  return num;
}

function passByReference(player: string) {
  names.push(player);
  return names;
}

const updatedNum = passByValue(7);
const updatedNames = passByReference("surya");
console.log("after", updatedNum, updatedNames);
