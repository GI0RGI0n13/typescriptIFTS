//ecco il codice di importazione della classe

  import { CounterX } from "./classi";

  console.log(CounterX.count); // Output: 0
  
  let counterx1 = new CounterX();
  console.log(CounterX.count); // Output: 1
  
  let counterX2 = new CounterX();
  console.log(CounterX.count); // Output: 2
  