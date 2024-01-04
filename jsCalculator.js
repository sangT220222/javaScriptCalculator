//create 4 buttons with corresponding operations for user to click on

// const add_button = document.createElement("button");
// add_button.textContent = "+";
// add_button.setAttribute("id", "add_btn");

// const subtract_button = document.createElement("button");
// subtract_button.textContent = "-";
// subtract_button.setAttribute("id", "sub_btn");

// const multiply_button = document.createElement("button");
// multiply_button.textContent = "*";
// multiply_button.setAttribute("id", "times_btn");

// const divide_button = document.createElement("button");
// divide_button.textContent = "/";
// divide_button.setAttribute("id", "divide_btn");

// //create input tag for user to enter numbers they like

// const input1 = document.createElement("input");
// input1.textContent = "Enter a number";
// input1.setAttribute("id", "input1");

// const input2 = document.createElement("input");
// input2.textContent = "Enter another number";
// input2.setAttribute("id", "input2");

// const display_box = document.createElement("div");
// display_box.textContent = "Result: 0";
// display_box.setAttribute("id", "result_box");

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

//add event listeners according to the buttons made in lines 3,7,11,15
add_button.addEventListener("click", () => operate('add'));
subtract_button.addEventListener("click", () => operate('subtract'));
multiply_button.addEventListener("click", () => operate('multiply'));
divide_button.addEventListener("click", () => operate('divide'));

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = () => {
    const num1 = parseFloat(input1.value);
    const num2 = parseFloat(input2.value);

    switch(operate){
        case "add":
            return add(num1,num2);
        case "subtract":
            return subtract(num1,num2);
        case "multiply":
            return multiply(num1,num2);
        case "divide":
            return divide(num1,num2);
        default:
            alert("Invalid operator")
            return;
    }

} 

appendToDisplay = (value) => document.getElementById('display').value += value;

clearDisplay = () => document.getElementById('display').value = '';
  
// console.log(add(2,3));
// console.log(subtract(2,3));
// console.log(multiply(2,3));
// console.log(divide(2,3));

// document.body.append(input1);
// document.body.append(input2);

// document.body.append(add_button);
// document.body.append(subtract_button);
// document.body.append(multiply_button);
// document.body.append(divide_button);

// document.body.append(display_box);
