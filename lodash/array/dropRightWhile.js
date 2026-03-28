// Xóa các phần tử từ cuối mảng thỏa mãn điều kiện cho trước
// Cú pháp: _.dropRightWhile(array, [predicate=_.identity])
// Create a slice of array excluding elements dropped from the end. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
// Tạo một lát của mảng loại trừ các phần tử bị loại bỏ từ cuối. Các phần tử bị loại bỏ cho đến khi predicate trả về falsey. Predicate được gọi với ba đối số: (value, index, array)

const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.dropRightWhile(arr, (n) => n > 5)); // [1, 2, 3, 4, 5]
console.log(_.dropRightWhile(arr, (n) => n % 2 === 0)); // [1, 2, 3, 4, 5, 6, 7]
