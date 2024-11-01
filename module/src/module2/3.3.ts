

{
///generic type 

// const rollNumbers:number[] = [2,4,5,6,7,]

// generic 

type GenericArray <T> =Array<T>

const rollNumber:GenericArray<number> =[2,4,6,6,5];

// const employName:string[] = ['Mr. X', 'Mr. Y', 'Mr Z']

const employName:GenericArray<string>=['Mr. X', 'Mr. Y', 'Mr Z']

// const isAdmin:boolean[]=[true , false, ]

const isAdmin:GenericArray<boolean>=[true , false, ]


interface User {
    name:string;
    age:number
}

const user :GenericArray<User>= [
    {
        name:'Mehebul Alif',
        age:33,
    },
    {
        name:'Jhankar Mahabub',
        age:40 ,
    }
]

console.log(user);


// generic tuple 

type GenericTuple<X,Y> = [X,Y]

const manus :GenericTuple<string,string> = ['Mr. X','Mr. Y']

}