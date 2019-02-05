var markMAss = 75; //kg
var johnMass = 81; //kg
var markHeight = 1.2; //meters
var johnHeight = 1.7;  //meters

var markBMI = markMAss / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

console.log(markBMI);
console.log(johnBMI);

var isMarkBmiHigher = markBMI > johnBMI;

console.log('is Mark\'s BMI higher that John\'s BMI?'+' '+ isMarkBmiHigher);
