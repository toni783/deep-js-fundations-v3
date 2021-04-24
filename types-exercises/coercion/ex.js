// TODO: write the validation functions

// here we check if the param is an string and after that we trim the string to remove white spaces and we check the length
function isValidName(params) {
  return typeof params === "string" && params.trim().length >= 3;
}

function hoursAttended(attended, length) {
  // we check if the parameters are strings and we check if the strings are not empty since we have the
  // corner case that we could have empty strings ,so we are only converting strings with a value

  // Notice how we are reasigin a variable since we are changing the types for our function
  if (typeof attended == "string" && attended.trim() !== "") {
    attended = Number(attended);
  }

  if (typeof length == "string" && length.trim() != "") {
    length = Number(length);
  }

  // first we check if we are handling numbers with typeof attended == "number" &&
  // typeof length == "number"

  // after this we check if the numbers are greater or equal than 0 attended >= 0 &&
  // length >= 0 &&

  // after this we also check if we have integer numbers with Number.isInteger, notice that the previous
  // if statements where only converting the strings to numbers but we didnt take into account if other values like null or boleans where used,
  // with this we can check if we have whole integer numbers and also check if the value is a number or nor

  // since we already know that we have a number because of the previous cases we can just compare if attended <= length

  // Notice how in the if statements when we just use the double equal signs ,this is because we know typeof will alwyas return an string so we wont have
  // other corner cases to handle
  if (
    typeof attended == "number" &&
    typeof length == "number" &&
    attended >= 0 &&
    length >= 0 &&
    Number.isInteger(attended) &&
    Number.isInteger(length) &&
    attended <= length
  ) {
    return true;
  }
  return false;
}

// tests:
console.log(isValidName("Frank") === true);
console.log(isValidName(false) === false);
console.log(isValidName(null) === false);
console.log(isValidName(undefined) === false);
console.log(isValidName("") === false);
console.log(isValidName("  \t\n") === false);
console.log(isValidName("X") === false);

console.log(hoursAttended(6, 10) === true);
console.log(hoursAttended(6, "10") === true);
console.log(hoursAttended("6", 10) === true);
console.log(hoursAttended("6", "10") === true);
console.log(hoursAttended("", 6) === false);
console.log(hoursAttended(6, "") === false);
console.log(hoursAttended("", "") === false);
console.log(hoursAttended("foo", 6) === false);
console.log(hoursAttended(6, "foo") === false);
console.log(hoursAttended("foo", "bar") === false);
console.log(hoursAttended(null, null) === false);
console.log(hoursAttended(null, undefined) === false);
console.log(hoursAttended(undefined, null) === false);
console.log(hoursAttended(undefined, undefined) === false);
console.log(hoursAttended(false, false) === false);
console.log(hoursAttended(false, true) === false);
console.log(hoursAttended(true, false) === false);
console.log(hoursAttended(true, true) === false);
console.log(hoursAttended(10, 6) === false);
console.log(hoursAttended(10, "6") === false);
console.log(hoursAttended("10", 6) === false);
console.log(hoursAttended("10", "6") === false);
console.log(hoursAttended(6, 10.1) === false);
console.log(hoursAttended(6.1, 10) === false);
console.log(hoursAttended(6, "10.1") === false);
console.log(hoursAttended("6.1", 10) === false);
console.log(hoursAttended("6.1", "10.1") === false);
