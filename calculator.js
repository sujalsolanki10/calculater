// Variables
const display = document.getElementById("display");

// Function to append value to display
function appendToDisplay(value) {
    display.value += value;
}

// Function to clear display
function clearDisplay() {
    display.value = "";
}

// Function to delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate result
function calculateResult() {
    try {
        display.value = eval(display.value) || "";
    } catch {
        display.value = "Error";
    }
}

// Listen for keypress events
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if ((key >= 0 && key <= 9) || key === "00") {
        appendToDisplay(key);
    } else if (key === "+") {
        appendToDisplay("+");
    } else if (key === "-") {
        appendToDisplay("-");
    } else if (key === "*") {
        appendToDisplay("*");
    } else if (key === "/") {
        appendToDisplay("/");
    } else if (key === ".") {
        appendToDisplay(".");
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});
