let bankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
    },
};

let s: string = null;

let myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"],
};

myself.bankAccount.deposit(3000);

console.log(myself);

///////////////////////////

class Person1 {
    name: string;
    private type: string;
    protected age: number;

    constructor(n: string, t?: string, a: number = 23) { //definire in varole fra gli argomenti, assegna un valore di default, che vertrà usato nel caso non gliene dessimo uno noi
        this.name = n;
        
        if (t) {
            this.type = t; //questo if è importante. Se un dato è facoltativo bisogna dirgli cosa succede nel caso lo inserissimo ed anche nel caso non lo inserissimo
        } else {
            this.type = "italiano";
        }

        this.age = a;
    }

    chiSonoIo(): void {
        console.log("io sono " + this.type + " ed il mio nome è ", this.name);
    }
}

class Lavoratore extends Person2 {
    ditta: string;
    anniEsperienza: number = this.age - 20;
}

let p: Person = new Person("daniele");
let l: Lavoratore = new Lavoratore("arduini");

p.chiSonoIo();

console.log("p.name:", p.name);
console.log("l.anniEsperienza", l.anniEsperienza); // stampa 7

