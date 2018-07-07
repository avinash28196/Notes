# Arrow Functions:

An arrow function expression has a shorter syntax than a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best suited for non-method functions, and they cannot be used as constructors.

```javascript
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

console.log(materials.map(material => material.length));
// expected output: Array [8, 6, 7, 9]
```


## Note:

1. (param1, param2, …, paramN) => { statements } 
   (param1, param2, …, paramN) => expression
   // equivalent to: => { return expression; } 


2. // Parentheses are optional when there's only one parameter name:
   (singleParam) => { statements }
    singleParam => { statements }


3. // The parameter list for a function with no parameters should be written with a pair of parentheses.
    () => { statements }

[Arrow](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
