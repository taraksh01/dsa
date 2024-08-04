const superheros: string[] = ["shaktiman", "batman", "ironman"];

for (let i = 0; i < superheros.length; i++) {
  console.log(`${superheros[i]} is a superhero`);
}

superheros.forEach((hero: string) => {
  console.log(`${hero} is a superhero.`);
});

for (let hero of superheros) {
  console.log(`${hero} is a superhero.`);
}
