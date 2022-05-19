# Array methods in JavaScript

## Array.toString

Converts an array into a string of comma-separated array values:
```js
let names = ["Bob", "Frank", "Dan"]
let strNames = names.toString() // Bob,Frank,Dan
```

## Array.join

Similar to toString, but you can specify the separator:
```js
let names = ["Bob", "Frank", "Dan"]
let strNames = names.join(" and ") // Bob and Frank and Dan
```

## Array.concat
Create a new array by concatenating existing arrays:
```js
let nums = [1, 2, 3]
let nums2 = [4, 5, 6]
let nums3 = [7, 8, 9]
let concatArr = nums.concat(nums2, nums3)
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## Array.splice

The splice() method can be used to add new items to an array:

```js
let arr = ["Danny", "Joe"]
arr.splice(1, 0, "Alice", "Amy")
console.log(arr) // ['Danny', 'Alice', 'Amy', 'Joe']
```

- The first parameter (1) defines the index from where the new elements should be added (spliced in).
- The second parameter (0) defines how many elements should be removed.
- The rest of the parameters ('Alice', 'Amy') define the new elements to be added.

splice() returns an array with the deleted items:
```js
let arr = ["Danny", "Joe"]
let spliced = arr.splice(1, 1, "Alice", "Amy") // ['Joe']
console.log(arr) // ['Danny', 'Alice', 'Amy']
```
We can also delete items without adding any new ones:

```js
let arr = ["Danny", "Joe", "Amy"]
let spliced = arr.splice(1, 1) // ['Joe']
console.log(arr) // ['Danny', 'Amy']
```

Since splice() mutates the original array, it is often best to make a copy of it before splicing.

## Array.slice

slice() slices out a piece of an array, and returns it in a new array:

```js
let arr = ["Danny", "Joe", "Amy"]
let slice = arr.slice(1) // ['Joe', 'Amy']
```
- Above, we are slicing from the element at index 1. slice() does not mutate the original array.
- We can provide a start and end index to splice from (up to but not including end index):

```js
let arr = ["Danny", "Joe", "Amy"]
let slice = arr.slice(0, 2) // ['Danny', 'Joe']
```

## Array.indexOf
Find the first index that contains a certain value (searches from left to right):

```js
let arr = ["Danny", "Joe", "Amy", "Joe"]
let index = arr.indexOf("Joe") // 1
```

33 Array.lastIndexOf
Find the last index that contains a certain value (searches from right to left):
```js
let arr = ["Danny", "Joe", "Amy", "Joe"]
let index = arr.lastIndexOf("Joe") // 3
```
# Higher-order array methods in JavaScript

## what is a higher-order function?
A higher-order function is a function that accepts functions as arguments, and/or returns a function. So, higher-order functions are functions that operate on other functions.

In JavaScript, these methods are shared between array instances via prototypal inheritance from Array.

## Array.forEach
The forEach method is basically just a shorter way of writing for(let i = 0; i < arr.length; i++) {...}.

It loops through the given array, and calls the given call-back function for each of the elements in the array.

The call-back passed to the forEach() function can accept any of the three arguments:
- the item value
- the item index
- the array itself
Example:
```js
let numbers = [1, 2, 3, 4]
numbers.forEach(n => console.log(n))
// 1
// 2
// 3
// 4
```
It's better to use map if you want to return a new array with return value of each call-back run.

## Array.map
The map function takes in a call-back function as argument, and executes that function on each element of the array it is working on. It maps each of the return values of the call-back into a new array. It does not mutate the original array.

The call-back passed to the map() function can accept any of the three arguments:
- the item value
- the item index
- the array itself
Examples:
```js
let numbers = [1, 2, 3, 4]
// Double all numbers
let doubledNumbers = numbers.map(n => n _ 2) // [2, 4, 6, 8]
// Only double numbers at odd indexes
let doubledOddIndexNumbers = numbers.map((n, i) => {
if (i % 2 === 1) return n _ 2
else return n
}) // [1, 4, 3, 8]
```

## Array.filter
The filter method is used to filter out array elements that fail a boolean test. Only elements that pass the test are allowed through into the new return array.
The call-back passed to the filter() function can accept any of the three arguments:
- the item value
- the item index
- the array itself
A good use case for filter is a search bar:

```js
let articles = [
{ title: "PHP classes", author: "Danny Franks" },
{ title: "Python arrays", author: "Amy Sanders" },
{ title: "Arrays in PHP", author: "Danny Franks" },
]
// Lets say the user searches for all articles with PHP in the title
let PHPArticles = articles.filter(a => a.title.includes("PHP"))
// [
// { title: 'PHP classes', author: 'Danny Franks' },
// { title: 'Arrays in PHP', author: 'Danny Franks' },
// ];
Another use case is filtering via size:
let cities = [
{ name: "Stokington", rivers: 3 },
{ name: "Phillydelfia", rivers: 6 },
{ name: "New Ports", rivers: 2 },
]
let moreThanTwoRivers = cities.filter(c => c.rivers > 2)
// [
// { name: 'Stokington', rivers: 3 },
// { name: 'Phillydelfia', rivers: 6 },
// ];
```
## Array.reduce

The reduce method runs the call-back function on each array element, and reduces the array down into a single value.
The reduce function itself takes two arguments:
- A call-back function
- An initial value
- reduce(callback, initialVal)
The call-back function passed into reduce can take up to four arguments:
- total or "accumulator"
- current item value
- current item index
- the array itself

Example:

```js
let numbers = [1, 2, 3, 4]
let total = numbers.reduce((total, currentNum) => total + currentNum) // 10
```

In the above example, total is initially the first value in the array (1), and currentNum is the second (2).

If we wanted to start from a different value, we can pass in a second initialVal argument to reduce. Let's say we wanted to find the total, starting from 5:

```js
let numbers = [1, 2, 3, 4]
let total = numbers.reduce((total, currentNum) => total + currentNum, 5) // 15
```
Above, total will now start out as 5, and currentNum will be the first element in the array (1).
Another good use case of reduce is to find the max or min value in an array:
```js
let arr = [1, 2, 3]
let max = arr.reduce((a, b) => {
return Math.max(a, b)
}, -Infinity)
```

## Array.some
The some method checks if some array values pass a test. It returns either true or false.
The call-back takes 3 arguments:
- The item value
- The item index
- The array itself
Example:
```js
let numbers = [4, 6, 14, 16]
let isSomeGreaterThan6 = numbers.some(n => n > 6) // true
let isSomeLessThan4 = numbers.some(n => n < 4) // false
```

## Array.every
every is similar to the some method, but checks if every value in the array passes a certain test, rather than just some.
Example:
```js
let numbers = [4, 6, 14, 16]
let isEverythingGreaterThan6 = numbers.every(n => n > 6) // false
let isEverythingLessThan20 = numbers.some(n => n < 20) // true
```

## Array.find
The find method returns the first element in the array that passes a certain test.

The call-back passed to find takes 3 arguments:
- The item value
- The item index
- The array itself

Example
```js
let stock = [
{ item: "ketchup", quantity: 32 },
{ item: "mayo", quantity: 9 },
{ item: "hot sauce", quantity: 12 },
]
let mayo = stock.find(s => s.item === "mayo")
// { item: 'mayo', quantity: 9 }
```

## Array.findIndex
Same as find, but returns the index instead of the value:
```js
let stock = [
{ item: "ketchup", quantity: 32 },
{ item: "mayo", quantity: 9 },
{ item: "hot sauce", quantity: 12 },
]
let mayoIndex = stock.findIndex(s => s.item === "mayo")
```

## Array.sort

sort puts an array's elements in ascending order. It is an "in-place" sorting algorithm - meaning that it mutates the original array and returns it.

By default, sort works on strings:

```js
let names = ["Bob", "Frank", "Dan"]
names.sort()
console.log(names) // ['Frank', 'Dan', 'Bob']
```
For numbers, we need to pass a comparison call-back function:
```js
let numbers = [3, 1, 7, 2]
numbers.sort((a, b) => a - b)
console.log(numbers) // [1, 2, 3, 7]
Initially, a is 3 and b is 1. If a - b is negative, it knows that b is larger, and therefore should come after a. If positive, b should come before a.
```
