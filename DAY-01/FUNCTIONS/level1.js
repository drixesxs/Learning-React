//function for getting your fullname
function fullName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(fullName('Timileyin', 'Ogunjimi'))

//function to sum two numbers
function sum(num1, num2){
    return num1 + num2
}
console.log(sum(2, 2))

//function to get area of a circle
function _areaOfCircle(r){
    return 3.14 * (r^2) 
}

//function to convert temperature in celcius to fahrenheit
function celciustoFah(celcius){
    const fahrenheit = (celcius * (9/5)) + 32
    console.log(`Temprature in fahrenheit is ${fahrenheit}`)
}



function getBMI(weight, height){
    const BMI = weight / (height * height)

    if (BMI < 18.5){
        console.log("You are Underweight, get in the gym and stuff some more hamburgers in you gaddemit!!!")
    } else if (BMI >= 18.5 || BMI <= 24.9){
        console.log('You are normal weight keep it up?!?!?')
    }else if (BMI >= 25 || BMI <= 29.9){
        console.log("You are overwight brudda, in the gym you too and no hamburgers!!!!")
    }else if (BMI >= 30){
        console.log("I have no words....")
    }
    console.log(BMI)

}

getBMI(52, 1.7)



function checkSeason(month) {
    if (month >= 3 && month <= 5) {
      return "Spring";
    } else if (month >= 6 && month <= 8) {
      return "Summer";
    } else if (month >= 9 && month <= 11) {
      return "Autumn";
    } else {
      return "Winter";
    }
  }
  