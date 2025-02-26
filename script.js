document.addEventListener("DOMContentLoaded", function() {
    const computeBtn = document.getElementById("compute-btn");
    const resultValue = document.getElementById("result-value");
    const inputFieldsDiv = document.getElementById("input-fields");
    const buttons = document.querySelectorAll(".btn");

    let operation = '';

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            if (this.id === "compute-btn") {
                computeResult();
            } else {
                operation = this.dataset.operation;
                updateInputFields();
            }
        });
    });

    function updateInputFields() {
        inputFieldsDiv.innerHTML = ""; 

        if (operation === "add" || operation === "subtract" || operation === "power") {
            inputFieldsDiv.innerHTML = `
                <input type="number" id="num1" placeholder="Number 1" required>
                <input type="number" id="num2" placeholder="Number 2" required>
            `;
        } else if (operation === "sum" || operation === "multiply" || operation === "divide") {
            inputFieldsDiv.innerHTML = `
                <input type="text" id="numArray" placeholder="Enter numbers separated by commas" required>
            `;
        } else if (operation === "factorial") {
            inputFieldsDiv.innerHTML = `
                <input type="number" id="numFactorial" placeholder="Number" required>
            `;
        }
    }

    function computeResult() {
        let result;

        if (operation === "add") {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            result = add(num1, num2);
        } else if (operation === "subtract") {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            result = subtract(num1, num2);
        } else if (operation === "sum") {
            const numArray = document.getElementById("numArray").value.split(',').map(Number);
            result = sum(numArray);
        } else if (operation === "multiply") {
            const numArray = document.getElementById("numArray").value.split(',').map(Number);
            result = multiply(numArray);
        } else if (operation === "power") {
            const num1 = parseFloat(document.getElementById("num1").value);
            const num2 = parseFloat(document.getElementById("num2").value);
            result = power(num1, num2);
        } else if (operation === "factorial") {
            const num = parseInt(document.getElementById("numFactorial").value);
            result = factorial(num);
        } else if (operation === "divide"){
            const numArray = document.getElementById("numArray").value.split(',').map(Number);
            result = divide(numArray);
        } 

        resultValue.value = result !== undefined ? result : "Invalid input";
    }
});