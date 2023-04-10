/*In TypeScript, le funzioni anonime sono funzioni che non hanno un nome e vengono definite inline,
all'interno di un'altra espressione o istruzione.
Sono comunemente usate come callback o gestori di eventi.*/

let greeting = function (name: string) {
  console.log("Ciao " + name);
};
greeting("Mondo"); // Output: Ciao, Mondo!


let numbers = [1, 2, 3, 4, 5];
let squaredNumbers = numbers.map(function (num) {
  return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]
