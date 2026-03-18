let display = document.getElementById("display");
let history = document.getElementById("history");

function append(value) {
    display.value += value;
    try { history.innerText = "= " + eval(display.value); }
    catch { history.innerText = ""; }
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
        if (result === Infinity) { display.value = "Cannot divide by 0"; return; }
        history.innerText = display.value;
        display.value = result;
    } catch { display.value = "Error"; }
}

function toggleTheme() {
    document.body.classList.toggle("light");
    document.getElementById("themeBtn").innerText =
        document.body.classList.contains("light") ? "☀️" : "🌙";
}

document.addEventListener("keydown", (e) => {
    if (!isNaN(e.key) || "+-*/.%".includes(e.key)) append(e.key);
    else if (e.key === "Enter") calculate();
    else if (e.key === "Backspace") deleteLast();
    else if (e.key === "Escape") clearDisplay();
});
