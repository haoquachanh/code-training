// Làm mảng phẳng hoàn toàn.
// Cú pháp: _.flattenDeep(array)
// Recursive flattening an array.
// Làm phẳng một mảng đệ quy.

const _ = require("lodash");

const arr = [1, [2, [3, [4]], 5]];
console.log(_.flattenDeep(arr));
// => [1, 2, 3, 4, 5]
console.log(_.flattenDepth(arr, 2));
// => [1, 2, 3, [4], 5]
