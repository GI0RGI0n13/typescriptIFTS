/*In TypeScript, i decorators sono una funzionalità del linguaggio che permette di aggiungere metadata a classi,
metodi, proprietà o parametri di funzioni.
Un decorator è una funzione che riceve come argomento la definizione di una classe o di una funzione,
e ne modifica il comportamento o ne arricchisce le proprietà aggiungendo metadati. */

//funzione "modifica" che poi userò per aggiungere un pezzo di stringa a un'altra classe
function modifica(target: any, key: string) { //"target" è la classe da modificare, "key" è il metodo da modificare
    console.log("Ciao Mondo! "); //scrivo il testo che voglio aggiungere
  }
  
//ora creo la classe Example
  class Example {
    @modifica  //uso la chiocciola per richiamare la funzione "modifica"
    hello() {
      console.log("Hello, world!");
    }
  }
  
  let esempio = new Example();
  esempio.hello(); // output: Ciao Mondo! Hello, world!
  