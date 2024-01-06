var display = document.getElementById("display");
// object to manage inputs
const calculator = {
    input1: '',
    input2: '',
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
    //stores number clicked in increment so in 'input1' of object if operator isn't defined, else store in input2
    calculator[calculator.operator ? 'input2' : 'input1'] += number;
    //checks if operator is true, if it is display.value = input2.value, else input1.value
    display.value = calculator[calculator.operator ? 'input2' : 'input1']
}

