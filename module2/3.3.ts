

{
///generic type 

// const rollNumbers:number[] = [2,4,5,6,7,]

// generic 

type genericArray <T> =Array<T>

const rollNumber:genericArray<number> =[2,4,6,6,5];

// const employName:string[] = ['Mr. X', 'Mr. Y', 'Mr Z']

const employName:genericArray<string>=['Mr. X', 'Mr. Y', 'Mr Z']

// const isAdmin:boolean[]=[true , false, ]

const isAdmin:genericArray<boolean>=[true , false, ]

}