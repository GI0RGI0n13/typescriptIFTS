//! FUNZIONI IN TYPESCRIPT

//creo una funzione di somma
function somma(): () => number {
  //"somma" viene definita come una funzione che restituisce un'altra funzione, la quale a sua volta restituisce un valore di tipo number
  let numero1: number = 10;
  return function faiSomma() {
    //ritorna il risultato di quest'altra funzione
    let numero2 = numero1 + 2;
    return numero2;
  };
}
let risultato = somma(); //assegno la funzione "somma" a una variabile
console.log(risultato()); //richiamo la variabile, che ora sarà una funzione

//TODO altro esempio
function controllo(inizializzo: boolean) { //funzione che come input ha un valore di tipo booleano
  let x: number = 0; //variabile "x" con un valore di partenza di 0
  if (inizializzo) { //se "inizializzo" è true
    x = 20; //x diventa 20
  }
  return x;
}

console.log(controllo(true)); // Output: 20  perché "inizializzo" è true
console.log(controllo(false)); // Output: 0  perché "inizializzo" è false, quindi "x" è rimasta 0

//TODO altro esempio
function sommaArray(array1: number[][]) { //funzione che come input ha un array multidimensionale, con al suo interno dei numeri
    let sum: number = 0; //la somma di partenza è 0
    for (let index = 0; index < array1.length; index++) { //scorro su tutta la lunghezza dell'array contenitore
        let SottoArray = array1[index]; //e metto il risultato dentro questa variabile
        for (let index = 0; index < SottoArray.length; index++) { //poi scorro su tutti i sottoarray
            sum += SottoArray[index]; //e sommo il loro valore a "sum"    
        }
    }
    return sum; //infine ritorno il risultato
}
let myArray: number[][] = [[1, 2, 3], [4, 5], [6, 7, 8, 9]]; //creo l'array multidimensionale di numeri
console.log(sommaArray(myArray)); //output: 45

//! TRY e CATCH
/*Il blocco try e catch viene utilizzato in programmazione per gestire le eccezioni (o gli errori) che possono verificarsi
durante l'esecuzione di un programma.
In questo esempio, la funzione "divide" tenta di dividere il primo parametro a per il secondo parametro b.
Tuttavia, se b è uguale a 0, si verificherà un'eccezione di divisione per zero, che interromperà l'esecuzione del programma.
Per evitare l'interruzione, viene utilizzato un blocco try e catch per gestire l'eccezione.
Nel blocco try, viene tentata la divisione e nel caso si verificasse un'eccezione, essa verrebbe catturata e gestita nel blocco catch,
dove viene visualizzato un messaggio di errore e viene restituito il valore 0.
In questo modo, anche se la divisione per zero genera un'eccezione, il programma non si interrompe e viene visualizzato un messaggio
di errore comprensibile.*/

function divide(a: number, b: number): number {
  try {
    // tenta di dividere a per b
    return a / b;
  } catch (e) {
    // gestisce l'eccezione se si verifica un errore durante la divisione
    console.log("Si è verificato un errore durante la divisione.");
    return 0;
  }
}
console.log(divide(10, 0)); // Output: Si è verificato un errore durante la divisione. 0









