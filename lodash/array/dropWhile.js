// Xóa các phần tử đầu mảng thõa mãn điều kiện cho trước.
// Cú pháp: _.dropWhile(array, [predicate=_.identity])
// Create a slice of array excluding elements dropped from the beginning. Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array).
// Tạo một lát của mảng loại trừ các phần tử bị loại bỏ từ đầu. Các phần tử bị loại bỏ cho đến khi predicate trả về falsey. Predicate được gọi với ba đối số: (value, index, array)

const _ = require("lodash");

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(_.dropWhile(arr, (n) => n < 5));
console.log(_.dropWhile(arr, (n) => n % 2 === 0));

var users = [
  { user: "A", active: false },
  { user: "B", active: false },
  { user: "C", active: true },
  { user: "D", active: true },
  { user: "E", active: false },
];

console.log(_.dropWhile(users, (o) => !o.active));
