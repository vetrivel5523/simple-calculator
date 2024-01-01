function displayvalue(value) {
    document.getElementById("display").value =  document.getElementById("display").value + value;
}
function clearDisplay() {
    document.getElementById("display").value="";
}
function calculate () {
    document.getElementById('display').value;
    var userInput = document.getElementById('display').value;
    var result = eval(userInput);

    document.getElementById('display').value = result;
}