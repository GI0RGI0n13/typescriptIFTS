/*Definite una classe 'Persona' che rappresenta una persona avente come proprietà nome, cognome e età.
Definite inoltre una classe 'Film' che rappresenta un film avente come proprietà titolo, anno di uscita, regista
e cast (un array di oggetti di tipo Persona). Create un array di oggetti rappresentanti un elenco di film e con
l'utilizzo del metodo filter() per restituire solo i film usciti dopo il 2000. (per i dati dei film potete utilizzare i siti
https://www.imdb.com/ o https://www.mymovies.it/) */

class Persona {
    nome: string;
    cognome: string;
    eta: number;
  
    constructor(nome: string, cognome: string, eta: number) {
      this.nome = nome;
      this.cognome = cognome;
      this.eta = eta;
    }
  }
  
  class Film {
    titolo: string;
    annoUscita: number;
    regista: Persona;
    cast: Persona[];
  
    constructor(titolo: string, annoUscita: number, regista: Persona, cast: Persona[]) {
      this.titolo = titolo;
      this.annoUscita = annoUscita;
      this.regista = regista;
      this.cast = cast;
    }
  }
  // oggetti attori
  let regista = new Persona("Christopher", "Nolan", 50);
  let attore1 = new Persona("Leonardo", "DiCaprio", 47);
  let attore2 = new Persona("Tom", "Hardy", 44);

 //oggetti film
  let film1 = new Film("Inception", 2010, regista, [attore1, attore2]);
  let film2 = new Film("Interstellar", 2014, regista, [attore1]);
  
  let elencoFilm = [film1, film2];
  
  //metodo filter
  let filmUscitiDopoIl2000 = elencoFilm.filter((film) => film.annoUscita > 2000);