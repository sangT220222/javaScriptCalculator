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

var num1 = null, num2 = null, operator = null, num1_input = true; //introduced num1=input as true so we can keep track if it's 1st number input

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

var current_value = ""; //this will contain the final number we want to add

append_to_display = (value) => { //value contains the value that has been input by a click
    if (!isNaN(value) || value === ".") {
        current_value += value;
        document.getElementById("display").value += value;
    } 

    else if( value === "+" || value === "-" || value === "*" || value === "/") {
        // document.getElementById("display").value += current_value;
        //bottom if block is for the very first number only
        if(num1 === null && num1_input){ //checks if num1 is not null and num1_input is true
            num1_input = false;
            num1 = parseFloat(current_value);
            // console.log("TEST")
            operator = value;
            // console.log("This is 1: " + num1.toString());
            // console.log("This is 2: " + num2);
            current_value = "";
        }
        //block below is for the input of the "2nd number"
        else if (num1 !== null && !num1_input) { //checks if num1 is not null and the check is empty or not
            num2 = parseFloat(current_value);
            // console.log("This is 2nd input: " + num2.toString());
            const result = operate();
            document.getElementById("display").value = result;
            num1 = result; //here num1 will always be the "result" that will be used as num1
            // console.log("This is result which will be added: " + num1.toString());
            current_value = ""; //resets the current value so that num2 will have a fresh new number after a new one is pressed
        }
        
    } 
    else if(value === "="){
        if(num1 != null){
            num2 = parseFloat(current_value);
            // console.log(num2);
            console.log("This is 1: " + num1.toString());
            console.log("This is 2: " + num2.toString());
            num1 = operate();
            console.log("num1: "+ num1.toString());
            console.log("num2: "+ num2.toString())
            document.getElementById("display").value = num1;
            // current_value = result.toString();  
        }
        num1_input = true;
    }

   //sort logic out so it can add stuff up for more than 2 numbers!
}

//add event listeners according to the buttons made in lines 3,7,11,15
add_button.addEventListener("click", () => append_to_display("+"));
subtract_button.addEventListener("click", () => append_to_display("-"));
multiply_button.addEventListener("click", () => append_to_display("*"));
divide_button.addEventListener("click", () => append_to_display("/"));
equal_button.addEventListener("click", () => append_to_display("="));

clear_display = () => {
    current_value = "";
    document.getElementById("display").value = "";
}

  
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
