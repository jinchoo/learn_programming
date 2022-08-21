//FUNCTION BODY II

// Now let's say that this funciton will also add an additional tax of a fixed 200 cents(or 2 dollars), here's how it would look like:

function getCoursePriceInCents(dollars) {
  return dollars * 100 + 200
}

// This function takes the amount in dollars, then multiplies it by 100 and then adds to it 200.

// You can also write this on multiple ones, showing hte logic step by step:

function getCoursePriceInCents1(dollars) {
  let amount = dollars * 100
  amount = amount + 200
  return amount
}

// So the above example starts by defining the variable amount to dollars * 100.  Then it adds to it 200 and finally, it returns that varaible amount.

//===========================================================================================================================

//Complete the convertMtoKM funciton such that it coverts the meters it receives into kilometers.

function convertMtoKM(meters) {
  return meters * 0.001
}

//Complete the convertKMtoMiles function such that it returns the number of kilometers it receives, converted to miles.
// The formula for coverint from km to miles is: valueInKilometers multiplied by 0.62137

function convertKMtoMiles2(km) {
  let valueInKilometers = km * 0.62137
  return valueInKilometers
}

//===========================================================================================================================

// CELSIUS TO FAHRENHEIT
// Complete the convertCelsiusToFahrenheit function such that it returns the Celsius temperature it receives, onverted to Fahrenheit.

// The formula to convert from Celsius to Fahrenheit is:
//numberInCelsius multiplied by 9 then divided by 5 and finally you need to add 32 to that number.

function covertCelsiusToFahrenheit(celsius) {
  let numberInCelsius = (celsius * 9) / 5 + 32
  return numberInCelsius
}
