
{
// type alias 

type Student={
    name:string;
    age:number;
    gender:string;
    contactNo:string;
    address:string
}

const student1:Student={
    name:'Mehebul Alif',
    age:21,
    gender:'melel',
    contactNo:'01654555545',
    address:'ctg'
}

type Add=(num1:number,num2:number)=>number
const add:Add =(num1,num2)=>num1+num2

}