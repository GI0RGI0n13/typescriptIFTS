/*Definire una funzione TypeScript 'unisciArray(...)' che accetta come parametri 2 array di interi e ritorna un
unico array di interi che contiene tutti gli elementi di quelli forniti come parametro. */

//creo la mia funzione usando il metodo concat
function unisciArray(array1: number[], array2: number[]) {
    let arrayFusion: number[] = array1.concat(array2);
    return arrayFusion;
}
//prove per vedere se funziona
let n1: number [] = [2,4,6,2,7,9];
let n2: number [] = [33,5,7,2,8,1];
console.log(unisciArray(n1, n2));








