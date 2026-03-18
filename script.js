let display = document.getElementById("display");
let history = document.getElementById("history");

function append(value) {
    display.value += value;

    try {
        history.innerText = "= " + eval(display.value);
    } catch {
        history.innerText = "";
    }
}

function clearDisplay() {
    display.value = "";
    history.innerText = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);

        if (result === Infinity) {
            display.value = "Cannot divide by 0";
            return;
        }

        history.innerText = display.value;
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

/* Theme */
function toggleTheme() {
    document.body.classList.toggle("light");

    let btn = document.getElementById("themeBtn");
    btn.innerText = document.body.classList.contains("light") ? "☀️" : "🌙";
}

/* Keyboard support */
document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) {
        append(e.key);
    } else if (e.key === "Enter") {
        calculate();
    } else if (e.key === "Backspace") {
        deleteLast();
    } else if (e.key === "Escape") {
        clearDisplay();
    }
});

function square(num = display.value) {
    if(num !== "") display.value = Math.pow(eval(num), 2);
}

function cube(num = display.value) {
    if(num !== "") display.value = Math.pow(eval(num), 3);
}

function sqrt(num = display.value) {
    if(num !== "") display.value = Math.sqrt(eval(num));
}
function factorial(n = display.value) {
    n = Number(n);
    if(n < 0) return display.value = "Error";
    let result = 1;
    for(let i=2; i<=n; i++) result *= i;
    display.value = result;
}
function power(exponent) {
    let base = eval(display.value);
    if(exponent != null) display.value = Math.pow(base, Number(exponent));
}
let exp = prompt("Enter exponent:");
power(exp);
function sinDeg() {
    display.value = Math.sin(eval(display.value) * Math.PI / 180);
}

function cosDeg() {
    display.value = Math.cos(eval(display.value) * Math.PI / 180);
}

function tanDeg() {
    display.value = Math.tan(eval(display.value) * Math.PI / 180);
}
function runAdvanced(func) {
    switch(func) {
        case "square": square(); break;
        case "cube": cube(); break;
        case "sqrt": sqrt(); break;
        case "factorial": factorial(); break;
        case "sin": sinDeg(); break;
        case "cos": cosDeg(); break;
        case "tan": tanDeg(); break;
    }
}
let historyList = [];

function calculate() {
    try {
        let result = eval(display.value);
        if(result === Infinity) display.value = "Cannot divide by 0";
        else {
            historyList.unshift(display.value + " = " + result);
            if(historyList.length > 5) historyList.pop();
            history.innerText = historyList.join("\n");
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}
display.value = parseFloat(result.toFixed(6));