# The filter() method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
Example1.

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

output: Array ["exuberant", "destruction", "present"]

Example2.

var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];


var speeds = trips.map( trip => { return trip.distance / trip.time })
.filter( value => value > 2 );
console.log(speeds)

Output: [3.4,2.36]

```

## Invalid entries in the JSON

```javascript

var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  } 
  invalidEntries++;
  return false; 
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID); 
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries); 
// Number of Invalid Entries = 5

```

### Searching in array

```javascript 
 const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```
