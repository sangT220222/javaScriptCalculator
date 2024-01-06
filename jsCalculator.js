var display_screen = document.querySelector("#display");

// object to manage inputs
const calculator = {
    input1: '0',
    input2: '0',
    operator: undefined,
  };

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = () => {
    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        default:
            alert("Invalid operator")
            return;
    }               
} 

// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.
number_to_display = (number) =>
{
    document.getElementById("display").value += number;
}
