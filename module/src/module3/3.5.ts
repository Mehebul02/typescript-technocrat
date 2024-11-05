

// access modify 

{

    class BankAccount {
     public readonly  id: number;
        public name: string;
      private  balance: number;


        constructor(id: number, name: string, balance: number) {

            this.id = id;
            this.name = name;
            this.balance = balance;

        };

        addDeposit(amount:number){
            this.balance = this.balance + amount
        }
    };

    const personalAccount = new BankAccount(11146 ,'Mr. Mehebul Alif', 20 );
    const personalAccount2 = new BankAccount(11147 , 'Mr . Riead Mia', 500);
    personalAccount.addDeposit(44)
    personalAccount2.addDeposit(79000)
    console.log(personalAccount);
    console.log(personalAccount2);
}