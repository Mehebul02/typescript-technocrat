"use strict";
// learning function
// Normal function
// Arrow function 
function add(num1, num2) {
    return (num1 + num2);
}
add(2, 5);
const arrowAdd = (num1, num2) => num1 + num2;
// Object -----> function -------> method
const riceUser = {
    name: 'mehebul Alif',
    balance: 5000,
    addBalance(balance) {
        return ` My new balance is :${this.balance + balance}`;
    }
};
const arr = [1, 4, 7];
const newArr = arr.map((num) => num * num);
