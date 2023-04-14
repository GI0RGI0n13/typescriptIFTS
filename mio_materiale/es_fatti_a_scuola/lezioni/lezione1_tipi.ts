//tipi in typescript
console.log("Hello World!");

function saluto(msg: string) {
  //dico a ts che mi aspetto una stinga, inserendo il tipo dopo i due punti
  console.log("Ciao " + msg);
}
saluto("Mondo"); //Funziona correttamente

//tsc lezione1.ts crea il file javascript con il codice convertito
//node lezione1.js esegue il codice

//! tipi
// Boolean
let fatto: boolean = true; //solo true o false
let fatto2 = true; //non puoi ridichiarare una variabile con un altro tipo, provandoci darà errore

//! Number
let anno: number = 2018;
// anno = "2018";

//! String
let colore: string;
colore = "rosso";
let colore2; //à errore di default, non perché lo sia, ma perché sarebbe meglio evitare di non tipizzare

//!array
let elenco: number[] = [1, 2, 3, 4]; //dichiaro il tipo di dato che ci metterò dentro. Ci potranno essere sol numeri
let elenco2: Array<number> = [1, 2, 3, 4]; //dichiaro sia la tipologia di variabile(array) che il tipo di dato. In realtà le due sintassi sono identiche
let elenco3: string[] = ["Stringa1", "Stringa3"];

//! array tupla
let indirizzo: [string, string, number]; //con questa sintassi posso inserire vari tipi di dati
indirizzo = ["Corso d'Augusto", "aaa", 2];

//! Any
let nonsaprei: any = 4; //disattivo la tipizzazione dicendogli che "nonsaprei" può essere qualsiasi cosa
nonsaprei = "pippo";
nonsaprei = true;

//! enum
enum Colore {
  Rosso,
  Giallo,
  Blu,
} //si crea un nuovo tipo, mettendoci dentro dati specifici, che saranno quelli per forza
let c: Colore = Colore.Rosso; //la variabile c è di tipo "Colore" e come valore avrà uno o più fra i dati specificati precedentemente

//esempio complesso
enum HTTPStatus { //creo "enum HTTPStatus" e ci metto dentro i valori; in questo caso i messaggi di errore
  NOT_FOUND = 404, //oltre a quello, per ogni errore, li associo ad un numero
  BAD_REQUEST = 400,
  INTERNAL_SERVER_ERROR = 500,
  NOT_PERMITTED = 403,
  NOT_AUTHENTICATED = 401,
}

let httpStatus: HTTPStatus;
httpStatus = HTTPStatus.NOT_FOUND; //qui creo una variabile e le assegno il valore interessato

console.log("httpStatus = " + httpStatus); //risultato: "httpStatus = 404"

enum HTTPStatusMessage {
  NOT_FOUND = "404 - Not Found",
  BAD_REQUEST = "400 - Bad Request",
  INTERNAL_SERVER_ERROR = "500 - Internal Server Error",
  NOT_PERMITTED = "403 - Not permitted",
  NOT_AUTHENTICATED = "401 - Not Authenticated",
}
let httpStatusMessage: HTTPStatusMessage;
httpStatusMessage = HTTPStatusMessage.NOT_FOUND; //risultato "404 not found"

//! Void
function avviso(): void {
  //inserisco un tipo di dato void
  alert("Premi OK per continuare."); //nella maggior parte dei casi si utilizzano nelle funzioni, quando non ci aspettiamo un ritorno di valore
}

//! Null
//sono tipi che non si usano, ma che servono al codice
let nonusabile1: null;
let nonusabile2: undefined = undefined;
//Sono dei “sotto-tipi”, assegnabili anche agli altri tipi!
//Diventano utili quando abbiamo bisogno di un dato vuoto, ma comunque valorizzato

//TODO   Or |
let variabileFacoltativa: string | null; //si aspetta o una stringa o un null
variabileFacoltativa = null;

let numberOrString: number | string | null; //indico il tipo di dato
numberOrString = "stringa"; //valorizzo la variabile
numberOrString = 0; //la rivalorizzo

//! Tipi personalizzati
type UserData = {
  //definisco il tipo
  id: number; //per ogni to ne indico il tipo
  name: string;
  surname?: string; //il punto interrogativo indica un dato facoltativo, Se c'è, deve esserci con lo stesso nome, altrimenti, nel caso non ci fosse, è lo stesso
};

type UserAddress = {
  address: string;
  city: string;
  state?: string;
  country: string;
};
let user1: UserData; //indico che il tipo di dato è la custom fatta prima
user1 = { id: 341235134, name: "Daniele", surname: "Arduini" }; //valorizzo i dati al suo interno

let userAddress1: UserAddress;
userAddress1 = {
 address: "via flaminia, 11",
 city: "Rimini",
 country: "Italy",
 state: "RN"
};

type User = UserData & UserAddress;


//! and &
let user1: UserData;
user1 = { id: 341235134, name: "Daniele", surname: "Arduini" };

let userAddress1: UserAddress;
userAddress1 = {
 address: "via flaminia, 11",
 city: "Rimini",
 country: "Italy",
 state: "RN"
};

let userProfile1: UserData & UserAddress;

type User = UserData & UserAddress;

let data: UserData = { id: 1, name: 'Daniele' };
let address: UserAddress =
 { address: 'via Flaminia, 12', city: 'Rimini', country: 'Italy' };

 let user: User = { id: 2, name: 'Mario', surname: 'Rossi',
 address: 'via Dante, 4', city: 'Rimini', country: 'Italy' };

//altro modo di scrivere la stessa cosa
// le interface sono "contratti" ai quali gli oggetti devono conformarsi

interface UserData {
    id: number;
    name: string;
    surname?: string;
    }
    
    interface UserAddress {
    address: string;
    city: string;
    state?: string;
    country: string;
    }
    
    interface User extends UserData, UserAddress {} //Con l'operatore 'extends' si uniscono gli attributi, quindi User contiene gli attributi di UserData e di UserAddress
    
    let data: UserData = { id: 1, name: 'Daniele' };
    
    let address: UserAddress =
    { address: 'via Flaminia, 12', city: 'Rimini', country: 'Italy' };
    
    let user: User = { id: 2, name: 'Mario', surname: 'Rossi',
    address: 'via Dante, 4', city: 'Rimini', country: 'Italy' };
