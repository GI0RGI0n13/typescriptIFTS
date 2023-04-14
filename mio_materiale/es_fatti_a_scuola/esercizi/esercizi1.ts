//! ESERCIZIO 1
/*Definisci un'interfaccia per rappresentare una persona con le seguenti proprietà: 
nome (stringa), età (numero) e indirizzo (oggetto con proprietà strada, città e stato).
Crea una funzione che accetta un'istanza di questa interfaccia come parametro e stampa le proprietà della
persona.*/

interface Persona {
  nome: string;
  eta: number;
  indirizzo: {
    strada: string;
    citta: string;
    stato: string;
  };
}

let persona1: Persona = {
  //Oggetto
  nome: "Luca",
  eta: 20,
  indirizzo: { strada: "Via Brombeis", citta: "Rimini", stato: "Italia" },
};

//Funzione per stampare i dati dell'oggetto
function stampaPersona(p: Persona): void {
  //p sta per parametro, rappresenta la variabile che contiene i dati
  console.log(p);
}

stampaPersona(persona1);

//Funzione che stampa solo l'indirizzo
function stampaIndirizzo(p: Persona): void {
  console.log("Indirizzo di " + p.nome + " è: ");
  console.log(p.indirizzo.strada);
  console.log(p.indirizzo.citta);
  console.log(p.indirizzo.stato);
}

stampaIndirizzo(persona1);

/*
interface Persona {
    nome: string;
    eta: number;

    indirizzo: {
        starda: string;
        citta: string;
        stato: string;
    };


    indirizzoLavoro?: { //TODO    Se volessi avere due indirizzi potrei fare così, oppure
        strada: string;
        citta: string;
        stato: string;
    };

}



interface Indirizzo {   //TODO    Così è ancora meglio, creo un'altra interfaccia solo per l'indirizzo
    strada: string;
    citta: string;    
    stato: string;
};

interface Persona {
    nome: string;
    eta: number;
    indirizzo: Indirizzo;   //TODO     e poi richiamo l'interfaccia di sopra
    indirizzoLavoro?: Indirizzo;
}  */

//! ESERCIZIO 2
/* Crea un tipo di dato enum per rappresentare i giorni della settimana. Scrivi una funzione che accetta un
giorno della settimana come parametro e stampa un messaggio di saluto appropriato in base al giorno.
*/

//enum contiene i giorni della settimana
enum Settimana {
  Lunedi,
  Martedi,
  Mercoledi,
  Giovedi,
  Venerdi,
  Sabato,
  Domenica,
}

//funzione che mi stampa i giorni della settimana
function stampaSalutoQuotidiano(g: Settimana): void {
  // uso una serie di if per determinare il giorno

  if (g == Settimana.Lunedi) {
    console.log("Buongiorno è lunedì");
  } else if (g == Settimana.Martedi) {
    console.log("Buongiorno è martedì");
  } else if (g == Settimana.Mercoledi) {
    console.log("Buongiorno è mercoledi");
  } else if (g == Settimana.Giovedi) {
    console.log("Buongiorno è giovedì");
  } else if (g == Settimana.Venerdi) {
    console.log("Grazie a dio è venerdì");
  } else if (g == Settimana.Sabato) {
    console.log("Buongiorno è sabato");
  } else {
    console.log("Buongiorno è domenica");
  }
}

let giorno1 = Settimana.Venerdi;
stampaSalutoQuotidiano(giorno1);

/**giorno1 ti stampa l'indice numerico di enum (4) di default, altrimenti puoi
 * associare ad un elemento di enum una stringa*/
console.log("giorno1 è: ", giorno1);

//se vogliamo stampare il giorno, dobbiamo fare così:
enum Settimana2 {
  Lunedi = "lunedì",
  Martedi = "martedì",
  Mercoledi = "mercoledì",
  Giovedi = "giovedì",
  Venerdi = "venerdì",
  Sabato = "sabato",
  Domenica = "domenica",
}
console.log("giorno1 è: ", giorno1);

/* STESSO ESERCIZIO CON LO SWITCH
function stampaSalutoGiornoConSwitch(g: Settimana): void {
    switch (g) {
        case Settimana.Lunedi:
            console.log("è " + Settimana.Lunedi);
            break;
        case Settimana.Martedi:
            console.log("è " + Settimana.Martedi);
            break;
        case Settimana.Mercoledi:
            console.log("è " + Settimana.Mercoledi);
            break;
        case Settimana.Giovedi:
            console.log("è " + Settimana.Giovedi);
            break;
        case Settimana.Venerdi:
            console.log("è " + Settimana.Venerdi);
            break;
        case Settimana.Sabato:
            console.log("è " + Settimana.Sabato);
            break;
        case Settimana.Domenica:
            console.log("è " + Settimana.Domenica);
            break;
    }
}

stampaSalutoGiornoConSwitch(giorno1); */

//! ESERCIZIO 3
/*Crea un'interfaccia per rappresentare un prodotto con le seguenti proprietà: nome (stringa),
prezzo (numero) e disponibilità (booleano).
Crea una funzione che accetta un array di prodotti come parametro e restituisce un nuovo array
contenente solo i prodotti disponibili.*/

