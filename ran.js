function generateRandomNumber() {
    const minValue = parseInt(document.getElementById('minValue').value);
    const maxValue = parseInt(document.getElementById('maxValue').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(minValue) || isNaN(maxValue)) {
        resultDiv.textContent = 'Please enter valid numbers for both fields.';
        resultDiv.style.color = 'red';
    } else if (minValue > maxValue) {
        resultDiv.textContent = 'Minimum value cannot be greater than maximum value.';
        resultDiv.style.color = 'red';
    } else {
        const randomNumber = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
        resultDiv.textContent = `Random Number: ${randomNumber}`;
        resultDiv.style.color = 'green';
    }
}
