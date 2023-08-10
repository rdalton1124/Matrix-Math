const f1 = document.getElementById('matrix1');
const f2 = document.getElementById('matrix2');
const addButton = document.getElementById("add");
const errorDiv = document.getElementById('error');
const sumTable = document.getElementById('sum');

let matrix1 = [[], []]; 
let matrix2 = [[], []];
let x = 0, y = 0; 
let x2 = 0, y2 = 0;  
function clearScreen() {
    errorDiv.innerHTML = "";
    f1.innerHTML = "";
    f2.innerHTML = "";
    addButton.style.visibility = "hidden";
    sumTable.innerHTML += "";
}
function clearArrays() {
    matrix1 = [[], []]; 
    matrix2 = [[], []];
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
function assignArrays(w1, h1, w2, h2) {
    matrix1 = [[w1], [h1]];
    matrix2 = [[w2], [h2]]; 
    for(let i = 0; i < h1; i++) {
        for(let j = 0; j < w1; j++) {
            let name = "m1r" + String(j + 1) + "c" + String(i + 1); 
            if (document.getElementById(name)) {
                let cell = document.getElementById(name); 
                let value = cell.value; 
                if(isNaN(value)) {
                    clearScreen(); 
                    errorDiv.innerHTML = "Invalid Input";
                }
                else {
                    matrix1[j][i] = parseFloat(value); 
                }
            }
            else {
                clearScreen(); 
                errorDiv.innerHTML = "Unknown error occurred";             }
        }
    }
    for(let i = 0; i < h2; i++) {
        for(let j = 0; j < w2; j++) {
            let name = "m2r" + String(j + 1) + "c" + String(i + 1); 
            if (document.getElementById(name)) {
                let cell = document.getElementById(name); 
                let value = cell.value; 
                if(isNaN(value)) {
                    clearScreen(); 
                    errorDiv.innerHTML = "Invalid Input";
                }
                else {
                    matrix2[j][i] = parseFloat(value); 
                }
            }
            else {
                clearScreen(); 
                errorDiv.innerHTML = "Unknown Error Occurred";
            }
        }
    }
}
function addMatrices() { 
    "use strict"; 
    event.preventDefault();
    assignArrays(x, y, x, y);
    clearScreen(); 
    for(let i = 0; i < y; i++) {
        let row = sumTable.insertRow(); 
        for(let j = 0; j < x; j++) {
            let cell = row.insertCell(); 
            cell.innerHTML = String(matrix1[j][i] + matrix2[j][i]); 
        }
    }
}
