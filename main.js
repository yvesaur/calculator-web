const displayScreen = document.getElementById("screen");
const calculatorButtons = document.querySelectorAll(".btn-container button");
let num1 = ''
let operators = ['+','/','-','*']
let operator
let num2 = ''
let result

// Input buttons
calculatorButtons.forEach(button => {
    
    button.addEventListener('click', () => {
        if(!(operators.includes(button.value))){
            if(result == num1){
                displayScreen.value = '' + button.value;
                result = 0;
            } else {
                displayScreen.value =  displayScreen.value + button.value;
            }
        }
    });


});

// Reset Button
calculatorButtons[3].addEventListener('click', () =>{
    num1 = ''
    num2 = ''
    result
    displayScreen.value = '';
})

// Addition Button
calculatorButtons[19].addEventListener('click', () =>{
    operate(19);
});

// Substraction Button
calculatorButtons[15].addEventListener('click', () =>{
    operate(15);
});

// Multiplication Button
calculatorButtons[11].addEventListener('click', () =>{
    operate(11);
});

// Division Button
calculatorButtons[7].addEventListener('click', () =>{
    operate(7);
});

// Equals button
calculatorButtons[18].addEventListener('click', () =>{
    num2 = parseInt(displayScreen.value);
    if(operator === '+'){
        console.log(`result = ${num1} + ${num2}`);
        result = num1 + num2;
    } 
    else if (operator === '-'){
        console.log(`result = ${num1} - ${num2}`);
        result = num1 - num2;
    } 
    else if (operator === '*') {
        console.log(`result = ${num1} * ${num2}`);
        result = num1 * num2;
    } 
    else if (operator === '/'){
        console.log(`result = ${num1} / ${num2}`);
        result = num1 / num2;
    }

    num1 = result;
    num2 = '';
    // operator = '';

    displayScreen.value = result;
});


function operate(buttonIndex) {
    const currentValue = displayScreen.value;

    if(num1.length === 0){
        num1 = parseFloat(currentValue);
        operator = calculatorButtons[buttonIndex].value;
        displayScreen.value = '';
    } else {
        num2 = parseFloat(currentValue);
        operator = calculatorButtons[buttonIndex].value;

        if(operator === '+'){
            console.log(`result = ${num1} + ${num2}`);
            result = num1 + num2;
        } 
        else if (operator === '-'){
            if (num1 == 0) {
                console.log(`result = ${num2} - ${num1}`);
                result = num2 - num1;
            } else {
                result = num1 - num2;
            }
        } 
        else if (operator === '*') {
            console.log(`result = ${num1} * ${num2}`);
            result = num1 * num2;
        } 
        else if (operator === '/'){
            if (num2 == 0){
                result = '∞';
            } else {
                console.log(`result = ${num1} / ${num2}`);
                result = num1 / num2;
            }
        }
        num1 = result;  
        // num2 = 0;
        displayScreen.value = result;
    }
}

