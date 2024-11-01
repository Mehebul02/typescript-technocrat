// interface type
{



    type User1 = {
        name: string;
        age: number
    }

    type UserRole = User1 & {role:string}

    interface UserWitheRole2 extends User1{ role:string}

    const user: UserWitheRole2 = {
        name: 'Mehebul Alif',
        age: 22,
        role:'Front End Developer'
    }



    //js ---- object ---array----function -----object

    type Roll = number[]

    interface Roll2{
       [ index:number]:number
    }

    const roll:Roll2=[3,5,6,7,8]

}