//interfaccia del prodotto
interface Prodotto {
  nome: string;
  prezzo: number;
  disponbilita: boolean;
}

//creo i vari prodotti 1, 2, 3, 4
let prodotto1: Prodotto = {
  nome: "L'alchimista",
  prezzo: 20,
  disponbilita: true,
};

let prodotto2: Prodotto = {
  nome: "La casta",
  prezzo: 15,
  disponbilita: true,
};

let prodotto3: Prodotto = {
  nome: "Fatto in casa da Benedetta",
  prezzo: 20,
  disponbilita: false,
};
let prodotto4: Prodotto = {
  nome: "1984",
  prezzo: 16,
  disponbilita: false,
};

//definisco l'array che contiene gli oggetti
let listaProdotti: Prodotto[] = [prodotto1, prodotto2, prodotto3, prodotto4];

//funzione per stampare solamente i prodotti disponibili
function disponibile(listaProdotti: Prodotto[]): Prodotto[] {
  let result: Prodotto[] = [];

  for (let i = 0; i < listaProdotti.length; i++) {
    let p = listaProdotti[i];

    if (p.disponbilita == true) {
      result.push(p);
    }
  }

  return result;
}

let listaDisponibili = disponibile(listaProdotti);
console.log(listaDisponibili);

//! ESERCIZIO 4
/*- tipo-04.ts
Definisci un tipo di dato per rappresentare un numero di telefono. L'input dovrebbe essere una stringa
con il formato "xxx-xxx-xxxx", dove "x" rappresenta un cifra numerica.
Crea una funzione che accetta un numero di telefono come parametro e restituisce true se il formato
è corretto e false altrimenti. */

console.log("=====[ tipo-04.ts ]=====");

function validaTelefono(telefono: string): boolean {
  if (telefono.length === 12 && telefono.substring(3, 4) === "-"
      && telefono.substring(7, 8) === "-"
      && (telefono.substring(0, 3)).match("[0-9]{3}")
      && (telefono.substring(4, 7)).match("[0-9]{3}")
      && (telefono.substring(8, 12)).match("[0-9]{4}")) {
      return true;
  } else {
      return false;
  }

}

let telefono1 = "123-456-7890";     // true
let telefono2 = "12A-456-7890";      // false
let telefono3 = "123-45B-7890";    // false

console.log(validaTelefono(telefono1));
console.log(validaTelefono(telefono2));
console.log(validaTelefono(telefono3));

//Oppure
function validaTelefono2(telefono: string): boolean {
  if (telefono.length === 12
      && (telefono.match("[0-9]{3}-[0-9]{3}-[0-9]{4}"))) {
      return true;
  } else {
      return false;
  }
}
//! ESERCIZIO 6
/*Crea un'interfaccia per rappresentare un libro con le seguenti proprietà: titolo (stringa), autore (stringa),
anno di pubblicazione (numero) e genere (stringa).
Crea un array di libri e scrivi una funzione che accetta un genere come parametro e restituisce
un nuovo array contenente solo i libri del genere specificato.*/

interface Libro {
  titolo: string;
  autore: string;
  annoPubblicazione: number;
  genere: string;
}

/*
let libro1: Libro = {titolo: "Violeta", autore: "Isabel Allende", annoPubblicazione: 2023, genere: "Romanzo" };
let libro2: Libro={ titolo: "Piccolo Principe", autore: "Antoine De Saint Exupery", annoPubblicazione:1943, genere:"Fantasy"};
let libro3: Libro={titolo:"Cappuccetto Rosso", autore:"B. Grimm", annoPubblicazione:1857,genere:"Fantasy"};
let libro4: Libro={titolo:"Pinocchio", autore:"C.Collodi", annoPubblicazione:1883,genere:"Aventura"};
let libro5: Libro={titolo:"The Jungle Book", autore:"R.Kipling", annoPubblicazione:1894,genere:"Racconti"};
let libri: Libro[] = [libro1, libro2, libro3, libro4, libro5];
*/

let libri: Libro[] = [
  {titolo:"Violeta", autore: "Isabel Allende", annoPubblicazione: 2023, genere: "Romanzo" },
  {titolo:"Piccolo Principe", autore: "Antoine De Saint Exupery", annoPubblicazione:1943, genere:"Fantasy"},
  {titolo:"Cappuccetto Rosso", autore:"B. Grimm", annoPubblicazione:1857,genere:"Fantasy"},
  {titolo:"Pinocchio", autore:"C.Collodi", annoPubblicazione:1883,genere:"Aventura"},
  {titolo:"The Jungle Book", autore:"R.Kipling", annoPubblicazione:1894,genere:"Racconti"}
];

function filtraLibriPerGenere(libri: Libro[], genere: string): Libro[] {
  let libriFiltrati: Libro[] = [];
  for (let libro of libri) {
      if (libro.genere === genere) {
          libriFiltrati.push(libro);
      }
  }
  return libriFiltrati;
}

console.log("====[ Libri Fantasy ]====", filtraLibriPerGenere(libri, "Fantasy"));
console.log("====[ Libri Aventura ]====", filtraLibriPerGenere(libri, "Aventura"));
console.log("====[ Libri Romanzo ]====", filtraLibriPerGenere(libri, "Romanzo"));
