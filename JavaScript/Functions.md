# Function:
  A function is a "subprogram" that can be called by code external (or internal in the case of recursion) to the function. Like the program itself, a function is composed of a sequence of statements called the function body. Values can be passed to a function, and the function will return a value.

## Declearing a function.

A Functions consists of 3 things function name, parameter and a statements that define the function and 
enclosed in curly brackets,{  }.

``` javascript
function square(number) {
  return number * number;
}
``` 

## Function as Expression.

A Function can be called as a anonymous, such function does not have any names.

``` javascript
var square = function(number){ return number * number }
var result = square(4);
````
```
result variable will get 16.
```
  
## Note: Function expressions are convenient when passing a function as an argument to another function.

``` javascript
function map(f, a) {
  var result = []; // Create a new Array
  var i; // Declare variable
  for (i = 0; i != a.length; i++)
    result[i] = f(a[i]);
      return result;
}
var f = function(x) {
   return x * x * x; 
}
var numbers = [0, 1, 2, 5, 10];
var cube = map(f,numbers);
console.log(cube);
```
Function returns: [0, 1, 8, 125, 1000].


## Calling functions.

### Scope of function.

The scope of a function is the function in which it is declared, or the entire program if it is declared at the top level.

```
console.log(square); // square is hoisted with an initial value undefined.
console.log(square(5)); // TypeError: square is not a function
var square = function(n) { 
  return n * n; 
}

var square = function(number){return number * number}
```
Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined. In other words, a function defined in the global scope can access all variables defined in the global scope. A function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access.


```
// The following variables are defined in the global scope
var num1 = 20,
    num2 = 3,
    name = 'Chamahk';

// This function is defined in the global scope
function multiply() {
  return num1 * num2;
}

multiply(); // Returns 60

// A nested function example
function getScore() {
  var num1 = 2,
      num2 = 3;
  
  function add() {
    return name + ' scored ' + (num1 + num2);
  }
  
  return add();
}

getScore(); // Returns "Chamahk scored 5"

```

