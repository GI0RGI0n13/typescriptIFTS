/*In TypeScript, le "promise" sono oggetti che rappresentano il completamento (o il fallimento) eventuali di un'operazione
asincrona e ti permettono di gestire il risultato quando diventa disponibile.
Rappresentano lo standard per la programmazione asincrona in JavaScript

- resolved: Una promise è risolta quando il valore che rappresenta diviene disponibile, cioè quando l’attività
asincrona restituisce un valore

- rejected: Una promise è rigettata quando l’attività asincrona associata non restituisce un valore o perché
si è verificata un’eccezione oppure perché il valore restituito non è considerato valido

- pending: Una promise è pendente quando non è né risolta né rigettata, cioè la richiesta di esecuzione di un’attività
asincrona è partita ma non abbiamo ancora ricevuto un risultato*/

function sayHello(name: string): Promise<string> {
    return Promise.resolve("Ciao " + name);
  }
  
  sayHello("Mario")
    .then(result => console.log(result))
    .catch(error => console.error(error));
  
