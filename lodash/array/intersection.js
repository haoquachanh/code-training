// Intersection là Giao
// Syntax: _.intersection([arrays])
// Create an array of unique values that are included in all given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.
// Tạo một mảng các giá trị duy nhất được bao gồm trong tất cả các mảng đã cho sử dụng SameValueZero để so sánh bằng nhau. Thứ tự và tham chiếu của các giá trị kết quả được xác định bởi mảng đầu tiên.

const _ = require("lodash");

const arr = [2, 1, 3];
const other = [2, 3];

const result = _.intersection(arr, other);
console.log(result); // Output: [2, 3]
