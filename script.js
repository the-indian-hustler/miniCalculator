let currentValue = '';
let operator = '';
let result = 0;

function appendValue(value) {
    currentValue += value;
    updateDisplay();
}

function clearDisplay() {
    currentValue = '';
    operator = '';
    result = 0;
    updateDisplay();
}

function calculate() {
    try {
        result = eval(currentValue);
        currentValue = result.toString();
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
    }
}

function updateDisplay() {
    const displayElement = document.getElementById('display');
    displayElement.value = currentValue || '0';
}

function setOperator(op) {
    operator = op;
    if (currentValue !== '' && isNaN(currentValue.slice(-1))) {
        // If the last character in currentValue is an operator, replace it with the new operator
        currentValue = currentValue.slice(0, -1) + operator;
    } else {
        currentValue += operator;
    }
    updateDisplay();
}







