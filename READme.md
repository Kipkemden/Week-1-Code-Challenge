STUDENT GRADE GENERATOR

This program uses a switch statement to determine the correct grade based on the student's marks. The switch statement uses the true value to compare the cases. Each case corresponds to a range of marks, and sets the grade variable accordingly. The default case is used for marks less than 40, which corresponds to grade E. Finally, the program outputs the grade to the console.

SPEED DETECTOR

This program prompts the user to input the car's speed, and then converts the input to a number using the Number function. It then uses an if statement to calculate the number of demerit points based on the car's speed. If the speed is less than 70 km/h, the number of demerit points is 0. Otherwise, the number of demerit points is calculated using the formula (speed - 70) / 5, and rounded down to the nearest integer using the Math.floor function. The program then outputs the result to the console using if statements. If the number of demerit points is 0, the program outputs "Ok" to the console. Otherwise, the program outputs the number of demerit points to the console using a template literal. If the number of demerit points is greater than 12, the program outputs "License suspended" to the user.

NET SALARY CALCULATOR

This code calculates various deductions from an employee's basic salary and computes the net salary after deductions. The following deductions are calculated:

PAYE tax
NHIF deduction
NSSF deduction
Usage
To use this code, follow the steps below:

Enter the employee's basic salary when prompted.
The code will then calculate the PAYE tax, NHIF deduction, NSSF deduction, and net salary.
The results will be displayed in the console.
Formula Used
The formula used to calculate the PAYE tax is based on the Kenyan tax bands as follows:

For basic salaries up to KES 24,000, the tax rate is 10%.
For basic salaries between KES 24,000 and KES 32,333, the tax rate is 25% of the amount above KES 24,000 plus a fixed tax of KES 2,400.
For basic salaries above KES 32,333, the tax rate is 30% of the amount above KES 32,333 plus a fixed tax of KES 6,000.
The NHIF deduction is based on a sliding scale based on the employee's basic salary, as shown in the code.

The NSSF deduction is a fixed rate of 6% of the employee's basic salary.

Output
The code outputs the following information in the console:

The PAYE tax deduction
The NHIF deduction
The NSSF deduction
The net salary after deductions
Note;
This code assumes that the employee is based in Kenya and that the tax bands, NHIF deduction scale, and NSSF deduction rate are valid as of September 2021, as extracted from these sources;
https://www.aren.co.ke/payroll/taxrates.htm
https://www.kra.go.ke/individual/calculate-tax/calculating-tax/paye.
