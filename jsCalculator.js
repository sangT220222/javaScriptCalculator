var display = document.getElementById("display");

const add_btn = document.getElementById("add_button");
const subtract_btn = document.getElementById("subtract_button");
const multiply_btn = document.getElementById("multiply_button");
const divide_btn = document.getElementById("divide_button");
const equal_btn = document.getElementById("equal_button");

var result_to_display = null;

// object to manage inputs
const calculator = {
    input1: "",
    input2: "",
    operator: undefined,
  };

const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const multiply = (num1, num2) => num1 * num2;

const divide = (num1, num2) => num1 / num2;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

const operate = (num1,num2,operator) => {
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
    //stores number clicked in increment so in "input1" of object if operator isn't defined, else store in input2
    calculator[calculator.operator ? "input2" : "input1"] += number;
    //checks if operator is true, if it is display.value = input2.value, else input1.value
    console.log(calculator);
    display.value = calculator[calculator.operator ? "input2" : "input1"]
}

//event listeners
add_btn.addEventListener("click", function(){
    calculator["operator"] = "+";
})
subtract_btn.addEventListener("click", function(){
    calculator["operator"] = "-";
})
multiply_btn.addEventListener("click", function(){
    calculator["operator"] = "*";
})
divide_btn.addEventListener("click", function(){
    calculator["operator"] = "/";
})

equal_btn.addEventListener("click", function(){
    var num1 = parseFloat(calculator["input1"]);
    var num2 = parseFloat(calculator["input2"]);
    var operator = calculator["operator"];
    result_to_display = operate(num1,num2,operator);
    console.log(result_to_display);
})
