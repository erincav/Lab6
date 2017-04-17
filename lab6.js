function convertTemp(tempGiven, desiredTemp){
  if (desiredTemp === "F"){
    return tempGiven * 9 / 5 + 32;

  } else if (desiredTemp === "C") {
    return (tempGiven -32) / 9 * 5;

  } else {
    console.log("Not an accurate input");
  }
}

console.log(convertTemp(212, "C") + " degrees Celsius today!");
console.log(convertTemp(32, "C") + " degrees Celsius today!");
console.log(convertTemp(65, "C") + " degrees Celsius today!");

console.log(convertTemp(100, "F") + " degrees Fahrenheit today!");
console.log(convertTemp(-40, "F") + " degrees Fahrenheit today!");
