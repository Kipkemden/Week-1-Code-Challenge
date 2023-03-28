const basicSalary = parseFloat(prompt("Enter Your Basic Salary:"));

let taxablePay = 0;
let payeeTax = 0;
let nhifDeduction = 0;
let nssfDeduction = 0;

if (basicSalary <= 24000) {
  taxablePay = basicSalary;
  payeeTax = taxablePay * 0.1;
} else if (basicSalary <= 32333) {
  taxablePay = basicSalary - 24000;
  payeeTax = 2400 + (taxablePay * 0.25);
} else {
  taxablePay = basicSalary - 32333;
  payeeTax = 6000 + (taxablePay * 0.3);
}

if (basicSalary <= 5999) {
  nhifDeduction = 150;
} else if (basicSalary <= 7999) {
  nhifDeduction = 300;
} else if (basicSalary <= 11999) {
  nhifDeduction = 400;
} else if (basicSalary <= 14999) {
  nhifDeduction = 500;
} else if (basicSalary <= 19999) {
  nhifDeduction = 600;
} else if (basicSalary <= 24999) {
  nhifDeduction = 750;
} else if (basicSalary <= 29999) {
  nhifDeduction = 850;
} else if (basicSalary <= 34999) {
  nhifDeduction = 900;
} else if (basicSalary <= 39999) {
  nhifDeduction = 950;
} else if (basicSalary <= 44999) {
  nhifDeduction = 1000;
} else if (basicSalary <= 49999) {
  nhifDeduction = 1100;
} else if (basicSalary <= 59999) {
  nhifDeduction = 1200;
} else if (basicSalary <= 69999) {
  nhifDeduction = 1300;
} else if (basicSalary <= 79999) {
  nhifDeduction = 1400;
} else if (basicSalary <= 89999) {
  nhifDeduction = 1500;
} else if (basicSalary <= 99999) {
  nhifDeduction = 1600;
} else {
  nhifDeduction = 1700;
}

nssfDeduction = basicSalary * 0.06;

const totalDeductions = payeeTax + nhifDeduction + nssfDeduction;
const netSalary = basicSalary - totalDeductions;

console.log(`Your Payee Deduction is: KES ${payeeTax.toFixed(2)}`);
console.log(`Your NHIF Deduction is: KES ${nhifDeduction.toFixed(2)}`);
console.log(`Your NSSF Deduction is: KES ${nssfDeduction.toFixed(2)}`);
console.log(`Your Net Salary is: KES ${netSalary.toFixed(2)}`);
