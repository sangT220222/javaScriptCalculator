//create 4 buttons with corresponding operations for user to click on

const add_button = document.createElement("button");
add_button.textContent = "+";
const subtract_button = document.createElement("button");
subtract_button.textContent = "-";
const multiply_button = document.createElement("button");
multiply_button.textContent = "*";
const divide_button = document.createElement("button");
divide_button.textContent = "/";


const add = (num1, num2) => {
    return num1 + num2;
}

const subtract = (num1, num2) => {
    return num1 - num2;
}

const multiply = (num1, num2) => {
    return num1 * num2;
}

const divide = (num1, num2) => {
    return num1 / num2;
}

const main = () => {
    
}
// A calculator operation will consist of a number, an operator, and another number.
//  For example, 3 + 5. Create three variables for each of the parts of a calculator operation. 
//  Create a variable for the first number, the operator, and the second number. 
//  You’ll use these variables to update your display later.

// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));

document.body.append(add_button);
document.body.append(subtract_button);
document.body.append(multiply_button);
document.body.append(divide_button);