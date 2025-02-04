let screen = document.getElementById('screen');

function clearScreen() {
    screen.value = '';
}

function deleteLast() {
    screen.value = screen.value.slice(0, -1);
}

function appendToScreen(value) {
    screen.value += value;
}

function calculate() {
    try {
        screen.value = eval(screen.value);
    } catch (e) {
        screen.value = 'Error';
        setTimeout(clearScreen, 1500);  // Clear screen after showing "Error"
    }
}
