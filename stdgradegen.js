///Prompt the user to input the student's marks
const stdntmarks = prompt("Input the student marks (between 0 and 100): ");

/// Convert the input to a number
const marks = Number(stdntmarks);

/// Determine the grade based on the student's marks using a switch statement
let grade = "";
switch (true) {
  case marks > 79:
    grade = "A";
    break;
  case marks >= 60 && marks <= 79:
    grade = "B";
    break;
  case marks >= 50 && marks <= 59:
    grade = "C";
    break;
  case marks >= 40 && marks <= 49:
    grade = "D";
    break;
  default:
    grade = "E";
}

/// Output the grade to the console
console.log(`The student grade is ${grade}`);
