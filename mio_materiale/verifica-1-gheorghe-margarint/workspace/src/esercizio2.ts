/* A. Definire una classe TypeScript 'Accumulatore' che rappresenta la carica di una batteria tramite un valore
numerico da 0 a 5000. La classe ha i seguenti metodi:
carica(n) aumenta la carica per un valore n
scarica(n) diminuisce la carica per un valore n
livello() fornisce il livello della batteria in formato numerico tra 0 e 5000
livello100() fornisce il livello corrente della carica in % del valore massimo
B. Rendere parametrizzabile il valore 5000 all'inizializzazione della classe */
class Accumulatore {
    constructor(public caricaMassima: number = 5000, public carica: number = 0) {}
  
    ricarica(n: number): void {
      this.carica = Math.min(this.carica + n, this.caricaMassima);
    }
  
    scarica(n: number): void {
      this.carica = Math.max(this.carica - n, 0);
    }
  
    livello(): number {
      return this.carica;
    }
  
    livello100(): number {
      return (this.carica / this.caricaMassima) * 100;
    }
  }

  let batteria1 = new Accumulatore();

  //test ricarica
  batteria1.ricarica(2000);
  console.log(batteria1.carica); //2000

  //test scarica
  batteria1.scarica(500);
  console.log(batteria1.carica); //1500

  //test livello
  console.log(batteria1.livello()) //1500

  //test livello100
  console.log(batteria1.livello100()) //30


  

  