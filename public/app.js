"use strict";
class Invoice {
    constructor(c, d, a) {
        this.clinet = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.clinet} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('Mario', 'work on the mario website', 250);
const invTwo = new Invoice('Luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
invOne.clinet = 'Yoshi';
invTwo.amount = 500;
console.log(invoices);
const form = document.querySelector('.new-item-form');
console.log(form.children);
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
