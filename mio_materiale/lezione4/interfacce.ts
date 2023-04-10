/*Le interfacce in TypeScript sono un meccanismo per definire una struttura comune per gli oggetti,
senza implementare alcuna logica.
In altre parole, un'interfaccia definisce i membri che un oggetto deve avere, ma non definisce il comportamento
di quei membri.
In TypeScript, le interfacce vengono utilizzate principalmente per dichiarare i tipi di variabili, parametri e valori
di ritorno delle funzioni.
Quando si definisce un'interfaccia, si specificano i membri che un oggetto deve avere per essere considerato 
compatibile con quell'interfaccia.
Gli oggetti che implementano l'interfaccia devono avere tutti i membri definiti nell'interfaccia e devono essere
del tipo specificato per ciascun membro.

Ecco un esempio di definizione di un'interfaccia: */

interface User { //interfaccia con dati al suo interno
    name: string;
    age: number;
    email: string;
  }


  //funzione che mi mostra i dati inseriti
  function printUserInfo(user: User) { //tipizzo l'output specificando che è di tipo "User"
    console.log("Name: " + user.name);
    console.log("Age: " + user.age);
    console.log("Email: " + user.email);
  }
  
  let user1 = { name: "Alice", age: 30, email: "alice@example.com" };
  printUserInfo(user1);
  
  let user2 = { name: "Bob", age: 25}; // Error: 'email' is missing
  printUserInfo(user2);
  

//! INTERFACCE INSIEME ALLE CLASSI
//implemento l'interfaccia creata prima, in questa classe
/*in questo caso l'interfaccia funge da controllo dei tipi, definendo la struttura della classe. Se nella classe provassi
a scrivere dei tipi che non sono presenti nell'interfaccia, il compilatore darebbe errore*/

class UserAccount implements User {
    constructor(public name: string, public age: number, public email: string) {}
  }
  
  let userX = new UserAccount("Alice", 30, "alice@example.com");
  console.log(userX.name); // Output: "Alice"
  console.log(userX.age); // Output: 30
  console.log(userX.email); // Output: "alice@example.com"