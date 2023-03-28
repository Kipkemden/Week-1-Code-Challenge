/// Prompt the user to input the car's speed
const speed = prompt("Enter the car speed (km/h): ");
/// Convert the input to a number
const speedinput = Number(speed);
///Determine the number of demerit points based on the car's speed
let demeritPoints = 0;
if (speedinput < 70) {
  console.log("Ok");
} else {
  demeritPoints = Math.floor((speedinput - 70) / 5);
  console.log(`Points: ${demeritPoints}`);
  
  if (demeritPoints > 12) {
    console.log("License Suspended");
  }
}
