class Person {      //nuova classe, chiamata "Person"
  name: string;     //il dato "name" è pubblico e accessibile dall'esterno
  private type: string;   //il dato "type" è privato 
  protected age: number = 27;   //il dato "age" è protetto 
 
  constructor(name: string, public username: string) { //construttore con nome e username
    this.name = name;  //il nome nel costruttore, sarà quello dichiarato nei dati sopra
  }
}
//TODO il costruttore consente, come nell'esempio, di definire proprietà. Quindi potremo usare lì gli attributi "public", "private", "protected"

let persona1 = new Person("Massimo", "Max"); //nuovo oggetto che usa il costruttore per inserire il nome e il soprannome
console.log(persona1);

// !EREDITARIETA'
class UtMassimo extends Person { //sottoclasse che estende "Person"
  constructor (username: string) {  //il nuovo username
    super("Massimo2", username);  //con "super" accedo al costruttore di "Person", specificando un nome diverso
    this.age = 32; //gli specifico la nuova età
  }
}
let persona2 = new UtMassimo("Max2"); //nuovo oggetto che in input avrà l'username
console.log(persona2);
//TODO l'esempio appena fatto è un po' uno schifo, i prof fanno degli esempi del cazzo, ci ho messo mezz'ora a capirlo porcodio

//! GETTERS E SETTERS
//Sono funzioni che servono ad accedere alle proprietà “private” e “protected”
class Pianta {
  private _tipologia: string = "Gimnosperme" //l'underscore si usa se un dato è privato e dobbiamo accederci con i getters

  get tipologia() {  //con il getter, ottengo il risultato di "tipologia", in questo caso "Gimnosperme"
    return this.tipologia;
  }

  set tipologia(value: string) {  //con il setter posso modificare "tipologia"
    if (value.length > 3) {  //se la lunghezza del valore inserito è maggiore di 3
      this._tipologia = value;  //"tipologia" avrà il valore inserito
    }else {
      this._tipologia = "Gimnosperme" //altrimenti sarà Gimnsosperme
    }
  }
}
let pianta1 = new Pianta();

console.log(pianta1.tipologia); //output: "Gimnosperme"

pianta1.tipologia = "AB"; //modifico il valore di "tipologia" con il setter, mettendoci un valore di 2 lettere
console.log(pianta1.tipologia); //output: "Gimnosperme"

pianta1.tipologia = "Angiosperme"; //modifico il valore con una stringa più lunga di 3 lettere, quindi il setter parte
console.log(pianta1.tipologia); //output: Angiosperme

//! METODI e PROPRIETA' "static"
/* Sono elementi che appartengono alla classe stessa anziché alle istanze della classe.
Un metodo statico è un metodo che può essere richiamato direttamente sulla classe stessa, senza la necessità di
creare un'istanza della classe. (oggetto)*/
class Person1 { 
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayHello() {  //metodo di istanza
    console.log("Hello, my name is " + this.name);
  }

  static sayHi() {  //metodo statico
    console.log("Hi!");
  }
}
/*Il metodo sayHello è un metodo di istanza, il quale significa che deve essere richiamato su un'istanza della
classe Person. Bisogna obbligatoriamente creare un oggetto per richiamarlo.*/
let personaX = new Person1("John");
personaX.sayHello(); // Output: "Hello, my name is John"

/*Al contrario, il metodo sayHi è un metodo statico, il quale può essere richiamato sulla classe stessa: */
Person1.sayHi(); // Output: "Hi!"

//TODO Ad esempio, si può avere la seguente classe Counter che tiene traccia del numero di istanze create della classe:
class Counter {
  static count: number = 0;

  constructor() {
    Counter.count++;
  }
}
console.log(Counter.count); // Output: 0

let counter1 = new Counter();
console.log(Counter.count); // Output: 1

let counter2 = new Counter();
console.log(Counter.count); // Output: 2




//! MODULI
/*- Meccanismo per organizzare un’applicazione in maniera “modulare”
  - Suddivisione del codice in più files
  - Richiede un “module loader”
  - Miglioramento rispetto alla gestione dei JavaScript Namespace
  - Dichiarazione esplicita delle dipendenze */

//Se vogliamo esportare una classe, per prima cosa bisogna porre davanti alla classe: "export"
export class CounterX {
  static count: number = 0;

  constructor() {
    CounterX.count++;
  }
}
//poi, nel nuovo file, scrivere il codice di import ----> si trova nel file "moduli.ts"










