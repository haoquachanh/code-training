// Hàm loại bỏ giá trị FALSEY
// Cú pháp: _.compact(array)
// create an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.
// tạo một mảng với tất cả các giá trị falsey đã bị loại bỏ. Các giá trị false, null, 0, "", undefined và NaN là falsey.

const _ = require("lodash");

const arr = [0, 1, false, 2, "", 3, null, undefined, NaN];

console.log(_.compact(arr)); // [1, 2, 3]
