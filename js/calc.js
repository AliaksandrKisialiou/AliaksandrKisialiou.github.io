function addition(a, b) {
  return a + b;
}

function subtraction(a, b) {
  return a - b;
}

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  return a / b;
}

function integerDivision(a, b) {
  return (a / b).toFixed(0);
}

function doTest(type1, type2) {
  console.log(type1 + "(" + typeof(type1) + ")" + " + " + type2 + "(" + typeof(type2) + ")" + " = " + addition(type1, type2));
  console.log(type1 + "(" + typeof(type1) + ")" + " - " + type2 + "(" + typeof(type2) + ")" + " = " + subtraction(type1, type2));
  console.log(type1 + "(" + typeof(type1) + ")" + " * " + type2 + "(" + typeof(type2) + ")" + " = " + multiplication(type1, type2));
  console.log(type1 + "(" + typeof(type1) + ")" + " / " + type2 + "(" + typeof(type2) + ")" + " = " + division(type1, type2));
  console.log(type1 + "(" + typeof(type1) + ")" + " % " + type2 + "(" + typeof(type2) + ")" + " = " + integerDivision(type1, type2));
}

function calcTest() {

  var num = 55;
  var str = "13";
  var bool = true;

  doTest(num, str);
  doTest(str, num);
  doTest(num, bool);
  doTest(num, null);
  doTest(num);
  doTest();
}