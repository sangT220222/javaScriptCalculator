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

const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);

const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);

const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);

const divide = (num1, num2) => parseFloat(num1) / parseFloat(num2);

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
const get_display_value = () => {
    return document.getElementById("display").value;
}
// Create the functions that populate the display when you click the number buttons. 
// You should be storing the ‘display value’ in a variable somewhere for use in the next step.
number_to_display = (number) =>
{
    //stores number clicked in increment so in "input1" of object if operator isn't defined, else store in input2
    //checks if operator is true, if it is display.value = input2.value, else input1.value
    calculator[calculator.operator ? "input2" : "input1"] += number.toString();
    display.value = calculator[calculator.operator ? "input2" : "input1"]
    // console.log(calculator);
}
//event listeners
add_btn.addEventListener("click", function(){
    if(!calculator.operator){
        calculator["operator"] = "+";
    }
    else if(typeof calculator.input1 === "string" && typeof calculator.input2 === "string" && typeof calculator.operator === "string"){
        //do calculation here
        console.log(calculator);
        result_to_display = operate(calculator["input1"],calculator["input2"],calculator["operator"]);
        display.value = result_to_display;
        // // console.log("TEST");
        calculator["input1"] = get_display_value(); 
        calculator["input2"] = "";
        // calculator["operator"] = "+";
    }
    // console.log(calculator);
})
subtract_btn.addEventListener("click", function(){
    // console.log(typeof calculator.input1)
    if(!calculator.output){
        calculator["operator"] = "-";
    }
    else if(typeof calculator.input1 === "string" && typeof calculator.input2 === "string" && typeof calculator.operator === "string"){
        //do calculation here
        console.log("WGWR")
        console.log(calculator);
        result_to_display = operate(calculator["input1"],calculator["input2"],"-");
        display.value = result_to_display;
        // // console.log("TEST");
        calculator["input1"] = get_display_value(); 
        calculator["input2"] = "";
        // calculator["operator"] = "+";
    }
})
multiply_btn.addEventListener("click", function(){
    if(!calculator.output){
        calculator["operator"] = "*";
    }
    calculator["input1"] = get_display_value();
    calculator["input2"] = "";
    calculator["operator"] = "*";
})
divide_btn.addEventListener("click", function(){
    if(!calculator.output){
        calculator["operator"] = "/";
    }
    calculator["input1"] = get_display_value();
    calculator["input2"] = "";
    calculator["operator"] = "/";
})

equal_btn.addEventListener("click", function(){
    result_to_display = operate(calculator["input1"],calculator["input2"],calculator["operator"]);
    display.value = result_to_display;
})
