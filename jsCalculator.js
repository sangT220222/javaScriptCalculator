//create 4 buttons with corresponding operations for user to click on

const add_button = document.createElement("button");
add_button.textContent = "+";
add_button.setAttribute("id", "add_btn");

const subtract_button = document.createElement("button");
subtract_button.textContent = "-";
subtract_button.setAttribute("id", "sub_btn");

const multiply_button = document.createElement("button");
multiply_button.textContent = "*";
multiply_button.setAttribute("id", "times_btn");

const divide_button = document.createElement("button");
divide_button.textContent = "/";
divide_button.setAttribute("id", "divide_btn");

//create input tag for user to enter numbers they like

const input1 = document.createElement("input");
input1.textContent = "Enter a number";
input1.setAttribute("id", "input1");

const input2 = document.createElement("input");
input2.textContent = "Enter another number";
input2.setAttribute("id", "input2");



const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;


const main = () => {

}

// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));

document.body.append(input1);
document.body.append(input2);

document.body.append(add_button);
document.body.append(subtract_button);
document.body.append(multiply_button);
document.body.append(divide_button);
