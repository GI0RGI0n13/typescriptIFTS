/*Definire una funzione TypeScript 'tuttoInMaiuscolo(...)' che accetta come parametro un array di stringhe e
ritorna un nuovo array di stringhe che contiene tutti gli elementi di quello forniti come parametro ma con i
caratteri in maiuscolo. */

function tuttoInMaiuscolo(array1: string[]) {
    return array1.map(element => element.toUpperCase());
}
//test per vedere se funziona
let arrayProva: string[] = ["buongiorno", "buon pomeriggio", "buona sera"];
console.log(tuttoInMaiuscolo(arrayProva));



