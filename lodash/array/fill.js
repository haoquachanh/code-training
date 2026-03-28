// Fill mảng với giá trị từ VỊ TRÍ start đến nhưng không bao gồm end.
// Cú pháp: _.fill(array, value, [start=0], [end=array.length])
// Fill elements of array with value from start up to, but not including, end.
// Fill các phần tử của mảng bằng giá trị từ start đến nhưng không bao gồm end.

const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.fill(arr, "a")); // ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']
console.log(_.fill(arr, "b", 2)); // ['a', 'a', 'b', 'b', 'b', 'b', 'b', 'b']
console.log(_.fill(arr, "c", 2, 6)); // ['a', 'a', 'c', 'c', 'c', 'c', 'b', 'b']
