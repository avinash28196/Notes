# Array Helpers and other built In's.

1. forEach
2. map
3. filter
4. reduce
5. Every and some
6. find 

## map() and forEach() So, what’s the difference?

Map & ForEach Defined
Let’s first take a look at the definitions on MDN:

* forEach() — executes a provided function once for each array element.
  Well, the forEach() method doesn’t actually return anything (undefined). It simply calls a provided function on each element   in your array. This callback is allowed to mutate the calling array.
* map() — creates a new array with the results of calling a provided function on every element in the calling array.
  Meanwhile, the map() method will also call a provided function on every element in the array. The difference is that map()     utilizes return values and actually returns a new Array of the same size.


# forEach() - executes a provided function once for each array element.

```javascript
var colors = ['Green', 'Red', , 'Blue'];

colors.forEach(function(color) {
	console.log(colorValue); 
});

// Or ES6 Arrow syntax:

colors.forEach(color => console.log(color));

// Or Creating a function and passing the function to forEach.

function color(colorValue){
	console.log(colorValue);
};

colors.forEach(color);
// -------------------------------
// Output for all the above syntax:
  Green
  Red
  Blue

```

Note: In the above array 2nd index is null, foreach does not ittrate over the undefined of null items.


### Printing the contents of an array
```javascript
var colors = ['Green', 'Red', , 'Blue'];

function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}

// Notice that index 2 is skipped since there is no item at
// that position in the array.

colors.forEach(logArrayElement)

Output:

a[0] = Green
a[1] = Red
a[3] = Blue

```
### Using thisArg updates an object's properties from each entry in the array.

```javascript
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3 
obj.sum;
// 16

```
Since the thisArg parameter (this) is provided to forEach(), it is passed to callback each time it's invoked, for use as its this value.

Note:If passing the function argument using an arrow function expression the thisArg parameter can be omitted as arrow functions lexically bind the this value.

# map() — creates a new array with the results of calling a provided function on every element in the calling array.

```javascript
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);

console.log(roots)

Output: [1,2,3]

-------------------------------------
var numbers = [1, 4, 9];
var doubles = numbers.map(function(num) {
  return num * 2;
});

// doubles is now [2, 8, 18]
// numbers is still [1, 4, 9]
```
### Calculating value with map

```javascript
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds = trips.map( trip => { return trip.distance / trip.time });
console.log(speeds)

Output: [3.4,1.8,2.36]
```

# Which is better?

## Speed Considerations

[](https://cdn-images-1.medium.com/max/1600/1*aVOlJ0l02ymgVrQ8axIBrQ.png)
As you can see, on my machine forEach() was more than 70% slower than map(). Your browser is probably different.

## Functional Considerations
*. It’s important to also understand that using map() may be preferable if you favor functional programming.

*. This is because forEach() affects and changes our original Array, whereas map() returns an entirely new Array — thus leaving the original array unchanged

*. forEach() may be preferable when you’re not trying to change the data in your array, but instead want to just do something with it — like saving it to a database or logging it out

*. map() might be preferable when changing or altering data. Not only is it faster but it returns a new Array. This means we can do cool things like chaining on other methods ( map(), filter(), reduce(), etc.)

# Key points:

1. Just about anything you can do with forEach() you can do with map(), and vise versa.
2. map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
2. forEach() will allow a callback function to mutate the current array. map() will instead return a new array.





https://medium.com/@voonminghann/array-helper-methods-in-es6-412dbc3f845b

https://codeburst.io/javascript-map-vs-foreach-f38111822c0f
