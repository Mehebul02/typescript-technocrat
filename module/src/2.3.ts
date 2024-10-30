// learning function
// Normal function
// Arrow function 

function add(num1:number, num2:number) :Number{
    return (num1 + num2)
}

add(2,5)

const arrowAdd=(num1:number,num2:number):number=>num1+num2


// Object -----> function -------> method


const riceUser ={
    name:'mehebul Alif',
    balance:5000,

    addBalance(balance:number):string{
        return  ` My new balance is :${this.balance+balance}`
    }
}

const arr :number[]=[1,4,7] 

const newArr = arr.map((num:number):number=> num * num)

