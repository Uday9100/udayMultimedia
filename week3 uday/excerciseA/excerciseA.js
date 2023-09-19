function greaterNum(number1, number2) {
  if (number1 > number2) {
      return number1;
  } else if (number2 > number1) {
      return number2;
  } else {
      return "Both numbers are equal.";
  }
}


const userNum1 = parseFloat(prompt("Enter the first number:"));
const userNum2 = parseFloat(prompt("Enter the second number:"));

// Call the function with user input and log the output
const result = greaterNum(userNum1, userNum2);

var finalresult = (" The greater number of " +  userNum1 +  " and "  +  userNum2  +  " is "  + result + " . ");

alert(finalresult);