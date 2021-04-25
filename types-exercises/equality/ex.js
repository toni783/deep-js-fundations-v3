// TODO: write `findAll(..)`

function findAll(val, elements) {
  const resultArr = [];

  elements.forEach((element) => {
    // check exact matches (`Object.is(..)`)
    if (Object.is(val, element)) {
      resultArr.push(element);
      return;
    }

    // checks that booleans can only match booleans
    if (typeof val == "bolean" && typeof element == "bolean") {
      if (val == element) {
        resultArr.push(element);
        return;
      }
    }

    // checks that `null` can match `undefined`, and vice versa
    if (val == null && element == null) {
      resultArr.push(element);
      return;
    }

    //   checks that strings (except "" or whitespace-only) can match numbers
    //   here we need to take into account the corner case where  the second element could be an -0 ,thats why
    //   we added the !Object.is(-0, element), to avoid comparing to that value
    if (
      typeof val == "string" &&
      val.trim() != "" &&
      Number.isInteger(element) &&
      !Object.is(-0, element)
    ) {
      if (val == element) {
        resultArr.push(element);
        return;
      }
    }

    //   checks if numbers (except `NaN` and `+/- Infinity`) can match strings (hint: watch out for `-0`!)
    //   here we need to take into account the corner case where  the second element could be an empty string or have white spaces ,thats why
    //   we added the element.trim() != "", to avoid comparing to that value

    if (
      Number.isInteger(val) &&
      !Object.is(val, -0) &&
      !Object.is(val, NaN) &&
      !Object.is(val, Infinity) &&
      !Object.is(val, -Infinity) &&
      typeof element == "string" &&
      element.trim() != ""
    ) {
      if (val == element) {
        resultArr.push(element);
        return;
      }
    }
  });

  return resultArr;
}

// tests:
var myObj = { a: 2 };

var values = [
  null,
  undefined,
  -0,
  0,
  13,
  42,
  NaN,
  -Infinity,
  Infinity,
  "",
  "0",
  "42",
  "42hello",
  "true",
  "NaN",
  true,
  false,
  myObj,
];

console.log(setsMatch(findAll(null, values), [null, undefined]) === true);
console.log(setsMatch(findAll(undefined, values), [null, undefined]) === true);
console.log(setsMatch(findAll(0, values), [0, "0"]) === true);
console.log(setsMatch(findAll(-0, values), [-0]) === true);
console.log(setsMatch(findAll(13, values), [13]) === true);
console.log(setsMatch(findAll(42, values), [42, "42"]) === true);
console.log(setsMatch(findAll(NaN, values), [NaN]) === true);
console.log(setsMatch(findAll(-Infinity, values), [-Infinity]) === true);
console.log(setsMatch(findAll(Infinity, values), [Infinity]) === true);
console.log(setsMatch(findAll("", values), [""]) === true);
console.log(setsMatch(findAll("0", values), [0, "0"]) === true);
console.log(setsMatch(findAll("42", values), [42, "42"]) === true);
console.log(setsMatch(findAll("42hello", values), ["42hello"]) === true);
console.log(setsMatch(findAll("true", values), ["true"]) === true);
console.log(setsMatch(findAll(true, values), [true]) === true);
console.log(setsMatch(findAll(false, values), [false]) === true);
console.log(setsMatch(findAll(myObj, values), [myObj]) === true);

console.log(setsMatch(findAll(null, values), [null, 0]) === false);
console.log(setsMatch(findAll(undefined, values), [NaN, 0]) === false);
console.log(setsMatch(findAll(0, values), [0, -0]) === false);
console.log(setsMatch(findAll(42, values), [42, "42hello"]) === false);
console.log(setsMatch(findAll(25, values), [25]) === false);
console.log(
  setsMatch(findAll(Infinity, values), [Infinity, -Infinity]) === false
);
console.log(setsMatch(findAll("", values), ["", 0]) === false);
console.log(setsMatch(findAll("false", values), [false]) === false);
console.log(setsMatch(findAll(true, values), [true, "true"]) === false);
console.log(setsMatch(findAll(true, values), [true, 1]) === false);
console.log(setsMatch(findAll(false, values), [false, 0]) === false);

// ***************************

function setsMatch(arr1, arr2) {
  if (
    Array.isArray(arr1) &&
    Array.isArray(arr2) &&
    arr1.length == arr2.length
  ) {
    for (let v of arr1) {
      if (!arr2.includes(v)) return false;
    }
    return true;
  }
  return false;
}
