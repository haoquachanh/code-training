//
// Syntax: _initial(array)
// Get all but the last element of array.
// Lấy tất cả phần tử của mảng ngoại trừ phần tử cuối cùng.

const _ = require("lodash");

const array = [1, 2, 3];
console.log(_.initial(array)); // [1, 2]
