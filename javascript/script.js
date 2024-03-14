function alertName() {
    alert("Haseeb Raza");
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = 'alert("Haseeb Raza");';
}
function alertNumber() {
    alert(25);
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = "alert(25);";
    document.getElementById("output").innerHTML = "25";
}
function showVariableName() {
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    // document.getElementById("statement").innerHTML = "alert(25);";
    let html = "<ul style ='text-align:left;'><li>A variable name can't contain any spaces.</li><li>A variable name can contain only letters, numbers, dollar signs, and underscores.</li><li>Though a variable name can't be any of JavaScript's keywords, it can contain keywords. For example, <code>userAlert</code> and <code>myVar</code> are legal. </li><li>Capital letters are fine, but be careful. Variable names are case sensitive. A <code>rose</code> is not a <code>Rose</code>. If you assign the string 'Floribundas' to the variable <code>rose</code>, and then ask JavaScript for the value assigned to <code>Rose</code>, you'll come up empty. </li></ul>";
    document.getElementById("output").innerHTML = html;
}
function showCamelCaseExamples() {
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    // document.getElementById("statement").innerHTML = "alert(25);";
    let html = "<ul style ='text-align:left;'><b>Examples :</b><br/><li><code>userResponse</code></li><li><code>userResponseTime</code></li><li><code>userResponseTimeLimit</code></li><li><code>response</code></li></ul>";
    document.getElementById("output").innerHTML = html;
}
function sum2Number() {
    let num1 = 10;
    let num2 = 5;
    let sum = num1 + num2;
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = "let num1 = " + num1 + ";" + "<br/>" + "let num2 = " + num2 + ";" + "<br/>" + "let sum = " + "num1 + num2;" ;
    document.getElementById("output").innerHTML = sum;
}
function substract2Number() {
    let num1 = 10;
    let num2 = 5;
    let substract = num1 - num2;
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = "let num1 = " + num1 + ";" + "<br/>" + "let num2 = " + num2 + ";" + "<br/>" + "let sum = " + "num1 - num2;" ;
    document.getElementById("output").innerHTML = substract;
}
function multiply2Number() {
    let num1 = 10;
    let num2 = 5;
    let  multiply= num1 * num2;
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = "let num1 = " + num1 + ";" + "<br/>" + "let num2 = " + num2 + ";" + "<br/>" + "let sum = " + "num1 * num2;" ;
    document.getElementById("output").innerHTML = multiply;
}
function divide2Number() {
    let num1 = 10;
    let num2 = 5;
    let divide = num1 / num2;
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = "let num1 = " + num1 + ";" + "<br/>" + "let num2 = " + num2 + ";" + "<br/>" + "let sum = " + "num1 / num2;" ;
    document.getElementById("output").innerHTML = divide;
}
function calculateSomeNumbers() {
    let someCalculation = 36/6*3+2**4-(3+5);
    document.getElementById("statement").innerHTML = " ";
    document.getElementById("output").innerHTML = " ";
    document.getElementById("statement").innerHTML = "let someCalculation = "  + "36/6*3+2**4-(3+5);";
    document.getElementById("output").innerHTML = someCalculation;
}

// clear Statement function
function clearStatement() {
    document.getElementById("statement").innerHTML = " ";
}
// clear output function
function clearOutput() {
    document.getElementById("output").innerHTML = " ";
}