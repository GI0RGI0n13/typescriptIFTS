//! I TIPI IN TYPESCRIPT

//! Boolean
let varBoolean1: boolean = true; //solo "true" o "false"
let varBoolean1: number = 34; //non puoi ridichiarare la stessa variabile, una volta dichiarata, con un tipo diverso

//! Number
let numero1: number = 10;
numero1 = 3; //posso richiamare la variabile dichiarata in precedenza e riassegnarle un altro valore, purché sia dello stesso tipo

//! String
let colore1: string; //posso dichiarare variabili anche senza dar loro un valore, purché si specifichi il tipo
colore1 = "rosso"; //posso assegnarle un valore successivamente
let colore2; //dà errore di default, non perché lo sia, ma perché la variabile non è stata tipizzata

//! Array
let elencoX: number[] = [1, 2, 3, 4]; //array con solo numeri
let elencoY: Array<number> = [1, 2, 3, 4]; //altra sintassi per dichiarare un array di numeri
let elencoZ: string[] = ["Stringa1", "Stringa3"]; //array di stringhe
let elencoC: boolean[] = [true, false]; //array di booleani

//! Array di tuple
let indirizzo1: [string, string, number]; //inserendo diversi tipi, posso creare un array con valori di tipi diversi
indirizzo1 = ["Corso d'Augusto", "Roma", 2];

//! Any
let nonSaprei: any = 4; //disattivo la tipizzazione dicendogli che "nonsaprei" può essere qualsiasi cosa
nonSaprei = "Messaggio qualsiasi";
nonSaprei = true; //è sconsigliato, perché a 'sto punto che cazzo usi typescript, usa javascript se devi fare così

//! Enum
enum ColoriPreferiti { //creo un nuovo tipo, mettendoci dentro dati specifici
    Rosso,
    Giallo,
    Blu,
}
//la variabile "listaColori" sarà di tipo "ColoriPreferiti" e avrà al suo interno uno o più valori dichiarati prima
let listaColori: ColoriPreferiti =
    ColoriPreferiti.Rosso | ColoriPreferiti.Giallo; // "|" si usa per più valori

//TODO esempio più complesso
enum HTTPStatus1 { //creo "HTTPStatus" e ci metto dentro i dati; in questo caso i messaggi di errore
    NOT_FOUND = 404, //assegno ad ogni dato, un relativo errore
    BAD_REQUEST = 400,
    INTERNAL_SERVER_ERROR = 500,
    NOT_PERMITTED = 403,
    NOT_AUTHENTICATED = 401,
}

let statoDiRete: HTTPStatus1; //creo la variabile "statoDiRete" e la tipizzo con l'enum appena creato
statoDiRete = HTTPStatus1.NOT_FOUND; //richiamo la variabile e le assegno uno dei valori dichiarati nell'enum
console.log("httpStatus = " + statoDiRete); //output: "httpStatus = 404"

//TODO altro esempio
enum HTTPStatusMessage1 { //altro enum, con stavolta dei dati che racchiudono stringhe
    NOT_FOUND = "404 - Not Found",
    BAD_REQUEST = "400 - Bad Request",
    INTERNAL_SERVER_ERROR = "500 - Internal Server Error",
    NOT_PERMITTED = "403 - Not permitted",
    NOT_AUTHENTICATED = "401 - Not Authenticated",
}
let httpStatusMessage1: HTTPStatusMessage1;
httpStatusMessage1 = HTTPStatusMessage1.NOT_FOUND;
console.log("httpStatus = " + httpStatusMessage1); //output: httpStatus = 404 - Not Found

//! Void
function avviso(): void {   //"void", si usa quando in una funzione non c'è il return per il ritorno di un valore
    alert("Premi OK per continuare.");
}

//! Null
//sono tipi che non si usano, ma che servono al codice
let nonUsabile1: null;
let nonUsabile2: undefined = undefined;
/*Sono dei “sotto-tipi”, che diventano utili quando abbiamo bisogno di un dato vuoto, ma comunque valorizzato
e possono essere concatenati anche ad altri tipi usando Or "!"   */
let variabileX: string | null; //si aspetta o una stringa o un null
variabileX = null;
variabileX = "ciao";

//! Tipi personalizzati
type UserData1 = {     //creo un nuovo tipo di dato chiamato "UserData"
    id: number;       //per ogni dato ne indico il tipo
    name: string;
    surname?: string; //il punto interrogativo indica un dato facoltativo
  };
  
  type UserAddress1 = {
    address: string;
    city: string;
    state?: string;
    country: string;
  };
  let giorgioData: UserData1; //la variabile "giorgioData" sarà di tipo "userData1"
  giorgioData = { id: 341235134, name: "Giorgio", surname: "Stocaz" }; //valorizzo i dati al suo interno, in base al tipo
  
  let giorgioAddress: UserAddress1; //"giorgioAddress" sarà di tipo "UserAddress1"
  giorgioAddress = {
   address: "via flaminia, 11",
   city: "Rimini",
   country: "Italy",
   state: "RN"
  };  

//!  and "&"
let daniele: UserData1; //daniele è di tipo "UserData1", (creata prima)
daniele = { id: 341235134, name: "Daniele", surname: "Arduini" };

let danieleAddress: UserAddress1; //danieleAddress è di tipo UserAddress1
danieleAddress = {
 address: "via flaminia, 11",
 city: "Rimini",
 country: "Italy",
 state: "RN"
};

let danieleProfile1: UserData1 & UserAddress1; //danieleProfile1 combinerà i due tipi creati precedentemente
