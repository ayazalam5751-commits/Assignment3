// Assignment--3

/*Q.1-Create a function processArray(arr, callback) that passes each array
element to a callback and collects the returned values in a new array.*/

function processArray(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const value = callback(arr[i], i, arr);
    if (value !== undefined) {   // Step 3 (filtering) ke liye
      result.push(value);
    }
  }
  return result;
}

// Q.2-Use processArray() to square every number in an array.
function square(arr) {
    return arr ** 2;
}
console.log(processArray([1, 2, 3, 4, 5], square));


/* Q.3-Use processArray() to return only even numbers. Define a suitable callback
and modify the main function if necessary to support filtering.*/
function onlyEven(num) {
    if (num % 2 === 0) {
        return num;
    }
}
console.log(processArray([1, 2, 3, 4, 5], onlyEven));


/* Q.4-Create a function processString(str, callback) that passes a string to a
callback.*/
function processString(str, callback) {
    return callback(str);
}


//Q.5-Use a callback to convert a string to uppercase
function upper(str) {
    let new_str = "";
    for (let i = 0; i < str.length; i++) {
        new_str += str[i].toUpperCase();
    }
    return new_str;
}
console.log(processString("quad ai ", upper));


//Q.6-Use a callback to count the number of words in a sentence.
function count_words(str) {
    return str.trim() === "" ? 0 : str.trim().split(/\s+/).length;
}
console.log(processString("my name is ayaz", count_words));


/*Q.7-Create a function calculate(a, b, callback) that performs an operation
based on the callback provided*/
function calculate(a, b, callback) {
    return callback(a, b);
}

/*Q.8-Use calculate() with callbacks for addition, subtraction, multiplication, and
division*/
const add = function (a, b) {
  return a + b;
};
const subtract = function (a, b) {
  return a - b;
};
const multiply = function (a, b) {
  return a * b;
};
const divide = function (a, b) {
  if (b === 0) return "Division by zero is not allowed";
  return a / b;
};
function calculate(a, b, operation) {
  return operation(a, b);
}

console.log(calculate(10, 5, add));      
console.log(calculate(10, 5, subtract)); 
console.log(calculate(10, 5, multiply));
console.log(calculate(10, 5, divide));   
console.log(calculate(10, 0, divide));   


/*Q-9Create a function findElement(arr, callback) that returns the first element
satisfying a condition, or undefined if no element matches.*/
function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {    
        if (callback(arr[i])) {
            return arr[i];
        }
    }
    return undefined;
}
const greaterthan50 = findElement([20, 30, 650, 60, 560], (num) => num > 50);
console.log(greaterthan50);

