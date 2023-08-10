const f1 = document.getElementById('matrix1');
const f2 = document.getElementById('matrix2');
const addButton = document.getElementById("add");
const errorDiv = document.getElementById('error');
const sumTable = document.getElementById('sum');

let x = 0, y = 0; 
function clearScreen() {
    errorDiv.innerHTML = "";
    f1.innerHTML = "";
    f2.innerHTML = "";
    addButton.style.visibility = "hidden";
    sumTable.innerHTML += "";
}
function drawMatrix(num, x, y) {
    "use strict";
    const formID = "matrix" + String(num);
    document.getElementById(formID).innerHTML += "<h2> Matrix " + String(num) + "</h2>";
    for (let i = 1; i <= y; i++) {
        for (let j = 1; j <= x; j++) {
            document.getElementById(formID).innerHTML += "<input id='m" + String(num) + "r" + String(j) + "c" + String(i) + "'/>";
        }
        document.getElementById(formID).innerHTML += "<br/>";
    }
}
function drawBoxesAddition() {
    "use strict";
    event.preventDefault();
    clearScreen();
    let xValue, yValue, form = document.getElementById("sizeForm1");
    xValue = form.x.value;
    yValue = form.y.value;
    x = parseInt(xValue, 10);
    y = parseInt(yValue, 10);
    if(x < 1 || y < 1) {
        errorDiv.innerHTML = "Please enter a positive number";
    }
    else if(isNaN(x) || isNaN(y)) {
       errorDiv.innerHTML = "Please enter an integer";
    }
    else {
        drawMatrix(1, x, y);
        drawMatrix(2, x, y);
        addButton.style.visibility = "visible";
    }
}
function addMatrices() { 
    "use strict"; 
    event.preventDefault();
    for (let i = 1; i <= y; i++) {
        var row = sumTable.insertRow(); 
        for(let j = 1; j <= x; j++) {
            let name = "m1r" + String(j) + "c" + String(i); 
            if(document.getElementById(name)) {
                let cell1 = document.getElementById(name), cell2 = document.getElementById("m2r" + String(j) + "c" + String(i));
                let value1 = parseFloat(cell1.value, 10), value2 = parseFloat(cell2.value, 10); 
                if(isNaN(value1) || isNaN(value2)) {
                    clearScreen(); 
                    errorDiv.innerHTML = "Invalid Input";
                }
                else {
                    var cell = row.insertCell();
                    cell.innerHTML = String(value1 + value2);  
                }
            }
            else {
                clearScreen(); 
                errorDiv.innerHTML = "Unknown Error occurred <br/>"; 
                errorDiv.innerHTML += "x = " + String(j) + ", y = " + String(i);
            }
        }
    }
}
