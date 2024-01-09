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
    after_equal: false,
  };

const add = (num1, num2) => parseFloat(num1) + parseFloat(num2);

const subtract = (num1, num2) => parseFloat(num1) - parseFloat(num2);

const multiply = (num1, num2) => parseFloat(num1) * parseFloat(num2);

const divide = (num1, num2) => parseFloat(num1) / parseFloat(num2);

// function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
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
//function to get the value of that's displayed in the input box
const get_display_value = () => {
    return document.getElementById("display").value;
}
//function that will store number clicked into calculator object
number_to_display = (number) =>
{
    //stores number clicked in increment so in "input1" of object if operator isn't defined, else store in input2
    //checks if operator is true, if it is display.value = input2.value, else input1.value
    // console.log("after pressing number");
    // console.log(calculator);
    if (calculator["after_equal"] && calculator["operator"] !== "") {
        // If a calculation is completed, clear the display and reset the calculator
        // calculator["input2"] = number;
        display.value = number;
        calculator["input2"] = number; //sort this out tmr
        calculator["after_equal"] = false;
    }
    else if (calculator["after_equal"] && calculator["operator"] === ""){
        display.value = number;
        calculator["input1"] = number; //sort this out tmr
        calculator["after_equal"] = false;
    }
    else{
        display.value = "";
        calculator[calculator["operator"] ? "input2" : "input1"] += number.toString();
        // console.log(calculator);
        display.value = calculator[calculator["operator"] ? "input2" : "input1"]
        if(calculator["input2"] === "0" && calculator["operator"] === "/"){
            alert("INVALID OPERATIONS, CANNOT DIVIDE BY 0");
            clear_display();
        } 
    }

    // console.log(calculator);
}
//function that will clear display and calculator's values
clear_display = () => {
    calculator["input1"] = "";
    calculator["input2"] = "";
    calculator["operator"] = "";
    display.value = "";
}


operator_logic = (operator) => {
    if(!calculator["operator"]){
        calculator["operator"] = operator;
    }
    else{
    // else if(typeof calculator.input1 === "string" && typeof calculator.input2 === "string" && typeof calculator["operator"] === "string"){
        //do calculation here
        result_to_display = operate(calculator["input1"],calculator["input2"],calculator["operator"]);
        display.value = result_to_display;
        // // console.log("TEST");
        calculator["input1"] = result_to_display; 
        calculator["input2"] = "";
        calculator["operator"] = operator;
    }
}

equal_logic = () => {
    result_to_display = operate(calculator["input1"],calculator["input2"],calculator["operator"]);
    display.value = result_to_display;
    calculator["input1"] = result_to_display;
    calculator["input2"] = "";
    calculator["operator"] = "";
    calculator["after_equal"] = true;
}

//event listeners
add_btn.addEventListener("click", function(){
    console.log("after pressing +")
    operator_logic("+");
    console.log(calculator);
})
subtract_btn.addEventListener("click", function(){
    operator_logic("-");
})
multiply_btn.addEventListener("click", function(){
    operator_logic("*");

})
divide_btn.addEventListener("click", function(){
    operator_logic("/");
})

equal_btn.addEventListener("click", function(){
    equal_logic();
    // console.log(calculator);
})

//keyboard event listener
document.addEventListener("keydown", (event) =>{
    if(!isNaN(event.key)){
        number_to_display(event.key);
    } 
    else if(['+', '-', '*', '/'].includes(event.key)){
        if(!calculator["operator"]){
            calculator["operator"] = event.key;
        }
        else{
            //do calculation here
            result_to_display = operate(calculator["input1"],calculator["input2"],calculator["operator"]);
            display.value = result_to_display;
            // // console.log("TEST");
            calculator["input1"] = result_to_display; 
            calculator["input2"] = "";
            calculator["operator"] = event.key;
        }
    }
    else if(event.key === "="){
        // console.log(calculator);
       equal_logic();
    }
})