document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#buttons .btn[data-value]');
    const calculateButton = document.getElementById('calculate');
    const clearButton = document.getElementById('clear');

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            expression += button.dataset.value;
            display.innerText = expression;
        });
    });

    calculateButton.addEventListener('click', () => {
        try {
            const result = eval(expression);
            display.innerText = result;
            expression = result.toString();
        } catch {
            alert('Error in calculation');
        }
    });

    clearButton.addEventListener('click', () => {
        expression = '';
        display.innerText = '';
    });

    document.addEventListener('keydown', (event) => {
        if (event.key >= 0 && event.key <= 9 || ['+', '-', '*', '/'].includes(event.key)) {
            expression += event.key;
            display.innerText = expression;
        } else {
            alert('Only numbers are allowed');
        }
    });
});
