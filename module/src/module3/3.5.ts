

// access modify 

{

    class BankAccount {
        public readonly id: number;
        public name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {

            this.id = id;
            this.name = name;
            this._balance = balance;
        };

        addDeposit(amount: number) {
            this._balance = this.balance + amount
        }
        getBalance() {
            return this._balance
        }
    };
    class StudentAccount extends BankAccount {
        test() {
            this._balance
        }
    }

    const personalAccount = new BankAccount(11146, 'Mr. Mehebul Alif', 20);
    const myBalance = personalAccount.getBalance()
    console.log(myBalance);



















    
    // const personalAccount2 = new BankAccount(11147, 'Mr . Riead Mia', 500);
    // personalAccount.addDeposit(44)
    // personalAccount2.addDeposit(79000)
    // console.log(personalAccount);
    // console.log(personalAccount2);
}