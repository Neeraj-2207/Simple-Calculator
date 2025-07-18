let calculation = localStorage.getItem('calculation') || '';

function calculate(value) {
    if (value === '=') {
        calculation = eval(calculation).toString();
    } else {
        calculation += value;
    }
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}

function displayCalculation() {
    document.querySelector('.display').innerText = calculation;
}

function clearDisplay() {
    calculation = '';
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}
function backspace() {
    calculation = calculation.slice(0, -1);
    displayCalculation();
    localStorage.setItem('calculation', calculation);
}


