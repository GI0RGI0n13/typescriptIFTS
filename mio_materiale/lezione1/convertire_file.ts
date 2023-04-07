/*Per convertire i file da ts a js, dopo aver installato node.js, bisogna usare i comandi:
- tsc nomefile.ts     crea, sempre nella stessa cartella, lo stesso file ma convertito in js
- node nomefile.js    esegue il codice*/


function saluto(messaggio: string) { //nell'input specifico il tipo dopo i due punti
  console.log("Ciao " + messaggio);
}
saluto("Mondo"); //output: Ciao Mondo
