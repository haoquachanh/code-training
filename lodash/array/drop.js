// Tạo mảng mới từ mảng đầu bỏ đi n phần tử đầu tiên. Mặc định n là 1.
// Cú pháp: _.drop(array, [n=1])
// Create a slice of array with n elements dropped from the beginning.
// Tạo một lát của mảng với n phần tử bị loại bỏ từ đầu.

const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.drop(arr)); // [2, 3, 4, 5, 6, 7, 8]
console.log(_.drop(arr, 4)); // [5, 6, 7, 8]
