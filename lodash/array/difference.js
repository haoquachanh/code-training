// Tìm phần tử không chứa trong mảng từ mảng khác
// Cú pháp: _.difference(array, [MẢNG khác]) bắt buộc phải là mảng.
// Create an array of array values not included in the other given arrays using
// Tạo một mảng các giá trị mảnh không có trong các mảng khác đã cho sử dụng.

const _ = require("lodash");

const arr = [1, 2];
const arr2 = [2, 3, 4, 5, 6];

console.log(_.difference(arr, arr2)); // [1]
console.log(_.difference(arr2, arr)); // [3, 4, 5, 6]
console.log(_.difference(arr2, [2, 4])); // [3, 5, 6]
console.log(_.difference(arr2, 2)); // [3, 4, 5, 6] vì 2 không phải là mảng nên nó sẽ được coi là một phần tử riêng biệt và không bị loại bỏ khỏi arr2.
