/*Utilizzando il linguaggio TypeScript, si chiede di definire una funzione che accetta come primo parametro
un numero compreso tra 0 e 9 e come secondo parametro una stringa che rappresenta la lingua ('it', 'en').
La funzione deve restituisce la stringa che rappresenta il numero in lettere nella lingua fornita come
secondo parametro.
La funzione dovrà chiamarsi 'convertiInLinguaNumeroX(...)'
Esempi: - passando (0, 'it') deve restituire la stringa 'zero' - passando (1, 'it') deve restituire la stringa 'uno' -
passando (0, 'en') deve restituire la stringa 'zero' - passando (1, 'en') deve restituire la stringa 'one' ... -
passando (9, 'it') deve restituire la stringa 'nove' - passando (9, 'en') deve restituire la stringa 'nine' */

function convertiInLinguaNumeroX(numero: number, lingua: string): string {
    let numeri = {
      it: ['zero', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'],
      en: ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    };
    return numeri[lingua][numero];
  }

  
console.log(convertiInLinguaNumeroX(7, 'it'));
console.log(convertiInLinguaNumeroX(3, 'it')); 
console.log(convertiInLinguaNumeroX(9, 'en')); 
console.log(convertiInLinguaNumeroX(2, 'en')); 
console.log(convertiInLinguaNumeroX(9, 'it')); 
console.log(convertiInLinguaNumeroX(3, 'en'));

  
