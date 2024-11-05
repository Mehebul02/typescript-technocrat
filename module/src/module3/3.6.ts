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

        set deposit (amount:number){
            this._balance = this._balance+amount
        }

        // addDeposit(amount: number) {
        //     this._balance = this._balance + amount
        // }
    //     getBalance() {
    //         return this._balance
    //     }
    // };
    get Balance (){
       return this._balance
    }
    // class StudentAccount extends BankAccount {
    //     test() {
    //         this._balance
    //     }
    }

    const personalAccount = new BankAccount(11146, 'Mr. Mehebul Alif', 6470);
    // const myBalance = personalAccount.getBalance() function call kore 
    personalAccount.deposit =99
    const myBalance = personalAccount.Balance 
    console.log(myBalance);

}