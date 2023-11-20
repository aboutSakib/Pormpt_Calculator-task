function myfunction() {
  var x, y, z, operator;
  x = prompt("Enter Your First Number");
  y = prompt("Enter Your First Number");
  operator = prompt("Type an Operator");
  if (operator == "+") {
    z = Number(x) + Number(y);
  } else if (operator == !null) {
    z = "Error";
  } else if (x == !null) {
    z = "Error";
  } else if (y == !null) {
    z = "Error";
  } else if (operator == "/") {
    z = Number(x) / Number(y);
  } else if (operator == "*") {
    z = Number(x) * Number(y);
  } else if (operator == "-") {
    z = Number(x) - Number(y);
  }
  return z;
}
document.getElementById("demo").innerHTML = myfunction();
