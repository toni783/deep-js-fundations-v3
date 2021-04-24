// TODO: define polyfill for `Object.is(..)`

// first we verify if the object is defined since this is a polyfill
// since we are working with es6 ,it will be defined so we wil add || true to the if statement to run our code
if (!Object.is || true) {
  Object.is = function ObjectIs(x, y) {
    var xNegZero = isItNegZero(x);
    var yNegZero = isItNegZero(y);

    if (xNegZero || yNegZero) {
      // if either one of the passe down values is negative zero
      //   we just return the comparision between the two of them
      return xNegZero && yNegZero;
    } else if (isItNaN(x) && isItNaN(y)) {
      // if both values are NaN we return true ,else we just return the strict equality
      return true;
    } else {
      return x === y;
    }
    // ****
    // function that checks if a number is negative zero
    function isItNegZero(x) {
      // if a number is equal to 0 (x === 0) it means that a zero was passed down 0 or -0
      //  and 1 devided by that number is equal to -Infinity (meaning that the value that devided the 1 is -0)
      //   then the number is a negative zero (-0)
      return x === 0 && 1 / x === -Infinity;
    }
    // function that checks if the number is NaN
    function isItNaN(x) {
      // NaN is the only value in javascript that is not equal to itself so if the value is different to itself then tha value is NaN
      return x !== x;
    }
  };
}
// tests:
console.log(Object.is(42, 42) === true);
console.log(Object.is("foo", "foo") === true);
console.log(Object.is(false, false) === true);
console.log(Object.is(null, null) === true);
console.log(Object.is(undefined, undefined) === true);
console.log(Object.is(NaN, NaN) === true);
console.log(Object.is(-0, -0) === true);
console.log(Object.is(0, 0) === true);

console.log(Object.is(-0, 0) === false);
console.log(Object.is(0, -0) === false);
console.log(Object.is(0, NaN) === false);
console.log(Object.is(NaN, 0) === false);
console.log(Object.is(42, "42") === false);
console.log(Object.is("42", 42) === false);
console.log(Object.is("foo", "bar") === false);
console.log(Object.is(false, true) === false);
console.log(Object.is(null, undefined) === false);
console.log(Object.is(undefined, null) === false);
