// Tạo mảng mới từ mảng đầu bỏ đi n phần tử cuối cùng. Mặc định n là 1.
// Cú pháp: _.dropRight(array, [n=1])
// Create a slice of array with n elements dropped from the end.
// Tạo một lát của mảng với n phần tử bị loại bỏ từ cuối.

const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.dropRight(arr)); // [1, 2, 3, 4, 5, 6, 7]
console.log(_.dropRight(arr, 4)); // [1, 2, 3, 4]
