//! Aggiungere i tipi dove mancano! ...e crearne di nuovi per riutilizzarli!
/*let bankAccount = {
  money: 2000,
  deposit(value) {
    this.money += value;
  },
};

let myself = {
  name: "Max",
  bankAccount: bankAccount,
  hobbies: ["Sports", "Cooking"],
};

myself.bankAccount.deposit(3000);

console.log(myself); */


interface BankAccount {
    money: number;
    deposit: (value: number) => void;
}

interface Person {
    name: string;
    bankAccount: BankAccount;
    hobbies: string[];
}
let bankAccount: BankAccount = {
    money: 2000,
    deposit(value) {
        this.money += value;
      },
}
let myself: Person = {
    name: "Max",
    bankAccount,
    hobbies: ["Sports", "Cooking"]
}

myself.bankAccount.deposit(3000);
console.log(myself);




