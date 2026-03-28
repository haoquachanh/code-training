// Nối mảng với bất kỳ mảng / số nào
// Cú pháp: _.concat(array, [values], [arr])
// Create a new array concatenating array with any additional arrays and/or values.
// Tạo một mảng mới kết hợp mảng với bất kỳ mảng bổ sung và / hoặc giá trị nào.

var _ = require("lodash");

var arr = [1, 2, 3];
console.log(_.concat(arr, 4, [5], [[6]]));
// => [1, 2, 3, 4, 5, [6]]
