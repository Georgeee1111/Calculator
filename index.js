const display = document.getElementById("display");

const appendToDisplay = (input) => display.value += input;

const clearDisplay = () => display.value = "";

const toRadians = (degrees) => degrees * (Math.PI / 180);

const calculate = () => {
    try {
        let result = display.value;

        result = result.replace(/sin\(([^)]+)\)/g, (match, degrees) => {
            return Math.sin(toRadians(parseFloat(degrees))).toFixed(1);
        });
        result = result.replace(/cos\(([^)]+)\)/g, (match, degrees) => {
            return Math.cos(toRadians(parseFloat(degrees))).toFixed(1);
        });
        result = result.replace(/tan\(([^)]+)\)/g, (match, degrees) => {
            return Math.tan(toRadians(parseFloat(degrees))).toFixed(1);
        });

        result = result.replace(/log\(([^)]+)\)/g, (match, num) => {
            return Math.log10(parseFloat(num)).toFixed(2);
        });
        result = result.replace(/ln\(([^)]+)\)/g, (match, num) => {
            return Math.log(parseFloat(num)).toFixed(2);
        });

        result = result.replace(/sqrt\(([^)]+)\)/g, (match, num) => {
            return Math.sqrt(parseFloat(num)).toFixed(2);
        });

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
